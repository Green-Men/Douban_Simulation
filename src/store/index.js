import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import bookMsg from './modules/bookMsg.js'

Vue.use(Vuex)

const DEBUG = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    home,
    bookMsg
  },
  strict: DEBUG
})
