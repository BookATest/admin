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
              :appointment="groupedAppointments[day - 1][index][0] || null"
              :multiple="groupedAppointments[day - 1][index].length > 1"
            />
            <bat-calendar-button
              v-if="groupedAppointments[day - 1][index].length > 1"
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="groupedAppointments[day - 1][index][1] || null"
              :multiple="true"
            />
            <bat-calendar-button
              v-if="groupedAppointments[day - 1][index].length > 1"
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="groupedAppointments[day - 1][index][2] || null"
              :multiple="true"
            />
            <bat-calendar-button
              v-if="groupedAppointments[day - 1][index].length > 1"
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="groupedAppointments[day - 1][index][3] || null"
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
              :appointment="groupedAppointments[day - 1][appointmentSlots.morning.length + index][0] || null"
              :multiple="groupedAppointments[day - 1][appointmentSlots.morning.length + index].length > 1"
            />
            <bat-calendar-button
              v-if="groupedAppointments[day - 1][appointmentSlots.morning.length + index].length > 1"
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="groupedAppointments[day - 1][appointmentSlots.morning.length + index][1] || null"
              :multiple="true"
            />
            <bat-calendar-button
              v-if="groupedAppointments[day - 1][appointmentSlots.morning.length + index].length > 1"
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="groupedAppointments[day - 1][appointmentSlots.morning.length + index][2] || null"
              :multiple="true"
            />
            <bat-calendar-button
              v-if="groupedAppointments[day - 1][appointmentSlots.morning.length + index].length > 1"
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="groupedAppointments[day - 1][appointmentSlots.morning.length + index][3] || null"
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
              :appointment="groupedAppointments[day - 1][appointmentSlots.morning.length + appointmentSlots.afternoon.length + index][0] || null"
              :multiple="groupedAppointments[day - 1][appointmentSlots.morning.length + appointmentSlots.afternoon.length + index].length > 1"
            />
            <bat-calendar-button
              v-if="groupedAppointments[day - 1][appointmentSlots.morning.length + appointmentSlots.afternoon.length + index].length > 1"
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="groupedAppointments[day - 1][appointmentSlots.morning.length + appointmentSlots.afternoon.length + index][1] || null"
              :multiple="true"
            />
            <bat-calendar-button
              v-if="groupedAppointments[day - 1][appointmentSlots.morning.length + appointmentSlots.afternoon.length + index].length > 1"
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="groupedAppointments[day - 1][appointmentSlots.morning.length + appointmentSlots.afternoon.length + index][2] || null"
              :multiple="true"
            />
            <bat-calendar-button
              v-if="groupedAppointments[day - 1][appointmentSlots.morning.length + appointmentSlots.afternoon.length + index].length > 1"
              @click="onSelect"
              :edit-mode="editMode"
              :appointment="groupedAppointments[day - 1][appointmentSlots.morning.length + appointmentSlots.afternoon.length + index][3] || null"
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
     * When the user selects an appointment.
     */
    onSelect(appointment) {
      // If the same appointment clicked, then deselect it.
      if (this.value && (this.value.id === appointment.id)) {
        this.$emit('input', null);
        return;
      }

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
        'filter[starts_after]': this.$moment(this.date).startOf('isoWeek').format('Y-MM-DD\\T00:00:00+00:00'),
        'filter[starts_before]': this.$moment(this.date).endOf('isoWeek').format('Y-MM-DD\\T23:59:59+00:00'),
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
      this.$emit('update:editMode', editMode);
    },
  },

  created() {
    this.fetchClinic();
  },
};
</script>
