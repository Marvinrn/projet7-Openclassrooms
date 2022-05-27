<template>
  <div class="form">
    <NavBar />
    <section class="form__section">
      <h1 class="form__title">Se connecter</h1>
      <form class="form__form" @submit.prevent="submitForm">
        <div class="input-wrapper">
          <input type="email" v-model="email" name="email" required />
          <span class="underline"></span>
          <label>Adresse Mail</label>
        </div>
        <div class="input-wrapper">
          <input type="password" v-model="password" name="password" required />
          <span class="underline"></span>
          <label>Mot de passe</label>
        </div>
        <div class="btn-wrapper">
          <button class="submitBtn" type="submit">Se connecter</button>
        </div>
      </form>
      <p class="form__phrase">Vous êtes pas encore inscrit?
        <router-link class="form__link" to="/">Créer un compte</router-link>
      </p>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import axios from 'axios'

export default {
  name: 'LoginView',
  components: {
    NavBar
  },
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    submitForm() {
      axios.post('http://localhost:3000/auth/login', {
        email: this.email,
        password: this.password
      })
        .then((response) => {
          localStorage.setItem("token", response.data.token)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          console.log(response.data);
          this.$router.push('/home');
        }).catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
