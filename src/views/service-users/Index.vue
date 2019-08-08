<template>
  <div class="main">

    <!-- Service Users -->
    <div class="service-users">

      <!-- Filter -->
      <div class="service-users__filter">
        <form class="form">
          <div>
            <div class="form__search">
              <label for="search">Search</label>

              <div>
                <input type="text" id="search" />

                <button>
                  <i class="icon icon--arrowright" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <div class="form__drop-down">
              <label for="dropdown">Filter by</label>

              <div>
                <select id="dropdown">
                  <option>Unique ID</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </div>
            </div>

            <div class="form__drop-down">
              <div>
                <select id="dropdown" name="dropdown">
                  <option>Name</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </div>
            </div>

            <div class="form__drop-down">
              <div>
                <select id="dropdown" name="dropdown">
                  <option>Last Appointment</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>

      <!-- Table -->
      <div class="service-users__table">
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
            <bat-loader v-if="loadingServiceUsers"/>

            <template v-else>
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
            </template>
          </tbody>
        </table>
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
    };
  },

  methods: {
    // Fetch the service users.
    async fetchServiceUsers() {
      this.loadingServiceUsers = true;

      const params = {
        page: this.currentPage,
      };

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
