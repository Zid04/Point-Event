# Point-Event

## Description

Point-Event est une application React construite avec Vite pour présenter un site d'événementiel, d'agence ou de services créatifs. Le projet utilise le routage côté client, des animations et des composants UI pour une expérience moderne.

## Fonctionnalités

- React 18 avec Vite pour un développement rapide
- Routage client avec `react-router-dom`
- Animations de défilement avec `aos`
- Effets de mouvement avec `framer-motion`
- Composants UI stylés avec `@chakra-ui/react`
- Formulaire email avec `@emailjs/browser`
- ESLint configuré pour la qualité du code

## Installation

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

Construire pour la production :

```bash
npm run build
```

Prévisualiser le build de production localement :

```bash
npm run preview
```

Vérifier le code avec ESLint :

```bash
npm run lint
```

## Structure du projet

- `src/` - code source
  - `App.jsx` - routage principal et structure des pages
  - `main.jsx` - point d'entrée de l'application Vite
  - `components/` - composants UI réutilisables
  - `pages/` - pages : accueil, à propos, services, réalisations, contact
- `public/` - ressources statiques
- `index.html` - template HTML Vite

## Notes

- `AOS.init()` est appelé dans `src/App.jsx` pour activer les animations au scroll.
- Les routes sont définies avec `Routes` et `Route` de `react-router-dom`.
- Pensez à mettre à jour les identifiants EmailJS dans la page de contact si vous activez l'envoi de mails.

## Dépendances principales

- `react`
- `react-dom`
- `react-router-dom`
- `@chakra-ui/react`
- `@emotion/react`
- `@emotion/styled`
- `aos`
- `framer-motion`
- `react-icons`
- `@emailjs/browser`

## Licence

Ce dépôt est privé. Modifiez cette section si le projet devient public.
