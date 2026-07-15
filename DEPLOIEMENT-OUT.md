# Deploiement du dossier `out`

Le projet est configure pour etre publie a cette adresse :

`https://votre-domaine.tld/demos/papyrus/`

Apres `npm run build`, transferez **le contenu du dossier `out/`** directement dans le dossier serveur `/demos/papyrus/`.

La structure distante doit notamment contenir :

- `/demos/papyrus/index.html`
- `/demos/papyrus/_next/static/css/...`
- `/demos/papyrus/_next/static/chunks/...`
- `/demos/papyrus/assets/...`

Ne transferez pas le dossier `out` lui-meme dans `/demos/papyrus/`, sinon les fichiers se retrouveront dans `/demos/papyrus/out/` et les styles ne seront pas trouves.

La configuration `basePath: "/demos/papyrus"` suffit pour les fichiers Next.js. L'ancien `assetPrefix` identique a ete retire afin d'eviter une double gestion du prefixe des ressources exportees.
