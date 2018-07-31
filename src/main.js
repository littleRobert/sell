// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuex from "vuex"

import './common/stylus/index.stylus'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {

  }
})
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App
    }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
