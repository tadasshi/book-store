import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initialState = {
  books: []
} // initialState

export default new Vuex.Store({
  state: initialState, // state
  mutations: {
    setBooks (state, payload) {
      state.books = payload
    } // setBooks
  },
  getters: {
    getBookByISBN: (state) => (isbn) => {
      return state.books.find(book => book.isbn === isbn)
    }
  },
  actions: {
    async fetchBooks ({ commit }) {
      const response = await fetch('http://localhost:8080/books.json')
      const data = await response.json()

      commit('setBooks', data)
    } // fetchTargets
  }, // actions
  modules: {}
})
