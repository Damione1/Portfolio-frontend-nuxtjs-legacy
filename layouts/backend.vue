<template>
  <v-app>
    <SideMenu />
    <v-main>
      <Navbar />
      <!-- margin top -->

      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  },
  computed: {
    ...mapGetters(['loggedInUser'])
  }
}
</script>
