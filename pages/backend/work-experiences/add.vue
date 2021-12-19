<template>
  <PostsListAddExperience :post="professionnalExperience" @submitExperience="submit" />
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
      }
    }
  },
  methods: {
    async submit (formData) {
      await this.$axios.post('/api/workExperiences/', formData)
        .then((res) => {
          const postId = res.data._id
          this.$router.push('/backend/work-experiences/' + postId)
        })
    }
  }
}
</script>
