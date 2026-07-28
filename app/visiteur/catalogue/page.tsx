"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useSyncExternalStore } from "react";
import {
  FaBarsStaggered,
  FaChevronDown,
  FaChevronUp,
  FaCirclePlay,
  FaClock,
  FaForwardStep,
  FaHeadphones,
  FaHeart,
  FaMicrophone,
  FaPause,
  FaRepeat,
  FaRotateRight,
  FaShuffle,
  FaStar,
  FaVolumeHigh,
  FaXmark
} from "react-icons/fa6";
import { PublicSearchBar } from "@/components/visitor/public-search-bar";
import { VisitorMobileMenu } from "@/components/visitor/visitor-mobile-menu";
import { assetPath, publicBooks, publicGenres } from "@/lib/public-demo-data";
import { normalizeSearchText, visitorSearchItems } from "@/lib/visitor-search-data";

const catalogBooks = [
  {
    ...publicBooks[0],
    title: "Les Jardins de Minuit",
    author: "Clara Veyrac",
    narrator: "Noe Lamberti",
    rating: "4,8 (2 345)",
    duration: "12h 22min",
    genreSlug: "developpement-personnel",
    genreLabel: "Développement personnel"
  },
  {
    ...publicBooks[1],
    title: "L'Archive des Brumes",
    author: "Mathieu Lenoir",
    narrator: "Elise Marechal",
    rating: "4,7 (1 892)",
    duration: "14h 05min",
    genreSlug: "romans-fiction",
    genreLabel: "Romans & Fiction"
  },
  {
    ...publicBooks[2],
    title: "Le Dernier Atlas",
    author: "Arthur Delaunay",
    narrator: "Pierre-Henri Prelot",
    rating: "4,6 (1 563)",
    duration: "10h 48min",
    genreSlug: "business-marketing",
    genreLabel: "Business & Marketing"
  },
  {
    ...publicBooks[3],
    title: "Memoires d'une Ville Bleue",
    author: "Lea Morvan",
    narrator: "Camille Laurent",
    rating: "4,7 (1 201)",
    duration: "11h 37min",
    genreSlug: "histoire",
    genreLabel: "Histoire"
  },
  {
    ...publicBooks[4],
    title: "La Chambre des Echos",
    author: "Antoine Blanchard",
    narrator: "Julien Chatelet",
    rating: "4,5 (987)",
    duration: "9h 26min",
    genreSlug: "philosophie",
    genreLabel: "Philosophie"
  },
  {
    ...publicBooks[1],
    id: "le-secret-egypte",
    title: "Sillage d'Opale",
    author: "Sophie Talbot",
    narrator: "Benoit Marchand",
    rating: "4,6 (812)",
    duration: "8h 59min",
    genreSlug: "science-technologie",
    genreLabel: "Science & Technologie"
  }
];

const searchResultBooks = visitorSearchItems.slice(0, 5).map((item, index) => ({
  ...publicBooks[index % publicBooks.length],
  id: publicBooks[index % publicBooks.length].id,
  title: item.title,
  author: item.author,
  narrator: item.narrator,
  cover: item.cover,
  rating: ["4,6 (312)", "4,3 (198)", "4,4 (156)", "4,5 (221)", "4,2 (133)"][index] ?? "4,5 (120)",
  duration: ["11h 42 min", "9h 18 min", "13h 05 min", "8h 47 min", "10h 23 min"][index] ?? "9h 30 min",
  genreSlug: "romans-fiction",
  genreLabel: "Romans & Fiction",
  searchKeywords: item.keywords
}));

const footerColumns = [
  ["Catalogue", "Tous les livres", "Genres", "Auteurs", "Narrateurs"],
  ["A propos", "Qui sommes-nous ?", "Notre mission", "Presse", "Carrieres"],
  ["Aide", "Centre d'aide", "Nous contacter", "Conditions d'utilisation", "Confidentialite"]
];

function subscribeToSearch(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener("papyrus-search-change", callback);

  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("papyrus-search-change", callback);
  };
}

function getUrlSearch() {
  return new URLSearchParams(window.location.search).get("search") ?? "";
}

function getServerSearch() {
  return "";
}

function FilterLink({
  label,
  href,
  checked = false
}: {
  label: string;
  href: string;
  checked?: boolean;
}) {
  return (
    <Link href={href} className="flex items-center gap-3 text-sm text-white/72 transition hover:text-[#ff7a00]">
      <span className={`grid size-4 place-items-center rounded border ${checked ? "border-[#ff7a00] bg-[#ff7a00]" : "border-white/18 bg-white/[0.03]"}`}>
        {checked && <span className="size-1.5 rounded-full bg-white" />}
      </span>
      {label}
    </Link>
  );
}

function FilterButton({
  label,
  checked,
  onClick
}: {
  label: string;
  checked: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-3 text-left text-sm text-white/72 transition hover:text-[#ff7a00]"
    >
      <span className={`grid size-4 place-items-center rounded border ${checked ? "border-[#ff7a00] bg-[#ff7a00]" : "border-white/18 bg-white/[0.03]"}`}>
        {checked && <span className="size-1.5 rounded-full bg-white" />}
      </span>
      {label}
    </button>
  );
}

function getSearchableText(book: (typeof catalogBooks)[number] | (typeof searchResultBooks)[number]) {
  return [
    book.title,
    book.author,
    book.narrator,
    book.genreLabel,
    book.category,
    "searchKeywords" in book ? book.searchKeywords.join(" ") : ""
  ].join(" ");
}

export default function VisitorCatalogPage() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const submittedSearch = useSyncExternalStore(subscribeToSearch, getUrlSearch, getServerSearch);
  const normalizedSubmittedSearch = normalizeSearchText(submittedSearch);
  const filteredBooks = useMemo(() => {
    const sourceBooks = normalizedSubmittedSearch ? [...searchResultBooks, ...catalogBooks] : catalogBooks;

    return sourceBooks.filter((book) => {
      const matchesGenre = !selectedGenre || book.genreSlug === selectedGenre;
      const matchesSearch = !normalizedSubmittedSearch || normalizeSearchText(getSearchableText(book)).includes(normalizedSubmittedSearch);

      return matchesGenre && matchesSearch;
    });
  }, [normalizedSubmittedSearch, selectedGenre]);
  const selectedGenreLabel = publicGenres.find((genre) => genre.slug === selectedGenre)?.label;
  const hasActiveFilters = Boolean(selectedGenre || submittedSearch.trim());

  function updateUrlSearch(nextSearch: string) {
    const params = new URLSearchParams(window.location.search);

    if (nextSearch.trim()) {
      params.set("search", nextSearch.trim());
    } else {
      params.delete("search");
    }

    const query = params.toString();
    window.history.replaceState(null, "", query ? `${window.location.pathname}?${query}` : window.location.pathname);
    window.dispatchEvent(new Event("papyrus-search-change"));
  }

  function resetFilters() {
    setSelectedGenre(null);
    updateUrlSearch("");
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080a0d] pb-24 text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07090c]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[112rem] items-center gap-5 px-5 sm:px-8 lg:px-14">
          <Link href="/" className="flex w-44 shrink-0 items-center" aria-label="Accueil PAPYRUS">
            <Image src={assetPath("/assets/logos/logo-white.png")} alt="PAPYRUS" width={150} height={74} priority className="h-14 w-auto object-contain" />
          </Link>

          <nav className="hidden h-full items-center gap-8 text-sm font-bold text-white/82 lg:flex">
            {[
              ["Accueil", "/"],
              ["Catalogue", "/visiteur/catalogue"],
              ["Nouveautes", "/visiteur/nouveautes"],
              ["Premium", "/visiteur/premium"],
              ["Aide", "/visiteur/aide"],
              ["Recherche", "/visiteur/catalogue"]
            ].map(([label, href], index) => (
              <Link
                key={label}
                href={href}
                className={`flex h-full items-center border-b-2 transition ${
                  (submittedSearch ? label === "Recherche" : index === 1)
                    ? "border-[#ff7a00] text-white"
                    : "border-transparent hover:border-[#ff7a00]/50 hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <PublicSearchBar
            key={submittedSearch || "empty-search"}
            className="ml-auto hidden xl:flex"
            initialValue={submittedSearch}
            onSearch={updateUrlSearch}
          />

          <div className="ml-auto flex shrink-0 items-center gap-3 xl:ml-0">
            <VisitorMobileMenu />
            <Link href="/connexion" className="hidden rounded-xl px-4 py-3 text-sm font-bold text-white/82 transition hover:bg-white/8 sm:block">
              Connexion
            </Link>
            <Link href="/visiteur/premium/mensuel" className="hidden rounded-lg bg-[#ff7a00] px-5 py-3 text-sm font-black text-white shadow-[0_14px_28px_rgba(255,122,0,0.25)] transition hover:bg-[#ff8c22] sm:inline-flex">
              Essayer Premium
            </Link>
          </div>
        </div>
      </header>

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(255,122,0,0.12),transparent_30%),radial-gradient(circle_at_82%_10%,rgba(44,117,255,0.09),transparent_26%)]" />

      <div className="relative mx-auto grid max-w-[112rem] gap-10 px-5 pt-32 sm:px-8 lg:grid-cols-[18rem_1fr] lg:px-14">
        <aside className="h-fit rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-black">Filtres</h2>
            <button type="button" onClick={resetFilters} className="inline-flex items-center gap-2 text-sm font-bold text-[#ff7a00]">
              <FaRotateRight className="size-3" />
              Reinitialiser
            </button>
          </div>

          <div className="space-y-9">
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-black">Genre</h3>
                <FaChevronUp className="size-3 text-white/70" />
              </div>
              <div id="genres" className="grid gap-3">
                <FilterButton label="Tous les genres" checked={selectedGenre === null} onClick={() => setSelectedGenre(null)} />
                {publicGenres.slice(0, 5).map((genre) => (
                  <FilterButton key={genre.slug} label={genre.label} checked={selectedGenre === genre.slug} onClick={() => setSelectedGenre(genre.slug)} />
                ))}
              </div>
              <details className="group mt-3 grid gap-3">
                <summary className="order-2 inline-flex cursor-pointer list-none items-center gap-2 text-sm font-bold text-[#ff7a00] marker:hidden">
                  Voir tout
                  <FaChevronDown className="size-3 transition group-open:rotate-180" />
                </summary>
                <div className="order-1 grid gap-3">
                  {publicGenres.slice(5).map((genre) => (
                    <FilterButton key={genre.slug} label={genre.label} checked={selectedGenre === genre.slug} onClick={() => setSelectedGenre(genre.slug)} />
                  ))}
                </div>
              </details>
            </section>

            <section>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-black">Langue</h3>
                <FaChevronUp className="size-3 text-white/70" />
              </div>
              <div className="grid gap-3">
                {["Tous les langues", "Francais", "Anglais", "Espagnol", "Allemand"].map((label, index) => (
                  <FilterLink key={label} label={label} href={index === 0 ? "/visiteur/catalogue" : `/visiteur/catalogue?langue=${label.toLowerCase()}`} checked={index === 0} />
                ))}
              </div>
              <Link href="/visiteur/catalogue?filtre=langues" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#ff7a00]">
                Voir plus <FaChevronDown className="size-3" />
              </Link>
            </section>

            <section>
              <h3 className="mb-5 font-black">Duree</h3>
              <div className="relative h-1 rounded-full bg-white/16">
                <div className="absolute inset-y-0 left-0 w-full rounded-full bg-[#ff7a00]" />
                <span className="absolute -top-1.5 left-0 size-4 rounded-full bg-[#ff7a00]" />
                <span className="absolute -top-1.5 right-0 size-4 rounded-full bg-[#ff7a00]" />
              </div>
              <div className="mt-3 flex justify-between text-sm text-white/60">
                <span>0 h</span>
                <span>60 h+</span>
              </div>
            </section>

            {[
              ["Prix", "/visiteur/catalogue?filtre=prix"],
              ["Note", "/visiteur/catalogue?filtre=note"],
              ["Narrateur", "/visiteur/catalogue?filtre=narrateur"]
            ].map(([label, href]) => (
              <Link key={label} href={href} className="flex items-center justify-between transition hover:text-[#ff7a00]">
                <h3 className="font-black">{label}</h3>
                <FaChevronDown className="size-3 text-white/70" />
              </Link>
            ))}
          </div>
        </aside>

        <section>
          <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-7 lg:flex-row lg:items-start">
            <div>
              <h1 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                {submittedSearch ? (
                  <>
                    Resultats pour <em className="font-black italic">{submittedSearch}</em>
                  </>
                ) : (
                  "Catalogue audio"
                )}
              </h1>
              <p className="mt-3 text-lg text-white/58">
                {submittedSearch
                  ? `${filteredBooks.length} livres audio${selectedGenreLabel ? ` dans ${selectedGenreLabel}` : ""}`
                  : selectedGenreLabel
                    ? `Selection ${selectedGenreLabel}`
                    : "Des milliers d'histoires a ecouter, ou que vous soyez."}
              </p>
            </div>
            <Link href={submittedSearch && filteredBooks[0] ? `/visiteur/livre/${filteredBooks[0].id}` : "/visiteur/catalogue"} className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#ff7a00] px-7 text-base font-black text-white shadow-[0_16px_32px_rgba(255,122,0,0.24)] transition hover:bg-[#ff8c22]">
              <FaCirclePlay />
              {submittedSearch ? "Ecouter le premier extrait" : "Explorer les nouveautes"}
            </Link>
          </div>

          <div className="mt-7 mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-3 text-base text-white/58">
              {filteredBooks.length} {filteredBooks.length > 1 ? "resultats" : "resultat"}
              {submittedSearch && (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/14 px-3 py-2 text-sm text-white/78">
                  {submittedSearch}
                  <button type="button" onClick={resetFilters} className="text-white/45 transition hover:text-[#ff7a00]" aria-label="Effacer la recherche">
                    <FaXmark className="size-3" />
                  </button>
                </span>
              )}
              {hasActiveFilters && (
                <button type="button" onClick={resetFilters} className="ml-3 text-sm font-bold text-[#ff7a00]">
                  Tout afficher
                </button>
              )}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/58">Trier par</span>
              <Link href="/visiteur/catalogue?tri=plus-ecoutes" className="inline-flex min-h-11 items-center gap-8 rounded-md border border-white/14 bg-white/[0.035] px-4 text-sm font-bold transition hover:border-[#ff7a00]/50">
                Les plus ecoutes
                <FaChevronDown className="size-3 text-white/58" />
              </Link>
            </div>
          </div>

          <div className={`grid gap-5 ${submittedSearch ? "grid-cols-1" : "xl:grid-cols-2"}`}>
            {filteredBooks.map((book) => (
              <Link key={`${book.id}-${book.title}`} href={`/visiteur/livre/${book.id}`} className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] transition hover:-translate-y-1 hover:border-[#ff7a00]/45 hover:bg-white/[0.065]">
                <div className={`grid gap-5 p-4 ${submittedSearch ? "sm:grid-cols-[14rem_minmax(0,1fr)]" : "sm:grid-cols-[11rem_minmax(0,1fr)]"}`}>
                  <div className="relative aspect-square overflow-hidden rounded-md bg-white/8">
                    <Image src={book.cover} alt={book.title} fill sizes="176px" className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="grid min-w-0 grid-rows-[auto_1fr_auto]">
                    <div className="min-w-0">
                      <span className="mb-4 inline-flex w-fit rounded bg-[#ff7a00]/18 px-2 py-1 text-xs font-black uppercase text-[#ff9b42]">
                        Premium
                      </span>
                      <h2 className="line-clamp-2 text-lg font-black leading-6">{book.title}</h2>
                      <p className="mt-2 truncate text-sm text-white/58">{book.author}</p>
                    </div>

                    <div className="mt-4 grid min-w-0 gap-3 text-sm text-white/70">
                      <div className="grid grid-cols-[1rem_3.25rem_minmax(0,1fr)] items-start gap-2">
                        <FaMicrophone className="mt-0.5 text-white/52" />
                        <span>Lu par</span>
                        <strong className="min-w-0 truncate text-white">{book.narrator}</strong>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="shrink-0 text-white/52" />
                        <span className="truncate">{book.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaStar className="shrink-0 text-[#ff7a00]" />
                        <span className="truncate">{book.rating}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <span className="grid size-11 place-items-center rounded-full bg-[#ff7a00] text-white shadow-[0_12px_24px_rgba(255,122,0,0.28)]">
                        <FaCirclePlay />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-white/5 bg-white/[0.035] px-5 py-3 text-sm font-bold text-[#ff7a00]">
                  <span className="inline-flex items-center gap-2">
                    <FaHeadphones />
                    Inclus avec Premium
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-8 text-center">
              <h2 className="text-xl font-black">Aucun livre pour ce genre</h2>
              <p className="mt-2 text-white/58">Cette simulation ne contient pas encore de livre dans cette categorie.</p>
              <button type="button" onClick={() => setSelectedGenre(null)} className="mt-5 rounded-lg bg-[#ff7a00] px-5 py-3 text-sm font-black text-white">
                Afficher tous les livres
              </button>
            </div>
          )}
        </section>
      </div>

      <footer className="relative mx-auto mt-16 max-w-[112rem] px-5 pb-9 sm:px-8 lg:px-14">
        <div className="grid gap-10 border-t border-white/10 pt-8 text-sm text-white/54 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Image src={assetPath("/assets/logos/logo-white.png")} alt="PAPYRUS" width={130} height={60} className="h-12 w-auto object-contain" />
            <p className="mt-3 max-w-xs">La plateforme des livres audio qui donnent voix a l&apos;imaginaire.</p>
          </div>
          {footerColumns.map(([title, ...links]) => (
            <div key={title}>
              <h3 className="font-black text-white">{title}</h3>
              <div className="mt-2 grid gap-1">
                {links.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          ))}
          <div>
            <h3 className="font-black text-white">Suivez-nous</h3>
            <p className="mt-2">Instagram</p>
            <p>Facebook</p>
            <p>YouTube</p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#07090c]/96 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[112rem] items-center gap-5 px-5 sm:px-8 lg:px-14">
          <div className="relative size-14 shrink-0 overflow-hidden rounded-md">
            <Image src={catalogBooks[0].cover} alt={catalogBooks[0].title} fill sizes="56px" className="object-cover" />
          </div>
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-sm font-black">{catalogBooks[0].title}</p>
            <p className="truncate text-xs text-white/52">{catalogBooks[0].author} - Chapitre 3</p>
          </div>
          <Link href="/connexion" className="hidden text-white/60 transition hover:text-[#ff7a00] md:block" aria-label="Favori"><FaHeart /></Link>
          <div className="mx-auto flex items-center gap-5 text-white/68">
            <FaShuffle className="hidden sm:block" />
            <FaForwardStep className="rotate-180" />
            <Link href="/visiteur/livre/la-chute-des-geants" className="grid size-12 place-items-center rounded-full bg-white text-black" aria-label="Lire l'extrait">
              <FaPause />
            </Link>
            <FaForwardStep />
            <FaRepeat className="hidden sm:block" />
          </div>
          <div className="hidden min-w-64 items-center gap-4 text-sm text-white/72 lg:flex">
            <span>12:45 / 34:18</span>
            <div className="h-1 flex-1 rounded-full bg-white/14">
              <div className="h-full w-1/3 rounded-full bg-[#ff7a00]" />
            </div>
          </div>
          <div className="hidden items-center gap-5 text-white/62 md:flex">
            <Link href="/visiteur/aide" aria-label="Aide" className="transition hover:text-[#ff7a00]"><FaVolumeHigh /></Link>
            <Link href="/visiteur/catalogue" aria-label="File d'attente" className="transition hover:text-[#ff7a00]"><FaBarsStaggered /></Link>
          </div>
        </div>
      </div>
    </main>
  );
}
