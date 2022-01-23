<template>
  <div>
    <v-combobox
      v-model="selectedSkillsList"
      :items="skillsList.map(skill => skill.name)"
      label="Skills"
      multiple
      outlined
      dense
    />
    {{ selectedSkillsList }}
  </div>
</template>

<script>

export default {
  props: {
    selectedSkills: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  emits: ['submitSkill'],
  data () {
    return {
      skillsList: []
    }
  },
  fetch () {
    this.$axios({ url: '/skills/' })
      .then((res) => {
        this.skillsList = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  },
  watch: {
    selectedSkills (val) {
      if (!val) {
        return
      }
      const skills = val.map(skill => this.skillsList.find(s => s.name === skill))
      console.log(skills)
      this.$emit('submitSkill', skills)
    }
  },
  /* set skillsList once when component is rendered */
  created () {
    this.skillsList = this.selectedSkills
  }
}

</script>
