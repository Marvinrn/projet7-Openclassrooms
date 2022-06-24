<template>
    <div class="home" v-if="$store.getters.isLoggedIn">
        <NavBarHome />
        <div class="content">
            <form class="user__post" @submit.prevent="submitPost">
                <div class="user--flex">
                    <img class="profile__photo" src="../assets/Groupomania_Logos+(3)/icon.png" alt="photo de profile" />
                    <!-- <h2 class="profile__name">Nom d'utilisateur</h2> -->
                    <h2 class="profile__name">{{ $store.getters.getEmail }}</h2>
                </div>
                <div class="post">
                    <span class="post__content" contenteditable="true" placeholder="Quoi de neuf ?">
                        <img :src="file" v-if="file" />
                    </span>
                    <input placeholder="Quoi de neuf ?" v-model="postData.content" type="text" name="content" />
                </div>
                <div class="post__btns">
                    <input type="file" name="file" id="file" class="hiddenInput" @change="includeImg" />
                    <label for="file" class="addImg__btn">
                        <i class="fa-solid fa-images"></i> image
                    </label>
                    <button class="publish__btn" type="submit">Publier</button>
                </div>
            </form>
        </div>
        <ShowAllPost />
    </div>
</template>

<script>
// @ is an alias to /src
import NavBarHome from '@/components/NavBarHome.vue'
import ShowAllPost from '../components/ShowAllPost.vue'

import axios from 'axios';


export default {
    name: 'HomeView',
    components: {
        NavBarHome,
        ShowAllPost
    },
    data: function () {
        return {
            file: "",
            postData: {
                content: ""
            }
        };
    },
    methods: {
        includeImg(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.file = URL.createObjectURL(files[0]);
        },
        submitPost() {
            axios.post('http://localhost:3000/api/post', this.postData, {
                headers: { 'Authorization': `Bearer ${this.$store.getters.getToken}` }
            })
                .then(res => { this.postData = res.data })
                .catch(error => { console.log(error) })
        }
    }
}
</script>
