import Vue from 'vue'
import App from './App.vue'
import api from './api'

Vue.config.productionTip = false

const app = new  Vue({
  data: {
    a: '123456',
    b: '78910'
  },
  mixins: [api],
  render: h => h(App),
}).$mount('#app')

window.app = app
