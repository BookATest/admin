<template>
  <div class="main">

    <!-- Location Edit -->
    <div class="location-edit">

      <bat-loader v-if="loadingClinic"/>
      <div v-else class="location-edit__form">

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

            <div class="location-edit__action">
              <bat-button type="submit" primary :disabled="clinicForm.$submitting">
                <span v-if="!clinicForm.$submitting">Update</span>
                <span v-else>Updating...</span>
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
import BatLoader from '@/components/Loader.vue';
import BatInput from '@/components/Input.vue';
import BatTextarea from '@/components/Textarea.vue';
import BatRadio from '@/components/Radio.vue';
import BatButton from '@/components/Button.vue';

export default {
  name: 'ClinicsEditView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: {
    BatLoader,
    BatInput,
    BatTextarea,
    BatRadio,
    BatButton,
  },

  data() {
    return {
      loadingClinic: false,
      deletingClinic: false,
      clinic: null,
      clinicForm: null,
    };
  },

  methods: {
    async onSubmit() {
      try {
        const { data: { id } } = await this.clinicForm.put(`/clinics/${this.$route.params.clinic}`, (data) => {
          data.appointment_duration = parseInt(data.appointment_duration, 10);
          data.appointment_booking_threshold = parseInt(data.appointment_booking_threshold, 10);
        });

        this.$router.push({ name: 'clinics.edit', params: { clinic: id } });
      } catch (exception) {
        // Supress error from console.
      }
    },

    async fetchClinic() {
      this.loadingClinic = true;

      const { data: { data: clinic } } = await this.$http.get(`/clinics/${this.$route.params.clinic}`);
      this.clinic = clinic;

      this.clinicForm = new Form({
        name: this.clinic.name,
        phone: this.clinic.phone,
        email: this.clinic.email,
        address_line_1: this.clinic.address_line_1,
        address_line_2: this.clinic.address_line_2 || '',
        address_line_3: this.clinic.address_line_3 || '',
        city: this.clinic.city,
        postcode: this.clinic.postcode,
        directions: this.clinic.directions,
        appointment_duration: `${this.clinic.appointment_duration}`,
        appointment_booking_threshold: `${this.clinic.appointment_booking_threshold}`,
        send_cancellation_confirmations: this.clinic.send_cancellation_confirmations,
        send_dna_follow_ups: this.clinic.send_dna_follow_ups,
      });

      this.loadingClinic = false;
    },

    async onDelete() {
      this.deletingClinic = true;

      try {
        await this.clinicForm.delete(`/clinics/${this.$route.params.clinic}`);

        this.$router.push({ name: 'clinics.index' });
      } catch (exception) {
        this.deletingClinic = false;
      }
    },
  },

  created() {
    this.fetchClinic();
  },
};
</script>
