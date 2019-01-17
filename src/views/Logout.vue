<template>
  <bat-base-layout-main-container>
    <bat-body>You have been logged out. Click below to login:</bat-body>

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
import BatBody from '@/components/Body.vue';

export default {
  name: 'LogoutView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: { BatBaseLayoutMainContainer, BatButton, BatBody },

  methods: {
    onSubmit() {
      this.$store.dispatch('authenticate');
    },
  },
};
</script>
