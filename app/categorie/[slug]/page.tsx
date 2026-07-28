import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaCirclePlay } from "react-icons/fa6";
import { PublicSearchBar } from "@/components/visitor/public-search-bar";
import { assetPath, publicBooks, publicGenres } from "@/lib/public-demo-data";

export function generateStaticParams() {
  return publicGenres.map((genre) => ({ slug: genre.slug }));
}

export default async function PublicCategoryPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const genre = publicGenres.find((item) => item.slug === slug);

  if (!genre) notFound();

  return (
    <main className="min-h-screen bg-[#080a0d] pb-16 text-white">
      <header className="border-b border-white/10 bg-[#07090c]/92">
        <div className="mx-auto flex h-20 max-w-[112rem] items-center justify-between gap-5 px-5 sm:px-8 lg:px-14">
          <Link href="/" className="flex items-center">
            <Image src={assetPath("/assets/logos/logo-white.png")} alt="PAPYRUS" width={150} height={74} priority className="h-14 w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/connexion" className="hidden rounded-xl px-4 py-3 text-sm font-bold text-white/82 transition hover:bg-white/8 sm:block">
              Connexion
            </Link>
            <Link href="/inscription" className="rounded-lg bg-[#ff7a00] px-5 py-3 text-sm font-black text-white">
              Essayer Premium
            </Link>
          </div>
        </div>
      </header>

      <section className="relative mx-auto max-w-[112rem] px-5 py-12 sm:px-8 lg:px-14">
        <Link href="/catalogue" className="mb-8 inline-flex items-center gap-2 text-sm font-black text-white/60 transition hover:text-[#ff7a00]">
          <FaArrowLeft className="size-3" />
          Retour au catalogue
        </Link>

        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-start">
          <div>
            <p className="mb-3 w-fit rounded bg-[#ff7a00]/15 px-3 py-1 text-xs font-black uppercase text-[#ff7a00]">
              Genre
            </p>
            <h1 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">{genre.label}</h1>
            <p className="mt-3 text-lg text-white/58">
              Selection publique de livres audio pour decouvrir ce genre avant connexion.
            </p>
          </div>

          <PublicSearchBar className="flex h-12 w-full max-w-md" />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {publicBooks.map((book) => (
            <Link key={book.id} href={`/livre/${book.id}`} className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] transition hover:-translate-y-1 hover:border-[#ff7a00]/45">
              <div className="relative aspect-[3/4] overflow-hidden bg-white/8">
                <Image src={book.cover} alt={book.title} fill sizes="(max-width: 1024px) 45vw, 220px" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <p className="text-xs font-black uppercase text-[#ff7a00]">{genre.label}</p>
                <h2 className="mt-2 line-clamp-2 text-sm font-black">{book.title}</h2>
                <p className="mt-1 text-sm text-white/55">{book.author}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-xs font-black text-[#ff7a00]">
                  <FaCirclePlay />
                  Ecouter un extrait
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
