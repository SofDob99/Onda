import axios from 'axios';

export const state = () => ({
    accessToken: null,
    tracks: [],
    currentTrackIndex: 0,
    isPlaying: false
});

export const mutations = {
    setAccessToken(state, token) {
        state.accessToken = token;
    },
    setTracks(state, tracks) {
        state.tracks = tracks;
    },
    setCurrentTrackIndex(state, index) {
        state.currentTrackIndex = index;
    },
    setPlaying(state, playing) {
        state.isPlaying = playing;
    },
    nextTrack(state) {
        state.currentTrackIndex = (state.currentTrackIndex + 1) % state.tracks.length;
        state.isPlaying = true;
    },
    prevTrack(state) {
        state.currentTrackIndex = (state.currentTrackIndex - 1 + state.tracks.length) % state.tracks.length;
        state.isPlaying = true;
    }
};

export const actions = {
    async authenticate({ commit }) {
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
            }
            );
            commit('setAccessToken', response.data.access_token);
        } catch (error) {
            console.error('Error authenticating with Spotify:', error);
        }
    },
    async searchTracks({ commit, state }, query) {
        try {
            const response = await axios.get(`https://api.spotify.com/v1/search`, {
                headers: {
                    'Authorization': `Bearer ${state.accessToken}`
                },
                params: {
                    q: query,
                    type: 'track'
                }
            });
            commit('setTracks', response.data.tracks.items);
        } catch (error) {
            console.error('Error searching tracks:', error);
        }
    }
};

export const getters = {
    currentTrack: (state) => {
        return state.tracks[state.currentTrackIndex];
    }
};
