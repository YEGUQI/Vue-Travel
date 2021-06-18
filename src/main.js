import { createApp } from 'vue';
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
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'

/* eslint-disable no-new */
createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
