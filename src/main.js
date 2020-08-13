import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vuelazyload from 'vue-lazyload'
Vue.config.productionTip = false

Vue.prototype.$EventBus = new Vue()


//使用图片懒加载
Vue.use(vuelazyload,{
  //loading:require('@/assets/imgs/2.jpg')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
