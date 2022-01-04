<template>
  <div class="p-4 w-full lg:w-1/3 sm:w-1/2">
    <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
      <div class="flex-grow">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
          {{ qualificationItem.school }}
        </h2>
        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
          {{ qualificationItem.grade }}
        </h2>
        <p class="leading-relaxed text-base">
          {{ $dateFns.format(qualificationItem.startDate, 'MMM yyyy' ) }} - {{ qualificationItem.current ? 'Present' : $dateFns.format(qualificationItem.endDate, 'MMM yyyy' ) }}
        </p>
        <p class="leading-relaxed text-base">
          {{ qualificationItem.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    qualificationItem: {
      type: Object,
      required: true
    }
  }
}
</script>
