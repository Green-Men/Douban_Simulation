<template>
  <div>
    <div class="duoban">
      <img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png">
      <div>
        <p>豆瓣</p>
        <p>我们的精神部落</p>
      </div>
    </div>
    <a href="https://github.com/Green-Men/Douban_Simulation">去github查看源码</a>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.duoban {
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  img {
    width: 13%;
    height: 13%;
    margin-right: 1rem;
  }
  p {
    font-weight: 500;
  }
  p:nth-child(1) {
    margin-bottom: 0.3rem;
    font-size: 1.8rem;
  }
}
a {
  display: flex;
  justify-content: center;
  text-align: center;
  color: #42bd56;
  text-decoration: none;
  margin-top: 1.5rem;
  font-weight: 500;
  margin-bottom: 6rem;
}
</style>
