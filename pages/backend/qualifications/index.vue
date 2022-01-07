<template>
  <v-card>
    <h1>{{ title }}</h1>
    <QualificationListing :posts="qualificationsList" />
  </v-card>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  async asyncData ({ $axios }) {
    const res = await $axios({ url: '/qualifications/' })
    return { qualificationsList: res.data }
  },
  data () {
    return {
      qualificationsList: [],
      title: 'Qualifications'
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  methods: {
    editPost (id) {
      this.$router.push(`/backend/qualifications/${id}`)
    },
    deletePost (id) {
      this.$axios.delete(`/qualification/${id}`).then(() => {
        this.fetchPosts()
      })
    },
    fetchPosts () {
      this.$axios.get('/qualifications/')
        .then((res) => {
          this.qualificationsList = res.data
        })
    }
  }
}
</script>
