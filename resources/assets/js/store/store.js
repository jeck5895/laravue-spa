import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const projectsModule = {
    state: {
        projects:[],
    },
    mutations: {
        getProjects: state => {
            axios.get('api/projects', this.$headersConfig)
            .then(
                response => { state.projects = response.data;
                //console.log(state.projects)
                }
            );          
        }
    },
    actions: {

    },
    getters: { 
        //it's a computed property for store
        //always return an object
        //i.e Display an featured projects "map" function is used to loop an array
        /*
            getFeaturedProjects: state => {
                let featuredProjects = state.projects.map(project =>{
                    if(project.isFeatured == 1){
                        return {
                            project_name = project.project_name,
                            description = project.description
                        }
                    }
                })
            } 
        */
    }
}

const authModule = {
    state: {
        authenticatedUser:{ 
            name:"Jerick Labasan",
            email:"jeck.labasan@gmail.com"
        }
        
    },
    mutations: {

    },
    getters: {
        getAuthUser:state => {
            return state.authenticatedUser
        }
    },
    actions: {

    }
}

export const store = new Vuex.Store({
    modules:{
        projectsModule: projectsModule,
        authModule: authModule
    }
});