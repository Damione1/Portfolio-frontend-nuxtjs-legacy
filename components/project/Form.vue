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
            v-model="project.title"
            color="purple darken-2"
            label="Name"
            required
          />
        </v-col>
        <v-col
          cols="12"
          sm="12"
        >
          <v-text-field
            v-model="project.slug"
            :disabled="true"
            label="Slug"
            outlined
            prepend-icon="mdi-link"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <!-- textarea -->
          <v-textarea
            v-model="project.content"
            color="purple darken-2"
            label="Description"
            required
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-card>
            <div class="prose" v-html="$md.render(project.content)" />
          </v-card>
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
          sm="6"
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
          sm="6"
        >
          <v-textarea
            v-model="project.excerpt"
            color="purple darken-2"
            label="Description"
            required
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
        'Other',
        'Nuxt.js',
        'Vue.js',
        'React.js',
        'Angular.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'MySQL',
        'PHP',
        'WordPress',
        'HTML',
        'CSS',
        'Sass',
        'JavaScript',
        'jQuery',
        'Google Analytics',
        'Google App Engine',
        'Google Cloud Platform',
        'Google Cloud Firebase',
        'Google Cloud Storage',
        'JWT Authentication'
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
        this.project.title &&
          this.project.content
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
