<template>
  <div class="profile-page">

    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img"/>
            <h4>{{ profile.username }}</h4>
            <p>
              {{ profile.bio }}
            </p>
            <button
                @click="onFocuson"
                class="btn btn-sm btn-outline-secondary action-btn"
                :class="{
                active: profile.following
              }"
                :disabled="focusDisabled"
            >
              <i class="ion-plus-round"></i>
              &nbsp
              {{ profile.following ? 'Unfollowing' : 'Following' }} {{ profile.username }}
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                    class="nav-link"
                    :class="{
                    active: tab === 'my'
                  }"
                    :to="{
                    name: 'profile',
                    query: {
                      username,
                      page,
                      tab: 'my'
                    }
                  }"
                >My Articles
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                    class="nav-link"
                    :class="{
                    active: tab === 'favorited'
                  }"
                    :to="{
                    name: 'profile',
                    query: {
                      username,
                      page,
                      tab: 'favorited'
                    }
                  }"
                >Favorited Articles
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div class="article-preview" v-for="(item,index) in articles" :key="index">
            <div class="article-meta">
              <a href=""><img :src="item.author.image"/></a>
              <div class="info">
                <a href="" class="author">{{ item.author.username }}</a>
                <span class="date">{{ item.createdAt | date('MMM DD, YYYY') }}</span>
              </div>
              <button
                  class="btn btn-outline-primary btn-sm pull-xs-right"
                  :class="{
                  active: item.favorited
                }"
                  @click="onFavorite(item)"
                  :disabled="item.favoriteDisabled"
              >
                <i class="ion-heart"></i> {{ item.favoritesCount }}
              </button>
            </div>
            <nuxt-link
                class="preview-link"
                :to="{
                name: 'article-slug',
                params: {
                  slug: item.slug
                }
              }"
            >
              <h1>{{ item.title }}</h1>
              <p>{{ item.description }}</p>
              <span>Read more...</span>
              <ul class="tag-list">
                <li v-for="(liItem,liIndex) in item.tagList" :key="liIndex" class="tag-default tag-pill tag-outline">
                  {{ liItem }}
                </li>
              </ul>
            </nuxt-link>
          </div>
          <!-- 分页列表 -->
          <nav>
            <ul class="pagination">
              <li
                  class="page-item"
                  :class="{
                  active: item === page
                }"
                  v-for="item in totalPage"
                  :key="item"
              >
                <nuxt-link
                    class="page-link"
                    :to="{
                    name: 'profile',
                    params: {
                      username
                    },
                    query: {
                      page: item,
                      tab
                    }
                  }"
                >{{ item }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
          <!-- /分页列表 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getArticles, addFavorite, deleteFavorite} from '@/api/article'
import {getProfiles, focusOnUser, takeOffUser} from '@/api/user'

export default {
  name: 'UserProfile',
  middleware: 'authenticated',
  data() {
    return {
      focusDisabled: false
    }
  },
  async asyncData({query, params}) {
    const page = Number.parseInt(query.page || 1)
    const {tab = 'my'} = query
    const { username } = params
    const limit = 20
    const loadArticles = tab === 'my'
        ? {
          author: username,
          limit,
          offset: (page - 1) * limit
        }
        : {
          favorited: username,
          limit,
          offset: (page - 1) * limit
        }

    const [articleRes, profileRes] = await Promise.all([
      getArticles(loadArticles),
      getProfiles(username)
    ])

    const {articles, articlesCount} = articleRes.data

    const {profile} = profileRes.data

    articles.forEach(article => article.favoriteDisabled = false)

    return {
      articles,
      profile,
      articlesCount,
      limit,
      tab,
      page,
      username
    }
  },
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true
      if (article.favorited) {
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount -= 1
      } else {
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisabled = false
    },
    async onFocuson() {
      this.focusDisabled = true
      if (this.profile.following) {
        await takeOffUser(this.profile.username)
        this.profile.following = false
      } else {
        await focusOnUser(this.profile.username)
        this.profile.following = true
      }
      this.focusDisabled = false
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  watchQuery: ['tab', 'page']
}
</script>

<style>

</style>
