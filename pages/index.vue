<template>
  <div class="">
    <HeadTitle :main-title="header.mainTitle" :sub-title="header.subTitle" />

    <PostsListPublicListing :user-id="userId" :main-title="workExperiences.mainTitle" :sub-title="workExperiences.subTitle" />

    <SkillPublicListing :user-id="userId" :main-title="skill.mainTitle" :sub-title="skill.subTitle" />

    <QualificationPublicListing :user-id="userId" :main-title="qualification.mainTitle" :sub-title="qualification.subTitle" />

    <!-- <ProjectPublicListing :user-id="userId" :main-title="project.mainTitle" :sub-title="project.subTitle" /> -->
  </div>
</template>

<script>

export default {
  data () {
    return {
      userId: process.env.userId,
      project: {
        mainTitle: 'Projects',
        subTitle: 'My projects'
      },
      workExperiences: {
        mainTitle: 'Work experiences',
        subTitle: 'My work experiences'
      },
      skill: {
        mainTitle: 'Skills',
        subTitle: 'My skills'
      },
      qualification: {
        mainTitle: 'Qualifications',
        subTitle: 'My qualifications'
      },
      header: {
        mainTitle: 'Hi, i\'m Damien, a backend web developer',
        subTitle: "I'm a senior backend web developer, with a passion for modern web technologies and a love for learning new things."
      }

    }
  },
  head: {
    title: 'my website title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
</script>

<style>

</style>
