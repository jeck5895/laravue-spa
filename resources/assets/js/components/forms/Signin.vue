<template>
    <div class="mt-1">
        <div class="columns is-centered">
            <div class="column is-5">
                <div class="notification is-danger" v-if="authStatus">
                    <button class="delete" @click="authStatus = false"></button>
                    {{ authStatus }}
                </div>
                <form @submit.prevent="login()">
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input v-validate="{rules:{required:true}}" name="username" class="input" v-model="email" type="email" placeholder="Email" required>
                            <span class="icon is-small is-left">
                                <i class="fa fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fa fa-check"></i>
                            </span>
                        </p>
                        <span class="help is-danger" v-show="errors.has('username')">{{ errors.first('title') }}</span>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input v-validate="{rules:{required:true}}" name="password" class="input" v-model="password" type="password" placeholder="Password" required>
                            <span class="icon is-small is-left">
                                <i class="fa fa-lock"></i>
                            </span>
                        </p>
                        <span class="help is-danger" v-show="errors.has('password')">{{ errors.first('title') }}</span>
                    </div>
                    <div class="field">
                        <p class="control">
                            <button class="button is-success">
                                Login
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    //to perform ajax when page is loaded specify it on mounted or created function
    created() {

    },
    data() {
        return {
            email: '',
            password: '',
            authStatus:false
        }
    },
    methods: {
        login() {
            let self = this;
            let data = {
                client_id: 2,
                client_secret: 'XETp4KfW6p94YmgFnGyED1pRjghDfvvCRHE4xYBf',
                grant_type: 'password',
                username: this.email,
                password: this.password
            };

            axios.post('/oauth/token', data)
                .then(response => {
                    //console.log(response);
                    self.$auth.setToken(response.data.access_token, response.data.expires_in + Date.now());
                    self.$router.push("/dashboard");
                    
                })
                .catch(function(error) {
                    //error.response to retrieve all error response
                    // console.log(error.response.data.message)
                    self.authStatus = error.response.data.message
                    
                })
        }
    }
}
</script>


<style lang="css" scoped>
.mt-1 {
    margin-top: 5rem;
}
</style>

