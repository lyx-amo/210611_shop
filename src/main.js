import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import store from '@/store'
import '@/mock/mockServer'
import 'swiper/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Pagination from '@/components/Pagination'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.config.productionTip = false

Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)

new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,
  store,//注册可以使用$store
}).$mount('#app')
