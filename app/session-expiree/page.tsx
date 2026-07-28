import Link from "next/link";
import { FaHeadphones, FaHouse, FaLock, FaRightToBracket } from "react-icons/fa6";
import { AuthCard, AuthFlowShell, authPrimaryButton, authSecondaryButton } from "@/components/auth/auth-flow-shell";

export default function SessionExpiredPage() {
  return <AuthFlowShell><AuthCard><FaLock className="mx-auto size-12 text-primary" /><h1 className="mt-6 text-center text-4xl font-black">Session expirée</h1><p className="mx-auto mt-5 max-w-xl text-center leading-7 text-white/60">Pour protéger votre compte, nous avons fermé votre session en raison d’une inactivité prolongée. Vos contenus et préférences sont en sécurité.</p><div className="mx-auto mt-9 grid max-w-lg gap-3"><Link href="/connexion" className={`${authPrimaryButton} gap-3`}><FaRightToBracket /> Se reconnecter</Link><Link href="/" className={`${authSecondaryButton} gap-3`}><FaHouse /> Retour à l’accueil</Link></div><p className="mt-8 text-center text-white/45"><FaHeadphones className="mr-2 inline text-primary" />Besoin d’aide ? <Link href="/aide" className="font-bold text-primary">Consultez notre centre d’aide</Link></p></AuthCard></AuthFlowShell>;
}
