<template>
  <div>
    <h1>Logout</h1>

    <p>You have been logged out. Click below to login:</p>

    <form @submit.prevent="onSubmit">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LogoutView',

  metaInfo: {
    title: 'Logout',
  },

  methods: {
    onSubmit() {
      this.$store.dispatch('authenticate');
    },
  },
};
</script>
