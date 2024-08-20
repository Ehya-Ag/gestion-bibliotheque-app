<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    
 <body>
    <div class="container">
      <!-- Bouton pour ajouter un nouveau prêt -->
      <div class="mb-3">
        <button class="btn btn-primary" @click="showAddForm = !showAddForm">
          <i class="fas fa-plus"></i> Ajouter un Nouveau Prêt
        </button>
      </div>
  
      <!-- Formulaire d'ajout de prêt -->
      <div v-if="showAddForm" class="form-container mb-3">
        <h4>Ajouter un Prêt</h4>
        <form @submit.prevent="handleAddSubmit">
          <!-- Liste déroulante pour les livres -->
          <div class="mb-3">
            <label for="nomLivre" class="form-label">Nom du Livre</label>
            <select v-model="form.nomLivre" id="nomLivre" class="form-select" required>
              <option value="" disabled>Sélectionnez un livre</option>
              <option v-for="livre in livres" :key="livre.id" :value="livre.id">
                {{ livre.nom }}
              </option>
            </select>
          </div>
          
          <!-- Liste déroulante pour les membres -->
          <div class="mb-3">
            <label for="nomMembre" class="form-label">Nom du Membre</label>
            <select v-model="form.nomMembre" id="nomMembre" class="form-select" required>
              <option value="" disabled>Sélectionnez un membre</option>
              <option v-for="membre in membres" :key="membre.id" :value="membre.id">
                {{ membre.nom }}
              </option>
            </select>
          </div>
          
          <!-- Champ pour la date de prêt -->
          <div class="mb-3">
            <label for="datePret" class="form-label">Date de Prêt</label>
            <input v-model="form.datePret" type="date" id="datePret" class="form-control" required>
          </div>
          
          <!-- Champ pour la date de remise -->
          <div class="mb-3">
            <label for="dateRemise" class="form-label">Date de Remise</label>
            <input v-model="form.dateRemise" type="date" id="dateRemise" class="form-control">
          </div>
          
          <button type="submit" class="btn btn-primary">Ajouter</button>
        </form>
      </div>
  
      <!-- Formulaire de modification de prêt -->
      <ModifierPret
        v-if="showEditForm"
        :pret="currentPret"
        :livres="livres"
        :membres="membres"
        @onSave="handleEditSave"
        @onCancel="showEditForm = false"
      />
  
      <!-- Table des prêts -->
      <table class="table table-hover table-bordered table-background">
        <thead>
          <tr>
            <th>Identifiant</th>
            <th>Nom du Livre</th>
            <th>Nom du Membre</th>
            <th>Date de Prêt</th>
            <th>Date de Remise</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pret, index) in prets" :key="pret.id">
            <td>{{ index + 1 }}</td>
            <td>{{ getLivreName(pret.nomLivre) }}</td>
            <td>{{ getMembreName(pret.nomMembre) }}</td>
            <td>{{ pret.datePret }}</td>
            <td>{{ pret.dateRemise }}</td>
            <td>
              <button class="btn btn-info btn-sm" @click="viewDetails(pret.id)">
                <i class="fas fa-eye"></i>
              </button>
              <button class="btn btn-warning btn-sm" @click="editPret(pret)">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn btn-danger btn-sm" @click="deletePret(pret.id)">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Affichage des détails du prêt sélectionné -->
      <PretDetails
        v-if="selectedPret"
        :pret="selectedPret"
        :isVisible="!!selectedPret"
        :livres="livres"
        :membres="membres"
        @onClose="selectedPret = null"
      />
    </div>
 </body>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ModifierPret from './modifierPret.vue';
  import PretDetails from './pretDetails.vue';
  
  const showAddForm = ref(false);
  const showEditForm = ref(false);
  const form = ref({
    nomLivre: '',
    nomMembre: '',
    datePret: '',
    dateRemise: ''
  });
  
  const livres = ref([
  { id: '1', nom: 'Afrique qui se lève ' },
    { id: '2', nom: 'Pére pauvre, pére riche' },
    { id: '3', nom: 'Les misérables' }
  ]);
  
  const membres = ref([
    { id: '1', nom: 'Ehya Ag Mohamed' },
    { id: '2', nom: 'Ousmane Ly' },
    { id: '3', nom: 'Mamadou Ba' },
    { id: '4', nom: 'Taher Sy' }
  ]);
  
  const prets = ref([
    { id: '1', nomLivre: '1', nomMembre: '1', datePret: '2024-08-01', dateRemise: '2024-08-15' }
  ]);
  
  const currentPret = ref(null);
  const selectedPret = ref(null);
  
  const handleAddSubmit = () => {
    prets.value.push({ ...form.value, id: String(prets.value.length + 1) });
    form.value = { nomLivre: '', nomMembre: '', datePret: '', dateRemise: '' };
    showAddForm.value = false;
  };
  
  const viewDetails = (id) => {
    selectedPret.value = prets.value.find(pret => pret.id === id);
  };
  
  const editPret = (pret) => {
    currentPret.value = pret;
    showEditForm.value = true;
  };
  
  const handleEditSave = (updatedPret) => {
    const index = prets.value.findIndex(p => p.id === updatedPret.id);
    if (index !== -1) {
      prets.value[index] = updatedPret;
    }
    showEditForm.value = false;
  };
  
  const deletePret = (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce prêt ?')) {
      prets.value = prets.value.filter(pret => pret.id !== id);
    }
  };
  
  const getLivreName = (id) => {
    const livre = livres.value.find(l => l.id === id);
    return livre ? livre.nom : 'Inconnu';
  };
  
  const getMembreName = (id) => {
    const membre = membres.value.find(m => m.id === id);
    return membre ? membre.nom : 'Inconnu';
  };
  </script>
  
  <style scoped>
  /* Fond du body */
  body {
    height: 100vh;
    background-color: #62a3e76b;
    border-radius: 10px;
    padding: 10px;
    margin: 100px;
    font-family: Arial, sans-serif;
  }
  
  /* Container avec marges et ombre */
  .container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 1rem;
  }
  
  /* Formulaires avec fond gris, ombre et padding */
  .form-container {
    background-color: #ffffff;
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
  
  /* Styles de la table */
  .table-background {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .table thead th {
    background-color: #f8f9fa;
    font-weight: bold;
  }
  
  /* Style des boutons */
  .btn-primary, .btn-info, .btn-warning, .btn-danger {
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-primary {
    background-color: #007bff;
  }
  
  .btn-primary:hover {
    background-color: #0056b3; /* Bleu plus foncé pour le survol */
  }
  
  .btn-info {
    background-color: #17a2b8;
  }
  
  .btn-info:hover {
    background-color: #138496; /* Bleu plus foncé pour le survol */
  }
  
  .btn-warning {
    background-color: #ffc107;
    color: #212529; /* Texte sombre pour le bouton avertissement */
  }
  
  .btn-warning:hover {
    background-color: #e0a800; /* Jaune plus foncé pour le survol */
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
  