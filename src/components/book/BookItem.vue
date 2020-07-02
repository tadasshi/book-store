<template>
    <q-card class="fit">
      <q-img :src="book.thumbnailUrl" style="min-height:291px" placeholder-src="https://voice.global/wp-content/plugins/wbb-publications/public/assets/img/placeholder.jpg"/>
      <q-card-section>
        <p class="text-weight-bold"> {{book.title}} </p>
        <p class="text-weight-thin">by {{book.authors.join(', ')}}</p>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-btn color="primary" :to="{name:'book_details', params: { isbn: book.isbn }}" label="MORE DETAILS" />
      </q-card-section>
    </q-card>
</template>

<script>
export default {
  props: {
    book: Object
  } // props
}
</script>
