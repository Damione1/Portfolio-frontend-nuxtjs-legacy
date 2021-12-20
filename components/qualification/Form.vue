<template>
  <v-form
    ref="form"
    @submit.prevent="$emit('submitQualification', qualification)"
  >
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="qualification.school"
            :rules="rules.text"
            color="purple darken-2"
            label="School"
            required
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="qualification.grade"
            :rules="rules.text"
            color="blue darken-2"
            label="Grade"
            required
          />
        </v-col>
        <v-col
          cols="12"
          sm="2"
        >
          <v-checkbox
            v-model="qualification.current"
            label="Current"
            color="purple darken-2"
          /></v-checkbox>
        </v-col>
        <v-col cols="12" sm="5">
          <v-menu
            ref="startDate"
            v-model="startDate"
            :close-on-content-click="false"
            :return-value.sync="qualification.startDate"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="qualification.startDate"
                label="Entry date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="qualification.startDate"
              no-title
              scrollable
            >
              <v-spacer />
              <v-btn
                text
                color="primary"
                @click="startDate = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.startDate.save(qualification.startDate)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" sm="5">
          <v-menu
            v-if="!qualification.current"
            ref="endDate"
            v-model="endDate"
            :close-on-content-click="false"
            :return-value.sync="qualification.endDate"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="qualification.endDate"
                label="End date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="qualification.endDate"
              no-title
              scrollable
            >
              <v-spacer />
              <v-btn
                text
                color="primary"
                @click="endDate = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.endDate.save(qualification.endDate)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="qualification.description"
            color="teal"
          >
            <template #label>
              <div>
                Description
              </div>
            </template>
          </v-textarea>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-btn
        v-if="qualification._id"
        text
        @click="$emit('deleteQualification', qualification)"
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
        @click="$emit('submitQualification', qualification)"
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
      startDate: false,
      endDate: false,
      modal: false,
      menu2: false,
      qualification: this.post
    }
  },
  computed: {
    formIsValid () {
      return (
        this.qualification.school &&
          this.qualification.grade &&
          this.qualification.description &&
          this.qualification.startDate &&
          (this.qualification.endDate || this.qualification.current)
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
