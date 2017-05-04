<template>
  <div class="hello">
   <v-header></v-header>
  </div>
</template>

<script>
import Vheader from '../components/header.vue'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'v-header': Vheader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
