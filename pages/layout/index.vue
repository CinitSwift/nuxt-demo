<template>
  <div>
    <!--  顶部  -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">Discuss</nuxt-link>
        <!--        <a class="navbar-brand" href="index.html">conduit</a>-->
        <ul class="nav navbar-nav pull-xs-right">
          <template v-if="user">
            <li class="nav-item">
              <!-- Add "active" class when you're on that page" -->
              <nuxt-link class="nav-link" to="/" exact>Home</nuxt-link>
              <!--            <a class="nav-link active" href="">Home</a>-->
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/editor">
                <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
              <!--            <a class="nav-link" href="">-->
              <!--              <i class="ion-compose"></i>&nbsp;New Post-->
              <!--            </a>-->
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/settings">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/profile/1" class="nav-link">
                <img :src="user.image" alt="" class="user-pic">{{ user.username || 'no-user' }}
              </nuxt-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>

    <nuxt-child/>

    <!--  dibu  -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "index",
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style scoped>

</style>
