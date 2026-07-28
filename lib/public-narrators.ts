import { publicBooks } from "@/lib/public-demo-data";

export type PublicNarrator = {
  slug: string;
  name: string;
  initials: string;
  tone: string;
  bio: string;
  tags: string[];
  stats: {
    books: string;
    hours: string;
    listeners: string;
  };
  about: {
    title: string;
    text: string;
  }[];
  portraitBookIndex: number;
};

export const publicNarrators: PublicNarrator[] = [
  {
    slug: "noe-lamberti",
    name: "Noe Lamberti",
    initials: "NL",
    tone: "Voix chaleureuse et immersive",
    bio: "Voix profonde et chaleureuse, Noe Lamberti donne vie aux recits avec intensite et nuance. Specialiste de la fantasy, de l'aventure et du roman historique.",
    tags: ["Voix grave", "Expressif", "Epic", "Chaleureux", "Emotionnel", "Immersif"],
    stats: { books: "27", hours: "146 h 32", listeners: "18 642" },
    about: [
      { title: "Professionnel de la voix", text: "Depuis plus de 8 ans" },
      { title: "Studio haute qualite", text: "Enregistrements en studio professionnel" },
      { title: "Apprecie des auditeurs", text: "Note 4,8/5 par la communaute" }
    ],
    portraitBookIndex: 3
  },
  {
    slug: "elise-marechal",
    name: "Elise Marechal",
    initials: "EM",
    tone: "Voix claire, sensible et precise",
    bio: "Elise Marechal apporte une narration limpide et intime aux romans a suspense, aux recits historiques et aux grandes fresques contemporaines.",
    tags: ["Clair", "Sensible", "Narratif", "Mystere", "Elegant", "Precise"],
    stats: { books: "19", hours: "102 h 15", listeners: "12 904" },
    about: [
      { title: "Narratrice studio", text: "Depuis plus de 6 ans" },
      { title: "Direction artistique", text: "Lecture fluide et travail du rythme" },
      { title: "Tres suivie", text: "Note 4,7/5 par les auditeurs" }
    ],
    portraitBookIndex: 1
  },
  {
    slug: "pierre-henri-prelot",
    name: "Pierre-Henri Prelot",
    initials: "PP",
    tone: "Voix ample et cinematographique",
    bio: "Pierre-Henri Prelot excelle dans les epopees, les voyages et les recits d'aventure avec une presence vocale ample et memorable.",
    tags: ["Cinematique", "Aventure", "Profond", "Puissant", "Classique", "Immersif"],
    stats: { books: "22", hours: "131 h 08", listeners: "15 276" },
    about: [
      { title: "Voix d'aventure", text: "Specialiste des recits immersifs" },
      { title: "Studio premium", text: "Prise de son haute definition" },
      { title: "Selection editoriale", text: "Souvent recommande par PAPYRUS" }
    ],
    portraitBookIndex: 2
  },
  {
    slug: "camille-laurent",
    name: "Camille Laurent",
    initials: "CL",
    tone: "Voix douce et contemplative",
    bio: "Camille Laurent accompagne les recits intimes et les memoires avec une lecture douce, proche et tres expressive.",
    tags: ["Doux", "Intime", "Poetique", "Calme", "Humain", "Nuance"],
    stats: { books: "15", hours: "88 h 44", listeners: "9 830" },
    about: [
      { title: "Lecture sensible", text: "Approche douce et naturelle" },
      { title: "Romans de memoire", text: "Specialiste des recits personnels" },
      { title: "Ecoute confortable", text: "Voix appreciee pour les longues sessions" }
    ],
    portraitBookIndex: 4
  },
  {
    slug: "julien-chatelet",
    name: "Julien Chatelet",
    initials: "JC",
    tone: "Voix posee et elegante",
    bio: "Julien Chatelet donne aux intrigues et aux essais une diction nette, posee, avec une elegance discrete.",
    tags: ["Pose", "Elegant", "Essai", "Suspense", "Fluide", "Calme"],
    stats: { books: "18", hours: "96 h 20", listeners: "10 514" },
    about: [
      { title: "Diction precise", text: "Lecture claire et maitrisee" },
      { title: "Qualite constante", text: "Enregistrements soignes" },
      { title: "Bonne retention", text: "Tres ecoute sur les series longues" }
    ],
    portraitBookIndex: 0
  },
  {
    slug: "benoit-marchand",
    name: "Benoit Marchand",
    initials: "BM",
    tone: "Voix grave et rassurante",
    bio: "Benoit Marchand installe une atmosphere stable et enveloppante, ideale pour les recits de mer, les romans historiques et les thrillers lents.",
    tags: ["Grave", "Rassurant", "Atmospherique", "Lent", "Precise", "Immersif"],
    stats: { books: "14", hours: "74 h 59", listeners: "8 412" },
    about: [
      { title: "Voix d'ambiance", text: "Parfait pour les ecoutes nocturnes" },
      { title: "Narration lente", text: "Rythme confortable et stable" },
      { title: "Studio pro", text: "Son clair et homogene" }
    ],
    portraitBookIndex: 1
  }
];

export const publicBookDetails = [
  {
    ...publicBooks[0],
    title: "Les Jardins de Minuit",
    author: "Clara Veyrac",
    narratorSlug: "noe-lamberti",
    duration: "12h 22min",
    rating: "4,8 (2 345)"
  },
  {
    ...publicBooks[1],
    title: "L'Archive des Brumes",
    author: "Mathieu Lenoir",
    narratorSlug: "elise-marechal",
    duration: "14h 05min",
    rating: "4,7 (1 892)"
  },
  {
    ...publicBooks[2],
    title: "Le Dernier Atlas",
    author: "Arthur Delaunay",
    narratorSlug: "pierre-henri-prelot",
    duration: "10h 48min",
    rating: "4,6 (1 563)"
  },
  {
    ...publicBooks[3],
    title: "Memoires d'une Ville Bleue",
    author: "Lea Morvan",
    narratorSlug: "camille-laurent",
    duration: "11h 37min",
    rating: "4,7 (1 201)"
  },
  {
    ...publicBooks[4],
    title: "La Chambre des Echos",
    author: "Antoine Blanchard",
    narratorSlug: "julien-chatelet",
    duration: "9h 26min",
    rating: "4,5 (987)"
  },
  {
    ...publicBooks[1],
    id: "sillage-opale",
    title: "Sillage d'Opale",
    author: "Sophie Talbot",
    narratorSlug: "benoit-marchand",
    duration: "8h 59min",
    rating: "4,6 (812)"
  }
];

export function getNarratorBySlug(slug: string) {
  return publicNarrators.find((narrator) => narrator.slug === slug);
}

export function getNarratorForBook(bookId: string) {
  const detail = publicBookDetails.find((book) => book.id === bookId) ?? publicBookDetails[0];
  const narrator = getNarratorBySlug(detail.narratorSlug) ?? publicNarrators[0];

  return { detail, narrator };
}

export function getBooksByNarrator(slug: string) {
  const books = publicBookDetails.filter((book) => book.narratorSlug === slug);

  return books.length > 0 ? books : publicBookDetails.slice(0, 3);
}
