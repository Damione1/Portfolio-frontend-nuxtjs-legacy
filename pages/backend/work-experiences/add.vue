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
    <PostsListAddExperience :post="professionnalExperience" @submitExperience="submit" />
  </v-card>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  data () {
    return {
      professionnalExperience: {
        company: null,
        position: null,
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
      await this.$axios.post('/workExperiences/', formData)
        .then((res) => {
          const postId = res.data._id
          this.$router.push('/backend/work-experiences/' + postId)
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
