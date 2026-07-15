"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaHeadphones,
  FaPlay,
  FaPlus,
  FaStar,
} from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroBooks = [
  {
    id: "la-chute-des-geants",
    title: "La Chute des Géants",
    author: "Ken Follett",
    narrator: "Papyrus Originals",
    duration: "18h 42",
    rating: "4,8",
    description:
      "Une fresque historique spectaculaire portée par une couverture sombre, cinématographique et immersive.",
    accent: "#7fd13b",
    coverTitle: "La Chute des Géants",
    coverUrl: "/demos/papyrus/assets/images/books/cover-chute-geants.png",
  },
  {
    id: "le-secret-egypte",
    title: "Le Secret de l'Égypte Éternelle",
    author: "Jacques Martel",
    narrator: "Guillaume Gallienne",
    duration: "9h 17",
    rating: "4,7",
    description:
      "Un voyage audio dans les mystères de l'Égypte ancienne, entre pyramides, secrets et atmosphère dorée.",
    accent: "#f59e0b",
    coverTitle: "Le Secret de l'Égypte Éternelle",
    coverUrl: "/demos/papyrus/assets/images/books/cover-secret-egypte.png",
  },
  {
    id: "l-empire-des-tenebres",
    title: "L'Empire des Ténèbres",
    author: "Christian Jacq",
    narrator: "Culture pour tous",
    duration: "12h 03",
    rating: "4,9",
    description:
      "Une ambiance égyptienne puissante, mystique et premium, parfaite pour les livres audio d'aventure.",
    accent: "#d946ef",
    coverTitle: "L'Empire des Ténèbres",
    coverUrl: "/demos/papyrus/assets/images/books/cover-empire-tenebres.png",
  },
  {
    id: "l-ombre-des-pharaons",
    title: "L'Ombre des Pharaons",
    author: "Jacques Martel",
    narrator: "Papyrus Studio",
    duration: "10h 26",
    rating: "4,8",
    description:
      "Une version rouge intense et dramatique pour renforcer l'impact visuel du catalogue Papyrus.",
    accent: "#ef4444",
    coverTitle: "L'Ombre des Pharaons",
    coverUrl: "/demos/papyrus/assets/images/books/cover-ombre-pharaons.png",
  },
];

export function HomeHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const activeBook = heroBooks[activeIndex];

  const previousIndex = useMemo(
    () => (activeIndex === 0 ? heroBooks.length - 1 : activeIndex - 1),
    [activeIndex]
  );
  const nextIndex = useMemo(
    () => (activeIndex === heroBooks.length - 1 ? 0 : activeIndex + 1),
    [activeIndex]
  );

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === heroBooks.length - 1 ? 0 : currentIndex + 1
      );
    }, 2000);

    return () => window.clearInterval(timer);
  }, [isAutoPlaying]);

  const selectSlide = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      className="relative my-4 min-h-[auto] overflow-hidden rounded-2xl sm:my-6 sm:rounded-[2rem] lg:min-h-[520px] border border-white/8 bg-[#11100f]"
      aria-label="Sélection à la une"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onFocus={() => setIsAutoPlaying(false)}
      onBlur={() => setIsAutoPlaying(true)}
    >
      <div
        className="absolute inset-0 opacity-35"
        style={{
          background: `radial-gradient(circle at 70% 32%, ${activeBook.accent}, transparent 34%)`,
        }}
      />
      <Image src={activeBook.coverUrl} alt="" fill priority className="object-cover opacity-25 blur-sm scale-110" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/15" />

      <div className="relative z-10 grid min-h-[auto] items-center gap-7 px-4 py-8 sm:px-6 md:px-12 lg:min-h-[520px] lg:grid-cols-[300px_1fr] xl:grid-cols-[360px_1fr]">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[210px] sm:max-w-[260px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl md:max-w-[300px]">
          <Image src={activeBook.coverUrl} alt={`Couverture de ${activeBook.title}`} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0_30%,rgba(255,255,255,0.16)_31%,transparent_38%)]" />
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-black uppercase text-white/70 backdrop-blur">
            <FaHeadphones className="size-3 text-primary" />
            Audio
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/65 to-transparent p-6">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">
              Papyrus
            </p>
            <h3 className="mt-2 text-2xl font-black leading-tight text-white">
              {activeBook.coverTitle}
            </h3>
            <p className="mt-1 text-sm text-white/60">{activeBook.author}</p>
          </div>
        </div>

        <div className="max-w-3xl space-y-5 sm:space-y-7">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-white/55">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-primary">
              À la une
            </span>
            <span className="flex items-center gap-1.5">
              <FaStar className="size-3 text-primary" />
              {activeBook.rating}
            </span>
            <span className="flex items-center gap-1.5">
              <FaClock className="size-3 text-white/35" />
              {activeBook.duration}
            </span>
          </div>

          <div>
            <h1 className="text-[clamp(2.1rem,11vw,4.5rem)] font-black leading-none tracking-tight text-white md:text-6xl xl:text-7xl">
              {activeBook.title}
            </h1>
            <div className="mt-5 flex flex-col gap-1">
              <p className="text-lg font-bold sm:text-xl text-white/90">{activeBook.author}</p>
              <p className="text-base text-white/50">Lu par {activeBook.narrator}</p>
            </div>
          </div>

          <p className="max-w-2xl text-base leading-relaxed sm:text-lg text-white/62">
            {activeBook.description}
          </p>

          <div className="grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
            <Button
              asChild
              className="h-14 gap-3 rounded-lg bg-primary px-4 sm:px-6 lg:px-8 text-base font-black text-black hover:bg-primary/90"
            >
              <Link href="/lecteur">
                <FaPlay className="size-4" />
                Écouter maintenant
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-14 gap-3 rounded-lg border-white/10 bg-white/5 px-4 sm:px-6 lg:px-8 text-base font-bold text-white hover:bg-white/10"
            >
              <FaPlus className="size-4" />
              Bibliothèque
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-12 justify-center px-5 text-sm sm:h-14 sm:px-6 sm:text-base font-bold text-white/62 hover:bg-white/5 hover:text-white"
            >
              <Link href={`/livre/${activeBook.id}`}>Voir les détails</Link>
            </Button>
          </div>
        </div>
      </div>

      <Button
        type="button"
        size="icon"
        variant="ghost"
        aria-label={`Afficher ${heroBooks[previousIndex].title}`}
        onClick={() => selectSlide(previousIndex)}
        className="absolute left-2 top-1/2 sm:left-4 z-20 size-11 -translate-y-1/2 rounded-full bg-black/25 text-white/55 backdrop-blur hover:bg-white/10 hover:text-white"
      >
        <FaChevronLeft className="size-4" />
      </Button>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        aria-label={`Afficher ${heroBooks[nextIndex].title}`}
        onClick={() => selectSlide(nextIndex)}
        className="absolute right-2 top-1/2 sm:right-4 z-20 size-11 -translate-y-1/2 rounded-full bg-black/25 text-white/55 backdrop-blur hover:bg-white/10 hover:text-white"
      >
        <FaChevronRight className="size-4" />
      </Button>

      <div className="absolute bottom-4 sm:bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroBooks.map((book, index) => (
          <button
            type="button"
            key={book.id}
            aria-label={`Afficher ${book.title}`}
            onClick={() => selectSlide(index)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              index === activeIndex ? "w-8 bg-primary" : "w-2 bg-white/25 hover:bg-white/45"
            )}
          />
        ))}
      </div>
    </section>
  );
}
