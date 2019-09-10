import VueRouter from 'vue-router';
import account from './main/account.vue';
import register from './subcom/register.vue';
import header from './frame/header.vue';
import left from './frame/left.vue';
import content from './frame/content.vue';


var router = new VueRouter({
    routes: [
        {
            path: '/', component: account
        },
        {
            path: '/index', components: {
                'default': header,
                'left': left,
                'content': content
            }
        },
        {
            path: '/register', component: register
        }
    ]
});
export default router;