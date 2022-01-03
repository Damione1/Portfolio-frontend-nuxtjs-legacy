<template>
  <content>
    <!-- This example requires Tailwind CSS v2.0+ -->

    <HeadTitle :main-title="mainTitle" :sub-title="subTitle" />

    <QualificationPublicListing :user-id="userId" />

    <ProjectPublicListing :user-id="userId" />

    <PostsListPublicListing :user-id="userId" />

    <SkillPublicListing :user-id="userId" />
  </content>
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
