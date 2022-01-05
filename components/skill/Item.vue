/* eslint-disable vue/html-end-tags */
<template>
  <div>
    <h2>{{ skillItem.name }}</h2>
    <v-progress-linear
      color="light-blue"
      height="10"
      :value="skillItem.value"
      striped
    />
    <!-- edit link -->
    <v-btn
      :to="'/backend/skills/' + skillItem._id"
    >
      Edit
    </v-btn>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    skillItem: {
      type: Object,
      required: true
    }
  }
}
</script>
