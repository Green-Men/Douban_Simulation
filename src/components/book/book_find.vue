<template>
  <div id="app">
    <div class="title">
      <p>{{bookName}}</p>
      <p>更多</p>
    </div>
    <div class="book">
      <ul>
        <li v-for='(item,index) in homeData' v-if='index <= 10' :style="{color:randomColor[index]}">{{ item.title }}</li>
        <br>
        <li v-for='(item,index) in homeData' v-if='index >10 && index <20' :style="{color:randomColor[index]}">{{ item.title }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import store from 'vuex'
import star from '../star/star.vue'
export default {
  name: 'book-index',
  props: ['bookName'],
  data () {
    return {
      homeData: [{
        rating: {}
      }],
      randomColor: []
    }
  },
  components: {
    star
  },
  mounted () {
    var _this = this
    this.$http.get('/api/book/search?tag=生活')
      .then(function (response) {
        _this.$store.commit('HOME_DATA', response.data.books)
        _this.homeData = _this.$store.state.home.lifeBook
          // console.log(_this.homeData)
          // console.log(_this.randomColor)
      })
      .catch(function (error) {
        console.log(error)
      })
    var color = ['#bd7803', '#72cdd7', '#c5da01', '#8ec2f5', '#ff981f', 'A0BF7C', '#f6bf1c', '#FF4055']
    for (let i = 0; i <= 20; i++) {
      let randomNum = Math.floor(Math.random() * 7)
      _this.randomColor[i] = color[randomNum]
    }
    console.log(this.randomColor)
  }
}
</script>
<style scoped lang='scss'>
.title {
  display: flex;
  justify-content: space-between;
  p {
    font-size: 1.06rem;
    padding-top: 0.8rem;
  }
  p:nth-child(1) {
    padding-left: 1rem;
    font-weight: 500;
  }
  p:nth-child(2) {
    padding-right: 1rem;
    color: #42bd56;
  }
}

.book {
  height: 7.7rem;
  overflow: hidden;
  ul {
    white-space: nowrap;
    height: 5rem;
    overflow: hidden;
    overflow-x: auto;
    padding: 15px 15px 43px 15px;
  }
  li {
    margin: 0px 0 8px 8px;
    height: 3rem;
    line-height: 3rem;
    font-size: .94rem;
    display: inline-block;
    border-radius: .25rem;
    border: solid 1px;
    vertical-align: middle;
    padding: 0 1rem 0 1rem;
  }
}
</style>
