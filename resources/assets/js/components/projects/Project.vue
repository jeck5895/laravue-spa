<template>
    <div class="column is-3">
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <!-- <img :src="project.img_path" alt="Image"> -->
                    <img src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png" alt="">
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
</template>

<script>
export default {
    props: ['project'],
    filters: {
        humanFormat(date) {
            return moment(date).format('MMMM Do YYYY');
        }
    },
}
</script>
