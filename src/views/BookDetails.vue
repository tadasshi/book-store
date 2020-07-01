<template>
  <div>
    <h1>Book Details</h1>
    <p>{{book}}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'BookDetails',
  computed: {
    ...mapGetters(['getBookByISBN']),
    book () {
      return this.getBookByISBN(this.$route.params.isbn)
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
