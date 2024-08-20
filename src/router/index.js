import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import listerLivre from '../components/Livres/listerLivres.vue'; 
import listerrMembre from '../components/Membres/listerMembres.vue'; 
import listerPrets from '../components/Prets/listerPrets.vue'; 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/livres',
    name: 'livres',
    component: listerLivre,
  },
  {
    path: '/membres',
    name: 'membres',
    component: listerrMembre, 
  },
  {
    path: '/prets',
    name: 'prets',
    component: listerPrets, 
  },
  {
    path: '/prets',
    name: 'pret',
    component: ajouterPret, 
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
