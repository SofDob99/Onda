<template>
    <div class="music-player">
        <audio ref="audio" :src="currentTrack" @ended="nextTrack"></audio>
        <div class="controls">
            <button @click="prevTrack">Anterior</button>
            <button @click="togglePlay">{{ isPlaying ? 'Pausa' : 'Play' }}</button>
            <button @click="nextTrack">Siguiente</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isPlaying: false,
            currentTrackIndex: 0,
            tracks: [
                'path/to/track1.mp3',
                'path/to/track2.mp3',
                // Añade más pistas aquí
            ]
        }
    },
    computed: {
        currentTrack() {
            return this.tracks[this.currentTrackIndex];
        }
    },
    methods: {
        togglePlay() {
            const audio = this.$refs.audio;
            if (this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            this.isPlaying = !this.isPlaying;
        },
        nextTrack() {
            this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
            this.isPlaying = false;
            this.togglePlay();
        },
        prevTrack() {
            this.currentTrackIndex = (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length;
            this.isPlaying = false;
            this.togglePlay();
        }
    }
}
</script>

<style scoped>
.music-player {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background: #000000;
    border: 1px solid #ccc;
    padding: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.controls {
    display: flex;
    gap: 10px;
}
</style>