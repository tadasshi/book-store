<template>
  <div>
    <p>
      {{book}}
    </p>
    <p>some description</p>
    <router-link :to="{name:'book_details', params: { isbn: book.isbn }}">details</router-link>
  </div>
</template>
<script>
export default {
  name: 'BookItem',
  props: ['book']
}
</script>
