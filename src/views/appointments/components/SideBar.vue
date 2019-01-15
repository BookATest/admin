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
              <span class="js--popup-date-text">Sunday 12 March</span>
            </div>
            <div class="available--time">
              <span class="js--popup-time-text">11:00 am</span>
            </div>
            <hr>
            <div class="available--form">
              <div class="form__checkbox form__checkbox--disabled">
                <div>
                  <input id="checkbox" name="checkbox" type="checkbox" checked disabled>
                  <label for="checkbox">One off</label>
                </div>
              </div>
              <div class="form__drop-down form__drop-down--disabled">
                <label for="dropdown">Repeatable</label>
                <div>
                  <select id="dropdown" name="dropdown" disabled>
                    <option>None</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
              </div>
            </div>
            <hr>
            <div class="available--user">
              <button class="button button__primary button__primary--a" disabled>Delete</button>
            </div>
          </form>
        </div>

        <!-- Booked -->
        <div v-else class="popup__main">
          <div class="booked--date">
            <span class="js--popup-date-text">Sunday 12 March</span>
          </div>
          <div class="booked--time">
            <span class="js--popup-time-text">11:00 am</span>
          </div>
          <hr>
          <div class="booked--patient">
            <span>patient</span><span class="js--popup-patient-text">Robert</span>
          </div>
          <div class="booked--with">
            <span>with</span><span class="js--popup-with-text">Alex</span>
          </div>
          <div class="booked--where">
            <span>where</span><span class="js--popup-where-text">Mesmac Leeds</span>
          </div>
          <hr>
          <div class="booked--user">
            <button class="button button__primary button__primary--a">View user</button>
            <button class="button button__inline button__inline--subtle">Cancel appointment?</button>
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
export default {
  name: 'SideBar',

  props: {
    appointment: {
      required: true,
      type: Object,
    },
  },

  computed: {
    /**
     * Determine if the appointment has been booked.
     */
    booked() {
      return this.appointment.booked_at !== null;
    },
  },

  methods: {
    /**
     * Event to emit when closed.
     */
    onClose() {
      this.$emit('close');
    },
  },
};
</script>
