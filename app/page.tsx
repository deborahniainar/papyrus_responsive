import Image from "next/image";
import Link from "next/link";
import {
  FaApple,
  FaArrowRight,
  FaCirclePlay,
  FaMagnifyingGlass,
  FaMobileScreenButton,
  FaUsersGear
} from "react-icons/fa6";
import { assetPath, publicBooks, publicCategories, publicInterests } from "@/lib/public-demo-data";

export default function PublicHomePage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#16120f]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080706]/80 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Accueil PAPYRUS">
            <Image
              src={assetPath("/assets/logos/logo-white.png")}
              alt="PAPYRUS"
              width={84}
              height={84}
              className="size-16 object-contain"
              priority
            />
          </Link>

          <form action={assetPath("/visiteur/catalogue")} className="hidden min-h-12 flex-1 items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 shadow-sm md:flex">
            <FaMagnifyingGlass className="size-4 text-white/50" />
            <input
              type="search"
              name="search"
              placeholder="Rechercher un livre, auteur, narrateur..."
              className="w-full bg-transparent text-sm font-medium text-white outline-none placeholder:text-white/45"
            />
          </form>

          <nav className="ml-auto hidden items-center gap-7 text-sm font-bold text-white/70 lg:flex">
            <Link href="/visiteur/catalogue" className="transition hover:text-[#ff8a2a]">
              Catalogue
            </Link>
            <Link href="#categories" className="transition hover:text-[#ff8a2a]">
              Categories
            </Link>
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
            <Link href="/connexion" className="hidden rounded-full px-4 py-2 text-sm font-black text-white/75 transition hover:bg-white/10 hover:text-white sm:block">
              Connexion
            </Link>
            <Link href="/inscription" className="rounded-full bg-[#ff7a00] px-5 py-3 text-sm font-black text-white shadow-[0_12px_24px_rgba(255,122,0,0.22)] transition hover:bg-[#e86f00]">
              S&apos;inscrire
            </Link>
          </div>
        </div>
      </header>

      <section className="relative isolate min-h-screen overflow-hidden px-4 pb-14 pt-32 text-white sm:px-6 sm:pt-36 lg:px-8">
        <Image
          src={assetPath("/assets/images/accueil.png")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,7,6,0.58)_0%,rgba(8,7,6,0.72)_48%,rgba(8,7,6,0.96)_100%),linear-gradient(90deg,rgba(8,7,6,0.78)_0%,rgba(8,7,6,0.32)_50%,rgba(8,7,6,0.74)_100%)]" />
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto mb-5 w-fit rounded-full border border-[#ff8a2a]/30 bg-[#ff8a2a]/15 px-4 py-2 text-sm font-black text-[#ffb36b]">
            La plateforme audio pour lire avec les oreilles
          </p>
          <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.04] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl">
            PAPYRUS est fait pour les curieux.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/76">
            Decouvrez un livre audio, lancez un extrait gratuit, achetez vos titres preferes ou passez en Premium pour ecouter partout.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/visiteur/livre/la-chute-des-geants" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#ff7a00] px-7 text-sm font-black text-white shadow-[0_18px_36px_rgba(255,122,0,0.28)] transition hover:bg-[#e86f00]">
              <FaCirclePlay className="size-4 text-white" />
              Ecouter un extrait
            </Link>
            <Link href="/inscription" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 text-sm font-black text-white shadow-sm backdrop-blur transition hover:border-[#ff8a2a]/50 hover:bg-white/15">
              Creer un compte
              <FaArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link href="/visiteur/application" className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-black/80 px-5 text-sm font-black text-white backdrop-blur">
              <FaApple className="size-5" />
              App Store
            </Link>
            <Link href="/visiteur/application" className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-black/80 px-5 text-sm font-black text-white backdrop-blur">
              <FaMobileScreenButton className="size-5" />
              Google Play
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-[-0.02em] text-[#12100e] sm:text-4xl">
              Le monde du livre audio vous attend
            </h2>
            <p className="mt-4 text-lg leading-8 text-black/55">
              Commencez par un extrait, puis gardez vos livres dans votre bibliotheque personnelle.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {publicBooks.map((book) => (
              <Link key={book.title} href={`/visiteur/livre/${book.id}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#f2eee9] shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-xl">
                  <Image src={book.cover} alt={book.title} fill sizes="(max-width: 1024px) 45vw, 210px" className="object-cover" />
                </div>
                <h3 className="mt-4 line-clamp-1 text-sm font-black text-[#12100e]">{book.title}</h3>
                <p className="mt-1 truncate text-sm text-black/50">{book.author}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black tracking-[-0.02em] text-[#12100e]">Parcourir par categorie</h2>
          <div className="mt-7 flex flex-wrap gap-3">
            {publicCategories.map((category) => (
              <Link key={category} href="/visiteur/catalogue" className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black text-black/65 shadow-sm transition hover:border-[#ff8a2a]/40 hover:text-[#e86f00]">
                {category}
              </Link>
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <h3 className="text-2xl font-black text-[#12100e]">Gardez le contact avec vos envies</h3>
              <p className="mt-4 text-base leading-7 text-black/55">
                Retrouvez rapidement les livres qui correspondent a votre humeur, votre temps disponible ou votre mode d&apos;ecoute.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {publicInterests.map((interest) => (
                <Link key={interest} href="/visiteur/catalogue" className="rounded-full bg-[#fff3e8] px-5 py-3 text-sm font-black text-[#b65300] transition hover:bg-[#ff8a2a] hover:text-white">
                  {interest}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-3xl font-black tracking-[-0.02em] text-[#12100e]">
              PAPYRUS rassemble lecteurs, auteurs et editeurs.
            </h2>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-black/55">
              Creez un compte pour acheter, ecouter, publier ou gerer vos livres audio.
            </p>
          </div>
          <Link href="/inscription" className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-[#ff7a00] px-7 text-sm font-black text-white shadow-[0_12px_24px_rgba(255,122,0,0.22)] transition hover:bg-[#e86f00]">
            Rejoindre PAPYRUS
            <FaUsersGear className="size-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#fbfaf7] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src={assetPath("/assets/logos/logo.png")} alt="PAPYRUS" width={58} height={58} className="size-12 object-contain" />
            <span className="text-sm font-black uppercase tracking-[0.18em] text-black/60">Audio</span>
          </Link>
          <div className="flex flex-wrap gap-5 text-sm font-bold text-black/50">
            <Link href="/visiteur/catalogue" className="hover:text-[#e86f00]">Catalogue</Link>
            <Link href="/connexion" className="hover:text-[#e86f00]">Connexion</Link>
            <Link href="/inscription" className="hover:text-[#e86f00]">Inscription</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
