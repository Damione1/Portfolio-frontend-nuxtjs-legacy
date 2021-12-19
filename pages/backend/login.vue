<template>
  <v-app>
    <div class="background" />
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <div class="text-center">
            <v-avatar size="100" color="indigo lighten-4">
              <v-icon size="40" color="indigo">
                mdi-account
              </v-icon>
            </v-avatar>
            <h2 class="indigo--text">
              Vue login Page
            </h2>
          </div>
          <v-form ref="form" @submit.prevent="userLogin">
            <v-card-text>
              <v-text-field
                v-model="login.email"
                :rules="emailRules"
                type="email"
                label="Email"
                placeholder="Email"
                prepend-inner-icon="mdi-account"
                required
              />
              <v-text-field
                v-model="login.password"
                :rules="passwordRules"
                :type="passwordShow?'text':'password'"
                label="Password"
                placeholder="Password"
                prepend-inner-icon="mdi-key"
                :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                required
                @click:append="passwordShow = !passwordShow"
              />
              <v-switch label="Remember me" color="indigo" />
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="indigo">
                <span class="white--text px-8">Login</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
    <v-snackbar v-model="snackbar" bottom color="green">
      {{ snackbarText }}
    </v-snackbar>
  </v-app>
</template>

<script type="ts">
export default {
  data () {
    return {
      login: {
        email: '',
        password: ''
      },
      error: null,
      loading: false,
      snackbar: false,
      snackbarText: '',
      passwordShow: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be 6  characters or more!'
      ]
    }
  },

  methods: {
    async userLogin () {
      this.loading = true
      try {
        await this.$auth.loginWith('local', { data: this.login }).then(() => {
          this.snackbarText = 'Login Successful'
          this.snackbar = true
          this.loading = false
          this.$router.push('/backend')
        })
      } catch (err) {
        this.snackbarText = err.message
        this.loading = false
        this.snackbar = true
      }
    }
  }
}
</script>

<style>
  .background{
    background-image: url(https://picsum.photos/1920/1080?random) !important;
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    background-size: cover;
  }
</style>
