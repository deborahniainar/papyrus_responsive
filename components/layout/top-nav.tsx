"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaBell, FaChevronDown, FaCrown, FaXmark } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SmartSearch } from "@/features/search/smart-search";

const mobileLinks = [
  ["Accueil", "/accueil"],
  ["Catalogue", "/catalogue"],
  ["Bibliothèque", "/bibliotheque"],
  ["Collections", "/collections"],
  ["Marque-pages", "/marque-pages"],
  ["Tableau de bord", "/tableau-de-bord"],
  ["Lecteur", "/lecteur"],
  ["Profil", "/profil"],
];

export function TopNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/90 backdrop-blur-md">
      <div className="flex min-h-16 items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:h-20 lg:px-8">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(true)}
          className="shrink-0 text-white/70 hover:bg-white/5 hover:text-white lg:hidden"
        >
          <FaBars className="size-5" />
        </Button>

        <div className="min-w-0 flex-1">
          <SmartSearch />
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <Button
            variant="outline"
            className="hidden h-10 items-center gap-2 border-primary/20 bg-primary/10 px-4 text-xs font-bold text-primary hover:bg-primary/20 md:flex"
          >
            <FaCrown className="size-3.5" />
            Premium
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="relative size-10 text-white/60 hover:bg-white/5 hover:text-white"
          >
            <FaBell className="size-5" />
            <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-primary" />
          </Button>

          <Link href="/profil" className="group flex cursor-pointer items-center gap-2 pl-1 sm:gap-3 sm:pl-2">
            <Avatar className="size-9 border border-white/10 transition-colors group-hover:border-primary/50 sm:size-10">
              <AvatarImage src="https://i.pravatar.cc/40?u=user123" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="hidden flex-col items-start xl:flex">
              <span className="text-sm font-bold text-white transition-colors group-hover:text-primary">
                John Doe
              </span>
              <span className="text-[10px] font-black uppercase text-primary">Premium</span>
            </div>
            <FaChevronDown className="hidden size-3 text-white/30 transition-colors group-hover:text-white sm:block xl:ml-1" />
          </Link>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Fermer le menu"
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />
          <nav className="absolute left-0 top-0 flex h-dvh w-[min(20rem,86vw)] flex-col border-r border-white/10 bg-[#080706] p-5 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <Link href="/accueil" onClick={() => setOpen(false)} className="text-xl font-black tracking-[0.18em] text-white">
                PAPYRUS
              </Link>
              <Button type="button" variant="ghost" size="icon" onClick={() => setOpen(false)} className="text-white/70 hover:bg-white/5 hover:text-white">
                <FaXmark className="size-5" />
              </Button>
            </div>
            <div className="grid gap-2 overflow-y-auto pb-8">
              {mobileLinks.map(([label, href]) => {
                const active = pathname === href || (href === "/accueil" && pathname === "/");
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-bold transition ${active ? "bg-primary/15 text-primary" : "text-white/70 hover:bg-white/5 hover:text-white"}`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
