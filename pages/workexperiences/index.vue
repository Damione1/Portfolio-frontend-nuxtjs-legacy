<template>
  <p v-if="$fetchState.pending">
    Fetching mountains...
  </p>
  <p v-else-if="$fetchState.error">
    An error occurred :(
  </p>
  <div v-else>
    <h1>Work Experiences</h1>
    <ul>
      <li
        v-for="professionnalExperience in professionnalExperiences"
        :key="professionnalExperience.id"
      >
        <td>{{ professionnalExperience.position }}</td>
        <td>{{ professionnalExperience.company }}</td>
        <td>{{ professionnalExperience.description }}</td>
        <td>{{ professionnalExperience.startDate }}</td>
        <td>{{ professionnalExperience.endDate }}</td>
      </li>
    </ul>
    <button @click="$fetch">
      Refresh
    </button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData () {
    const post = await axios.get('/api/workExperiences')
    return { professionnalExperiences: post }
  },
  data () {
    return {
      professionnalExperiences: []
    }
  }
}
</script>
