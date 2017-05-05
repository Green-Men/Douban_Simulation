<template>
  <div class="hello">
    <v-header></v-header>
    <p class="title">前端书籍</p>
    <div>
      <div v-for=''>
        
      </div>
    </div>
  </div>
</template>


<script>
import store from 'vuex'
import Vheader from '../../components/header.vue'
export default {
  name: 'hello',
  data () {
    return {
      bookData: {}
    }
  },
  mounted () {
    let a = this.$router.app._route.path
    let b = /\//
    let routerData = (a.split(b))[2]
    console.log(routerData)
    console.log(routerData)
    console.log(this.$store.state.home)
    this.bookData = this.$store.state.home.routerData
    console.log(this.bookData)
  },
  components: {
    'v-header': Vheader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  font-size: 2rem;
}
</style>
