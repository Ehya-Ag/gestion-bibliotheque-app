<template>
    <div class="container">
      <div class="p-4 border rounded shadow-sm bg-light">
        <h4>Modifier un Prêt</h4>
        <form @submit.prevent="handleSave">
          <!-- Liste déroulante pour les livres -->
          <div class="mb-3">
            <label for="nomLivre" class="form-label">Nom du Livre</label>
            <select v-model="editForm.nomLivre" id="nomLivre" class="form-select" required>
              <option v-for="livre in livres" :key="livre.id" :value="livre.id">
                {{ livre.nom }}
              </option>
            </select>
          </div>
          
          <!-- Liste déroulante pour les membres -->
          <div class="mb-3">
            <label for="nomMembre" class="form-label">Nom du Membre</label>
            <select v-model="editForm.nomMembre" id="nomMembre" class="form-select" required>
              <option v-for="membre in membres" :key="membre.id" :value="membre.id">
                {{ membre.nom }}
              </option>
            </select>
          </div>
          
          <!-- Champ pour la date de prêt -->
          <div class="mb-3">
            <label for="datePret" class="form-label">Date de Prêt</label>
            <input v-model="editForm.datePret" type="date" id="datePret" class="form-control" required>
          </div>
          
          <!-- Champ pour la date de remise -->
          <div class="mb-3">
            <label for="dateRemise" class="form-label">Date de Remise</label>
            <input v-model="editForm.dateRemise" type="date" id="dateRemise" class="form-control">
          </div>
          
          <button type="submit" class="btn btn-primary">Sauvegarder</button>
          <button type="button" class="btn btn-secondary" @click="$emit('onCancel')">Annuler</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    pret: Object,
    livres: Array,
    membres: Array
  });
  
  const emit = defineEmits(['onSave', 'onCancel']);
  
  const editForm = ref({ ...props.pret });
  
  watch(() => props.pret, (newPret) => {
    editForm.value = { ...newPret };
  }, { immediate: true });
  
  const handleSave = () => {
    emit('onSave', editForm.value);
  };
  </script>
  
  <style scoped>
  /* Style pour le formulaire de modification */
  .shadow-sm {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }
  </style>
  