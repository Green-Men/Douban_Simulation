<template>
  <div id="app">
    <v-header></v-header>
    <bookWebList class='book_list' bookName='前端书籍'></bookWebList>
    <bookEndList class='book_list' bookName='后端书籍'></bookEndList>
    <bookShop class='book_list' bookName='豆瓣书店'></bookShop>
    <bookFind class='book_list' bookName='发现好图书'></bookFind>
    <classification></classification>
    <v-footer></v-footer>
  </div>
</template>

<script>
import bookWebList from '../../components/book/book_Web_List.vue'
import bookEndList from '../../components/book/book_End_List.vue'
import bookShop from '../../components/book/book_shop.vue'
import header from '../../components/header.vue'
import bookFind from '../../components/book/book_find.vue'
import classification from '../../components/book/classification.vue'
import footer from '../../components/footer.vue'
export default {
  name: 'book-index',
  data () {
    return {
      homeData: [{
        rating: {}
      }]
    }
  },
  components: {
    'v-header': header,
    bookWebList,
    bookEndList,
    bookShop,
    bookFind,
    classification,
    'v-footer': footer
  }
}
</script>
<style scoped lang='scss'>
.book_list {
  margin-bottom: 1.5rem;
}
</style>
