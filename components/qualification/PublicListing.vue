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
        <QualificationPublicItem
          v-for="qualification in qualificationsList"
          :key="qualification.id"
          :qualification-item="qualification"
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
      qualificationsList: []
    }
  },
  async fetch () {
    const res = await this.$axios.get(`/api/qualifications/public/${this.userId}`)
    this.qualificationsList = res.data
  }
}
</script>
