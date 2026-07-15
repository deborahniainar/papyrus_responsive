import Link from "next/link";
import {
  FaApple,
  FaArrowRight,
  FaEnvelope,
  FaEyeSlash,
  FaGoogle,
  FaLock
} from "react-icons/fa6";
import { AuthShell } from "@/components/auth/auth-shell";

const fieldWrap =
  "flex min-h-13 items-center gap-3 rounded-lg border border-white/20 bg-black/40 px-4 transition focus-within:border-primary/70 focus-within:bg-black/65 focus-within:shadow-[0_0_0_4px_var(--primary-shadow)]";
const inputClass = "w-full border-0 bg-transparent font-[inherit] text-white outline-0 placeholder:text-white/45";
const socialButton =
  "flex min-h-13 items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/[0.035] text-[0.96rem] font-bold text-white transition hover:border-white/30 hover:bg-white/10";

export default function LoginPage() {
  return (
    <AuthShell>
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-2xl font-bold">Bienvenue</h1>
        <p className="m-0 text-white/70">Connectez-vous a votre compte pour continuer</p>
      </div>

      <form className="grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm text-white/80">Email</span>
          <div className={fieldWrap}>
            <FaEnvelope className="shrink-0 text-white/65" />
            <input className={inputClass} type="email" name="email" placeholder="votre@email.com" autoComplete="email" />
          </div>
        </label>

        <label className="grid gap-2">
          <span className="text-sm text-white/80">Mot de passe</span>
          <div className={fieldWrap}>
            <FaLock className="shrink-0 text-white/65" />
            <input
              className={inputClass}
              type="password"
              name="password"
              placeholder="••••••••••••••"
              autoComplete="new-password"
            />
            <button className="grid shrink-0 place-items-center border-0 bg-transparent text-white/70" type="button" aria-label="Afficher le mot de passe">
              <FaEyeSlash />
            </button>
          </div>
        </label>
        
        <div className="mt-1 flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-start">
          <label className="inline-flex items-center gap-3 text-sm text-white/75">
            <input className="size-4 accent-primary" type="checkbox" name="remember" />
            <span>Se souvenir de moi</span>
          </label>
          <Link className="font-bold text-primary" href="/mot-de-passe-oublie">
            Mot de passe oublie ?
          </Link>
        </div>

        <Link
          className="flex min-h-13 items-center justify-center gap-4 rounded-lg bg-gradient-to-br from-(--primary-gradient-start) to-(--primary-gradient-end) text-base font-black text-white shadow-[0_14px_34px_var(--primary-shadow)] transition hover:-translate-y-0.5 hover:brightness-110"
          href="/accueil"
        >
          Se connecter
          <FaArrowRight />
        </Link>
      </form>

      <div className="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <span className="h-px bg-white/15" />
        <p className="m-0 text-xs uppercase text-white/55">ou continuer avec</p>
        <span className="h-px bg-white/15" />
      </div>

      <div className="grid gap-3">
        <button className={socialButton} type="button">
          <FaGoogle className="text-lg" />
          Continuer avec Google
        </button>
        <button className={socialButton} type="button">
          <FaApple className="text-lg" />
          Continuer avec Apple
        </button>
      </div>

      <p className="mt-8 flex flex-wrap justify-center gap-3 text-white/80">
        Vous n&apos;avez pas de compte ?
        <Link className="font-bold text-primary" href="/inscription">
          Creer un compte
        </Link>
      </p>
    </AuthShell>
  );
}
