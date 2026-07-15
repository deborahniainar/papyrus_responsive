import {
  FaChevronDown,
  FaGripVertical,
  FaList
} from "react-icons/fa6";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { PlayerBar } from "@/components/audio/player-bar";
import { BookCard } from "@/components/catalog/book-sections";
import { Button } from "@/components/ui/button";

const filters = [
  { label: "Tout", active: true },
  { label: "Catégories" },
  { label: "Niveau" },
  { label: "Durée" },
  { label: "Note" },
  { label: "Langue" },
  { label: "Trier par" },
];

const books = [
  {
    id: "la-chute-des-geants",
    title: "La Chute des Géants",
    author: "Ken Follett",
    badge: "PREMIUM",
    discount: "-20%",
    rating: "4.8",
    views: "12.5K",
    duration: "18h 42min"
  },
  {
    id: "le-secret-egypte",
    title: "Le Secret de l'Égypte Éternelle",
    author: "Jacques Martel",
    badge: "PREMIUM",
    rating: "4.7",
    views: "8.3K",
    duration: "9h 17min"
  },
  {
    id: "l-ombre-des-pharaons",
    title: "L'Ombre des Pharaons",
    author: "Jacques Martel",
    badge: "PREMIUM",
    discount: "-15%",
    rating: "4.7",
    views: "7.2K",
    duration: "10h 26min"
  },
  {
    id: "memoire-egyptien",
    title: "Mémoire d'un Égyptien",
    author: "Christian Jacq",
    badge: "PROMO",
    rating: "4.9",
    views: "15.2K",
    duration: "7h 51min"
  },
  {
    id: "l-empire-des-tenebres",
    title: "L'Empire des Ténèbres",
    author: "Christian Jacq",
    badge: "PREMIUM",
    rating: "4.9",
    views: "10.1K",
    duration: "12h 03min"
  },
  {
    id: "voie-des-sages",
    title: "La Voie des Sages",
    author: "Papyrus Originals",
    badge: "PREMIUM",
    rating: "4.8",
    views: "9.3K",
    duration: "5h 28min"
  },
  {
    id: "la-chute-des-geants",
    title: "La Chute des Géants - Édition collector",
    author: "Ken Follett",
    rating: "4.8",
    views: "6.4K",
    duration: "18h 42min"
  },
  {
    id: "le-secret-egypte",
    title: "Le Secret de l'Égypte Éternelle - Audio",
    author: "Jacques Martel",
    badge: "PREMIUM",
    rating: "4.7",
    views: "5.7K",
    duration: "9h 17min"
  },
  {
    id: "l-empire-des-tenebres",
    title: "Le Juge d'Égypte - Tome 1",
    author: "Christian Jacq",
    badge: "PREMIUM",
    discount: "-10%",
    rating: "4.6",
    views: "4.2K",
    duration: "12h 03min"
  },
  {
    id: "l-ombre-des-pharaons",
    title: "Chroniques des Pharaons",
    author: "Papyrus Studio",
    badge: "PREMIUM",
    rating: "4.9",
    views: "18.7K",
    duration: "8h 11min"
  },
];

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />

      <div className="lg:pl-64">
        <TopNav />

        <main className="px-4 py-8 pb-32 sm:px-6 lg:px-8 lg:py-10">
          <header className="mb-10 space-y-2">
            <h1 className="text-3xl font-black tracking-tight">Catalogue</h1>
            <p className="text-sm text-white/40">
              Découvrez notre sélection de plus de <span className="text-white">4 256</span> livres audio
            </p>
          </header>

          <div className="mb-8 flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.label}
                  variant="outline"
                  className={`h-10 gap-2 rounded-xl border-white/5 px-4 text-xs font-bold transition-all ${
                    filter.active
                      ? "bg-white/10 text-white border-white/10"
                      : "bg-white/[0.02] text-white/50 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {filter.label}
                  <FaChevronDown className="size-2.5 opacity-40" />
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-2 p-1 rounded-xl bg-white/[0.03] border border-white/5">
              <Button size="icon" variant="ghost" className="size-9 rounded-lg bg-white/5 text-primary shadow-xl">
                <FaGripVertical className="size-4 rotate-90" />
              </Button>
              <Button size="icon" variant="ghost" className="size-9 rounded-lg text-white/30 hover:text-white">
                <FaList className="size-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {books.map((book) => (
              <BookCard
                key={book.title}
                variant="catalog"
                {...book}
              />
            ))}
          </div>

          {/* Load More Mock */}
          <div className="mt-20 flex justify-center">
             <Button variant="outline" className="h-12 gap-3 border-white/10 bg-white/5 px-10 text-sm font-bold text-white hover:bg-white/10 rounded-2xl">
               Afficher plus de résultats
             </Button>
          </div>
        </main>
      </div>

      <PlayerBar />
    </div>
  );
}
