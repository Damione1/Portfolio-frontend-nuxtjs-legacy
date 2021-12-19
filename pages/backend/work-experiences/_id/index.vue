<template>
  <v-card flat>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="success"
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
    const res = await $axios({ url: '/api/workExperiences/' + id })
    return { professionnalExperience: res.data }
  },
  methods: {
    updateExperience (formData) {
      this.$axios.patch('/api/workExperiences/' + formData._id, formData)
        .then(() => {
          this.snackBarContent = 'Experience updated successfully'
          this.snackbar = true
          this.$router.push('/backend/work-experiences/')
        })
    },
    deleteExperience (formData) {
      this.$axios.delete('/api/workExperiences/' + formData._id)
        .then((res) => {
          this.snackbar = true
          this.snackBarContent = res.data.message
          this.$router.push('/backend/work-experiences/')
        })
    }
  }

}
</script>
