<template>
  <div class="container max-w-screen-lg xl:max-w-screen-xl">
    <div class="w-full bg-white p-12">
      <div class="header flex items-end justify-between mb-12">
        <div class="title">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">
            My Blog
          </h1>
          <p class="text-2xl font-light text-gray-400">
            My discoveries, recipes, builds, and more
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        <div v-for="blogPost in blogPosts" :key="blogPost._id" class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
          <nuxt-link :to="`/blog/${blogPost.slug}`" class="w-full block h-full">
            <img alt="blog photo" :src="getPostThumbnail(blogPost)" class="max-h-40 w-full object-cover">
            <div class="bg-white dark:bg-gray-800 w-full p-4">
              <p class="text-indigo-500 text-md font-medium">
                {{ blogPost.title }}
              </p>
              <p v-if="blogPost.category" class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                {{ blogPost.category }}
              </p>
              <p v-if="blogPost.excerpt" class="text-gray-400 dark:text-gray-300 font-light text-md">
                {{ blogPost.excerpt || '' }}
              </p>
              <div class="flex items-center mt-4">
                <div class="flex flex-col justify-between text-sm">
                  <p class="text-gray-400 dark:text-gray-300">
                    {{ $dateFns.format(blogPost.date, 'dd MMM yyyy' ) }}
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
    const res = await $axios.get(`/public/blogpost/${process.env.userId}`)

    return { blogPosts: res.data }
  },
  data () {
    return {
      blogPosts: {}
    }
  },
  head () {
    return { title: 'Projects | Damien Goehrig', meta: [{ hid: 'description', name: 'description', content: 'My latest blogPosts' }] }
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
