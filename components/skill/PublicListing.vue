<template>
  <v-card
    flat
  >
    <SkillPublicItem
      v-for="skill in skillsList"
      :key="skill.id"
      :skill-item="skill"
    />
  </v-card>
</template>

<script>

export default {
  props: {
    userId: {
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
