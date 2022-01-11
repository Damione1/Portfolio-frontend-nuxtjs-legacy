<template>
  <div>
    <h1>{{ title }}</h1>

    <ProjectListing :posts="blogpostsList" admin-path="blog" />
  </div>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  async asyncData ({ $axios }) {
    const res = await $axios({ url: '/blogPosts/' })
    return { blogpostsList: res.data }
  },
  data () {
    return {
      blogpostsList: [],
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
      this.$router.push(`/backend/blog/${id}`)
    },
    deletePost (id) {
      this.$axios.delete(`/blogPosts/${id}`).then(() => {
        this.fetchPosts()
      })
    },
    fetchPosts () {
      this.$axios.get('/blogPosts/')
        .then((res) => {
          this.blogpostsList = res.data
        })
    }
  }
}
</script>
