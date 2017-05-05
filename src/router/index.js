import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import book from '../page/book/index.vue'
import showBookMsg from '../page/book/showBookMsg.vue'
import moreBook from '../page/book/moreBook.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }, {
    path: '/book/',
    name: 'book',
    component: book
  }, {
    path: '/book/:id',
    name: 'showBookMsg',
    component: showBookMsg
  }, {
    path: '/books/:name',
    name: 'moreBook',
    component: moreBook
  }]
})
