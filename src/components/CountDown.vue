<template>
  <div class="container">
    <h1 class="padding_top_2 bigtext">{{ msg }}</h1>
    <ul>
      <li class="bigtext"><span class="bigtext">{{ days }}</span>days</li>
    </ul>
    <ul>
      <li><span>{{ hours }}</span>&nbsp;Hours&nbsp;</li>
      <li><span>{{ minutes }}</span>Minutes</li>
      <li><span>{{ seconds }}</span>Seconds</li>
    </ul>
    <p> Made by Taro Ikeda, Intelligent Systems Design Laboratory</p>
  </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script>
import { Stream } from 'stream';
export default {
  name: "countdown",
  props: {
    msg: String,
  },
  data: function() {
    return {
      // goal: new Date("Mar 31, 2020 00:00:00").getTime(),
      // 同志社大学の卒業式3/22 13:00~
      goal: new Date("Mar 22, 2020 13:00:00").getTime(),
      second: 1000,
      minute: 60000,
      hour: 3600000,
      day: 86400000,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds:0,
      now: 0,
    };
  },
  computed: {
  },
  methods:{
    countCalc: function(){
      this.now = new Date().getTime();
      let distance = this.goal - this.now;
      this.days = Math.floor(distance / (this.day));
      this.hours = Math.floor((distance % (this.day)) / (this.hour));
      this.minutes = Math.floor((distance % (this.hour)) / (this.minute));
      this.seconds = Math.floor((distance % (this.minute)) / this.second);
    },
  },  
  mounted: function(){
    this.timerObj = setInterval(this.countCalc, 1000)
  },
  destroyed: function() {
    clearInterval(this.timerObj)
  },
};
</script>

<style lang="scss" scoped>
.container {
  font-weight: bold;
  color: rgb(0, 0, 0);
  -webkit-text-stroke: 1px #FFF;
  text-align: center;
}

h1 {
  font-weight: normal;
}

.bigtext {
  font-size: 480%;
}

.padding_top_2{
  padding-top: 2%;
}
.padding_bottom_4{
  padding-bottom: 4%;
}
.padding_top_0{
  padding-top: 0;
}

li {
  display: inline-block;
  font-size: 2.5em;
  list-style-type: none;
  padding: 1%;
  padding-top: 0em;
  text-transform: uppercase;
  opacity: 0.8;
}

li span {
  display: block;
  font-size: 4.5rem;
}

p{
  font-size: 200%;
}
</style>