<template>
  <div class="main">
    <!-- Configuration -->
    <div class="configuration">
      <div class="configuration__intro">
        <div>
          <h2>Settings</h2>
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
            <label>
              Name
              <input v-model="settings.name" type="text">
            </label>

            <label>
              Email
              <input v-model="settings.email" type="email">
            </label>

            <label>
              Phone
              <input v-model="settings.phone" type="tel">
            </label>

            <label>
              Primary colour
              <input v-model="settings.primary_colour" type="color">
            </label>

            <label>
              Secondary colour
              <input v-model="settings.secondary_colour" type="color">
            </label>

            <label>
              Default appointment booking threshold (minutes)
              <input
                v-model="settings.default_appointment_booking_threshold"
                type="number"
              >
            </label>

            <label>
              Default appointment duration (minutes)
              <input
                v-model="settings.default_appointment_duration"
                type="number"
              >
            </label>

            <label>
              Custom CSS
              <textarea class="css-input" v-model="settings.styles" />
            </label>

            <h3>CMS</h3>

            <h4>Home</h4>
            <label>
              Title
              <input v-model="settings.language.home.title" type="text">
            </label>
            <label>
              Content
              <textarea v-model="settings.language.home.content" />
            </label>

            <h4>Make booking</h4>

            <h5>Clinics</h5>
            <label>
              Title
              <input
                v-model="settings.language['make-booking'].clinics.title"
                type="text"
              >
            </label>
            <label>
              Content
              <textarea
                v-model="settings.language['make-booking'].clinics.content"
              />
            </label>
            <label>
              Ineligible
              <textarea
                v-model="settings.language['make-booking'].clinics.ineligible"
              />
            </label>

            <h5>Consent</h5>
            <label>
              Title
              <input
                v-model="settings.language['make-booking'].consent.title"
                type="text"
              >
            </label>
            <label>
              Content
              <textarea
                v-model="settings.language['make-booking'].consent.content"
              />
            </label>

            <h5>No consent</h5>
            <label>
              Title
              <input
                v-model="
                  settings.language['make-booking']['no-consent'].title
                "
                type="text"
              >
            </label>
            <label>
              Content
              <textarea
                v-model="
                  settings.language['make-booking']['no-consent'].content
                "
              />
            </label>

            <h5>Location</h5>
            <label>
              Title
              <input
                v-model="settings.language['make-booking'].location.title"
                type="text"
              >
            </label>
            <label>
              Content
              <textarea
                v-model="settings.language['make-booking'].location.content"
              />
            </label>

            <h5>Overview</h5>
            <label>
              Title
              <input
                v-model="settings.language['make-booking'].overview.title"
                type="text"
              >
            </label>
            <label>
              Content
              <textarea
                v-model="settings.language['make-booking'].overview.content"
              />
            </label>

            <h5>Questions</h5>
            <label>
              Title
              <input
                v-model="settings.language['make-booking'].questions.title"
                type="text"
              >
            </label>
            <label>
              Content
              <textarea
                v-model="settings.language['make-booking'].questions.content"
              />
            </label>

            <h5>Appointments</h5>
            <label>
              Title
              <input
                v-model="settings.language['make-booking'].appointments.title"
                type="text"
              >
            </label>
            <label>
              Content
              <textarea
                v-model="
                  settings.language['make-booking'].appointments.content
                "
              />
            </label>

            <h5>Confirmation</h5>
            <label>
              Title
              <input
                v-model="settings.language['make-booking'].confirmation.title"
                type="text"
              >
            </label>
            <label>
              Content
              <textarea
                v-model="
                  settings.language['make-booking'].confirmation.content
                "
              />
            </label>

            <h5>Introduction</h5>
            <label>
              Title
              <input
                v-model="settings.language['make-booking'].introduction.title"
                type="text"
              >
            </label>
            <label>
              Content
              <textarea
                v-model="
                  settings.language['make-booking'].introduction.content
                "
              />
            </label>

            <h5>User details</h5>
            <label>
              Title
              <input
                v-model="
                  settings.language['make-booking']['user-details'].title
                "
                type="text"
              >
            </label>
            <label>
              Content
              <textarea
                v-model="
                  settings.language['make-booking']['user-details'].content
                "
              />
            </label>

            <h4>List bookings</h4>

            <h5>Token</h5>
            <label>
              Title
              <input
                v-model="settings.language['list-bookings'].token.title"
                type="text"
              >
            </label>
            <label>
              Content
              <textarea
                v-model="settings.language['list-bookings'].token.content"
              />
            </label>

            <h5>Cancel</h5>
            <label>
              Title
              <input
                v-model="settings.language['list-bookings'].cancel.title"
                type="text"
              >
            </label>
            <label>
              Content
              <textarea
                v-model="settings.language['list-bookings'].cancel.content"
              />
            </label>

            <h5>Cancelled</h5>
            <label>
              Title
              <input
                v-model="settings.language['list-bookings'].cancelled.title"
                type="text"
              >
            </label>
            <label>
              Content
              <textarea
                v-model="settings.language['list-bookings'].cancelled.content"
              />
            </label>

            <h5>Access code</h5>
            <label>
              Title
              <input
                v-model="
                  settings.language['list-bookings']['access-code'].title
                "
                type="text"
              >
            </label>
            <label>
              Content
              <textarea
                v-model="
                  settings.language['list-bookings']['access-code'].content
                "
              />
            </label>

            <h5>Appointments</h5>
            <label>
              Title
              <input
                v-model="
                  settings.language['list-bookings'].appointments.title
                "
                type="text"
              >
            </label>
            <label>
              Content
              <textarea
                v-model="
                  settings.language['list-bookings'].appointments.content
                "
              />
            </label>
            <label>
              Disclaimer
              <textarea
                v-model="
                  settings.language['list-bookings'].appointments.disclaimer
                "
              />
            </label>

            <h5>Token expired</h5>
            <label>
              Title
              <input
                v-model="
                  settings.language['list-bookings']['token-expired'].title
                "
                type="text"
              >
            </label>
            <label>
              Content
              <textarea
                v-model="
                  settings.language['list-bookings']['token-expired'].content
                "
              />
            </label>

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

<style lang="scss" scoped>
label {
  display: block;
  font-weight: bold;
}

input, textarea {
  display: block;
  margin-bottom: 1rem;
  min-width: 50%;
  padding: .5rem;
}

h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: .5rem 0;
}

h4 {
  font-size: 1.25rem;
  font-weight: bold;
  margin: .5rem 0;
}

h5 {
  font-size: 1.125rem;
  font-weight: bold;
  margin: .5rem 0;
}

button {
  padding: .5rem;
  font-size: 1rem;
}

.css-input {
  font-family: monospace;
}
</style>
