<template>
  <div id="app">
    <div class="title">
      <p>{{bookName}}</p>
      <p @click='moreBook()'>更多</p>
    </div>
    <div class="outBook">
      <div class="webBook">
        <div class="web" v-for='(item,index) in homeData' @click='showBookMsg(item.id)'>
          <div class="book">
            <img :src="item.image">
            <p>{{item.title}}</p>
            <star :score='item.rating.average'></star>
          </div>
        </div>
      </div>
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
      }]
    }
  },
  components: {
    star
  },
  mounted () {
    var _this = this
    console.log(_this.$route)
    this.$http.get('/api/book/search?q=前端')
      .then(function (response) {
        // console.log(response.data);
        _this.$store.commit('HOME_DATA', response.data.books)
        _this.homeData = _this.$store.state.home.WebDataBook
        // console.log(_this.homeData)
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
    },
    moreBook () {
      const path = '/books/' + 'WebDataBook'
      this.$router.push({
        path: path
      })
    }
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

.outBook {
  height: 11.2rem;
  overflow: hidden;
}

.webBook {
  height: 11.5rem;
  display: flex;
  width: 100%;
  height: 9.1rem;
  background: #fff;
  overflow: hidden;
  overflow-x: scroll;
  padding-top: 1rem;
  padding-bottom: 2rem;
}

.book {
  margin-left: 10px;
  background: #red;
  width: 6rem;
  height: 8rem;
  p {
    font-size: 0.94rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

img {
  width: 100%;
  height: 100%;
}
</style>
