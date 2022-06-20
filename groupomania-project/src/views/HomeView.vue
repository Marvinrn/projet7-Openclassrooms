<template>
    <div class="home" v-if="$store.getters.isLoggedIn">
        <NavBarHome />
        <PostMsg />
        <!-- <ShowAllPost /> -->
        <div v-for="post in Posts" :key="post.content">
            userId: {{ post.userId }} <br />
            email: {{ post.email }} <br />
            content: {{ post.content }} <br />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import NavBarHome from '@/components/NavBarHome.vue'
import PostMsg from '@/components/PostMsg.vue'
// import ShowAllPost from '../components/ShowAllPost.vue'

import axios from 'axios';

export default {
    name: 'HomeView',
    components: {
        NavBarHome,
        PostMsg,
        // ShowAllPost
    },

    data() {
        return {
            Posts: []
        }
    },

    mounted() {
        console.log(this.$store.getToken);
        axios.get('http://localhost:3000/api/post', {
            headers: { 'Authorization': `Bearer ${this.$store.getters.getToken}` }
        })
            .then(res => { this.Posts = res.data })
            .catch()
    }

}
</script>
