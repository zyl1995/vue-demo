import Vue from 'vue'
import App from './App.vue'
import router from './router'
import resource from './plugins/resource'
import * as resources from './resources'

Vue.config.productionTip = false

Vue.use(resource, {
  resources,
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
