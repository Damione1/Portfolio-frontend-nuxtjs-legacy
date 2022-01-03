<template>
  <v-timeline-item
    color="teal lighten-3"
    small
  >
    <v-row class="pt-1">
      <v-col cols="5">
        <strong>{{ $dateFns.format(post.startDate, 'MMM yyyy' ) }} - {{ post.current ? 'Present' : $dateFns.format(post.endDate, 'MMM yyyy' ) }}</strong>
      </v-col>
      <v-col>
        <strong>{{ post.position }}</strong>
        <div class="text-caption mb-2">
          {{ post.company }}
        </div>
        <div class="text-caption">
          {{ post.description }}
        </div>
      </v-col>
    </v-row>
  </v-timeline-item>
</template>

<script lang="ts">

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
