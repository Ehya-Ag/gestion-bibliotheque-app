<template>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand"><strong>Bibliothèque</strong></router-link>
          <button
            data-mdb-collapse-init
            class="navbar-toggler"
            type="button"
            data-mdb-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/livres" class="nav-link" active-class="active" aria-current="page">Livres</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/membres" class="nav-link" active-class="active">Membres</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/prets" class="nav-link" active-class="active">Prêts</router-link>
              </li>
            </ul>
            <form class="d-flex input-group w-auto">
              <input
                type="search"
                class="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <button
                data-mdb-ripple-init
                class="btn btn-outline-primary"
                type="button"
                data-mdb-ripple-color="dark"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  </script>
  
  <style scoped>
  /* Ajoutez ici vos styles spécifiques pour la barre de navigation */
  .navbar-brand {
    font-weight: bold;
  }
  .nav-link.active {
    color: #007bff; /* Couleur active pour le lien */
  }
  </style>
  