<template>
  <q-page padding>
    <q-btn color="primary" :to="{ name:'home' }" label="Back to Home" outline size="sm" class="q-mb-md" />
    <BookDetail :book="book"/>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import BookDetail from '@/components/book/BookDetail.vue'

export default Vue.extend({
  components: { BookDetail }, // components
  computed: {
    ...mapGetters(['getBookByISBN']),
    book (): Book {
      return this.getBookByISBN(this.$route.params.isbn)
    } // book
  }, // computed
  methods: {
    ...mapActions(['fetchBooks'])
  }, // methods
  async created () {
    this.fetchBooks()
  } // created
})
</script>
