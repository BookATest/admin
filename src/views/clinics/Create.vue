<template>
  <div class="main">

    <!-- Location Edit -->
    <div class="location-edit">

      <div class="location-edit__form">

        <div class="">
          <form @submit.prevent="onSubmit" class="form form--location-edit">
            <bat-input
              label="Name"
              v-model="clinicForm.name"
              @input="clinicForm.$errors.clear('name')"
              :error="clinicForm.$errors.get('name')"
            />

            <bat-input
              label="Phone"
              v-model="clinicForm.phone"
              @input="clinicForm.$errors.clear('phone')"
              :error="clinicForm.$errors.get('phone')"
              type="tel"
            />

            <bat-input
              label="Email"
              v-model="clinicForm.email"
              @input="clinicForm.$errors.clear('email')"
              :error="clinicForm.$errors.get('email')"
              type="email"
            />

            <bat-input
              label="Address line 1"
              v-model="clinicForm.address_line_1"
              @input="clinicForm.$errors.clear('address_line_1')"
              :error="clinicForm.$errors.get('address_line_1')"
            />

            <bat-input
              label="Address line 2"
              v-model="clinicForm.address_line_2"
              @input="clinicForm.$errors.clear('address_line_2')"
              :error="clinicForm.$errors.get('address_line_2')"
            />

            <bat-input
              label="Address line 3"
              v-model="clinicForm.address_line_3"
              @input="clinicForm.$errors.clear('address_line_3')"
              :error="clinicForm.$errors.get('address_line_3')"
            />

            <bat-input
              label="City"
              v-model="clinicForm.city"
              @input="clinicForm.$errors.clear('city')"
              :error="clinicForm.$errors.get('city')"
            />

            <bat-input
              label="Postcode"
              v-model="clinicForm.postcode"
              @input="clinicForm.$errors.clear('postcode')"
              :error="clinicForm.$errors.get('postcode')"
            />

            <bat-textarea
              label="Directions"
              v-model="clinicForm.directions"
              @input="clinicForm.$errors.clear('directions')"
              :error="clinicForm.$errors.get('directions')"
            />

            <bat-input
              label="Appointment duration (in minutes)"
              v-model="clinicForm.appointment_duration"
              @input="clinicForm.$errors.clear('appointment_duration')"
              :error="clinicForm.$errors.get('appointment_duration')"
              type="number"
              step="1"
              min="1"
              max="1440"
            />

            <bat-input
              label="Appointment booking threshold (in minutes)"
              v-model="clinicForm.appointment_booking_threshold"
              @input="clinicForm.$errors.clear('appointment_booking_threshold')"
              :error="clinicForm.$errors.get('appointment_booking_threshold')"
              type="number"
              step="1"
              min="1"
              max="1440"
            />

            <bat-radio
              label="Send cancellation confirmations?"
              v-model="clinicForm.send_cancellation_confirmations"
              @input="clinicForm.$errors.clear('send_cancellation_confirmations')"
            />

            <bat-radio
              label="Send DNA follow up notifications?"
              v-model="clinicForm.send_dna_follow_ups"
              @input="clinicForm.$errors.clear('send_dna_follow_ups')"
            />

            <bat-input
              label="Appointments title"
              v-model="clinicForm.language['make-booking'].appointments.title"
              @input="clinicForm.$errors.clear('language.make-booking.appointments.title')"
              :error="clinicForm.$errors.get('language.make-booking.appointments.title')"
            />

            <bat-input
              label="Appointments content"
              v-model="clinicForm.language['make-booking'].appointments.content"
              @input="clinicForm.$errors.clear('language.make-booking.appointments.content')"
              :error="clinicForm.$errors.get('language.make-booking.appointments.content')"
            />

            <div class="location-edit__action">
              <bat-button type="submit" primary :disabled="clinicForm.$submitting">
                <span v-if="!clinicForm.$submitting">Create</span>
                <span v-else>Creating...</span>
              </bat-button>
            </div>
          </form>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import Form from '@/classes/Form';
import BatInput from '@/components/Input.vue';
import BatTextarea from '@/components/Textarea.vue';
import BatRadio from '@/components/Radio.vue';
import BatButton from '@/components/Button.vue';

export default {
  name: 'ClinicsCreateView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: {
    BatInput,
    BatTextarea,
    BatRadio,
    BatButton,
  },

  data() {
    return {
      clinicForm: new Form({
        name: '',
        phone: '',
        email: '',
        address_line_1: '',
        address_line_2: '',
        address_line_3: '',
        city: '',
        postcode: '',
        directions: '',
        appointment_duration: `${this.$store.state.settings.default_appointment_duration}`,
        appointment_booking_threshold: `${this.$store.state.settings.default_appointment_booking_threshold}`,
        send_cancellation_confirmations: true,
        send_dna_follow_ups: true,
        language: {
          'make-booking': {
            appointments: {
              title: '',
              content: '',
            },
          },
        },
      }),
    };
  },

  methods: {
    async onSubmit() {
      try {
        const { data: { id } } = await this.clinicForm.post('/clinics', (data) => {
          data.appointment_duration = parseInt(data.appointment_duration, 10);
          data.appointment_booking_threshold = parseInt(data.appointment_booking_threshold, 10);
        });

        this.$router.push({ name: 'clinics.edit', params: { clinic: id } });
      } catch (exception) {
        // Supress error from console.
      }
    },
  },
};
</script>
