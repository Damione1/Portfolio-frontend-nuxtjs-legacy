<template>
  <section class="text-gray-800 body-font my-40">
    <div class="py-24 flex flex-wrap">
      <div class="flex flex-col w-full mb-10">
        <h2 v-if="mainTitle" class="text-xs tracking-widest font-medium title-font mb-1 dark:text-gray-500">
          {{ mainTitle }}
        </h2>
        <h3 v-if="subTitle" class="sm:text-3xl text-2xl font-medium title-font dark:text-gray-300">
          {{ subTitle }}
        </h3>
      </div>
      <div class="flex flex-wrap">
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
    const res = await this.$axios.get(`/public/qualification/${this.userId}`)
    this.qualificationsList = res.data
  }
}
</script>
