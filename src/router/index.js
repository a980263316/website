import Vue from 'vue'
import Router from 'vue-router'
import notFound from '@/components/notFound'
import home from '@/view/home'
import product from '@/view/product'
import freeioe from '@/view/freeioe'
import download from '@/view/download'
import about from '@/view/about'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/home'
  },{
    path: '/home',
    name: 'home',
    component: home
  }, {
    path: '/product/:id',
    name: 'product',
    component: product
  }, {
    path: '/freeioe',
    name: 'freeioe',
    component: freeioe
  }, {
    path: '/download',
    name: 'download',
    component: download
  }, {
    path: '/about',
    name: 'about',
    component: about
  }, {
    path: '*',
    name: 'notFound',
    component: notFound,
  }, ]
})
