import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaBackwardStep,
  FaClock,
  FaDownload,
  FaEllipsis,
  FaForwardStep,
  FaHeart,
  FaPause,
  FaRotateLeft,
  FaRotateRight,
  FaShareNodes
} from "react-icons/fa6";

const actionItems = [
  { icon: FaClock, label: "Minuteur" },
  { icon: FaDownload, label: "Telecharger" },
  { icon: FaHeart, label: "Ajouter aux favoris" },
  { icon: FaShareNodes, label: "Partager" },
  { icon: FaEllipsis, label: "Plus" }
];

function CoverArt() {
  return (
    <div className="relative aspect-[3/4] w-[min(23rem,72vw)] overflow-hidden rounded-2xl border border-orange-300/20 bg-[#160b04] shadow-[0_34px_90px_rgba(0,0,0,0.62)]">
      <Image src="/demos/papyrus/assets/images/books/cover-chute-geants.png" alt="Couverture de L'Alchimiste" fill priority sizes="(max-width: 768px) 72vw, 23rem" className="object-cover" />
    </div>
  );
}


export function PremiumAudioPlayer() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#050505] px-6 pb-36 pt-8 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_43%,rgba(255,119,0,0.45),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.93)),linear-gradient(120deg,#040404,#241006_48%,#030303)]" />
      <div className="absolute inset-0 opacity-45 bg-[radial-gradient(circle_at_25%_50%,transparent_0_12%,rgba(0,0,0,0.55)_13%_18%,transparent_19%),radial-gradient(circle_at_80%_48%,transparent_0_13%,rgba(0,0,0,0.5)_14%_19%,transparent_20%)]" />
      <div className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 select-none font-display text-[clamp(4rem,12vw,10rem)] font-bold uppercase leading-none text-white/[0.045]">
        L&apos;ALCHIMISTE
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
        <Link
          href="/accueil"
          className="mb-8 grid size-12 place-items-center self-start rounded-xl border border-white/10 bg-white/[0.04] text-white/75 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
          aria-label="Retour"
        >
          <FaArrowLeft />
        </Link>

        <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4 max-md:grid-cols-1">
          <button className="justify-self-end rounded-full p-4 text-white/45 transition hover:text-white max-md:hidden">
            <FaRotateLeft className="text-5xl" />
            <span className="-mt-10 block text-sm font-bold">15</span>
          </button>
          <CoverArt />
          <button className="justify-self-start rounded-full p-4 text-white/45 transition hover:text-white max-md:hidden">
            <FaRotateRight className="text-5xl" />
            <span className="-mt-10 block text-sm font-bold">15</span>
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="mb-2 text-sm font-bold text-primary">Chapitre 7 sur 28</p>
          <h1 className="text-4xl font-black text-white md:text-5xl">L&apos;Alchimiste</h1>
          <p className="mt-3 text-xl text-white/75">
            Paulo Coelho <span className="text-white/35">›</span>
          </p>
          <p className="mt-2 text-lg text-white/65">Narrateur : Bernard Gabay</p>
        </div>

        <div className="mt-9 w-full max-w-4xl">
          <div className="relative h-1.5 rounded-full bg-white/20">
            <div className="h-full w-[30%] rounded-full bg-primary" />
            <div className="absolute left-[30%] top-1/2 size-3 -translate-y-1/2 rounded-full bg-primary" />
            <div className="absolute left-[41%] top-1/2 h-5 w-40 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,138,42,0.7)_1px,transparent_2px)] bg-[length:7px_7px] opacity-50" />
          </div>
          <div className="mt-3 flex justify-between text-sm tabular-nums text-white/75">
            <span>1:05:32</span>
            <span>-3:15:48</span>
          </div>
        </div>

        <div className="mt-8 flex w-full max-w-3xl items-center justify-between gap-4 max-md:grid max-md:grid-cols-5">
          <button className="grid gap-3 text-center text-white/70 transition hover:text-white">
            <FaBackwardStep className="mx-auto text-2xl" />
            <span className="text-sm max-md:hidden">Chapitre precedent</span>
          </button>
          <button className="grid gap-2 text-center text-white/70 transition hover:text-white">
            <FaRotateLeft className="mx-auto text-4xl" />
            <span className="text-sm max-md:hidden">Retour 30s</span>
          </button>
          <button className="grid size-20 place-items-center rounded-full bg-primary text-4xl text-white shadow-[0_0_45px_rgba(255,138,42,0.45)] transition hover:scale-105 max-md:size-16">
            <FaPause />
          </button>
          <button className="grid gap-2 text-center text-white/70 transition hover:text-white">
            <FaRotateRight className="mx-auto text-4xl" />
            <span className="text-sm max-md:hidden">Avance 30s</span>
          </button>
          <button className="grid gap-3 text-center text-white/70 transition hover:text-white">
            <FaForwardStep className="mx-auto text-2xl" />
            <span className="text-sm max-md:hidden">Chapitre suivant</span>
          </button>
        </div>

        <div className="mt-10 flex w-full max-w-5xl flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-7 text-white/75">
          <button className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-bold text-white">
            1.0x
          </button>
          <span className="text-sm">Vitesse</span>
          {actionItems.map((item, index) => (
            <button className="flex items-center gap-3 text-sm transition hover:text-white" key={item.label}>
              {index === 1 && <span className="mr-7 h-8 w-px bg-white/10 max-sm:hidden" />}
              <item.icon className="text-xl" />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
