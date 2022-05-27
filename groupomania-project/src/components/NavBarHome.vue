<template>
    <div class="navbar">
        <img class="navbar__logo" src="../assets/Groupomania_Logos+(3)/icon-left-font-monochrome-white.svg"
            alt="Logo groupomania" />
        <nav class="navbar__nav">
            <img class="profilePic" src="../assets/Groupomania_Logos+(3)/icon.png" alt="Photo de profile" />
            <button @click="logout">test</button>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBarHome',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push('/login')
        }
    }
}
</script>
