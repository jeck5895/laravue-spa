<template>
    <form @submit.prevent="onSubmit()">
        <div class="field">
            <label class="label">Project Title</label>
            <div class="control">
                <input v-validate="{rules:{required:true, min:50}}" ref="title" class="input" name="title" type="text" v-model="title" placeholder="Title of your project" required/>
                <span class="help is-danger" v-show="errors.has('title')">{{ errors.first('title') }}</span>
            </div>
        </div>

        <div class="field">
            <label class="label">Project Description</label>
            <div class="control">
                <textarea v-validate="{rules:{required:true, min:150}}" class="textarea" name="description" v-model="description" placeholder="Your project description here..." required></textarea>
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
        mounted(){
            this.$refs.title.focus();
            
        },
        data(){
            return {
                title:'',
                description:''
            }
        },
        methods:{
            onSubmit(){
                //console.log(this.title + " " + this.description)
                axios.post("api/projects",
                    {
                        project_name:this.title,
                        description:this.description
                    })
                    .then(response => response.data);
                    //.catch(error => this.errors = error.response.data);
                    //.catch(error => {console.log(error.response)});
            }
        }
    }
</script>
