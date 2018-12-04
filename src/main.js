import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import './plugins/iview.js'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

// import VueBus from 'vue-bus';

// Vue.use(VueBus);


// Vue.use(VueRouter);
Vue.use(iView);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
