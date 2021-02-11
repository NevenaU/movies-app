import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex';
import {store} from './store'

Vue.config.productionTip = false
Vue.use(Vuex);

//const store = new Vuex.Store();


new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
