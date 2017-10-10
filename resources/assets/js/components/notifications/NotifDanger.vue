<template>
    <div class="notification is-danger">
        <button class="delete" @click="onClose"></button>
        {{ errorMsg }}
    </div>
</template>

<script>
    export default {
        props:['errorMsg'],
        methods:{
            onClose(){
                this.$emit('dismissed')
            }
        }
    }
</script>
