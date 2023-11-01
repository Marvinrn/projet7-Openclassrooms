<template>
  <div class="home" v-if="$store.getters.isLoggedIn">
    <NavBarHome />
    <div class="content">
      <form class="user__post" @submit.prevent="submitPost">
        <div class="user--flex">
          <img
            class="profile__photo"
            src="../assets/Groupomania_Logos+(3)/icon.png"
            alt="photo de profile"
          />
          <!-- <h2 class="profile__name">Nom d'utilisateur</h2> -->
          <h2 class="profile__name">{{ $store.getters.getEmail }}</h2>
        </div>
        <div class="post">
          <!-- <span class="post__content" contenteditable="true" placeholder="Quoi de neuf ?">
                        </span> -->
          <textarea
            class="post__content"
            placeholder="Quoi de neuf ?"
            v-model="postData.content"
            type="text"
            name="content"
          />
          <img class="post__img" :src="postData.file" v-if="postData.file" />
        </div>
        <div class="post__btns">
          <input
            type="file"
            name="file"
            id="file"
            class="hiddenInput"
            @change="includeImg"
          />
          <label for="file" class="addImg__btn">
            <i class="fa-solid fa-images"></i> image
          </label>
          <button class="publish__btn" type="submit">Publier</button>
        </div>
      </form>
    </div>
    <ShowAllPost
      v-for="post in Posts"
      :post="post"
      @deletePost="deletePost"
      :key="post._id"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBarHome from "@/components/NavBarHome.vue";
import ShowAllPost from "../components/ShowAllPost.vue";

import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavBarHome,
    ShowAllPost,
  },
  data: function () {
    return {
      postData: {
        content: "",
        file: "",
      },
      Posts: [],
    };
  },
  methods: {
    includeImg(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.postData.file = URL.createObjectURL(files[0]);
    },
    getPosts() {
      // console.log(this.$store.getters.getToken);
      axios
        .get("http://localhost:3000/api/post", {
          headers: { Authorization: `Bearer ${this.$store.getters.getToken}` },
        })
        .then((res) => {
          this.Posts = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submitPost() {
      if (this.postData.content.trim() === "") return;
      let formData = new FormData();
      formData.append("content", this.postData.content);
      if (this.postData.file !== "") {
        formData.append("images", this.postData.file);
      }
      axios
        .post("http://localhost:3000/api/post", formData, {
          headers: { Authorization: `Bearer ${this.$store.getters.getToken}` },
        })
        .then((res) => {
          this.Posts.push(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deletePost(id) {
      axios
        .delete("http://localhost:3000/api/post/" + id, {
          headers: { Authorization: `Bearer ${this.$store.getters.getToken}` },
        })
        .then((res) => {
          console.log(res);
          this.getPosts();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<!-- blabla test pour voir un truc lié aux commit  -->
