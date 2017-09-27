<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">Add Project</p>
            <button class="delete" aria-label="close" @click="$emit('closeModal')"></button>
            </header>
            <section class="modal-card-body">
                <slot></slot>
            </section>
            <!-- <footer class="modal-card-foot">
            <button class="button is-success">Save changes</button>
            <button class="button">Cancel</button>
            </footer> -->
        </div>
    </div>
</template>

<script>
    

    export default {
        data(){
            return {

            }
        },
        mounted(){

        },
        methods:{

        },
        components:{  }
    }
</script>

