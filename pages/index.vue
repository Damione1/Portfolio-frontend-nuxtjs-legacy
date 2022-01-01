<template>
  <v-card>
    <QualificationPublicListing :user-id="userId" />
  </v-card>
</template>

<script>

export default {
  data () {
    return {
      userId: process.env.userId
    }
  }
}
</script>
