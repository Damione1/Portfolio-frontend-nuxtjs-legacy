<template>
  <div>
    <h1>{{ title }}</h1>

    <PostsListListing :posts="professionnalExperiences" />
  </div>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  async asyncData ({ $axios }) {
    const res = await $axios({ url: '/workExperiences/' })
    return { professionnalExperiences: res.data }
  },
  data () {
    return {
      professionnalExperiences: [],
      title: 'Work Experiences'
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  methods: {
    editPost (id) {
      this.$router.push(`/backend/work-experiences/${id}`)
    },
    deletePost (id) {
      this.$axios.delete(`/workExperiences/${id}`).then(() => {
        this.fetchPosts()
      })
    },
    fetchPosts () {
      this.$axios.get('/workExperiences/')
        .then((res) => {
          this.professionnalExperiences = res.data
        })
    }
  }
}
</script>
