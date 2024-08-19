<script setup>
import { RouterLink, RouterView } from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
<<<<<<< HEAD
import listerMembres from './components/Membres/listerMembres.vue';
import addMemberjouterMembre from './components/Membres/ajouterMembre.vue';
import modifierMembre from './components/Membres/modifierMembre.vue';
import navbar from './components/navbar.vue'
</script>

<template>
  <h1>Gestion bibliothéque</h1>
  <listerMembres/>
  <AjouterMembre/>
  <modifierMembre/>
  <HelloWorld/>
  <RouterView />
</template>

<style scoped>
.app{
  background-image: url(/Gestion-bibliotheque/src/assets/images/fond.avif);
}
</style>
