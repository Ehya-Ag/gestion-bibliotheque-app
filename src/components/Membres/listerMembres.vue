<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    
<body>
    
    <div class="container mt-4">
      <h2 class="mb-4 text-center">Liste des Membres</h2>
  
      <div class="text-center mb-4">
        <button class="btn btn-primary" @click="showAddMemberForm = !showAddMemberForm">
          <i class="fas" :class="showAddMemberForm ? 'fa-times' : 'fa-plus'"></i>
          {{ showAddMemberForm ? ' Annuler Ajouter' : ' Ajouter Membre' }}
        </button>
      </div>
  
      <div v-if="showAddMemberForm" class="card p-4 mb-4 card-background shadow-sm">
        <h3 class="card-title mb-3">Ajouter un Membre</h3>
        <form @submit.prevent="addMember">
          <div class="mb-3">
            <label for="nom" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nom" v-model="newMember.nom" required>
            <div class="invalid-feedback">Veuillez entrer un nom.</div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="newMember.email" required>
            <div class="invalid-feedback">Veuillez entrer un email valide.</div>
          </div>
          <div class="mb-3">
            <label for="adresse" class="form-label">Adresse</label>
            <input type="text" class="form-control" id="adresse" v-model="newMember.adresse" required>
            <div class="invalid-feedback">Veuillez entrer une adresse.</div>
          </div>
          <button type="submit" class="btn btn-primary">Ajouter</button>
        </form>
      </div>
  
      <table class="table table-hover table-background">
        <thead>
          <tr>
            <th>Identifiant</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Adresse</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, index) in members" :key="member.id">
            <td>{{ index + 1 }}</td>
            <td>{{ member.nom }}</td>
            <td>{{ member.email }}</td>
            <td>{{ member.adresse }}</td>
            <td>
              <button class="btn btn-info btn-sm me-2" @click="viewMember(member)">
                <i class="fas fa-eye"></i>
              </button>
              <button class="btn btn-warning btn-sm me-2" @click="editMember(member)">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn btn-danger btn-sm" @click="removeMember(member.id)">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div v-if="showEditMemberForm" class="card p-4 card-background shadow-sm">
        <h3 class="card-title mb-3">Modifier les Informations du Membre</h3>
        <form @submit.prevent="updateMember">
          <div class="mb-3">
            <label for="editNom" class="form-label">Nom</label>
            <input type="text" class="form-control" id="editNom" v-model="currentMember.nom" required>
            <div class="invalid-feedback">Veuillez entrer un nom.</div>
          </div>
          <div class="mb-3">
            <label for="editEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="editEmail" v-model="currentMember.email" required>
            <div class="invalid-feedback">Veuillez entrer un email valide.</div>
          </div>
          <div class="mb-3">
            <label for="editAdresse" class="form-label">Adresse</label>
            <input type="text" class="form-control" id="editAdresse" v-model="currentMember.adresse" required>
            <div class="invalid-feedback">Veuillez entrer une adresse.</div>
          </div>
          <button type="submit" class="btn btn-warning">Modifier Membre</button>
          <button type="button" class="btn btn-secondary ms-2" @click="cancelEdit">Annuler</button>
        </form>
      </div>
  
      <MemberDetails
        v-if="selectedMember"
        :member="selectedMember"
        :isVisible="!!selectedMember"
        @onClose="selectedMember = null"
      />
    </div>
</body>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import MemberDetails from './membreDetails.vue';
  
  const members = ref([
    { id: 1, nom: 'Ehya Agg', email: 'ag@example.com', adresse: '10 Rue de Paris' },
    { id: 2, nom: 'Marie Curie', email: 'marie.curie@example.com', adresse: '20 Rue des Sciences' }
  ]);
  
  const showAddMemberForm = ref(false);
  const showEditMemberForm = ref(false);
  const newMember = ref({ nom: '', email: '', adresse: '' });
  const currentMember = ref({ id: null, nom: '', email: '', adresse: '' });
  const selectedMember = ref(null);
  
  const addMember = () => {
    members.value.push({ ...newMember.value, id: members.value.length + 1 });
    newMember.value = { nom: '', email: '', adresse: '' };
    showAddMemberForm.value = false;
  };
  
  const viewMember = (member) => {
    selectedMember.value = member;
  };
  
  const editMember = (member) => {
    currentMember.value = { ...member };
    showEditMemberForm.value = true;
  };
  
  const updateMember = () => {
    const index = members.value.findIndex(member => member.id === currentMember.value.id);
    if (index !== -1) {
      members.value[index] = { ...currentMember.value };
      currentMember.value = { id: null, nom: '', email: '', adresse: '' };
      showEditMemberForm.value = false;
    }
  };
  
  const removeMember = (id) => {
    const index = members.value.findIndex(member => member.id === id);
    if (index !== -1) {
      members.value.splice(index, 1);
    }
  };
  
  const cancelEdit = () => {
    currentMember.value = { id: null, nom: '', email: '', adresse: '' };
    showEditMemberForm.value = false;
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
  /* Container avec marges */
  .container {
    max-width: 1200px;
    margin: auto;
    padding: 0 1rem;
  }
  
  /* Styles de la carte */
  .card-background {
    background-color: #f8f9fa;
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Styles de la table */
  .table-background {
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .table thead th {
    background-color: #f8f9fa;
    font-weight: bold;
    border-bottom: 2px solid #dee2e6;
  }
  
  .table tbody tr:hover {
    background-color: #f1f1f1;
  }
  
  /* Styles des boutons */
  .btn-sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }
  
  .btn i {
    font-size: 1.2rem;
  }
  
  .btn-info {
    background-color: #007bff;
  }
  
  .btn-info:hover {
    background-color: #0056b3; /* Bleu plus foncé pour le survol */
  }
  
  .btn-warning {
    background-color: #ffc107;
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
  
  .btn-secondary {
    background-color: #6c757d;
  }
  
  .btn-secondary:hover {
    background-color: #5a6268; /* Gris plus foncé pour le survol */
  }
  
  .text-center {
    text-align: center;
  }
  </style>
  