import {
  FaPlay,
  FaStar,
  FaEllipsis,
  FaShareNodes,
  FaHeart,
  FaCartShopping,
  FaClock,
  FaChevronDown,
  FaPen,
  FaCircleCheck,
  FaHeadphones,
} from "react-icons/fa6";
import Image from "next/image";

import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { PlayerBar } from "@/components/audio/player-bar";
import { BookCard } from "@/components/catalog/book-sections";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const bookDetails = {
  id: "la-chute-des-geants",
  title: "La Chute des Géants",
  tagline: "Une fresque historique spectaculaire, immersive et cinématographique.",
  author: "Ken Follett",
  narrator: "Papyrus Originals",
  duration: "18h 42min",
  rating: "4,8",
  reviewsCount: "12.5K",
  price: "19,99 €",
  originalPrice: "24,99 €",
  description:
    "Une grande saga audio portée par une ambiance visuelle sombre, épique et premium. Cette couverture remplace l’ancien skeleton afin de donner au livre une vraie présence dans l’interface PAPYRUS.",
  category: "Roman historique",
  language: "Français",
  publicationDate: "2026",
  publisher: "Papyrus",
  chapters: [
    { id: 1, title: "1. Le rêve récurrent", duration: "15:23" },
    { id: 2, title: "2. La rencontre avec le roi", duration: "18:47" },
    { id: 3, title: "3. Le marchand de cristal", duration: "21:05" },
    { id: 4, title: "4. Sur la route du désert", duration: "17:51" },
    { id: 5, title: "5. La chute des géants", duration: "22:10" },
  ],
  authorBio:
    "Ken Follett est un auteur reconnu pour ses grandes fresques historiques, ses récits amples et ses intrigues à forte tension dramatique.",
  similarBooks: [
    {
      id: "le-secret-egypte",
      title: "Le Secret de l'Égypte Éternelle",
      author: "Jacques Martel",
      rating: "4.9",
      views: "6.4K",
    },
    {
      id: "l-ombre-des-pharaons",
      title: "L'Ombre des Pharaons",
      author: "Jacques Martel",
      rating: "4.7",
      views: "8.3K",
    },
    {
      id: "l-empire-des-tenebres",
      title: "L'Empire des Ténèbres",
      author: "Christian Jacq",
      rating: "4.8",
      views: "7.2K",
    },
    {
      id: "voie-des-sages",
      title: "La Voie des Sages",
      author: "Papyrus Originals",
      rating: "4.6",
      views: "5.8K",
    },
  ],
};

export function generateStaticParams() {
  return [{ id: "la-chute-des-geants" }];
}

export default function BookPage() {
  const book = bookDetails;

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Sidebar />

      <div className="lg:pl-64">
        <TopNav />

        <main className="mx-auto max-w-7xl px-4 py-8 pb-32 sm:px-6 lg:px-8 lg:py-10">
          <section className="grid gap-8 lg:grid-cols-[minmax(280px,400px)_1fr] lg:gap-12">
            <div className="group relative mx-auto aspect-[3/4] w-full max-w-sm lg:mx-0 lg:aspect-square lg:max-w-none">
              <Image
                src="/demos/papyrus/assets/images/books/cover-chute-geants.png"
                alt={`Couverture de ${book.title}`}
                fill
                priority
                className="rounded-[2rem] border border-white/5 object-cover shadow-2xl"
              />

              <div className="absolute inset-x-0 bottom-10 flex justify-center">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-5 py-2.5 text-xs font-bold tracking-widest text-white uppercase shadow-xl backdrop-blur-md">
                  <FaHeadphones className="text-primary size-3.5" />
                  <span>Écoute</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-6 flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary border-primary/20 h-7 px-3 text-[10px] font-black uppercase">
                  PREMIUM
                </Badge>
                <Badge className="h-7 border-orange-500/20 bg-orange-500/10 px-3 text-[10px] font-black text-orange-500 uppercase">
                  BESTSELLER
                </Badge>
                <Badge className="h-7 border-0 bg-orange-600 px-3 text-[10px] font-black text-white uppercase">
                  -20%
                </Badge>
              </div>

              <h1 className="mb-4 text-[clamp(2.25rem,5vw,4rem)] leading-tight font-black tracking-tight text-white">
                {book.title}
              </h1>

              <p className="mb-10 max-w-2xl text-xl text-white/50">
                {book.tagline}
              </p>

              <div className="mb-12 grid grid-cols-1 gap-5 border-y border-white/5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-wider text-white/20 uppercase">
                    Auteur
                  </p>
                  <p className="text-primary text-sm font-bold">{book.author}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-wider text-white/20 uppercase">
                    Narrateur
                  </p>
                  <p className="text-sm font-bold text-white">{book.narrator}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-wider text-white/20 uppercase">
                    Durée
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <FaClock className="size-3 text-white/40" />
                    <span>{book.duration}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-wider text-white/20 uppercase">
                    Note
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 text-sm font-bold text-white">
                      <FaStar className="text-primary size-3.5" />
                      <span>{book.rating}</span>
                    </div>
                    <span className="text-[10px] font-medium text-white/30">
                      {book.reviewsCount} avis
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
                <Button
                  variant="outline"
                  className="h-14 gap-3 rounded-2xl border-white/10 bg-white/[0.02] px-4 text-sm font-bold text-white hover:bg-white/5 sm:px-6 lg:px-8"
                >
                  <FaHeart className="size-4" />
                  Ajouter aux favoris
                </Button>

                <Button
                  variant="outline"
                  className="h-14 gap-3 rounded-2xl border-white/10 bg-white/[0.02] px-4 text-sm font-bold text-white hover:bg-white/5 sm:px-6 lg:px-8"
                >
                  <FaShareNodes className="size-4" />
                  Partager
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="size-12 rounded-2xl border border-white/10 bg-white/[0.02] text-white/40 hover:text-white sm:size-14"
                >
                  <FaEllipsis className="size-5" />
                </Button>

                <div className="ml-auto flex items-center gap-8 pl-8">
                  <div className="text-right">
                    <div className="flex items-baseline gap-2">
                      <span className="text-primary text-3xl font-black">
                        {book.price}
                      </span>
                      <span className="text-sm font-medium text-white/20 line-through">
                        {book.originalPrice}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button className="bg-primary hover:bg-primary/90 shadow-primary/20 h-14 gap-3 rounded-2xl px-10 text-base font-black text-black shadow-lg">
                      <FaPlay className="size-4" />
                      Écouter maintenant
                    </Button>

                    <Button
                      variant="outline"
                      className="h-14 gap-3 rounded-2xl border-white/20 bg-white/[0.05] px-10 text-sm font-bold text-white hover:bg-white/10"
                    >
                      <FaCartShopping className="size-4" />
                      Acheter l&apos;audio
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-[1fr_minmax(320px,450px)] lg:gap-12">
            <div className="space-y-16">
              <section className="space-y-6">
                <h2 className="text-xl font-bold text-white">Description</h2>

                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-white/60">
                    {book.description}
                  </p>

                  <Button
                    variant="link"
                    className="text-primary h-auto p-0 text-sm font-bold"
                  >
                    Voir plus <FaChevronDown className="ml-2 size-3" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-6 border-t border-white/5 pt-10 sm:grid-cols-4">
                  {[
                    { label: "Catégorie", value: book.category },
                    { label: "Langue", value: book.language },
                    { label: "Date de publication", value: book.publicationDate },
                    { label: "Éditeur", value: book.publisher },
                  ].map((detail) => (
                    <div key={detail.label} className="space-y-1.5">
                      <p className="text-[10px] font-bold tracking-wider text-white/20 uppercase">
                        {detail.label}
                      </p>
                      <p className="text-sm font-bold text-white/80">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-8">
                <h2 className="text-xl font-bold text-white">
                  À propos de l&apos;auteur
                </h2>

                <div className="flex gap-8 rounded-[2.5rem] border border-white/5 bg-[#11100f] p-8">
                  <div className="relative size-32 shrink-0 overflow-hidden rounded-3xl border border-white/10">
                    <Image
                      src="/demos/papyrus/assets/images/books/cover-voie-sages.png"
                      alt={book.author}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-4">
                    <h3 className="text-primary text-xl font-bold">
                      {book.author}
                    </h3>

                    <p className="text-sm leading-relaxed text-white/50">
                      {book.authorBio}
                    </p>

                    <Button
                      variant="outline"
                      className="h-10 rounded-xl border-white/10 bg-white/5 px-6 text-xs font-bold text-white hover:bg-white/10"
                    >
                      Voir tous les livres
                    </Button>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white">
                    Avis des auditeurs
                  </h2>

                  <Button
                    variant="outline"
                    className="h-10 rounded-xl border-white/10 bg-white/5 px-6 text-xs font-bold text-white hover:bg-white/10"
                  >
                    <FaPen className="mr-2 size-3" />
                    Écrire un avis
                  </Button>
                </div>

                <div className="space-y-8">
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-black text-white">
                      {book.rating}
                    </span>

                    <div className="space-y-1">
                      <div className="text-primary flex">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <FaStar key={i} className="size-4" />
                        ))}
                      </div>

                      <p className="text-xs font-medium text-white/30">
                        {book.reviewsCount} avis
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 rounded-3xl border border-white/5 bg-[#11100f] p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="size-10 border border-white/10">
                          <AvatarImage src="https://i.pravatar.cc/40?u=sophie" />
                          <AvatarFallback>SM</AvatarFallback>
                        </Avatar>

                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-white">
                              Sophie M.
                            </span>

                            <div className="flex items-center gap-1 text-[9px] font-black text-white/30 uppercase">
                              <FaCircleCheck className="size-2.5 text-green-500" />
                              Avis vérifié
                            </div>
                          </div>

                          <div className="text-primary flex">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <FaStar key={i} className="size-2.5" />
                            ))}
                          </div>
                        </div>
                      </div>

                      <span className="text-[11px] font-medium text-white/20">
                        il y a 2 jours
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-white">
                        Une histoire magnifique qui touche le cœur et l&apos;âme.
                      </h4>

                      <p className="text-sm leading-relaxed text-white/50">
                        Une écoute inoubliable !
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <aside className="space-y-12">
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white">Chapitres</h2>

                  <Button
                    variant="link"
                    className="hover:text-primary h-auto p-0 text-xs font-bold text-white/40 transition-colors"
                  >
                    Voir tout
                  </Button>
                </div>

                <div className="divide-y divide-white/5 overflow-hidden rounded-3xl border border-white/5 bg-[#11100f]">
                  {book.chapters.map((chapter) => (
                    <button
                      key={chapter.id}
                      className="group flex w-full items-center justify-between p-5 transition-all hover:bg-white/[0.02]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="group-hover:bg-primary flex size-8 items-center justify-center rounded-full bg-white/[0.03] text-white/40 transition-colors group-hover:text-black">
                          <FaPlay className="size-3" />
                        </div>

                        <span className="text-sm font-bold text-white/70 transition-colors group-hover:text-white">
                          {chapter.title}
                        </span>
                      </div>

                      <span className="text-[11px] font-medium text-white/20 tabular-nums">
                        {chapter.duration}
                      </span>
                    </button>
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white">
                    Livres similaires
                  </h2>

                  <Button
                    variant="link"
                    className="hover:text-primary h-auto p-0 text-xs font-bold text-white/40 transition-colors"
                  >
                    Voir tout
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {book.similarBooks.map((item) => (
                    <BookCard
                      key={item.id}
                      variant="catalog"
                      {...item}
                      duration="8h 12"
                    />
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </main>
      </div>

      <PlayerBar />
    </div>
  );
}