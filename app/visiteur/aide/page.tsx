import Link from "next/link";
import {
  FaChevronRight,
  FaCircleCheck,
  FaCreditCard,
  FaCrown,
  FaFire,
  FaHeadphones,
  FaMagnifyingGlass,
  FaMicrophone,
  FaMobileScreenButton,
  FaRegUser,
  FaRegCircleCheck
} from "react-icons/fa6";
import { HelpShell, HelpVisual } from "./aide-shared";

const categories = [
  ["Compte", "Gerez votre compte et vos informations personnelles.", FaRegUser],
  ["Lecture", "Aide a la lecture, telechargements et qualite audio.", FaHeadphones],
  ["Abonnement", "Tout savoir sur Premium et la gestion de votre abonnement.", FaCrown],
  ["Paiement", "Modes de paiement, facturation et remboursements.", FaCreditCard],
  ["Application mobile", "Installation, fonctionnalites et aide sur nos applications.", FaMobileScreenButton],
  ["Createurs", "Informations et ressources pour les auteurs et narrateurs.", FaMicrophone]
];

const popularArticles = [
  "Comment creer un compte sur PAPYRUS Audio ?",
  "Comment fonctionne l'essai Premium gratuit ?",
  "Quels sont les moyens de paiement acceptes ?",
  "Puis-je ecouter hors connexion ?",
  "Comment resilier mon abonnement Premium ?",
  "Puis-je changer de formule d'abonnement ?",
  "Comment contacter le support si j'ai un probleme ?",
  "Ou trouver mes factures ?"
];

export default function HelpCenterPage() {
  return (
    <HelpShell>
      <section className="relative mx-auto max-w-[112rem] px-5 pt-32 sm:px-8 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_33rem] lg:items-end">
          <div>
            <h1 className="text-5xl font-black tracking-[-0.04em] sm:text-6xl">Centre d&apos;aide</h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/68">
              Trouvez rapidement des reponses et des ressources pour profiter pleinement de PAPYRUS Audio.
            </p>
            <div className="mt-9 flex h-16 max-w-3xl items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] px-6">
              <FaMagnifyingGlass className="size-6 text-white/62" />
              <input placeholder="Rechercher dans l'aide..." className="w-full bg-transparent text-lg text-white outline-none placeholder:text-white/42" />
            </div>
          </div>
          <div>
            <HelpVisual />
            <Link href="/visiteur/aide/contact" className="mt-4 inline-flex min-h-14 items-center gap-3 rounded-lg bg-[#ff7a00] px-7 text-base font-black text-white shadow-[0_16px_32px_rgba(255,122,0,0.25)] transition hover:bg-[#ff8c22]">
              <FaHeadphones />
              Ouvrir une demande
            </Link>
            <p className="mt-2 text-sm text-white/60">Reponse sous 24h ouvrees</p>
          </div>
        </div>

        <div className="mt-11 grid gap-6 xl:grid-cols-[1fr_39rem]">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {categories.map(([title, text, Icon]) => (
              <Link key={title as string} href="/visiteur/aide/faq" className="group rounded-lg border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-[#ff7a00]/45 hover:bg-white/[0.06]">
                <Icon className="size-9 text-[#ff7a00]" />
                <h2 className="mt-7 text-xl font-black">{title as string}</h2>
                <p className="mt-3 min-h-12 text-sm leading-6 text-white/64">{text as string}</p>
                <p className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#ff7a00]">
                  Voir les articles
                  <FaChevronRight className="size-3 transition group-hover:translate-x-1" />
                </p>
              </Link>
            ))}
          </div>

          <aside className="grid gap-4">
            <section className="rounded-lg border border-white/10 bg-white/[0.04] p-7">
              <h2 className="mb-5 flex items-center gap-3 text-xl font-black"><FaFire className="text-[#ff7a00]" /> Articles populaires</h2>
              <div className="grid gap-1">
                {popularArticles.map((article) => (
                  <Link key={article} href="/visiteur/aide/faq" className="flex items-center justify-between gap-4 rounded-md py-2.5 text-sm text-white/84 transition hover:bg-white/[0.04] hover:px-2 hover:text-[#ff7a00]">
                    {article}
                    <FaChevronRight className="size-3 shrink-0 text-white/52" />
                  </Link>
                ))}
              </div>
            </section>

            <section className="grid items-center gap-5 rounded-lg border border-white/10 bg-white/[0.04] p-7 sm:grid-cols-[1fr_auto]">
              <div>
                <h2 className="flex items-center gap-3 text-xl font-black"><FaCircleCheck className="text-green-400" /> Statut des services</h2>
                <p className="mt-3 text-sm text-white/70">Tous les services sont operationnels.</p>
                <Link href="/visiteur/aide/faq" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#ff7a00]">
                  Voir les incidents recents
                  <FaChevronRight className="size-3" />
                </Link>
              </div>
              <div className="grid size-24 place-items-center rounded-full border border-green-400/20 bg-green-400/10 shadow-[0_0_36px_rgba(74,222,128,0.22)]">
                <FaRegCircleCheck className="size-10 text-green-300" />
              </div>
            </section>
          </aside>
        </div>
      </section>
    </HelpShell>
  );
}
