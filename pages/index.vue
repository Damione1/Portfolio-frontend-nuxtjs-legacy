<template>
  <div class="container max-w-screen-lg xl:max-w-screen-xl">
    <HeadTitle :main-title="header.mainTitle" :sub-title="header.subTitle" />

    <PostsListPublicListing :user-id="userId" :main-title="workExperiences.mainTitle" :sub-title="workExperiences.subTitle" />

    <SkillPublicListing :user-id="userId" :main-title="skill.mainTitle" :sub-title="skill.subTitle" />

    <QualificationPublicListing :user-id="userId" :main-title="qualification.mainTitle" :sub-title="qualification.subTitle" />

    <ProjectPublicListing :user-id="userId" :main-title="project.mainTitle" :sub-title="project.subTitle" />
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
        mainTitle: 'Stack',
        subTitle: 'My stack'
      },
      qualification: {
        mainTitle: 'Qualifications',
        subTitle: 'My qualifications'
      },
      header: {
        mainTitle: 'Hi, I\'m Damien,\na software developer.',
        subTitle: "I'm an intermediate software developer with a passion for modern web technologies and a love for learning new things"
      }

    }
  },
  head: {
    title: 'Damien Goehrig - Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Portfolio of Damien Goehrig, an intermediate software developer, with a passion for modern web technologies and a love for learning new things.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
</script>

<style>

</style>
