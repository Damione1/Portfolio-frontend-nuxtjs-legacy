<template>
  <div class="p-4 md:w-1/3">
    <div class="flex rounded-lg h-full bg-gray-200 bg-opacity-60 p-8 flex-col">
      <div class="flex items-center mb-3">
        <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>
        <h2 class="text-gray-600 text-lg title-font font-medium">
          {{ projectItem.title }}
        </h2>
      </div>
      <div class="flex-grow">
        <p v-if="projectItem.content" class="leading-relaxed text-base">
          {{ projectItem.content.substring(0, 100) }}...
        </p>
        <nuxt-link :to="`/project/${projectItem.slug}`" class="mt-3 text-indigo-400 inline-flex items-center">
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          </a>
        </nuxt-link>
      </div>
    </div>
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
