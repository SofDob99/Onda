// store/index.js

export const state = () => ({
    isPlaying: false,
    currentTrackIndex: 0,
    tracks: [
        'path/to/track1.mp3',
        'path/to/track2.mp3',
        // Añade más pistas aquí
    ]
});

export const mutations = {
    togglePlay(state) {
        state.isPlaying = !state.isPlaying;
    },
    nextTrack(state) {
        state.currentTrackIndex = (state.currentTrackIndex + 1) % state.tracks.length;
        state.isPlaying = true;
    },
    prevTrack(state) {
        state.currentTrackIndex = (state.currentTrackIndex - 1 + state.tracks.length) % state.tracks.length;
        state.isPlaying = true;
    },
    setPlaying(state, playing) {
        state.isPlaying = playing;
    }
};

export const getters = {
    currentTrack: (state) => {
        return state.tracks[state.currentTrackIndex];
    }
};
