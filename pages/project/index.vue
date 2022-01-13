<template>
  <div class="container max-w-screen-lg xl:max-w-screen-xl">
    <div class="w-full bg-white p-2 sm:p-10">
      <div class="header flex items-end justify-between mb-12">
        <div class="title">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">
            My projects
          </h1>
          <p class="text-2xl font-light text-gray-400">
            Here are some of my projects
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        <div v-for="project in projects" :key="project._id" class="overflow-hidden shadow-lg rounded-lg h-90 w-100 sm:w-80 md:w-100 cursor-pointer m-auto">
          <nuxt-link :to="`/project/${project.slug}`" class="w-full block h-full">
            <img alt="blog photo" :src="getPostThumbnail (project)" class="max-h-40 w-full object-cover">
            <div class="bg-white w-full p-4">
              <p class="text-indigo-500 text-md font-medium">
                {{ project.title }}
              </p>
              <p v-if="project.content" class="text-gray-400 dark:text-gray-300 font-light text-md">
                {{ project.excerpt || '' }}
              </p>
              <div class="flex items-center mt-4">
                <div class="flex flex-col justify-between text-sm">
                  <p class="text-gray-400 dark:text-gray-300">
                    {{ $dateFns.format(project.date, 'dd MMM yyyy' ) }}
                  </p>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData ({ $axios }) {
    const res = await $axios.get(`/public/project/${process.env.userId}`)

    return { projects: res.data }
  },
  data () {
    return {
      projects: {}
    }
  },
  head () {
    return { title: 'Projects | Damien Goehrig', meta: [{ hid: 'description', name: 'description', content: 'My latest projects' }] }
  },
  methods: {
    getPostThumbnail (blogPost) {
      let thumbnail = 'https://generative-placeholders.glitch.me/image?width=320&height=160&style=joy-division&colors=14'
      if (blogPost && blogPost.images.length > 0) {
        thumbnail = blogPost.images[0].url
      }
      return thumbnail
    }
  }
}
</script>

<style>

</style>
