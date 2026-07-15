"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FaArrowRight, FaBolt, FaMagnifyingGlass, FaWandMagicSparkles } from "react-icons/fa6";
import {
  getCorrection,
  getSmartSearchResults,
  groupSearchResults
} from "@/features/search/search-utils";
import { popularSearches, searchTypeIcons, searchTypeLabels } from "@/features/search/search-data";

type SmartSearchProps = {
  variant?: "nav" | "page";
  autoFocus?: boolean;
};

export function SmartSearch({ variant = "nav", autoFocus = false }: SmartSearchProps) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => getSmartSearchResults(query, variant === "page" ? 12 : 7), [query, variant]);
  const groupedResults = useMemo(() => groupSearchResults(results), [results]);
  const correction = useMemo(() => getCorrection(query), [query]);
  const isPage = variant === "page";

  return (
    <div className={isPage ? "w-full min-w-0 overflow-hidden" : "group/search relative w-full min-w-0 max-w-2xl"}>
      <div className="relative">
        <FaMagnifyingGlass className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/35" />
        <input
          autoFocus={autoFocus}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Rechercher un livre, auteur, narrateur, categorie..."
          className={`h-12 w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.04] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-primary/50 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(255,138,42,0.12)] ${
            isPage ? "h-14 text-base" : ""
          }`}
        />
      </div>

      <div
        className={
          isPage
            ? "mt-4 w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#11100f] p-2 shadow-2xl sm:p-3"
            : "pointer-events-none absolute left-0 right-0 top-full z-50 mt-3 w-full min-w-0 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-white/10 bg-[#11100f] p-2 opacity-0 shadow-2xl transition group-focus-within/search:pointer-events-auto group-focus-within/search:opacity-100 sm:p-3"
        }
      >
        <div className="mb-3 flex min-w-0 items-center justify-between gap-3 px-1 sm:px-2">
          <p className="m-0 flex min-w-0 items-center gap-2 text-[10px] font-black uppercase tracking-[0.12em] text-white/35 sm:tracking-[0.18em]">
            <FaBolt className="text-primary" />
            Recherche intelligente
          </p>
          <span className="hidden rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold text-primary sm:inline-flex">
            Instantanee
          </span>
        </div>

        {correction && (
          <Link
            href={`/recherche?q=${encodeURIComponent(correction)}`}
            className="mb-3 flex min-w-0 items-start gap-3 rounded-xl border border-primary/20 bg-primary/10 px-3 py-2 text-sm text-white transition hover:bg-primary/15"
          >
            <FaWandMagicSparkles className="text-primary" />
            <span className="min-w-0 break-words">
              Voulez-vous dire <strong className="break-words">{correction}</strong> ?
            </span>
          </Link>
        )}

        {!query.trim() && (
          <div className="grid min-w-0 gap-2 px-1 pb-2 sm:px-2">
            <p className="text-xs font-bold uppercase text-white/35">Recherches populaires</p>
            <div className="flex min-w-0 flex-wrap gap-2">
              {popularSearches.map((item) => (
                <button
                  className="max-w-full rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-left text-xs font-bold text-white/65 transition hover:border-primary/40 hover:text-white"
                  key={item}
                  onClick={() => setQuery(item)}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {query.trim() && groupedResults.length === 0 && (
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/60 sm:p-5">
            Aucun resultat instantane. Essayez un auteur, une categorie ou un mot-cle comme
            &quot;motivation&quot;.
          </div>
        )}

        <div className="grid max-h-[min(70vh,34rem)] min-w-0 gap-4 overflow-y-auto overflow-x-hidden pr-1">
          {groupedResults.map((group) => {
            const GroupIcon = searchTypeIcons[group.type];
            return (
              <section className="min-w-0" key={group.type}>
                <h3 className="mb-2 flex min-w-0 items-center gap-2 px-1 text-[11px] font-black uppercase tracking-[0.1em] text-white/35 sm:px-2 sm:text-xs sm:tracking-[0.15em]">
                  <GroupIcon className="text-primary" />
                  {searchTypeLabels[group.type]}
                </h3>
                <div className="grid min-w-0 gap-1">
                  {group.items.map((item) => {
                    const ItemIcon = searchTypeIcons[item.type];
                    return (
                      <Link
                        className="group/item flex min-w-0 items-center gap-2 rounded-xl px-2 py-2.5 text-sm transition hover:bg-white/[0.06] sm:gap-3 sm:px-3"
                        href={item.href}
                        key={item.id}
                      >
                        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary sm:size-10">
                          <ItemIcon />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block max-w-full overflow-hidden text-ellipsis whitespace-nowrap font-bold text-white">{item.title}</span>
                          <span className="block max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs text-white/45">{item.subtitle}</span>
                        </span>
                        <FaArrowRight className="hidden size-3 shrink-0 text-white/25 transition group-hover/item:text-primary sm:block" />
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
