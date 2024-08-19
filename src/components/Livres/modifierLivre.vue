
<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['onEdit', 'onCancel']);

const props = defineProps({
  livre: {
    type: Object,
    default: () => ({}),
  },
});

const titre = ref(props.livre.titre || '');
const auteur = ref(props.livre.auteur || '');
const genre = ref(props.livre.genre || '');
const datePub = ref(props.livre.datePub || '');

watch(() => props.livre, (newLivre) => {
  titre.value = newLivre.titre;
  auteur.value = newLivre.auteur;
  genre.value = newLivre.genre;
  datePub.value = newLivre.datePub;
}, { immediate: true });

const onSubmit = () => {
  const livre = {
    titre: titre.value,
    auteur: auteur.value,
    genre: genre.value,
    datePub: datePub.value,
  };

  emit('onEdit', livre);
  emit('onCancel');
};

const cancel = () => {
  emit('onCancel');
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
          Modifier
        </button>
        <button type="button" class="btn btn-sm mt-4 btn-secondary" @click="cancel">
          Annuler
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
</style>
