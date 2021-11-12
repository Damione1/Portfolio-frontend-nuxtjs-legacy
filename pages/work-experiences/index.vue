<template>
  <p v-if="$fetchState.pending">Fetching mountains...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Work Experiences</h1>
    <ul>
      <li v-for="workExperience of workExperiences" v-bind:key="workExperience.id">{{ workExperience.title }} - {{ workExperience.company_name }} </li>
    </ul>
    <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        workExperiences: []
      }
    },
    async fetch() {
      this.workExperiences = await fetch('').then(res => res.json())
    }
  }
</script>