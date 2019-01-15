<template>
  <div class="base-layout__header base-layout__header--default">
      <div class="header">

        <!-- Header -->
        <div class="header__sidebar">
          <router-link :to="{ name: 'home' }">
            <img src="@/assets/images/logos/logo-yorkshire-masmac.png" alt="Book a Test"/>
          </router-link>
        </div>
        <div class="header__main">
          <div class="main">
            <div class="main__title">
              <h1>Yorkshire MESMAC</h1>
              <h2>Appointments</h2>
            </div>
            <div v-if="$store.state.isAuthenticated" class="main__logout">
              <button class="button button__logout" @click="onLogout">
                <img class="profile-picture" :src="apiUrl(`/users/${$store.state.user.get().id}/profile-picture.jpg`)">
                <span class="name">{{ $store.state.user.fullName() }}</span>
                <span class="role">{{ highestRole }}</span>
                <span class="logout"><i class="icon icon--power"></i> Logout</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',

  computed: {
    highestRole() {
      if (!this.$store.state.isAuthenticated) {
        return null;
      }

      if (this.$store.state.user.isOrganisationAdmin()) {
        return 'Organisation admin';
      }

      if (this.$store.state.user.isClinicAdmin()) {
        return 'Clinic admin';
      }

      if (this.$store.state.user.isCommunityWorker()) {
        return 'Community worker';
      }

      return 'Backend user';
    },
  },

  methods: {
    /**
     * Log the user out.
     */
    onLogout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
