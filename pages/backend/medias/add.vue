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
    <MediaForm :post="media" @submitMedia="submit" />
  </v-card>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  data () {
    return {
      media: {
        name: '',
        value: 50,
        language: 'en'
      },
      snackBarContent: '',
      snackbarType: 'success',
      snackbar: false
    }
  },
  methods: {
    async submit (formData) {
      await this.$axios.post('/medias/', formData)
        .then((res) => {
          const postId = res.data._id
          this.$router.push('/backend/medias/' + postId)
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
