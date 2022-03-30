<template>
  <div>
    <h2>{{ projectItem.title }}</h2>
    <p v-if="projectItem.excerpt">
      {{ projectItem.excerpt.substring(0, 100) }}
    </p>
    <v-btn icon :to="`/backend/${adminPath}/${projectItem._id}`" nuxt>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>

export default {
  props: {
    projectItem: {
      type: Object,
      required: true
    },
    adminPath: {
      type: String,
      required: true
    }
  }
}
</script>
