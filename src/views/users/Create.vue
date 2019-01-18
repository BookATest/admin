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

            <div class="form__text">
              <label for="first_name"><span>First name</span></label>
              <div>
                  <input v-model="userForm.first_name" type="text" id="first_name" name="first_name" @input="userForm.$errors.clear('first_name')">
                  <bat-body v-if="userForm.$errors.has('first_name')">
                    {{ userForm.$errors.get('first_name') }}
                  </bat-body>
              </div>

            </div>

            <div class="form__text">
              <label for="last_name"><span>Last name</span></label>
              <div>
                  <input v-model="userForm.last_name" type="text" id="last_name" name="last_name" @input="userForm.$errors.clear('last_name')">
                  <bat-body v-if="userForm.$errors.has('last_name')">
                    {{ userForm.$errors.get('last_name') }}
                  </bat-body>
              </div>
            </div>

            <div class="form__text">
              <label for="email"><span>Email</span></label>
              <div>
                  <input v-model="userForm.email" type="email" id="email" name="email" @input="userForm.$errors.clear('email')">
                  <bat-body v-if="userForm.$errors.has('email')">
                    {{ userForm.$errors.get('email') }}
                  </bat-body>
              </div>
            </div>

            <div class="form__text">
              <label for="phone"><span>Phone</span></label>
              <div>
                  <input v-model="userForm.phone" type="tel" id="phone" name="phone" @input="userForm.$errors.clear('phone')">
                  <bat-body v-if="userForm.$errors.has('phone')">
                    {{ userForm.$errors.get('phone') }}
                  </bat-body>
              </div>
            </div>

            <div class="form__text">
              <label for="password"><span>Password</span></label>
              <div>
                  <input v-model="userForm.password" type="password" id="password" name="password" @input="userForm.$errors.clear('password')">
                  <bat-body v-if="userForm.$errors.has('password')">
                    {{ userForm.$errors.get('password') }}
                  </bat-body>
              </div>
            </div>

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
                <span v-if="!userForm.$submitting">Save</span>
                <span v-else>Saving...</span>
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
import BatBody from '@/components/Body.vue';

export default {
  name: 'UsersCreateView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: { BatButton, BatBody },

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
