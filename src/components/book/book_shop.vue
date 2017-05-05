<template>
  <div id="app">
    <div class="title">
      <p>{{bookName}}</p>
      <p>更多</p>
    </div>
    <div class="show">
      <img :src="homeData[0].image">
      <div>
        <div class="bool_name_price">
          <p>{{ homeData[0].title }}</p>
          <p>¥ {{ homeData[0].price}}</p>
        </div>
        <p>{{homeData[0].summary}}</p>
      </div>
    </div>
    <div class="outBook">
      <div class="webBook">
        <div class="web" v-for='(item,index) in homeData' @click='showBookMsg(item.id)'>
          <div v-if='index >=1'>
            <div class="book">
              <img :src="item.image">
              <p>{{item.title}}</p>
              <p>¥ {{item.price}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
  mounted () {
    var _this = this
    this.$http.get('/api/book/search?q=散文')
      .then(function (response) {
        // console.log(response.data);
        _this.$store.commit('HOME_DATA', response.data.books)
        _this.homeData = _this.$store.state.home.EndDataBook
        // console.log(_this.homeData)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    showBookMsg (str) {
      console.log(str)
      const path = '/book/' + str
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

.show {
  display: flex;
  img {
    width: 6rem;
    height: 8.5rem;
    padding: 1rem 1rem 0 0.6rem;
  }
  p {
    font-size: 1.4rem;
    font-weight: 400;
  }
  p:nth-child(2){
    font-size: 0.8rem;
    color: #B7B7B7;
  }
  .bool_name_price {
    width: 15rem;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    p:nth-child(2){
      color: #E86A4D;
      font-size: 1rem;
    }
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
    text-align: center;
    
  }
  p:nth-child(3){
    padding-top: 0.3rem;
    font-size: 0.2rem;
    color: #B7B7B7;
  }
}

img {
  width: 100%;
  height: 100%;
}
</style>
