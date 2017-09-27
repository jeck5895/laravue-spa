<template>
    
    <section class="section">
        <!-- <div class="container"> -->
            <h1 class="title">Project List</h1>
            <!-- <h2 class="subtitle">
                A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
            </h2> -->
            <nav class="level">
                <!-- Left side -->
                <div class="level-left">
                    <!-- <div class="level-item">
                    <p class="subtitle is-5">
                        <strong>123</strong> posts
                    </p>
                    </div> -->
                    <div class="level-item">
                    <div class="field has-addons">
                        <p class="control">
                        <input class="input" type="text" placeholder="Search a project">
                        </p>
                        <p class="control">
                        <button class="button">
                            <span class="fa fa-search"></span> &nbsp
                            <span>Search</span>
                        </button>
                        </p>
                    </div>
                    </div>
                </div>

                <!-- Right side -->
                <div class="level-right">
                    <p class="level-item"><strong>All</strong></p>
                    <p class="level-item"><a>Published</a></p>
                    <p class="level-item"><a>Drafts</a></p>
                    <p class="level-item"><a>Deleted</a></p>
                    <p class="level-item"><a class="button is-success" @click="showModal = true">Add Project</a></p>
                </div>
            </nav>

            <div class="columns is-multiline">
                <div class="column is-3" v-for="project in projects">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                            <img :src="project.img_path" alt="Image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                <img src="/images/avatar.png" alt="Image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-6">{{ project.user.name }}</p>
                                <p class="subtitle is-7">{{ project.user.email }}</p>
                            </div>
                            </div>

                            <div class="content">
                                {{ project.description.substr(1,50) }}...
                            <br>
                            <small>{{ project.created_at | humanFormat }}</small>
                            <br>
                            <router-link to="/"> Read more </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            

            <!-- include modal here-->
            <modal v-if="showModal" @closeModal="showModal = false">
                <add-projects></add-projects>
            </modal>

        <!-- </div> -->
  </section>
</template>


<script>
    import modal from './modals/modal.vue';
    import AddProjects from './forms/AddProjects.vue';

    export default {
        //to perform ajax when page is loaded specify it on mounted or created function
        data(){
            return{
                projects:[],
                showModal:false
            }
        },
        mounted(){
            axios.get('api/projects')
                .then(response => this.projects = response.data);
        },
        methods:{
            
        },
        filters:{
            humanFormat(date){
                 return moment(date).format('MMMM Do YYYY');
            }
        },
        components:{ modal, AddProjects}
    }
</script>


<style scoped>
  /*CSS code here*/
</style>

