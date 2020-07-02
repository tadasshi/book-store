<template>
  <q-page padding>
    <q-btn color="primary" :to="{ name:'home' }" label="Back to Home" outline size="sm" class="q-mb-md" />
    <BookDetail :book="book"/>
  </q-page>
</template>

<script>
import BookDetail from '@/components/book/BookDetail'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { BookDetail }, // components
  computed: {
    ...mapGetters(['getBookByISBN']),
    book () {
      return this.getBookByISBN(this.$route.params.isbn)
    } // book
  }, // computed
  methods: {
    ...mapActions(['fetchBooks'])
  }, // methods
  async created () {
    this.fetchBooks()
  } // created
}
</script>
