<template>
    <div class="music-player" v-if="currentTrack">
        <audio ref="audio" :src="currentTrack?.preview_url || ''" @timeupdate="updateProgress"
            @ended="nextTrack"></audio>
        <div class="info" data-aos="flip-left">
            <img :src="coverImage" alt="Cover Image" class="cover-image" />
            <h1 class="text-4xl">{{ episodeName }}</h1>
            <h2 data-aos="flip-left">{{ author }}</h2>
            <!--<h3 data-aos="flip-left">{{ currentTrack?.name || '' }}</h3>-->
            <p data-aos="flip-left">{{ currentTrack?.artists[0]?.name || '' }}</p>
        </div>
        <div class="rep">
            <div class="progress-bar" @click="seek($event)">
                <div class="progress" :style="{ width: progress + '%' }"></div>
            </div>
            <div class="controls">
                <button @click="prevTrack">Anterior</button>
                <button @click="togglePlay">{{ isPlaying ? 'Pausa' : 'Play' }}</button>
                <button @click="nextTrack">Siguiente</button>
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
.music-player {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 30px;
}

.rep {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
    background: #71b84e88;
    border-radius: 84.53px 84.53px 84px;
    box-shadow: 0 4px 35px 14px #71b84e80;
}

.info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
}

.cover-image {
    width: 200px;
    height: auto;
    border-radius: 20px;
}

.progress-bar {
    position: relative;
    width: 50%;
    height: 10px;
    margin-top: 30px;
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
    gap: 20px;
    margin-bottom: 30px;
}

@media (min-width: 2560px) {
    .rep {
        max-width: 1500px;
        
    }
}


@media (min-width: 1024px) {
    .rep {
        max-width: 1000px;
    }

    .cover-image {
        width: 180px;
        height: 180px;
    }

    .progress-bar {
        width: 60%;
    }
}


@media (min-width: 768px) {
    .rep {
        margin: 30px;
        max-width: 500px;
    }

    .cover-image {
        width: 160px;
        height: 160px;
    }

    .progress-bar {
        width: 50%;
    }
}


@media (max-width: 767px) {
    .rep {
        width: 90%;
        background: #71b84e88;
        border-radius: 84.53px;
        box-shadow: 0 4px 35px 14px #71b84e80;
        padding: 20px;
    }

    .cover-image {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        
    }

    .progress-bar {
        width: 90%;
        margin-top: 10px;
        margin-bottom: 20px;
        border-radius: 50px;
    }

    .progress {
        border-radius: 50px;
    }

    .controls {
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
    }

}
</style>