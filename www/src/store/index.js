import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'


var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//hotlinemusic.herokuapp.com/api/' : '//localhost:3000/api/';


vue.use(vuex)

let api = axios.create({
  baseURL: 'https://itunes.apple.com/search?media=music&&term=',
  timeout: 3000
})

let myTunes = axios.create({
  baseURL: baseUrl,
  timeout: 3000
})


export default new vuex.Store({
  state: {
    songs: [],
    playList: {},
  },
  mutations: {
    setSong(state, song) {
      state.songs = song
    },
    setPlayList(state, playlist) {
      state.playList = playlist
    },
    addSong(state, song) {
      state.playList.push(song)
    },
    // removeSong(state, idnexToRemove) {
    //   state.playList.splice(idnexToRemove, 1)
    // },
    
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
    getPlaylist({commit, dispatch}, playlist){
      myTunes.get('playlists/5b0ddaa33ce72e0fb8a0c051', playlist)
      .then(res => {
        commit('setPlayList', res.data)
      })
    },
    addToPlayList({dispatch, commit}, song){
      myTunes.put('playlists/5b0ddaa33ce72e0fb8a0c051/songs', song)
      .then(res => {
        commit('setPlayList', res.data)
      })
    },
    removeSong({dispatch, commit}, songId) {
      myTunes.delete('playlists/5b0ddaa33ce72e0fb8a0c051/songs/' + songId)
      .then(res => {
        commit('setPlayList', res.data)
      })
    },
    moveUp({dispatch, commit}, songs) {
      myTunes.put('playlists/5b0ddaa33ce72e0fb8a0c051', songs)
      .then(res => {
        commit('setPlayList', res.data)
      })
    },
    moveDown({dispatch, commit}, songs){
      myTunes.put('playlists/5b0ddaa33ce72e0fb8a0c051', songs)
      .then(res =>{
        commit('setPlayList', res.data)
      })
    },

    showNotification({ commit }, notification) {
      console.log(notification)
    }
  }
})