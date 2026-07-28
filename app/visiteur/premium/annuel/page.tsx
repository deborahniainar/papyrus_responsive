import Link from "next/link";
import { FaCheck, FaDownload, FaHeadphones, FaShieldHalved } from "react-icons/fa6";
import { PremiumShell } from "../premium-shared";

export default function AnnualPremiumPage() {
  return (
    <PremiumShell>
      <section className="relative mx-auto max-w-[90rem] px-5 pt-32 sm:px-8 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_35rem] lg:items-center">
          <div>
            <span className="rounded bg-[#ff7a00]/18 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-[#ff7a00]">Premium</span>
            <h1 className="mt-7 text-5xl font-black tracking-[-0.04em] sm:text-7xl">Abonnement annuel</h1>
            <p className="mt-6 max-w-2xl text-2xl leading-9 text-white/76">Profitez de l&apos;experience Papyrus Audio toute l&apos;annee et economisez avec notre offre annuelle.</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">{[[FaHeadphones, "Ecoute illimitee"], [FaDownload, "Telechargement"], [FaShieldHalved, "Sans engagement"]].map(([Icon, text]) => <div key={text as string} className="flex gap-3"><Icon className="size-8 text-[#ff7a00]" /><span>{text as string}</span></div>)}</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-8">
            <span className="rounded bg-[#ff7a00] px-4 py-2 text-xs font-black uppercase">Recommande</span>
            <h2 className="mt-8 text-3xl font-black">Premium Annuel</h2>
            <p className="mt-3 text-6xl font-black">99 € <span className="text-xl font-medium">/ an</span></p>
            <p className="mt-4 font-black text-[#ff7a00]">Economisez 2 mois avec l&apos;offre annuelle.</p>
            <Link href="/inscription" className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-[#ff7a00] text-lg font-black text-white">Economiser avec l&apos;annuel</Link>
          </div>
        </div>
        <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.04] p-7">
          <h2 className="text-xl font-black">Tout ce qui est inclus</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">{["Acces a tout le catalogue", "Ecoute illimitee", "Qualite audio superieure", "Telechargement hors connexion", "Recommandations personnalisees", "Annulation a tout moment"].map((item) => <span key={item} className="inline-flex gap-2"><FaCheck className="text-[#ff7a00]" /> {item}</span>)}</div>
        </div>
      </section>
    </PremiumShell>
  );
}
