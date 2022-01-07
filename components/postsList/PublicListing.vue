<template>
  <section class="text-gray-800 body-font my-40">
    <div class="py-24 flex flex-wrap">
      <div class="flex flex-col w-full mb-10">
        <h2 v-if="mainTitle" class="text-xs tracking-widest font-medium title-font mb-1">
          {{ mainTitle }}
        </h2>
        <h3 v-if="subTitle" class="sm:text-3xl text-2xl font-medium title-font">
          {{ subTitle }}
        </h3>
      </div>
      <div class="flex flex-wrap">
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
    const res = await this.$axios.get(`/public/workexperience/${this.userId}`)
    this.postsList = res.data
  }
}
</script>
