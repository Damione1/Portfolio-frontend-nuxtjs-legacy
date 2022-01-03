<template>
  <div>
    <h1>{{ title }}</h1>

    <ProjectListing :posts="projectsList" />
  </div>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  async asyncData ({ $axios }) {
    const res = await $axios({ url: '/api/projects/' })
    return { projectsList: res.data }
  },
  data () {
    return {
      projectsList: [],
      title: 'Projects'
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  methods: {
    editPost (id) {
      this.$router.push(`/backend/projects/${id}`)
    },
    deletePost (id) {
      this.$axios.delete(`/api/projects/${id}`).then(() => {
        this.fetchPosts()
      })
    },
    fetchPosts () {
      this.$axios.get('/api/projects/')
        .then((res) => {
          this.projectsList = res.data
        })
    }
  }
}
</script>
