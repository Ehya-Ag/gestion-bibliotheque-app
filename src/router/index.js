import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import listerLivre from '../components/Livres/listerLivres.vue'; // Assurez-vous que ce chemin est correct
import listerrMembre from '../components/Membres/listerMembres.vue'; // Chemin vers listerrMembre
import listerPrets from '../components/Prets/listerPrets.vue'; // Chemin vers listerPrets
import ajouterPret from '../components/Prets/ajouterPret.vue'; // Chemin vers listerPrets

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'), // Chargement dynamique
  },
  {
    path: '/livres',
    name: 'livres',
    component: listerLivre,
  },
  {
    path: '/membres',
    name: 'membres',
    component: listerrMembre, // Composant pour la lister des membres
  },
  {
    path: '/prets',
    name: 'prets',
    component: listerPrets, // Composant pour la lister des prêts
  },
  {
    path: '/prets',
    name: 'pret',
    component: ajouterPret, // Composant pour la lister des prêts
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
