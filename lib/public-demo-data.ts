export const assetPath = (path: string) => `/demos/papyrus${path}`;

export const publicBooks = [
  {
    id: "la-chute-des-geants",
    title: "La Chute des Geants",
    author: "Ken Follett",
    cover: assetPath("/assets/images/books/cover-chute-geants.png"),
    category: "Roman",
    duration: "18h 42",
    excerpt: "12 min"
  },
  {
    id: "le-secret-egypte",
    title: "Le Secret de l'Egypte Eternelle",
    author: "Jacques Martel",
    cover: assetPath("/assets/images/books/cover-secret-egypte.png"),
    category: "Histoire",
    duration: "9h 17",
    excerpt: "10 min"
  },
  {
    id: "voie-des-sages",
    title: "La Voie des Sages",
    author: "Papyrus Originals",
    cover: assetPath("/assets/images/books/cover-voie-sages.png"),
    category: "Spiritualite",
    duration: "5h 28",
    excerpt: "8 min"
  },
  {
    id: "l-empire-des-tenebres",
    title: "L'Empire des Tenebres",
    author: "Christian Jacq",
    cover: assetPath("/assets/images/books/cover-empire-tenebres.png"),
    category: "Suspense",
    duration: "12h 03",
    excerpt: "9 min"
  },
  {
    id: "memoire-egyptien",
    title: "Memoire d'un Egyptien",
    author: "Christian Jacq",
    cover: assetPath("/assets/images/books/cover-memoire-egyptien.png"),
    category: "Biographie",
    duration: "7h 51",
    excerpt: "11 min"
  }
];

export const publicCategories = [
  "Developpement personnel",
  "Romans",
  "Business",
  "Histoire",
  "Spiritualite",
  "Philosophie",
  "Biographie",
  "Science",
  "Suspense",
  "Fiction",
  "Education",
  "Jeunesse"
];

export const publicInterests = [
  "Livres Premium",
  "Nouveautes",
  "Extraits gratuits",
  "A ecouter ce soir",
  "Meilleures ventes",
  "Auteurs malgaches",
  "Classiques",
  "Bien-etre",
  "Leadership",
  "Culture generale",
  "Podcasts narratifs",
  "Livres courts",
  "Hors connexion",
  "Recommandations"
];
