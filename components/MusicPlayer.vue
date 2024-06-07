<template>
    <div class="music-player" v-if="currentTrack">
        <audio ref="audio" :src="currentTrack?.preview_url || ''" @timeupdate="updateProgress"
            @ended="nextTrack"></audio>
        <div class="info">
            <img :src="coverImage" alt="Cover Image" class="cover-image" />
            <h1>{{ episodeName }}</h1>
            <h2>{{ author }}</h2>
            <h3>{{ currentTrack?.name || '' }}</h3>
            <p>{{ currentTrack?.artists[0]?.name || '' }}</p>
        </div>
        <div class="rep">
            <div class="progress-bar" @click="seek($event)">
            <div class="progress" :style="{ width: progress + '%' }"></div>
        </div>
        <div class="controls">
            <button @click="prevTrack"><Icon name="ic:baseline-arrow-left" color="white" size="2em"></Icon></button>
            <button @click="togglePlay">{{ isPlaying ? 'Pausa' : 'Play' }}</button>
            <button @click="nextTrack"><Icon name="ic:baseline-arrow-right" color="white" size="2em"></Icon></button>
        </div>

        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

export default {
    props: {
        query: {
            type: String,
            required: true
        },
        episodeName: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        coverImage: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const accessToken = ref(null);
        const tracks = ref([]);
        const currentTrackIndex = ref(0);
        const isPlaying = ref(false);
        const progress = ref(0);

        const authenticate = async () => {
            try {
                const clientId = '6e6ed057194d40a59c1889d973046171';
                const clientSecret = 'acf8d23f1c494ef5bfd07fa51f4a4c45';
                const response = await axios.post('https://accounts.spotify.com/api/token',
                    new URLSearchParams({
                        grant_type: 'client_credentials'
                    }), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
                    }
                });
                accessToken.value = response.data.access_token;
            } catch (error) {
                console.error('Error authenticating with Spotify:', error);
            }
        };

        const searchTracks = async (query) => {
            try {
                const response = await axios.get(`https://api.spotify.com/v1/search`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken.value}`
                    },
                    params: {
                        q: query,
                        type: 'track'
                    }
                });
                tracks.value = response.data.tracks.items;
            } catch (error) {
                console.error('Error searching tracks:', error);
            }
        };

        const currentTrack = ref(null);
        watch([tracks, currentTrackIndex], () => {
            currentTrack.value = tracks.value[currentTrackIndex.value] || null;
        });

        const togglePlay = () => {
            const audio = document.querySelector('audio');
            if (isPlaying.value) {
                audio.pause();
            } else {
                audio.play();
            }
            isPlaying.value = !isPlaying.value;
        };

        const updateProgress = () => {
            const audio = document.querySelector('audio');
            if (audio) {
                progress.value = (audio.currentTime / audio.duration) * 100;
            }
        };

        const seek = (event) => {
            const audio = document.querySelector('audio');
            if (audio) {
                const progressBar = event.target;
                const seekTime = (event.offsetX / progressBar.clientWidth) * audio.duration;
                audio.currentTime = seekTime;
            }
        };

        const nextTrack = () => {
            if (tracks.value.length > 0) {
                currentTrackIndex.value = (currentTrackIndex.value + 1) % tracks.value.length;
                isPlaying.value = true;
            }
        };

        const prevTrack = () => {
            if (tracks.value.length > 0) {
                currentTrackIndex.value = (currentTrackIndex.value - 1 + tracks.value.length) % tracks.value.length;
                isPlaying.value = true;
            }
        };

        onMounted(async () => {
            await authenticate();
            await searchTracks(props.query);
        });

        return {
            currentTrack,
            isPlaying,
            progress,
            togglePlay,
            updateProgress,
            seek,
            nextTrack,
            prevTrack
        };
    }
};
</script>


<style scoped>

.music-player{
    margin: 30px;
    display: flex;
    flex-direction: column;
    gap:20px;
}

.rep{
    display: flex;
    flex-direction: column;
    align-content: stretch;
    align-items: center;
    border-radius: 84.53px 84.53px 84px 84.53px;
    background: #71b84e88;
    box-shadow: 0px 4px 35px 14px rgba(113, 184, 78, 0.50);
}

.info {
    margin-bottom: 10px;
}

.progress-bar {
    position: relative;
    margin-top: 30px;
    width: 50%;
    height: 10px;
    background: #ffffff;
    cursor: pointer;
    border-radius: 84.53px 84.53px 84px 84.53px;
    margin-bottom: 10px;
}

.progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: #71b84e;
    border-radius: 84.53px 84.53px 84px 84.53px;
}

.controls {
    display: flex;
    justify-content: space-between;
    gap:90px;  
    margin-bottom: 30px; 
}
</style>