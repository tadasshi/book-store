<template>
  <div>
    <div v-for="(book, key) in bookList" :key="key">
      <BookItem :book="book" />
    </div>
  </div>
</template>
<script>
import BookItem from '@/components/book/item'
export default {
  name: 'BookList',
  data () {
    return {
      bookList: []
    }
  },
  components: {
    BookItem
  },
  async created () {
    const response = await fetch('http://localhost:8080/books.json')
    const data = await response.json()
    this.bookList = data
  }
}
</script>
