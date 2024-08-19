<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import listerMembres from './components/Membres/listerMembres.vue';
import addMemberjouterMembre from './components/Membres/ajouterMembre.vue';
import modifierMembre from './components/Membres/modifierMembre.vue';
</script>

<template>
  <h1>Gestion bibliothéque</h1>
  <listerMembres/>
  <AjouterMembre/>
  <modifierMembre/>
  <HelloWorld/>
  <RouterView />
</template>

<style scoped></style>
