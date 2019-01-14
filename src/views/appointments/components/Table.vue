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
        <tr>
          <td colspan="1"></td>
          <td colspan="7">
            <div class="pod-title"><span>Morning</span></div>
          </td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">8:00</span><span class="time time--b">am</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">8:30</span><span class="time time--b">am</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">9:00</span><span class="time time--b">am</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--booked-cw-initials-repeat button__calendar--booked-cw-initials-repeat--default js--popup-open"><span>ET</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--booked-cw-initials-repeat button__calendar--booked-cw-initials-repeat--default js--popup-open"><span>RW</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--booked-cw-initials-repeat button__calendar--booked-cw-initials-repeat--default js--popup-open"><span>DL</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open"><span>LM</span></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">9:30</span><span class="time time--b">am</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">10:00</span><span class="time time--b">am</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">10:30</span><span class="time time--b">am</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials button__calendar--available-cw-initials--default js--popup-open"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials button__calendar--available-cw-initials--default js--popup-open"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials button__calendar--available-cw-initials--default js--popup-open"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">11:00</span><span class="time time--b">am</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--booked-cw-initials-repeat button__calendar--booked-cw-initials-repeat--default js--popup-open"><span>DL</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">11:30</span><span class="time time--b">am</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"></td>
          <td colspan="7">
            <div class="pod-title"><span>Afternoon</span></div>
          </td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">12:00</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">12:30</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">1:00</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">1:30</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">2:00</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">2:30</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">3:00</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">3:30</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">4:00</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">4:30</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"></td>
          <td colspan="7">
            <div class="pod-title"><span>Evening</span></div>
          </td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">5:00</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">5:30</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">6:00</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" disabled></button></td>
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
            <button class="button button__secondary button__secondary--b"><span>Manage my appointments</span></button>
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import BatLoader from '@/components/Loader.vue';

const daysInWeek = 7;
const minutesInDay = 60 * 24;
const afternoonMinutes = 60 * 12;
const eveningMinutes = 60 * 17.5;

export default {
  name: 'Table',

  components: { BatLoader },

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
          .add(appointmentTimeInMinutes, 'minutes')
          .format('h:mm a');

        if (appointmentTimeInMinutes >= eveningMinutes) {
          slots.evening.push(time);
        } else if (appointmentTimeInMinutes >= afternoonMinutes) {
          slots.afternoon.push(time);
        } else {
          slots.morning.push(time);
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
        this.appointments.forEach((appointment) => {
          const midnight = this.$moment().startOf('day');
          const appointmentTimeInMinutes = this.$moment(appointment.start_at)
            .diff(midnight, 'minutes');
          const slot = appointmentTimeInMinutes / appointmentDuration;

          appointments[day][slot - 1].push(appointment);
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
  },

  methods: {
    /**
     * When the user selects an appointment.
     */
    onSelect(appointment) {
      if (this.value === null) {
        this.$emit('input', appointment);
      } else {
        this.$emit('input', null);
      }
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
  },

  created() {
    this.fetchClinic();
  },
};
</script>
