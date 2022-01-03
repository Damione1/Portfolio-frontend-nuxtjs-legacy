<template>
  <v-app>
    <SideMenu />
    <Navbar />
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <!--  -->
    </v-footer>
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
