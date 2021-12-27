<template>
  <v-card flat>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      :color="snackbarType"
    >
      <span>{{ snackBarContent }}</span>
      <v-icon dark>
        mdi-checkbox-marked-circle
      </v-icon>
    </v-snackbar>
    <SkillForm :post="skill" @submitSkill="updateSkill" @deleteSkill="deleteSkill" />
  </v-card>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  async asyncData ({ $axios, route }) {
    const { id } = route.params
    const res = await $axios({ url: '/api/skills/' + id })
    return { skill: res.data }
  },
  data () {
    return {
      nackBarContent: 'Skill updated successfully',
      snackbarType: 'success',
      snackbar: false
    }
  },
  methods: {
    updateSkill (formData) {
      this.$axios.patch('/api/skills/' + formData._id, formData)
        .then(() => {
          this.snackBarContent = 'Skill updated successfully'
          this.snackbar = true
          this.snackbarType = 'success'
          this.$router.push('/backend/skills/')
        }).catch((e) => {
          if (e.response) {
            this.snackBarContent = e.response.data.message
            this.snackbar = true
            this.snackbarType = 'error'
          }
        })
    },
    deleteSkill (formData) {
      this.$axios.delete('/api/skills/' + formData._id)
        .then((res) => {
          this.snackbar = true
          this.snackBarContent = res.data.message
          this.snackbarType = 'success'
          this.$router.push('/backend/skills/')
        }).catch((e) => {
          if (e.response) {
            this.snackBarContent = e.response.data.message
            this.snackbar = true
            this.snackbarType = 'error'
          }
        })
    }
  }

}
</script>
