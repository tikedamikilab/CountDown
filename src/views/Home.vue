<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="bg_img">
      <CountDown msg="三木光範教授の退職まで、あと"/>
    </div>
  </div>
</template>

<script src="../js/jquery.bgswitcher.js"></script>
<script>
jQuery(function($) {
    $('.bg-slider').bgSwitcher({
        images: ['../assets/logo.png','../assets/logo.png'], // 切り替える背景画像を指定
    });
});
</script>

<script>
// @ is an alias to /src
import CountDown from '@/components/CountDown.vue'
import { setInterval } from 'timers';

export default {
  name: 'home',
  components: {
    CountDown
  },
  data: function() {
    return{
      imgcount: 0,
      imagmax: 4,
      changeimgObj: null,
    }
  },
  methods: {
    changeImg: function(){
      if(this.imgcount > this.imagmax) this.imgcount = 1;
      $("#wrapper").css("background","url('./bgimgs/img"+this.imgcount+".jpg')");
      this.imgcount += 1
    }
  },
  mounted: function(){
    this.changeimgObj = setInterval(this.changeImg, 1000)
  },
  destroyed: function() {
    clearInterval(this.changeimgObj)
  },
}
</script>

<style scoped>
.bg_img {
  /* background-color: #ffd54f; */
  background: url('./bgimgs/img1.jpg');
  width: 100vw;
  height: 100vh;
  background-position:center center;
	background-size: cover;
	/* display: flex; */
}

.bg-slider {
	width: 100vw;
	height: 100vh;
	background-position:center center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
}
.bg-slider__title{
	color: #fff;
	font-size: 48px;
	line-height: 1.5;
	font-weight: bold;
	text-align:center;
	text-shadow: 1px 1px 1px #000;
}
</style>