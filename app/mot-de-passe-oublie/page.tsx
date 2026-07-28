"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaEnvelope, FaShieldHalved } from "react-icons/fa6";
import { AuthCard, AuthFlowShell, authInputClass, authPrimaryButton, authSecondaryButton } from "@/components/auth/auth-flow-shell";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  return (
    <AuthFlowShell wide>
      <div className="grid overflow-hidden rounded-3xl border border-white/12 bg-white/[0.035] shadow-2xl lg:grid-cols-2">
        <div className="p-7 sm:p-12">
          <h1 className="text-3xl font-black sm:text-5xl">Mot de passe oublié</h1>
          <p className="mt-5 max-w-xl leading-7 text-white/60">
            Saisissez l’adresse e-mail associée à votre compte. Nous vous enverrons un lien sécurisé.
          </p>
          {sent ? (
            <div className="mt-8 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-300">
              Le lien de réinitialisation a été envoyé. Vérifiez votre boîte de réception.
            </div>
          ) : (
            <form className="mt-8 space-y-5" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
              <label className="block">
                <span className="mb-2 block font-bold">Adresse e-mail</span>
                <input className={authInputClass} type="email" required placeholder="votre@email.com" />
              </label>
              <button className={authPrimaryButton} type="submit">Recevoir le lien</button>
            </form>
          )}
          <Link href="/connexion" className={`${authSecondaryButton} mt-4 gap-3`}><FaArrowLeft /> Retour à la connexion</Link>
        </div>
        <AuthCard>
          <FaShieldHalved className="size-20 text-primary" />
          <h2 className="mt-7 text-3xl font-black">Votre compte est entre de bonnes mains</h2>
          <p className="mt-5 leading-7 text-white/60">Nous protégeons vos données et votre expérience d’écoute avec le plus haut niveau de sécurité.</p>
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
            <FaEnvelope className="size-8 text-primary" />
            <div><strong>Lien sécurisé</strong><p className="mt-1 text-sm text-white/45">Valable pendant une durée limitée.</p></div>
          </div>
        </AuthCard>
      </div>
    </AuthFlowShell>
  );
}
