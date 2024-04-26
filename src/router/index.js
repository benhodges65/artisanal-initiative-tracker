import { createRouter, createWebHistory } from 'vue-router'
import EncounterBuilder from '../views/EncounterBuilder.vue'
import Encounter from '../views/Encounter.vue'
import Licensing from '../views/Licensing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EncounterBuilder
    },
    {
      path: '/encounter',
      name: 'encounter',
      component: Encounter
    },
    {
      path: '/licensing',
      name: 'licensing',
      component: Licensing
    },
    {
      path: '/index.html',
      redirect: { name: 'home' }
    }
  ]
})

export default router
