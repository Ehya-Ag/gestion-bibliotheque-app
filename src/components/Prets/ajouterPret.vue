<template>
    <div class="container">
      <h1>Ajouter un Prêt</h1>
      <form @submit.prevent="handleSubmit">
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
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  // Exemple de livres et membres
  const livres = ref([
    { id: '1', nom: 'Afrique qui se lève ' },
    { id: '2', nom: 'Pére pauvre, pére riche' },
    { id: '3', nom: 'Les misérables' }
  ]);
  
  const membres = ref([
    { id: '1', nom: 'Ehya Ag Mohamed' },
    { id: '2', nom: 'Ousmane ly' },
    { id: '3', nom: 'Mamadou ba' },
    { id: '4', nom: 'Aichatou taher' }
  ]);
  
  const form = ref({
    nomLivre: '',
    nomMembre: '',
    datePret: '',
    dateRemise: ''
  });
  
  const router = useRouter();
  
  const handleSubmit = () => {
    console.log('Prêt ajouté:', form.value);
    router.push({ name: 'listerPrets' });
  };
  </script>
  
  <style scoped>
  /* Styles personnalisés pour le formulaire */
  .form-select, .form-control {
    border-radius: 0.25rem;
    border: 1px solid #ced4da;
    padding: 0.375rem 0.75rem;
  }
  
  .form-select:focus, .form-control:focus {
    border-color: #80bdff;
    outline: 0;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #004085;
  }
  </style>
  
  <!-- Assurez-vous d'avoir Font Awesome dans votre projet pour les icônes si nécessaire -->
  