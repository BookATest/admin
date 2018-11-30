<template>
  <div class="main">

    <!-- Calendar -->
    <div class="calendar calendar--default">

      <!-- Calendar - Main (Left) -->
      <div class="calendar__main js--calendar__main">
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
          <bat-table/>

        </div>
      </div>

      <!-- Calendar - Sidebar (Right) -->
      <div class="calendar__sidebar calendar__sidebar calendar__sidebar--active js--calendar-sidebar">
        <bat-side-bar/>
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

  data() {
    return {
      search: '',
      clinicId: '',
      userId: '',
      date: this.$moment().startOf('isoWeek').format('YYYY-MM-DD'),
    };
  },
};
</script>
