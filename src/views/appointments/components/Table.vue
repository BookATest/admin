<template>
  <div class="table">
    <bat-loader v-if="loadingClinic || loadingAppointments"/>

    <table v-else cellpadding="8" cellspacing="8">
      <thead>
        <tr>
          <th colspan="1"></th>
          <th colspan="1"><span>Monday</span></th>
          <th colspan="1"><span>Tuesday</span></th>
          <th colspan="1"><span>Wednesday</span></th>
          <th colspan="1"><span>Thursday</span></th>
          <th colspan="1"><span>Friday</span></th>
          <th colspan="1"><span>Saturday</span></th>
          <th colspan="1"><span>Sunday</span></th>
        </tr>
      </thead>
      <tbody>
        <!-- Morning heading -->
        <tr>
          <td colspan="1"></td>
          <td colspan="7">
            <div class="pod-title"><span>Morning</span></div>
          </td>
        </tr>
        <!-- Morning slots -->
        <tr v-for="(slot, index) in appointmentSlots.morning" :key="`MorningSlots-${index}`">
          <td colspan="1">
            <bat-time :meridiem="slot.meridiem">{{ slot.time }}</bat-time>
          </td>
          <td colspan="1" v-for="day in 7" :key="`MorningSlot-${index}-${day}`">
            <bat-calendar-button
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="getMorningAppointments(day, index)[0] || getEmptyMorningAppointment(day, index)"
              :multiple="getMorningAppointments(day, index).length > 1"
            />
            <bat-calendar-button
              v-if="getMorningAppointments(day, index).length > 1"
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="getMorningAppointments(day, index)[1] || getEmptyMorningAppointment(day, index)"
              :multiple="true"
            />
            <bat-calendar-button
              v-if="getMorningAppointments(day, index).length > 1"
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="getMorningAppointments(day, index)[2] || getEmptyMorningAppointment(day, index)"
              :multiple="true"
            />
            <bat-calendar-button
              v-if="getMorningAppointments(day, index).length > 1"
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="getMorningAppointments(day, index)[3] || getEmptyMorningAppointment(day, index)"
              :multiple="true"
            />
          </td>
        </tr>
        <!-- Afternoon heading -->
        <tr>
          <td colspan="1"></td>
          <td colspan="7">
            <div class="pod-title"><span>Afternoon</span></div>
          </td>
        </tr>
        <!-- Afternoon slots -->
        <tr v-for="(slot, index) in appointmentSlots.afternoon" :key="`AfternoonSlots-${index}`">
          <td colspan="1">
            <bat-time :meridiem="slot.meridiem">{{ slot.time }}</bat-time>
          </td>
          <td colspan="1" v-for="day in 7" :key="`AfternoonSlot-${index}-${day}`">
            <bat-calendar-button
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="getAfternoonAppointments(day, index)[0] || getEmptyAfternoonAppointment(day, index)"
              :multiple="getAfternoonAppointments(day, index).length > 1"
            />
            <bat-calendar-button
              v-if="getAfternoonAppointments(day, index).length > 1"
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="getAfternoonAppointments(day, index)[1] || getEmptyAfternoonAppointment(day, index)"
              :multiple="true"
            />
            <bat-calendar-button
              v-if="getAfternoonAppointments(day, index).length > 1"
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="getAfternoonAppointments(day, index)[2] || getEmptyAfternoonAppointment(day, index)"
              :multiple="true"
            />
            <bat-calendar-button
              v-if="getAfternoonAppointments(day, index).length > 1"
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="getAfternoonAppointments(day, index)[3] || getEmptyAfternoonAppointment(day, index)"
              :multiple="true"
            />
          </td>
        </tr>
        <!-- Evening heading -->
        <tr>
          <td colspan="1"></td>
          <td colspan="7">
            <div class="pod-title"><span>Evening</span></div>
          </td>
        </tr>
        <!-- Evening slots -->
        <tr v-for="(slot, index) in appointmentSlots.evening" :key="`EveningSlots-${index}`">
          <td colspan="1">
            <bat-time :meridiem="slot.meridiem">{{ slot.time }}</bat-time>
          </td>
          <td colspan="1" v-for="day in 7" :key="`EveningSlot-${index}-${day}`">
            <bat-calendar-button
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="getEveningAppointments(day, index)[0] || getEmptyEveningAppointment(day, index)"
              :multiple="getEveningAppointments(day, index).length > 1"
            />
            <bat-calendar-button
              v-if="getEveningAppointments(day, index).length > 1"
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="getEveningAppointments(day, index)[1] || getEmptyEveningAppointment(day, index)"
              :multiple="true"
            />
            <bat-calendar-button
              v-if="getEveningAppointments(day, index).length > 1"
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="getEveningAppointments(day, index)[2] || getEmptyEveningAppointment(day, index)"
              :multiple="true"
            />
            <bat-calendar-button
              v-if="getEveningAppointments(day, index).length > 1"
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="getEveningAppointments(day, index)[3] || getEmptyEveningAppointment(day, index)"
              :multiple="true"
            />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="1">
            <ul>
              <li><span>Not available</span></li>
              <li><span>Available</span></li>
              <li><span>Booked</span></li>
            </ul>
            <button v-if="!editMode" @click="onEditMode(true)" class="button button__secondary button__secondary--b">
              <span>Manage my appointments</span>
            </button>
            <button v-else @click="onEditMode(false)" class="button button__secondary button__secondary--b">
              <span>Back to view mode</span>
            </button>
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import BatLoader from '@/components/Loader.vue';
import BatTime from '@/views/appointments/components/Time.vue';
import BatCalendarButton from '@/views/appointments/components/CalendarButton.vue';

const daysInWeek = 7;
const minutesInDay = 60 * 24;
const afternoonMinutes = 60 * 12;
const eveningMinutes = 60 * 17.5;

export default {
  name: 'Table',

  components: { BatLoader, BatTime, BatCalendarButton },

  props: {
    value: {
      required: true,
      validator: prop => typeof prop === 'object' || prop === null,
    },

    clinicId: {
      required: true,
      type: String,
    },

    userId: {
      required: true,
      type: String,
    },

    date: {
      required: true,
      type: String,
    },

    editMode: {
      required: true,
      type: Boolean,
    },
  },

  data() {
    return {
      loadingAppointments: false,
      appointments: [],
      loadingClinic: false,
      clinic: null,
    };
  },

  computed: {
    /**
     * Get an array of the appointment slots.
     */
    appointmentSlots() {
      const appointmentDuration = this.clinic.appointment_duration;
      const slotCount = minutesInDay / appointmentDuration;

      const slots = {
        morning: [],
        afternoon: [],
        evening: [],
      };

      for (let slot = 0; slot < slotCount; slot += 1) {
        const appointmentTimeInMinutes = slot * appointmentDuration;

        const time = this.$moment()
          .startOf('day')
          .add(appointmentTimeInMinutes, 'minutes');

        if (appointmentTimeInMinutes >= eveningMinutes) {
          slots.evening.push({
            time: time.format('h:mm'),
            meridiem: time.format('a'),
          });
        } else if (appointmentTimeInMinutes >= afternoonMinutes) {
          slots.afternoon.push({
            time: time.format('h:mm'),
            meridiem: time.format('a'),
          });
        } else {
          slots.morning.push({
            time: time.format('h:mm'),
            meridiem: time.format('a'),
          });
        }
      }

      return slots;
    },

    /**
     * Returns the appointments grouped by date and then by slot.
     */
    groupedAppointments() {
      // If no clinic selected, then return an empry array.
      if (this.clinic === null) {
        return [];
      }

      // Initialise the appointments array to be returned.
      const appointments = [];

      // Append the dates for the week.
      for (let day = 0; day < daysInWeek; day += 1) {
        appointments.push([]);

        // Work out the nubmer of appointments slots in a day.
        const appointmentDuration = this.clinic.appointment_duration;
        const slotCount = minutesInDay / appointmentDuration;

        // Append an empty array for each appointment slot.
        for (let slot = 0; slot < slotCount; slot += 1) {
          appointments[day].push([]);
        }

        // Add appointments to the slots.
        this.appointments
          .filter(appointment => this.$moment(appointment.start_at).isoWeekday() === day + 1)
          .forEach((appointment) => {
            const midnight = this.$moment(appointment.start_at).startOf('day');
            const appointmentTimeInMinutes = this.$moment(appointment.start_at)
              .diff(midnight, 'minutes');
            const slot = appointmentTimeInMinutes / appointmentDuration;

            appointments[day][slot].push(appointment);
          });
      }

      return appointments;
    },
  },

  watch: {
    /**
     * Refetch the appointments when the clinic changes.
     */
    clinicId() {
      this.fetchClinic();
    },

    /**
     * Refetch the appointments when the user changes.
     */
    userId() {
      // Do nothing if there is no clinic ID set.
      if (this.clinicId === '') {
        return;
      }

      this.fetchAppointments();
    },

    /**
     * Refetch the appointments when the date changes.
     */
    date() {
      this.fetchAppointments();
    },
  },

  methods: {
    /**
     * Get the morning appointments for the given day and slot.
     * @param {int} day
     * @param {int} slot
     * @returns {array}
     */
    getMorningAppointments(day, slot) {
      return this.groupedAppointments[day - 1][slot];
    },

    /**
     * Get the afternoon appointments for the given day and slot.
     * @param {int} day
     * @param {int} slot
     * @returns {array}
     */
    getAfternoonAppointments(day, slot) {
      return this.getMorningAppointments(day, slot + this.appointmentSlots.morning.length);
    },

    /**
     * Get the evening appointments for the given day and slot.
     * @param {int} day
     * @param {int} slot
     * @returns {array}
     */
    getEveningAppointments(day, slot) {
      return this.getMorningAppointments(day, slot + this.appointmentSlots.morning.length + this.appointmentSlots.afternoon.length);
    },

    /**
     * When the user selects an appointment.
     */
    onSelect(appointment) {
      this.$emit('input', appointment);
    },

    /**
     * Fetched the clinic.
     */
    async fetchClinic() {
      this.loadingClinic = true;

      const response = await this.$http.get(`/clinics/${this.clinicId}`);
      this.clinic = response.data.data;

      this.fetchAppointments();

      this.loadingClinic = false;
    },

    /**
     * Fetches the appointments with any filteres applied.
     */
    async fetchAppointments() {
      this.loadingAppointments = true;

      const params = {
        sort: 'start_at',
        append: ['service_user_name', 'user_first_name', 'user_last_name'].join(','),
        'filter[starts_after]': this.$moment(this.date).startOf('isoWeek').format('Y-MM-DD[T]HH:mm:ssZ'),
        'filter[starts_before]': this.$moment(this.date).endOf('isoWeek').format('Y-MM-DD[T]HH:mm:ssZ'),
      };

      // Filter clinic ID's to ones user is a community worker for.
      if (!this.$store.state.user.isOrganisationAdmin()) {
        params['filter[clinic_id]'] = this.$store.state.user.clinicIds().join(',');
      }

      if (this.clinicId) {
        params['filter[clinic_id]'] = this.clinicId;
      }

      if (this.userId) {
        params['filter[user_id]'] = this.userId;
      }

      this.appointments = await this.fetchAll('/appointments', params);

      this.loadingAppointments = false;
    },

    /**
     * Emit the edit mode.
     * @param {boolean}
     */
    onEditMode(editMode) {
      if (editMode === true) {
        this.$emit('update:userId', this.$store.state.user.get().id);
      }

      this.$emit('update:editMode', editMode);
    },

    /**
     * Get an empty appointment object for the morning.
     * @returns {object}
     */
    getEmptyMorningAppointment(day, slot) {
      const startAt = this.$moment(this.date)
        .add(day - 1, 'days')
        .add(slot * this.clinic.appointment_duration, 'minutes');

      return {
        clinic_id: this.clinicId,
        start_at: startAt.format('Y-MM-DD[T]HH:mm:ssZ'),
        is_repeating: false,
      };
    },

    /**
     * Get an empty appointment object for the afternoon.
     * @returns {object}
     */
    getEmptyAfternoonAppointment(day, slot) {
      return this.getEmptyMorningAppointment(day, slot + this.appointmentSlots.morning.length);
    },

    /**
     * Get an empty appointment object for the evening.
     * @returns {object}
     */
    getEmptyEveningAppointment(day, slot) {
      return this.getEmptyMorningAppointment(day, slot + this.appointmentSlots.morning.length + this.appointmentSlots.afternoon.length);
    },
  },

  created() {
    this.fetchClinic();
  },
};
</script>
