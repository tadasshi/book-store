<template>
  <q-page padding>
    <router-link :to="{name:'Home'}">Main Page</router-link>
    <h3>{{book.title}}</h3>
    <div class="row">
      <div class="col-2">
        <img :src="book.thumbnailUrl" alt="">
      </div>
      <div class="col-10">
        <p>{{book.isbn}}</p>
        <p>{{book.pageCount}}</p>
        <p>{{book.shortDescription}}</p>
        <p>{{book.longDescription}}</p>
        <p>{{book.status}}</p>
        <p>{{book.authors.join(',')}}</p>
        <p>{{book.categories.join(',')}}</p>
        <p>{{book.publishedDate.$date}}</p>
      </div>
    </div>
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
