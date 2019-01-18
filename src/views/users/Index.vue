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

        <div class="form__drop-down">
          <label for="dropdown"><span>Location</span></label>
          <div>
            <select v-model="clinicId">
              <option value="">All clinics</option>
              <option v-for="clinic in clinics" :key="clinic.id" :value="clinic.id">{{ clinic.name }}</option>
            </select>
          </div>
          <br>
          &nbsp;
        </div>

        <bat-loader v-if="loadingUsers"/>
        <template v-else>
          <router-link
            tag="button"
            v-for="user in users"
            :key="user.id"
            :to="{ name: 'users.show', params: { user: user.id } }"
            class="button button--user button--user--edit"
          >
            <img :src="apiUrl(`/users/${user.id}/profile-picture.jpg`)">
            <span class="name">{{ user.first_name }} {{ user.last_name }}</span>
            <span class="role">{{ highestUserRole(user) }}</span>
            <span class="edit">Edit <i class="icon icon--edit"></i></span>
          </router-link>

          <router-link
            tag="button"
            :to="{ name: 'users.create' }"
            class="button button--user button--user--add"
          >
            <span class="add">Add <i class="icon icon--pluscircle"></i></span>
          </router-link>

          <div class="users__pagination">
            <bat-body>Showing page {{ currentPage }} of {{ totalPages }}</bat-body>

            <div>
              <bat-button
                v-if="currentPage > 1"
                @click="onPrevious"
                primary
                type="button"
              >
                Previous
              </bat-button>
              <!---->&nbsp;<!---->
              <bat-button
                v-if="currentPage < totalPages"
                @click="onNext"
                primary
                type="button"
              >
                Next
              </bat-button>
            </div>
          </div>
        </template>

      </div>

    </div>

  </div>
</template>

<script>
import BatLoader from '@/components/Loader.vue';
import BatButton from '@/components/Button.vue';
import BatBody from '@/components/Body.vue';

export default {
  name: 'UsersIndexView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: { BatLoader, BatButton, BatBody },

  data() {
    return {
      loadingClinics: false,
      clinics: [],
      loadingUsers: false,
      users: [],
      currentPage: 1,
      totalPages: 1,
      clinicId: '',
    };
  },

  watch: {
    clinicId() {
      this.currentPage = 1;
      this.totalPages = 1;
      this.fetchUsers();
    },
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

      const params = {
        page: this.currentPage,
      };

      if (this.clinicId !== '') {
        params['filter[clinic_id]'] = this.clinicId;
      }

      const { data } = await this.$http.get('/users', { params });
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

    /**
     * Pagination.
     */
    onPrevious() {
      this.currentPage -= 1;
      this.fetchUsers();
    },

    /**
     * Pagination.
     */
    onNext() {
      this.currentPage += 1;
      this.fetchUsers();
    },
  },

  created() {
    this.fetchClinics();
    this.fetchUsers();
  },
};
</script>
