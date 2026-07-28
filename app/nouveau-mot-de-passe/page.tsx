"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { FaCheck, FaLock } from "react-icons/fa6";
import { AuthCard, AuthFlowShell, authInputClass, authPrimaryButton, authSecondaryButton } from "@/components/auth/auth-flow-shell";

export default function NewPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const router = useRouter();
  const rules = useMemo(() => [
    ["Au moins 8 caractères", password.length >= 8],
    ["Au moins une majuscule", /[A-Z]/.test(password)],
    ["Au moins une minuscule", /[a-z]/.test(password)],
    ["Au moins un chiffre", /\d/.test(password)],
    ["Au moins un caractère spécial", /[^A-Za-z0-9]/.test(password)],
  ] as const, [password]);
  const valid = rules.every(([, passed]) => passed) && password === confirmation;

  return (
    <AuthFlowShell>
      <AuthCard>
        <FaLock className="mx-auto size-12 text-primary" />
        <h1 className="mt-6 text-center text-3xl font-black">Créer un nouveau mot de passe</h1>
        <p className="mt-3 text-center text-white/55">Choisissez un mot de passe différent des précédents.</p>
        <form className="mx-auto mt-8 max-w-xl space-y-5" onSubmit={(event) => { event.preventDefault(); if (valid) router.push("/mot-de-passe-modifie"); }}>
          <label className="block"><span className="mb-2 block font-bold">Nouveau mot de passe</span><input value={password} onChange={(event) => setPassword(event.target.value)} className={authInputClass} type="password" /></label>
          <label className="block"><span className="mb-2 block font-bold">Confirmer le mot de passe</span><input value={confirmation} onChange={(event) => setConfirmation(event.target.value)} className={authInputClass} type="password" /></label>
          <div className="grid gap-3 text-sm sm:grid-cols-2">
            {rules.map(([label, passed]) => <span key={label} className={passed ? "text-emerald-400" : "text-white/45"}><FaCheck className="mr-2 inline" />{label}</span>)}
          </div>
          <button disabled={!valid} className={`${authPrimaryButton} disabled:cursor-not-allowed disabled:opacity-40`} type="submit">Mettre à jour</button>
          <button className={authSecondaryButton} type="button" onClick={() => router.back()}>Retour</button>
        </form>
      </AuthCard>
    </AuthFlowShell>
  );
}
