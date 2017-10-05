
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap'); //import vue js in bootstrap
import router from './router/routes';
import Navigation from './components/navigation/Navigation.vue';

//set default base_url for axios
//axios.defaults.baseURL = 'http://localhost:9000/api';
//set the headers in every request globally
Vue.prototype.$headersConfig =  {
    headers: {
        'Accept':'application/json',
        'Authorization': 'Bearer '+ Vue.auth.getToken()
    }
}

//guarding routes if user is authenticated
router.beforeEach((to, from, next)=>{
    if(to.matched.some(record => record.meta.forVisitors)){
        //NOTE: Vue.auth instead of this.$auth -> because app.js is not a component    
        if(Vue.auth.isAuthenticated()){ 
            next({
                path:'/dashboard'
            });
        }
        else{
            next();
        }
   }
   else if(to.matched.some(record => record.meta.forAdmin)){
        if(!Vue.auth.isAuthenticated()){ 
            next({
                path:'/sign-in'
            });
        }
        else{
            next();
        }
   }
   else{
       next();
   }
    // console.log(to)
    // console.log(from)
    // console.log(next)
})

const app = new Vue({
    el: '#app',
    data:{
        authUser:{
            name:"Jerick Labasan",
            email:"jeck.labasan@gmail.com"
        }
    },
    router:router,
    components:{Navigation}
});
