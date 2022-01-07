*.vue<template>
  <div>
    <h1>{{ title }}</h1>

    <SkillListing :posts="skillsList" />
  </div>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  async asyncData ({ $axios }) {
    const res = await $axios({ url: '/skills/' })
    return { skillsList: res.data }
  },
  data () {
    return {
      skillsList: [],
      title: 'Skills'
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  methods: {
    editPost (id) {
      this.$router.push(`/backend/skills/${id}`)
    },
    deletePost (id) {
      this.$axios.delete(`/skill/${id}`).then(() => {
        this.fetchPosts()
      })
    },
    fetchPosts () {
      this.$axios.get('/skills/')
        .then((res) => {
          this.skillsList = res.data
        })
    }
  }
}
</script>
