import Link from "next/link";
import {
  FaChevronDown,
  FaChevronRight,
  FaCreditCard,
  FaCrown,
  FaFire,
  FaHeadphones,
  FaLock,
  FaMagnifyingGlass,
  FaRegUser,
  FaDownload
} from "react-icons/fa6";
import { HelpShell, HelpVisual } from "../aide-shared";

const faqCategories = [
  ["Compte", "Gestion de votre compte et de vos informations personnelles", FaRegUser],
  ["Abonnement", "Tout savoir sur PAPYRUS Premium et votre abonnement", FaCrown],
  ["Paiement", "Modes de paiement, facturation et remboursements", FaCreditCard],
  ["Lecture audio", "Ecoute, fonctionnalites et qualite audio", FaHeadphones],
  ["Telechargement", "Telecharger vos livres et les ecouter hors ligne", FaDownload],
  ["Confidentialite", "Donnees personnelles et securite", FaLock]
];

const popularQuestions = [
  "Comment creer un compte sur PAPYRUS Audio ?",
  "Comment fonctionne l'essai Premium gratuit ?",
  "Quels sont les moyens de paiement acceptes ?",
  "Puis-je ecouter hors connexion ?",
  "Comment resilier mon abonnement Premium ?",
  "Puis-je changer de formule d'abonnement ?",
  "Comment contacter le support si j'ai un probleme ?",
  "Ou trouver mes factures ?"
];

export default function HelpFaqPage() {
  return (
    <HelpShell>
      <section className="relative mx-auto max-w-[112rem] px-5 pt-32 sm:px-8 lg:px-14">
        <p className="mb-4 w-fit rounded bg-[#ff7a00]/14 px-2 py-1 text-xs font-black uppercase text-[#ff7a00]">Aide</p>
        <h1 className="text-5xl font-black tracking-[-0.04em] sm:text-6xl">Questions frequentes</h1>
        <p className="mt-4 max-w-3xl text-lg text-white/68">Trouvez rapidement des reponses aux questions que vous vous posez.</p>
        <div className="mt-8 flex h-16 max-w-5xl items-center gap-4 rounded-full border border-white/10 bg-white/[0.045] px-6">
          <FaMagnifyingGlass className="size-5 text-white/62" />
          <input placeholder="Rechercher dans l'aide..." className="w-full bg-transparent text-lg text-white outline-none placeholder:text-white/42" />
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_39rem]">
          <section className="grid gap-3">
            {faqCategories.map(([title, text, Icon]) => (
              <details key={title as string} className="group rounded-lg border border-white/10 bg-white/[0.04]">
                <summary className="flex cursor-pointer list-none items-center gap-6 p-6 marker:hidden">
                  <Icon className="size-8 shrink-0 text-[#ff7a00]" />
                  <span className="min-w-0 flex-1">
                    <strong className="block text-xl">{title as string}</strong>
                    <span className="mt-1 block text-sm text-white/60">{text as string}</span>
                  </span>
                  <FaChevronDown className="size-4 text-white/72 transition group-open:rotate-180" />
                </summary>
                <div className="grid gap-2 border-t border-white/8 px-6 pb-6 pt-2 text-sm text-white/70">
                  <Link href="/visiteur/aide/contact" className="rounded-md py-2 transition hover:text-[#ff7a00]">Voir les articles detailles</Link>
                  <Link href="/visiteur/aide/contact" className="rounded-md py-2 transition hover:text-[#ff7a00]">Contacter le support pour ce sujet</Link>
                </div>
              </details>
            ))}
          </section>

          <aside className="grid h-fit gap-5">
            <section className="rounded-lg border border-white/10 bg-white/[0.04] p-7">
              <h2 className="mb-5 flex items-center gap-3 text-xl font-black"><FaFire className="text-[#ff7a00]" /> Questions populaires</h2>
              <div className="grid gap-1">
                {popularQuestions.map((question) => (
                  <Link key={question} href="/visiteur/aide/contact" className="flex items-center justify-between gap-4 rounded-md py-2.5 text-sm text-white/84 transition hover:bg-white/[0.04] hover:px-2 hover:text-[#ff7a00]">
                    {question}
                    <FaChevronRight className="size-3 shrink-0 text-white/52" />
                  </Link>
                ))}
              </div>
            </section>

            <section className="overflow-hidden rounded-lg border border-[#ff7a00]/30 bg-white/[0.04]">
              <div className="grid gap-5 p-7 sm:grid-cols-[1fr_13rem]">
                <div>
                  <h2 className="text-2xl font-black">Vous ne trouvez pas la reponse a votre question ?</h2>
                  <p className="mt-3 text-sm leading-6 text-white/68">Notre equipe est la pour vous aider rapidement.</p>
                  <Link href="/visiteur/aide/contact" className="mt-5 inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#ff7a00] px-5 text-sm font-black text-white">
                    <FaHeadphones />
                    Contacter le support
                  </Link>
                </div>
                <HelpVisual />
              </div>
            </section>
          </aside>
        </div>
      </section>
    </HelpShell>
  );
}
