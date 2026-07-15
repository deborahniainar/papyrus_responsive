import Link from "next/link";
import Image from "next/image";
import type { IconType } from "react-icons";
import { FaChevronRight, FaPlay, FaStar, FaEllipsisVertical, FaClock } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  grid?: boolean;
  viewAllHref?: string;
}

export function Section({ title, children, className, grid = true, viewAllHref = "#" }: SectionProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <Button asChild variant="link" className="h-auto p-0 text-xs font-bold text-white/50 hover:text-primary transition-colors">
          <Link href={viewAllHref}>
            Voir tout <FaChevronRight className="ml-1 size-2.5" />
          </Link>
        </Button>
      </div>
      <div className={cn(grid && "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6")}>
        {children}
      </div>
    </section>
  );
}

export function AuthorSection({ title, children, className, viewAllHref = "#" }: SectionProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <Button asChild variant="link" className="h-auto p-0 text-xs font-bold text-white/50 hover:text-primary transition-colors">
          <Link href={viewAllHref}>
            Voir tout <FaChevronRight className="ml-1 size-2.5" />
          </Link>
        </Button>
      </div>
      <div className="flex snap-x items-center gap-4 overflow-x-auto pb-4 no-scrollbar sm:gap-8">
        {children}
      </div>
    </section>
  );
}

interface BookCardProps {
  id?: string;
  title: string;
  author: string;
  coverUrl?: string;
  progress?: number;
  category?: string;
  duration?: string;
  rating?: string;
  views?: string;
  badge?: string;
  discount?: string;
  variant?: "continue" | "default" | "mini" | "premium" | "author" | "catalog";
  accent?: string;
}

const coverImages: Record<string, string> = {
  "la-chute-des-geants": "/demos/papyrus/assets/images/books/cover-chute-geants.png",
  "le-secret-egypte": "/demos/papyrus/assets/images/books/cover-secret-egypte.png",
  "l-ombre-des-pharaons": "/demos/papyrus/assets/images/books/cover-ombre-pharaons.png",
  "memoire-egyptien": "/demos/papyrus/assets/images/books/cover-memoire-egyptien.png",
  "l-empire-des-tenebres": "/demos/papyrus/assets/images/books/cover-empire-tenebres.png",
  "voie-des-sages": "/demos/papyrus/assets/images/books/cover-voie-sages.png",
  "l-alchimiste": "/demos/papyrus/assets/images/books/cover-chute-geants.png",
  sapiens: "/demos/papyrus/assets/images/books/cover-secret-egypte.png",
  "1984": "/demos/papyrus/assets/images/books/cover-ombre-pharaons.png",
  "le-petit-prince": "/demos/papyrus/assets/images/books/cover-memoire-egyptien.png",
  "la-sagesse": "/demos/papyrus/assets/images/books/cover-empire-tenebres.png",
  devenir: "/demos/papyrus/assets/images/books/cover-voie-sages.png",
  "le-pouvoir": "/demos/papyrus/assets/images/books/cover-chute-geants.png",
  "l-art": "/demos/papyrus/assets/images/books/cover-secret-egypte.png",
  pensees: "/demos/papyrus/assets/images/books/cover-ombre-pharaons.png",
  "quatre-accords": "/demos/papyrus/assets/images/books/cover-memoire-egyptien.png",
  "homme-heureux": "/demos/papyrus/assets/images/books/cover-empire-tenebres.png",
  "changer-eau": "/demos/papyrus/assets/images/books/cover-voie-sages.png",
  "derniere-allumette": "/demos/papyrus/assets/images/books/cover-chute-geants.png",
  "bleu-du-ciel": "/demos/papyrus/assets/images/books/cover-secret-egypte.png",
  "lois-nature": "/demos/papyrus/assets/images/books/cover-ombre-pharaons.png",
  reflechissez: "/demos/papyrus/assets/images/books/cover-memoire-egyptien.png",
  "strategie-ocean": "/demos/papyrus/assets/images/books/cover-empire-tenebres.png",
  "atomic-habits": "/demos/papyrus/assets/images/books/cover-voie-sages.png",
  influence: "/demos/papyrus/assets/images/books/cover-chute-geants.png",
  "harry-potter": "/demos/papyrus/assets/images/books/cover-secret-egypte.png",
};

const fallbackCovers = [
  "/demos/papyrus/assets/images/books/cover-chute-geants.png",
  "/demos/papyrus/assets/images/books/cover-secret-egypte.png",
  "/demos/papyrus/assets/images/books/cover-ombre-pharaons.png",
  "/demos/papyrus/assets/images/books/cover-memoire-egyptien.png",
  "/demos/papyrus/assets/images/books/cover-empire-tenebres.png",
  "/demos/papyrus/assets/images/books/cover-voie-sages.png",
];

const authorImages: Record<string, string> = {
  "Paulo Coelho": "https://i.pravatar.cc/240?u=paulo-coelho",
  "Yuval Noah Harari": "https://i.pravatar.cc/240?u=yuval-noah-harari",
  "Michelle Obama": "https://i.pravatar.cc/240?u=michelle-obama",
  "Eckhart Tolle": "https://i.pravatar.cc/240?u=eckhart-tolle",
  "James Clear": "https://i.pravatar.cc/240?u=james-clear",
  "Dalaï Lama": "https://i.pravatar.cc/240?u=dalai-lama",
  "George Orwell": "https://i.pravatar.cc/240?u=george-orwell",
  "Marc Aurèle": "https://i.pravatar.cc/240?u=marc-aurele",
};

function getCoverImage(id: string, coverUrl?: string) {
  if (coverUrl) return coverUrl;
  if (coverImages[id]) return coverImages[id];

  const fallbackIndex = Math.abs(
    id.split("").reduce((total, character) => total + character.charCodeAt(0), 0)
  ) % fallbackCovers.length;

  return fallbackCovers[fallbackIndex];
}

function CoverImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 220px"
      className={cn("object-cover", className)}
    />
  );
}

export function BookCard({
  id = "1",
  title,
  author,
  coverUrl,
  progress,
  category,
  duration,
  rating,
  views,
  badge,
  discount,
  variant = "default",
  accent = "rgba(255,255,255,0.05)"
}: BookCardProps) {
  const coverImage = getCoverImage(id, coverUrl);

  const content = (
    <>
      {variant === "continue" && (
        <article className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#11100f] p-3 sm:p-4 transition-all hover:bg-[#161514]">
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="relative size-14 shrink-0 sm:size-16 overflow-hidden rounded-xl border border-white/8 bg-white/5">
              <CoverImage src={coverImage} alt={`Couverture de ${title}`} />
            </div>
            <div className="min-w-0 flex-1">
              <Link href={`/livre/${id}`} className="block">
                <h4 className="truncate text-sm font-bold text-white transition-colors hover:text-primary">
                  {title}
                </h4>
              </Link>
              <p className="truncate text-xs text-white/50">{author}</p>
              {progress !== undefined && (
                <div className="mt-4 space-y-2">
                  <div className="h-1 rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-end text-[10px] tabular-nums text-white/40">
                    <span>{progress}%</span>
                  </div>
                </div>
              )}
            </div>
            <Button
              asChild
              size="icon"
              className="size-10 rounded-full bg-white/5 text-white/60 transition-all hover:bg-primary hover:text-black sm:opacity-0 sm:group-hover:opacity-100"
            >
              <Link href="/lecteur" aria-label={`Écouter ${title}`}>
                <FaPlay className="size-3.5" />
              </Link>
            </Button>
          </div>
        </article>
      )}

      {variant === "premium" && (
        <article className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-white/5 p-6 transition-all hover:-translate-y-1">
          <CoverImage src={coverImage} alt={`Couverture de ${title}`} className="opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
          <div className="absolute inset-0 opacity-25" style={{ background: accent }} />
          <div className="relative z-10 space-y-2.5">
            <Badge className="h-6 bg-primary px-2 text-[10px] font-black uppercase text-black">
              PREMIUM
            </Badge>
            <h3 className="line-clamp-2 text-[15px] font-bold leading-tight text-white">{title}</h3>
            <p className="text-xs font-medium text-white/60">{author}</p>
          </div>
        </article>
      )}

      {variant === "author" && (
        <div className="flex shrink-0 flex-col items-center gap-4 text-center">
          <Avatar className="size-24 border-2 border-transparent transition-all hover:border-primary">
            <AvatarImage src={authorImages[author]} alt={author} />
            <AvatarFallback className="bg-white/5 text-xl font-bold">{author[0]}</AvatarFallback>
          </Avatar>
          <span className="text-[13px] font-bold text-white/80">{author}</span>
        </div>
      )}

      {variant === "catalog" && (
        <article className="group space-y-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/5 bg-[#11100f] transition-all group-hover:border-white/15 group-hover:shadow-2xl">
            <CoverImage src={coverImage} alt={`Couverture de ${title}`} />
            
            <div className="absolute left-3 top-3 flex flex-col gap-1.5">
               {badge && (
                 <Badge className={cn(
                   "h-6 px-2 text-[9px] font-black uppercase",
                   badge === "PREMIUM" ? "bg-primary text-black" : "bg-orange-500 text-white"
                 )}>
                   {badge}
                 </Badge>
               )}
            </div>

            {discount && (
              <Badge className="absolute right-3 top-3 h-6 bg-orange-600/90 px-2 text-[9px] font-black text-white">
                {discount}
              </Badge>
            )}

            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100">
              <Button size="icon" className="size-14 rounded-full bg-primary text-black shadow-2xl transition-transform active:scale-95">
                <FaPlay className="size-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start justify-between gap-2">
               <div className="min-w-0">
                 <h3 className="line-clamp-1 text-sm font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
                 <p className="mt-0.5 truncate text-[12px] font-medium text-white/40">{author}</p>
               </div>
               <Button variant="ghost" size="icon" className="size-6 shrink-0 text-white/20 hover:text-white">
                 <FaEllipsisVertical className="size-3" />
               </Button>
            </div>

            <div className="flex items-center gap-4 text-[10px] font-bold text-white/40">
              <div className="flex items-center gap-1.5">
                <FaStar className="size-2.5 text-primary" />
                <span className="text-white/60">{rating}</span>
                <span className="font-medium text-white/20">|</span>
                <span>{views}</span>
              </div>
              <div className="flex items-center gap-1.5 ml-auto">
                <FaClock className="size-2.5" />
                <span>{duration}</span>
              </div>
            </div>
          </div>
        </article>
      )}

      {variant === "default" && (
        <article className="group space-y-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/5 bg-[#11100f] transition-all group-hover:border-white/10 group-hover:shadow-2xl">
            <CoverImage src={coverImage} alt={`Couverture de ${title}`} />
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100">
              <Button size="icon" className="size-16 rounded-full bg-primary text-black shadow-2xl transition-transform active:scale-95">
                <FaPlay className="size-6" />
              </Button>
            </div>
          </div>
          <div className="space-y-1.5 px-0.5">
            {category && <p className="text-[10px] font-black uppercase tracking-widest text-primary">{category}</p>}
            <h3 className="line-clamp-1 text-sm font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-[13px] font-medium text-white/50">{author}</p>
            {duration && <p className="mt-3 text-[11px] font-bold text-white/30">{duration}</p>}
          </div>
        </article>
      )}
    </>
  );

  if (variant === "author" || variant === "continue") return content;

  return (
    <Link href={`/livre/${id}`} className="block h-full cursor-pointer">
      {content}
    </Link>
  );
}

export function CollectionCard({ title, count, icon: Icon }: { title: string; count: string; icon: IconType }) {
  return (
    <article className="flex items-center gap-3 sm:gap-5 rounded-2xl border border-white/5 bg-[#11100f] p-5 transition-all hover:bg-[#161514] hover:border-white/10">
      <div className="flex size-14 items-center justify-center rounded-2xl bg-white/[0.03] text-primary">
        <Icon className="size-6" />
      </div>
      <div className="min-w-0">
        <h4 className="truncate text-[15px] font-bold text-white">{title}</h4>
        <p className="mt-1 text-xs font-medium text-white/40">{count}</p>
      </div>
    </article>
  );
}
