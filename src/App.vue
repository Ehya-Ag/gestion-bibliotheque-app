<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/navbar.vue';
</script>

<template>
  <Navbar/>
  <RouterView />
  <!-- </div> -->

 
</template>

<style scoped>
/* Styles globaux pour l'application */
.app {

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