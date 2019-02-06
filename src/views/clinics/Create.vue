<template>
  <div class="main">

    <!-- Location Edit -->
    <div class="location-edit">

      <div class="location-edit__form">

        <div class="">
          <form class="form form--location-edit">
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
          </form>
        </div>

        <div class="">
          <h2>Pre triage questions</h2>

          <div class="button button__amend button__amend--edit">
            <button class="button__amend__reorder"><i class="icon icon--reorder"></i></button>
            <input type="text" id="sexuality" name="sexuality" value="Gender" class="button__amend__input"/>
            <button class="button__amend__edit" onclick="location.href='../settings/pre-triage-edit.html'"><span>Edit</span><i class="icon icon--edit"></i></button>
          </div>

          <div class="button button__amend button__amend--edit">
            <button class="button__amend__reorder"><i class="icon icon--reorder"></i></button>
            <input type="text" id="sexuality" name="sexuality" value="Sexuality" class="button__amend__input"/>
            <button class="button__amend__edit" onclick="location.href='../settings/pre-triage-edit.html'"><span>Edit</span><i class="icon icon--edit"></i></button>
          </div>

          <div class="button button__amend button__amend--edit">
            <button class="button__amend__reorder"><i class="icon icon--reorder"></i></button>
            <input type="text" id="sexuality" name="sexuality" value="Age" class="button__amend__input"/>
            <button class="button__amend__edit" onclick="location.href='../settings/pre-triage-edit.html'"><span>Edit</span><i class="icon icon--edit"></i></button>
          </div>

          <div class="button button__amend button__amend--add">
            <button class="button__amend__add" onclick="location.href='../settings/pre-triage-edit.html'"><span>Add</span><i class="icon icon--pluscircle"></i></button>
          </div>

          <!--
            <div class="button button__amend button__amend--add button__amend--add--inactive">
              <button class="button__amend__add"><span>Add</span><i class="icon icon--pluscircle"></i></button>
            </div>
          -->

        </div>

      </div>

      <div class="location-edit__action">
        <button class="button button__primary button__primary--b"><span>Save</span></button>
      </div>

    </div>

  </div>
</template>

<script>
import Form from '@/classes/Form';
import BatInput from '@/components/Input.vue';
import BatTextarea from '@/components/Textarea.vue';

export default {
  name: 'ClinicsCreateView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: { BatInput, BatTextarea },

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
        appointment_duration: this.$store.state.settings.default_appointment_duration,
        appointment_booking_threshold: this.$store.state.settings.appointment_booking_threshold,
        send_cancellation_confirmations: true,
        send_dna_follow_ups: true,
      }),
    };
  },
};
</script>
