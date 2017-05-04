import { BOOK_DATA } from '../mutation-types.js'

// function getCurrentUser(url){
//   this.$http.get(url)
//     .then
// }

const state = {
}

// const actions = {
//   async [BOOK_DATA]({commit}){
//     commit(BOOK_DATA)
//   }
// }

const mutations = {
  [BOOK_DATA] (state, { id, data }) {
    state.id = data
  }
}

export default {
  state,
  // actions,
  mutations
}
