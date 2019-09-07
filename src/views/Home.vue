<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div v-if="imgcount===1" class="bg_img1">
      <CountDown msg="三木光範教授のご退職まで、あと"/>
    </div>
    <div v-else-if="imgcount===2" class="bg_img2">
      <CountDown msg="三木光範教授のご退職まで、あと"/>
    </div>
    <div v-else-if="imgcount===3" class="bg_img3">
      <CountDown msg="三木光範教授のご退職まで、あと"/>
    </div>
    <div v-else-if="imgcount===4" class="bg_img4">
      <CountDown msg="三木光範教授のご退職まで、あと"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CountDown from '@/components/CountDown.vue'

export default {
  name: 'home',
  components: {
    CountDown
  },
  data: function() {
    return{
      imgcount: 1,
      imagmax: 3,
      changeimgObj: null,
    }
  },
  methods: {
    changeImg: function(){
      if(this.imgcount > this.imagmax) this.imgcount = 0
      this.imgcount += 1
    }
  },
  mounted: function(){
    this.changeimgObj = setInterval(this.changeImg, 5000)
  },
  destroyed: function() {
    clearInterval(this.changeimgObj)
  },
}
</script>

<style lang="scss" scoped>

$url_img1: './bgimgs/img1.jpg';
$url_img2: './bgimgs/img2.jpg';
$url_img3: './bgimgs/img3.jpg';
$url_img4: './bgimgs/img4.jpg';

$imgs: "img1","img2","img3","img4";
$url_imgs: #{$url_img1}, #{$url_img2}, #{$url_img3}, #{$url_img4};

@each $img in $imgs {
  $n: index($imgs, $img);
  $imgnum: nth($url_imgs, $n);
    .bg_#{$img} {
    background: url($imgnum);
    width: 100vw;
    height: 100vh;
    background-position:center center;
    background-size: cover;
  }
}

// .bg_img1 {
//   /* background-color: #ffd54f; */
//   background: url($url_img1);
//   width: 100vw;
//   height: 100vh;
//   background-position:center center;
// 	background-size: cover;
// 	/* display: flex; */
// }

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