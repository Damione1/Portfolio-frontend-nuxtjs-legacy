<template>
  <div class="p-4 sm:w-1/4 w-1/2">
    <h2 class="title-font font-medium sm:text-4xl text-3xl">
      {{ skillItem.value }}%
    </h2>
    <p class="leading-relaxed">
      {{ skillItem.name }}
    </p>
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
