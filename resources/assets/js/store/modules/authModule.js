/*
    You can also extract the authModule objects[state, mutations, getters, actions] by file  by using extract default
*/
import Vue from 'vue';

export default {
    state: {
        authenticatedUser: {},
        isAuthenticated: false,
        authErrors: null, 
    },
    mutations: {
        setAuthenticatedUser: (state, payload) => {
            state.authenticatedUser = payload;
        },
        setIsAuthenticated: (state, payload) => {
            state.isAuthenticated = payload;
        },
        setErrors: (state, payload) => {
            state.authErrors = payload;
        },
        clearErrors: state => {
            state.authErrors = null;
        }
    },
    getters: {
        authenticatedUser: state => {
            return state.authenticatedUser;
        },
        authErrors: state => {
            return state.authErrors;
        },
        isAuthenticated: state => {
            return state.isAuthenticated;
        }
    },
    actions: {
        setIsAuthenticated: (context, payload) => {
            return context.commit('setIsAuthenticated', payload);
        },
        getAuthUser: (context, token) => {
            var config = {
                headers: {
                    'Accept':'application/json',
                    'Authorization': 'Bearer '+ token
                }
            }
            axios.get('api/user', config).then(response => {
                //console.log(response)
                context.commit('setAuthenticatedUser', response.data)
            }).catch(function(error) {
                console.log(error)
            });

            
        },
        setErrors: (context, payload) => {
            context.commit('setErrors', payload);
        },
        clearErrors: (context) => {
            context.commit('clearErrors');
        },
        clearAuthUser: context => {
            return context.commit('setAuthenticatedUser', {});
        },
        signIn: (context, payload) => {
            //console.log(payload)
            let self = this;
            let data = {
                client_id: 2,
                client_secret: 'XETp4KfW6p94YmgFnGyED1pRjghDfvvCRHE4xYBf',
                grant_type: 'password',
                username: payload.email,
                password: payload.password
            };


            return axios.post('/oauth/token', data).then(response => {
                
                var token = response.data.access_token;
                var expiration =  response.data.expires_in + Date.now();
                //save token to local storage
                Vue.auth.setToken(token, expiration);
                //set IsAuthenticated to true
                context.commit('setIsAuthenticated', true); 

            }).catch(function (error) {
                //self.authStatus = error.response.data.message
                context.commit('setErrors', error.response.data.message);
            });
        }
    }
}