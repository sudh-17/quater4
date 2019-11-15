import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './api'
import leftApi from './left-api'

Vue.config.productionTip = false

const app = new  Vue({
  data: {
    a: '123456',
    b: '78910'
  },
  router,
  mixins: [api, leftApi],
  render: h => h(App),
}).$mount('#app')

window.app = app
