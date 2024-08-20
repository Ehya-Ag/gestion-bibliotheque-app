<!-- MemberDetails.vue -->
<template>
    <div v-if="isVisible" class="details-overlay">
      <div class="details-modal">
        <h2>Détails du Membre</h2>
        <p><strong>Nom:</strong> {{ member.nom }}</p>
        <p><strong>Email:</strong> {{ member.email }}</p>
        <p><strong>Adresse:</strong> {{ member.adresse }}</p>
        <button class="btn btn-sm btn-secondary" @click="close">Fermer</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    member: {
      type: Object,
      default: () => ({}),
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  });
  
  const emit = defineEmits(['onClose']);
  
  const close = () => {
    emit('onClose');
  };
  </script>
  
  <style scoped>
  .details-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .details-modal {
    background: white;
    padding: 20px;
    border-radius: 5px;
    max-width: 500px;
    width: 100%;
  }
  </style>
  