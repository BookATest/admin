<template>
  <div class="main">

    <!-- Calendar -->
    <div class="calendar calendar--default">

      <!-- Calendar - Main (Left) -->
      <div class="calendar__main js--calendar__main">
        <div class="main">

          <!-- Calendar - Search -->
          <bat-search/>

          <!-- Calendar - Controls -->
          <bat-controls/>

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
};
</script>
