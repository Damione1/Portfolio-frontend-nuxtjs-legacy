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
    <ProjectForm :post="project" @submitProject="updateProject" @deleteProject="deleteProject" />
  </v-card>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  async asyncData ({ $axios, route }) {
    const { id } = route.params
    const res = await $axios({ url: '/projects/' + id })
    return { project: res.data }
  },
  data () {
    return {
      snackBarContent: 'Project updated successfully',
      snackbarType: 'success',
      snackbar: false
    }
  },
  methods: {
    updateProject (formData) {
      this.$axios.patch('/projects/' + formData._id, formData)
        .then(() => {
          this.snackBarContent = 'Project updated successfully'
          this.snackbar = true
          this.snackbarType = 'success'
          this.$router.push('/backend/projects/')
        }).catch((e) => {
          if (e.response) {
            this.snackBarContent = e.response.data.message
            this.snackbar = true
            this.snackbarType = 'error'
          }
        })
    },
    deleteProject (formData) {
      this.$axios.delete('/projects/' + formData._id)
        .then((res) => {
          this.snackbar = true
          this.snackBarContent = res.data.message
          this.snackbarType = 'success'
          this.$router.push('/backend/projects/')
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
