<template>
  <v-card
    flat
  >
    <v-card-text class="py-0">
      <v-btn
        :to="`/backend/${adminPath}/add`"
        nuxt
      >
        Add new project
      </v-btn>
      <ProjectItem
        v-for="post in posts"
        :key="post.id"
        :project-item="post"
        :admin-path="adminPath"
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
    },
    adminPath: {
      type: String,
      required: true
    }
  }
}
</script>
