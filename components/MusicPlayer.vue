<template>
    <div class="music-player" v-if="currentTrack">
        <audio ref="audio" :src="currentTrack.preview_url" @timeupdate="updateProgress" @ended="nextTrack"></audio>
        <div class="info">
            <h3>{{ currentTrack.name }}</h3>
            <p>{{ currentTrack.artists[0].name }}</p>
        </div>
        <div class="progress-bar" @click="seek($event)">
            <div class="progress" :style="{ width: progress + '%' }"></div>
        </div>
        <div class="controls">
            <button @click="prevTrack">Anterior</button>
            <button @click="togglePlay">{{ isPlaying ? 'Pausa' : 'Play' }}</button>
            <button @click="nextTrack">Siguiente</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

export default {
    props: {
        query: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            progress: 0
        };
    },
    computed: {
        ...mapState('spotify', ['isPlaying', 'currentTrackIndex']),
        ...mapGetters('spotify', ['currentTrack'])
    },
    methods: {
        ...mapMutations('spotify', ['setPlaying', 'nextTrack', 'prevTrack', 'setCurrentTrackIndex']),
        ...mapActions('spotify', ['authenticate', 'searchTracks']),
        togglePlay() {
            const audio = this.$refs.audio;
            if (this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            this.setPlaying(!this.isPlaying);
        },
        updateProgress() {
            const audio = this.$refs.audio;
            this.progress = (audio.currentTime / audio.duration) * 100;
        },
        seek(event) {
            const audio = this.$refs.audio;
            const progressBar = event.target;
            const seekTime = (event.offsetX / progressBar.clientWidth) * audio.duration;
            audio.currentTime = seekTime;
        }
    },
    watch: {
        currentTrack() {
            const audio = this.$refs.audio;
            if (this.isPlaying) {
                audio.play();
            }
        }
    },
    async created() {
        await this.authenticate();
        await this.searchTracks(this.query);
    }
};
</script>

<style scoped>
.music-player {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background: #6d0a0a;
    border: 1px solid #660ee2;
    padding: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
}

.info {
    margin-bottom: 10px;
}

.progress-bar {
    position: relative;
    width: 100%;
    height: 10px;
    background: #960b0b;
    cursor: pointer;
    margin-bottom: 10px;
}

.progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: #3b82f6;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>
