<!-- Details.vue -->
<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  livre: {
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

<template>
  <div v-if="isVisible" class="details-overlay">
    <div class="details-modal">
      <h2>Détails du livre</h2>
      <p><strong>Titre:</strong> {{ livre.titre }}</p>
      <p><strong>Auteur:</strong> {{ livre.auteur }}</p>
      <p><strong>Genre:</strong> {{ livre.genre }}</p>
      <p><strong>Date de publication:</strong> {{ livre.datePub }}</p>
      <button class="btn btn-sm btn-secondary" @click="close">Fermer</button>
    </div>
  </div>
</template>

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
}
</style>
    