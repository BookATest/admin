<template>
  <bat-base-layout-main-container>
    <form @submit.prevent="onSubmit">
      <bat-button type="submit" primary>
        Login
      </bat-button>
    </form>
  </bat-base-layout-main-container>
</template>

<script>
import BatBaseLayoutMainContainer from '@/components/BaseLayoutMainContainer.vue';
import BatButton from '@/components/Button.vue';

export default {
  name: 'LoginView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: { BatBaseLayoutMainContainer, BatButton },

  methods: {
    onSubmit() {
      this.$store.dispatch('authenticate');
    },
  },
};
</script>
