import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GazInjection from '../views/GazInjection.vue'
import EorDatabase from '../views/EorDatabase.vue'
import EorClasPerm from '../views/EorClasPerm.vue'
import EorClasWorldwide from '../views/EorClasWorldwide.vue'


const routes = [

  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  
 

  { path: '/EorDatabase', 
  name: 'EorDatabase',
  component: EorDatabase,
}, 
 {
  path: '/cas-injection-de-gaz',
  name: 'casinjectiondegaz',
  component: GazInjection,
},
{
  path: '/EorClasPerm',
  name: 'EorClasPerm',
  component: EorClasPerm,
},
{
  path: '/EorClasWorldwide',
  name: 'EorClasWorldwide',
  component: EorClasWorldwide,
},
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
  
})

export default router
