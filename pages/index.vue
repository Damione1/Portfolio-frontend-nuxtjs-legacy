<template>
  <v-main>
    <v-container fill-height>
      <HeadTitle :main-title="mainTitle" :sub-title="subTitle" />
    </v-container>
    <v-container>
      <QualificationPublicListing :user-id="userId" />
    </v-container>
    <v-container>
      <ProjectPublicListing :user-id="userId" />
    </v-container>
    <v-container>
      <PostsListPublicListing :user-id="userId" />
    </v-container>
    <v-container>
      <SkillPublicListing :user-id="userId" />
    </v-container>
  </v-main>
</template>

<script>

export default {
  data () {
    return {
      userId: process.env.userId,
      mainTitle: 'Hi, i\'m a web developer',
      subTitle: "I'm a frontend developer with a passion for building web applications. I'm currently working as a freelancer and I'm looking for new opportunities to work on web projects."
    }
  }
}
</script>

<style>

</style>
