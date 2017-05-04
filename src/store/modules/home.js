import { HOME_DATA } from '../mutation-types.js'

// function getCurrentUser () {
//   return axios.get('/api/book/26939973')
// }

const state = {
  WebDataBook: {},
  EndDataBook: {},
  lifeBook: {}
}

// const actions = {
//    async [HOME_DATA]({ commit }) {
//     const user = await getCurrentUser();
//     commit(HOME_DATA,user)
//   }
// }

const mutations = {
  [HOME_DATA] (state, Book) {
    state.WebDataBook = Book
    state.EndDataBook = Book
    state.lifeBook = Book
  }
}

export default {
  state,
//  getters,
 // actions,
  mutations
}
