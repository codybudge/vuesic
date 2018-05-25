import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'


vue.use(vuex)

var api = axios.create_({
  baseURL: 'https://itunes.apple.com/search?term=',
  timeout: 3000
})

var myServer = axios.create({
  baseURL: 'localhost:3000/api/playlist',
  timeout: 3000
})


export default new vuex.Store({
state: {
  artist:{},
  results:[],
  playList:[]
},
mutations: {
  setResults(state, results){
    state.results = results
  }
},
actions: {
  search({commit, dispatch}, payload){
    api.post('', {query: payload})
      .then(res=>{
        commit("setResults", res.data)
      })
      .catch(err=>{
        alert(err.response.data.message)
      })
  },
},
})