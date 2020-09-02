import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
