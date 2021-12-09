<template>
  <div>
    <h1>Work Experiences - Edit</h1>
    <input v-model="professionnalExperience.company" type="text" placeholder="Company">
    <input v-model="professionnalExperience.position" type="text" placeholder="Position">
    <input v-model="professionnalExperience.description" type="textarea" placeholder="Description">
    <input v-model="professionnalExperience.startDate" type="date" placeholder="StartDate">
    <input v-if="false === professionnalExperience.current" v-model="professionnalExperience.endDate" type="date" placeholder="EndDate">
    Current?<input v-model="professionnalExperience.current" type="checkbox">
    <input v-model="professionnalExperience.language" type="text" placeholder="Language ">
    <button type="submit" @click="addExperience">
      Add
    </button>
  </div>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  data () {
    return {
      professionnalExperience: {
        language: 'en',
        current: true
      }
    }
  },
  methods: {
    async addExperience () {
      await this.$axios.post('/api/workExperiences/', this.professionnalExperience)
        .then((res) => {
          const postId = res.data._id
          console.log(res)
          this.$router.push('/backend/work-experiences/' + postId)
        })
    }
  }
}
</script>
