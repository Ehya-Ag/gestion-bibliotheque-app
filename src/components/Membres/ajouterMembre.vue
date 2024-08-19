<template>
    <div class="container mt-4">
      <h2>Ajouter un Nouveau Membre</h2>
      <form @submit.prevent="addMember" class="needs-validation" novalidate>
        <div class="mb-3">
          <label for="nom" class="form-label">Nom</label>
          <input type="text" class="form-control" id="nom" v-model="newMember.nom" required>
          <div class="invalid-feedback">
            Veuillez entrer un nom.
          </div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="newMember.email" required>
          <div class="invalid-feedback">
            Veuillez entrer un email valide.
          </div>
        </div>
        <div class="mb-3">
          <label for="adresse" class="form-label">Adresse</label>
          <input type="text" class="form-control" id="adresse" v-model="newMember.adresse" required>
          <div class="invalid-feedback">
            Veuillez entrer une adresse.
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Ajouter Membre</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const newMember = ref({
    nom: '',
    email: '',
    adresse: ''
  });
  
  const addMember = () => {
    // Logique pour ajouter un membre
    console.log('Nouveau membre ajouté:', newMember.value);
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
  }
  </style>
  