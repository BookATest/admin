<template>
  <div class="sidebar">

    <!-- Popup -->
    <div class="popup">
      <div
        class="js--popup-block"
        :class="{
          'available': !booked,
          'js--popup-block--available': !booked,
          'booked': booked,
          'js--popup-block--booked': booked,
        }"
        style="display: block;"
      >
        <div class="popup__header">
          <span>{{ booked ? 'Booked' : 'Available' }}</span>
        </div>

        <!-- Available -->
        <div v-if="!booked" class="popup__main">
          <form>
            <div class="available--date">
              <span class="js--popup-date-text">{{ appointment.start_at | moment('dddd D MMMM') }}</span>
            </div>
            <div class="available--time">
              <span class="js--popup-time-text">{{ appointment.start_at | moment('h:mm a') }}</span>
            </div>
            <hr>
            <div class="available--form">
              <div class="form__checkbox form__checkbox--disabled">
                <div>
                  <input id="checkbox" name="checkbox" type="checkbox" :checked="!repeating" disabled>
                  <label for="checkbox">One off</label>
                </div>
              </div>
            </div>
            <hr>
            <div class="available--user">
              <button class="button button__primary button__primary--a" disabled>Amend</button>
            </div>
            <div class="available--warning">
              <div class="card card--warning">
                <div class="warning__icon">
                  <i class="icon icon--warning"></i>
                </div>
                <div class="warning__content">
                  <p>To manage an appointment you need to go into manage my appointment</p>
                </div>
              </div>
            </div>
          </form>
        </div>

        <!-- Booked -->
        <div v-else class="popup__main">
          <div class="booked--date">
            <span class="js--popup-date-text">{{ appointment.start_at | moment('dddd D MMMM') }}</span>
          </div>
          <div class="booked--time">
            <span class="js--popup-time-text">{{ appointment.start_at | moment('h:mm a') }}</span>
          </div>
          <hr>
          <div class="booked--patient">
            <span>patient</span><span class="js--popup-patient-text">{{ appointment.service_user_name }}</span>
          </div>
          <div class="booked--with">
            <span>with</span><span class="js--popup-with-text">{{ `${appointment.user_first_name} ${appointment.user_last_name}` }}</span>
          </div>
          <div class="booked--where">
            <span>where</span><span class="js--popup-where-text">
              <bat-loader v-if="clinic === null"/>
              <template v-else>{{ clinic.name }}</template>
            </span>
          </div>
          <hr>
          <div class="booked--user">
            <button class="button button__primary button__primary--a">View user</button>
          </div>
          <div class="available--warning">
            <div class="card card--warning">
              <div class="warning__icon">
                <i class="icon icon--warning"></i>
              </div>
              <div class="warning__content">
                <p>To cancel an appointment you need to go into manage my appointment</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="popup__footer">
      <button @click="onClose" class="js--popup-close">
        <span>Close</span><i class="icon icon--cross"></i>
      </button>
    </div>

  </div>
</template>

<script>
import BatLoader from '@/components/Loader.vue';

export default {
  name: 'SideBar',

  components: { BatLoader },

  props: {
    appointment: {
      required: true,
      type: Object,
    },
  },

  data() {
    return {
      clinic: null,
    };
  },

  watch: {
    appointment(appointment) {
      if (appointment === null) {
        this.clinic = null;
      }
    },
  },

  computed: {
    /**
     * Determine if the appointment has been booked.
     */
    booked() {
      return this.appointment.booked_at !== null;
    },

    /**
     * Determine whether or not the appointment is repeating.
     */
    repeating() {
      return this.appointment.is_repeating;
    },
  },

  methods: {
    /**
     * Event to emit when closed.
     */
    onClose() {
      this.$emit('close');
    },

    /**
     * Fetch the clinic for the selected appointment.
     */
    async fetchClinic() {
      const response = await this.$http.get(`/clinics/${this.appointment.clinic_id}`);
      this.clinic = response.data.data;
    },
  },

  created() {
    this.fetchClinic();
  },
};
</script>
