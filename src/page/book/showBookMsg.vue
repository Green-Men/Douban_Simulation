<template>
  <div class="app">
    <v-header></v-header>
    <div class="download">
      <img src="https://img3.doubanio.com/f/talion/fbcb08987a36258354c6037211d94286bef9716c/pics/card/promotion_bg.jpg">
      <div class="msg">
        <div class="open">
          <a href="#">用 App 打开</a> <br/>
          <a href="#">更多好书推荐导读</a>
        </div>
          <a href="#">极速下载</a>
          <a href="#">打开</a>
      </div>
    </div>
    <p class="title">{{homeData.title}}</p>
    <div class="bookMsg">
      <div>
        <div class="rating">
          <star class='star' :score='homeData.rating.average'></star>
          <span>{{ homeData.rating.numRaters}}人评价</span>
        </div>
        <div class="msg">
          <span>{{ homeData.author[0]}}</span>
          <span>{{ homeData.publisher}}</span>
          <span>{{ homeData.pages }}页</span>
          <span> {{ homeData.binding}}</span>
          <span> {{homeData.price}}</span>
          <span>{{homeData.pubdate}}</span>
        </div>
      </div>
      <div class="img">
        <img :src="homeData.image">
      </div>
    </div>
    <div class="price">
      <p><span>在哪儿买这本书</span><span >京东商城{{prices}}起</span></p>
    </div>
    <div class="read">
      <p>想读</p>
      <p>在读</p>
      <p>读过</p>
    </div>
    <div class="content">
      <p>{{homeData.title}}的内容简介</p>
      <p @click='open' v-bind:class='{Kshow:Kshow}'>{{homeData.summary}}</p>
    </div>
    <div class="more">
      <p>查看更多豆瓣高分好书</p>
      <ul @click='tags(item.title)' v-for='(item,index) in homeData.tags'>
        <li>{{item.title}}</li>
      </ul>
      <p class="clearfix"></p>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import store from 'vuex'
import header from '../../components/header.vue'
import star from '../../components/star/star.vue'
import footer from '../../components/footer.vue'
export default {
  data () {
    return {
      homeData: {
        rating: {},
        author: {},
        tags: [],
        price: ''
      },
      Kshow: true
    }
  },
  computed: {
    prices () {
      let sum = (this.homeData.price.replace(/[^0-9+\\.]/g, '') * 0.7).toFixed(2)
      return sum
    }
  },
  components: {
    star,
    'v-header': header,
    'v-footer': footer
  },
  mounted () {
    var _this = this
    var url = '/api/book/' + this.$route.params.id
    var id = 'U' + this.$route.params.id
    this.$http.get(url)
      .then(function (response) {
        _this.$store.commit('BOOK_DATA', {
          id: response.id,
          data: response.data
        })
        _this.homeData = _this.$store.state.bookMsg.id
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    open (meg) {
      if (this.Kshow === false) {
        this.Kshow = true
      } else {
        this.Kshow = false
      }
    },
    tags (str) {
      const path = '/tag/' + str
      this.$router.push({
        path: path
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../components/common/css/mixin.scss';
.clearfix:after {
  content:" "; 
  display:block; 
  height:0; 
  clear:both; 
} 
.clearfix { 
  *zoom:1; 
}
.download{
  position:relative;
  img{
    width:100%;
  }
  .msg{
    position: absolute;
    display:flex;
    top: 17%;
    left:0;
  }
  a:nth-child(2){
    margin-top: 0.4rem;
    margin-left: 4.5rem;
    color: #fff;
    background: #42BD56;
    height: 2rem;
    width: 5rem;
    font-size: 0.94rem;
    font-weight: 600;
    text-align: center;
    line-height: 2rem;
    border-radius: 0.3rem;
  }
  a:nth-child(3){
    margin-top: 0.4rem;
    margin-left: 0.5rem;
    color: #42BD56;
    height: 2rem;
    width: 4rem;
    font-size: 0.94rem;
    font-weight: 600;
    text-align: center;
    line-height: 2rem;
    border-radius: 0.3rem;
    border: 1px solid #42BD56;
  }
  .open{
    a{
      margin-left: 1.1rem;
      color: #2CA532;
      line-height: 1.5rem;
      font-size: 0.8rem;
      font-weight: 400;
      border:none;
    }
  }
}
.title {
  width: 93%;
  font-size: 1.5rem;
  padding-left: 1.5rem;
  margin-top: 2rem;
  overflow: hidden;
  white-space: nowrap;
  /*设置不折行*/
  -o-text-overflow: ellipsis;
  /*兼容opera*/
  text-overflow: ellipsis;
  /*这就是省略号喽*/
}

.star {
  margin-top: 0.5rem;
  margin-bottom: 1.3rem;
}

.rating {
  display: flex;
  span {
    color: #AAAAAA;
    padding-left: 1rem;
    margin-top: 0.55rem;
  }
}

.bookMsg {
  margin-left: 1.5rem;
  display: flex;
  padding-bottom: 0.5rem;
  .msg {
    margin-right: 1rem;
    span {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    span::after {
      content: "/";
    }
  }
  .img {
    margin-top: 0.5rem;
    width: 8rem;
    height: 9rem;
  }
}

.price {
  @include border-1px(#e4e1e1);
  padding: 0.8rem 0;
  &:after {
    top: 0;
    bottom: 0;
    border-bottom: 1px solid #e4e1e1;
  }
  span {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  span:nth-child(1) {
    color: #51C263;
  }
  span:nth-child(2) {
    float: right;
    color: #AAAAAA;
  }
}
.read{
  display:flex;
  p{
    width: 12rem;
    color: #FFB712;
    border: 1px solid #FFB712;
    margin: 2rem 0.8rem;
    padding: 0.5rem 1rem;
    text-align: center;
    border-radius: 0.3rem;
  }
}
.content{
  width:90%;
  margin:0 auto;
  p:nth-child(1){
  color:#BBBBBB;
  overflow: hidden;
  white-space: nowrap;      /*设置不折行*/
  -o-text-overflow: ellipsis;   /*兼容opera*/
  text-overflow: ellipsis;    /*这就是省略号喽*/
  }
  p:nth-child(2){
    margin-top: 1rem;
    line-height: 1.4rem;
  }
  .Kshow{
    height: 9.5rem;
    overflow: hidden;
  }
}
.more{
  margin-top: 1.5rem;
  p{
  color:#BBBBBB;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  }
  li{
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    font-size: 0.8rem;
    background: #F5F5F5;
    float: left;
    border:1px solid #F5F5F5;
    border-radius: 1.3rem;
  }
}
</style>
