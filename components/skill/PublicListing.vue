<template>
  <section class="text-gray-800 body-font my-40">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col w-full mb-20">
        <h2 v-if="mainTitle" class="text-xs tracking-widest font-medium title-font mb-1">
          {{ subTitle }}
        </h2>
        <h3 v-if="subTitle" class="sm:text-3xl text-2xl font-medium title-font">
          {{ mainTitle }}
        </h3>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-2 lg:gap-6">
        <SkillPublicItem
          v-for="skill in skillsList"
          :key="skill.id"
          :skill-item="skill"
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
      skillsList: []
    }
  },
  async fetch () {
    const res = await this.$axios.get(`/public/skill/${this.userId}`)
    this.skillsList = res.data
  }
}
</script>
