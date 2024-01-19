<template>
  <div class="p-4 w-full lg:w-1/3 sm:w-1/2">
    <div class="flex border-2 rounded-lg border-gray-200 dark:text-gray-300 border-opacity-50 p-8 sm:flex-row flex-col">
      <div class="flex-grow">
        <h3 class="mb-3">
          <div class="text-gray-900 dark:text-gray-400 text-xl title-font font-bold">
            {{ qualificationItem.school }}
          </div>
          <div class="text-gray-900 dark:text-gray-400 text-md title-font font-medium">
            {{ qualificationItem.grade }}
          </div>
        </h3>
        <p class="leading-relaxed text-base">
          {{ $dateFns.format(qualificationItem.startDate, 'MMM yyyy' ) }} - {{ qualificationItem.current ? 'Present' : $dateFns.format(qualificationItem.endDate, 'MMM yyyy' ) }}
        </p>
        <p class="leading-relaxed text-base" style="white-space: pre-line">
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
