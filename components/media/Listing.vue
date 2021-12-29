<template>
  <v-card
    flat
    class="mx-auto"
    max-width="800"
  >
    <v-row>
      <v-col
        v-for="media in medias"
        :key="media._id"
        class="d-flex child-flex"
        cols="4"
      >
        <MediaItem
          :media-item="media"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

export default {
  props: {
    medias: {
      type: Array,
      required: true
    }
  }
}
</script>
