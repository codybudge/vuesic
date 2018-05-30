import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'


vue.use(vuex)

let api = axios.create({
  baseURL: 'https://itunes.apple.com/search?term=',
  timeout: 3000
})

var myServer = axios.create({
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
    },
    findSongs({dispatch, commit}, query) {
      api.get(query)
      .then(res => {
        console.log(res.data)
        commit('setSong', res.data.results)
      }).catch(err => dispatch('showNotification', err))
    }
  },
})