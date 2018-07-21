import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Add from '../components/Add.vue'
import Collet from '../components/Collet.vue'
import Detail from '../components/Detail.vue'

Vue.use(Router);
export default new Router({
  routes: [
    {path:'/home',component:Home},
    {path:'/list',component:List},
    {path:'/add',component:Add},
    {path:'/collet',component:Collet},
    {path:'/detail',component:Detail},
  ]
})
