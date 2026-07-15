import Image from "next/image";
import {
  FaBookmark,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaMagnifyingGlass,
  FaPen,
  FaPlay,
  FaRegStar,
  FaStar,
  FaTrash
} from "react-icons/fa6";
import { PlayerBar } from "@/components/audio/player-bar";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { Button } from "@/components/ui/button";

const filters = [
  { label: "Tous", count: 24, active: true },
  { label: "Aujourd'hui", count: 5 },
  { label: "Cette semaine", count: 12 },
  { label: "Ce mois", count: 24 }
];

const bookmarks = [
  ["L'Alchimiste", "Paulo Coelho", "Chapitre 7", "Le coeur du desert", "1:05:32", "18 juin 2025", "Le tournant du voyage", 5, "/demos/papyrus/assets/images/books/cover-chute-geants.png"],
  ["Devenir", "Michelle Obama", "Chapitre 3", "Construire sa voix", "0:42:18", "17 juin 2025", "Inspiration personnelle", 4, "/demos/papyrus/assets/images/books/cover-empire-tenebres.png"],
  ["Sapiens", "Yuval Noah Harari", "Chapitre 12", "L'unification de l'humanite", "2:15:47", "16 juin 2025", "Revolution cognitive", 5, "/demos/papyrus/assets/images/books/cover-secret-egypte.png"],
  ["Le pouvoir du moment present", "Eckhart Tolle", "Chapitre 5", "Au-dela de l'esprit", "0:33:09", "15 juin 2025", "Vivre l'instant", 4, "/demos/papyrus/assets/images/books/cover-memoire-egyptien.png"],
  ["L'art de la clarte mentale", "Olivier Roland", "Chapitre 4", "Se liberer du superflu", "0:28:55", "15 juin 2025", "Clarte et focus", 5, "/demos/papyrus/assets/images/books/cover-ombre-pharaons.png"],
  ["Atomic Habits", "James Clear", "Chapitre 8", "Rendre ca satisfaisant", "1:12:03", "14 juin 2025", "Petites habitudes", 4, "/demos/papyrus/assets/images/books/cover-voie-sages.png"]
] as const;

function CoverThumb({ title, image }: { title: string; image: string }) {
  return (
    <div className="relative size-16 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-xl">
      <Image src={image} alt={`Couverture de ${title}`} fill sizes="64px" className="object-cover" />
    </div>
  );
}


function RatingStars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-0.5 text-primary">
      {Array.from({ length: 5 }).map((_, index) =>
        index < value ? (
          <FaStar className="size-4" key={index} />
        ) : (
          <FaRegStar className="size-4 text-white/25" key={index} />
        )
      )}
    </div>
  );
}

export default function BookmarksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="lg:pl-64">
        <TopNav />

        <main className="px-4 py-6 pb-36 sm:px-6 lg:px-8 lg:py-8">
          <section className="mb-8 border-t border-white/5 pt-8">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
              <div className="flex items-start gap-5">
                <div className="grid size-12 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <FaBookmark className="size-6" />
                </div>
                <div>
                  <h1 className="text-3xl font-black tracking-tight text-white">Mes marque-pages</h1>
                  <p className="mt-2 text-sm text-white/55">
                    Retrouvez rapidement vos passages importants
                  </p>
                </div>
              </div>

              <div className="relative w-full max-w-xl">
                <FaMagnifyingGlass className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/35" />
                <input
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-primary/50 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(255,138,42,0.1)]"
                  placeholder="Rechercher dans vos marque-pages..."
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                {filters.map((filter) => (
                  <Button
                    className={`h-11 rounded-full border px-5 text-sm font-bold ${
                      filter.active
                        ? "border-primary/25 bg-primary/10 text-primary hover:bg-primary/15"
                        : "border-white/10 bg-white/[0.035] text-white/60 hover:bg-white/[0.06] hover:text-white"
                    }`}
                    key={filter.label}
                    variant="outline"
                  >
                    {filter.label} ({filter.count})
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                className="h-11 justify-between gap-5 rounded-xl border-white/10 bg-white/[0.035] px-5 text-sm font-medium text-white/65 hover:bg-white/[0.06]"
              >
                Trier par : Plus recents
                <FaChevronDown className="size-3 text-white/45" />
              </Button>
            </div>
          </section>

          <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#10100f]/70 shadow-2xl">
            <div className="grid grid-cols-[1.6fr_1fr_0.58fr_1.05fr_0.78fr_1fr] border-b border-white/10 px-5 py-4 text-sm text-white/60 max-xl:hidden">
              <span>Livre</span>
              <span>Chapitre</span>
              <span>Heure</span>
              <span>Titre personnalise</span>
              <span className="border-b border-primary pb-4">Note</span>
              <span>Actions</span>
            </div>

            <div className="divide-y divide-white/[0.07]">
              {bookmarks.map(([book, author, chapter, chapterTitle, time, date, note, rating, image]) => (
                <article
                  className="grid grid-cols-[1.6fr_1fr_0.58fr_1.05fr_0.78fr_1fr] items-center gap-5 px-5 py-5 transition hover:bg-white/[0.025] max-xl:grid-cols-1 max-xl:gap-4"
                  key={`${book}-${time}`}
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <CoverThumb image={image} title={book} />
                    <div className="min-w-0">
                      <h2 className="truncate text-base font-bold text-white">{book}</h2>
                      <p className="mt-1 truncate text-sm text-white/60">{author}</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-bold text-white">{chapter}</p>
                    <p className="mt-1 text-sm text-white/50">{chapterTitle}</p>
                  </div>

                  <div>
                    <p className="font-medium tabular-nums text-white/80">{time}</p>
                    <p className="mt-1 text-sm text-white/45">{date}</p>
                  </div>

                  <p className="text-sm text-white/75">{note}</p>
                  <RatingStars value={rating} />

                  <div className="flex items-center gap-4">
                    <button className="text-white/65 transition hover:text-primary" aria-label="Modifier">
                      <FaPen className="size-4" />
                    </button>
                    <button className="text-white/65 transition hover:text-red-400" aria-label="Supprimer">
                      <FaTrash className="size-4" />
                    </button>
                    <Button
                      variant="outline"
                      className="ml-auto h-10 gap-2 rounded-lg border-primary/40 bg-primary/5 px-4 text-sm font-bold text-primary hover:bg-primary/10"
                    >
                      <FaPlay className="size-3" />
                      Reprendre
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <footer className="mt-8 flex flex-col gap-4 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-center gap-3">
              <Button variant="outline" size="icon" className="size-9 rounded-lg border-white/10 bg-white/[0.025] text-white/40">
                <FaChevronLeft className="size-3" />
              </Button>
              {[1, 2, 3].map((page) => (
                <Button
                  className={`size-9 rounded-lg border text-sm ${
                    page === 1
                      ? "border-primary/40 bg-primary/10 text-primary"
                      : "border-transparent bg-transparent text-white/60 hover:bg-white/[0.05]"
                  }`}
                  key={page}
                  variant="outline"
                >
                  {page}
                </Button>
              ))}
              <span className="px-3">...</span>
              <Button variant="ghost" className="size-9 rounded-lg text-white/35">
                5
              </Button>
              <Button variant="outline" size="icon" className="size-9 rounded-lg border-white/10 bg-white/[0.025] text-white/70">
                <FaChevronRight className="size-3" />
              </Button>
            </div>

            <p>Affichage 1 a 6 sur 24 marque-pages</p>
          </footer>
        </main>
      </div>

      <PlayerBar />
    </div>
  );
}
