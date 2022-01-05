<template>
  <v-card
    flat
  >
    <v-card-text class="py-0">
      <v-btn
        to="/backend/projects/add"
        nuxt
      >
        Add new project
      </v-btn>
      <ProjectItem
        v-for="post in posts"
        :key="post.id"
        :project-item="post"
      />
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
