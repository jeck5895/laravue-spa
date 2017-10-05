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
                    <p class="level-item" v-if="this.$auth.isAuthenticated()"><a class="button is-success" @click="showModal = true">Add Project</a></p>
                </div>
            </nav>

            <div class="columns is-multiline">
            <!-- NOTE: New syntax of v-for only applies in components not on html tag -->
                <project 
                    v-for="project in projects" 
                    v-bind:project="project" :key="project.id">
                </project>
            </div>
        
            

            <!-- include modal here-->
            <modal v-if="showModal" @closeModal="showModal = false">
                <add-projects></add-projects>
            </modal>

        <!-- </div> -->
  </section>
</template>


<script>
    import modal from '../modals/modal.vue';
    import AddProjects from '../forms/AddProjects.vue';
    import Project from '../projects/Project.vue';
    export default {
        //to perform ajax when page is loaded specify it on mounted or created function
        data(){
            return{
                projects:[],
                showModal:false
            }
        },
        mounted(){
            this.getProjects(); //get all projects
        },
        computed:{ //computed are functions that are cached if varaiable dependencied didn't change
            getProjects(){
                axios.get('api/projects', this.$headersConfig)
                .then(response => this.projects = response.data);
            }
        },
        methods:{
            
        },
        components:{ modal, AddProjects, Project}
    }
</script>


<style scoped>
  /*CSS code here*/
</style>

