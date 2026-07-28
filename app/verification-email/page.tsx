"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCheck, FaEnvelope, FaShieldHalved } from "react-icons/fa6";
import { AuthCard, AuthFlowShell, authPrimaryButton } from "@/components/auth/auth-flow-shell";
import { useRole } from "@/components/auth/role-provider";

export default function VerifyEmailPage() {
  const { user, profile } = useRole();
  const [resent, setResent] = useState(false);

  return (
    <AuthFlowShell wide>
      <div className="grid gap-5 lg:grid-cols-[1.4fr_.8fr]">
        <AuthCard>
          <div className="mx-auto grid size-28 place-items-center rounded-full bg-primary/10"><FaEnvelope className="size-14 text-primary" /></div>
          <h1 className="mt-7 text-center text-4xl font-black">Vérifiez votre email</h1>
          <p className="mt-4 text-center text-white/60">Nous avons envoyé un email de vérification à <strong className="text-primary">{user.email}</strong>.</p>
          <ol className="mx-auto mt-8 max-w-xl space-y-4">
            {["Ouvrez votre boîte mail", "Cliquez sur le lien de vérification", "Votre compte sera activé"].map((step, index) => <li key={step} className="flex items-center gap-4 border-b border-white/8 pb-4"><span className="grid size-9 shrink-0 place-items-center rounded-full border border-primary text-primary">{index + 1}</span><span className="font-bold">{step}</span></li>)}
          </ol>
          <div className="mx-auto mt-8 max-w-xl">
            <Link href="/email-verifie" className={authPrimaryButton}>Simuler la vérification</Link>
            <button type="button" onClick={() => setResent(true)} className="mt-4 w-full text-center font-bold text-primary underline">{resent ? "Email renvoyé !" : "Renvoyer l’email"}</button>
          </div>
        </AuthCard>
        <AuthCard>
          <FaShieldHalved className="size-12 text-primary" />
          <h2 className="mt-5 text-2xl font-black">Votre sécurité, notre priorité</h2>
          <div className="mt-8 space-y-6">
            {["Compte sécurisé", "Données protégées", `Espace ${profile.label}`].map((label) => <div key={label} className="flex items-center gap-4"><span className="grid size-11 place-items-center rounded-full bg-white/5"><FaCheck className="text-primary" /></span><strong>{label}</strong></div>)}
          </div>
        </AuthCard>
      </div>
    </AuthFlowShell>
  );
}
