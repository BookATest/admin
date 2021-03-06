<template>
  <div class="main">

    <!-- Calendar -->
    <div class="calendar" :class="{ 'calendar--default': !editMode, 'calendar--edit': editMode }">

      <!-- Calendar - Main (Left) -->
      <div class="calendar__main js--calendar__main" :class="{ 'calendar__main--w-sidebar': appointment !== null }">
        <div class="main">

          <!-- Calendar - Search -->
          <bat-search
            :clinic-id.sync="clinicId"
            :user-id.sync="userId"
            :edit-mode="editMode"
          />

          <!-- Calendar - Controls -->
          <bat-controls :date.sync="date"/>

          <!-- Calendar - Table -->
          <bat-table
            ref="table"
            v-if="clinicId"
            v-model="appointment"
            :editMode.sync="editMode"
            :clinic-id="clinicId"
            :userId.sync="userId"
            :date="date"
          />
          <div v-else class="table">
            <bat-body>Select a clinic to view appointments.</bat-body>
          </div>

        </div>
      </div>

      <!-- Calendar - Sidebar (Right) -->
      <div class="calendar__sidebar calendar__sidebar calendar__sidebar--active js--calendar-sidebar">
        <bat-side-bar
          v-if="appointment"
          @close="onCloseSideBar"
          @delete="onDelete"
          @cancel="onCancel"
          @create="onCreate"
          :appointment="appointment"
          :edit-mode="editMode"
        />
      </div>

    </div>

  </div>
</template>

<script>
import BatBody from '@/components/Body.vue';
import BatControls from '@/views/appointments/components/Controls.vue';
import BatSearch from '@/views/appointments/components/Search.vue';
import BatSideBar from '@/views/appointments/components/SideBar.vue';
import BatTable from '@/views/appointments/components/Table.vue';

export default {
  name: 'AppointmentsIndexView',

  components: {
    BatBody, BatControls, BatSearch, BatSideBar, BatTable,
  },

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  data() {
    return {
      editMode: false,
      clinicId: '',
      userId: '',
      date: this.$moment().startOf('isoWeek').format('YYYY-MM-DD'),
      appointment: null,
    };
  },

  watch: {
    editMode() {
      this.appointment = null;
    },

    clinicId() {
      this.appointment = null;
    },

    userId() {
      this.appointment = null;
    },

    date() {
      this.appointment = null;
    },
  },

  methods: {
    /**
     * Logic to execute when the side bar is closed.
     */
    onCloseSideBar() {
      this.appointment = null;
    },

    /**
     * Logic for when an appointment has been deleted.
     */
    onDelete() {
      this.appointment = null;
      this.$refs.table.fetchAppointments();
    },

    /**
     * Logic for when an appointment has been cancelled.
     */
    async onCancel() {
      await this.$refs.table.fetchAppointments();
      this.appointment = this.$refs.table.appointments.find(appointment => appointment.user_id === this.$store.state.user.get().id && this.$moment(appointment.start_at).isSame(this.$moment(this.appointment.start_at)));
    },

    /**
     * Logic for when an appointment has been created.
     */
    async onCreate() {
      await this.$refs.table.fetchAppointments();
      this.appointment = this.$refs.table.appointments.find(appointment => appointment.user_id === this.$store.state.user.get().id && this.$moment(appointment.start_at).isSame(this.$moment(this.appointment.start_at)));
    },
  },
};
</script>
