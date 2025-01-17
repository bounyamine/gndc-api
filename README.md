# gndc-api

## Table des matières
- [Description](#description)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Points d'accès API](#points-daccès-api)
- [Dépendances](#dépendances)
- [Scripts](#scripts)
- [Contribution](#contribution)
- [Licence](#licence)

## Description
Plateforme GNDC est une API robuste pour la gestion des articles de blog et l'authentification des utilisateurs.

## Fonctionnalités
- Inscription et authentification des utilisateurs
- Opérations CRUD pour les articles de blog
- Commentaires sur les articles
- Stockage sécurisé des mots de passe avec bcrypt
- Authentification basée sur JWT

## Installation
Pour installer les dépendances, exécutez :
```bash
npm install
```

## Utilisation
### Points d'accès API

#### Authentification
- **POST `/register`**: Inscrit un nouvel utilisateur.
  - **Corps de la requête**: `{ "firstName": "John", "lastName": "Doe", "email": "john@example.com", "password": "motdepassesecurise" }`
  - **Réponse**: `{ "message": "Utilisateur inscrit avec succès", "user": { "id": "user_id", "firstName": "John", "email": "john@example.com" } }`

- **POST `/login`**: Connecte un utilisateur existant.
  - **Corps de la requête**: `{ "email": "john@example.com", "password": "motdepassesecurise" }`
  - **Réponse**: `{ "message": "Connexion réussie", "token": "jwt_token", "user": { "id": "user_id", "email": "john@example.com", "firstName": "John" } }`

- **POST `/logout`**: Déconnecte l'utilisateur.
  - **Réponse**: `{ "message": "Déconnexion réussie" }`

#### Gestion du Blog
- **GET `/`**: Récupère tous les articles.
- **GET `/:id`**: Récupère un article spécifique par ID.
- **POST `/`**: Crée un nouvel article.
  - **Corps de la requête**: `{ "title": "Titre de l'article", "content": "Contenu de l'article" }`
- **PUT `/:id`**: Met à jour un article existant par ID.
- **DELETE `/:id`**: Supprime un article par ID.
- **POST `/:id/comments`**: Ajoute un commentaire à un article spécifique.
  - **Corps de la requête**: `{ "content": "Ceci est un commentaire" }`

## Dépendances
- @aws-sdk/client-s3
- @prisma/client
- bcryptjs
- cors
- dotenv
- express
- express-rate-limit
- helmet
- jsonwebtoken
- mongoose
- multer
- nodemailer
- winston
- zod

## Scripts
- `npm start`: Démarre l'application.
- `npm run dev`: Lance l'application en mode développement.
- `npm run build`: Compile l'application.
- `npm run lint`: Vérifie le code.
- `npm run test`: Lance les tests.
- `npm run migrate`: Exécute les migrations de la base de données.

## Contribution
Les contributions sont les bienvenues ! Veuillez ouvrir une issue ou soumettre une pull request.

## Licence
Ce projet est sous licence MIT.