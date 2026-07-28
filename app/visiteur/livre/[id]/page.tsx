import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBarsStaggered,
  FaBookOpen,
  FaClockRotateLeft,
  FaCrown,
  FaDownload,
  FaForwardStep,
  FaHeart,
  FaHeadphones,
  FaPause,
  FaRegCirclePlay,
  FaRepeat,
  FaShuffle,
  FaVolumeHigh
} from "react-icons/fa6";
import { PublicSearchBar } from "@/components/visitor/public-search-bar";
import { VisitorMobileMenu } from "@/components/visitor/visitor-mobile-menu";
import { assetPath, publicBooks } from "@/lib/public-demo-data";
import { getNarratorForBook } from "@/lib/public-narrators";

const waveform = [
  20, 36, 24, 42, 28, 52, 24, 35, 58, 25, 32, 48, 31, 44, 27, 55, 22, 37, 46, 30, 41, 24, 62,
  35, 28, 47, 25, 38, 54, 32, 42, 23, 50, 29, 44, 34, 24, 40, 32, 48, 35, 25, 43, 29, 36, 31,
  45, 26, 39, 33, 47, 28, 37, 25, 42, 30, 35, 27, 41, 24, 38, 32
];

const footerColumns = [
  ["Catalogue", "Tous les livres", "Genres", "Auteurs", "Narrateurs"],
  ["A propos", "Qui sommes-nous ?", "Notre mission", "Presse", "Carrieres"],
  ["Aide", "Centre d'aide", "Nous contacter", "Conditions d'utilisation", "Confidentialite"]
];

export function generateStaticParams() {
  return publicBooks.map((book) => ({ id: book.id }));
}

export default async function VisitorBookPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const book = publicBooks.find((item) => item.id === id);

  if (!book) notFound();
  const { narrator } = getNarratorForBook(book.id);

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
              ["Aide", "/visiteur/aide"]
            ].map(([label, href], index) => (
              <Link
                key={label}
                href={href}
                className={`flex h-full items-center border-b-2 transition ${index === 1 ? "border-[#ff7a00] text-white" : "border-transparent hover:border-[#ff7a00]/50 hover:text-white"}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <PublicSearchBar className="ml-auto hidden xl:flex" />

          <div className="ml-auto flex shrink-0 items-center gap-3 xl:ml-0">
            <VisitorMobileMenu />
            <Link href="/connexion" className="hidden rounded-xl px-4 py-3 text-sm font-bold text-white/82 transition hover:bg-white/8 sm:block">
              Connexion
            </Link>
            <Link href="/inscription" className="hidden rounded-lg bg-[#ff7a00] px-5 py-3 text-sm font-black text-white shadow-[0_14px_28px_rgba(255,122,0,0.25)] transition hover:bg-[#ff8c22] sm:inline-flex">
              Essayer Premium
            </Link>
          </div>
        </div>
      </header>

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(255,122,0,0.12),transparent_30%),radial-gradient(circle_at_82%_10%,rgba(44,117,255,0.09),transparent_26%)]" />

      <section className="relative mx-auto max-w-[112rem] px-5 pt-28 sm:px-8 lg:px-14">
        <Link href="/visiteur/catalogue" className="inline-flex items-center gap-3 text-sm font-bold text-[#ff7a00] transition hover:text-[#ff9b42]">
          <FaArrowLeft className="size-3" />
          Retour au catalogue
        </Link>

        <div className="mt-7">
          <h1 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">Extrait audio</h1>
          <p className="mt-3 text-lg text-white/58">Ecoutez un extrait gratuit avant de decouvrir la suite.</p>
        </div>

        <div className="mt-7 grid gap-5 xl:grid-cols-[1fr_31rem]">
          <div className="grid gap-5">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <div className="grid gap-8 lg:grid-cols-[31rem_minmax(0,1fr)]">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-white/8">
                <Image src={book.cover} alt={book.title} fill priority sizes="(max-width: 1024px) 90vw, 31rem" className="object-cover" />
              </div>

              <div className="min-w-0 py-1">
                <span className="inline-flex max-w-full items-center gap-3 rounded-md border border-white/12 bg-white/[0.035] px-3 py-2 text-base text-white/75">
                  <span className="flex h-5 items-end gap-0.5 text-[#ff7a00]">
                    {[8, 16, 11, 22, 14].map((height, index) => (
                      <span key={index} className="w-0.5 rounded-full bg-current" style={{ height }} />
                    ))}
                  </span>
                  <span className="truncate">{book.title}</span>
                </span>

                <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.03em]">
                  Prologue - La serre oubliee
                </h2>
                <p className="mt-4 text-2xl font-black">
                  <span className="text-[#ff7a00]">01:18</span>
                  <span className="mx-2 text-white/38">/</span>
                  <span className="text-white/65">05:00</span>
                </p>

                <div className="mt-9 flex h-20 items-center gap-1 overflow-hidden">
                  {waveform.map((height, index) => {
                    const played = index < 31;
                    return (
                      <span
                        key={index}
                        className={`w-1 shrink-0 rounded-full ${played ? "bg-[#ff7a00]" : "bg-white/24"}`}
                        style={{ height }}
                      />
                    );
                  })}
                  <span className="relative -ml-1 h-20 w-px shrink-0 bg-[#ff7a00]">
                    <span className="absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 rounded-full bg-[#ff7a00]" />
                  </span>
                </div>

                <div className="mt-8 flex items-center justify-center gap-12">
                  <Link href={`/visiteur/livre/${book.id}`} className="grid size-12 place-items-center rounded-full text-white/78 transition hover:text-[#ff7a00]" aria-label="Reculer de 15 secondes">
                    <FaClockRotateLeft className="size-8" />
                    <span className="sr-only">15 secondes</span>
                  </Link>
                  <Link href={`/visiteur/livre/${book.id}`} className="grid size-20 place-items-center rounded-full bg-[#ff7a00] text-white shadow-[0_18px_38px_rgba(255,122,0,0.34)] transition hover:bg-[#ff8c22]" aria-label="Pause">
                    <FaPause className="size-9" />
                  </Link>
                  <Link href={`/visiteur/livre/${book.id}`} className="grid size-12 place-items-center rounded-full text-white/78 transition hover:text-[#ff7a00]" aria-label="Avancer de 15 secondes">
                    <FaClockRotateLeft className="size-8 scale-x-[-1]" />
                    <span className="sr-only">15 secondes</span>
                  </Link>
                </div>

                <div className="mt-9 border-t border-white/10 pt-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Link href="/inscription" className="inline-flex min-h-16 items-center justify-center gap-3 rounded-lg bg-[#ff7a00] px-5 text-sm font-black text-white transition hover:bg-[#ff8c22]">
                      <FaCrown className="size-6" />
                      <span>
                        <span className="block text-xs font-medium text-white/80">Accedez a l&apos;integralite du livre</span>
                      </span>
                    </Link>
                    <Link href="/visiteur/catalogue" className="inline-flex min-h-16 items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/[0.035] px-5 text-sm font-black text-white transition hover:border-[#ff7a00]/50">
                      <FaBookOpen className="size-5" />
                      Voir la fiche livre
                    </Link>
                  </div>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/45">
                    <FaHeadphones />
                    Extrait gratuit - 5 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5 lg:grid-cols-[1fr_1fr_1fr_1.25fr]">
            {[
              [FaHeadphones, "Ecoute illimitee", "Des milliers de livres audio"],
              [FaDownload, "Telechargement", "Ecoutez partout, meme hors ligne"],
              [FaRepeat, "Synchronisation", "Reprenez votre ecoute sur tous vos appareils"]
            ].map(([Icon, title, text]) => (
              <div key={title as string} className="flex items-center gap-4">
                <Icon className="size-8 shrink-0 text-white/65" />
                <div>
                  <h3 className="font-black">{title as string}</h3>
                  <p className="mt-1 text-sm text-white/48">{text as string}</p>
                </div>
              </div>
            ))}
            <Link href="/inscription" className="flex items-center justify-between rounded-lg bg-[linear-gradient(90deg,rgba(255,122,0,0.16),rgba(255,122,0,0.04))] px-5 py-4 text-[#ff7a00]">
              <span>
                <strong className="block">Passez a Premium</strong>
                <span className="mt-1 block text-sm text-white/62">7 jours d&apos;essai gratuit, sans engagement</span>
              </span>
              <FaArrowRight />
            </Link>
          </div>
          </div>

          <aside className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black">Narrateur</h2>
            <div className="mt-5 flex items-center gap-4">
              <div className="grid size-16 place-items-center rounded-full bg-[#d8b28a] text-2xl font-black text-[#2c1d14]">
                {narrator.initials}
              </div>
              <div>
                <h3 className="font-black">{narrator.name}</h3>
                <p className="mt-1 text-sm text-white/48">{narrator.tone}</p>
                <Link href={`/visiteur/narrateur/${narrator.slug}`} className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-md border border-white/18 px-4 text-sm font-bold transition hover:border-[#ff7a00]/50">
                  <FaRegCirclePlay />
                  En savoir plus sur le narrateur
                </Link>
              </div>
            </div>

            <div className="my-8 h-px bg-white/10" />

            <h2 className="text-xl font-black">Extrait du texte</h2>
            <div className="mt-4 rounded-lg border border-white/10 bg-black/10 p-5 text-base leading-7 text-white/68">
              <p>« La serre etait oubliee, comme le sont parfois les secrets trop lourds a porter.</p>
              <p className="mt-4">Derriere les vitres embuees, les plantes continuaient de pousser, indifferentes au passage du temps.</p>
              <p className="mt-4">Minuit venait de sonner lorsqu&apos;elle poussa la porte grincante. »</p>
            </div>
            <Link href="/connexion" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#ff7a00] transition hover:text-[#ff9b42]">
              Voir le texte complet dans le livre
              <FaArrowRight />
            </Link>

            <div className="my-8 h-px bg-white/10" />

            <h2 className="text-xl font-black">Qualite audio</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3">
              {[
                ["HD", "Haute definition", "128 kbps"],
                ["✓", "Sans pub", "Ecoute ininterrompue"],
                ["↓", "Telechargeable", "Ecoutez hors connexion"]
              ].map(([icon, title, text]) => (
                <Link key={title} href="/inscription" className="rounded-lg border border-white/12 bg-white/[0.03] p-3 text-sm transition hover:border-[#ff7a00]/50">
                  <span className="grid size-8 place-items-center rounded-full border border-white/20 text-xs font-black">{icon}</span>
                  <strong className="mt-3 block">{title}</strong>
                  <span className="mt-1 block text-xs leading-4 text-white/48">{text}</span>
                </Link>
              ))}
            </div>
          </aside>
        </div>

      </section>

      <footer className="relative mx-auto mt-9 max-w-[112rem] px-5 pb-9 sm:px-8 lg:px-14">
        <div className="grid gap-10 border-t border-white/10 pt-8 text-sm text-white/54 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Image src={assetPath("/assets/logos/logo-white.png")} alt="PAPYRUS" width={130} height={60} className="h-12 w-auto object-contain" />
            <p className="mt-3 max-w-xs">La plateforme des livres audio qui donnent voix a l&apos;imaginaire.</p>
          </div>
          {footerColumns.map(([title, ...links]) => (
            <div key={title}>
              <h3 className="font-black text-white">{title}</h3>
              <div className="mt-2 grid gap-1">
                {links.map((item) => <p key={item}>{item}</p>)}
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
            <Image src={book.cover} alt={book.title} fill sizes="56px" className="object-cover" />
          </div>
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-sm font-black">{book.title}</p>
            <p className="truncate text-xs text-white/52">Prologue - La serre oubliee</p>
          </div>
          <Link href="/connexion" className="hidden text-white/60 transition hover:text-[#ff7a00] md:block" aria-label="Favori"><FaHeart /></Link>
          <div className="mx-auto flex items-center gap-5 text-white/68">
            <FaShuffle className="hidden sm:block" />
            <FaForwardStep className="rotate-180" />
            <Link href={`/visiteur/livre/${book.id}`} className="grid size-12 place-items-center rounded-full bg-white text-black" aria-label="Pause">
              <FaPause />
            </Link>
            <FaForwardStep />
            <FaRepeat className="hidden sm:block" />
          </div>
          <div className="hidden min-w-64 items-center gap-4 text-sm text-white/72 lg:flex">
            <span>01:18 / 05:00</span>
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
