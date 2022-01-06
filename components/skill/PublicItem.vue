<template>
  <div class="flex flex-col items-center p-3 bg-gray-200 rounded">
    <img
      v-if="skillItem.icon"
      class="w-16 h-16"
      :src="skillItem.icon.url"
      :alt="skillItem.name"
    >
    <p class="mt-2 text-lg font-semibold text-gray-600">
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
