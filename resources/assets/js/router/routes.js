import VueRouter from 'vue-router';

let routes = [
    {
        path:'/',
        component: require('../components/Home.vue'),
        meta:{
            forVisitors: true
        }
    },
    {
        path:'/about',
        component: require('../components/About.vue'),
        meta:{
            forVisitors: true
        }
    },
    {
        path:'/projects',
        component: require('../components/projects/Projects.vue'),
        meta:{
            //forVisitors: true
        }
    },
    {
        path:'/sign-in',
        component: require('../components/forms/Signin'),
        meta:{
            forVisitors: true
        }
    },
    {
        path:'/dashboard',
        component:require('../components/admin/Dashboard'),
        meta:{
            forAdmin: true
        }
    }
];

export default new VueRouter({
    routes,
    mode:'history',
    linkExactActiveClass: 'is-active',
    linkActiveClass: 'is-active'
})