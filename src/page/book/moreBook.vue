<template>
  <div class="hello">
    <v-header></v-header>
    <p class="title">前端书籍</p>
    <div class="content" v-for='(item,index) in bookData' @click='showBookMsg(item.id)'>
      <img :src="item.image">
      <div>
        <p>{{item.title}}</p>
        <star class='score' :score='item.rating.average'></star>
        <p>
          <span>{{item.author[index]}}</span>
          <span>{{item.publisher}}</span>
          <span>{{ item.pubdate}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import header from '../../components/header.vue'
import star from '../../components/star/star.vue'
export default {
  name: 'hello',
  props: ['Murl'],
  data () {
    return {
      bookData: {
        rating: {
          average: ''
        },
        author: {}
      }
    }
  },
  mounted () {
    console.log(this.$route)
    let url = '/api/book/search?q=' + this.$route.params.name
    var _this = this
    console.log(_this)
    _this.$http.get(url)
    .then(function (response) {
      _this.bookData = response.data.books
      console.log(_this.bookData)
    })
    .catch(function (error) {
      console.log(error)
    })
    // console.log(this.bookData)
    // console.log(this.bookData)
  },
  components: {
    star,
    'v-header': header
  },
  methods: {
    showBookMsg (str) {
      const path = '/book/' + str
      this.$router.push({
        path: path
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import "../../components/common/css/mixin.scss";
.title{
  margin-top: 1.5rem;
  margin-left: 1rem;
  font-size: 1.6rem;
  font-weight: 500;
}
.content{
  display: flex;
  margin-top: 1rem;
  padding-bottom: 1rem;
  @include border-1px(#e4e1e1);
    &:after{
    width: 90%;
    margin-left: 1rem;
    left: 0;
    bottom: 0;
  };
  img{
    margin-left: 1.5rem;
    width: 6.3rem;
    height: 8.5rem;
  }
  span::after{
    content:'/';
  }
  p,.score{
    margin-left: 1rem;
    margin-top: 0.5rem;
  }
  p:nth-child(1){
    font-size: 1.1rem;
    font-weight: 500;
  }
  p:nth-child(3){
    color: #9b9b9b;
  }
}
</style>
