import Link from "next/link";
import { FaCheck, FaDownload, FaHeadphones, FaHeart, FaShieldHalved } from "react-icons/fa6";
import { PremiumShell } from "../premium-shared";

export default function MonthlyPremiumPage() {
  return (
    <PremiumShell>
      <section className="relative mx-auto max-w-[90rem] px-5 pt-32 sm:px-8 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_28rem] lg:items-start">
          <div>
            <span className="rounded bg-[#ff7a00]/18 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-[#ff7a00]">Premium</span>
            <h1 className="mt-7 text-5xl font-black tracking-[-0.04em] sm:text-7xl">Abonnement mensuel</h1>
            <p className="mt-6 max-w-2xl text-2xl leading-9 text-white/76">Accedez a tout le catalogue Papyrus Audio. Des milliers d&apos;histoires audio de qualite, sans limites.</p>
            <Link href="/inscription" className="mt-8 inline-flex min-h-16 items-center rounded-lg bg-[#ff7a00] px-9 text-xl font-black text-white">Commencer pour 9,99 € / mois</Link>
            <p className="mt-4 text-white/62">Sans engagement - Annulez a tout moment</p>
          </div>
          <div className="rounded-xl border border-[#ff7a00] bg-white/[0.045] p-8">
            <p className="text-xl font-black">Premium Mensuel</p>
            <p className="mt-4 text-5xl font-black">9,99 € <span className="text-base font-medium">/ mois</span></p>
            <div className="mt-7 grid gap-3 text-white/75">
              {["Acces a tout le catalogue", "Ecoute illimitee", "Qualite audio superieure", "Telechargement et ecoute hors connexion", "Recommandations personnalisees", "Annulation a tout moment"].map((item) => <span key={item} className="inline-flex gap-2"><FaCheck className="mt-1 text-[#ff7a00]" /> {item}</span>)}
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[[FaHeadphones, "Des milliers d'histoires"], [FaDownload, "Ecoutez partout"], [FaShieldHalved, "Paiement securise"], [FaHeart, "Pour vous"]].map(([Icon, title]) => <div key={title as string} className="rounded-lg border border-white/10 bg-white/[0.04] p-6"><Icon className="size-8 text-[#ff7a00]" /><h2 className="mt-4 font-black">{title as string}</h2></div>)}
        </div>
      </section>
    </PremiumShell>
  );
}
