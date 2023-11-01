<template>
    <div class="content">
        <div class="user__post">
            <div class="user--flex">
                <img class="profile__photo" src="../assets/Groupomania_Logos+(3)/icon.png" alt="photo de profile" />
                <h2 class="profile__name">{{ post.email }}</h2>
            </div>
            <div class="content__item">
                {{ post.content }}
                <img v-if="post.imageUrl" class="content__img" :src="post.imageUrl" alt="image" />
            </div>
            <div class="like__section">
                <p><i class="fa-solid fa-heart like__btn"></i>{{ post.likes }}</p>
                <!-- if is admin or userId === post.userId then show button else hide button-->
                <button v-if="$store.getters.getEmail === post.email || $store.getters.isAdmin" class="btnIsVisible"
                    v-on:click="deletePost(post._id)">supprimer</button>
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

export default {
    name: 'ShowContent',
    props: ["post"],
    methods: {
        deletePost(id) {
            this.$emit("deletePost", id)
        }
    }
}
</script>
