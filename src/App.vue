<template>
  <div class="base-layout">

    <bat-loader v-if="$store.state.settings === null"/>

    <template v-else>
      <bat-header/>

      <bat-side-bar :menu="menu"/>

      <div class="base-layout__main">
        <router-view/>
      </div>
    </template>

  </div>
</template>

<style lang="scss">
@import '@/scss/main.scss';
</style>

<script>
import BatLoader from '@/components/Loader.vue';
import BatHeader from '@/components/Header.vue';
import BatSideBar from '@/components/SideBar.vue';

export default {
  name: 'App',

  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | Book A Test',
  },

  components: { BatLoader, BatHeader, BatSideBar },

  computed: {
    /**
     * The sidebar menu items.
     */
    menu() {
      if (this.$store.state.isAuthenticated) {
        return [
          {
            name: 'dashboard',
            icon: 'icon--power',
            to: { name: 'home' },
          },
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
                to: { name: 'users.edit', params: { user: this.$store.state.user.get().id } },
              },
              {
                name: 'calendar',
                to: { name: 'calendar.index' },
              },
              // {
              //   name: 'notifications',
              //   to: { name: 'notifications.index' },
              // },
              {
                name: 'users',
                to: { name: 'users.index' },
              },
              {
                name: 'locations',
                to: { name: 'clinics.index' },
              },
              {
                name: 'audits',
                to: { name: 'audits.index' },
              },
            ],
          },
          {
            name: 'service users',
            icon: 'icon--users',
            to: { name: 'service-users.index' },
          },
          {
            name: 'logout',
            icon: 'icon--cross',
            onClick: () => {
              this.$store.dispatch('logout');
            },
          },
        ];
      }

      // If not authenticated.
      return [
        {
          name: 'login',
          icon: 'icon--users',
          to: { name: 'login' },
        },
      ];
    },
  },

  methods: {
    /**
     * Log the user out.
     */
    onLogout() {
      this.$store.dispatch('logout');
    },

    /**
     * Load the settings from the API.
     */
    loadSettings() {
      this.$store.dispatch('loadSettings');
    },
  },

  created() {
    this.loadSettings();
  },
};
</script>
