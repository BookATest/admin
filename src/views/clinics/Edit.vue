<template>
  <div class="main">

    <!-- Location Edit -->
    <div class="location-edit">

      <bat-loader v-if="loadingClinic || loadingEligibleAnswers"/>
      <div v-else class="location-edit__form">

        <!-- Clinic form -->
        <div>
          <form @submit.prevent="onSubmitClinic" class="form form--location-edit">
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

        <!-- Eligible answers form -->
        <div>
          <h2>Eligible answers</h2>

          <bat-card warning v-if="!answersExist">
            <div class="warning__icon">
              <i class="icon icon--warning"></i>
            </div>
            <div class="warning__content">
              <p>
                This clinic has not yet set their eligible answers, therefore it
                will not be available for appointments until they have been set.
              </p>
            </div>
          </bat-card>

          <form @submit.prevent="onSubmitEligibleAnswers">
            <div v-for="(eligibleAnswer, eligibleAnswerIndex) in eligibleAnswersForm.answers" :key="`Question${eligibleAnswer.question_id}`" class="bat-eligible-answer">
              <h3>{{ eligibleAnswer.question.question }}</h3>

              <!-- Select -->
              <div v-if="eligibleAnswer.question.type === 'select'">
                <button
                  @click="toggleAnswerOption(eligibleAnswer.question, option); eligibleAnswersForm.$errors.clear(`answers.${eligibleAnswerIndex}`);"
                  class="bat-button"
                  :class="{ 'bat-button--selected': optionSelected(eligibleAnswer.question, option) }"
                  v-for="(option, index) in eligibleAnswer.question.options"
                  :key="`QuestionOption${eligibleAnswer.question_id}-${index}`"
                  type="button"
                >
                  {{ option }}
                </button>
              </div>

              <!-- Checkbox -->
              <div v-else-if="eligibleAnswer.question.type === 'checkbox'">
                <button
                  @click="selectCheckbox(eligibleAnswer.question, option); eligibleAnswersForm.$errors.clear(`answers.${eligibleAnswerIndex}`);"
                  class="bat-button"
                  :class="{ 'bat-button--selected': checkboxSelected(eligibleAnswer.question, option) }"
                  v-for="(option, index) in [true, false]"
                  :key="`QuestionOption${eligibleAnswer.question_id}-${index}`"
                  type="button"
                >
                  {{ option ? 'Yes' : 'No' }}
                </button>
              </div>

              <!-- Date -->
              <div v-else-if="eligibleAnswer.question.type === 'date'">
                <button
                  @click="selectComparison(eligibleAnswer.question, option); eligibleAnswersForm.$errors.clear(`answers.${eligibleAnswerIndex}`);"
                  class="bat-button"
                  :class="{ 'bat-button--selected': comparisonSelected(eligibleAnswer.question, option) }"
                  v-for="(option, index) in ['<', '>']"
                  :key="`QuestionOption${eligibleAnswer.question_id}-${index}`"
                  type="button"
                >
                  {{ option === '>' ? 'Greater than' : 'Less than' }}
                </button>
                <bat-input
                  v-model="eligibleAnswer.answer.interval"
                  @input="eligibleAnswersForm.$errors.clear(`answers.${eligibleAnswerIndex}`)"
                  label="Interval (in seconds)"
                  type="number"
                  step="1"
                  min="0"
                />
                <p v-if="eligibleAnswer.answer.interval !== ''">
                  {{ $moment().add(eligibleAnswer.answer.interval, 'seconds').fromNow(true) }}
                </p>
              </div>

              <p v-if="eligibleAnswersForm.$errors.has(`answers.${eligibleAnswerIndex}`)">
                {{ eligibleAnswersForm.$errors.get(`answers.${eligibleAnswerIndex}`) }}
              </p>
            </div>

            <div class="location-edit__action">
              <bat-button type="submit" primary :disabled="eligibleAnswersForm.$submitting">
                <span v-if="!eligibleAnswersForm.$submitting">Update</span>
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
import BatCard from '@/components/Card.vue';

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
    BatCard,
  },

  data() {
    return {
      loadingClinic: false,
      deletingClinic: false,
      clinic: null,
      clinicForm: null,
      loadingEligibleAnswers: false,
      eligibleAnswersForm: null,
      answersExist: false,
    };
  },

  methods: {
    async onSubmitClinic() {
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

    async fetchQuestions() {
      this.loadingEligibleAnswers = true;

      let { data: { data: questions } } = await this.$http.get('/questions');
      questions = questions.filter(question => question.type !== 'text');

      await this.fetchEligibleAnswers(questions);

      this.loadingEligibleAnswers = false;
    },

    async fetchEligibleAnswers(questions) {
      try {
        const { data: { data: eligibleAnswers } } = await this.$http.get(`/clinics/${this.$route.params.clinic}/eligible-answers`);
        eligibleAnswers.forEach((eligibleAnswer) => {
          eligibleAnswer.question = questions.find(question => question.id === eligibleAnswer.question_id);
        });

        this.eligibleAnswersForm = new Form({
          answers: eligibleAnswers,
        });

        this.answersExist = true;
      } catch (exception) {
        this.eligibleAnswersForm = new Form({
          answers: questions.map((question) => {
            let answer = null;

            switch (question.type) {
              case 'select':
                answer = [];
                break;
              case 'checkbox':
                answer = null;
                break;
              case 'date':
                answer = {
                  comparison: '',
                  interval: 0,
                };
                break;
              default:
                throw new Error(`Invalid question type [${question.type}]`);
            }

            return {
              question,
              question_id: question.id,
              answer,
            };
          }),
        });
      }
    },

    /**
     * Determined whether the option has bee selected as an eligible answer.
     *
     * @returns {Boolean}
     */
    optionSelected(question, option) {
      return this.eligibleAnswersForm.answers
        .find(foundEligibleAnswer => foundEligibleAnswer.question_id === question.id)
        .answer
        .find(answer => answer === option) !== undefined;
    },

    toggleAnswerOption(question, option) {
      const eligibleAnswer = this.eligibleAnswersForm.answers
        .find(foundEligibleAnswer => foundEligibleAnswer.question_id === question.id);

      const alreadySelected = eligibleAnswer.answer.indexOf(option) === -1;

      if (alreadySelected) {
        eligibleAnswer.answer.push(option);
      } else {
        eligibleAnswer.answer.splice(eligibleAnswer.answer.indexOf(option), 1);
      }
    },

    selectCheckbox(question, option) {
      const answer = this.eligibleAnswersForm.answers
        .find(foundEligibleAnswer => foundEligibleAnswer.question_id === question.id);

      answer.answer = answer.answer === option ? null : option;
    },

    checkboxSelected(question, option) {
      return this.eligibleAnswersForm.answers
        .find(foundEligibleAnswer => foundEligibleAnswer.question_id === question.id)
        .answer === option;
    },

    selectComparison(question, comparison) {
      this.eligibleAnswersForm.answers
        .find(foundEligibleAnswer => foundEligibleAnswer.question_id === question.id)
        .answer
        .comparison = comparison;
    },

    comparisonSelected(question, comparison) {
      return this.eligibleAnswersForm.answers
        .find(foundEligibleAnswer => foundEligibleAnswer.question_id === question.id)
        .answer
        .comparison === comparison;
    },

    async onSubmitEligibleAnswers() {
      try {
        const { data: { id } } = await this.eligibleAnswersForm.put(`/clinics/${this.$route.params.clinic}/eligible-answers`, (data) => {
          // Parse date answer interval as integer.
          data.answers
            .filter(answer => answer.question.type === 'date')
            .forEach((answer) => {
              answer.answer.interval = parseInt(answer.answer.interval, 10);
            });
        });
        this.answersExist = true;

        this.$router.push({ name: 'clinics.edit', params: { clinic: id } });
      } catch (exception) {
        console.log(exception);
        // Supress error from console.
      }
    },
  },

  created() {
    this.fetchClinic();
    this.fetchQuestions();
  },
};
</script>

<style lang="scss">
.bat-eligible-answer {
  padding: 1.5rem 0;
  border-bottom: 1px dashed #ddd;
}

.bat-button {
  padding: .5rem 1rem;
  margin-right: .5rem;
  border-radius: 8px;
  background: none;
  border: 1px solid #000;

  &:hover {
    cursor: pointer;
  }

  &--selected {
    background-color: #5593f0;
    border-color: #5593f0;
    color: #fff;
  }
}
</style>
