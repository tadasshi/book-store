<template>
  <div class="row q-col-gutter-xl">
    <div v-for="(book, key) in books" :key="key" class="col-3">
      <BookItem :book="book" />
    </div>
  </div>
</template>
<script>
import BookItem from '@/components/book/BookItem'

export default {
  components: {
    BookItem
  }, // components
  props: {
    books: Array
  } // props
}
</script>
