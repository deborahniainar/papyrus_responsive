import Image from "next/image";
import Link from "next/link";
import { FaBolt, FaGift, FaInfinity, FaShieldHalved } from "react-icons/fa6";
import { assetPath } from "@/lib/public-demo-data";
import { PremiumShell } from "../premium-shared";

export default function GiftCardPage() {
  return (
    <PremiumShell>
      <section className="relative mx-auto max-w-[96rem] px-5 pt-32 sm:px-8 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="rounded bg-[#ff7a00]/18 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-[#ff7a00]">Premium</span>
            <h1 className="mt-7 text-5xl font-black tracking-[-0.04em] sm:text-7xl">Carte cadeau PAPYRUS</h1>
            <p className="mt-5 max-w-xl text-2xl leading-9 text-white/76">Offrez des histoires. Offrez une experience.</p>
            <div className="mt-8 grid gap-4">
              {[[FaInfinity, "Des milliers de titres"], [FaShieldHalved, "Sans engagement"], [FaBolt, "Acces instantane"], [FaGift, "A utiliser facilement"]].map(([Icon, text]) => <div key={text as string} className="flex items-center gap-4"><Icon className="size-8 text-[#ff7a00]" /><span>{text as string}</span></div>)}
            </div>
          </div>
          <div className="rounded-3xl border border-[#ff7a00]/35 bg-[#11100f] p-10 text-center shadow-[0_30px_80px_rgba(255,122,0,0.2)]">
            <Image src={assetPath("/assets/logos/logo-white.png")} alt="PAPYRUS" width={240} height={120} className="mx-auto h-24 w-auto object-contain" />
            <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#ffb36b]">Carte cadeau premium</p>
          </div>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 lg:col-span-1">
            <h2 className="text-xl font-black">Choisissez un montant</h2>
            <div className="mt-5 grid grid-cols-3 gap-3">{["25 €", "50 €", "100 €"].map((amount, index) => <button key={amount} className={`min-h-16 rounded-lg border text-xl font-black ${index === 0 ? "border-[#ff7a00]" : "border-white/15"}`}>{amount}</button>)}</div>
            <Link href="/inscription" className="mt-7 flex min-h-14 items-center justify-center rounded-lg bg-[#ff7a00] font-black text-white">Offrir une carte cadeau</Link>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 lg:col-span-2">
            <h2 className="text-xl font-black">Pourquoi offrir PAPYRUS ?</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">{["Un cadeau utile et emotionnel", "Liberte totale", "Compatible avec tous les appareils", "Une attention qui dure"].map((item) => <p key={item} className="text-white/72">{item}</p>)}</div>
          </div>
        </div>
      </section>
    </PremiumShell>
  );
}
