<template>
  <v-form
    ref="form"
    @submit.prevent="$emit('submitSkill', skill)"
  >
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="skill.name"
            :rules="rules.text"
            color="purple darken-2"
            label="Name"
            required
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-slider
            v-model="skill.value"
            color="blue darken-2"
            label="Value"
            max="100"
            min="0"
            required
            thumb-label
            ticks
            step="5"
          />
        </v-col>
        <v-col
          cols="12"
          sm="12"
        >
          <!-- url field -->
          <v-text-field
            v-model="skill.icon"
            color="purple darken-2"
            label="Icon url"
            prepend-inner-icon="mdi-link"
            hint="https://www.example.com"
            hint-always-show
          />
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-btn
        v-if="skill._id"
        text
        @click="$emit('deleteSkill', skill)"
      >
        Delete
      </v-btn>
      <v-spacer />
      <v-btn
        text
        @click="to"
      >
        Cancel and back to listing
      </v-btn>
      <v-spacer />
      <v-btn
        :disabled="!formIsValid"
        text
        color="primary"
        @click="$emit('submitSkill', skill)"
      >
        Update
      </v-btn>
    </v-card-actions>
  </v-form>
</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  emits: ['submit'],
  data () {
    return {
      rules: {
        age: [
          val => val < 10 || 'I don\'t believe you!'
        ],
        text: [val => (val || '').length > 0 || 'This field is required']
      },
      terms: false,
      modal: false,
      menu2: false,
      skill: this.post,
      value: 50,
      medias: this.post.images || []
    }
  },
  computed: {
    formIsValid () {
      return (
        this.skill.name &&
          this.skill.value
      )
    }
  },
  methods: {
    to () {
      this.$router.go(-1)
    },
    addMedia (media) {
      this.medias.push(media)
      this.project.images = this.mediaIdsList
    }
  }
}

</script>
