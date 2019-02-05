<template>
  <button
    class="button"
    :class="{
      'button__primary': primary,
      'button__primary--a': primary,
      'button__secondary': secondary,
      'button__secondary--a': secondary,
    }"
    @click="onClick"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    primary: {
      type: Boolean,
      requred: false,
      default: false,
    },

    secondary: {
      type: Boolean,
      requred: false,
      default: false,
    },

    to: {
      requred: false,
    },
  },

  methods: {
    /**
     * Proxy the click event.
     */
    onClick(event) {
      if (this.to) {
        this.$router.push(this.to);
      }

      this.$emit('click', event);
    },
  },
};
</script>
