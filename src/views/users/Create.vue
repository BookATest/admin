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

            <bat-radio
              label="Display your email to service users?"
              v-model="userForm.display_email"
              @input="userForm.$errors.clear('display_email')"
            />

            <bat-radio
              label="Display your phone to service users?"
              v-model="userForm.display_phone"
              @input="userForm.$errors.clear('display_phone')"
            />

            <bat-radio
              label="Received booking confirmations?"
              v-model="userForm.receive_booking_confirmations"
              @input="userForm.$errors.clear('receive_booking_confirmations')"
            />

            <bat-radio
              label="Received cancellation confirmations?"
              v-model="userForm.receive_cancellation_confirmations"
              @input="userForm.$errors.clear('receive_cancellation_confirmations')"
            />

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
import BatRadio from '@/views/users/components/Radio.vue';

export default {
  name: 'UsersCreateView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: { BatButton, BatInput, BatRadio },

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
