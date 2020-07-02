import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initialState = {
  books: []
} // initialState

export default new Vuex.Store({
  state: initialState, // state
  mutations: {
    /**
     * Set book list
     */
    setBooks (state, payload) {
      state.books = payload
    } // setBooks
  },
  getters: {
    /**
     * Return book from list based on isbn.
     */
    getBookByISBN: (state) => (isbn) => {
      return state.books.find(book => book.isbn === isbn)
    }
  },
  actions: {
    /**
     * Fetch list of books
     */
    async fetchBooks ({ commit }) {
      const response = await fetch('https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json')
      const data = await response.json()

      commit('setBooks', data)
    } // fetchTargets
  }, // actions
  modules: {}
})
