<template>
    <form @submit.prevent="onSubmit()">
        <div class="field">
            <label class="label">Project Title</label>
            <div class="control">
                <input v-validate="{rules:{required:true, min:25}}" ref="title" class="input" name="title" type="text" v-model="project.title" placeholder="Title of your project" required/>
                <span class="help is-danger" v-show="errors.has('title')">{{ errors.first('title') }}</span>
            </div>
        </div>

        <div class="field">
            <label class="label">Project Description</label>
            <div class="control">
                <textarea v-validate="{rules:{required:true, min:150}}" class="textarea" name="description" v-model="project.description" placeholder="Your project description here..." required></textarea>
                <span class="help is-danger" v-show="errors.has('description')">{{ errors.first('description') }}</span>
            </div>
        </div>

        <div class="field">
            <div class="control">
                <button class="button is-primary">Save</button>
            </div>
        </div>
    </form>
</template>


<script>
export default {
    mounted() {
        this.$refs.title.focus();
    },
    data() {
        return {
            project: {
                title: '',
                description: ''
            },
            validationErrors:'',
        }
    },
    computed:{
        
    },
    methods: {
        onSubmit() {

            axios({
                method: 'POST',
                url: 'api/projects',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + this.$auth.getToken()
                },
                data: {
                    project_name: this.project.title,
                    description: this.project.description
                }
            })
                .then(
                    response => {
                        response.data
                        this.$root.$children[1].showModal = false //this close the modal accessing from Projects Components
                    }
                )
                .catch(error => this.validationErrors = error.response.data);
            //.catch(error => {console.log(error.response)});
            
        }
    }
}
</script>
