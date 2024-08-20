<!-- src/components/Accueil.vue -->
<template>
    <div class="accueil">
      <!-- Carousel -->
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <!-- Slide 1 -->
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg" class="d-block w-100" alt="Bibliothèque 1">
            <div class="carousel-caption d-none d-md-block">
              <h1 class="welcome-message">Bienvenue sur Gestion Bibliothèque</h1>
              <h5 class="carousel-caption-text">« La lecture est à l'esprit ce que l'exercice est au corps. »</h5>
              <p>- Joseph Addison</p>
            </div>
          </div>
          <!-- Slide 2 -->
          <div class="carousel-item" data-bs-interval="10000">
            <img src="https://images.pexels.com/photos/256426/pexels-photo-256426.jpeg" class="d-block w-100" alt="Bibliothèque 2">
            <div class="carousel-caption d-none d-md-block">
              <h1 class="welcome-message">Bienvenue sur Gestion Bibliothèque</h1>
              <h5 class="carousel-caption-text">« Un livre est un rêve que vous tenez dans vos mains. »</h5>
              <p>- Neil Gaiman</p>
            </div>
          </div>
          <!-- Slide 3 -->
          <div class="carousel-item" data-bs-interval="10000">
            <img src="https://images.pexels.com/photos/256425/pexels-photo-256425.jpeg" class="d-block w-100" alt="Bibliothèque 3">
            <div class="carousel-caption d-none d-md-block">
              <h1 class="welcome-message">Bienvenue sur Gestion Bibliothèque</h1>
              <h5 class="carousel-caption-text">« Lire, c'est voyager ; voyager, c'est lire. »</h5>
              <p>- Victor Hugo</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* Styles globaux pour le composant Accueil */
  .accueil {
    text-align: center;
  }
  
  .carousel-item img {
    height: 100vh; /* Hauteur des images du carousel pour remplir l'écran */
    object-fit: cover;
  }
  
  .carousel-caption {
    bottom: 20px; /* Position de la légende du carousel en bas */
    text-align: center;
  }
  
  .welcome-message {
    font-size: 5rem; /* Taille de police pour le message de bienvenue */
    color: #f5b402; /* Couleur du texte */
    text-shadow: 5px 5px 10px rgb(10, 10, 10); /* Ombre jaune pour le texte */
    margin: 0;
    position: absolute;
    top: -300%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  
  .carousel-caption-text {
    font-size: 2rem; /* Taille de police pour la citation */
    color: #007bff; /* Couleur bleue pour la citation */
  }
  
  .carousel-caption p {
    font-size: 1.5rem; /* Taille de police pour l'auteur de la citation */
  }
  </style>
  