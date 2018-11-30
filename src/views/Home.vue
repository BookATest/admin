<template>
  <div class="home">
    <h2>Welcome {{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'home',

  metaInfo: {
    title: 'Home',
  },

  computed: {
    name() {
      return `${this.$store.state.user.get().first_name} ${this.$store.state.user.get().last_name}`;
    },
  },
};
</script>
