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
    <PostsListAddExperience :post="professionnalExperience" @submitExperience="updateExperience" @deleteExperience="deleteExperience" />
  </v-card>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  async asyncData ({ $axios, route }) {
    const { id } = route.params
    const res = await $axios({ url: '/workExperiences/' + id })
    return { professionnalExperience: res.data }
  },
  data () {
    return {
      nackBarContent: 'Experience updated successfully',
      snackbarType: 'success',
      snackbar: false
    }
  },
  methods: {
    updateExperience (formData) {
      this.$axios.patch('/workExperiences/' + formData._id, formData)
        .then(() => {
          this.snackBarContent = 'Experience updated successfully'
          this.snackbar = true
          this.snackbarType = 'success'
          this.$router.push('/backend/work-experiences/')
        }).catch((e) => {
          if (e.response) {
            this.snackBarContent = e.response.data.message
            this.snackbar = true
            this.snackbarType = 'error'
          }
        })
    },
    deleteExperience (formData) {
      this.$axios.delete('/workExperiences/' + formData._id)
        .then((res) => {
          this.snackbar = true
          this.snackBarContent = res.data.message
          this.snackbarType = 'success'
          this.$router.push('/backend/work-experiences/')
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
