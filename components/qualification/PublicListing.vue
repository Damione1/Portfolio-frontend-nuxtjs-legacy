<template>
  <section class="text-gray-800 body-font my-40">
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
        <QualificationPublicItem
          v-for="qualification in qualificationsList"
          :key="qualification.id"
          :qualification-item="qualification"
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
      qualificationsList: []
    }
  },
  async fetch () {
    const res = await this.$axios.get(`/api/qualifications/public/${this.userId}`)
    this.qualificationsList = res.data
  }
}
</script>
