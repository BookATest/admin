<template>
  <button
    @click="onClick"
    class="button button__calendar js--popup-open"
    :class="{
      'button__calendar--mulitple': multiple,

      'button__calendar--not-available': !exists,

      'button__calendar--available-cw-initials': exists && !booked && !repeating,
      'button__calendar--available-cw-initials--default': exists && !booked && !repeating,

      'button__calendar--booked-cw-initials': exists && booked && !repeating,
      'button__calendar--booked-cw-initials--default': exists && booked && !repeating,

      'button__calendar--available-cw-initials-repeat': exists && !booked && repeating,
      'button__calendar--available-cw-initials-repeat--default': exists && !booked && repeating,

      'button__calendar--booked-cw-initials-repeat': exists && booked && repeating,
      'button__calendar--booked-cw-initials-repeat--default': exists && booked && repeating,
    }"
    :disabled="!exists && !editMode"
  >
    <span v-if="exists">{{ userInitials }}</span>
  </button>
</template>

<script>
export default {
  name: 'CalendarButton',

  props: {
    appointment: {
      required: true,
      type: Object,
    },

    multiple: {
      required: false,
      type: Boolean,
      default: false,
    },

    editMode: {
      required: true,
      type: Boolean,
    },
  },

  computed: {
    /**
     * Determine whether or not the appointment has been booked.
     */
    booked() {
      return this.appointment ? this.appointment.booked_at !== null : false;
    },

    /**
     * Determine whether or not the appointment is repeating.
     */
    repeating() {
      return this.appointment ? this.appointment.is_repeating : false;
    },

    /**
     * Determine whether or not there is an appointment for the slot.
     */
    exists() {
      return Object.prototype.hasOwnProperty.call(this.appointment, 'id');
    },

    userInitials() {
      return this.appointment
        ? this.appointment.user_first_name.charAt(0) + this.appointment.user_last_name.charAt(0)
        : '';
    },
  },

  methods: {
    /**
     * Event to emit when the appointment has been clicked.
     */
    onClick() {
      this.$emit('click', this.appointment);
    },
  },
};
</script>
