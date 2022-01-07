<template>
  <v-card flat>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      :color="snackbarType"
    >
      <span>{{ snackBarContent }}</span>
      <v-icon dark>
        mdi-checkbox-marked-circle
      </v-icon>
    </v-snackbar>
    <QualificationForm :post="qualification" @submitQualification="submit" />
  </v-card>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  data () {
    return {
      qualification: {
        school: null,
        grade: null,
        startDate: null,
        endDate: null,
        description: null,
        language: 'en',
        current: true
      },
      snackBarContent: '',
      snackbarType: 'success',
      snackbar: false
    }
  },
  methods: {
    async submit (formData) {
      await this.$axios.post('/qualifications/', formData)
        .then((res) => {
          const postId = res.data._id
          this.$router.push('/backend/qualifications/' + postId)
        }).catch((e) => {
          if (e.response) {
            this.snackBarContent = e.response.data.message
            this.snackbar = true
            this.snackbarType = 'error'
          }
        })
    }
  }
}
</script>
