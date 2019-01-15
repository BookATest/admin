<template>
  <div class="base-layout">

    <bat-header/>

    <bat-side-bar v-if="$store.state.isAuthenticated" :menu="menu"/>

    <div class="base-layout__main">
      <router-view/>
    </div>

  </div>
</template>

<style lang="scss">
@import '@/scss/main.scss';
</style>

<script>
import BatHeader from '@/components/Header.vue';
import BatSideBar from '@/components/SideBar.vue';

export default {
  name: 'App',

  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | Book A Test',
  },

  components: { BatHeader, BatSideBar },

  data() {
    return {
      menu: [
        {
          name: 'appointments',
          icon: 'icon--appointments',
          to: { name: 'appointments.index' },
        },
        {
          name: 'reporting',
          icon: 'icon--reports',
          to: { name: 'reports.index' },
        },
        {
          name: 'settings',
          icon: 'icon--settings',
          to: { name: 'settings.index' },
          items: [
            {
              name: 'my profile',
              to: { name: 'settings.my-profile' },
            },
            {
              name: 'calendar',
              to: { name: 'settings.calendar' },
            },
            {
              name: 'notifications',
              to: { name: 'settings.notifications' },
            },
            {
              name: 'users',
              to: { name: 'settings.users' },
            },
            {
              name: 'location',
              to: { name: 'settings.location' },
            },
            {
              name: 'branding',
              to: { name: 'settings.branding' },
            },
            {
              name: 'configuration',
              to: { name: 'settings.configuration' },
            },
            {
              name: 'audits',
              to: { name: 'settings.audits' },
            },
          ],
        },
        {
          name: 'service users',
          icon: 'icon--users',
          to: { name: 'service-users.index' },
        },
      ],
    };
  },

  methods: {
    onLogout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
