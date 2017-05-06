<template>
  <div>
    <v-header></v-header>
    <p class="tltle">{{this.$route.params.name}}</p>
    <p class="about">关于{{this.$route.params.name}}的图书</p>
    <div @click='showBookMsg(item.id)'  class="msg" v-for='(item,index) in bookdata'>
      <div class="xinxi">
        <p>{{item.title}}</p>
        <star class='star' :score='item.rating.average'></star>
        <p class="p-span">
          <span>{{item.author[0]}}</span>
          <span>{{item.publisher}}</span>
          <span>{{item.pubdate}}</span>
        </p>
      </div>
      <img :src="item.image">
    </div>
    <v-footer></v-footer>
  </div>
</template>



<script>
import star from '../../components/star/star.vue'
import header from '../../components/header.vue'
import footer from '../../components/footer.vue'
export default{
  data () {
    return {
      bookdata: {
        rating: {}
      }
    }
  },
  components: {
    'v-header': header,
    star,
    'v-footer': footer
  },
  mounted () {
    let url = '/api/book/search?tag=' + this.$route.params.name
    var _this = this
    this.$http.get(url)
    .then(function (response) {
      _this.bookdata = response.data.books
      console.log(_this.bookdata)
    })
    .catch(function (error) {
      console.log(error)
    })
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

<style scoped lang="scss">
@import "../../components/common/css/mixin.scss";
.tltle{
  margin-top: 2rem;
  font-size: 2rem;
  text-align: center;
}
.about{
  text-align: center;
  color: #aaa;
  margin-top: 1rem;
  padding-bottom: 1.5rem;
  margin-left: 1rem;
  @include border-1px(#e4e1e1);
  &:after{
    left: 0;
    bottom: 0;
  };
}
.star{
  margin-top: 0.5rem;
}
.msg{
  margin-top: 1.6rem;
  margin-left: 1rem;
  display: flex;
  padding-bottom: 1.5rem;
  @include border-1px(#e4e1e1);
  &:after{
    left: 0;
    bottom: 0;
  };
  .xinxi{
    width: 14rem;
    margin-right: 1rem;
  }
  p:nth-child(1){
    font-size: 1.1rem;
    font-weight: 500;
  }
  .p-span{
    font-size:0.9rem;
    margin-top: 1rem;
    color: #ccc;
    line-height: 1.5rem;
  }
  span{
    &::after{
      content: '/'
    }
  }
  img{
    float: right;
  }
}
</style>
