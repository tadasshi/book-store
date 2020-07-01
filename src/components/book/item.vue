<template>
    <q-card class="fit">
      <q-img :src="book.thumbnailUrl"/>
      <q-card-section>
        <strong> {{book.title}} </strong>
        <p>by {{book.authors.join(', ')}}</p>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-btn color="primary" :to="{name:'book_details', params: { isbn: book.isbn }}" label="READ NOW" />
      </q-card-section>
    </q-card>
</template>

<script>
export default {
  name: 'BookItem',
  props: ['book']
}
</script>
