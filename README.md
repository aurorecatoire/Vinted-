👕 Vinted– Application Full-Stack
📌 Présentation

Vinted- est une application Full-Stack inspirée de la plateforme Vinted.
Elle permet aux utilisateurs de consulter des offres, créer un compte, se connecter, publier des annonces et effectuer des paiements sécurisés lorsqu’ils sont authentifiés.

Ce projet a été réalisé dans un objectif d’apprentissage et de démonstration de compétences Full-Stack.

🎯 Objectifs du projet

Mettre en place une authentification complète

Gérer l’inscription, la connexion et la déconnexion

Créer et afficher des offres

Implémenter un processus de paiement

Protéger certaines routes selon l’état de connexion

Concevoir une architecture Frontend / Backend

🛠️ Technologies utilisées

Frontend

React

React Router

Axios

CSS / Styled Components / autre

Gestion de l’état utilisateur (Context API / autre)

Hébergement : Netlify

Backend

Node.js

Express

MongoDB

Mongoose

JWT (JSON Web Token) pour l’authentification

Stripe pour les paiements

Hébergement : NorthFlank

🔐 Authentification

Inscription avec :

Email

Nom d’utilisateur

Mot de passe sécurisé (hashé)

Déconnexion

Protection des routes sensibles

Persistance de la session utilisateur

📂 Fonctionnalités

🛍️ Offres

Visualisation de toutes les offres disponibles

Affichage des détails d’une offre :

Image

Titre

Description

Prix

Informations du vendeur

✍️ Création d’une offre

Accessible uniquement si l’utilisateur est connecté

Formulaire de création avec :

Titre

Description

Prix

Image

Upload d’image

Enregistrement en base de données

💳 Paiement

Processus de paiement sécurisé via Stripe

Paiement possible uniquement pour les utilisateurs connectés

Confirmation de paiement

👤 Compte utilisateur

Inscription

Connexion

Déconnexion

Gestion de l’état utilisateur côté frontend

🧭 Navigation

Barre de navigation :

Offres

Connexion / Inscription

Publier une annonce (visible si connecté)

Déconnexion (si connecté)

Redirection automatique selon l’état de connexion

🚀 Déploiement

Frontend (Netlify)

Backend (NorthFlank)


🧠 Axes d’amélioration

Filtrage et recherche avancée des offres

Messagerie entre utilisateurs

Gestion des profils utilisateurs

Historique des achats

Tests unitaires et end-to-end

Responsive avancé

👨‍💻 Auteur

Projet réalisé par Aurore Catoire 

Dans le cadre d’un projet Full-Stack

⚠️ Disclaimer

Ce projet est une réplique à but pédagogique et n’a aucun lien officiel avec la plateforme Vinted.
