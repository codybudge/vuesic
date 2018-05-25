import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Home from '../components/Home'


Vue.use(Router)

export default new Router({
routes:[
  {
    path: '/',
    name: 'Home',
    component: Home  
  },
]
}) 