<template>
  <section class="text-gray-600 body-font my-40">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="flex flex-col w-full mb-20">
        <h2 v-if="mainTitle" class="text-xs tracking-widest font-medium title-font mb-1">
          {{ mainTitle }}
        </h2>
        <h3 v-if="subTitle" class="sm:text-3xl text-2xl font-medium title-font">
          {{ subTitle }}
        </h3>
      </div>
      <div class="flex flex-wrap -m-4">
        <PostsListPublicItem
          v-for="post in postsList"
          :key="post.id"
          :post="post"
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
      postsList: []
    }
  },
  async fetch () {
    const res = await this.$axios.get(`/api/workExperiences/public/${this.userId}`)
    this.postsList = res.data
  }
}
</script>
