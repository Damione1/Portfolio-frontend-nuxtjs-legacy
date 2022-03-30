<template>
  <nuxt-link :to="`/project/${projectItem.slug}`" class="w-full block h-full">
            <img alt="blog photo" :src="projectItem.images[0].url || ''" class="max-h-60 w-full object-cover">
            <div class="dark:bg-neutral-800 w-full p-4">
              <p class="text-indigo-500 text-md font-medium">
                {{ projectItem.title }}
              </p>
              <p v-if="projectItem.content" class="text-gray-400 dark:text-gray-300 font-light text-md">
                {{ projectItem.excerpt || '' }}
              </p>
              <div class="flex items-center mt-4">
                <div class="flex flex-col justify-between text-sm">
                  <p class="text-gray-400 dark:text-gray-300">
                    {{ $dateFns.format(projectItem.date, 'dd MMM yyyy' ) }}
                  </p>
                </div>
              </div>
            </div>
          </nuxt-link>
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
