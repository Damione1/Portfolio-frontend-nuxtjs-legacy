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
    <ProjectForm :post="blogPost" @submitProject="updateBlogPost" @deleteBlogPost="deleteBlogPost" />
  </v-card>
</template>

<script>

export default {
  layout: 'backend',
  middleware: 'auth',
  async asyncData ({ $axios, route }) {
    const { id } = route.params
    const res = await $axios({ url: '/blogPosts/' + id })
    return { blogPost: res.data }
  },
  data () {
    return {
      snackBarContent: 'blog post updated successfully',
      snackbarType: 'success',
      snackbar: false
    }
  },
  methods: {
    updateBlogPost (formData) {
      this.$axios.patch('/blogPosts/' + formData._id, formData)
        .then(() => {
          this.snackBarContent = 'blogPost updated successfully'
          this.snackbar = true
          this.snackbarType = 'success'
          this.$router.push('/backend/blogPosts/')
        }).catch((e) => {
          if (e.response) {
            this.snackBarContent = e.response.data.message
            this.snackbar = true
            this.snackbarType = 'error'
          }
        })
    },
    deleteBlogPost (formData) {
      this.$axios.delete('/blogPosts/' + formData._id)
        .then((res) => {
          this.snackbar = true
          this.snackBarContent = res.data.message
          this.snackbarType = 'success'
          this.$router.push('/backend/blog/')
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
