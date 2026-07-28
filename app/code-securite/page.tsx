"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FaShieldHalved } from "react-icons/fa6";
import { AuthCard, AuthFlowShell, authPrimaryButton, authSecondaryButton } from "@/components/auth/auth-flow-shell";

export default function SecurityCodePage() {
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<Array<HTMLInputElement | null>>([]);
  const router = useRouter();
  const updateDigit = (index: number, value: string) => {
    const next = [...digits];
    next[index] = value.replace(/\D/g, "").slice(-1);
    setDigits(next);
    if (next[index] && index < 5) inputs.current[index + 1]?.focus();
  };
  return <AuthFlowShell><AuthCard><FaShieldHalved className="mx-auto size-14 text-primary" /><h1 className="mt-6 text-center text-4xl font-black">Saisir le code de sécurité</h1><p className="mt-4 text-center text-white/55">Entrez le code à 6 chiffres envoyé à votre adresse e-mail.</p><div className="mt-8 flex justify-center gap-2 sm:gap-4">{digits.map((digit,index) => <input key={index} ref={(element) => { inputs.current[index] = element; }} value={digit} onChange={(event) => updateDigit(index,event.target.value)} className="size-12 rounded-xl border border-white/20 bg-black/20 text-center text-2xl font-black outline-none focus:border-primary sm:size-16" inputMode="numeric" aria-label={`Chiffre ${index + 1}`} />)}</div><div className="mx-auto mt-8 grid max-w-xl gap-3"><button disabled={digits.some((digit) => !digit)} className={`${authPrimaryButton} disabled:opacity-40`} onClick={() => router.push("/email-verifie")}>Valider le code</button><button className={authSecondaryButton}>Renvoyer un code</button></div></AuthCard></AuthFlowShell>;
}
