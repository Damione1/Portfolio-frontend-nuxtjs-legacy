<template>
  <v-timeline-item
    color="teal lighten-3"
    small
  >
    <v-row class="pt-1">
      <v-col cols="5">
        <strong>{{ $dateFns.format(qualificationItem.startDate, 'MMM yyyy' ) }} - {{ qualificationItem.current ? 'Present' : $dateFns.format(qualificationItem.endDate, 'MMM yyyy' ) }}</strong>
      </v-col>
      <v-col>
        <strong>{{ qualificationItem.grade }}</strong>
        <div class="text-caption mb-2">
          {{ qualificationItem.school }}
        </div>
        <div class="text-caption">
          {{ qualificationItem.description }}
        </div>

        <v-btn icon :to="'/backend/qualifications/' + qualificationItem._id" nuxt>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-timeline-item>
</template>

<script lang="ts">

export default {
  props: {
    qualificationItem: {
      type: Object,
      required: true
    }
  }
}
</script>
