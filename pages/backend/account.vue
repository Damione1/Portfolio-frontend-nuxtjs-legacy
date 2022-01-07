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
        {{ token.userAgent }} Last used: {{ token.lastUsed }}
        <button :class="['button', token.isCurrent ? 'is-danger' : 'is-warning' ]" @click="revokeToken(token)">
          {{ token.isCurrent ? 'Logout' : 'Revoke' }}
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
  async asyncData ({ $axios, $auth }) {
    const response = await $axios({ url: '/auth/userToken/' })
    const currentTokenIndex = response.data.findIndex(token => token.refreshToken === $auth.strategy.refreshToken.get())
    if (currentTokenIndex !== -1) {
      response.data[currentTokenIndex].isCurrent = true
    }
    return { tokenList: response.data.reverse() }
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
      if (token.refreshToken === this.$auth.strategy.refreshToken.get()) {
        this.$auth.logout()
      } else {
        await this.$axios.delete('/auth/userToken/' + token._id)
        this.tokenList = this.tokenList.filter(t => t._id !== token._id)
      }
    }
  }

}
</script>
