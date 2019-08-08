<template>
  <div class="main">

    <!-- Service Users -->
    <div class="service-users">

      <!-- Filter -->
      <div class="service-users__filter">
        <form @submit.prevent="fetchServiceUsers" class="form">
          <div>
            <div class="form__search">
              <label for="search">Search</label>

              <div>
                <input v-model="filters.name" type="text" id="search" />

                <button type="submit">
                  <i class="icon icon--arrowright" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <!-- Table -->
      <bat-loader v-if="loadingServiceUsers"/>

      <div v-else class="service-users__table">
        <table class="table table--4col" cellpadding="16">
          <thead>
            <tr>
              <th><span>Name</span></th>
              <th><span>Phone</span></th>
              <th><span>Email</span></th>
              <th><span>&nbsp;</span></th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(serviceUser, index) in serviceUsers"
              :key="`service-users::index::serviceUser::${index}`"
            >
              <td><span>{{ serviceUser.name }}</span></td>

              <td><span>{{ serviceUser.phone }}</span></td>

              <td><span>{{ serviceUser.email || '-' }}</span></td>

              <td>
                <router-link
                  tag="button"
                  :to="{ name: 'service-users.show', params: { service_user: serviceUser.id } }"
                  class="button button__primary button__primary--b"
                >
                  <span>View</span>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>

        <button
          @click="onPrevious"
          type="button"
          :disabled="currentPage <= 1"
        >
          Previous
        </button>

        <button
          @click="onNext"
          type="button"
          :disabled="currentPage >= totalPages"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BatLoader from '@/components/Loader.vue';

export default {
  name: 'ServiceUsersIndexView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: { BatLoader },

  data() {
    return {
      loadingServiceUsers: false,
      serviceUsers: [],
      currentPage: 1,
      totalPages: 1,
      filters: {
        name: '',
      },
    };
  },

  methods: {
    // Fetch the service users.
    async fetchServiceUsers() {
      this.loadingServiceUsers = true;

      const params = {
        page: this.currentPage,
      };

      if (this.filters.name !== '') {
        params['filter[name]'] = this.filters.name;
      }

      const {
        data: {
          data: serviceUsers,
          meta: { last_page: lastPage },
        },
      } = await this.$http.get('/service-users', { params });
      this.serviceUsers = serviceUsers;
      this.totalPages = lastPage;

      this.loadingServiceUsers = false;
    },

    /**
     * Pagination.
     */
    onPrevious() {
      this.currentPage -= 1;
      this.fetchServiceUsers();
    },

    /**
     * Pagination.
     */
    onNext() {
      this.currentPage += 1;
      this.fetchServiceUsers();
    },
  },

  created() {
    this.fetchServiceUsers();
  },
};
</script>
