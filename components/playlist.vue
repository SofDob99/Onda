<template>
    <div class="pastilla">
        <div>
            <h1 class="text-5xl">{{ title }}</h1>
            <h3 class="text-2xl">{{ subtitle }}</h3>
        </div>
        <div class="episode-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <section v-for="(episode, index) in episodes" :key="index" data-aos="fade-up">
                <nuxt-link :to="`/episode/${index + 1}`" class="episode-link">
                    <h3 class="text-2xl">{{ episode.title }}</h3>
                </nuxt-link>
                <div class="icones">
                    <Icon name="ic:baseline-favorite-border" color="#72B84E" size="2em" @click="addToLikes(episode)" />
                    <Icon name="ic:sharp-download-for-offline" color="#72B84E" size="2em" />
                    <Icon name="ic:outline-share" color="#72B84E" size="2em" />
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
    { title: '1x1: Gasolina, coches de choque y la -Adele de feria-', },
    { title: '1x2: Historias Invisibles: Relatos de lo Cotidiano' },
    { title: '1x3: Exploradores del Conocimiento: Más Allá de la Curiosidad' },
    { title: '1x4: Café y Charlas: Conversaciones Inspiradoras' },
    { title: '1x5: Historias de Sofá: Relatos para Reflexionar' },
    { title: '1x6: Voces del Pasado: Testimonios y Recuerdos' },
    { title: '1x7: Caminos del Conocimiento: Senderos del Saber' },
    { title: '1x8: Diseños calcomanicos' },
    { title: '1x9: Mentes Creativas: Entrevistas con Artistas y Creadores' },
    { title: '1x10: Corea y el arte de la música' },
    
]);

const addToLikes = (episode) => {
    let likedEpisodes = JSON.parse(localStorage.getItem('likedEpisodes')) || [];
    if (!likedEpisodes.some(e => e.title === episode.title)) {
        likedEpisodes.push(episode);
        localStorage.setItem('likedEpisodes', JSON.stringify(likedEpisodes));
        alert(`${episode.title} añadido a tus episodios favoritos`);
    } else {
        alert(`${episode.title} ya está en tus episodios favoritos`);
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