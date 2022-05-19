<template>
    <div class="home">
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
