<template>
  <v-form
    ref="form"
    @submit.prevent="submit"
  >
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="project.name"
            color="purple darken-2"
            label="Name"
            required
          />
        </v-col>
        <v-col
          cols="12"
          sm="12"
        >
          <!-- textarea -->
          <v-textarea
            v-model="project.description"
            color="purple darken-2"
            label="Description"
            required
          />
        </v-col>
        <v-col
          cols="12"
          sm="12"
        >
          <MediaUploadModal
            :medias-list="medias"
            @fileUploaded="addMedia"
          />
        </v-col>
        <v-col
          cols="12"
          sm="12"
        >
          <v-combobox
            v-model="project.tags"
            :items="tags"
            label="Combobox"
            multiple
            outlined
            dense
          />
        </v-col>
        <v-col
          cols="12"
          sm="12"
        >
          <!-- link -->
          <v-text-field
            v-model="project.link"
            color="purple darken-2"
            label="Link"
            required
          />
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-btn
        v-if="project._id"
        text
        @click="$emit('deleteProject', project)"
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
        @click="submitProject"
      >
        {{ project._id ? 'Update' : 'Create' }}
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
  emits: ['submit', 'deleteProject'],
  data () {
    return {
      tags: [
        'Web Development',
        'Web Design',
        'Mobile Development',
        'Mobile Design',
        'Game Development',
        'Game Design',
        'Art',
        'Music',
        'Writing',
        'Other'
      ],
      terms: false,
      modal: false,
      menu2: false,
      project: this.post,
      value: 50,
      medias: this.post.images || []
    }
  },
  computed: {
    formIsValid () {
      return (
        this.project.name &&
          this.project.description
      )
    },
    mediaIdsList () {
      return this.medias.map(media => media._id)
    }
  },
  methods: {
    to () {
      this.$router.go(-1)
    },
    addMedia (media) {
      this.medias.push(media)
      this.project.images = this.mediaIdsList
    },
    submitProject () {
      this.$emit('submitProject', this.project)
    }
  }
}

</script>
