<template>
  <section class="text-gray-800 my-40 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="flex flex-col w-full mb-20">
        <h2 v-if="mainTitle" class="text-xs tracking-widest font-medium title-font mb-1">
          {{ subTitle }}
        </h2>
        <h3 v-if="subTitle" class="sm:text-3xl text-2xl font-medium title-font">
          {{ mainTitle }}
        </h3>
      </div>
      <div class="flex flex-wrap -m-4">
        <ProjectPublicItem
          v-for="project in projectsList"
          :key="project.id"
          :project-item="project"
        />
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    userId: {
      type: String,
      required: true
    },
    mainTitle: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      projectsList: []
    }
  },
  async fetch () {
    const res = await this.$axios.get(`/public/project/${this.userId}`)
    this.projectsList = res.data
  }
}
</script>
