<template>
  <div class="search">

    <form class="form">

      <!-- Location -->
      <div class="form__drop-down">
        <label for="dropdown"><span>Location</span></label>
        <div>
          <select
            :value="clinicId"
            @input="$emit('update:clinicId', $event.target.value)"
          >
            <option value="">Select clinic...</option>
            <option v-for="clinic in clinics" :key="clinic.id" :value="clinic.id">{{ clinic.name }}</option>
          </select>
        </div>
      </div>

      <!-- Filter -->
      <div
        class="form__drop-down"
        :class="{ 'form__drop-down--disabled': clinicId === '' || editMode }"
      >
        <label for="dropdown">Filter by</label>
        <div>
          <select
            :value="userId"
            @input="$emit('update:userId', $event.target.value)"
            :disabled="clinicId === '' || editMode"
          >
            <option value="">All users</option>
            <option v-for="user in users" :key="user.id" :value="user.id">{{ user | fullName }}</option>
          </select>
        </div>
      </div>

    </form>

  </div>
</template>

<script>
export default {
  name: 'Search',

  props: {
    clinicId: {
      required: true,
      type: String,
    },

    userId: {
      required: true,
      type: String,
    },

    editMode: {
      required: true,
      type: Boolean,
    },
  },

  data() {
    return {
      loadingClinics: false,
      loadingUsers: false,
      clinics: [],
      users: [],
    };
  },

  methods: {
    async fetchClinics() {
      this.loadingClinics = true;

      const params = {};

      // Filter clinic ID's to ones user is a community worker for.
      if (!this.$store.state.user.isOrganisationAdmin()) {
        params['filter[id]'] = this.$store.state.user.clinicIds().join(',');
      }

      this.clinics = await this.fetchAll('/clinics', params);

      this.loadingClinics = false;
    },

    async fetchUsers() {
      if (this.clinicId === '') {
        this.users = [];
        return;
      }

      this.loadingUsers = true;

      this.users = await this.fetchAll('/users', {
        'filter[clinic_id]': this.clinicId,
      });

      this.loadingUsers = false;
    },
  },

  filters: {
    fullName(user) {
      return `${user.first_name} ${user.last_name}`;
    },
  },

  watch: {
    clinicId() {
      this.$emit('update:userId', '');
      this.fetchUsers();
    },
  },

  created() {
    this.fetchClinics();
    this.fetchUsers();
  },
};
</script>
