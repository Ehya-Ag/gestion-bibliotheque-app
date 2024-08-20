
# Gestion de Bibliothèque avec Vue.js 3

## Introduction

Ce projet est une application web de gestion de bibliothèque développée avec Vue.js 3. L'application permet de gérer les livres, les membres, et les prêts d'une bibliothèque en utilisant la Composition API de Vue.js. Les données sont stockées localement dans l'état de l'application, sans backend.

## Table des Matières

1. [Objectif du Projet](#objectif-du-projet)
2. [Installation et Configuration](#installation-et-configuration)
3. [Structure du Projet](#structure-du-projet)
4. [Responsabilités des Collaborateurs](#responsabilités-des-collaborateurs)
5. [Fonctionnalités](#fonctionnalités)
6. [Instructions](#instructions)
7. [Fonctionnement](#fonctionnement)
8. [Contributions](#contributions)
9. [Licence](#licence)

## Objectif du Projet

L'objectif de ce projet est de créer des interfaces utilisateur dynamiques et interactives pour la gestion d'une bibliothèque. L'application permet de :

- Ajouter, lister, voir les détails, mettre à jour et supprimer des livres.
- Ajouter, lister, voir les détails, mettre à jour et supprimer des membres.
- Enregistrer, lister, voir les détails, mettre à jour et supprimer des prêts.

## Installation et Configuration

### Prérequis

- Node.js et npm installés sur votre machine.
- Vue CLI ou Vite pour initialiser le projet Vue.js.

### Étapes d'Installation

1. **Initialiser le Projet Vue.js 3**

   ```bash
   npm install -g @vue/cli
   vue create gestion-bibliotheque

2. Accéder au Répertoire du Projet

    bash

    cd gestion-bibliotheque


3.   Installer Vue Router

bash

npm install vue-router

4.  Démarrer le Serveur de Développement

bash

npm run dev

5.  Accéder à l'Application

    Ouvrez votre navigateur à l'adresse suivante :

http://localhost:3000

Structure du Projet

Le projet est structuré comme suit :

gestion-bibliotheque/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Livres/
│   │   ├   ── ajouterLivre
│   │   ├   ── listerLivre
│   │   ├   ── modifierLivre
│   │   ├── Membres/
            ── ajouterMembre
│   │   ├   ── listerMembre
│   │   ├   ── modifierMembre
│   │   ├── Prets
│   ├── App.vue
│   ├── main.js
│   └── router.js
│
├── .gitignore
├── package.json
└── README.md

    src/components/ : Contient les composants Vue.js pour les formulaires et les tables.
    src/App.vue : Composant principal de l'application.
    src/main.js : Point d'entrée principal de l'application.
    src/router.js : Configuration du routage pour naviguer entre les différentes sections.

Responsabilités des Collaborateurs
Collaborateur 1 : Ehya Agg

    Responsabilités :
        Développement des fonctionnalités liées aux livres et aux prêts..
        Création des composants ajouterLivre.vue, modifierLivres.vue, et supprimerLivres.vue.
        Gestion de l'état des livres et des opérations CRUD associées.

Collaborateur 2 : Ethman Ly

    Responsabilités :
        Développement des fonctionnalités liées aux membres et de la rédaction du fichier README.
        Création des composants ajouterMembre.vue, supprimerMembres.vue, PretForm.vue, modifierMembre.vue.
        Gestion de l'état des membres, ainsi que des opérations CRUD associées.

Fonctionnalités
Livres

    Ajouter un Nouveau Livre : Formulaire pour ajouter un nouveau livre à la bibliothèque.
    Lister les Livres : Affichage de tous les livres dans un tableau.
    Voir les Détails d'un Livre : Affichage des détails d'un livre sélectionné.
    Mettre à Jour les Informations d'un Livre : Formulaire pour modifier les informations d'un livre existant.
    Supprimer un Livre : Suppression d'un livre de la liste.

Membres

    Ajouter un Nouveau Membre : Formulaire pour ajouter un nouveau membre à la bibliothèque.
    Lister les Membres : Affichage de tous les membres dans un tableau.
    Voir les Détails d'un Membre : Affichage des détails d'un membre sélectionné.
    Mettre à Jour les Informations d'un Membre : Formulaire pour modifier les informations d'un membre existant.
    Supprimer un Membre : Suppression d'un membre de la liste.

Prêts

    Enregistrer un Nouveau Prêt : Formulaire pour enregistrer un nouveau prêt.
    Lister les Prêts : Affichage de tous les prêts dans un tableau.
    Voir les Détails d'un Prêt : Affichage des détails d'un prêt sélectionné.
    Mettre à Jour les Informations d'un Prêt : Formulaire pour modifier les informations d'un prêt existant.
    Supprimer un Prêt : Suppression d'un prêt de la liste.

Instructions

    Initialisation du Projet Vue.js 3
        Créez un nouveau projet Vue.js 3 en utilisant Vue CLI ou Vite.
        Installez Vue Router pour gérer la navigation entre les sections Livres, Membres, et Prêts.

    Création de l'Interface Utilisateur
        L'interface principale comporte un header avec trois menus : Livres, Membres, et Prêts.
        Chaque menu permet de naviguer vers la page correspondante et d'effectuer les opérations CRUD sur les livres, membres, et prêts.

Fonctionnement

    Navigation : Le header fixe en haut de la page permet une navigation fluide entre les sections Livres, Membres, et Prêts.
    Gestion Locale des Données : Les informations sur les livres, les membres et les prêts sont stockées dans l'état de l'application et manipulées directement, sans backend.
    Affichage Dynamique : Les pages sont mises à jour dynamiquement en fonction de la navigation de l'utilisateur, affichant les données pertinentes pour chaque section.
    Opérations CRUD : L'application permet d'ajouter, voir, modifier et supprimer des livres, membres, et prêts. Les listes et formulaires se mettent à jour en temps réel pour refléter les modifications.

Contributions

Les contributions sont les bienvenues. Veuillez suivre les étapes suivantes pour contribuer :

    Forkez le dépôt.
    Créez une branche pour votre fonctionnalité ou correction de bug (git checkout -b feature/ma-fonctionnalite).
    Faites vos modifications et ajoutez des commits (git commit -am 'Ajoute ma fonctionnalité').
    Poussez vos modifications (git push origin feature/ma-fonctionnalite).
    Ouvrez une pull request pour révision.



Pour toute question ou problème, veuillez contacter les responsables du projet à ousmanely11@gmail.com ou ehyaag32@gmail.com.

