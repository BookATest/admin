<template>
  <div class="home">
    <bat-body>Dashboard</bat-body>
  </div>
</template>

<script>
import BatBody from '@/components/Body.vue';

export default {
  name: 'home',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: { BatBody },
};
</script>
