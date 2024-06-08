<template>
    <div class="container">
        <div class="box">
            <div class="card-content1">
                <h1 class="text-4xl">{{ username }}</h1>
            </div>
            <div class="card-content2">
                <Icon name="ic:sharp-download-for-offline" color="#72B84E" size="2em"></Icon>
                <Icon name="ic:outline-share" color="#72B84E" size="2em"></Icon>
            </div>
        </div>
        
        <div class="notificaciones">
            <h2 class="text-2xl">Configuración de notificaciones</h2>
            <div class="notification-item">
                <h3 class="text-lg">Noticias de productos</h3>
                <div class="check">
                    <UCheckbox v-model="selectedProductNews" name="notifications-product-news" />
                    <p class="text-sm">Instrucciones, funciones nuevas y las últimas novedades de los productos de Spotify</p>
                </div>
            </div>
            <div class="notification-item">
                <h3 class="text-lg">Noticias y ofertas de OndaCero</h3>
                <div class="check">
                    <UCheckbox v-model="selectedOndaCeroNews" name="notifications-onda-cero-news" />
                    <p class="text-sm">Noticias, promociones y eventos para ti</p>
                </div>
            </div>
            <div class="notification-item">
                <h3 class="text-lg">Podcasts y programas recomendados</h3>
                <div class="check">
                    <UCheckbox v-model="selectedRecommendedPodcasts" name="notifications-recommended-podcasts" />
                    <p class="text-sm">Podcasts y programas elegidos en base a tus favoritos y seguidos</p>
                </div>
            </div>
            <div class="notification-item">
                <h3 class="text-lg">Actualizaciones de podcasts y programas</h3>
                <div class="check">
                    <UCheckbox v-model="selectedPodcastUpdates" name="notifications-podcast-updates" />
                    <p class="text-sm">Noticias de podcasts que escuchas y otros que pensamos que te van a gustar</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const username = ref('')

onMounted(() => {
    username.value = localStorage.getItem('username') || 'Gema Ruiz'
})

const selectedProductNews = ref(false)
const selectedOndaCeroNews = ref(false)
const selectedRecommendedPodcasts = ref(false)
const selectedPodcastUpdates = ref(false)
</script>

<style lang="postcss">
.container {
    margin-left: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 60px;
}

.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
    height: auto;
    flex-shrink: 0;
    border-radius: 170px;
    background: #FFF;
    box-shadow: -10px 17px 50px -33px #72B84E;
    padding: 20px;
}

.card-content1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.card-content2 {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
}

.notificaciones {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.notification-item {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.check {
    display: flex;
    align-items: center;
    gap: 10px;
}

.text-lg {
    margin-bottom: 5px;
}

.text-2xl {
    margin-bottom: 30px;
}

@media screen and (max-width: 750px) {
    .container {
        margin: 5px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .notificaciones {
        width: 48%;
    }
}
@media screen and (max-width: 425px) {
    .container {
        margin: 2px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .notificaciones {
        width: 75%;
    }
}
</style>
