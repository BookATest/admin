<template>
  <div>
    <h1>Login</h1>

    <form @submit.prevent="onSubmit">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginView',

  methods: {
    onSubmit() {
      this.$store.dispatch('authenticate');
    },
  },
};
</script>
