import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Home from '@/components/Home'
// import PlayList from '@/components/PlayList'



Vue.use(Router)

export default new Router({
routes:[
  {
    path: '/',
    name: 'Home',
    component: Home  
  },
  // {
  //   path: '/',
  //   name: 'PlayList',
  //   component: PlayList
  // }
]
}) 