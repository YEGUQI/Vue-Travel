// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 样式重置
import 'style/reset.css'

// inconfont 样式
import 'style/iconfont.css'

// 解决移动端 1像素边框问题
import 'style/border.css'

// 解决移动端点击 3毫秒 延迟的问题
import fastclick from 'fastclick'
fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
