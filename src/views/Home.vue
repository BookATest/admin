<template>
  <div>
    <bat-body>Dashboard</bat-body>
  </div>
</template>

<script>
import BatBody from '@/components/Body.vue';

export default {
  name: 'HomeView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: { BatBody },
};
</script>
