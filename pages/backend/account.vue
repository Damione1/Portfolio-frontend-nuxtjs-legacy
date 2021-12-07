<template>
  <section class="section">
    <div class="container">
      <h2 class="title">My account</h2>
      <div class="content">
        <p>
          <strong>Username:</strong>
          {{ loggedInUser.firstName }} {{ loggedInUser.lastName }}
        </p>
        <p>
          <strong>Email:</strong>
          {{ loggedInUser.email }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['loggedInUser'])
  },
  layout: 'backend',
  middleware: 'auth',
}
</script>