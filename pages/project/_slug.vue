<template>
  <section class="text-gray-800 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" :src="getThumbnail()">
        </div>
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                Stack
              </h2>
              <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
              <p v-if="project.tags" class="text-base">
                {{ project.tags.join(', ') }}
              </p>
            </div>
          </div>
          <div class="prose prose-sm sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <h1>
              {{ project.title }}
            </h1>
            <p class="leading-relaxed text-left mb-4" v-html="$md.render(project.content || '')" />
            <a v-if="project.url" class="text-indigo-500 inline-flex items-center">Learn More
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  async asyncData ({ $axios, route }) {
    const { slug } = route.params
    const res = await $axios.get(`/public/project/${process.env.userId}`, { params: { field: 'slug', value: slug } })
    if (res.status !== 200) {
      error.statusCode = res.status
      error.message = 'Project not found'
    }
    return { project: res.data[0] }
  },
  data () {
    return {
      project: {}
    }
  },
  head () {
    return { title: this.project.title + ' | Damien Goehrig', meta: [{ hid: 'description', name: 'description', content: this.project.excerpt || '' }] }
  },
  methods: {
    getThumbnail () {
      return this.project.images ? `${this.project.images[0].url}` : 'https://generative-placeholders.glitch.me/image?width=1200&height=300&style=joy-division&colors=14'
    }
  }
}
</script>

<style>

</style>
