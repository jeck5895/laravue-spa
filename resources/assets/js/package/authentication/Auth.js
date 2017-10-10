export default function(Vue){
    Vue.auth = {
        setToken (token, expiration)  {
            //set token to localStorage or cookies
            localStorage.setItem("token", token);
            localStorage.setItem("expiration", expiration);
        },
        getToken ()  {
            var token = localStorage.getItem("token");
            var expiration = localStorage.getItem("expiration");

            if(!token || !expiration){
                return null;
            }
            if(Date.now() > parseInt(expiration)){ //check if the token expiration is expired
                this.destroyToken();
                return null;
            }
            //should add some condition token validation from the database
            else{
                return token;
            }
        },
        destroyToken () {
            localStorage.removeItem("token");
            localStorage.removeItem("expiration");
        },
        isAuthenticated () {
            if(this.getToken())
                return true;
            else   
                return false;
        }
    }
    Object.defineProperties(Vue.prototype,{
        $auth:{
            get:() => {
                return Vue.auth
            }
        }
    })
}