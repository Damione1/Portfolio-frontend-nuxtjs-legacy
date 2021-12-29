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
    <MediaForm :post="media" @submitMedia="updateMedia" @deleteMedia="deleteMedia" />
  </v-card>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  async asyncData ({ $axios, route }) {
    const { id } = route.params
    const res = await $axios({ url: '/api/upload/' + id })
    return { media: res.data }
  },
  data () {
    return {
      snackBarContent: 'Media updated successfully',
      snackbarType: 'success',
      snackbar: false
    }
  },
  methods: {
    updateMedia (formData) {
      this.$axios.patch('/api/upload/' + formData._id, formData)
        .then(() => {
          this.snackBarContent = 'Media updated successfully'
          this.snackbar = true
          this.snackbarType = 'success'
          this.$router.push('/backend/medias/')
        }).catch((e) => {
          if (e.response) {
            this.snackBarContent = e.response.data.message
            this.snackbar = true
            this.snackbarType = 'error'
          }
        })
    },
    deleteMedia (formData) {
      this.$axios.delete('/api/upload/' + formData._id)
        .then((res) => {
          this.snackbar = true
          this.snackBarContent = res.data.message
          this.snackbarType = 'success'
          this.$router.push('/backend/medias/')
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
