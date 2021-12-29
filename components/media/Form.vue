<template>
  <v-form
    ref="form"
    @submit.prevent="$emit('submitMedia', media)"
  >
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <!-- display image -->
          <v-img
            v-if="media.fileName"
            :src="`/files/`+media.fileName"
            :lazy-src="`/files/`+media.fileName"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template #placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                />
              </v-row>
            </template>
          </v-img>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="media.name"
            :rules="rules.text"
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
            v-model="media.description"
            :rules="rules.textarea"
            color="purple darken-2"
            label="Description"
            required
          />
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-btn
        v-if="media._id"
        text
        @click="$emit('deleteMedia', media)"
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
        @click="$emit('submitMedia', media)"
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
      media: this.post,
      value: 50
    }
  },
  computed: {
    formIsValid () {
      return (
        this.media.name &&
          this.media.value
      )
    }
  },
  methods: {
    to () {
      this.$router.go(-1)
    }
  }
}

</script>
