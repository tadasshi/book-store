<template>
  <q-page padding>
    <h4>Book Shop</h4>
    <p>Search over {{ books.length }} books</p>
    <q-input clearable outlined v-model="search" label="Search by title or ISBN" class="q-mb-lg" />
    <p v-if="search">We found {{ filteredBooks.length }} that matches your search!</p>
    <BookList :books="filteredBooks" />
  </q-page >
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import BookList from '@/components/book/BookList.vue'

export default Vue.extend({
  data () {
    return {
      search: '' as string
    }
  }, // data
  components: {
    BookList
  }, // components
  computed: {
    ...mapState(['books']),
    /**
     * Return list of books, if a search was performed, it filter the list before returning it.
     */
    filteredBooks (): Book[] {
      if (this.search) {
        return this.books.filter(
          (book: Book) => (
            book.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 || book.isbn === this.search
          )
        )
      }

      return this.books
    } // filteredBooks
  }, // computed
  methods: {
    ...mapActions(['fetchBooks'])
  }, // methods
  async created () {
    this.fetchBooks()
  } // created
})
</script>
