<!-- AddForm.vue -->
<script setup>
import { ref } from 'vue';

const emit = defineEmits(['onAdd']);

const titre = ref('');
const auteur = ref('');
const genre = ref('');
const datePub = ref('');

const onSubmit = () => {
  const livre = {
    titre: titre.value,
    auteur: auteur.value,
    genre: genre.value,
    datePub: datePub.value,
  };

  emit('onAdd', livre);
  resetForm();
};

const resetForm = () => {
  titre.value = '';
  auteur.value = '';
  genre.value = '';
  datePub.value = '';
};
</script>

<template>
  <div class="container">
    <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onSubmit">
      <div class="col-sm-3">
        <label for="titre">Titre</label>
        <input
          type="text"
          class="form-control"
          id="titre"
          v-model="titre"
        />
      </div>
      <div class="col-sm-2">
        <label for="auteur">Auteur</label>
        <input
          type="text"
          class="form-control"
          id="auteur"
          v-model="auteur"
        />
      </div>
      <div class="col-sm-2">
        <label for="genre">Genre</label>
        <input
          type="text"
          class="form-control"
          id="genre"
          v-model="genre"
        />
      </div>
      <div class="col-sm-3">
        <label for="datePub">Date de publication</label>
        <input
          type="date"
          class="form-control"
          id="datePub"
          v-model="datePub"
        />
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-sm mt-4 btn-primary">
          Ajouter
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
/* Ajoute ici ton CSS si nécessaire */
</style>
