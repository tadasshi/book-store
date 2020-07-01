<template>
  <div>
    <div v-for="(book, key) in books" :key="key">
      <BookItem :book="book" />
    </div>
  </div>
</template>
<script>
import BookItem from '@/components/book/item'

export default {
  name: 'BookList',
  components: {
    BookItem
  },
  props: ['books']
}
</script>
