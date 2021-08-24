<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form @submit.prevent="onSetting">
            <fieldset>
              <fieldset class="form-group">
                <input v-model="userInfo.image" class="form-control" type="text" placeholder="URL of profile picture">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="userInfo.username" class="form-control form-control-lg" type="text"
                       placeholder="Your Name">
              </fieldset>
              <fieldset class="form-group">
                <textarea v-model="userInfo.bio" class="form-control form-control-lg" rows="8"
                          placeholder="Short bio about you"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input v-model="userInfo.email" class="form-control form-control-lg" type="text" placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="userInfo.password" class="form-control form-control-lg" type="password"
                       placeholder="New Password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
            </fieldset>
          </form>
          <div style="border-top:1px solid #cccmargin-top:10pxpadding-top:10px">
            <button @click="logout" class="btn pull-xs-left">
              logout
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {getCurrentUser, updateUserInfo} from '@/api/user'
import {mapMutations} from 'vuex'
// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  name: 'Setting',
  async asyncData({query}) {
    const {data} = await getCurrentUser()
    const userInfo = data.user
    return {
      userInfo
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    async onSetting() {
      try {
        await updateUserInfo({user: this.userInfo})
        this.$router.push('/')
      } catch (err) {
        // const errors = err.response.data.errors
        alert(err)
      }
    },
    logout() {
      this.setUser('')
      Cookie.set('user', '')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
