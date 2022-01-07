<template>
  <v-card flat>
    <ProjectForm :post="project" @submitProject="submitProject" />
  </v-card>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  data () {
    return {
      project: {
        name: '',
        description: '',
        link: '',
        images: [],
        tags: [],
        language: 'en'
      }
    }
  },
  methods: {
    async submitProject (formData) {
      await this.$axios.post('/projects/', formData)
        .then((res) => {
          const postId = res.data._id
          this.$router.push('/backend/projects/' + postId)
        })
    }
  }
}
</script>
