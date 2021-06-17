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

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
