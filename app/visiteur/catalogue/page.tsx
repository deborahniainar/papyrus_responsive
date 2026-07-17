import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaCirclePlay, FaLock, FaMagnifyingGlass } from "react-icons/fa6";
import { assetPath, publicBooks, publicCategories } from "@/lib/public-demo-data";

export default function VisitorCatalogPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#16120f]">
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-black text-black/60 hover:text-[#e86f00]">
            <FaArrowLeft className="size-3" />
            Accueil visiteur
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/connexion" className="rounded-full px-4 py-2 text-sm font-black text-black/60 hover:bg-black/5">
              Connexion
            </Link>
            <Link href="/inscription" className="rounded-full bg-[#ff7a00] px-5 py-3 text-sm font-black text-white">
              S&apos;inscrire
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 w-fit rounded-full bg-[#fff1e3] px-4 py-2 text-sm font-black text-[#e86f00]">
            Catalogue public simule
          </p>
          <h1 className="text-4xl font-black tracking-[-0.02em] sm:text-5xl">
            Decouvrez les livres avant de vous connecter.
          </h1>
          <p className="mt-4 text-lg leading-8 text-black/55">
            En tant que visiteur, vous pouvez consulter le catalogue, ouvrir une fiche livre et ecouter un extrait gratuit. L&apos;achat, les favoris et l&apos;ecoute complete sont reserves aux comptes connectes.
          </p>
        </div>

        <form action={assetPath("/visiteur/catalogue")} className="mt-8 flex min-h-14 max-w-2xl items-center gap-3 rounded-full border border-black/10 bg-white px-5 shadow-sm">
          <FaMagnifyingGlass className="text-black/35" />
          <input
            type="search"
            placeholder="Rechercher un livre, auteur, narrateur..."
            className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-black/35"
          />
        </form>

        <div className="mt-8 flex flex-wrap gap-3">
          {publicCategories.slice(0, 8).map((category) => (
            <span key={category} className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-black text-black/60">
              {category}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {publicBooks.map((book) => (
            <Link key={book.id} href={`/visiteur/livre/${book.id}`} className="group block rounded-2xl bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#f2eee9]">
                <Image src={book.cover} alt={book.title} fill sizes="(max-width: 1024px) 45vw, 210px" className="object-cover" />
              </div>
              <div className="p-2">
                <p className="mt-2 text-xs font-black uppercase text-[#e86f00]">{book.category}</p>
                <h2 className="mt-1 line-clamp-2 text-sm font-black">{book.title}</h2>
                <p className="mt-1 text-sm text-black/50">{book.author}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-xs font-black text-[#e86f00]">
                  <FaCirclePlay className="size-3" />
                  Extrait {book.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#ff8a2a]/20 bg-[#fff3e8] p-6">
          <p className="flex items-center gap-3 text-sm font-black text-[#b65300]">
            <FaLock />
            Pour acheter, telecharger, ajouter aux favoris ou ecouter un livre complet, connectez-vous.
          </p>
        </div>
      </section>
    </main>
  );
}
