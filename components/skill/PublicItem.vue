<template>
  <div class="col-span-1 flex flex-col justify-center items-center">
    <div class="p-10">
      <img
        v-if="skillItem.icon"
        class="object-contain h-48 w-96"
        :src="skillItem.icon.url"
        alt="skill logo"
      >
      <p class="leading-relaxed title-font text-center">
        {{ skillItem.name }}
      </p>
    </div>
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
