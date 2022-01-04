<template>
  <div class="">
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
        mainTitle: 'Skills',
        subTitle: 'My skills'
      },
      qualification: {
        mainTitle: 'Qualifications',
        subTitle: 'My qualifications'
      },
      header: {
        mainTitle: 'Hi, i\'m a web developer',
        subTitle: "I'm a frontend developer with a passion for building web applications. I'm currently working as a freelancer and I'm looking for new opportunities to work on web projects."
      }

    }
  }
}
</script>

<style>

</style>
