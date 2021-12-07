<template>
  <div>
    <Navbar/>
    <nuxt/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/Navbar'

export default {
  computed: {
    ...mapGetters(['loggedInUser'])
  },
  components: {
    Navbar
  }
}
</script>