import Link from "next/link";
import { FaEnvelope, FaGift, FaHeadphones, FaLock } from "react-icons/fa6";
import { PremiumShell } from "../premium-shared";

export default function ReferralPage() {
  return (
    <PremiumShell>
      <section className="relative mx-auto max-w-[96rem] px-5 pt-32 sm:px-8 lg:px-14">
        <span className="rounded bg-[#ff7a00]/18 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-[#ff7a00]">Parrainage</span>
        <h1 className="mt-7 text-5xl font-black tracking-[-0.04em] sm:text-7xl">Parrainage</h1>
        <p className="mt-5 max-w-xl text-2xl leading-9 text-white/76">Partagez l&apos;experience PAPYRUS Audio et profitez d&apos;un mois Premium offert.</p>
        <Link href="/inscription" className="mt-8 inline-flex min-h-14 items-center gap-3 rounded-lg bg-[#ff7a00] px-7 text-lg font-black text-white"><FaGift /> Inviter un proche</Link>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr_20rem]">
          {[["Invitez", FaEnvelope], ["Votre proche ecoute", FaHeadphones], ["Vous recevez 1 mois Premium", FaGift]].map(([title, Icon], index) => <div key={title as string} className="rounded-xl border border-white/10 bg-white/[0.04] p-8 text-center"><span className="mx-auto grid size-16 place-items-center rounded-full bg-white/[0.06] text-[#ff7a00]"><Icon className="size-7" /></span><h2 className="mt-5 text-xl font-black">{index + 1}. {title as string}</h2><p className="mt-3 text-white/58">Partagez votre lien et recevez votre recompense apres l&apos;inscription.</p></div>)}
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-8 text-center"><FaGift className="mx-auto size-14 text-[#ff7a00]" /><h2 className="mt-5 text-xl font-black">Vos recompenses</h2><p className="mt-4 text-5xl font-black text-[#ff7a00]">2</p><p>mois Premium obtenus</p></div>
        </div>
        <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-6"><h2 className="font-black">Conditions d&apos;eligibilite</h2><p className="mt-3 text-white/62"><FaLock className="mr-2 inline text-[#ff7a00]" /> Votre vie privee est notre priorite. Partagez votre lien en toute confiance.</p></div>
      </section>
    </PremiumShell>
  );
}
