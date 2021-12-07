<template>
  <div>
    <h1>Work Experiences</h1>
    <ul>
      <li
        v-for="professionnalExperience in professionnalExperiences"
        :key="professionnalExperience._id"
      >
        <ul>
          <li>{{ professionnalExperience.position }}</li>
          <li>{{ professionnalExperience.company }}</li>
          <li>{{ professionnalExperience.description }}</li>
          <li>{{ professionnalExperience.startDate }}</li>
          <li>{{ professionnalExperience.endDate }}</li>
          <li>
            <nuxt-link to="/work-experiences/{{ professionnalExperience._id }}">
              Editer
            </nuxt-link>
            <button @click="deletePost(professionnalExperience._id)">
              Supprimer
            </button>
          </li>
        </ul>
        ---
      </li>
    </ul>
    <nuxt-link to="/backend/work-experiences/add">
      <button>Ajouter une expérience</button>
    </nuxt-link>
  </div>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  async asyncData ({ $axios }) {
    const res = await $axios({ url: '/api/workExperiences/' })
    return { professionnalExperiences: res.data }
  },
  data () {
    return {
      professionnalExperiences: []
    }
  },
  methods: {
    editPost (id) {
      this.$router.push(`/backend/work-experiences/${id}`)
    },
    deletePost (id) {
      this.$axios.delete(`/api/workExperiences/${id}`).then((res) => {
        console.log(res)
        this.fetchPosts()
      })
    },
    fetchPosts () {
      this.$axios.get('/api/workExperiences/')
        .then((res) => {
          this.professionnalExperiences = res.data
        })
    }
  }
}
</script>
