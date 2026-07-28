import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { AuthCard, AuthFlowShell, authPrimaryButton, authSecondaryButton } from "@/components/auth/auth-flow-shell";

export default function PasswordChangedPage() {
  return <AuthFlowShell><AuthCard><div className="mx-auto grid size-28 place-items-center rounded-full border-4 border-emerald-500/50 bg-emerald-500/10"><FaCheck className="size-14 text-emerald-400" /></div><h1 className="mt-8 text-center text-4xl font-black">Mot de passe <span className="text-emerald-400">modifié</span></h1><p className="mx-auto mt-5 max-w-lg text-center text-lg leading-8 text-white/55">Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.</p><div className="mx-auto mt-9 grid max-w-lg gap-3"><Link href="/connexion" className={authPrimaryButton}>Se connecter</Link><Link href="/" className={authSecondaryButton}>Retour à l’accueil</Link></div></AuthCard></AuthFlowShell>;
}
