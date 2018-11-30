<template>
  <div class="search">

    <!-- Search -->
    <form class="form">
      <div class="form__search">
        <label for="search">Search</label>
        <div>
          <input
            :value="search"
            @input="$emit('update:search', $event.target.value)"
            type="text"
            id="search"
            name="search"
          >
          <button type="submit"><i class="icon icon--arrowright"></i></button>
        </div>
      </div>
    </form>

    <form class="form">

      <!-- Location -->
      <div class="form__drop-down">
        <label for="dropdown"><span>location</span></label>
        <div>
          <select
            :value="clinicId"
            @input="$emit('update:clinicId', $event.target.value)"
          >
            <option :value="null">All</option>
            <option v-for="clinic in clinics" :key="clinic.id" :value="clinic.id">{{ clinic.name }}</option>
          </select>
        </div>
      </div>

      <!-- Filter -->
      <div class="form__drop-down">
        <label for="dropdown">Filter by</label>
        <div>
          <select
            :value="userId"
            @input="$emit('update:userId', $event.target.value)"
          >
            <option :value="null">All</option>
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
    search: {
      required: true,
      type: String,
    },

    clinicId: {
      required: true,
      type: String,
    },

    userId: {
      required: true,
      type: String,
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
      this.loadingUsers = true;

      const params = {};

      // Only filter users by ID when a clinic has been selected.
      if (this.clinicId !== '') {
        params['filter[clinic_id]'] = this.clinicId;
      }

      this.users = await this.fetchAll('/users', params);

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
