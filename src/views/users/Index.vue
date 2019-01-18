<template>
  <div class="main">

    <!-- Users -->
    <div class="users">

      <div class="users__intro">
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum sem quis aliquet laoreet. Duis blandit luctus nulla vel ullamcorper. Suspendisse eu efficitur justo. Quisque mollis in erat sit amet rhoncus.</p>
        </div>
      </div>

      <div class="users__search">

        <div class="form__search">
          <label for="search">Search</label>
          <div>
            <input type="text" id="search" name="search">
            <button><i class="icon icon--arrowright"></i></button>
          </div>
        </div>

        <bat-loader v-if="loadingUsers"/>
        <template v-else>
          <button
            v-for="user in users"
            :key="user.id"
            class="button button--user button--user--edit"
            onclick="location.href='../settings/user--edit.html'"
          >
            <img :src="apiUrl(`/users/${user.id}/profile-picture.jpg`)">
            <span class="name">{{ user.first_name }} {{ user.last_name }}</span>
            <span class="role">{{ highestUserRole(user) }}</span>
            <span class="edit">Edit <i class="icon icon--edit"></i></span>
          </button>
        </template>

      </div>

    </div>

  </div>
</template>

<script>
import BatLoader from '@/components/Loader.vue';

export default {
  name: 'UsersIndexView',

  components: { BatLoader },

  data() {
    return {
      loadingClinics: false,
      clinics: [],
      loadingUsers: false,
      users: [],
      usersPage: 1,
      totalPages: 1,
    };
  },

  methods: {
    /**
     * Fetch all of the clinics.
     */
    async fetchClinics() {
      this.loadingClinics = true;
      this.clinics = await this.fetchAll('/clinics');
      this.loadingClinics = false;
    },

    // Fetch the users.
    async fetchUsers() {
      this.loadingUsers = true;
      const { data } = await this.$http.get('/users', { params: { page: this.page } });
      this.users = data.data;
      this.totalPages = data.meta.last_page;
      this.loadingUsers = false;
    },

    /**
     * Get the highest user role.
     * @param {Object}
     * @returns {String}
     */
    highestUserRole(user) {
      const isOrganisationAdmin = user.roles.find(role => role.role === 'organisation_admin');
      if (isOrganisationAdmin) {
        return 'Organisation admin';
      }

      const isClinicsAdmin = user.roles.find(role => role.role === 'clinic_admin');
      if (isClinicsAdmin) {
        return 'Clinic admin';
      }

      const isCommunityWorker = user.roles.find(role => role.role === 'community_worker');
      if (isCommunityWorker) {
        return 'Community worker';
      }

      return 'Backend user';
    },
  },

  created() {
    this.fetchClinics();
    this.fetchUsers();
  },
};
</script>
