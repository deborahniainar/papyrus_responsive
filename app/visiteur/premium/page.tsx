import Image from "next/image";
import Link from "next/link";
import {
  FaBarsStaggered,
  FaBookOpen,
  FaCheck,
  FaChevronRight,
  FaDownload,
  FaForwardStep,
  FaGift,
  FaHeadphones,
  FaHeart,
  FaPause,
  FaRepeat,
  FaShieldHalved,
  FaShuffle,
  FaStar,
  FaVolumeHigh,
  FaWaveSquare
} from "react-icons/fa6";
import { PublicSearchBar } from "@/components/visitor/public-search-bar";
import { VisitorMobileMenu } from "@/components/visitor/visitor-mobile-menu";
import { assetPath, publicBooks } from "@/lib/public-demo-data";

const footerColumns = [
  ["Catalogue", "Tous les livres", "Genres", "Auteurs", "Narrateurs"],
  ["A propos", "Qui sommes-nous ?", "Notre mission", "Presse", "Carrieres"],
  ["Aide", "Centre d'aide", "Nous contacter", "Conditions d'utilisation", "Confidentialite"]
];

const premiumBooks = [
  ["Les Jardins de Minuit", "Clara Veyrac", publicBooks[0]],
  ["Le Dernier Phare", "Arthur Delaunay", publicBooks[3]],
  ["La Maison des Silences", "Julien Morel", publicBooks[1]],
  ["Voix d'ailleurs", "Recits du monde", publicBooks[2]],
  ["Noir & Mystere", "Suspense et frissons", publicBooks[4]]
];

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
            <Link key={label} href={href} className={`flex h-full items-center border-b-2 transition ${index === 3 ? "border-[#ff7a00] text-white" : "border-transparent hover:border-[#ff7a00]/50 hover:text-white"}`}>
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

function FooterPlayer() {
  return (
    <>
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
    </>
  );
}

function BookFan() {
  return (
    <div className="relative mx-auto h-80 max-w-3xl">
      {premiumBooks.map(([title, author, book], index) => (
        <div
          key={title as string}
          className="absolute bottom-0 left-1/2 w-44 origin-bottom overflow-hidden rounded-lg border border-white/15 bg-white/8 shadow-2xl"
          style={{
            transform: `translateX(${(index - 2) * 7.7}rem) rotate(${(index - 2) * 5}deg)`,
            zIndex: index === 2 ? 5 : 4 - Math.abs(index - 2)
          }}
        >
          <div className="relative aspect-[3/4]">
            <Image src={(book as typeof publicBooks[number]).cover} alt={title as string} fill sizes="180px" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
          <div className="absolute inset-x-3 bottom-4 text-center">
            <p className="font-display text-lg font-black uppercase leading-5">{title as string}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/70">{author as string}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PremiumPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080a0d] pb-24 text-white">
      <Header />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_58%_14%,rgba(255,122,0,0.2),transparent_32%)]" />
      <section className="relative mx-auto max-w-[112rem] px-5 pt-32 sm:px-8 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <span className="rounded bg-[#ff7a00]/18 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-[#ff7a00]">Premium</span>
            <h1 className="mt-7 text-5xl font-black tracking-[-0.04em] sm:text-7xl">PAPYRUS Premium</h1>
            <p className="mt-6 max-w-xl text-2xl leading-9 text-white/76">Accedez a tout le catalogue. Vivez vos histoires sans limites.</p>
            <div className="mt-8 grid gap-5">
              {[
                [FaHeadphones, "Ecoute illimitee", "Des milliers d'histoires a ecouter sans restriction."],
                [FaWaveSquare, "Qualite audio superieure", "Une experience immersive en haute fidelite."],
                [FaDownload, "Hors connexion", "Telechargez et ecoutez partout, meme sans internet."],
                [FaBookOpen, "Recommandations editoriales", "Des selections personnalisees par nos experts."]
              ].map(([Icon, title, text]) => (
                <div key={title as string} className="flex items-center gap-5">
                  <span className="grid size-12 place-items-center rounded-lg border border-[#ff7a00]/35 text-[#ff7a00]"><Icon className="size-5" /></span>
                  <span><strong className="block text-lg">{title as string}</strong><span className="text-white/58">{text as string}</span></span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <BookFan />
            <div className="mx-auto mt-5 max-w-4xl rounded-xl border border-[#ff7a00]/35 bg-white/[0.045] p-7">
              <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
                <div>
                  <h2 className="text-2xl font-black text-[#ff7a00]">Commencez votre essai gratuit</h2>
                  <p className="mt-2 text-white/70">30 jours pour decouvrir l&apos;experience Premium.</p>
                  <div className="mt-5 grid gap-2 text-sm text-white/72">
                    {["Sans engagement", "Annulation a tout moment", "Acces instantane"].map((item) => <span key={item} className="inline-flex items-center gap-2"><FaCheck className="text-[#ff7a00]" /> {item}</span>)}
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <p className="text-5xl font-black">9,99 € <span className="text-base font-medium">/ mois</span></p>
                  <p className="mt-2 text-sm text-white/62">apres 30 jours d&apos;essai gratuit</p>
                  <Link href="/visiteur/premium/mensuel" className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-[#ff7a00] px-7 text-base font-black text-white transition hover:bg-[#ff8c22]">Commencer l&apos;essai gratuit</Link>
                  <p className="mt-4 text-sm text-white/62">Deja abonne ? <Link href="/connexion" className="font-bold text-[#ff7a00]">Connectez-vous</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {[
            ["Tarifs", "Comparer les offres", "/visiteur/premium/tarifs", FaStar],
            ["Mensuel", "9,99 EUR / mois", "/visiteur/premium/mensuel", FaHeadphones],
            ["Annuel", "99 EUR / an", "/visiteur/premium/annuel", FaShieldHalved],
            ["Carte cadeau", "Offrez des histoires", "/visiteur/premium/carte-cadeau", FaGift]
          ].map(([title, text, href, Icon]) => (
            <Link key={title as string} href={href as string} className="rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#ff7a00]/50">
              <Icon className="size-8 text-[#ff7a00]" />
              <h2 className="mt-4 text-xl font-black">{title as string}</h2>
              <p className="mt-2 text-white/58">{text as string}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#ff7a00]">Ouvrir <FaChevronRight /></span>
            </Link>
          ))}
        </div>
      </section>
      <FooterPlayer />
    </main>
  );
}
