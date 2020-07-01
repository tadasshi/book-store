<template>
  <div>
    <div v-for="(book, key) in books" :key="key">
      <BookItem :book="book" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import BookItem from '@/components/book/item'

export default {
  name: 'BookList',
  computed: {
    ...mapState(['books'])
  },
  components: {
    BookItem
  },
  methods: {
    ...mapActions(['fetchBooks'])
  },
  async created () {
    this.fetchBooks()
  }
}
</script>
