import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'

Vue.config.productionTip = false
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')

// import bgswitcher from 'bcat.bgswitcher\Source\js\jquery.bcat.bgswitcher.min.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
