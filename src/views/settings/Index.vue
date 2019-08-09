<template>
  <div class="main">
    <!-- Configuration -->
    <div class="configuration">
      <div class="configuration__intro">
        <div>
          <h2>Notifications</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            dictum sem quis aliquet laoreet. Duis blandit luctus nulla vel
            ullamcorper. Suspendisse eu efficitur justo. Quisque mollis in erat
            sit amet rhoncus.
          </p>
        </div>
      </div>

      <div class="configuration__options">
        <form @submit.prevent="onSubmit">
          <fieldset :disabled="submitting">
            <div>
              <label>
                Name
                <input v-model="settings.name" type="text">
              </label>
            </div>

            <div>
              <label>
                Email
                <input v-model="settings.email" type="email">
              </label>
            </div>

            <div>
              <label>
                Phone
                <input v-model="settings.phone" type="tel">
              </label>
            </div>

            <div>
              <label>
                Primary colour
                <input v-model="settings.primary_colour" type="color">
              </label>
            </div>

            <div>
              <label>
                Secondary colour
                <input v-model="settings.secondary_colour" type="color">
              </label>
            </div>

            <div>
              <label>
                Default appointment booking threshold (minutes)
                <input
                  v-model="settings.default_appointment_booking_threshold"
                  type="number"
                >
              </label>
            </div>

            <div>
              <label>
                Default appointment duration (minutes)
                <input
                  v-model="settings.default_appointment_duration"
                  type="number"
                >
              </label>
            </div>

            <button type="submit">{{ submitting ? 'Saving' : 'Save' }}</button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsIndexView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  data() {
    return {
      settings: JSON.parse(JSON.stringify(this.$store.state.settings)),
      submitting: false,
    };
  },

  methods: {
    async onSubmit() {
      this.submitting = true;

      try {
        await this.$http.put('/settings', this.settings);
        this.$store.dispatch('reloadSettings');
      } catch (exception) {
        console.log(exception);
      }

      this.submitting = false;
    },
  },
};
</script>
