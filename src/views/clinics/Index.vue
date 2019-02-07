<template>
  <div class="main">

    <!-- Locations -->
    <div class="locations">

      <div class="locations__intro">
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum sem quis aliquet laoreet. Duis blandit luctus nulla vel ullamcorper. Suspendisse eu efficitur justo. Quisque mollis in erat sit amet rhoncus.</p>
        </div>
      </div>

      <div class="locations__search">

        <form @submit.prevent="onFilter" class="form__search">
          <label for="filters[name]">Search</label>
          <div>
            <input v-model="filters.name" type="text" id="filters[name]">
            <button type="submit"><i class="icon icon--arrowright"></i></button>
          </div>
        </form>

        <bat-loader v-if="loadingClinics"/>
        <template v-else>
          <router-link
            tag="button"
            v-for="clinic in clinics"
            :key="clinic.id"
            :to="{ name: 'clinics.edit', params: { clinic: clinic.id } }"
            class="button button--location button--location--edit button--location--no-avatar"
          >
            <span class="name">{{ clinic.name }}</span>
            <span class="role">{{ clinic.address_line_1 }}, {{ clinic.city }}</span>
            <span class="edit">Edit <i class="icon icon--edit"></i></span>
          </router-link>

          <router-link
            tag="button"
            :to="{ name: 'clinics.create' }"
            class="button button--location button--location--add"
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
  name: 'ClinicsIndexView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: { BatLoader, BatButton, BatBody },

  data() {
    return {
      clinics: [],
      loadingClinics: false,
      currentPage: 1,
      totalPages: 1,
      filters: {
        name: '',
      },
    };
  },

  methods: {
    /**
     * Fetch the clinics.
     */
    async fetchClinics() {
      this.loadingClinics = true;

      const params = {
        page: this.currentPage,
      };

      if (this.filters.name !== '') {
        params['filter[name]'] = this.filters.name;
      }

      const { data } = await this.$http.get('/clinics', { params });
      this.clinics = data.data;
      this.totalPages = data.meta.last_page;

      this.loadingClinics = false;
    },

    /**
     * Pagination.
     */
    onPrevious() {
      this.currentPage -= 1;
      this.fetchClinics();
    },

    /**
     * Pagination.
     */
    onNext() {
      this.currentPage += 1;
      this.fetchClinics();
    },

    /**
     * Filter.
     */
    onFilter() {
      this.currentPage = 1;
      this.fetchClinics();
    },
  },

  created() {
    this.fetchClinics();
  },
};
</script>
