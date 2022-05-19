<template>
    <div class="content">
        <div class="user__post">
            <div class="user--flex">
                <img class="profile__photo" src="../assets/Groupomania_Logos+(3)/icon.png" alt="photo de profile" />
                <h2 class="profile__name">Nom d'utilisateur</h2>
            </div>
            <div class="content__item">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam temporibus amet deserunt illum
                corrupti reiciendis ad quae voluptates culpa eaque nulla quia, nostrum facere saepe veniam eveniet
                officiis molestias minus nobis, atque tempora alias cupiditate. Alias quos, cupiditate sapiente quod
                eius libero at harum debitis amet nemo. Quod earum voluptatem nemo doloremque distinctio ratione cum
                iusto modi atque architecto animi mollitia, molestias placeat rem numquam, repudiandae officiis culpa
                rerum! Magni, libero. Eius, vero quis illum ea voluptatum vitae, dolor esse facilis maiores fugit eum
                excepturi exercitationem quaerat asperiores, ipsa reiciendis! Deleniti, incidunt ratione officiis quod
                accusamus aliquid dignissimos tenetur provident.
                <div class="like__section">
                    <p><i class="fa-solid fa-heart like__btn"></i>1K</p>
                    <p class="post__date">Il y a 8 jours</p>
                </div>
            </div>
            <div class="comments ">
                <img class="profile__photo" src="../assets/Groupomania_Logos+(3)/icon.png" alt="photo de profile" />
                <p class="comments__comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio
                    quae mollitia praesentium
                    maiores pariatur fuga. Unde enim nobis facere ipsa natus explicabo repudiandae, modi expedita, eius
                    nostrum, officiis praesentium!
                </p>
            </div>
            <p class="comments__date">Il y a 5 jours</p>
            <div class="reply ">
                <img class="profile__photo" src="../assets/Groupomania_Logos+(3)/icon.png" alt="photo de profile" />
                <span class="reply__field" contenteditable="true" placeholder="Écrivez votre réponse..." />
                <button class="reply__btn"><i class="fa-solid fa-reply"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShowContent',
}
</script>
