<template>
    <div class="liked-episodes">
        <h1 class="text-5xl">Episodios que te gustan</h1>
        <div v-if="likedEpisodes.length">
            <ul class="mg">
                <li v-for="(episode, index) in likedEpisodes" :key="index">
                    <div class="episode-info">
                        <div>
                            <h3>{{ episode.title }}</h3>
                        </div>
                    </div>
                    <div class="icones">
                        <Icon name="ic:outline-delete" color="#72B84E" size="2em" @click="removeFromLikes(episode)" />
                    </div>
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

const removeFromLikes = (episode) => {
    likedEpisodes.value = likedEpisodes.value.filter(e => e.title !== episode.title);
    localStorage.setItem('likedEpisodes', JSON.stringify(likedEpisodes.value));
    alert(`${episode.title} ha sido eliminado de tus episodios favoritos`);
};
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
    background: #fefffd;
    box-shadow: 17px 17px 50px -33px #72B84E;
    border-radius: 43.5px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.episode-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>