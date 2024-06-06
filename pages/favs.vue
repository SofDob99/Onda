<template>
    <div class="liked-episodes">
        <h1 class="text-5xl">Episodios que te gustan</h1>
        <div v-if="likedEpisodes.length">
            <ul class="mg">
                <li v-for="(episode, index) in likedEpisodes" :key="index">
                    {{ episode }}
                </li>
            </ul>
        </div>
        <div v-else>
            <p>No has guardado ningún episodio todavía.</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const likedEpisodes = ref([]);

onMounted(() => {
    const storedLikes = localStorage.getItem('likedEpisodes');
    if (storedLikes) {
        likedEpisodes.value = JSON.parse(storedLikes);
    }
});
</script>

<style lang="postcss">
.liked-episodes {
    padding: 20px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.mg {
    width: 100%;
    max-width: 996.808px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.mg li {
    margin: 10px 0;
    padding: 20px;
    background: #72B84E;
    border-radius: 43.5px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>