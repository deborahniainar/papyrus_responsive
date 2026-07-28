"use client";

import Link from "next/link";
import { FaCheck, FaDownload, FaHeadphones, FaHeart } from "react-icons/fa6";
import { AuthCard, AuthFlowShell, authPrimaryButton, authSecondaryButton } from "@/components/auth/auth-flow-shell";
import { useRole } from "@/components/auth/role-provider";

export default function EmailVerifiedPage() {
  const { profile } = useRole();
  return <AuthFlowShell wide><div className="grid gap-5 lg:grid-cols-2"><AuthCard><div className="mx-auto grid size-28 place-items-center rounded-full border-4 border-emerald-500/50 bg-emerald-500/10"><FaCheck className="size-14 text-emerald-400" /></div><h1 className="mt-8 text-center text-5xl font-black">Email véri<span className="text-emerald-400">fié</span></h1><p className="mt-5 text-center text-xl text-white/55">Votre compte est prêt.</p><div className="mt-9 grid gap-3"><Link href={profile.home} className={authPrimaryButton}>Accéder à mon espace {profile.shortLabel}</Link><Link href="/catalogue" className={authSecondaryButton}>Explorer le catalogue</Link></div></AuthCard><AuthCard><h2 className="text-2xl font-black">Et maintenant ?</h2><div className="mt-7 space-y-7">{[[FaHeadphones,"Explorez votre espace"],[FaHeart,"Ajoutez vos favoris"],[FaDownload,"Retrouvez vos contenus"]].map(([Icon,label]) => { const DisplayIcon = Icon; return <div key={label as string} className="flex gap-5"><DisplayIcon className="size-8 shrink-0 text-emerald-400" /><div><strong className="text-lg">{label as string}</strong><p className="mt-1 text-white/45">Vos outils sont maintenant disponibles.</p></div></div>; })}</div></AuthCard></div></AuthFlowShell>;
}
