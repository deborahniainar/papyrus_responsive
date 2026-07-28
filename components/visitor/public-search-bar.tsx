"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { getVisitorSearchMatches } from "@/lib/visitor-search-data";

export function PublicSearchBar({
  className = "",
  initialValue = "",
  onSearch
}: {
  className?: string;
  initialValue?: string;
  onSearch?: (value: string) => void;
}) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);
  const suggestions = useMemo(() => getVisitorSearchMatches(value), [value]);

  function submitSearch(nextValue: string) {
    const search = nextValue.trim();

    if (!search) return;

    setIsOpen(false);
    onSearch?.(search);
    router.push(`/visiteur/catalogue?search=${encodeURIComponent(search)}`);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitSearch(value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative h-11 w-[26rem] items-center gap-3 rounded-full border border-white/12 bg-white/[0.045] px-5 ${className}`}
    >
      <FaMagnifyingGlass className="size-4 shrink-0 text-white/45" />
      <input
        name="search"
        type="search"
        value={value}
        onChange={(event) => {
          const nextValue = event.target.value;
          setValue(nextValue);
          setIsOpen(Boolean(nextValue.trim()));
        }}
        onFocus={() => setIsOpen(Boolean(value.trim()))}
        onBlur={() => window.setTimeout(() => setIsOpen(false), 120)}
        placeholder="Rechercher un livre, un auteur, une voix..."
        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/38"
      />
      {value && (
        <button
          type="button"
          onClick={() => {
            setValue("");
            setIsOpen(false);
            onSearch?.("");
          }}
          className="text-white/45 transition hover:text-[#ff7a00]"
          aria-label="Effacer la recherche"
        >
          <FaXmark />
        </button>
      )}
      {isOpen && (
        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-xl border border-white/12 bg-[#101216] shadow-2xl">
          {suggestions.length > 0 ? (
            suggestions.map((item) => (
              <button
                key={`${item.id}-${item.title}`}
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  setValue(item.title);
                  submitSearch(item.title);
                }}
                className="flex w-full items-center gap-3 border-b border-white/8 px-4 py-3 text-left transition last:border-b-0 hover:bg-white/[0.06]"
              >
                <span className="relative size-10 shrink-0 overflow-hidden rounded bg-white/8">
                  <Image src={item.cover} alt="" fill sizes="40px" className="object-cover" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-black text-white">{item.title}</span>
                  <span className="block truncate text-xs text-white/48">
                    {item.author} - {item.narrator}
                  </span>
                </span>
              </button>
            ))
          ) : (
            <p className="px-4 py-3 text-sm text-white/52">Aucune suggestion</p>
          )}
        </div>
      )}
    </form>
  );
}
