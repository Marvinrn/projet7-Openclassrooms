<template>
  <div class="form">
    <NavBar />
    <section class="form__section">
      <h1 class="form__title">Créer un compte</h1>
      <form @submit.prevent="submitForm" class="form__form">
        <div class="input-wrapper">
          <input v-model="prenom" type="text" name="firstName" required />
          <span class="underline"></span>
          <label>Prénom</label>
        </div>
        <div class="input-wrapper">
          <input v-model="nom" type="text" name="lastName" required />
          <span class="underline"></span>
          <label>Nom</label>
        </div>
        <div class="input-wrapper">
          <input v-model="email" type="email" name="email" required />
          <span class="underline"></span>
          <label>Adresse Mail</label>
        </div>
        <div class="input-wrapper">
          <input v-model="password" type="password" name="password" required />
          <span class="underline"></span>
          <label>Mot de passe</label>
        </div>
        <div class="input-wrapper">
          <input v-model="confirmPassword" type="password" name="confirmPassword" required />
          <span class="underline"></span>
          <label>Confirmer le mot de passe</label>
        </div>
        <div class="btn-wrapper">
          <button class="submitBtn" type="submit">Confirmer</button>
        </div>
      </form>
      <p class="form__phrase">Vous avez deja un compte?<router-link class="form__link" to="/login">identifiez vous!
        </router-link>
      </p>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'RegistrationView',
  components: {
    NavBar
  },

  data() {
    return {
      prenom: '',
      nom: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    // submitForm() {
    //   this.$axios.post('/api/users/', {
    //     prenom: this.prenom,
    //     nom: this.nom,
    //     email: this.email,
    //     password: this.password
    //   }).then(res => {
    //     console.log(res)
    //   }).catch(error => {
    //     console.log(error)
    //   })
    // }
  }
}

</script>
