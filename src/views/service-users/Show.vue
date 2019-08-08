<template>
  <div class="main">
    <!-- Service Users -->
    <div class="service-users">
      <!-- Action-->
      <div class="service-users__action">
        <router-link
          tag="button"
          :to="{ name: 'service-users.index' }"
          class="button button__primary button__primary--b"
        >
          <span>Back</span>
        </router-link>
      </div>

      <bat-loader v-if="loading" />

      <template v-else>
        <!-- Data -->
        <div class="service-users__data">
          <div>
            <ul>
              <li><span>Name</span><span>{{ serviceUser.name }}</span></li>
              <li><span>Phone</span><span>{{ serviceUser.phone }}</span></li>
              <li><span>Email</span><span>{{ serviceUser.email || '-' }}</span></li>
            </ul>
          </div>

          <div>
            <div class="card card__stats--patient">
              <span><strong>{{ dnaRate }}%</strong>DNA rate</span>
            </div>
          </div>
        </div>

        <!-- Table -->
        <div class="service-users__table">
          <table class="table table--3col" cellpadding="16">
            <thead>
              <tr>
                <th><span>Date</span></th>
                <th><span>Location</span></th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(appointment, index) in appointments"
                :key="`service-users::show::appointment::${index}`"
              >
                <td><span>{{ appointment.start_at | moment('DD/MM/YYYY \\a\\t hh:mma') }}</span></td>
                <td><span>{{ appointment.clinic.name }}</span></td>
              </tr>

              <tr v-if="appointments.length === 0">
                <td colspan="2">No appointments.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import BatLoader from '@/components/Loader.vue';

export default {
  name: 'ServiceUsersShowView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: { BatLoader },

  data() {
    return {
      loadingServiceUser: false,
      serviceUser: null,
      loadingAppointments: false,
      appointments: [],
    };
  },

  computed: {
    loading() {
      return this.loadingServiceUser || this.loadingAppointments;
    },

    dnaRate() {
      const allAppointments = this.appointments.length;
      const unattendedAppointments = this.appointments.filter(appointment => appointment.did_not_attend === true).length;

      if (allAppointments === 0) {
        return 0;
      }

      return Math.round((unattendedAppointments / allAppointments) * 100);
    },
  },

  methods: {
    // Fetch the service user.
    async fetchServiceUser() {
      this.loadingServiceUser = true;

      const {
        data: { data: serviceUser },
      } = await this.$http.get(`/service-users/${this.$route.params.service_user}`);

      this.serviceUser = serviceUser;

      this.loadingServiceUser = false;
    },

    // Fetch the appointments for the service user.
    async fetchAppointments() {
      this.loadingAppointments = true;

      let appointments = await this.fetchAll('/appointments', {
        'filter[service_user_id]': this.serviceUser.id,
      });
      appointments = await this.assignClinics(appointments);
      this.appointments = appointments;

      this.loadingAppointments = false;
    },

    // Fetch the clinics for the appointments.
    async assignClinics(appointments) {
      const clinicIds = [];

      appointments.forEach((appointment) => {
        if (!clinicIds.includes(appointment.clinic_id)) {
          clinicIds.push(appointment.clinic_id);
        }
      });

      const clinics = await this.fetchAll('/clinics', {
        'filter[id]': clinicIds.join(','),
      });

      return appointments.map((appointment) => {
        appointment.clinic = clinics.find(clinic => clinic.id === appointment.clinic_id);

        return appointment;
      });
    },
  },

  async created() {
    await this.fetchServiceUser();
    await this.fetchAppointments();
  },
};
</script>
