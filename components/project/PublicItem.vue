<template>
  <div>
    <h2>{{ projectItem.name }}</h2>
    <p>{{ projectItem.description }}</p>
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
