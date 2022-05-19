<template>
    <div class="content">
        <div class="user__post">
            <div class="user--flex">
                <img class="profile__photo" src="../assets/Groupomania_Logos+(3)/icon.png" alt="photo de profile" />
                <h2 class="profile__name">Nom d'utilisateur</h2>
            </div>
            <div class="textarea" contenteditable="true" placeholder="Quoi de neuf ?" />
            <div class="post__btns">
                <button class="addImg__btn">
                    <i class="fa-solid fa-images"></i> image
                </button>
                <button class="publish__btn">Publier</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'postMsg',
}
</script>
