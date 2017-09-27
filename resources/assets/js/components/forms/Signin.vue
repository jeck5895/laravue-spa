<template>
  <div class="mt-1">
        <div class="columns is-centered">
            <div class="column is-5">
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input class="input" v-model="email" type="email" placeholder="Email">
                            <span class="icon is-small is-left">
                            <i class="fa fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                            <i class="fa fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" v-model="password" type="password" placeholder="Password">
                            <span class="icon is-small is-left">
                            <i class="fa fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control">
                            <button @click="login" class="button is-success">
                            Login
                            </button>
                        </p>
                    </div>
            
            </div>
        </div>             
  </div>
</template>


<script>
    export default {
        //to perform ajax when page is loaded specify it on mounted or created function
        created(){

        },
        data(){
            return{
                email:'',
                password:'',
            }
        },
        methods:{
            login(){
                let data = {
                    client_id: 2,
                    client_secret: 'XETp4KfW6p94YmgFnGyED1pRjghDfvvCRHE4xYBf',
                    grant_type: 'password',
                    username: this.email,
                    password: this.password
                };
                
                axios.post('/oauth/token', data)
                .then(response => {
                    console.log(response);
                })
            }
        }
    }
</script>


<style lang="css" scoped>
    .mt-1{
        margin-top: 5rem;
    }
</style>

