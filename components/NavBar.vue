<template>
    <nav class="nav-1">
        <div><img class="logo" src="/logo.png" alt="img de cabecera"></div>
        <div class="btns" v-if="!isMobileMenuVisible">
            <NuxtLink to="/">
                <button class="circle_button">
                    <Icon name="ic:baseline-home" color="white" size="2em"></Icon>
                </button>
            </NuxtLink>
            <NuxtLink to="/favs">
                <button class="circle_button">
                    <Icon name="ic:baseline-favorite" color="white" size="2em"></Icon>
                </button>
            </NuxtLink>
            <NuxtLink to="/buscador">
                <button class="circle_button">
                    <Icon name="ic:sharp-search" color="white" size="2em"></Icon>
                </button>
            </NuxtLink>
            <NuxtLink to="/seguidores">
                <button class="oval-button">Siguiendo</button>
            </NuxtLink>
            <div class="perfil-container">
                <NuxtLink to="/login">
                    <img class="img-perfil" src="/perfil.jpeg" alt="Imagen de perfil">
                </NuxtLink>
                <span v-if="username" class="username">{{ username }}</span>
            </div>
        </div>
        <button class="hamburger-button" @click="toggleMobileMenu" v-if="isMobile">
            <Icon name="ic:baseline-menu" color="black" size="2em"></Icon>
        </button>
    </nav>
    <div v-if="isMobileMenuVisible" class="mobile-menu">
        <NuxtLink to="/" @click="toggleMobileMenu">Home</NuxtLink>
        <NuxtLink to="/favs" @click="toggleMobileMenu">Favoritos</NuxtLink>
        <NuxtLink to="/buscador" @click="toggleMobileMenu">Buscador</NuxtLink>
        <NuxtLink to="/seguidores" @click="toggleMobileMenu">Seguidores</NuxtLink>
        <NuxtLink to="/login" @click="toggleMobileMenu">Perfil</NuxtLink>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(false)
const isMobileMenuVisible = ref(false)
const username = ref('')

const checkIfMobile = () => {
    isMobile.value = window.innerWidth <= 768
}

const toggleMobileMenu = () => {
    isMobileMenuVisible.value = !isMobileMenuVisible.value
}

const checkUsername = () => {
    const storedUsername = localStorage.getItem('username')
    if (storedUsername) {
        username.value = storedUsername
    }
}

onMounted(() => {
    checkIfMobile()
    checkUsername()
    window.addEventListener('resize', checkIfMobile)
})

onUnmounted(() => {
    window.removeEventListener('resize', checkIfMobile)
})
</script>

<style scoped>
nav {
    background-color: #ffffff;
}

.nav-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

.logo {
    width: 130px;
}

.btns {
    display: flex;
    align-items: center;
}

.oval-button,
.circle_button {
    margin: 10px;
}

.circle_button {
    background-color: #72b84e;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
}

.oval-button {
    width: 205px;
    height: 40px;
    border-radius: 43.5px;
    background: #72b84e;
    color: #fff;
    font-family: Nunito;
    font-size: 15px;
    font-weight: 800;
}

.img-perfil {
    margin: 10px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 3px solid #72b84e;
}

.perfil-container {
    display: flex;
    align-items: center;
}

.username {
    color: #72b84e;
    font-size: 0.875rem;
    /* text-sm */
    margin-left: 8px;
}

.hamburger-button {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
}

.mobile-menu {
    z-index: 100;
    display: none;
    flex-direction: column;
    background-color: #ffffff;
    position: absolute;
    top: 60px;
    right: 20px;
    width: 200px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 8px #72b84e(0, 0, 0, 0.1);
}

.mobile-menu a {
    padding: 10px;
    text-decoration: none;
    color: #72b84e;
    font-family: Nunito;
}

@media (max-width: 768px) {
    .btns {
        display: none;
    }

    .hamburger-button {
        display: block;
    }

    .mobile-menu {
        display: flex;
    }
}
</style>