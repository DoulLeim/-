import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js' 
import store from '@/store/index'
import '@/assets/style/reset.css'
import 'lib-flexible'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import 'animate.css'

Vue.config.productionTip = false
Vue.component('v-icon', Icon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log(process.env)
