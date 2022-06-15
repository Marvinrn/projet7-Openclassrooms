<template>
    <div class="home" v-if="$store.getters.isLoggedIn">
        <NavBarHome />
        <PostMsg />
        <ShowAllPost />
    </div>
</template>

<script>
// @ is an alias to /src
import NavBarHome from '@/components/NavBarHome.vue'
import PostMsg from '@/components/PostMsg.vue'
import ShowAllPost from '../components/ShowAllPost.vue'

export default {
    name: 'HomeView',
    components: {
        NavBarHome,
        PostMsg,
        ShowAllPost
    }
}
</script>
