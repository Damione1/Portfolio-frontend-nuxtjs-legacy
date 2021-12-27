<template>
  <v-card
    flat
    class="mx-auto"
    max-width="800"
  >
    <v-card-text class="py-0">
      <v-btn
        to="/backend/skills/add"
        nuxt
      >
        Add new skill
      </v-btn>
      <SkillItem
        v-for="post in posts"
        :key="post.id"
        :skill-item="post"
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
