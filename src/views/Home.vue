<template>
  <q-page padding>
    <h3>Book List</h3>
    <q-input v-model="search" label="Search by title or ISBN" />
    <br>
    <br>
    <BookList :books="filteredBooks" />
  </q-page >
</template>

<script>
import BookList from '@/components/book/list.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      search: ''
    }
  },
  components: {
    BookList
  },
  computed: {
    ...mapState(['books']),
    filteredBooks () {
      return this.books.filter(
        book => (
          book.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 || book.isbn === this.search
        )
      )
    }
  },
  methods: {
    ...mapActions(['fetchBooks'])
  },
  async created () {
    this.fetchBooks()
  }

}
</script>
