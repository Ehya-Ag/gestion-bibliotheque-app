<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<body>
      
    <div class="container">
      <!-- Formulaires -->
      <div class="form-container mb-3">
        <AddForm @onAdd="addLivre" />
      </div>
  
      <div class="form-container mb-3">
        <EditForm
          v-if="isEditing"
          :livre="currentLivre"
          @onEdit="editLivre"
          @onCancel="resetForm"
        />
      </div>
  
      <Details
        v-if="isViewing"
        :livre="currentLivre"
        :isVisible="isViewing"
        @onClose="resetForm"
      />
  
      <!-- Table des livres -->
      <table class="table table-hover table-bordered table-background">
        <thead>
          <tr>
            <th scope="col">Identifiant</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Genre</th>
            <th>Date de publication</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(livre, index) in livres" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ livre.titre }}</td>
            <td>{{ livre.auteur }}</td>
            <td>{{ livre.genre }}</td>
            <td>{{ livre.datePub }}</td>
            <td>
              <button class="btn btn-danger btn-xs" @click="removeLivre(index)">
                <i class="fas fa-trash icon"></i>
              </button>
              <button class="btn btn-secondary btn-xs" @click="startEdit(index)">
                <i class="fas fa-edit icon"></i>
              </button>
              <button class="btn btn-info btn-xs" @click="startView(index)">
                <i class="fas fa-eye icon"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</body>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import AddForm from './ajouterLivre.vue';
  import EditForm from './modifierLivre.vue';
  import Details from './details.vue';
  
  const livres = ref([
    { titre: 'Livre 1', auteur: 'Auteur 1', genre: 'Genre 1', datePub: '2024-01-01' },
    // Ajoutez d'autres livres ici
  ]);
  
  const currentLivre = ref(null);
  const isEditing = ref(false);
  const isViewing = ref(false);
  
  const addLivre = (livre) => {
    livres.value.push(livre);
  };
  
  const editLivre = (livre) => {
    const index = livres.value.findIndex(l => l.titre === currentLivre.value.titre);
    if (index !== -1) {
      livres.value[index] = livre;
    }
    resetForm();
  };
  
  const removeLivre = (index) => {
    livres.value.splice(index, 1);
  };
  
  const startEdit = (index) => {
    currentLivre.value = livres.value[index];
    isEditing.value = true;
  };
  
  const startView = (index) => {
    currentLivre.value = livres.value[index];
    isViewing.value = true;
  };
  
  const resetForm = () => {
    currentLivre.value = null;
    isEditing.value = false;
    isViewing.value = false;
  };
  </script>
  
  <style scoped>
    body {
    height: 100vh;
    background-color: #62a3e76b;
    border-radius: 10px;
    padding: 10px;
    margin: 100px;
    font-family: Arial, sans-serif;
  }
  /* Styles de la table */
  .table-background {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .table thead th {
    background-color: #f8f9fa;
    font-weight: bold;
    border-bottom: 2px solid #dee2e6;
  }
  
  .table tbody tr {
    transition: background-color 0.3s;
  }
  
  .table tbody tr:hover {
    background-color: #f1f1f1;
  }
  
  /* Container avec marges et ombre */
  .container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 1rem;
  }
  
  /* Formulaires avec fond gris, ombre et padding */
  .form-container {
    background-color: #f0f0f0;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Effet de survol bleu pour les champs de saisie */
  input[type="text"], input[type="date"], select {
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 4px;
    transition: border-color 0.3s ease;
  }
  
  input[type="text"]:hover, input[type="date"]:hover, select:hover {
    border-color: #007bff; /* Bleu pour le survol */
  }
  
  /* Style des boutons d'édition, de visualisation et de suppression */
  .btn-info, .btn-secondary, .btn-danger {
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: transparent; /* Pour rendre le bouton transparent pour les icônes */
  }
  
  .btn-info {
    background-color: #007bff;
  }
  
  .btn-info:hover {
    background-color: #0056b3; /* Bleu plus foncé pour le survol */
  }
  
  .btn-secondary {
    background-color: #6c757d;
  }
  
  .btn-secondary:hover {
    background-color: #5a6268; /* Gris plus foncé pour le survol */
  }
  
  .btn-danger {
    background-color: #dc3545;
  }
  
  .btn-danger:hover {
    background-color: #c82333; /* Rouge plus foncé pour le survol */
  }
  
  /* Styles pour les icônes */
  .icon {
    font-size: 1.2rem;
  }
  </style>
  