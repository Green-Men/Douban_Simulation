import { END_BOOK_DATA, WEB_BOOK_DATA, SANGWEN_BOOK_DATA, FIND_BOOK_DATA } from '../mutation-types.js'

// function getCurrentUser () {
//   return axios.get('/api/book/26939973')
// }

const state = {
  WebDataBook: {},
  EndDataBook: {},
  sangwenBook: {},
  findBook: {}
}

// const actions = {
//    async [HOME_DATA]({ commit }) {
//     const user = await getCurrentUser();
//     commit(HOME_DATA,user)
//   }
// }

const mutations = {
  [WEB_BOOK_DATA] (state, Book) {
    state.WebDataBook = Book
  },
  [END_BOOK_DATA] (state, Book) {
    state.EndDataBook = Book
  },
  [SANGWEN_BOOK_DATA] (state, Book) {
    state.sangwenBook = Book
  },
  [FIND_BOOK_DATA] (state, Book) {
    state.findBook = Book
  }
}

export default {
  state,
//  getters,
 // actions,
  mutations
}
