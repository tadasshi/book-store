<template>
  <div>
    <h1>Book List</h1>

    <BookList />
  </div>
</template>

<script>
import BookList from '@/components/book/list.vue'

export default {
  name: 'Home',
  components: {
    BookList
  }
}
</script>
