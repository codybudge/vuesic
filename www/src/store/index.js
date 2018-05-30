import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'


vue.use(vuex)

let api = axios.create({
  baseURL: 'https://itunes.apple.com/search?media=music&&term=',
  timeout: 3000
})

let myServer = axios.create({
  baseURL: 'localhost:3000/api/PlayList',
  timeout: 3000
})


export default new vuex.Store({
  state: {
    songs: [],
    playList: [],
    activeSong: {}
  },
  mutations: {
    setSong(state, song) {
      state.songs = song
    },
    addSong(state, song) {
      state.playList.push(song)
    },
    removeSong(state, idnexToRemove) {
      state.playList.splice(idnexToRemove, 1)
    },
    setActiveSong(state, song) {
      state.activeSong = song
    }
  },
  actions: {
    findSongs({ dispatch, commit }, query) {
      api.get(query)
        .then(res => {
          let songList = res.data.results.map(song => {
            return {
              title: song.trackName,
              albumArt: song.artworkUrl100,
              artist: song.artistName,
              album: song.collectionName,
              price: song.collectionPrice,
              preview: song.previewUrl
            };
          })
          commit('setSong', songList)
        }).catch(err => dispatch('showNotification', err))
    },

    addSong({ dispatch, commit, state }, song) {
      if (state.playList.includes(song)) {
        return dispatch('showNotification', {
          type: 'error', message: 'That song is already in your list'
        })
      }
      commit('addSong', song)
    },

    showNotification({ commit }, notification) {
      console.log(notification)
    }
  }
})