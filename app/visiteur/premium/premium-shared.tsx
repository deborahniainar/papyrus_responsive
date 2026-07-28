import Image from "next/image";
import Link from "next/link";
import {
  FaBarsStaggered,
  FaForwardStep,
  FaHeart,
  FaPause,
  FaRepeat,
  FaShuffle,
  FaVolumeHigh
} from "react-icons/fa6";
import { PublicSearchBar } from "@/components/visitor/public-search-bar";
import { VisitorMobileMenu } from "@/components/visitor/visitor-mobile-menu";
import { assetPath, publicBooks } from "@/lib/public-demo-data";

const footerColumns = [
  ["Catalogue", "Tous les livres", "Genres", "Auteurs", "Narrateurs"],
  ["A propos", "Qui sommes-nous ?", "Notre mission", "Presse", "Carrieres"],
  ["Aide", "Centre d'aide", "Nous contacter", "Conditions d'utilisation", "Confidentialite"]
];

export function PremiumHeader() {
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

export function PremiumFooterPlayer() {
  return (
    <>
      <footer className="relative mx-auto mt-14 max-w-[112rem] px-5 pb-9 sm:px-8 lg:px-14">
        <div className="grid gap-10 border-t border-white/10 pt-8 text-sm text-white/54 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Image src={assetPath("/assets/logos/logo-white.png")} alt="PAPYRUS" width={130} height={60} className="h-12 w-auto object-contain" />
            <p className="mt-3 max-w-xs">La plateforme des livres audio qui donnent voix a l&apos;imaginaire.</p>
          </div>
          {footerColumns.map(([title, ...links]) => (
            <div key={title}>
              <h3 className="font-black text-white">{title}</h3>
              <div className="mt-2 grid gap-1">{links.map((item) => <p key={item}>{item}</p>)}</div>
            </div>
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

export function PremiumShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080a0d] pb-24 text-white">
      <PremiumHeader />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_58%_14%,rgba(255,122,0,0.16),transparent_32%)]" />
      {children}
      <PremiumFooterPlayer />
    </main>
  );
}
