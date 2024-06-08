<template>
    <div class="pastilla">
        <div>
            <h1 class="text-5xl">{{ title }}</h1>
            <h3 class="text-2xl">{{ subtitle }}</h3>
        </div>
        <div class="episode-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <section v-for="(episode, index) in episodes" :key="index" data-aos="fade-up">
                <nuxt-link :to="`/episode/${index + 1}`" class="episode-link">
                    <h3 class="text-2xl">{{ episode }}</h3>
                </nuxt-link>
                <div class="icones">
                    <Icon name="ic:baseline-favorite-border" color="#72B84E" size="2em" @click="addToLikes(episode)">
                    </Icon>
                    <Icon name="ic:sharp-download-for-offline" color="#72B84E" size="2em"></Icon>
                    <Icon name="ic:outline-share" color="#72B84E" size="2em"></Icon>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('After Hours');
const subtitle = ref('Gema Ruiz');
const episodes = ref([
    '1x1: Gasolina, coches de choque y la -Adele de feria-',
    '1x2: Historias Invisibles: Relatos de lo Cotidiano',
    '1x3: Exploradores del Conocimiento: Más Allá de la Curiosidad',
    '1x4: Innovación en Marcha: Charlas con Pioneros',
    '1x5: Voces del Futuro: Tendencias y Visiones',
    '1x6: Caminos del Alma: Reflexiones y Encuentros',
    '1x7: Rincones del Mundo: Viajes y Aventuras',
    '1x8: La Ciencia Detrás de Todo: Descubrimientos y Misterios',
    '1x9: Mentes Creativas: Entrevistas con Artistas y Creadores',
    '1x10: En la Cocina con: Secretos y Recetas',
]);

const addToLikes = (episode) => {
    let likedEpisodes = JSON.parse(localStorage.getItem('likedEpisodes')) || [];
    if (!likedEpisodes.includes(episode)) {
        likedEpisodes.push(episode);
        localStorage.setItem('likedEpisodes', JSON.stringify(likedEpisodes));
        alert(`${episode} añadido a tus episodios favoritos`);
    } else {
        alert(`${episode} ya está en tus episodios favoritos`);
    }
};
</script>

<style lang="postcss">
.pastilla {
    display: flex;
    flex-direction: column;
    gap: 80px;
}

.text-2xl {
    margin-top: 20px;
}

.icones {
    display: flex;
    margin-top: 20px;
    gap: 20px;
}
</style>