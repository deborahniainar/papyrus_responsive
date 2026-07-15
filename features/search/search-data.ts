import type { IconType } from "react-icons";
import {
  FaBookOpen,
  FaBoxesStacked,
  FaBuilding,
  FaLayerGroup,
  FaMicrophone,
  FaPenNib,
  FaTag
} from "react-icons/fa6";

export type SearchResultType =
  | "book"
  | "author"
  | "publisher"
  | "category"
  | "narrator"
  | "collection"
  | "keyword";

export type SearchResult = {
  id: string;
  type: SearchResultType;
  title: string;
  subtitle: string;
  href: string;
  keywords: string[];
  correctionFor?: string[];
  intentFor?: string[];
};

export const searchTypeLabels: Record<SearchResultType, string> = {
  book: "Livre",
  author: "Auteur",
  publisher: "Maison d'edition",
  category: "Categorie",
  narrator: "Narrateur",
  collection: "Collection",
  keyword: "Mot-cle"
};

export const searchTypeIcons: Record<SearchResultType, IconType> = {
  book: FaBookOpen,
  author: FaPenNib,
  publisher: FaBuilding,
  category: FaLayerGroup,
  narrator: FaMicrophone,
  collection: FaBoxesStacked,
  keyword: FaTag
};

export const searchResults: SearchResult[] = [
  {
    id: "book-rich-dad",
    type: "book",
    title: "Pere Riche Pere Pauvre",
    subtitle: "Robert Kiyosaki - Finance personnelle",
    href: "/livres/pere-riche-pere-pauvre",
    keywords: ["argent", "finance", "business", "investissement", "richesse", "motivation"],
    correctionFor: ["robret kiyosaki"],
    intentFor: ["argent", "devenir riche", "independance financiere"]
  },
  {
    id: "book-millionaire-fastlane",
    type: "book",
    title: "L'Autoroute du Millionnaire",
    subtitle: "MJ DeMarco - Business",
    href: "/livres/autoroute-du-millionnaire",
    keywords: ["argent", "business", "entrepreneuriat", "millionnaire", "finance"],
    intentFor: ["argent", "devenir riche", "business"]
  },
  {
    id: "book-think-grow-rich",
    type: "book",
    title: "Reflechissez et devenez riche",
    subtitle: "Napoleon Hill - Developpement personnel",
    href: "/livres/reflechissez-et-devenez-riche",
    keywords: ["motivation", "argent", "succes", "business", "developpement personnel"],
    correctionFor: ["napoleon hile"],
    intentFor: ["argent", "motivation", "succes"]
  },
  {
    id: "book-harry-potter",
    type: "book",
    title: "Harry Potter",
    subtitle: "J.K. Rowling - Romans & Fiction",
    href: "/livres/harry-potter",
    keywords: ["fiction", "fantasy", "roman", "magie"],
    correctionFor: ["hary poter", "harry poter"]
  },
  {
    id: "author-robert-kiyosaki",
    type: "author",
    title: "Robert Kiyosaki",
    subtitle: "Auteur business et finance",
    href: "/auteurs/robert-kiyosaki",
    keywords: ["robert kiyosaki", "finance", "argent", "business"],
    correctionFor: ["robret kiyosaki"]
  },
  {
    id: "author-napoleon-hill",
    type: "author",
    title: "Napoleon Hill",
    subtitle: "Auteur developpement personnel",
    href: "/auteurs/napoleon-hill",
    keywords: ["napoleon hill", "motivation", "succes"],
    correctionFor: ["napoleon hile"]
  },
  {
    id: "publisher-gallimard",
    type: "publisher",
    title: "Gallimard",
    subtitle: "Maison d'edition",
    href: "/editeurs/gallimard",
    keywords: ["gallimard", "editeur", "maison edition"]
  },
  {
    id: "publisher-hachette",
    type: "publisher",
    title: "Hachette",
    subtitle: "Maison d'edition",
    href: "/editeurs/hachette",
    keywords: ["hachette", "editeur", "maison edition"]
  },
  {
    id: "publisher-papyrus-studio",
    type: "publisher",
    title: "PAPYRUS Studio",
    subtitle: "Production audio originale",
    href: "/editeurs/papyrus-studio",
    keywords: ["papyrus studio", "studio", "original"]
  },
  {
    id: "cat-business",
    type: "category",
    title: "Business",
    subtitle: "Ventes, marketing, strategie et entrepreneuriat",
    href: "/categorie/business",
    keywords: ["business", "marketing", "entrepreneuriat"]
  },
  {
    id: "cat-personal-development",
    type: "category",
    title: "Developpement Personnel",
    subtitle: "Motivation, habitudes, confiance et discipline",
    href: "/categorie/developpement-personnel",
    keywords: ["developpement personnel", "motivation", "discipline", "habitudes"]
  },
  {
    id: "cat-religion",
    type: "category",
    title: "Religion",
    subtitle: "Spiritualite, textes et enseignements",
    href: "/categorie/religion",
    keywords: ["religion", "spiritualite", "foi"]
  },
  {
    id: "cat-finance",
    type: "category",
    title: "Finance",
    subtitle: "Argent, investissement et patrimoine",
    href: "/categorie/finance",
    keywords: ["finance", "argent", "investissement", "patrimoine"]
  },
  {
    id: "collection-incontournables",
    type: "collection",
    title: "Les incontournables",
    subtitle: "Selection editoriale PAPYRUS",
    href: "/collection/les-incontournables",
    keywords: ["incontournables", "selection", "top"]
  },
  {
    id: "collection-top-business",
    type: "collection",
    title: "Top Business",
    subtitle: "Les meilleurs livres audio business",
    href: "/collection/top-business",
    keywords: ["top business", "business", "argent", "entrepreneuriat"]
  },
  {
    id: "collection-new",
    type: "collection",
    title: "Les nouveautes",
    subtitle: "Dernieres sorties audio",
    href: "/collection/nouveautes",
    keywords: ["nouveautes", "nouveau", "recent"]
  },
  {
    id: "keyword-motivation",
    type: "keyword",
    title: "motivation",
    subtitle: "Tous les livres lies a la motivation",
    href: "/recherche?q=motivation",
    keywords: ["motivation", "discipline", "succes"]
  }
];

export const popularSearches = ["motivation", "argent", "business", "Gallimard", "Napoleon Hill"];
