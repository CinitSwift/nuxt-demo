<template>
  <div class="article-meta">
    <nuxt-link :to="{
      name: 'profile',
      params: {
        username: article.author.username
      }
    }"><img :src="article.author.image"/></nuxt-link>
    <div class="info">
      <nuxt-link :to="{
      name: '/profile',
      params: {
        username: article.author.username
      }
    }" class="author">{{ article.author.username }}</nuxt-link>
      <span class="date">{{ article.createdAt | date('MMM DD,YYYY') }}</span>
    </div>
    <button
        class="btn btn-sm btn-outline-secondary"
        :class="{
          active: article.author.following
        }"
    >
      <i class="ion-plus-round"></i>
      &nbsp;
      Follow {{ article.author.username }} <span class="counter">({{ article.favoritesCount }})</span>
    </button>
    &nbsp;&nbsp;
    <button
        class="btn btn-sm btn-outline-primary"
        :class="{
          active: article.favorited
        }"
        @click="onFavorite"
        :disabled="favoriteDisabled"
    >
      <i class="ion-heart"></i>
      &nbsp;
      Favorite Post <span class="counter">(20)</span>
    </button>
  </div>
</template>

<script>
import {addFavorite, deleteFavorite} from '@/api/article'
export default {
  name: "article-meta",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data(){
    return{
      favoriteDisabled:false
    }
  },
  methods:{
    async onFavorite () {
      this.favoriteDisabled = true
      if (this.article.favorited) {
        await deleteFavorite(this.article.slug)
        this.article.favorited = false
        this.article.favoritesCount -= 1
      } else {
        await addFavorite(this.article.slug)
        this.article.favorited = true
        this.article.favoritesCount += 1
      }
      this.favoriteDisabled = false
    }
  }
}
</script>

<style scoped>

</style>
