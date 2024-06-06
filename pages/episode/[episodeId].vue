<template>
    <div v-if="episodeData">
        <h3 class="text-2xl">{{ episodeData }}</h3>
        <div>
            <h1>Reproductor</h1>
            <MusicPlayer :query="episodeData" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MusicPlayer from '@/components/MusicPlayer.vue';

const route = useRoute();
const episodeData = ref(null);

const episodes = [
    '1x1: Gasolina, coches de choque y la -Adele de feria-',
    '1x2: Segundo episodio',
    '1x3: Tercer episodio',
    '1x4: Cuarto episodio',
    '1x5: Quinto episodio',
    '1x6: Sexto episodio',
    '1x7: Séptimo episodio',
    '1x8: Octavo episodio',
    '1x9: Noveno episodio',
    '1x10: Décimo episodio',
];

onMounted(() => {
    const { episodeId } = route.params;
    episodeData.value = episodes[episodeId - 1];
});
</script>

