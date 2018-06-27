// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueAwesome from 'vue-awesome'
import Icon from 'vue-awesome/components/Icon'

import 'vue-awesome/icons'
import './common/stylus/index.stylus'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueAwesome);
Vue.component('icon', Icon)

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
