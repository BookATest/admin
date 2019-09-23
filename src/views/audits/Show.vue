<template>
  <div class="main">
    <div class="service-users__action">
      <router-link
        tag="button"
        :to="{ name: 'audits.index' }"
        class="button button__primary button__primary--b"
      >
        <span>Back</span>
      </router-link>
    </div>

    <bat-loader v-if="loadingAudit" />

    <dl v-else>
      <dt>User</dt>
      <dd>
        <bat-loader v-if="loadingAuditable" />
        <template v-else>{{ auditable || '-' }}</template>
      </dd>

      <dt>Client</dt>
      <dd>{{ audit.client || '-' }}</dd>

      <dt>Action</dt>
      <dd>{{ audit.action }}</dd>

      <dt>Description</dt>
      <dd>{{ audit.description || '-' }}</dd>

      <dt>IP Address</dt>
      <dd>{{ audit.ip_address }}</dd>

      <dt>User Agent</dt>
      <dd>{{ audit.user_agent }}</dd>

      <dt>Occured on</dt>
      <dd>{{ audit.created_at | moment('Do MMMM HH:mm') }}</dd>
    </dl>
  </div>
</template>

<script>
import BatLoader from '@/components/Loader.vue';

export default {
  name: 'AuditsShowView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: { BatLoader },

  data() {
    return {
      loadingAudit: false,
      audit: null,
      loadingAuditable: false,
      auditable: null,
    };
  },

  methods: {
    // Fetch the audit.
    async fetchAudit() {
      this.loadingAudit = true;

      const {
        data: { data: audit },
      } = await this.$http.get(`/audits/${this.$route.params.audit}`);

      this.audit = audit;

      this.loadingAudit = false;
    },

    // Fetch auditable.
    async fetchAuditable() {
      this.loadingAuditable = true;

      let resource = null;

      switch (this.audit.auditable_type) {
        case 'users':
          resource = 'users';
          break;
        case 'service_users':
          resource = 'service-users';
          break;
        default:
          this.loadingAuditable = false;
          return;
      }

      const {
        data: { data: auditable },
      } = await this.$http.get(`/${resource}/${this.audit.auditable_id}`);

      switch (this.audit.auditable_type) {
        case 'users':
          this.auditable = `${auditable.first_name} ${auditable.last_name}`;
          break;
        case 'service_users':
          this.auditable = auditable.name;
          break;
        default:
          break;
      }

      this.loadingAuditable = false;
    },
  },

  async created() {
    await this.fetchAudit();
    await this.fetchAuditable();
  },
};
</script>
