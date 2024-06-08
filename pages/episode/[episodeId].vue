<template>
    <div>
        <MusicPlayer :query="episodeQuery" :episodeName="episodeName" :author="author" :coverImage="coverImage" />
    </div>
</template>

<script>
import MusicPlayer from '~/components/MusicPlayer.vue';

export default {
    components: {
        MusicPlayer
    },
    computed: {
        episodeQuery() {
            return `episode ${this.$route.params.episodeId}`;
        },
        episodeName() {
            return `Episode ${this.$route.params.episodeId}: ${this.episodes[this.$route.params.episodeId - 1]}`;
        },
        author() {
            return 'Gema Ruiz';
        },
        coverImage() {
            return `https://picsum.photos/300?random=${this.$route.params.episodeId}`;
        },
        episodes() {
            return [
                'Gasolina, coches de choque y la -Adele de feria-',
                'Historias Invisibles: Relatos de lo Cotidiano',
                'Exploradores del Conocimiento: Más Allá de la Curiosidad',
                'Café y Charlas: Conversaciones Inspiradoras',
                'Historias de Sofá: Relatos para Reflexionar',
                'Voces del Pasado: Testimonios y Recuerdos',
                'Caminos del Conocimiento: Senderos del Saber',
                'Diseños calcomanicos',
                'Mentes Creativas: Entrevistas con Artistas y Creadores',
                'Corea y el arte de la música',
            ];
        }
    }
};
</script>