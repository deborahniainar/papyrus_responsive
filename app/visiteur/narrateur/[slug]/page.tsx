import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaBarsStaggered,
  FaBookOpen,
  FaChevronRight,
  FaCirclePlay,
  FaClock,
  FaForwardStep,
  FaHeart,
  FaMicrophone,
  FaPause,
  FaRegStar,
  FaRepeat,
  FaShuffle,
  FaStar,
  FaUserGroup,
  FaVolumeHigh,
  FaWaveSquare
} from "react-icons/fa6";
import { PublicSearchBar } from "@/components/visitor/public-search-bar";
import { VisitorMobileMenu } from "@/components/visitor/visitor-mobile-menu";
import { assetPath, publicBooks } from "@/lib/public-demo-data";
import { getBooksByNarrator, getNarratorBySlug, publicNarrators } from "@/lib/public-narrators";

const waveform = [
  24, 38, 29, 44, 34, 52, 28, 41, 57, 31, 39, 48, 35, 45, 30, 54, 33, 42, 51, 37, 46, 32,
  56, 40, 35, 50, 36, 43, 55, 39, 49, 34, 52, 37, 45, 40, 33, 47, 39, 51, 42, 36, 48, 34,
  44, 38, 50, 36, 43, 35, 46, 39, 42, 34, 40, 31, 37, 29
];

const footerColumns = [
  ["Catalogue", "Tous les livres", "Genres", "Auteurs", "Narrateurs"],
  ["A propos", "Qui sommes-nous ?", "Notre mission", "Presse", "Carrieres"],
  ["Aide", "Centre d'aide", "Nous contacter", "Conditions d'utilisation", "Confidentialite"]
];

export function generateStaticParams() {
  return publicNarrators.map((narrator) => ({ slug: narrator.slug }));
}

function Header() {
  return (
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
            ["Aide", "/visiteur/aide"]
          ].map(([label, href], index) => (
            <Link key={label} href={href} className={`flex h-full items-center border-b-2 transition ${index === 1 ? "border-[#ff7a00] text-white" : "border-transparent hover:border-[#ff7a00]/50 hover:text-white"}`}>
              {label}
            </Link>
          ))}
        </nav>
        <PublicSearchBar className="ml-auto hidden xl:flex" />
        <div className="ml-auto flex shrink-0 items-center gap-3 xl:ml-0">
          <VisitorMobileMenu />
          <Link href="/connexion" className="hidden rounded-xl px-4 py-3 text-sm font-bold text-white/82 transition hover:bg-white/8 sm:block">Connexion</Link>
          <Link href="/visiteur/premium/mensuel" className="hidden rounded-lg bg-[#ff7a00] px-5 py-3 text-sm font-black text-white shadow-[0_14px_28px_rgba(255,122,0,0.25)] transition hover:bg-[#ff8c22] sm:inline-flex">Essayer Premium</Link>
        </div>
      </div>
    </header>
  );
}

function BookCard({
  book,
  narratorName
}: {
  book: ReturnType<typeof getBooksByNarrator>[number];
  narratorName: string;
}) {
  return (
    <Link href={`/visiteur/livre/${book.id}`} className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] transition hover:-translate-y-1 hover:border-[#ff7a00]/45 hover:bg-white/[0.065]">
      <div className="grid gap-5 p-4 sm:grid-cols-[16rem_minmax(0,1fr)]">
        <div className="relative aspect-[1.18] overflow-hidden rounded-md bg-white/8">
          <Image src={book.cover} alt={book.title} fill sizes="260px" className="object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="grid min-w-0 content-between py-2">
          <div>
            <span className="mb-3 inline-flex rounded bg-[#ff7a00]/18 px-2 py-1 text-xs font-black uppercase text-[#ff9b42]">Premium</span>
            <h3 className="line-clamp-2 text-lg font-black">{book.title}</h3>
            <p className="mt-2 text-sm text-white/58">{book.author}</p>
          </div>
          <div className="mt-5 grid gap-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-3"><FaMicrophone className="text-white/52" /> Lu par <strong className="text-white">{narratorName}</strong></span>
            <span className="inline-flex items-center gap-3"><FaClock className="text-white/52" /> {book.duration}</span>
            <span className="inline-flex items-center gap-3"><FaStar className="text-[#ff7a00]" /> {book.rating}</span>
          </div>
          <span className="mt-5 grid size-12 place-items-center justify-self-end rounded-full bg-[#ff7a00] text-white shadow-[0_12px_24px_rgba(255,122,0,0.32)]">
            <FaCirclePlay />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default async function PublicNarratorPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const narrator = getNarratorBySlug(slug);

  if (!narrator) notFound();

  const narratedBooks = getBooksByNarrator(narrator.slug);
  const portrait = publicBooks[narrator.portraitBookIndex] ?? publicBooks[0];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080a0d] pb-24 text-white">
      <Header />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(255,122,0,0.12),transparent_30%),radial-gradient(circle_at_84%_10%,rgba(44,117,255,0.08),transparent_26%)]" />

      <section className="relative mx-auto max-w-[112rem] px-5 pt-28 sm:px-8 lg:px-14">
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/48">
          <Link href="/" className="transition hover:text-[#ff7a00]">Accueil</Link>
          <FaChevronRight className="size-3" />
          <Link href="/visiteur/catalogue" className="transition hover:text-[#ff7a00]">Catalogue</Link>
          <FaChevronRight className="size-3" />
          <Link href="/visiteur/catalogue?filtre=narrateur" className="transition hover:text-[#ff7a00]">Narrateurs</Link>
          <FaChevronRight className="size-3" />
          <span className="text-white/72">{narrator.name}</span>
        </div>

        <section className="mt-7 rounded-lg border border-white/10 bg-white/[0.04] p-7 lg:p-8">
          <div className="grid gap-8 xl:grid-cols-[1fr_30rem]">
            <div className="grid gap-8 lg:grid-cols-[22rem_minmax(0,1fr)]">
              <div className="relative mx-auto aspect-square w-full max-w-[22rem] overflow-hidden rounded-full border border-white/10 bg-white/[0.06]">
                <Image src={portrait.cover} alt={narrator.name} fill priority sizes="352px" className="object-cover object-center opacity-95" />
                <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_70%_30%,transparent_20%,rgba(8,10,13,0.18)_62%,rgba(8,10,13,0.82))]">
                  <span className="rounded-full border border-white/12 bg-black/34 px-5 py-3 text-4xl font-black text-white/86 backdrop-blur-sm">{narrator.initials}</span>
                </div>
              </div>

              <div className="min-w-0 py-1">
                <h1 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">Narrateur : {narrator.name}</h1>
                <p className="mt-4 max-w-3xl text-base leading-7 text-white/68">{narrator.bio}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {narrator.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/[0.08] px-4 py-2 text-xs font-bold text-white/70">{tag}</span>
                  ))}
                </div>

                <h2 className="mt-9 text-base font-black">Ecouter un extrait de sa voix</h2>
                <div className="mt-3 flex min-h-16 items-center gap-4 rounded-lg border border-white/10 bg-white/[0.035] px-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#ff7a00] text-white"><FaCirclePlay /></span>
                  <div className="flex h-11 flex-1 items-center gap-1 overflow-hidden">
                    {waveform.map((height, index) => (
                      <span key={index} className="w-1 shrink-0 rounded-full bg-white/35" style={{ height }} />
                    ))}
                  </div>
                  <span className="text-sm text-white/72">0:45</span>
                </div>

                <div className="mt-8 grid gap-6 text-white/72 sm:grid-cols-3">
                  {[
                    [FaBookOpen, narrator.stats.books, "livres narres"],
                    [FaClock, narrator.stats.hours, "heures d'ecoute"],
                    [FaUserGroup, narrator.stats.listeners, "auditeurs"]
                  ].map(([Icon, value, label]) => (
                    <div key={label as string} className="flex items-center gap-4 border-white/10 sm:border-r sm:pr-5 last:border-r-0">
                      <Icon className="size-10 shrink-0 text-white/72" />
                      <div>
                        <strong className="block text-xl text-[#ff7a00]">{value as string}</strong>
                        <span className="text-sm">{label as string}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="border-white/10 xl:border-l xl:pl-8">
              <Link href={`/visiteur/livre/${narratedBooks[0]?.id ?? publicBooks[0].id}`} className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-lg bg-[#ff7a00] px-6 text-base font-black text-white shadow-[0_16px_32px_rgba(255,122,0,0.24)] transition hover:bg-[#ff8c22]">
                <FaCirclePlay />
                Ecouter sa voix
              </Link>
              <Link href="/connexion" className="mt-4 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-lg border border-[#ff7a00]/80 bg-white/[0.02] px-6 text-base font-black text-white transition hover:bg-[#ff7a00]/10">
                <FaHeart />
                Suivre ce narrateur
              </Link>

              <h2 className="mt-9 text-xl font-black">A propos de {narrator.name}</h2>
              <div className="mt-6 grid gap-6">
                {narrator.about.map((item, index) => {
                  const Icon = [FaMicrophone, FaWaveSquare, FaRegStar][index] ?? FaRegStar;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <Icon className="mt-1 size-7 shrink-0 text-white/70" />
                      <div>
                        <h3 className="font-black">{item.title}</h3>
                        <p className="mt-1 text-sm text-white/52">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-9">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-black">Livres narres par {narrator.name}</h2>
            <Link href="/visiteur/catalogue?filtre=narrateur" className="hidden items-center gap-2 text-sm font-black text-[#ff7a00] transition hover:text-[#ff9b42] sm:inline-flex">
              Voir tous les livres narres ({narrator.stats.books})
              <FaChevronRight className="size-3" />
            </Link>
          </div>
          <div className="grid gap-5 xl:grid-cols-3">
            {narratedBooks.map((book) => (
              <BookCard key={`${book.id}-${book.title}`} book={book} narratorName={narrator.name} />
            ))}
          </div>
        </section>
      </section>

      <footer className="relative mx-auto mt-14 max-w-[112rem] px-5 pb-9 sm:px-8 lg:px-14">
        <div className="grid gap-10 border-t border-white/10 pt-8 text-sm text-white/54 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Image src={assetPath("/assets/logos/logo-white.png")} alt="PAPYRUS" width={130} height={60} className="h-12 w-auto object-contain" />
            <p className="mt-3 max-w-xs">La plateforme des livres audio qui donnent voix a l&apos;imaginaire.</p>
          </div>
          {footerColumns.map(([title, ...links]) => (
            <div key={title}><h3 className="font-black text-white">{title}</h3><div className="mt-2 grid gap-1">{links.map((item) => <p key={item}>{item}</p>)}</div></div>
          ))}
          <div><h3 className="font-black text-white">Suivez-nous</h3><p className="mt-2">Instagram</p><p>Facebook</p><p>YouTube</p></div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#07090c]/96 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[112rem] items-center gap-5 px-5 sm:px-8 lg:px-14">
          <div className="relative size-14 shrink-0 overflow-hidden rounded-md"><Image src={publicBooks[0].cover} alt={publicBooks[0].title} fill sizes="56px" className="object-cover" /></div>
          <div className="hidden min-w-0 sm:block"><p className="truncate text-sm font-black">Les Jardins de Minuit</p><p className="truncate text-xs text-white/52">Clara Veyrac - Chapitre 3</p></div>
          <Link href="/connexion" className="hidden text-white/60 transition hover:text-[#ff7a00] md:block" aria-label="Favori"><FaHeart /></Link>
          <div className="mx-auto flex items-center gap-5 text-white/68"><FaShuffle className="hidden sm:block" /><FaForwardStep className="rotate-180" /><Link href="/visiteur/livre/la-chute-des-geants" className="grid size-12 place-items-center rounded-full bg-white text-black" aria-label="Lire"><FaPause /></Link><FaForwardStep /><FaRepeat className="hidden sm:block" /></div>
          <div className="hidden min-w-64 items-center gap-4 text-sm text-white/72 lg:flex"><span>12:45 / 34:18</span><div className="h-1 flex-1 rounded-full bg-white/14"><div className="h-full w-1/3 rounded-full bg-[#ff7a00]" /></div></div>
          <div className="hidden items-center gap-5 text-white/62 md:flex"><FaVolumeHigh /><FaBarsStaggered /></div>
        </div>
      </div>
    </main>
  );
}
