<template>
  <div>
    <p>分类浏览</p>
    <div>
      <ul>
        <li v-for='(item,index) in contents'>{{ item }} <span></span></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      contents: ['小说', '爱情', '历史', '外国文学', '青春', '励志', '随笔', '传记', '推理', '旅行', '奇幻', '经营']
    }
  }
}
</script>
<style lang='scss' scoped>
p {
  font-size: 1.06rem;
  padding-left: 1rem;
  font-weight: 500;
}

ul {
  margin-top: 1rem;
  padding-left: 1rem;
  font-weight: 500;
  *zoom:1;
}

ul:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}

li {
  width: 47%;
  float: left;
  display: block;
  color: #42bd56;
  border-top: solid 1px #eee;
  border-right: solid 1px #eee;
  height: 2.64rem;
  line-height: 2.64rem;
  font-size: 0.7rem;
  padding-left: 0.5rem;
  span {
    color: #ccc;
    float: right;
    font-weight: bold;
    display: inline-block;
    border-right: solid 1px #ccc;
    border-bottom: solid 1px #ccc;
    width: .5rem;
    height: .5rem;
    transform: rotate(-45deg);
    margin-top: 1rem;
    margin-right: 1.5rem;
  }
}
</style>
