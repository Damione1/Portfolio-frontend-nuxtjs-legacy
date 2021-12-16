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
        <v-timeline-item
          color="teal lighten-3"
          small
          icon="mdi-plus"
        >
          <v-row class="pt-1">
            <v-col cols="12">
              <v-btn
                to="/backend/work-experiences/add"
                nuxt
              >
                Add new experience
              </v-btn>
            </v-col>
          </v-row>
        </v-timeline-item>
        <PostsListItem
          v-for="post in posts"
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
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
