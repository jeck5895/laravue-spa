<template>
    <div class="mt-1">
        <div class="columns is-centered">

            <div class="column is-5">

                <notif-danger v-if="authErrors" @dismissed="onDismissed" :errorMsg="authErrors"></notif-danger>

                <form @submit.prevent="signIn()">
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

        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn;
        },
        authErrors() {
            return this.$store.getters.authErrors;
        }
    },
    methods: {
        signIn() {
            let data = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('signIn', data).then(() => {
                this.$store.dispatch('getAuthUser', this.$auth.getToken()).then(()=>{
                    this.$router.push("/dashboard");
                });
            });
        },
        onDismissed() {
            this.$store.dispatch('clearErrors');
        }
    }
}
</script>


<style lang="css" scoped>
    .mt-1 {
        margin-top: 5rem;
    }

    .notification.is-danger{
        background-color: #9c2222;
    }
</style>

