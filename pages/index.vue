<template>
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
</template>

<script>

export default {
  async asyncData ({ $axios }) {
    const res = await $axios.$get('/api/workExperiences')
    return { professionnalExperiences: res }
  }
}
</script>
