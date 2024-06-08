<template>
    <div class="follow">
        <h1 class="text-5xl">Podcasts que sigues</h1>
        <div v-if="following.length">
            <ul class="mg">
                <li v-for="(seguir, index) in following" :key="index" class="follow-item">
                    <img src="/after.png" alt="podcast image" class="follow-image" />
                    <h1 text-3xl>{{ seguir }}</h1>
                </li>
            </ul>
        </div>
        <div v-else>
            <p>No has guardado ningún podcast todavía.</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const following = ref([]);

onMounted(() => {
    const storedLikes = localStorage.getItem('following');
    if (storedLikes) {
        following.value = JSON.parse(storedLikes);
    }
});
</script>

<style lang="postcss">
.follow {
    padding: 20px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.mg {
    width: 100%;
    max-width: 996.808px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.follow-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    padding: 20px;
    background: #72B84E;
    border-radius: 43.5px;
    color: white;
}

.follow-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}
</style>