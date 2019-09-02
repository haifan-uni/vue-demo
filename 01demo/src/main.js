//项目js入口
console.log('ss');

import './css/index.css'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import app from './app.vue';
import router from './router.js'


var vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    },
    // components:{
    //     login
    // }
    render: c => c(app),//容器中的内容被清空并且覆盖
    router//挂载路由
});