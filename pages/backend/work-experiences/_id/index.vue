<template>
  <div>
    <h1>Work Experiences - Edit</h1>
    <input v-model="professionnalExperience.company" type="text">
    <input v-model="professionnalExperience.position" type="text">
    <input v-model="professionnalExperience.description" type="textarea">
    <input v-model="professionnalExperience.position" type="text">
    <input v-model="professionnalExperience.startDate" type="date">
    <input v-if="false === professionnalExperience.current" v-model="professionnalExperience.endDate" type="date" placeholder="EndDate">
    Current? <input v-model="professionnalExperience.current" type="checkbox">
    <button type="submit" @click="updateExperience">
      Update
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
