<template>
  <div>
    <h1>{{ title }}</h1>

    <ProjectListing :posts="projectsList" admin-path="projects" />
  </div>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  async asyncData ({ $axios }) {
    const res = await $axios({ url: '/projects/' })
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
      this.$axios.delete(`/projects/${id}`).then(() => {
        this.fetchPosts()
      })
    },
    fetchPosts () {
      this.$axios.get('/projects/')
        .then((res) => {
          this.projectsList = res.data
        })
    }
  }
}
</script>
