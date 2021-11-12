<template>
<ul>
 <li
          v-for="professionnalExperience in professionnalExperiences"
          :key="professionnalExperience.id"
        >
          <td>{{ professionnalExperience.title }}</td>
          <td>{{ professionnalExperience.company_name }}</td>
        </li>
</ul>
</template>

<script>


export default {
    async asyncData({ $axios }) {
    const res = await $axios.$get('/');
    return { professionnalExperiences: res }
  }
}
</script>
