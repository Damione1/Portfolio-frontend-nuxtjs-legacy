<template>
  <div>
    <h2>{{ skillItem.name }}</h2>
    <v-progress-linear
      color="light-blue"
      height="10"
      :value="skillItem.value"
      striped
    />
  </div>
</template>

<script lang="ts">

export default {
  props: {
    skillItem: {
      type: Object,
      required: true
    }
  }
}
</script>
