exports.ids = [2];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getComments; });
/* harmony import */ var _plugins_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/**
 * @description 获取文章
 * @returns {AxiosPromise}
 * @param params
 */

const getArticles = params => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
};
/**
 * @description 获取关注的文章
 * @param params
 * @returns {AxiosPromise}
 */

const getFeedArticles = params => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
};
/**
 * @description 点赞
 * @returns {AxiosPromise}
 * @param slug
 */

const addFavorite = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
};
/**
 * @description 点赞
 * @returns {AxiosPromise}
 * @param slug
 */

const deleteFavorite = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
};
/**
 * @description 获取文章详情
 * @param slug
 * @returns {AxiosPromise}
 */

const getArticle = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
};
/**
 * @description 获取文章评论
 * @param slug
 * @returns {AxiosPromise}
 */

const getComments = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=6937988a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\" data-v-6937988a><div class=\"container\" data-v-6937988a><h1 class=\"logo-font\" data-v-6937988a>?????????????</h1> <p data-v-6937988a>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-6937988a>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-6937988a>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-6937988a>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-6937988a>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-6937988a>","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\" data-v-6937988a>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                    active: _vm.tab === 'your_feed'
                  },attrs:{"exact":"","to":{
                    name: 'home',
                    query: {
                      tab: 'your_feed'
                    }
                  }}},[_vm._v("Your Feed\n              ")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-6937988a>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                    active: _vm.tab === 'global_feed'
                  },attrs:{"exact":"","to":{
                    name: 'home',
                    query: {
                      tab: 'global_feed'
                    }
                  }}},[_vm._v("Global Feed\n              ")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\" data-v-6937988a>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                    active: _vm.tab === 'tag'
                  },attrs:{"exact":"","to":{
                    name: 'home',
                    query: {
                      tab: 'tag',
                      tag: _vm.tag
                    }
                  }}},[_vm._v("#"+_vm._s(_vm.tag)+"\n              ")])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-6937988a>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-6937988a>","</div>",[_c('nuxt-link',{attrs:{"to":{ name: 'profile', params: { username: article.author.username } }}},[_c('img',{attrs:{"src":article.author.image,"alt":""}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-6937988a>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{ name: 'profile', params: { username: article.author.username } }}},[_vm._v("\n                "+_vm._s(article.author.username)+"\n              ")]),_vm._ssrNode(" <span class=\"date\" data-v-6937988a>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,'MMM DD,YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: article.favorited }))+" data-v-6937988a><i class=\"ion-heart\" data-v-6937988a></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{ name: 'article', params: { slug: article.slug } }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\" data-v-6937988a>","</div>",[_vm._ssrNode("<div class=\"sidebar\" data-v-6937988a>","</div>",[_vm._ssrNode("<p data-v-6937988a>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\" data-v-6937988a>","</div>",_vm._l((_vm.tags),function(item){return _c('nuxt-link',{key:item,staticClass:"tag-pill tag-default",attrs:{"to":{
                name: 'home',
                query: {
                  tab: 'tag',
                  tag: item
                }
              }}},[_vm._v(_vm._s(item)+"\n            ")])}),1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-6937988a>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-6937988a>","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{
                active: item === _vm.page
              }))+" data-v-6937988a>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"exact":"","to":{
                  name: 'home',
                  query: {
                    tab: _vm.tab,
                    page: item,
                    tag: _vm.$route.query.tag,
                  }
                }}},[_vm._v(_vm._s(item)+"\n            ")])],1)}),0)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=6937988a&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/tag.js

/**
 * @description 获取文章
 * @returns {AxiosPromise}
 */

const getTags = () => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/tags'
  });
};
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: "HomePage",

  async asyncData({
    query,
    store
  }) {
    const page = Number.parseInt(query.page || 1),
          limit = 10;
    const tab = query.tab || 'global_feed';
    const loadArticles = store.state.user && tab === 'your_feed' ? article["f" /* getFeedArticles */] : article["d" /* getArticles */];
    const [articleRes, tagRes] = await Promise.all([loadArticles({
      limit,
      offset: (page - 1) * limit,
      tag: query.tag
    }), getTags()]);
    const {
      articles,
      articlesCount
    } = articleRes.data;
    articles.forEach(art => {
      art.favoriteDisabled = false;
    });
    const {
      tags
    } = tagRes.data;
    return {
      articles,
      articlesCount,
      limit,
      page,
      tags,
      tab,
      tag: query.tag
    };
  },

  watchQuery: ['page', 'tag', 'tab'],
  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },

    ...Object(external_vuex_["mapState"])(['user'])
  },
  methods: {
    async onFavorite(art) {
      art.favoriteDisabled = true;

      if (art.favorited) {
        await Object(article["b" /* deleteFavorite */])(art.slug);
        art.favorited = false;
        art.favoritesCount += -1;
      } else {
        await Object(article["a" /* addFavorite */])(art.slug);
        art.favorited = true;
        art.favoritesCount += 1;
      }

      art.favoriteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6937988a",
  "7dceee95"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map