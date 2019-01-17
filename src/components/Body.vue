<template>
  <p class="body" :class="{
    'body--flush': flush,
  }">
    <slot/>
  </p>
</template>

<script>
export default {
  name: 'Body',

  props: {
    flush: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
};
</script>
