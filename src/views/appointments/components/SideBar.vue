<template>
  <div class="sidebar">

    <!-- Popup -->
    <div class="popup">
      <div
        class="js--popup-block"
        :class="{
          'add-available': freeSlot,
          'js--popup-block--add-availability': freeSlot,
          'available': !freeSlot && !booked,
          'js--popup-block--available': !freeSlot && !booked,
          'booked': !freeSlot && booked,
          'js--popup-block--booked': !freeSlot && booked,
        }"
        style="display: block;"
      >
        <div class="popup__header">
          <span v-if="freeSlot">Add Availability</span>
          <span v-else-if="!freeSlot && !booked">Available</span>
          <span v-else-if="!freeSlot && booked">Booked</span>
        </div>

        <!-- Available -->
        <div class="popup__main">
          <form>

            <!-- Date -->
            <div :class="{
              'add-availability--date': freeSlot,
              'available--date': !freeSlot && !booked,
              'booked--date': !freeSlot && booked,
            }">
              <span class="js--popup-date-text">{{ appointment.start_at | moment('dddd D MMMM') }}</span>
            </div>

            <!-- Time -->
            <div :class="{
              'add-availability--time': freeSlot,
              'available--time': !freeSlot && !booked,
              'booked--time': !freeSlot && booked,
            }">
              <span class="js--popup-time-text">{{ appointment.start_at | moment('h:mm a') }}</span>
            </div>

            <hr>

            <!-- Available appointment -->
            <template v-if="!freeSlot && booked">
              <div class="available--form">
                <div class="form__checkbox form__checkbox--disabled">
                  <div>
                    <input id="checkbox" name="checkbox" type="checkbox" :checked="repeating" disabled>
                    <label for="checkbox">Repeating</label>
                  </div>
                </div>
              </div>

              <hr>

              <div class="available--user">
                <button class="button button__primary button__primary--a" disabled>Amend</button>
              </div>
            </template>

            <!-- Booked appointments -->
            <template v-else-if="!freeSlot && booked">
              <div class="available--form">
                <div class="form__checkbox form__checkbox">
                  <div>
                    <input id="checkbox" name="checkbox" type="checkbox" :checked="repeating" disabled>
                    <label for="checkbox">Repeating</label>
                  </div>
                </div>
              </div>

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
            </template>

            <!-- Free slot -->
            <template v-else>
              <div class="add-availability--form">
                <div class="form__checkbox">
                  <div>
                    <input id="checkbox" name="checkbox" type="checkbox" :checked="repeating">
                    <label for="checkbox">Repeating</label>
                  </div>
                </div>
              </div>

              <hr>

              <div class="add-availability--user">
                <button class="button button__primary button__primary--a">Save</button>
              </div>
            </template>

            <!-- Warning -->
            <div v-if="!editMode" class="available--warning">
              <div class="card card--warning">
                <div class="warning__icon">
                  <i class="icon icon--warning"></i>
                </div>
                <div class="warning__content">
                  <p v-if="booked">To cancel an appointment you need to go into manage my appointment</p>
                  <p v-else>To manage an appointment you need to go into manage my appointment</p>
                </div>
              </div>
            </div>

          </form>
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

    editMode: {
      required: true,
      type: Boolean,
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

    /**
     * Determin whether or not the slot is available.
     */
    freeSlot() {
      return Object.prototype.hasOwnProperty.call(this.appointment, 'id') === false;
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
