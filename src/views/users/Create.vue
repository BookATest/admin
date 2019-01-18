<template>
  <div class="main">

    <!-- Edit User -->
    <div class="edit-user">

      <div class="edit-user__intro">
        <div>
          <h2>Create User <i class="icon icon--edit"></i></h2>
        </div>
      </div>

      <div class="edit-user__details">
        <div>
          <form @submit.prevent="onSubmit" class="form form--edit-user">

            <bat-input
              label="First name"
              v-model="userForm.first_name"
              @input="userForm.$errors.clear('first_name')"
              :error="userForm.$errors.get('first_name')"
            />

            <bat-input
              label="Last name"
              v-model="userForm.last_name"
              @input="userForm.$errors.clear('last_name')"
              :error="userForm.$errors.get('last_name')"
            />

            <bat-input
              label="Email"
              v-model="userForm.email"
              @input="userForm.$errors.clear('email')"
              :error="userForm.$errors.get('email')"
              type="email"
            />

            <bat-input
              label="Phone"
              v-model="userForm.phone"
              @input="userForm.$errors.clear('phone')"
              :error="userForm.$errors.get('phone')"
              type="tel"
            />

            <bat-input
              label="Password"
              v-model="userForm.password"
              @input="userForm.$errors.clear('password')"
              :error="userForm.$errors.get('password')"
              type="password"
            />

            <div class="edit-user__notification">
              <h2>Display your email to service users?</h2>
              <label class="button button__radio"><input v-model="userForm.display_email" name="display_email" type="radio" :value="true"><span>Yes<span></span></span></label>
              <label class="button button__radio"><input v-model="userForm.display_email" name="display_email" type="radio" :value="false"><span>No</span></label>
            </div>

            <div class="edit-user__notification">
              <h2>Display your phone to service users?</h2>
              <label class="button button__radio"><input v-model="userForm.display_phone" name="display_phone" type="radio" :value="true"><span>Yes<span></span></span></label>
              <label class="button button__radio"><input v-model="userForm.display_phone" name="display_phone" type="radio" :value="false"><span>No</span></label>
            </div>

            <div class="edit-user__notification">
              <h2>Received cancellation confirmations?</h2>
              <label class="button button__radio"><input v-model="userForm.receive_booking_confirmations" name="receive_booking_confirmations" type="radio" :value="true"><span>Yes<span></span></span></label>
              <label class="button button__radio"><input v-model="userForm.receive_booking_confirmations" name="receive_booking_confirmations" type="radio" :value="false"><span>No</span></label>
            </div>

            <div class="edit-user__notification">
              <h2>Received cancellation confirmations?</h2>
              <label class="button button__radio"><input v-model="userForm.receive_cancellation_confirmations" name="receive_cancellation_confirmations" type="radio" :value="true"><span>Yes<span></span></span></label>
              <label class="button button__radio"><input v-model="userForm.receive_cancellation_confirmations" name="receive_cancellation_confirmations" type="radio" :value="false"><span>No</span></label>
            </div>

            <div class="edit-user__action">
              <bat-button type="submit" primary :disabled="userForm.$submitting">
                <span v-if="!userForm.$submitting">Create</span>
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
import BatButton from '@/components/Button.vue';
import BatInput from '@/views/users/components/Input.vue';

export default {
  name: 'UsersCreateView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: { BatButton, BatInput },

  data() {
    return {
      userForm: new Form({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        display_email: false,
        display_phone: false,
        receive_booking_confirmations: false,
        receive_cancellation_confirmations: false,
        include_calendar_attachment: false,
        roles: [],
        profile_picture: null,
      }),
    };
  },

  methods: {
    async onSubmit() {
      try {
        const { data: { data: { id } } } = await this.userForm.post('/users', (data) => {
          // Remove the profile picture from the request if null.
          if (data.profile_picture === null) {
            delete data.profile_picture;
          }
        });
        this.$router.push({ name: 'users.show', params: { user: id } });
      } catch (exception) {
        // Supress error from console.
      }
    },
  },
};
</script>
