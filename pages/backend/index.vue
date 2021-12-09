<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Backend
      </h1>
      <nuxt-link to="/backend/work-experiences">
        Work Experiences
      </nuxt-link>
      <button @click="refresh()">
        Refresh
      </button>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'backend',
  middleware: 'auth',
  methods: {
    refresh () {
      this.$auth.refreshTokens()
    }
  }
}

</script>
