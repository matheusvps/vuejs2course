import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import contadores from './contadoresTest.vue'

Vue.config.productionTip = false
Vue.component('app-contadores',contadores)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
