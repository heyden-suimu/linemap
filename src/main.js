import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import {routerMode} from './config/env'
import './config/rem'
import FastClick from 'fastclick'
import echarts from 'echarts'
import {layer} from './components/common/common'
import VueSocketio from 'vue-socket.io';

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueRouter)
Vue.prototype.$echarts = echarts 
const router = new VueRouter({
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production'
})
let layerLogin = new Vue()
// router.beforeEach((to, from, next) => {

// 	let login = sessionStorage.login && JSON.parse(sessionStorage.login)

// 	if(to.path.indexOf("/home") !== -1 && !login){
// 		next({path:'/login'})
// 		layer(layerLogin,"请先登录",'warning')
// 	} else {
// 		next();
// 	}
// })
Vue.use(ElementUI)
Vue.use(VueSocketio, 'http://www.aituyou.com:3000');
new Vue({
	router,
	store,
}).$mount('#app')

