import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueTour from 'vue-tour'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css' 
import '@fortawesome/fontawesome-free/js/all.js'

require('vue-tour/dist/vue-tour.css')


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueTour)

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
