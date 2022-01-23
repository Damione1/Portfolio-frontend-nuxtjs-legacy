<template>
  <v-navigation-drawer
    permanent
    fixed
    app
    dark
  >
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg" />
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ $auth.user.firstName }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider />

    <v-list
      nav
      dense
    >
      <v-list-item v-for="menuItem in menuItems" :key="menuItem.title" link :to="menuItem.route" nuxt>
        <v-list-item-icon>
          <v-icon>{{ menuItem.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          {{ menuItem.title }}
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title @click="logout">
          Logout
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    menuItems: {
      home: {
        title: 'Home',
        icon: 'mdi-home',
        route: '/backend'
      },
      workExperiences: {
        title: 'Work Experiences',
        icon: 'mdi-folder',
        route: '/backend/work-experiences'
      },
      qualifications: {
        title: 'Qualifications',
        icon: 'mdi-folder',
        route: '/backend/qualifications'
      },
      skills: {
        title: 'Skills',
        icon: 'mdi-folder',
        route: '/backend/skills'
      },
      projects: {
        title: 'Projects',
        icon: 'mdi-folder',
        route: '/backend/projects'
      },
      blog: {
        title: 'Blog',
        icon: 'mdi-folder',
        route: '/backend/blog'
      },
      medias: {
        title: 'Medias',
        icon: 'mdi-image',
        route: '/backend/medias'
      },
      account: {
        title: 'My profile',
        icon: 'mdi-account',
        route: '/backend/account'
      }
    }
  }),
  computed: {
    ...mapGetters(['loggedInUser'])
  },
  methods: {
    async logout () {
      await this.$auth.logout()
    }
  }
}
</script>
