<template>
  <div class="main">
    <!-- Audit Logging -->
    <div class="audit-logging">
      <!-- Table -->
      <bat-loader v-if="loadingAudits"/>

      <div v-else class="audit-logging__table">
        <table class="table table--2col" cellpadding="16">
          <thead>
            <tr>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(audit, index) in audits"
              :key="`audits::index::audit::${index}`"
            >
              <td>
                <span>{{ audit.description || audit.action }} on {{ audit.created_at | moment('Do MMMM HH:mm') }}</span>
              </td>
              <td>
                <router-link
                  tag="button"
                  :to="{ name: 'audits.show', params: { audit: audit.id } }"
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
  name: 'AuditsIndexView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: {
    BatLoader,
  },

  data() {
    return {
      loadingAudits: false,
      audits: [],
      currentPage: 1,
      totalPages: 1,
    };
  },

  methods: {
    // Fetch the audits.
    async fetchAudits() {
      this.loadingAudits = true;

      const params = {
        page: this.currentPage,
      };

      const {
        data: {
          data: audits,
          meta: { last_page: lastPage },
        },
      } = await this.$http.get('/audits', { params });
      this.audits = audits;
      this.totalPages = lastPage;

      this.loadingAudits = false;
    },

    /**
     * Pagination.
     */
    onPrevious() {
      this.currentPage -= 1;
      this.fetchAudits();
    },

    /**
     * Pagination.
     */
    onNext() {
      this.currentPage += 1;
      this.fetchAudits();
    },
  },

  created() {
    this.fetchAudits();
  },
};
</script>
