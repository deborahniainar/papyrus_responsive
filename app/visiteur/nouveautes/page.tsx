"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaBarsStaggered,
  FaCalendarDays,
  FaCirclePlay,
  FaClock,
  FaForwardStep,
  FaHeart,
  FaLock,
  FaMicrophone,
  FaPause,
  FaRepeat,
  FaShuffle,
  FaVolumeHigh
} from "react-icons/fa6";
import { PublicSearchBar } from "@/components/visitor/public-search-bar";
import { VisitorMobileMenu } from "@/components/visitor/visitor-mobile-menu";
import { assetPath, publicBooks } from "@/lib/public-demo-data";

type PublicBook = (typeof publicBooks)[number];

type ReleaseItem = {
  title: string;
  author: string;
  narrator: string;
  duration: string;
  date?: string;
  book: PublicBook;
  description: string;
};

const weekReleases: ReleaseItem[] = [
  {
    title: "Le Phare des Ames Perdues",
    author: "Elise Marechal",
    narrator: "Thibault Rondeau",
    duration: "12h 25min",
    date: "17 mai 2024",
    book: publicBooks[3],
    description: "Une gardienne de phare entend les voix de naufrages oublies et remonte le fil d'une disparition."
  },
  {
    title: "L'Horloge de Verre",
    author: "Romain Delcourt",
    narrator: "Julien Chatelet",
    duration: "10h 48min",
    date: "15 mai 2024",
    book: publicBooks[1],
    description: "Un horloger decouvre un mecanisme capable de rejouer les souvenirs les plus fragiles."
  },
  {
    title: "Sous la Lune Ecarlate",
    author: "Camille Duvall",
    narrator: "Lea Morvan",
    duration: "9h 31min",
    date: "14 mai 2024",
    book: publicBooks[4],
    description: "Dans une ville endormie, une enquetrice suit la trace d'une lumiere rouge qui annonce les secrets."
  },
  {
    title: "Les Secrets d'Ambre",
    author: "Nathalie Boisvert",
    narrator: "Caroline Dallaire",
    duration: "8h 17min",
    date: "13 mai 2024",
    book: publicBooks[2],
    description: "Une fleur rare conserve la memoire d'une famille et revele un pacte vieux de plusieurs generations."
  }
];

const premiumAdds: ReleaseItem[] = [
  {
    title: "La Cathedrale Oubliee",
    author: "Julien Arnault",
    narrator: "Stephane Quilichini",
    duration: "14h 02min",
    book: publicBooks[0],
    description: "Une cathedrale interdite cache une bibliotheque sonore que seuls les abonnes Premium peuvent explorer."
  },
  {
    title: "L'Odyssee d'Elyndor",
    author: "Brice Tarvel",
    narrator: "Alexandre Donders",
    duration: "16h 33min",
    book: publicBooks[3],
    description: "Une grande traversee fantastique entre mers noires, royaumes perdus et promesses impossibles."
  },
  {
    title: "Le Pacte des Ombres",
    author: "Laura Stevens",
    narrator: "Ariane Brousse",
    duration: "11h 21min",
    book: publicBooks[4],
    description: "Une alliance secrete oblige trois heritiers a choisir entre verite, pouvoir et memoire."
  },
  {
    title: "Les Gardiens de l'Origine",
    author: "Nicolas Clement",
    narrator: "Jean-Marc Coudert",
    duration: "13h 47min",
    book: publicBooks[1],
    description: "Aux portes d'un temple ancien, des gardiens protegent le premier recit jamais prononce."
  }
];

const calendarItems = [
  ["21", "MAI", "La Foret des Murmures", "Arthur Lemaire", "Benoit Marchand", "Dans 4 jours", publicBooks[2]],
  ["24", "MAI", "Les Cites de Brume", "Claire Vanel", "Pierre-Henri Prelot", "Dans 7 jours", publicBooks[1]],
  ["28", "MAI", "Le Dernier Caravanier", "Yacine Belkacem", "Silimane Yefsah", "Dans 11 jours", publicBooks[3]],
  ["31", "MAI", "L'Heritage d'Eole", "Maelle Kergueris", "Julie Dumas", "Dans 14 jours", publicBooks[4]]
];

const narrators = [
  ["TR", "Thibault Rondeau", "Voix grave et immersive"],
  ["CD", "Caroline Dallaire", "Voix douce et expressive"],
  ["SY", "Slimane Yefsah", "Voix chaleureuse et profonde"],
  ["AB", "Ariane Brousse", "Voix intense et captivante"]
];

const footerColumns = [
  ["Catalogue", "Tous les livres", "Genres", "Auteurs", "Narrateurs"],
  ["A propos", "Qui sommes-nous ?", "Notre mission", "Presse", "Carrieres"],
  ["Aide", "Centre d'aide", "Nous contacter", "Conditions d'utilisation", "Confidentialite"]
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
            <Link key={label} href={href} className={`flex h-full items-center border-b-2 transition ${index === 2 ? "border-[#ff7a00] text-white" : "border-transparent hover:border-[#ff7a00]/50 hover:text-white"}`}>
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

function ReleaseCard({ item, premium = false }: { item: ReleaseItem; premium?: boolean }) {
  return (
    <Link href={`/visiteur/livre/${item.book.id}`} className="group relative block min-h-80 overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] transition hover:border-[#ff7a00]/45">
      <Image src={item.book.cover} alt={item.title} fill sizes="(max-width: 768px) 50vw, 18vw" className="object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/22 to-black/10" />
      <span className="absolute left-3 top-3 rounded bg-[#ff7a00] px-2 py-1 text-[10px] font-black uppercase text-white">
        {premium ? "Premium" : "Nouveau"}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-4 transition duration-300 group-hover:translate-y-4 group-hover:opacity-0">
        <h3 className="line-clamp-2 text-lg font-black leading-tight">{item.title}</h3>
        <p className="mt-2 text-sm text-white/70">{item.author}</p>
        <div className="mt-4 grid gap-2 text-xs text-white/68">
          <span className="inline-flex items-center gap-2"><FaMicrophone /> Lu par {item.narrator}</span>
          <span className="inline-flex items-center gap-2"><FaClock /> {item.duration}</span>
          {!premium && item.date && <span className="inline-flex items-center gap-2"><FaCalendarDays /> {item.date}</span>}
        </div>
        <span className="mt-4 grid size-11 place-items-center rounded-full bg-[#ff7a00] text-white shadow-[0_10px_24px_rgba(255,122,0,0.45)]">
          <FaCirclePlay />
        </span>
      </div>
      <div className="pointer-events-none absolute inset-0 flex translate-y-3 items-end bg-gradient-to-t from-black via-black/88 to-black/30 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div>
          <p className="mb-2 w-fit rounded bg-[#ff7a00] px-2 py-1 text-[10px] font-black uppercase text-white">
            Description
          </p>
          <h3 className="text-lg font-black leading-tight">{item.title}</h3>
          <p className="mt-2 text-sm text-white/66">{item.author}</p>
          <p className="mt-4 text-sm leading-6 text-white/82">{item.description}</p>
          <div className="mt-4 grid gap-2 text-xs text-white/64">
            <span className="inline-flex items-center gap-2"><FaMicrophone /> Lu par {item.narrator}</span>
            <span className="inline-flex items-center gap-2"><FaClock /> {item.duration}</span>
            {!premium && item.date && <span className="inline-flex items-center gap-2"><FaCalendarDays /> {item.date}</span>}
          </div>
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#ff7a00]">
            <FaCirclePlay />
            Ecouter un extrait
          </p>
        </div>
      </div>
      {premium && (
        <div className="absolute inset-x-0 bottom-0 border-t border-white/5 bg-black/55 px-4 py-3 text-sm font-bold text-[#ff7a00] backdrop-blur-sm transition duration-300 group-hover:translate-y-full group-hover:opacity-0">
          <span className="inline-flex items-center gap-2"><FaLock /> Inclus avec Premium</span>
        </div>
      )}
    </Link>
  );
}

export default function VisitorNewsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080a0d] pb-24 text-white">
      <Header />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_24%_8%,rgba(255,122,0,0.11),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(44,117,255,0.08),transparent_28%)]" />

      <section className="relative mx-auto max-w-[112rem] px-5 pt-32 sm:px-8 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_33rem]">
          <div>
            <h1 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">Nouveautes audio</h1>
            <p className="mt-3 text-lg text-white/58">Les dernieres sorties et decouvertes a ne pas manquer.</p>
          </div>
          <div className="flex flex-col items-start lg:items-end">
            <Link href="/visiteur/livre/la-chute-des-geants" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#ff7a00] px-7 text-base font-black text-white shadow-[0_16px_32px_rgba(255,122,0,0.24)] transition hover:bg-[#ff8c22]">
              <FaCirclePlay />
              Ecouter la nouveaute du jour
            </Link>
            <p className="mt-3 text-sm text-white/52">Chaque jour, une nouvelle histoire a decouvrir.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_37rem]">
          <div className="grid gap-6">
            <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-black">Sorties de la semaine</h2>
                <Link href="/visiteur/catalogue" className="text-sm font-bold text-white hover:text-[#ff7a00]">Voir tout</Link>
              </div>
              <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
                {weekReleases.map((item) => <ReleaseCard key={item.title} item={item} />)}
              </div>
            </section>

            <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-black">Ajouts Premium</h2>
                <Link href="/visiteur/premium" className="text-sm font-bold text-white hover:text-[#ff7a00]">Voir tout</Link>
              </div>
              <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
                {premiumAdds.map((item) => <ReleaseCard key={item.title} item={item} premium />)}
              </div>
            </section>
          </div>

          <aside className="grid gap-6">
            <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-black">Calendrier des sorties</h2>
                <Link href="/visiteur/catalogue" className="text-sm font-bold text-white hover:text-[#ff7a00]">Voir tout</Link>
              </div>
              <div className="grid gap-5">
                {calendarItems.map(([day, month, title, author, narrator, badge, book]) => (
                  <Link key={title as string} href={`/visiteur/livre/${(book as typeof publicBooks[number]).id}`} className="grid grid-cols-[4rem_6.5rem_1fr_auto] items-center gap-4 rounded-lg transition hover:bg-white/[0.04]">
                    <span className="grid h-16 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-center">
                      <strong className="block text-2xl">{day as string}</strong>
                      <span className="text-xs text-white/58">{month as string}</span>
                    </span>
                    <span className="relative h-20 overflow-hidden rounded-md bg-white/8">
                      <Image src={(book as typeof publicBooks[number]).cover} alt="" fill sizes="104px" className="object-cover" />
                    </span>
                    <span className="min-w-0">
                      <strong className="block truncate">{title as string}</strong>
                      <span className="mt-1 block text-sm text-white/58">{author as string}</span>
                      <span className="mt-2 flex items-center gap-2 text-xs text-white/48"><FaMicrophone /> Lu par {narrator as string}</span>
                    </span>
                    <span className="rounded border border-[#ff7a00]/60 px-2 py-1 text-xs font-bold text-[#ff7a00]">{badge as string}</span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-black">Nouveaux narrateurs</h2>
                <Link href="/visiteur/aide" className="text-sm font-bold text-white hover:text-[#ff7a00]">Voir tout</Link>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {narrators.map(([initials, name, text]) => (
                  <div key={name} className="text-center">
                    <span className="relative mx-auto grid size-20 place-items-center rounded-full border border-white/18 bg-white/[0.08] text-xl font-black">
                      {initials}
                      <span className="absolute -top-2 rounded bg-[#ff7a00] px-2 py-1 text-[10px] uppercase">Nouveau</span>
                    </span>
                    <h3 className="mt-3 text-sm font-black">{name}</h3>
                    <p className="mt-1 text-xs leading-4 text-white/50">{text}</p>
                    <Link href="/visiteur/aide" className="mt-3 inline-flex rounded border border-white/18 px-3 py-2 text-xs font-bold hover:border-[#ff7a00]/50">Decouvrir</Link>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
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
          <div className="hidden items-center gap-5 text-white/62 md:flex"><Link href="/visiteur/aide"><FaVolumeHigh /></Link><Link href="/visiteur/catalogue"><FaBarsStaggered /></Link></div>
        </div>
      </div>
    </main>
  );
}
