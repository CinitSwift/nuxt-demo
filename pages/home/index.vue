<template>
  <div class="home-page">

    <div class="banner">
      <div class="container">
        <h1 class="logo-font">?????????????</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">

        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li v-if="user" class="nav-item">
                <nuxt-link
                    class="nav-link"
                    :class="{
                      active: tab === 'your_feed'
                    }"
                    exact
                    :to="{
                      name: 'home',
                      query: {
                        tab: 'your_feed'
                      }
                    }"
                >Your Feed
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                    class="nav-link"
                    :class="{
                      active: tab === 'global_feed'
                    }"
                    exact
                    :to="{
                      name: 'home',
                      query: {
                        tab: 'global_feed'
                      }
                    }"
                >Global Feed
                </nuxt-link>
              </li>
              <li v-if="tag" class="nav-item">
                <nuxt-link
                    class="nav-link"
                    :class="{
                      active: tab === 'tag'
                    }"
                    exact
                    :to="{
                      name: 'home',
                      query: {
                        tab: 'tag',
                        tag
                      }
                    }"
                >#{{ tag }}
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div
              v-for="article in articles"
              :key="article.slug"
              class="article-preview"
          >
            <div class="article-meta">
              <nuxt-link :to="{ name: 'profile', params: { username: article.author.username } }">
                <img :src="article.author.image" alt=""/>
              </nuxt-link>
              <div class="info">
                <nuxt-link
                    :to="{ name: 'profile', params: { username: article.author.username } }"
                    class="author"
                >
                  {{ article.author.username }}
                </nuxt-link>
                <span class="date">{{ article.createdAt | date('MMM DD,YYYY') }}</span>
              </div>
              <button
                  class="btn btn-outline-primary btn-sm pull-xs-right"
                  :class="{ active: article.favorited }"
                  :disabled="article.favoriteDisabled"
                  @click="onFavorite(article)"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link :to="{ name: 'article', params: { slug: article.slug } }" class="preview-link">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                  class="tag-pill tag-default"
                  v-for="item in tags"
                  :key="item"
                  :to="{
                  name: 'home',
                  query: {
                    tab: 'tag',
                    tag: item
                  }
                }"
              >{{ item }}
              </nuxt-link>
            </div>
          </div>
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
                  exact
                  :to="{
                    name: 'home',
                    query: {
                      tab: tab,
                      page: item,
                      tag: $route.query.tag,
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
</template>

<script>
import {getArticles, getFeedArticles, addFavorite, deleteFavorite} from "@/api/article";
import {getTags} from "@/api/tag";
import {mapState} from 'vuex'

export default {
  name: "HomePage",
  async asyncData({query, store}) {
    const page = Number.parseInt(query.page || 1),
        limit = 10
    const tab = query.tab || 'global_feed'

    const loadArticles = store.state.user && tab === 'your_feed' ?
        getFeedArticles :
        getArticles

    const [articleRes, tagRes] = await Promise.all([
      loadArticles({
        limit,
        offset: (page - 1) * limit,
        tag: query.tag
      }),
      getTags()
    ])

    const {articles, articlesCount} = articleRes.data
    articles.forEach(art => {
      art.favoriteDisabled = false
    })
    const {tags} = tagRes.data

    return {
      articles,
      articlesCount,
      limit,
      page,
      tags,
      tab,
      tag: query.tag
    }
  },
  watchQuery: ['page', 'tag', 'tab'],
  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit)
    },
    ...mapState(['user'])
  },
  methods: {
    async onFavorite(art) {
      art.favoriteDisabled = true
      if (art.favorited) {
        await deleteFavorite(art.slug)
        art.favorited = false
        art.favoritesCount += -1
      } else {
        await addFavorite(art.slug)
        art.favorited = true
        art.favoritesCount += 1
      }
      art.favoriteDisabled = false
    }
  }
}
</script>

<style scoped>

</style>
