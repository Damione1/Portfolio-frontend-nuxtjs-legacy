<template>
  <v-card
    :to="'/backend/medias/' + mediaItem._id"
    nuxt
  >
    <v-img
      :src="mediaItem.url"
      :lazy-src="mediaItem.url"
      aspect-ratio="1"
      class="grey lighten-2"
    >
      <template #placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          />
        </v-row>
      </template>
    </v-img>
  </v-card>
</template>

<script lang="ts">

export default {
  props: {
    mediaItem: {
      type: Object,
      required: true
    }
  }
}
</script>
