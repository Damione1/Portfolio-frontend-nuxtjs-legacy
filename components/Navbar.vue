<template>
  <v-app-bar
    app
    dark
    shrink-on-scroll
    src="https://picsum.photos/1920/1080?random"
  >
    <template #img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      />
    </template>

    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

    <v-app-bar-title> {{ pageTitle }}</v-app-bar-title>

    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu offset-y>
      <template #activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <nuxt-link class="navbar-item" to="/">
              Frontend
            </nuxt-link>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <nuxt-link class="navbar-item" to="/backend/account">
              My profile
            </nuxt-link>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn @click="logout">
              Logout
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    drawer: false,
    group: null,
    pageTitle: ''
  }),
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  watch: {
    group () {
      this.drawer = false
    }
  },
  methods: {
    async logout () {
      await this.$auth.logout()
    }
  }
}
</script>
