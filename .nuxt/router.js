import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _50f4227a = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _41e89fa2 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _02a29e19 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _84cb674e = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _466ad100 = () => interopDefault(import('..\\pages\\setting' /* webpackChunkName: "" */))
const _452548bd = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _b736e0b4 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _50f4227a,
    children: [{
      path: "",
      component: _41e89fa2,
      name: "home"
    }, {
      path: "/login",
      component: _02a29e19,
      name: "login"
    }, {
      path: "/register",
      component: _02a29e19,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _84cb674e,
      name: "profile"
    }, {
      path: "/settings",
      component: _466ad100,
      name: "settings"
    }, {
      path: "/editor",
      component: _452548bd,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _b736e0b4,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
