<template>
  <v-card
    flat
    class="mx-auto"
    max-width="800"
  >
    <MediaListing
      :medias="medias"
    />
    <!-- upload media -->
    <v-form
      @submit.prevent="uploadImage"
    >
      <v-row>
        <v-col
          cols="12"
          sm="10"
        >
          <!-- upload image -->
          <v-file-input
            v-model="file"
            color="purple darken-2"
            label="Image"
            required
          />
        </v-col>
        <v-col
          cols="12"
          sm="2"
        >
          <v-btn
            color="purple darken-2"
            type="submit"
            :disabled="!file"
          >
            Upload
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
export default {
  props: {
    mediasList: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  emits: ['fileUploaded'],
  data () {
    return {
      file: null,
      medias: this.mediasList || []
    }
  },
  methods: {
    async uploadImage () {
      const formData = new FormData()
      formData.append('file', this.file)
      await this.$axios.post('/api/upload', formData)
        .then((res) => {
          this.$emit('fileUploaded', res.data)
          this.file = null
        }).catch((e) => {
          if (e.response) {
            this.snackBarContent = e.response.data.message
            this.snackbar = true
            this.snackbarType = 'error'
          }
        })
    }
  }
}
</script>
