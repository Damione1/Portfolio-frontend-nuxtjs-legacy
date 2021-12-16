<template>
  <v-main />
</template>

<script>
export default {
  layout: 'backend',
  middleware: 'auth',
  methods: {
    refresh () {
      this.$auth.refreshTokens()
    }
  }
}

</script>
