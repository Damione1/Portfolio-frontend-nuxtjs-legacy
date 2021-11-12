<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
  </div>
</template>

<script>
  export default {
    async asyncData({ params, $http }) {
      const post = await $http.$get(`http:/localhost:3000/api/v1/${params.id}`)
      return { post }
    }
  }
</script>