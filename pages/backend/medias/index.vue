<template>
  <div>
    <h1>{{ title }}</h1>

    <MediaListing :medias="mediasList" />
  </div>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  async asyncData ({ $axios }) {
    const res = await $axios({ url: '/upload/' })
    return { mediasList: res.data }
  },
  data () {
    return {
      mediasList: [],
      title: 'Medias'
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  methods: {
    editPost (id) {
      this.$router.push(`/backend/medias/${id}`)
    },
    deletePost (id) {
      this.$axios.delete(`/upload/${id}`).then(() => {
        this.fetchPosts()
      })
    },
    fetchPosts () {
      this.$axios.get('/upload/')
        .then((res) => {
          this.mediasList = res.data
        })
    }
  }
}
</script>
