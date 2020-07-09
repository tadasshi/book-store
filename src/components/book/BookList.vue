<template>
  <div class="row q-col-gutter-xl">
    <div v-for="(book, key) in books" :key="key" class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <BookItem :book="book" />
    </div>
  </div>
</template>

<script lang="ts">
import BookItem from '@/components/book/BookItem.vue'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  components: {
    BookItem
  }, // components
  props: {
    books: {
      type: Object as PropType<Book[]>
    }
  } // props
})
</script>
