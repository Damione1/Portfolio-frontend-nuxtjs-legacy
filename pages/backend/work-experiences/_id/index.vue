<template>
  <div>
    <h1>Work Experiences - Edit</h1>
    <input v-model="professionnalExperience.company" type="text">
    <input v-model="professionnalExperience.position" type="text">
    <input v-model="professionnalExperience.description" type="textarea">
    <input v-model="professionnalExperience.position" type="text">
    <input v-model="professionnalExperience.startDate" type="date">
    <input v-model="professionnalExperience.endDate" type="date">
    <button type="submit" @click="updateExperience">
      Submit
    </button>
    <button type="submit" @click="deleteExperience">
      Delete
    </button>
  </div>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  async asyncData ({ $axios, route }) {
    const { id } = route.params
    const res = await $axios({ url: '/api/workExperiences/' + id })
    return { professionnalExperience: res.data }
  },
  data () {
    return {
      professionnalExperience: []
    }
  },
  methods: {
    updateExperience () {
      this.$axios.patch('/api/workExperiences/' + this.professionnalExperience._id, this.professionnalExperience)
        .then((res) => {
          console.log(res)
          this.$router.push('/backend/work-experiences/')
        })
    },
    deleteExperience () {
      this.$axios.delete('/api/workExperiences/' + this.professionnalExperience._id)
        .then((res) => {
          console.log(res)
          this.$router.push('/backend/work-experiences/')
        })
    }
  }
}
</script>
