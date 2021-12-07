<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Backend
      </h1>
      <nuxt-link to="/backend/work-experiences">
        Work Experiences
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'backend',
  middleware: 'auth'
}

</script>
