import VueRouter from 'vue-router';

let routes = [
    {
        path:'/',
        component: require('../components/Home.vue')
    },
    {
        path:'/about',
        component: require('../components/About.vue')
    },
    {
        path:'/projects',
        component: require('../components/Projects.vue')
    },
    {
        path:'/sign-in',
        component: require('../components/forms/Signin')
    }
];

export default new VueRouter({
    routes,
    mode:'history',
    linkExactActiveClass: 'is-active',
    linkActiveClass: 'is-active'
})