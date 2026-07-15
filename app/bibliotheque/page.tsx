import Image from "next/image";
import {
  FaCircleCheck,
  FaChevronDown,
  FaDownload,
  FaEllipsis,
  FaFolderPlus,
  FaGrip,
  FaHeart,
  FaList,
  FaPlay,
  FaTableCellsLarge
} from "react-icons/fa6";
import { PlayerBar } from "@/components/audio/player-bar";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { Button } from "@/components/ui/button";

const continueBooks = [
  ["L'Alchimiste", "Chapitre 7 sur 28", 34, "/demos/papyrus/assets/images/books/cover-chute-geants.png"],
  ["Sapiens", "Chapitre 12 sur 26", 24, "/demos/papyrus/assets/images/books/cover-secret-egypte.png"],
  ["Atomic Habits", "Chapitre 5 sur 20", 29, "/demos/papyrus/assets/images/books/cover-voie-sages.png"],
  ["Devenir", "Chapitre 3 sur 18", 18, "/demos/papyrus/assets/images/books/cover-empire-tenebres.png"],
  ["L'art de la clarte mentale", "Chapitre 4 sur 16", 31, "/demos/papyrus/assets/images/books/cover-ombre-pharaons.png"]
] as const;

const libraryBooks = [
  ["Le pouvoir du moment present", "Eckhart Tolle", "En cours", "65%", 65, "/demos/papyrus/assets/images/books/cover-memoire-egyptien.png"],
  ["Les 7 habitudes des gens efficaces", "Stephen R. Covey", "En cours", "40%", 40, "/demos/papyrus/assets/images/books/cover-secret-egypte.png"],
  ["Le Petit Prince", "Antoine de Saint-Exupery", "Termine", "", 100, "/demos/papyrus/assets/images/books/cover-empire-tenebres.png"],
  ["L'homme qui voulait etre heureux", "Laurent Gounelle", "En cours", "20%", 20, "/demos/papyrus/assets/images/books/cover-chute-geants.png"],
  ["La sagesse des emotions", "Dalai Lama", "Non commence", "", 0, "/demos/papyrus/assets/images/books/cover-voie-sages.png"]
] as const;

const downloads = [
  ["Sapiens", "Yuval Noah Harari", "/demos/papyrus/assets/images/books/cover-secret-egypte.png"],
  ["Atomic Habits", "James Clear", "/demos/papyrus/assets/images/books/cover-voie-sages.png"],
  ["Devenir", "Michelle Obama", "/demos/papyrus/assets/images/books/cover-empire-tenebres.png"],
  ["L'Alchimiste", "Paulo Coelho", "/demos/papyrus/assets/images/books/cover-chute-geants.png"]
] as const;

const filters = ["Tous", "En cours", "Termines", "Non commences", "Telecharges"];

function Cover({
  title,
  image,
  className = ""
}: {
  title: string;
  image: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] shadow-xl ${className}`}>
      <Image src={image} alt={`Couverture de ${title}`} fill sizes="(max-width: 768px) 50vw, 220px" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  );
}


export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="lg:pl-64">
        <TopNav />

        <main className="grid min-h-[calc(100vh-5rem)] grid-cols-1 pb-36 xl:grid-cols-[1fr_22rem]">
          <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            <header className="mb-8">
              <h1 className="text-3xl font-black tracking-tight text-white">Ma bibliotheque</h1>
              <p className="mt-2 text-white/60">
                Retrouvez tous vos livres audio au meme endroit.
              </p>
            </header>

            <section className="rounded-2xl border border-white/10 bg-[#10100f]/70 p-5 shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-black text-white">Continuer l&apos;ecoute</h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
                {continueBooks.map(([title, chapter, progress, image]) => (
                  <article
                    className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] transition hover:border-primary/30"
                    key={title}
                  >
                    <Cover title={title} image={image} className="aspect-[3/4] rounded-b-none" />
                    <div className="p-3">
                      <div className="mb-2 h-1 rounded-full bg-white/15">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
                      </div>
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-bold text-white">{title}</h3>
                          <p className="mt-1 text-xs text-white/50">{chapter}</p>
                        </div>
                        <FaEllipsis className="mt-1 shrink-0 text-white/45" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-5 rounded-2xl border border-white/10 bg-[#10100f]/70 p-5 shadow-2xl">
              <div className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="mr-3 text-lg font-black text-white">Mes livres</h2>
                  {filters.map((filter, index) => (
                    <Button
                      className={`h-9 rounded-full border px-4 text-xs font-bold ${
                        index === 0
                          ? "border-primary/30 bg-primary/10 text-primary"
                          : "border-white/10 bg-white/[0.03] text-white/55 hover:bg-white/[0.06] hover:text-white"
                      }`}
                      key={filter}
                      variant="outline"
                    >
                      {filter}
                    </Button>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Button variant="ghost" className="gap-2 text-sm text-white/60 hover:text-white">
                    Trier par : <span className="text-white/80">Plus recent</span>
                    <FaChevronDown className="size-3" />
                  </Button>
                  <div className="flex rounded-xl border border-white/10 bg-white/[0.03] p-1">
                    <Button size="icon" className="size-9 rounded-lg bg-primary/15 text-primary">
                      <FaTableCellsLarge className="size-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="size-9 text-white/45">
                      <FaList className="size-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
                {libraryBooks.map(([title, author, status, percentText, progress, image]) => (
                  <article
                    className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] transition hover:border-primary/30"
                    key={title}
                  >
                    <div className="relative">
                      <Cover title={title} image={image} className="aspect-[3/4] rounded-b-none" />
                      <button className="absolute right-3 top-3 grid size-8 place-items-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur">
                        <FaDownload className="size-3" />
                      </button>
                    </div>
                    <div className="p-3">
                      <h3 className="line-clamp-2 text-sm font-bold text-white">{title}</h3>
                      <p className="mt-1 truncate text-sm text-white/50">{author}</p>
                      <div className="mt-4 flex items-center justify-between text-xs text-white/55">
                        <span>{status}</span>
                        {percentText && <span>{percentText}</span>}
                      </div>
                      <div className="mt-2 h-1 rounded-full bg-white/15">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-5 rounded-2xl border border-white/10 bg-[#10100f]/70 p-5 shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-black text-white">Telechargements</h2>
                <Button variant="link" className="h-auto p-0 text-sm font-bold text-primary">
                  Tout voir
                </Button>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {downloads.map(([title, author, image]) => (
                  <article className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-3" key={title}>
                    <Cover title={title} image={image} className="size-20" />
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-bold text-white">{title}</h3>
                      <p className="mt-1 truncate text-xs text-white/50">{author}</p>
                    </div>
                    <FaDownload className="ml-auto shrink-0 text-white/45" />
                  </article>
                ))}
              </div>
            </section>
          </section>

          <aside className="hidden border-l border-white/10 bg-[#080706]/80 px-6 py-8 xl:block">
            <Cover title="L'Alchimiste" image="/demos/papyrus/assets/images/books/cover-chute-geants.png" className="aspect-[3/4] w-full" />
            <div className="mt-6">
              <h2 className="text-2xl font-black text-white">L&apos;Alchimiste</h2>
              <p className="mt-2 text-lg text-white/70">Paulo Coelho</p>
              <p className="mt-2 text-white/60">Narrateur : Bernard Gabay</p>
              <Button className="mt-6 h-13 w-full gap-3 rounded-xl bg-primary text-base font-black text-white hover:bg-primary/90">
                <FaPlay className="size-4" />
                Ecouter maintenant
              </Button>
            </div>

            <div className="mt-7 border-t border-white/10 pt-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-bold text-white">Progression</span>
                <span className="font-black text-primary">25%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/15">
                <div className="h-full w-1/4 rounded-full bg-primary" />
              </div>
              <p className="mt-4 text-sm text-white/50">Chapitre 7 sur 28 · 1h 05m / 4h 21m</p>
            </div>

            <div className="mt-7 border-t border-white/10 pt-6">
              <h3 className="mb-4 font-bold text-white">Informations</h3>
              {[
                ["Categorie", "Developpement personnel"],
                ["Langue", "Francais"],
                ["Duree totale", "4h 21m"],
                ["Publie le", "16 mai 1988"]
              ].map(([label, value]) => (
                <div className="mb-3 flex justify-between gap-4 text-sm" key={label}>
                  <span className="text-white/45">{label}</span>
                  <span className="text-right text-white/70">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-white/10 pt-6">
              <h3 className="mb-4 font-bold text-white">Actions</h3>
              {[
                [FaHeart, "Ajouter aux favoris"],
                [FaFolderPlus, "Ajouter a une collection"],
                [FaCircleCheck, "Marquer comme termine"],
                [FaGrip, "Plus d'options"]
              ].map(([Icon, label]) => (
                <button className="mb-4 flex items-center gap-3 text-sm text-white/70 transition hover:text-primary" key={label as string}>
                  <Icon className="size-4" />
                  {label as string}
                </button>
              ))}
            </div>
          </aside>
        </main>
      </div>

      <PlayerBar />
    </div>
  );
}
