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
    <QualificationForm :post="qualification" @submitQualification="updateQualification" @deleteQualification="deleteQualification" />
  </v-card>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  async asyncData ({ $axios, route }) {
    const { id } = route.params
    const res = await $axios({ url: '/qualifications/' + id })
    /* handle response error status code */
    if (res.status !== 200) {
      error.statusCode = res.status
    }

    return { qualification: res.data }
  },
  data () {
    return {
      snackBarContent: 'Qualification updated successfully',
      snackbarType: 'success',
      snackbar: false
    }
  },
  methods: {
    updateQualification (formData) {
      this.$axios.patch('/qualifications/' + formData._id, formData)
        .then(() => {
          this.snackBarContent = 'Qualification updated successfully'
          this.snackbar = true
          this.snackbarType = 'success'
          this.$router.push('/backend/qualifications/')
        }).catch((e) => {
          if (e.response) {
            this.snackBarContent = e.response.data.message
            this.snackbar = true
            this.snackbarType = 'error'
          }
        })
    },
    deleteQualification (formData) {
      this.$axios.delete('/qualifications/' + formData._id)
        .then((res) => {
          this.snackbar = true
          this.snackBarContent = res.data.message
          this.snackbarType = 'success'
          this.$router.push('/backend/qualifications/')
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
