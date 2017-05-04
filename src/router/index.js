import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import book from '../page/book/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/book/index',
      name: 'book',
      component: book
    }
  ]
})
