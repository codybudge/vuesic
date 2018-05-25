import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from '../router'

let auth = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 3000
})

vue.use(vuex)

export default new vuex.Store({
state: {
  songList:[],
  playList:[]
},
mutations: {},
actions: {},
})