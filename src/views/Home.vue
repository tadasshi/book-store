<template>
  <q-page padding>
    <h1>Book List</h1>
    <input type="text" v-model="search">
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
      return this.books.filter(book => book.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1)
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
