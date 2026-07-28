import { publicBooks } from "@/lib/public-demo-data";

export type VisitorSearchItem = {
  id: string;
  title: string;
  author: string;
  narrator: string;
  cover: string;
  keywords: string[];
};

export function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export const visitorSearchItems: VisitorSearchItem[] = [
  {
    id: "la-memoire-des-villes",
    title: "La Memoire des villes",
    author: "Elise Marchal",
    narrator: "Noe Lamberti",
    cover: publicBooks[0].cover,
    keywords: ["memoire des villes", "ville", "souvenir", "roman"]
  },
  {
    id: "memoires-d-asphalte",
    title: "Memoires d'asphalte",
    author: "Julien Morel",
    narrator: "Clara Veyrac",
    cover: publicBooks[3].cover,
    keywords: ["memoire des villes", "asphalte", "journaliste", "roman urbain"]
  },
  {
    id: "la-cite-des-souvenirs",
    title: "La Cite des souvenirs",
    author: "Mathieu Lenoir",
    narrator: "Antoine Blanchard",
    cover: publicBooks[1].cover,
    keywords: ["memoire des villes", "souvenirs", "cite", "mystere"]
  },
  {
    id: "les-echos-de-pierre",
    title: "Les Echos de pierre",
    author: "Claire Dumont",
    narrator: "Sophie Talbot",
    cover: publicBooks[4].cover,
    keywords: ["memoire des villes", "pierre", "heritage"]
  },
  {
    id: "sous-les-toits-de-memoire",
    title: "Sous les toits de memoire",
    author: "Arthur Delaunay",
    narrator: "Camille Laurent",
    cover: publicBooks[2].cover,
    keywords: ["memoire des villes", "carnet", "ville"]
  },
  ...publicBooks.map((book) => ({
    id: book.id,
    title: book.title,
    author: book.author,
    narrator: "Narrateur PAPYRUS",
    cover: book.cover,
    keywords: [book.category, book.title, book.author]
  }))
];

export function getVisitorSearchMatches(search: string, limit = 6) {
  const normalizedSearch = normalizeSearchText(search);

  if (!normalizedSearch) return [];

  return visitorSearchItems
    .filter((item) =>
      normalizeSearchText([item.title, item.author, item.narrator, ...item.keywords].join(" ")).includes(normalizedSearch)
    )
    .slice(0, limit);
}
