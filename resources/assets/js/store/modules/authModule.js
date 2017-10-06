/*
    You can also extract the authModule objects[state, mutations, getters, actions] by file  by using extract default
*/

export default {
    state: {
        authenticatedUser:{ 
            name:"Jerick Labasan",
            email:"jeck.labasan@gmail.com"
        },
        isLoggedIn: null
        
    },
    mutations: {
        setLoggedIn:state => {
            state.isLoggedIn = true;
        }
    },
    getters: {
        getAuthUser:state => {
            return state.authenticatedUser;
        }
    },
    actions: {
        setLoggedIn:context =>{
            context.commit(setLoggedIn);
        }
    }
}