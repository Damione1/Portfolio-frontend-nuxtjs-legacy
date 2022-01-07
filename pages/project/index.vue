<template>
  <div class="container max-w-screen-lg xl:max-w-screen-xl">
    <div class="w-full bg-white p-12">
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
        <div v-for="project in projects" :key="project._id" class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
          <nuxt-link :to="`/project/${project.slug}`" class="w-full block h-full">
            <img alt="blog photo" :src="project.images[0].url" class="max-h-40 w-full object-cover">
            <div class="bg-white dark:bg-gray-800 w-full p-4">
              <p class="text-indigo-500 text-md font-medium">
                {{ project.name }}
              </p>
              <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                {{ project.name }}
              </p>
              <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                {{ project.description }}
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
  }
}
</script>

<style>

</style>
