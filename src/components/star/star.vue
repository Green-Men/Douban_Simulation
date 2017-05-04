<template>
  <div class="star">
    <span v-for='item in itemClass' :class='item' class="star-item"></span>
    <span class="score">{{score}}</span>
  </div>
</template>
<script>
const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'

export default {
  props: {
    score: {
      typr: Number
    }
  },
  computed: {
    itemClass () {
      let result = []
      let score = Math.floor(this.score) / 2
      let starOn = Math.floor(score)
      let starHalf = (score - starOn) === 0 ? 0 : 1
      for (let i = 0; i < starOn; i++) {
        result.push(CLS_ON)
      }
      if (starHalf === 1) {
        result.push(CLS_HALF)
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF)
      }
      return result
    }
  }
}
</script>
<style leng="scss" scoped>
.star{
  margin-top: 0.2rem;
}
.star-item {
  display: inline-block;
  height: 11px;
  width: 14px;
  background-size: 10px 10px;
}

.on {
  background-image: url(star36_on@2x.png);
  background-repeat: no-repeat;
}

.half {
  background-image: url(star36_half@2x.png);
  background-repeat: no-repeat;
}

.off {
  background-image: url(star36_off@2x.png);
  background-repeat: no-repeat;
}
.score{
  font-size: 0.5rem;
  color: #B0B0B0;
}
</style>
