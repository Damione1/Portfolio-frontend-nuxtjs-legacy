<template>
  <section class="section">
    <div class="container">
      <h2 class="title">
        My account
      </h2>
      <div class="content">
        <p>
          <strong>Username:</strong>
          {{ loggedInUser.firstName }} {{ loggedInUser.lastName }}
        </p>
        <p>
          <strong>Email:</strong>
          {{ loggedInUser.email }}
        </p>
      </div>
      <h2 class="title">
        Sessions
      </h2>
      <div v-for="token in tokenList" :key="token._id" class="item">
        Token: {{ token.refreshToken.substring(0, 10) }}[...]{{ token.refreshToken.substring(token.refreshToken.length - 15) }}
        Last used: {{ token.lastUsed }}
        <button class="button is-danger" @click="revokeToken(token)">
          Revoke
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'backend',
  middleware: 'auth',
  async asyncData ({ $axios }) {
    const res = await $axios({ url: '/api/auth/userToken/' })
    return { tokenList: res.data }
  },
  data () {
    return {
      tokenList: []
    }
  },
  computed: {
    ...mapGetters(['loggedInUser'])
  },
  methods: {
    async revokeToken (token) {
      await this.$axios.delete('/api/auth/userToken/' + token._id)
      this.tokenList = this.tokenList.filter(t => t._id !== token._id)
    }
  }

}
</script>
