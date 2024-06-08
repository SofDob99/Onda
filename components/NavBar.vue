<template>
    <nav class="nav-1">
        <div><img class="logo" src="/logo.png" alt="img de cabecera"></div>
        <div class="btns" v-if="!isMobileMenuVisible">
            <nuxt-link to="/"><button class="circle_button">
                    <Icon name="ic:baseline-home" color="white" size="2em"></Icon>
                </button></nuxt-link>
            <nuxt-link to="/favs"> <button class="circle_button">
                    <Icon name="ic:baseline-favorite" color="white" size="2em"></Icon>
                </button></nuxt-link>
            <nuxt-link to="/buscador">
                <button class="circle_button">
                    <Icon name="ic:sharp-search" color="white" size="2em"></Icon>
                </button>
            </nuxt-link>
            <nuxt-link to="/seguidores">
                <button class="oval-button">Siguiendo</button>
            </nuxt-link>
            <nuxt-link to="/usuarios">
                <img class="img-perfil" src="/perfil.jpeg" alt="">
            </nuxt-link>
        </div>
        <button class="hamburger-button" @click="toggleMobileMenu" v-if="isMobile">
            <Icon name="ic:baseline-menu" color="black" size="2em"></Icon>
        </button>
    </nav>
    <div v-if="isMobileMenuVisible" class="mobile-menu">
        <nuxt-link to="/home" @click="toggleMobileMenu">Home</nuxt-link>
        <nuxt-link to="/favs" @click="toggleMobileMenu">Favoritos</nuxt-link>
        <nuxt-link to="/buscador" @click="toggleMobileMenu">Buscador</nuxt-link>
        <nuxt-link to="/seguidores" @click="toggleMobileMenu">Seguidores</nuxt-link>
        <nuxt-link to="/perfil" @click="toggleMobileMenu">Perfil</nuxt-link>
    </div>
</template>


<style lang="postcss">
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

.oval-button, .circle_button {
    margin: 10px;
}

.circle_button {
    background-color: #72B84E;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
}

.oval-button {
    width: 205px;
    height: 40px;
    border-radius: 43.5px;
    background: #72B84E;
    color: #FFF;
    font-family: Nunito;
    font-size: 15px;
    font-weight: 800;
}

.img-perfil {
    margin: 10px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 3px solid #72B84E;
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
    box-shadow: 0 2px 8px #72B84E(0, 0, 0, 0.1);
}

.mobile-menu a {
    padding: 10px;
    text-decoration: none;
    color: #72B84E;
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


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMobile = ref(false);
const isMobileMenuVisible = ref(false);

const checkIfMobile = () => {
    isMobile.value = window.innerWidth <= 768;
};

const toggleMobileMenu = () => {
    isMobileMenuVisible.value = !isMobileMenuVisible.value;
};

onMounted(() => {
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkIfMobile);
});
</script>
