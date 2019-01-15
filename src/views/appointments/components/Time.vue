<template>
  <div>
    <span class="time time--a"><slot/></span>
    <span class="time time--b">{{ meridiem }}</span>
  </div>
</template>

<script>
export default {
  name: 'Time',

  props: {
    meridiem: {
      required: true,
      type: String,
    },
  },
};
</script>
