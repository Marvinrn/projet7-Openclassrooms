<template>
  <div class="navbar">
    <img class="navbar__logo" src="../assets/Groupomania_Logos+(3)/icon-left-font-monochrome-white.svg"
      alt="Logo groupomania" />
    <nav class="navbar__nav">
      <router-link class="navbar__link" to="/">S'inscrire</router-link>
      <router-link class="navbar__link" to="/login">S'identifier</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
