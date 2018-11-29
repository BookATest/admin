<template>
  <div class="home">
    <h2>Welcome {{ name }}</h2>

    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  computed: {
    name() {
      return `${this.$store.state.user.get().first_name} ${this.$store.state.user.get().last_name}`;
    },
  },
};
</script>
