<template>
    <div class="content" v-for="post in Posts" :key="post.content">
        <div class="user__post">
            <div class="user--flex">
                <img class="profile__photo" src="../assets/Groupomania_Logos+(3)/icon.png" alt="photo de profile" />
                <h2 class="profile__name">{{ post.email }}</h2>
            </div>
            <div class="content__item">
                {{ post.content }}
                <!-- <img class="content__img" src="" alt="" /> -->
            </div>
            <div class="like__section">
                <p><i class="fa-solid fa-heart like__btn"></i>1K</p>
                <button v-on:click="deletePost(post._id)">supprimer</button>
            </div>
            <!-- <div class="comments ">
                    <img class="profile__photo" src="../assets/Groupomania_Logos+(3)/icon.png" alt="photo de profile" />
                    <p class="comments__comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio
                        quae mollitia praesentium
                        maiores pariatur fuga. Unde enim nobis facere ipsa natus explicabo repudiandae, modi expedita,
                        eius
                        nostrum, officiis praesentium!
                    </p>
                </div>
                <p class="comments__date">Il y a 5 jours</p>
                <div class="reply ">
                    <img class="profile__photo" src="../assets/Groupomania_Logos+(3)/icon.png" alt="photo de profile" />
                    <span class="reply__field" contenteditable="true" placeholder="Écrivez votre réponse..." />
                    <button class="reply__btn"><i class="fa-solid fa-reply"></i></button>
                </div> -->
        </div>
    </div>
</template>

<script>

import axios from 'axios';


export default {
    name: 'ShowContent',
    data() {
        return {
            // pour afficher les élément dans l'odre inverse 
            Posts: [].reverse,
        }
    },
    methods: {
        getPosts() {
            // console.log(this.$store.getters.getToken);
            axios.get('http://localhost:3000/api/post', {
                headers: { 'Authorization': `Bearer ${this.$store.getters.getToken}` }
            })
                .then(res => { this.Posts = res.data.reverse() })
                .catch(error => { console.log(error) })
        },
        deletePost(id) {
            axios.delete('http://localhost:3000/api/post/' + id, {
                headers: { 'Authorization': `Bearer ${this.$store.getters.getToken}` }
            })
                .then((res) => {
                    console.log(res)
                    this.getPosts
                })
                .catch(error => { console.log(error) })

        }
    },
    mounted() {
        this.getPosts()
    }
}
</script>
