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
    <SkillForm :post="skill" @submitSkill="submit" />
  </v-card>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  data () {
    return {
      skill: {
        name: '',
        value: 50,
        language: 'en'
      },
      snackBarContent: '',
      snackbarType: 'success',
      snackbar: false
    }
  },
  methods: {
    async submit (formData) {
      await this.$axios.post('/skills/', formData)
        .then((res) => {
          const postId = res.data._id
          this.$router.push('/backend/skills/' + postId)
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
