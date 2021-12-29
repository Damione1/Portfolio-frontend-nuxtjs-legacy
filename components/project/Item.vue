<template>
  <div>
    <h2>{{ projectItem.name }}</h2>
    <p>{{ projectItem.description }}</p>
    <v-btn icon :to="'/backend/projects/' + projectItem._id" nuxt>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    projectItem: {
      type: Object,
      required: true
    }
  }
}
</script>
