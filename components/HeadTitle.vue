<template>
  <v-layout
    align-center
    justify-center
  >
    <v-card>
      <v-layout row wrap>
        <v-flex xs12>
          <h1 class="title">
            {{ mainTitle }}
          </h1>
        </v-flex>
        <v-flex xs12>
          <h2 class="subtitle">
            {{ subTitle }}
          </h2>
        </v-flex>
        <!-- add a scroll icon below the title -->
        <v-flex
          xs12
          align-center
          justify-center
        >
          <v-btn
            icon
            large
            class="scroll-down"

            @click="$vuetify.goTo('#main-content')"
          >
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>
  </v-layout>
</template>

<script>

export default ({
  props: {
    mainTitle: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    }
  }
})
</script>
