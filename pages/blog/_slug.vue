<template>
  <section class="text-gray-800 body-font dark:text-gray-400">
    <div class="container px-5 py-24 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" :src="getThumbnail">
        </div>
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <div v-if="blogPost.user.picture">
                <img :src="blogPost.user.picture" alt="" class="src">
              </div>
              <div v-else>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 dark:text-gray-300 text-lg">
                {{ blogPost.user.firstName }} {{ blogPost.user.lastName }}
              </h2>
              <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
              <p v-if="blogPost.user.description" class="text-base">
                {{ blogPost.user.description }}
              </p>
            </div>
          </div>
          <div class="prose dark:prose-invert dark:prose-headings:text-gray-200 prose-sm sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <h1>
              {{ blogPost.title }}
            </h1>
            <div class="leading-relaxed mb-4 text-left" v-html="$md.render(blogPost.content)" />
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
    const res = await $axios.get(`/public/blogpost/${process.env.userId}`, { params: { field: 'slug', value: slug } })
    if (res.status !== 200) {
      error.statusCode = res.status
      error.message = 'Project not found'
    }
    return { blogPost: res.data[0] }
  },
  data () {
    return {
      blogPost: {}
    }
  },
  head () {
    return { title: this.blogPost.title + ' | Damien Goehrig', meta: [{ hid: 'description', name: 'description', content: this.blogPost.excerpt || '' }] }
  },
  computed: {
    getThumbnail () {
      return this.blogPost.images[0] ? `${this.blogPost.images[0].url}` : 'https://generative-placeholders.glitch.me/image?width=1200&height=300&style=joy-division&colors=14'
    }
  }
}
</script>
