import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
// 引入swiper 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 样式重置
import 'style/reset.css'

// iconfont 样式
import 'style/iconfont.css'

// 解决移动端 1像素边框问题
import 'style/border.css'
// 引入swiper 的样式
import 'swiper/dist/css/swiper.css'

// 解决移动端点击 3毫秒 延迟的问题
import fastclick from 'fastclick'
fastclick.attach(document.body)

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
