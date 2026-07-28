import Link from "next/link";
import {
  FaChevronDown,
  FaEnvelope,
  FaHandshake,
  FaHeadphones,
  FaHeart,
  FaInstagram,
  FaPaperPlane,
  FaPenNib,
  FaRegClock,
  FaRegEnvelope,
  FaRegUser,
  FaShieldHalved,
  FaBullhorn,
  FaFacebookF,
  FaTwitter,
  FaYoutube
} from "react-icons/fa6";
import { HelpShell, HelpVisual } from "../aide-shared";

const requestTypes = [
  ["Presse", "Vous etes journaliste ou media ? Contactez notre service presse.", "Contacter la presse", FaBullhorn],
  ["Partenariats", "Vous avez un projet ou une proposition de collaboration ?", "Parler a un partenaire", FaHandshake],
  ["Support", "Une question technique ou un probleme avec votre compte ?", "Contacter le support", FaHeadphones],
  ["Auteur", "Vous etes auteur ou narrateur et vous souhaitez collaborer avec nous ?", "Devenir auteur", FaPenNib]
];

const reassurance = [
  ["Reponse rapide", "Nous nous engageons a vous repondre sous 48h ouvrees.", FaRegClock],
  ["Donnees securisees", "Vos informations sont traitees en toute confidentialite.", FaShieldHalved],
  ["A votre ecoute", "Notre equipe vous accompagne avec attention et bienveillance.", FaHeart]
];

export default function HelpContactPage() {
  return (
    <HelpShell>
      <section className="relative mx-auto max-w-[88rem] px-5 pt-32 sm:px-8 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_42rem] lg:items-end">
          <div>
            <h1 className="text-5xl font-black tracking-[-0.04em] sm:text-6xl">Contact</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/68">
              Une question, une suggestion ou un projet en tete ? L&apos;equipe PAPYRUS Audio est a votre ecoute et vous repondra dans les plus brefs delais.
            </p>
          </div>
          <HelpVisual variant="contact" />
        </div>

        <div className="mt-9 grid gap-7 lg:grid-cols-[1fr_1fr]">
          <section className="rounded-lg border border-white/10 bg-white/[0.04] p-7">
            <h2 className="text-xl font-black">Envoyez-nous un message</h2>
            <form className="mt-6 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold">
                  Nom complet
                  <span className="flex h-12 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-4 text-white/50">
                    <FaRegUser />
                    <input placeholder="Votre nom" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/42" />
                  </span>
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  Adresse e-mail
                  <span className="flex h-12 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-4 text-white/50">
                    <FaRegEnvelope />
                    <input type="email" placeholder="votre@email.com" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/42" />
                  </span>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-bold">
                Sujet
                <span className="flex h-12 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-4 text-white/50">
                  <FaEnvelope />
                  <input placeholder="Objet de votre message" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/42" />
                </span>
              </label>

              <label className="grid gap-2 text-sm font-bold">
                Raison de votre message
                <span className="flex h-12 items-center justify-between rounded-lg border border-white/10 bg-white/[0.035] px-4 text-sm text-white/78">
                  Selectionnez une raison
                  <FaChevronDown className="size-3 text-white/58" />
                </span>
              </label>

              <label className="grid gap-2 text-sm font-bold">
                Message
                <textarea placeholder="Decrivez votre demande en detail..." className="min-h-24 resize-none rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm text-white outline-none placeholder:text-white/42" />
              </label>

              <label className="flex items-start gap-3 text-sm text-white/68">
                <span className="mt-0.5 size-4 rounded border border-white/30" />
                <span>J&apos;accepte que mes donnees soient utilisees afin de traiter ma demande. Voir notre politique de confidentialite.</span>
              </label>

              <button type="button" className="inline-flex min-h-12 w-fit items-center gap-3 rounded-lg bg-[#ff7a00] px-7 text-sm font-black text-white shadow-[0_14px_28px_rgba(255,122,0,0.24)]">
                <FaPaperPlane />
                Envoyer le message
              </button>
            </form>
          </section>

          <section className="rounded-lg border border-white/10 bg-white/[0.04] p-7">
            <h2 className="text-xl font-black">Besoin d&apos;aide ?</h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-white/62">Selectionnez le type de demande qui correspond le mieux a votre besoin.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {requestTypes.map(([title, text, cta, Icon]) => (
                <Link key={title as string} href="/visiteur/aide/faq" className="group rounded-lg border border-white/10 bg-white/[0.035] p-6 transition hover:border-[#ff7a00]/45 hover:bg-white/[0.055]">
                  <Icon className="size-8 text-[#ff7a00]" />
                  <h3 className="mt-8 text-lg font-black">{title as string}</h3>
                  <p className="mt-2 min-h-12 text-sm leading-5 text-white/62">{text as string}</p>
                  <p className="mt-5 text-sm font-black text-[#ff7a00]">{cta as string} &rarr;</p>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-4 grid gap-5 rounded-lg border border-white/10 bg-white/[0.04] p-7 lg:grid-cols-[1fr_1fr_1fr_1.2fr]">
          {reassurance.map(([title, text, Icon]) => (
            <div key={title as string} className="flex gap-5 border-white/10 lg:border-r lg:pr-6">
              <Icon className="size-9 shrink-0 text-[#ff7a00]" />
              <div>
                <h3 className="font-black">{title as string}</h3>
                <p className="mt-1 text-sm leading-6 text-white/58">{text as string}</p>
              </div>
            </div>
          ))}
          <div>
            <h3 className="font-black">Autres moyens de nous contacter</h3>
            <p className="mt-3 flex items-center gap-3 text-sm text-white/70"><FaRegEnvelope /> contact@papyrus-audio.fr</p>
            <div className="mt-4 flex gap-5 text-white/58">
              <FaInstagram />
              <FaFacebookF />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>
        </section>
      </section>
    </HelpShell>
  );
}
