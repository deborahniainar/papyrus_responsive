"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaHeadphones, FaXmark } from "react-icons/fa6";

const visitorLinks = [
  ["Accueil", "/"],
  ["Catalogue", "/visiteur/catalogue"],
  ["Nouveautés", "/visiteur/nouveautes"],
  ["Premium", "/visiteur/premium"],
  ["Aide", "/visiteur/aide"],
] as const;

export function VisitorMobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="grid size-11 shrink-0 place-items-center rounded-lg border border-white/15 bg-white/[0.04] text-white transition hover:border-[#ff7a00]/60 hover:text-[#ff9b42] lg:hidden"
        aria-label="Ouvrir le menu"
        aria-expanded={open}
      >
        <FaBars className="size-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />
          <aside className="absolute right-0 top-0 flex h-dvh w-[min(22rem,88vw)] flex-col border-l border-white/10 bg-[#090b0e] p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="flex items-center gap-3 font-black tracking-[0.15em] text-white">
                <FaHeadphones className="text-[#ff7a00]" />
                PAPYRUS
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid size-11 place-items-center rounded-lg border border-white/10 text-white/70 hover:text-white"
                aria-label="Fermer le menu"
              >
                <FaXmark className="size-5" />
              </button>
            </div>

            <nav className="mt-7 grid gap-2">
              {visitorLinks.map(([label, href]) => {
                const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-4 text-base font-bold transition ${
                      active
                        ? "bg-[#ff7a00]/12 text-[#ff9b42]"
                        : "text-white/70 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto grid gap-3 border-t border-white/10 pt-5">
              <Link
                href="/connexion"
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-center rounded-lg border border-white/20 font-bold text-white"
              >
                Connexion
              </Link>
              <Link
                href="/visiteur/premium/mensuel"
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-center rounded-lg bg-[#ff7a00] font-black text-white"
              >
                Essayer Premium
              </Link>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
