//项目js入口
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'


import './_style/css/font-awesome.css'

// import 'jquery/dist/jquery.js'
// import 'bootstrap/dist/js/bootstrap.js'

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
    render: c => c(app),//容器中的内容被清空并且覆盖
    router//挂载路由
});