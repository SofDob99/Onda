<template>
    <div>
        <h1>{{ $route.params.id }}</h1>
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
            return `episode ${this.$route.params.id}`; // Ajusta esto según tu lógica de búsqueda
        },
        episodeName() {
            return `Episode ${this.$route.params.id}: ${this.episodes[this.$route.params.id - 1]}`;
        },
        author() {
            return 'Gema Ruiz'; // Ajusta esto según tu lógica
        },
        coverImage() {
            return `https://picsum.photos/300?random=${this.$route.params.id}`; // Imagen aleatoria basada en el ID del episodio
        },
        episodes() {
            return [
                'Gasolina, coches de choque y la -Adele de feria-',
                'Segundo episodio',
                'Tercer episodio',
                'Cuarto episodio',
                'Quinto episodio',
                'Sexto episodio',
                'Séptimo episodio',
                'Octavo episodio',
                'Noveno episodio',
                'Décimo episodio',
            ];
        }
    }
};
</script>

<style scoped>

</style>