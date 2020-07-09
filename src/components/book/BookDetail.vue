<template>
  <div v-if="book">
    <h4>{{book.title}}</h4>
    <p class="text-grey">ISBN: {{book.isbn}}</p>
    <p>By
      <a href="#" class="text-blue" v-for="(author,aindex) in book.authors" :key="aindex">{{author}}, </a>
    </p>
    <q-separator class="q-mb-lg" />
    <div class="row q-col-gutter-xl">
      <div class="col-sm-3 col-xs-12">
        <img :src="book.thumbnailUrl" class="full-width" alt="">
        <q-btn color="primary" class="full-width" :to="{name:'book_details', params: { isbn: book.isbn }}" label="READ NOW" />
      </div>
      <div class="col-sm-9 col-xs-12">
        <p class="text-justify">{{ book.shortDescription }}</p>
        <p class="text-justify">{{ book.longDescription }}</p>
        <p>Book Status: {{ book.status }}</p>
        <p>Categories
          <a href="#" class="text-blue"  v-for="(category,cindex) in book.categories" :key="cindex">{{category}}, </a>
        </p>
        <p>Release Date: {{ book.publishedDate.$date.slice(0,10) }}</p>
        <p>Number of Pages: {{book.pageCount}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    book: {
      type: Object as PropType<Book>
    }
  } // props
})
</script>
