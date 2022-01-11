<template>
  <v-card flat>
    <ProjectForm :post="blogpost" @submitProject="submitProject" />
  </v-card>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  data () {
    return {
      blogpost: {
        title: '',
        content: '',
        excerpt: '',
        link: '',
        images: [],
        tags: [],
        language: 'en'
      }
    }
  },
  methods: {
    async submitProject (formData) {
      await this.$axios.post('/blogPosts/', formData)
        .then((res) => {
          const postId = res.data._id
          this.$router.push('/backend/blog/' + postId)
        })
    }
  }
}
</script>
