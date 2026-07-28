"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCommentSms, FaEnvelope, FaMobileScreen, FaShieldHalved } from "react-icons/fa6";
import { AuthFlowShell, authPrimaryButton, authSecondaryButton } from "@/components/auth/auth-flow-shell";

const methods = [[FaMobileScreen,"Application d’authentification","Recommandé"],[FaCommentSms,"SMS","Code envoyé sur votre téléphone"],[FaEnvelope,"Email","Code envoyé sur votre adresse"]] as const;

export default function TwoFactorPage() {
  const [selected, setSelected] = useState(0);
  const router = useRouter();
  return <AuthFlowShell wide><div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]"><div><h1 className="text-4xl font-black sm:text-5xl">Double authentification</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">Renforcez la sécurité de votre compte en activant la double authentification.</p><h2 className="mt-9 text-xl font-black">Choisissez votre méthode de vérification</h2><div className="mt-5 grid gap-4 sm:grid-cols-3">{methods.map(([Icon,title,description],index) => <button key={title} type="button" onClick={() => setSelected(index)} className={`rounded-2xl border p-5 text-center ${selected === index ? "border-primary bg-primary/8" : "border-white/15 bg-white/[0.04]"}`}><Icon className="mx-auto size-10 text-primary" /><strong className="mt-4 block">{title}</strong><span className="mt-2 block text-xs leading-5 text-white/45">{description}</span></button>)}</div><div className="mt-7 grid gap-3 sm:grid-cols-2"><button className={authPrimaryButton} onClick={() => router.push("/code-securite")}>Configurer la 2FA</button><button className={authSecondaryButton} onClick={() => router.push("/accueil")}>Plus tard</button></div></div><div className="grid min-h-96 place-items-center rounded-[2.5rem] border border-primary/20 bg-[radial-gradient(circle,rgba(255,122,0,.2),transparent_62%)]"><FaShieldHalved className="size-52 text-primary drop-shadow-[0_0_35px_rgba(255,122,0,.35)]" /></div></div></AuthFlowShell>;
}
