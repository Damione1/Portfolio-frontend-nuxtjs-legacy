<template>
  <section class="text-gray-800 body-font my-40">
    <div class="container px-5 py-24 mx-auto">
      <div class="grid grid-cols-6 gap-4">
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
    const res = await this.$axios.get(`/api/skills/public/${this.userId}`)
    this.skillsList = res.data
  }
}
</script>
