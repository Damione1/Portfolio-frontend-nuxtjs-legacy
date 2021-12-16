<template>
  <v-card flat>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="success"
    >
      <span>{{ snackBarContent }}</span>
      <v-icon dark>
        mdi-checkbox-marked-circle
      </v-icon>
    </v-snackbar>
    <v-form
      ref="form"
      @submit.prevent="$emit('submit', professionnalExperience)"
    >
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="professionnalExperience.company"
              :rules="rules.text"
              color="purple darken-2"
              label="Company"
              required
            />
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="professionnalExperience.position"
              :rules="rules.text"
              color="blue darken-2"
              label="Position"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-menu
              ref="startDate"
              v-model="startDate"
              :close-on-content-click="false"
              :return-value.sync="professionnalExperience.startDate"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template #activator="{ on, attrs }">
                <v-text-field
                  v-model="professionnalExperience.startDate"
                  label="Entry date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <v-date-picker
                v-model="professionnalExperience.startDate"
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
                  @click="$refs.startDate.save(professionnalExperience.startDate)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" sm="6">
            <v-menu
              ref="endDate"
              v-model="endDate"
              :close-on-content-click="false"
              :return-value.sync="professionnalExperience.endDate"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template #activator="{ on, attrs }">
                <v-text-field
                  v-model="professionnalExperience.endDate"
                  label="End date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <v-date-picker
                v-model="professionnalExperience.endDate"
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
                  @click="$refs.endDate.save(professionnalExperience.endDate)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="professionnalExperience.description"
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
          v-if="professionnalExperience._id"
          text
          @click="$emit('deleteExperience', professionnalExperience)"
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
          @click="$emit('submit', professionnalExperience)"
        >
          Update
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      rules: {
        age: [
          val => val < 10 || 'I don\'t believe you!'
        ],
        text: [val => (val || '').length > 0 || 'This field is required']
      },
      snackbar: false,
      terms: false,
      snackBarContent: 'Experience updated successfully',
      startDate: false,
      endDate: false,
      modal: false,
      menu2: false,
      professionnalExperience: this.post
    }
  },
  computed: {
    formIsValid () {
      return (
        this.professionnalExperience.company &&
          this.professionnalExperience.position &&
          this.professionnalExperience.description
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
