# PAPYRUS Web - MVP

Base de la partie web de PAPYRUS, plateforme premium de vente et d'ecoute de livres audio.

Ce dossier contient uniquement le socle du projet web: architecture, configuration, dependances prevues et conventions. Les dependances ne sont pas installees et l'application n'est pas encore codee.

## Objectif MVP Web

La V1 web doit permettre de livrer une experience simple, stable et premium autour des parcours essentiels:

- consulter la page d'accueil;
- parcourir le catalogue;
- rechercher un livre audio;
- consulter une fiche livre;
- ecouter un extrait;
- creer un compte et se connecter;
- acheter un livre via Stripe;
- acceder a sa bibliotheque;
- ecouter un livre achete;
- reprendre l'ecoute;
- gerer son profil;
- acceder a un admin simple pour gerer les livres, categories, utilisateurs et validations.

## Stack Prevue

- Framework: Next.js App Router
- Langage: TypeScript
- UI: React 19
- Styles: Tailwind CSS
- Donnees serveur: TanStack Query
- Etat client leger: Zustand
- Formulaires: React Hook Form + Zod
- Icons: React Icons
- UI foundation: shadcn/ui compatible structure
- Notifications UI: Sonner
- Animations: Framer Motion
- Paiement: Stripe cote API/backend, integration web via endpoints Laravel
- Backend cible: Laravel REST API

## Installation

Depuis le dossier `web`:

```bash
npm install
```

Demarrage en local:

```bash
npm run dev
```

Verification TypeScript:

```bash
npm run typecheck
```

Lint:

```bash
npm run lint
```

Build production:

```bash
npm run build
```

## Variables D'environnement

Copier `.env.example` vers `.env.local`.

```bash
cp .env.example .env.local
```

Sous Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Variables principales:

- `NEXT_PUBLIC_APP_URL`: URL publique du front web.
- `NEXT_PUBLIC_API_URL`: URL de l'API Laravel.
- `NEXT_PUBLIC_ASSET_URL`: URL publique ou CDN pour les assets.
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: cle publique Stripe.
- `NEXT_PUBLIC_APP_ENV`: environnement courant.

Les secrets ne doivent jamais etre exposes avec le prefixe `NEXT_PUBLIC_`.

## Architecture Des Dossiers

```text
web/
  app/
    (marketing)/
      .gitkeep
    (auth)/
      .gitkeep
    (app)/
      .gitkeep
    admin/
      .gitkeep
    api/
      .gitkeep
  components/
    common/
      .gitkeep
    layout/
      .gitkeep
    ui/
      .gitkeep
    audio/
      .gitkeep
    catalog/
      .gitkeep
    checkout/
      .gitkeep
    library/
      .gitkeep
  config/
    .gitkeep
  features/
    auth/
      .gitkeep
    books/
      .gitkeep
    catalog/
      .gitkeep
    checkout/
      .gitkeep
    library/
      .gitkeep
    player/
      .gitkeep
    profile/
      .gitkeep
    admin/
      .gitkeep
  hooks/
    .gitkeep
  lib/
    api/
      .gitkeep
    auth/
      .gitkeep
    constants/
      .gitkeep
    formatters/
      .gitkeep
    validators/
      .gitkeep
  providers/
    .gitkeep
  public/
    assets/
      audio/
        .gitkeep
      images/
        .gitkeep
      logos/
        .gitkeep
  stores/
    .gitkeep
  styles/
    .gitkeep
  types/
    .gitkeep
```

## Role Des Dossiers

`app/` contient les routes Next.js App Router.

`app/(marketing)/` recevra les pages publiques: accueil, catalogue public, fiche livre publique, offres.

`app/(auth)/` recevra connexion, inscription, mot de passe oublie, verification email.

`app/(app)/` recevra l'espace utilisateur connecte: bibliotheque, profil, paiements, historique.

`app/admin/` recevra le back-office web: dashboard, livres, categories, utilisateurs, validations, paiements.

`components/ui/` contiendra les composants generiques: boutons, champs, modales, onglets, badges.

Le projet contient un fichier `components.json` pour preparer l'utilisation de shadcn/ui. Les composants ne sont pas encore generes. Apres installation des dependances, tu pourras ajouter les composants necessaires avec:

```bash
npx shadcn@latest add button input dialog dropdown-menu tabs badge card
```

Les icones doivent venir de `react-icons`, pas de `lucide-react`.

`components/audio/` contiendra les composants du lecteur audio web.

`features/` contiendra la logique metier par domaine. Chaque feature pourra contenir ses appels API, schemas, types locaux, composants specialises et hooks.

`lib/api/` contiendra le client HTTP, la gestion des erreurs API et les helpers pour TanStack Query.

`stores/` contiendra les stores Zustand: player, session UI, preferences locales.

`types/` contiendra les types globaux partages avec le backend.

## Modules MVP A Creer

### Public

- Accueil premium
- Catalogue
- Recherche simple
- Fiche livre
- Extrait audio
- Page offres / abonnements

### Authentification

- Inscription
- Connexion
- Deconnexion
- Mot de passe oublie
- Verification email
- Protection des routes privees

### Utilisateur

- Bibliotheque personnelle
- Historique d'ecoute
- Favoris
- Profil
- Factures et paiements

### Lecteur Audio

- Lecture / pause
- Barre de progression
- Reprise d'ecoute
- Changement de chapitre
- Vitesse de lecture
- Mini lecteur global

### Paiement

- Achat d'un livre
- Confirmation de paiement
- Ajout automatique a la bibliotheque
- Historique de paiement

### Admin Simple

- Dashboard
- Gestion des livres
- Ajout / edition livre
- Upload couverture et audio via backend
- Validation / refus livre
- Gestion categories
- Gestion utilisateurs
- Statistiques simples

## Priorites De Construction

1. Initialiser layout global, theme sombre PAPYRUS et design system minimal.
2. Creer le client API et la structure des erreurs.
3. Creer les types principaux: `User`, `Book`, `Chapter`, `Order`, `Payment`, `LibraryItem`.
4. Construire les routes publiques: accueil, catalogue, fiche livre.
5. Ajouter authentification et routes protegees.
6. Construire bibliotheque et lecteur audio.
7. Ajouter paiement et confirmation.
8. Construire admin simple.
9. Finaliser responsive, accessibilite et tests.

## Convention De Nommage

- Dossiers: kebab-case.
- Composants React: PascalCase.
- Hooks: `useSomething`.
- Types: PascalCase.
- Fonctions utilitaires: camelCase.
- Variables d'environnement publiques: prefixe `NEXT_PUBLIC_`.

## Strategie API

Le front ne doit pas acceder directement a la base de donnees. Toutes les donnees passent par l'API Laravel.

Endpoints attendus pour le MVP:

```text
POST   /auth/register
POST   /auth/login
POST   /auth/logout
GET    /auth/me

GET    /books
GET    /books/:slug
GET    /books/:id/chapters
GET    /categories

GET    /library
POST   /library/:bookId/progress
GET    /library/:bookId/progress

POST   /checkout/books/:bookId
GET    /payments
GET    /orders

GET    /admin/stats
GET    /admin/books
POST   /admin/books
PATCH  /admin/books/:id
POST   /admin/books/:id/approve
POST   /admin/books/:id/reject
GET    /admin/users
GET    /admin/categories
POST   /admin/categories
```

## Design System MVP

Direction visuelle:

- theme sombre;
- orange PAPYRUS comme couleur d'accent;
- interface dense mais elegante;
- cartes livre sobres;
- lecteur audio toujours lisible;
- admin plus fonctionnel, inspire dashboard SaaS.

Tokens a prevoir:

- couleurs: background, surface, surface-muted, border, text, text-muted, accent, danger, success, warning;
- espacements: 4, 8, 12, 16, 24, 32, 48;
- rayons: 4, 6, 8;
- ombres discretes;
- focus visible pour accessibilite.

## Qualite Et Verification

Avant chaque livraison:

```bash
npm run typecheck
npm run lint
npm run build
```

Controle manuel:

- mobile 360 px;
- tablette;
- desktop;
- navigation clavier;
- etats loading/error/empty;
- parcours achat complet en sandbox;
- reprise d'ecoute apres refresh;
- routes admin protegees.

## Regles Importantes

- Ne pas mettre de secret dans le front.
- Ne pas coder la logique Stripe directement cote client hors flux public officiel.
- Ne pas stocker de token sensible en clair si une solution cookie HTTP-only est disponible.
- Les fichiers audio doivent etre servis via URLs signees ou endpoint securise.
- Le lecteur doit etre developpe tot, car c'est le coeur produit.
- La V1 doit rester stricte: catalogue, achat, bibliotheque, lecteur, admin simple.

## Prochaine Etape

Apres installation des dependances, creer les premiers fichiers Next.js minimum:

- `app/layout.tsx`
- `app/page.tsx`
- `styles/globals.css`
- providers React Query
- client API
- types metier de base

Ensuite construire le catalogue et la fiche livre avant le paiement.
