import Link from "next/link";
import { FaBookOpen, FaCheck, FaDownload, FaGift, FaHeadphones, FaShieldHalved, FaXmark } from "react-icons/fa6";
import { PremiumShell } from "../premium-shared";

const plans = [
  ["Gratuit", "0 €", "Decouvrez Papyrus Audio.", "/inscription"],
  ["Premium Mensuel", "9,99 € / mois", "L'experience complete, sans engagement.", "/visiteur/premium/mensuel"],
  ["Premium Annuel", "99 € / an", "Economisez 2 mois avec l'offre annuelle.", "/visiteur/premium/annuel"]
];

export default function PricingPage() {
  return (
    <PremiumShell>
      <section className="relative mx-auto max-w-[96rem] px-5 pt-32 sm:px-8 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <span className="rounded bg-[#ff7a00]/18 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-[#ff7a00]">Premium</span>
            <h1 className="mt-7 text-5xl font-black tracking-[-0.04em] sm:text-7xl">Tarifs</h1>
            <p className="mt-5 text-xl leading-8 text-white/68">Choisissez l&apos;offre qui vous convient et plongez dans des histoires sans limites.</p>
            <Link href="/visiteur/premium/mensuel" className="mt-8 inline-flex min-h-14 items-center rounded-lg bg-[#ff7a00] px-7 text-base font-black text-white">Choisir l&apos;offre recommandee</Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {plans.map(([name, price, text, href], index) => (
              <Link key={name} href={href} className={`relative rounded-xl border bg-white/[0.04] p-7 text-center transition hover:border-[#ff7a00]/60 ${index === 1 ? "border-[#ff7a00]" : "border-white/10"}`}>
                {index === 1 && <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded bg-[#ff7a00] px-6 py-2 text-xs font-black uppercase">Recommande</span>}
                <h2 className="text-2xl font-black">{name}</h2>
                <p className="mt-3 text-4xl font-black">{price}</p>
                <p className="mt-3 min-h-12 text-sm text-white/58">{text}</p>
                <span className={`mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg font-black ${index === 1 ? "bg-[#ff7a00] text-white" : "border border-white/20"}`}>Choisir Premium</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
          {[
            [FaBookOpen, "Acces a tout le catalogue"],
            [FaDownload, "Ecoute hors connexion"],
            [FaHeadphones, "Qualite audio superieure"],
            [FaShieldHalved, "Support prioritaire"],
            [FaGift, "Carte cadeau"]
          ].map(([Icon, label]) => (
            <div key={label as string} className="grid grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] border-b border-white/8 p-5 last:border-b-0">
              <span className="flex items-center gap-4"><Icon className="size-7 text-[#ff7a00]" /> {label as string}</span>
              <FaXmark className="mx-auto text-white/45" />
              <FaCheck className="mx-auto text-[#ff7a00]" />
              <FaCheck className="mx-auto text-[#ff7a00]" />
            </div>
          ))}
        </div>
      </section>
    </PremiumShell>
  );
}
