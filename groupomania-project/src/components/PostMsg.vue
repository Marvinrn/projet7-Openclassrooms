<template>
    <div class="content">
        <form class="user__post" @submit.prevent="submitPost">
            <div class="user--flex">
                <img class="profile__photo" src="../assets/Groupomania_Logos+(3)/icon.png" alt="photo de profile" />
                <!-- <h2 class="profile__name">Nom d'utilisateur</h2> -->
                <h2 class="profile__name">{{ $store.getters.getEmail }}</h2>
            </div>
            <div class="post">
                <!-- <span class="post__content" contenteditable="true" placeholder="Quoi de neuf ?">
                        </span> -->
                <textarea class="post__content" placeholder="Quoi de neuf ?" v-model="postData.content" type="text"
                    name="content" />
                <img class="post__img" :src="file" v-if="file" />
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
</template>

<script>
export default {
    name: 'postMsg',

    data: function () {
        return {
            file: ""
        };
    },
    methods: {
        includeImg(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.file = URL.createObjectURL(files[0]);
        },
    }
}
</script>
