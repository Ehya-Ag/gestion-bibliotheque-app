<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/navbar.vue';
import ListerMembres from './components/Membres/listerMembres.vue';
import AjouterMembre from './components/Membres/ajouterMembre.vue';
import ModifierMembre from './components/Membres/modifierMembre.vue';
import ListerLivres from './components/Livres/listerLivres.vue';
</script>

<template>
  <div class="app">
    <Navbar />
    <h1>Gestion Bibliothèque</h1>
    <!-- Commented out for now -->
    <!-- <ListerLivres /> -->
    <!-- <ListerMembres /> -->
    <!-- <AjouterMembre /> -->
    <!-- <ModifierMembre /> -->
    <RouterView />
  </div>
</template>

<style scoped>
/* Styles globaux pour l'application */
.app {
  background-image: url(/Gestion-bibliotheque/src/assets/images/fond.avif);
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #ffffff; /* Couleur blanche pour le texte du titre */
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Ombre légère pour le titre */
}
</style>
