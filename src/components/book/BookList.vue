<template>
  <div class="row q-col-gutter-xl">
    <div v-for="(book, key) in books" :key="key" class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
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
