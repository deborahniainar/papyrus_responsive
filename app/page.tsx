import Image from "next/image";
import Link from "next/link";
import {
  FaBarsStaggered,
  FaBookmark,
  FaCircleCheck,
  FaCirclePlay,
  FaCloudArrowDown,
  FaForwardStep,
  FaHeart,
  FaHeadphones,
  FaMicrophone,
  FaPause,
  FaPenNib,
  FaRepeat,
  FaShuffle,
  FaVolumeHigh
} from "react-icons/fa6";
import { PublicSearchBar } from "@/components/visitor/public-search-bar";
import { VisitorMobileMenu } from "@/components/visitor/visitor-mobile-menu";
import { assetPath, publicBooks } from "@/lib/public-demo-data";

const heroBook = {
  id: "la-chute-des-geants",
  title: "Les Jardins de Minuit",
  author: "Clara Veyrac",
  narrator: "Noe Lamberti",
  cover: assetPath("/assets/images/books/cover-chute-geants.png")
};

const continueItems = [
  ["L'Heure des fleurs", "Camille Laurent", "7h 12min restantes", "memoire-egyptien", 72],
  ["Les Annees de brume", "Mathieu Lenoir", "3h 48min restantes", "le-secret-egypte", 55],
  ["Resonances", "Elise Marechal", "5h 10min restantes", "voie-des-sages", 61],
  ["Le Dernier Phare", "Arthur Delaunay", "1h 22min restantes", "l-empire-des-tenebres", 68]
];

const collections = [
  ["Grands classiques reinventes", "20 titres", assetPath("/assets/images/books/cover-memoire-egyptien.png")],
  ["Voix d'ailleurs recits du monde", "18 titres", assetPath("/assets/images/books/cover-voie-sages.png")],
  ["Noir & Mystere Suspense et frissons", "36 titres", assetPath("/assets/images/books/cover-ombre-pharaons.png")],
  ["Histoires qui inspirent", "Parcours de vie", assetPath("/assets/images/books/cover-secret-egypte.png")]
];

const whyItems = [
  ["Une qualite sonore haut de gamme", "Des enregistrements soignes pour une ecoute tout en nuance.", FaHeadphones],
  ["Une selection exigeante", "Des oeuvres choisies avec passion pour leur force et leur sens.", FaMicrophone],
  ["Soutien aux createurs", "Une remuneration juste pour les auteurs, editeurs et narrateurs.", FaHeart],
  ["Ecoutez a votre rythme", "Mode hors ligne, signets, vitesse de lecture et reprise d'ecoute.", FaCloudArrowDown]
];

function bookById(id: string) {
  return publicBooks.find((book) => book.id === id) ?? publicBooks[0];
}

export default function PublicHomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080a0d] pb-24 text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07090c]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[112rem] items-center gap-5 px-5 sm:px-8 lg:px-14">
          <Link href="/" className="flex w-44 shrink-0 items-center" aria-label="Accueil PAPYRUS">
            <Image
              src={assetPath("/assets/logos/logo-white.png")}
              alt="PAPYRUS"
              width={150}
              height={74}
              priority
              className="h-14 w-auto object-contain"
            />
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
                className={`flex h-full items-center border-b-2 transition ${index === 0 ? "border-[#ff7a00] text-white" : "border-transparent hover:border-[#ff7a00]/50 hover:text-white"}`}
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
            <Link href="/visiteur/premium/mensuel" className="hidden rounded-lg bg-[#ff7a00] px-5 py-3 text-sm font-black text-white shadow-[0_14px_28px_rgba(255,122,0,0.25)] transition hover:bg-[#ff8c22] sm:inline-flex">
              Essayer Premium
            </Link>
          </div>
        </div>
      </header>

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_25%_10%,rgba(255,122,0,0.13),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(44,117,255,0.10),transparent_24%)]" />

      <section className="relative mx-auto max-w-[112rem] px-5 pt-32 sm:px-8 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[34rem_1fr_21rem] lg:items-center xl:gap-14">
          <Link href="/visiteur/livre/la-chute-des-geants" className="group relative aspect-[1.52] overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl">
            <Image src={heroBook.cover} alt={heroBook.title} fill priority sizes="(max-width: 1024px) 90vw, 34rem" className="object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </Link>

          <div className="max-w-3xl">
            <span className="rounded-md bg-[#ff7a00]/15 px-2.5 py-1 text-xs font-black uppercase text-[#ff7a00]">
              Nouveaute
            </span>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              {heroBook.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-white/76">
              <span className="inline-flex items-center gap-3">
                <FaPenNib className="size-7 text-white/52" />
                <span><strong className="block text-white">{heroBook.author}</strong>Auteur</span>
              </span>
              <span className="h-9 w-px bg-white/18" />
              <span className="inline-flex items-center gap-3">
                <FaMicrophone className="size-7 text-white/52" />
                <span><strong className="block text-white">{heroBook.narrator}</strong>Narrateur</span>
              </span>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/76">
              Dans une ville ou le temps s&apos;efface la nuit, une botaniste decouvre un jardin secret qui murmure les souvenirs de ceux qui l&apos;ont oublie. Un roman envoutant sur la memoire, la nature et les choix qui nous faconnent.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/visiteur/livre/la-chute-des-geants" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#ff7a00] px-6 text-sm font-black text-white transition hover:bg-[#ff8c22]">
                <FaCirclePlay />
                Ecouter un extrait
              </Link>
              <Link href="/visiteur/catalogue" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/35 px-6 text-sm font-black text-white transition hover:border-[#ff7a00] hover:text-[#ff9b42]">
                Explorer le catalogue
              </Link>
            </div>
          </div>

          <div className="grid gap-8 text-sm">
            {[
              [FaHeadphones, "Des livres audio d'exception", "Des voix talentueuses, pour une immersion totale."],
              [FaBookmark, "Partout, tout le temps", "Telechargez et ecoutez en toute liberte."],
              [FaHeart, "Soutenez la creation", "Vos ecoutes remunerent auteurs et editeurs."]
            ].map(([Icon, title, text]) => (
              <div key={title as string} className="flex gap-4">
                <Icon className="mt-1 size-7 shrink-0 text-[#ff7a00]" />
                <div>
                  <h2 className="font-black text-white">{title as string}</h2>
                  <p className="mt-1 leading-5 text-white/56">{text as string}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto mt-12 max-w-[112rem] px-5 sm:px-8 lg:px-14">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-black">Continuer la decouverte</h2>
          <Link href="/visiteur/catalogue" className="text-sm font-bold text-[#ff7a00]">Voir tout</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {continueItems.map(([title, author, remaining, id, progress]) => {
            const book = bookById(id as string);
            return (
              <Link key={title as string} href={`/visiteur/livre/${book.id}`} className="group flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-3 transition hover:border-[#ff7a00]/50 hover:bg-white/[0.07]">
                <div className="relative size-20 shrink-0 overflow-hidden rounded-md bg-white/8">
                  <Image src={book.cover} alt={title as string} fill sizes="80px" className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-black">{title as string}</h3>
                  <p className="mt-1 truncate text-xs text-white/55">{author as string}</p>
                  <p className="mt-2 text-xs text-white/40">{remaining as string}</p>
                  <div className="mt-2 h-1 rounded-full bg-white/13">
                    <div className="h-full rounded-full bg-[#ff7a00]" style={{ width: `${progress}%` }} />
                  </div>
                </div>
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#ff7a00]/45 text-[#ff7a00]">
                  <FaCirclePlay className="size-3" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto mt-14 grid max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-14 xl:gap-14">
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-black">Nouveautes audio</h2>
            <Link href="/visiteur/nouveautes" className="text-sm font-bold text-[#ff7a00]">Voir tout</Link>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-6">
            {publicBooks.map((book, index) => (
              <Link key={book.id} href={`/visiteur/livre/${book.id}`} className="group min-w-0">
                <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-white/8">
                  <Image src={book.cover} alt={book.title} fill sizes="150px" className="object-cover transition duration-500 group-hover:scale-105" />
                  {index < 4 && <span className="absolute left-1.5 top-1.5 rounded bg-[#ff7a00] px-1.5 py-1 text-[9px] font-black uppercase">Nouveau</span>}
                </div>
                <h3 className="mt-2 line-clamp-2 text-xs font-bold">{book.title}</h3>
                <p className="mt-1 truncate text-xs text-white/48">{book.author}</p>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-black">Collections editoriales</h2>
            <Link href="/visiteur/catalogue" className="text-sm font-bold text-[#ff7a00]">Voir tout</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {collections.map(([title, count, cover]) => (
              <Link key={title} href="/visiteur/catalogue" className="group relative min-h-48 overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-4">
                <Image src={cover} alt="" fill sizes="260px" className="object-cover opacity-78 transition group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/20 to-transparent" />
                <div className="absolute inset-x-4 bottom-4">
                  <h3 className="text-sm font-black leading-5">{title}</h3>
                  <p className="mt-1 text-sm text-white/60">{count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto mt-14 grid max-w-[112rem] gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.08fr] lg:px-14 xl:gap-10">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-7 lg:p-8">
          <h2 className="text-2xl font-black">Pourquoi PAPYRUS ?</h2>
          <div className="mt-8 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
            {whyItems.map(([title, text, Icon]) => (
              <div key={title as string} className="text-center">
                <Icon className="mx-auto size-7 text-white/80" />
                <h3 className="mt-3 text-sm font-black">{title as string}</h3>
                <p className="mt-2 text-xs leading-5 text-white/52">{text as string}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-[#ff7a00]/20 bg-[linear-gradient(115deg,rgba(255,122,0,0.18),rgba(255,255,255,0.04))] p-8 lg:p-9">
          <Image src={assetPath("/assets/images/accueil.png")} alt="" fill sizes="760px" className="object-cover opacity-20" />
          <div className="relative">
            <h2 className="text-2xl font-black">PAPYRUS Premium</h2>
            <p className="mt-2 text-sm text-white/72">Accedez a tout le catalogue et vivez vos histoires sans limites.</p>
            <div className="mt-5 flex flex-wrap gap-5 text-sm text-white/82">
              {["Ecoute illimitee", "Hors ligne", "Sans publicite", "Acces prioritaire"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <FaCircleCheck className="text-[#ff7a00]" />
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link href="/visiteur/premium/mensuel" className="rounded-lg bg-[#ff7a00] px-5 py-3 text-sm font-black text-white transition hover:bg-[#ff8c22]">
                Essayer Premium 30 jours gratuits
              </Link>
              <span className="text-sm text-white/68">Puis 9,99 EUR / mois, sans engagement.</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative mx-auto mt-14 max-w-[112rem] px-5 pb-10 sm:px-8 lg:px-14">
        <div className="grid gap-10 border-t border-white/10 pt-8 text-sm text-white/54 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Image src={assetPath("/assets/logos/logo-white.png")} alt="PAPYRUS" width={130} height={60} className="h-12 w-auto object-contain" />
            <p className="mt-3 max-w-xs">La plateforme des livres audio qui donnent voix a l&apos;imaginaire.</p>
          </div>
          <div><h3 className="font-black text-white">Catalogue</h3><p className="mt-2">Tous les livres</p><p>Genres</p><p>Auteurs</p><p>Narrateurs</p></div>
          <div><h3 className="font-black text-white">A propos</h3><p className="mt-2">Qui sommes-nous ?</p><p>Notre mission</p><p>Presse</p><p>Carrieres</p></div>
          <div><h3 className="font-black text-white">Aide</h3><p className="mt-2">Centre d&apos;aide</p><p>Nous contacter</p><p>Conditions</p><p>Confidentialite</p></div>
          <div><h3 className="font-black text-white">Suivez-nous</h3><p className="mt-2">Instagram</p><p>Facebook</p><p>YouTube</p></div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#07090c]/96 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[112rem] items-center gap-5 px-5 sm:px-8 lg:px-14">
          <div className="relative size-14 shrink-0 overflow-hidden rounded-md">
            <Image src={heroBook.cover} alt={heroBook.title} fill sizes="56px" className="object-cover" />
          </div>
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-sm font-black">{heroBook.title}</p>
            <p className="truncate text-xs text-white/52">{heroBook.author} - Chapitre 3</p>
          </div>
          <button className="hidden text-white/60 md:block" type="button" aria-label="Favori"><FaHeart /></button>
          <div className="mx-auto flex items-center gap-5 text-white/68">
            <FaShuffle className="hidden sm:block" />
            <FaForwardStep className="rotate-180" />
            <button type="button" className="grid size-12 place-items-center rounded-full bg-white text-black" aria-label="Pause">
              <FaPause />
            </button>
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
            <FaVolumeHigh />
            <FaBarsStaggered />
          </div>
        </div>
      </div>
    </main>
  );
}
