<template>
  <div class="main">

    <!-- Reporting -->
    <div class="reporting">

      <div class="reporting__intro">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum sem quis aliquet laoreet. Duis blandit luctus nulla vel ullamcorper. Suspendisse eu efficitur justo. Quisque mollis in erat sit amet rhoncus.</p>
      </div>

      <div class="reporting__filter">
        <h2>Generate report</h2>

        <div class="form__date">
          <bat-loader v-if="loadingClinics"/>
          <bat-select
            v-else
            label="Location"
            v-model="reportForm.clinic_id"
            @input="reportForm.$errors.clear('clinic_id')"
            :error="reportForm.$errors.get('clinic_id')"
            :options="clinics | clinicOptions"
            :show-empty="false"
          />

          <bat-date-picker
            label="From"
            v-model="reportForm.start_at"
            @input="reportForm.$errors.clear('start_at')"
            :error="reportForm.$errors.get('start_at')"
          />

          -

          <bat-date-picker
            label="To"
            v-model="reportForm.end_at"
            @input="reportForm.$errors.clear('end_at')"
            :error="reportForm.$errors.get('end_at')"
          />
        </div>

      </div>

      <div class="reporting__buttons">
        <bat-button
          v-for="reportType in reportTypes"
          :key="`GenerateReport::${reportType.name}`"
          @click="onGenerate(reportType)"
          secondary
          :disabled="reportForm.$submitting"
        >
          {{ reportType.displayName }}
        </bat-button>
      </div>

    </div>

  </div>
</template>

<script>
import Form from '@/classes/Form';
import FileSaver from 'file-saver';
import BatSelect from '@/components/Select.vue';
import BatDatePicker from '@/components/DatePicker.vue';
import BatLoader from '@/components/Loader.vue';
import BatButton from '@/components/Button.vue';

export default {
  name: 'ReportsIndexView',

  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },

  components: {
    BatSelect,
    BatLoader,
    BatDatePicker,
    BatButton,
  },

  data() {
    return {
      reportTypes: [
        { name: 'general_export', displayName: 'General export' },
      ],
      reportForm: new Form({
        clinic_id: '',
        type: null,
        start_at: '',
        end_at: '',
      }),
      clinics: [],
      loadingClinics: false,
    };
  },

  filters: {
    clinicOptions(clinics) {
      const options = clinics.map(clinic => (
        {
          value: clinic.id,
          text: clinic.name,
        }
      ));

      options.unshift({
        value: '',
        text: 'All',
      });

      return options;
    },
  },

  methods: {
    async fetchClinics() {
      this.loadingClinics = true;

      this.clinics = await this.fetchAll('/clinics');

      this.loadingClinics = false;
    },

    async onGenerate(reportType) {
      const { data: report } = await this.reportForm.post('/reports', (data) => {
        // Set the report type depending on which button was clicked.
        data.type = reportType.name;
      });

      const response = await this.$http.get(`/reports/${report.id}/download`, {
        responseType: 'blob',
      });

      const content = response.data;
      const fileName = response.headers['content-disposition'].match(/filename="([A-Za-z0-9_-]+\.[a-z]+)"/)[1];

      FileSaver.saveAs(content, fileName);
    },
  },

  created() {
    this.fetchClinics();
  },
};
</script>
