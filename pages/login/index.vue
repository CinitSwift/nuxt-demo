<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? 'sign in' : 'Sign up' }}</h1>
          <p class="text-xs-center">
<!--            <a href="">Have an account?</a>-->
            <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template
                v-for="(messages, fields) in errors"
            >
              <li>
                {{ fields }} {{ messages }}
              </li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input
                  v-model="user.username"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  required
              >
            </fieldset>
            <fieldset class="form-group">
              <input
                  v-model="user.email"
                  class="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                  required
              >
            </fieldset>
            <fieldset class="form-group">
              <input
                  v-model="user.password"
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  required
                  minlength="8"
              >
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? 'sign in' : 'Sign up' }}
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import { login, register } from "@/api/user";
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'unauthenticated',
  name: "Login",
  computed: {
    isLogin() {
      return this.$route.name === 'login'
    }
  },
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errors: {}
    }
  },
  methods: {
    async onSubmit() {
      try {
        const { data } = this.isLogin
            ? await login({
              user: this.user
            })
            : await register({
              user: this.user
            })
        // console.log(data)
        this.$store.commit('setUser', data.user)
        // Cookie.set('user', data.user)
        Cookie.set('user',JSON.stringify(data.user))
        this.$router.push('/')
      } catch (e) {
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>

<style scoped>

</style>
