<template>
    <div class="container mt-4">
      <h2 class="mb-4 text-center">Liste des Membres</h2>
      
      <div class="text-center mb-4">
        <button class="btn btn-primary" @click="showAddMemberForm = !showAddMemberForm">
          <i class="fas" :class="showAddMemberForm ? 'fa-times' : 'fa-plus'"></i>
          {{ showAddMemberForm ? ' Annuler Ajouter' : ' Ajouter Membre' }}
        </button>
      </div>
  
      <div v-if="showAddMemberForm" class="card p-4 mb-4 shadow-sm">
        <h3 class="card-title mb-3">Ajouter un Membre</h3>
        <form @submit.prevent="addMember">
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
          <button type="submit" class="btn btn-primary">Ajouter</button>
        </form>
      </div>
  
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>#</th>
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
              <button class="btn btn-info btn-sm me-2" @click="viewMember(member.id)">
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
  
      <!-- Affichage du formulaire de modification uniquement lorsqu'un membre est sélectionné -->
      <div v-if="showEditMemberForm" class="card p-4 shadow-sm">
        <h3 class="card-title mb-3">Modifier les Informations du Membre</h3>
        <form @submit.prevent="updateMember">
          <div class="mb-3">
            <label for="editNom" class="form-label">Nom</label>
            <input type="text" class="form-control" id="editNom" v-model="currentMember.nom" required>
            <div class="invalid-feedback">
              Veuillez entrer un nom.
            </div>
          </div>
          <div class="mb-3">
            <label for="editEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="editEmail" v-model="currentMember.email" required>
            <div class="invalid-feedback">
              Veuillez entrer un email valide.
            </div>
          </div>
          <div class="mb-3">
            <label for="editAdresse" class="form-label">Adresse</label>
            <input type="text" class="form-control" id="editAdresse" v-model="currentMember.adresse" required>
            <div class="invalid-feedback">
              Veuillez entrer une adresse.
            </div>
          </div>
          <button type="submit" class="btn btn-warning">Modifier Membre</button>
          <button type="button" class="btn btn-secondary ms-2" @click="cancelEdit">Annuler</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const members = ref([
    { id: 1, nom: 'Ehya Agg', email: 'agg@example.com', adresse: '10 Rue de Paris' },
    { id: 2, nom: 'Ly Ousmane', email: 'ousmane@example.com', adresse: '20 Rue Basra' }
  ]);
  
  const showAddMemberForm = ref(false);
  const showEditMemberForm = ref(false);
  const newMember = ref({ nom: '', email: '', adresse: '' });
  const currentMember = ref({ id: null, nom: '', email: '', adresse: '' });
  
  const addMember = () => {
    members.value.push({ ...newMember.value, id: members.value.length + 1 });
    newMember.value = { nom: '', email: '', adresse: '' };
    showAddMemberForm.value = false;
  };
  
  const viewMember = (id) => {
    console.log('Détails du membre avec l\'ID', id);
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
  .container {
    max-width: 900px;
  }
  
  .card {
    border-radius: 0.5rem;
  }
  
  .table {
    border-radius: 0.5rem;
    overflow: hidden;
  }
  
  .table thead th {
    background-color: #f8f9fa;
    font-weight: bold;
  }
  
  .table tbody tr:hover {
    background-color: #f1f1f1;
  }
  
  .btn-sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }
  
  .btn i {
    font-size: 1.2rem;
  }
  
  .text-center {
    text-align: center;
  }
  
  .card {
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .btn-primary, .btn-secondary {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .btn-primary i, .btn-secondary i {
    margin-right: 0.5rem;
  }
  </style>
  