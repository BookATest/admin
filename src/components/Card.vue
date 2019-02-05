<template>
  <div class="card" :class="classes">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    warning: {
      required: false,
      type: Boolean,
    },
  },

  computed: {
    classes() {
      return {
        'card--warning': this.warning,
      };
    },
  },
};
</script>
