<template>
  <bat-body flush>
    Loading<span v-for="(dot, index) in dots" :key="index">.</span>
  </bat-body>
</template>

<script>
import BatBody from '@/components/Body.vue';

export default {
  name: 'Loader',

  components: { BatBody },

  data() {
    return {
      dots: 0,
      interval: null,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.dots === 3) {
        this.dots = 0;
      } else {
        this.dots += 1;
      }
    }, 300);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>
