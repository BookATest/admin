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

            <div class="edit-user__notification" v-for="(role, index) in userForm.roles" :key="role._id">
              <div class="form__drop-down">
                <label for="dropdown"><span>Role</span></label>
                <div>
                  <select v-model="role.role">
                    <option value="">Select role...</option>
                    <option v-for="role in roles" :key="role.value" :value="role.value">{{ role.text }}</option>
                  </select>
                </div>
              </div>

              <template v-if="['service_admin', 'community_worker'].includes(role.role)">
                <bat-loader v-if="loadingClinics"/>
                <div v-else class="form__drop-down">
                  <label for="dropdown"><span>Location</span></label>
                  <div>
                    <select v-model="role.clinic_id">
                      <option value="">Select clinic...</option>
                      <option v-for="clinic in clinics" :key="clinic.id" :value="clinic.id">{{ clinic.name }}</option>
                    </select>
                  </div>
                </div>
              </template>

              <div class="create-user__remove-permission-button">
                <bat-button @click="onRemoveRole(index)" type="button" primary>
                  <span>Remove permission</span>
                </bat-button>
              </div>
            </div>

            <div class="edit-user__notification">
              <bat-button @click="onAddRole" type="button" primary>
                <span>Add permission</span>
              </bat-button>
            </div>

            <bat-image
              v-model="userForm.profile_picture"
              @input="userForm.$errors.clear('profile_picture')"
              :error="userForm.$errors.get('profile_picture')"
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
import BatImage from '@/views/users/components/Image.vue';


export default {
  name: 'UsersCreateView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: {
    BatButton,
    BatInput,
    BatRadio,
    BatImage,
  },

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
      loadingClinics: false,
      clinics: [],
      roles: [
        { value: 'organisation_admin', text: 'Organisation admin' },
        { value: 'service_admin', text: 'Service admin' },
        { value: 'community_worker', text: 'Community worker' },
      ],
    };
  },

  watch: {
    'userForm.roles': {
      handler(roles) {
        // Loop through each role.
        roles.forEach((role) => {
          // Unset the clinic ID if not required for selected role.
          if (!['service_admin', 'community_worker'].includes(role.role)) {
            role.clinic_id = '';
          }
        });
      },
      deep: true,
    },
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

    onAddRole() {
      this.userForm.roles.push({
        _id: this.uuid(),
        role: '',
        clinic_id: '',
      });
    },

    onRemoveRole(index) {
      this.$delete(this.userForm.roles, index);
    },

    async fetchClinics() {
      this.loadingClinics = true;
      this.clinics = await this.fetchAll('/clinics');
      this.loadingClinics = false;
    },
  },

  created() {
    this.fetchClinics();
  },
};
</script>

<style lang="scss">
.create-user {
  &__remove-permission-button {
    margin-top: 1rem;
    width: unset !important;
  }
}
</style>
