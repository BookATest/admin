<template>
  <div class="main">

    <!-- Calendar -->
    <div class="calendar" :class="{ 'calendar--default': !editMode, 'calendar--edit': editMode }">

      <!-- Calendar - Main (Left) -->
      <div class="calendar__main js--calendar__main" :class="{ 'calendar__main--w-sidebar': appointment !== null }">
        <div class="main">

          <!-- Calendar - Search -->
          <bat-search
            :search.sync="search"
            :clinic-id.sync="clinicId"
            :user-id.sync="userId"
          />

          <!-- Calendar - Controls -->
          <bat-controls :date.sync="date"/>

          <!-- Calendar - Table -->
          <bat-table
            v-if="clinicId"
            v-model="appointment"
            :editMode.sync="editMode"
            :clinic-id="clinicId"
            :user-id="userId"
            :date="date"
          />
          <p v-else>Select a clinic to view appointments.</p>

        </div>
      </div>

      <!-- Calendar - Sidebar (Right) -->
      <div class="calendar__sidebar calendar__sidebar calendar__sidebar--active js--calendar-sidebar">
        <bat-side-bar
          v-if="appointment"
          @close="onCloseSideBar"
          :appointment="appointment"
          :edit-mode="editMode"
        />
      </div>

    </div>

  </div>
</template>

<script>
import BatControls from '@/views/appointments/components/Controls.vue';
import BatSearch from '@/views/appointments/components/Search.vue';
import BatSideBar from '@/views/appointments/components/SideBar.vue';
import BatTable from '@/views/appointments/components/Table.vue';

export default {
  name: 'AppointmentsIndex',

  components: {
    BatControls, BatSearch, BatSideBar, BatTable,
  },

  metaInfo: {
    title: 'Appointments',
  },

  data() {
    return {
      editMode: false,
      search: '',
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
  },
};
</script>
