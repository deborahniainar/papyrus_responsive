import { FaBook, FaChartLine, FaCoins, FaHeadphones, FaHourglassHalf, FaUsers } from "react-icons/fa6";

export const authorMetrics = [
  { label: "Livres publiés", value: "12", detail: "2 nouveaux ce trimestre", icon: FaBook },
  { label: "Écoutes", value: "84,2 k", detail: "+18 % ce mois", icon: FaHeadphones },
  { label: "Revenus", value: "4 860 €", detail: "Estimation annuelle", icon: FaCoins },
  { label: "En validation", value: "3", detail: "Délai moyen : 48 h", icon: FaHourglassHalf },
];

export const authorRows = [
  { title: "Les silences de l’aube", subtitle: "Soumis le 26 juillet 2026", status: "En validation", meta: "12 chapitres" },
  { title: "L’ultime héritage", subtitle: "Roman audio · version intégrale", status: "Validé", meta: "18 h 24" },
  { title: "À fleur de peau", subtitle: "Brouillon mis à jour aujourd’hui", status: "Brouillon", meta: "8 chapitres" },
];

export const publisherMetrics = [
  { label: "Livres au catalogue", value: "148", detail: "12 collections actives", icon: FaBook },
  { label: "Auteurs partenaires", value: "36", detail: "+4 cette année", icon: FaUsers },
  { label: "Écoutes mensuelles", value: "1,2 M", detail: "+14 % ce mois", icon: FaHeadphones },
  { label: "Revenus distribués", value: "82 k€", detail: "Sur les 12 derniers mois", icon: FaCoins },
];

export const adminMetrics = [
  { label: "Utilisateurs", value: "24 806", detail: "+324 cette semaine", icon: FaUsers },
  { label: "Auteurs", value: "1 248", detail: "48 en vérification", icon: FaBook },
  { label: "Livres actifs", value: "8 940", detail: "126 en validation", icon: FaHeadphones },
  { label: "Volume d’affaires", value: "284 k€", detail: "+9,4 % ce mois", icon: FaChartLine },
];

export const adminRows = [
  { title: "Les silences de l’aube", subtitle: "Soumission de Claire Veyrac", status: "À valider", meta: "Aujourd’hui" },
  { title: "Compte auteur #PA-2481", subtitle: "Vérification d’identité", status: "En attente", meta: "Il y a 2 h" },
  { title: "L’ultime héritage", subtitle: "Contrôle éditorial terminé", status: "Validé", meta: "Hier" },
];
