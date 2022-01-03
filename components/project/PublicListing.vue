<template>
  <v-card
    flat
    class="mx-auto"
    max-width="800"
  >
    <v-card-text class="py-0">
      <v-timeline
        align-top
        dense
      >
        <ProjectPublicItem
          v-for="project in projectsList"
          :key="project.id"
          :project-item="project"
        />
      </v-timeline>
    </v-card-text>
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
      projectsList: []
    }
  },
  async fetch () {
    const res = await this.$axios.get(`/api/projects/public/${this.userId}`)
    this.projectsList = res.data
  }
}
</script>
