<template>
  <div class="form">
    <NavBar />
    <section class="form__section">
      <h1 class="form__title">Se connecter</h1>
      <form class="form__form">
        <div class="input-wrapper">
          <input type="email" name="email" required />
          <span class="underline"></span>
          <label>Adresse Mail</label>
        </div>
        <div class="input-wrapper">
          <input type="password" name="password" required />
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

export default {
  name: 'LoginView',
  components: {
    NavBar
  }
}
</script>
