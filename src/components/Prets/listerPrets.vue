<template>
    <div>
      <h1>Liste des Prêts</h1>
      <!-- Votre logique pour afficher la liste des prêts -->
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Livres</th>
            <th>Membres</th>
            <th>Date de Prêt</th>
            <th>Date de Retour</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pret, index) in prets" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ pret.livre }}</td>
            <td>{{ pret.membre }}</td>
            <td>{{ pret.datePret }}</td>
            <td>{{ pret.dateRetour }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const prets = ref([
    { livre: 'Livre 1', membre: 'Membre 1', datePret: '2024-01-01', dateRetour: '2024-02-01' },
    // Ajoutez d'autres prêts ici
  ]);
  </script>
  
  <style scoped>
  /* Styles spécifiques pour ListePrets.vue */
  </style>
  