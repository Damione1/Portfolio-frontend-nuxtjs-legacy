<template>
  <v-card
    flat
  >
    <v-card-text class="py-0">
      <v-timeline
        align-top
        dense
      >
        <PostsListPublicItem
          v-for="post in postsList"
          :key="post.id"
          :post="post"
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
      postsList: []
    }
  },
  async fetch () {
    const res = await this.$axios.get(`/api/qualifications/public/${this.userId}`)
    this.postsList = res.data
  }
}
</script>
