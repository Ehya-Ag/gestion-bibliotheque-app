<template>
    <div class="container mt-4">
      <h2>Modifier les Informations du Membre</h2>
      <form @submit.prevent="updateMember" class="needs-validation" novalidate>
        <div class="mb-3">
          <label for="nom" class="form-label">Nom</label>
          <input type="text" class="form-control" id="nom" v-model="member.nom" required>
          <div class="invalid-feedback">
            Veuillez entrer un nom.
          </div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="member.email" required>
          <div class="invalid-feedback">
            Veuillez entrer un email valide.
          </div>
        </div>
        <div class="mb-3">
          <label for="adresse" class="form-label">Adresse</label>
          <input type="text" class="form-control" id="adresse" v-model="member.adresse" required>
          <div class="invalid-feedback">
            Veuillez entrer une adresse.
          </div>
        </div>
        <button type="submit" class="btn btn-warning">Modifier Membre</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const member = ref({
    nom: '',
    email: '',
    adresse: ''
  });
  
  const updateMember = () => {
    // Logique pour modifier les informations du membre
    console.log('Membre modifié:', member.value);
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
  }
  </style>
  