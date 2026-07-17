import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaCirclePlay, FaClock, FaLock, FaStar } from "react-icons/fa6";
import { publicBooks } from "@/lib/public-demo-data";

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

  return (
    <main className="min-h-screen bg-[#11100f] text-white">
      <section className="mx-auto grid min-h-screen max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:px-8">
        <div>
          <Link href="/visiteur/catalogue" className="mb-8 inline-flex items-center gap-2 text-sm font-black text-white/60 hover:text-[#ff8a2a]">
            <FaArrowLeft className="size-3" />
            Retour au catalogue public
          </Link>
          <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-3xl shadow-2xl lg:mx-0">
            <Image src={book.cover} alt={book.title} fill priority sizes="(max-width: 1024px) 80vw, 360px" className="object-cover" />
          </div>
        </div>

        <div>
          <p className="mb-4 w-fit rounded-full bg-[#ff8a2a]/15 px-4 py-2 text-sm font-black text-[#ffb36b]">
            Fiche livre visiteur
          </p>
          <h1 className="text-5xl font-black tracking-[-0.03em] sm:text-6xl">{book.title}</h1>
          <p className="mt-4 text-xl text-white/65">{book.author}</p>

          <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-white/70">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <FaStar className="text-[#ff8a2a]" />
              4.8
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <FaClock />
              {book.duration}
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">{book.category}</span>
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/64">
            Cette page simule ce qu&apos;un visiteur peut consulter : les informations principales du livre et un extrait gratuit. Le livre complet, le telechargement, les favoris et les avis sont reserves aux utilisateurs connectes.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#ff7a00] px-7 text-sm font-black text-white">
              <FaCirclePlay />
              Ecouter l&apos;extrait gratuit ({book.excerpt})
            </button>
            <Link href="/connexion" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-7 text-sm font-black text-white">
              <FaLock />
              Se connecter pour continuer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
