import VueRouter from 'vue-router';
import account from './main/account.vue';
import login from './subcom/login.vue';
import register from './subcom/register.vue';
import header from './frame/header.vue';
import left from './frame/left.vue';
import content from './frame/content.vue';


var router = new VueRouter({
    routes: [
        {
            path: '/', component: account,
            children:[
                {path:'account/login',component:login},
                {path:'account/register',component:register}
            ]
            
        },
        {path:'/index',components:{
            'default':header,
            'left':left,
            'content':content
        }}
    ]
});
export default router;