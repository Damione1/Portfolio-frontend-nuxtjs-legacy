<template>
 
  <div class="signin">
    <div class="signin__container">
      <div class="signin__header">
        <h1 class="signin__title">Sign In</h1>
      </div>
      <div class="signin__body">
        <form class="signin__form" @submit.prevent="signin">
          <div class="signin__form-group">
            <label class="signin__label" for="email">Email</label>
            <input class="signin__input" type="email" id="email" v-model="email" required>
          </div>
          <div class="signin__form-group">
            <label class="signin__label" for="password">Password</label>
            <input class="signin__input" type="password" id="password" v-model="password" required>
          </div>
          <div class="signin__form-group">
            <button class="signin__button" type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  created(){
    this.checkSignedin()
  },
  updated(){
    this.checkSignedin()
  },
  methods: {
    signin() {
      this.$plain.post('/signin', {
        email: this.email,
        password: this.password
      }).then(response =>  this.signinSuccessful(response))
      .catch(error => this.signinFailed(error))
    },
    signinSuccessful(response) {
      if(!response.data.csrf) {
        this.signinFailed(response)
        return
      }
      localStorage.setItem('csrf', response.data.csrf)
      localStorage.setItem('signedIn', true)
      this.error = '';
      this.$router.replace('/')
    },
    signinFailed(error) {
      this.error = error.response.data.error
      localStorage.removeItem('csrf');
      localStorage.removeItem('signedIn');
    },
    checkSignedin() {
      if(localStorage.getItem('signedIn')) {
        this.$router.replace('/')
      }
    }
  },
});

</script>
