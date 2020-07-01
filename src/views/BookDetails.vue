<template>
  <q-page padding>
    <h1>Book Details</h1>
    <router-link :to="{name:'Home'}">Main Page</router-link>
    <p>{{book}}</p>
  </q-page>
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
