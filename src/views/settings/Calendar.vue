<template>
  <div class="main">

    <!-- Calendar -->
    <div class="settings-calendar">

      <div class="settings-calendar__my-calendar-feed">
        <div>
          <h2>My calender feed</h2>
          <p>
            Link to iCal
            <button
              class="button button__inline button__inline--focus"
              v-clipboard:copy="myCalendarFeed"
            >
              <span class="settings-calendar__feed-url">{{ myCalendarFeed }}</span><i class="icon icon--copy"></i>
            </button>
          </p>
          <p>
            This feed lists all of your own appointments for the next three months.
            <br>
            Click the link above to copy it to your clipboard.
          </p>
        </div>
      </div>

      <div class="settings-calendar__all-appointments-calendar">
        <div>
          <h2>All appointments calender</h2>
          <p>
            Link to iCal
            <button
              class="button button__inline button__inline--focus"
              v-clipboard:copy="allCalendarFeed"
            >
              <span class="settings-calendar__feed-url">{{ allCalendarFeed }}</span><i class="icon icon--copy"></i>
            </button>
          </p>
          <p>
            This feed lists all of the appointments for clinics you have access to.
            <br>
            Click the link above to copy it to your clipboard.
          </p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'CalendarView',

  computed: {
    /**
     * Get the URL for the calendar feed with only the users appointments.
     */
    myCalendarFeed() {
      const params = [
        ['calendar_feed_token', this.$store.state.user.get().calendar_feed_token].join('='),
        ['filter[user_id]', this.$store.state.user.get().id].join('='),
      ];

      return this.apiUrl(`/appointments.ics?${params.join('&')}`);
    },

    /**
     * Get the URL for the calendar feed including all clinics the user has access to.
     */
    allCalendarFeed() {
      const params = [
        ['calendar_feed_token', this.$store.state.user.get().calendar_feed_token].join('='),
      ];

      return this.apiUrl(`/appointments.ics?${params.join('&')}`);
    },
  },
};
</script>
