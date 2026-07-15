import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaHeadphones, FaHeart } from "react-icons/fa6";

type AuthShellProps = {
  children: React.ReactNode;
};

const highlights = [
  {
    icon: FaHeadphones,
    title: "Ecoutez partout",
    text: "Sur tous vos appareils"
  },
  {
    icon: FaHeart,
    title: "Vos favoris",
    text: "Retrouvez vos contenus preferes"
  },
  {
    icon: FaDownload,
    title: "Telechargements",
    text: "Ecoutez hors connexion"
  }
];

export function AuthShell({ children }: AuthShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-white">
      <div className="fixed inset-0 scale-[1.015] bg-[linear-gradient(90deg,rgba(0,0,0,0.8),rgba(0,0,0,0.18)_52%,rgba(0,0,0,0.34)),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.62)),url('/demos/papyrus/assets/images/connexion-bg.png')] bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_48%_44%,color-mix(in_srgb,var(--color-primary)_10%,transparent),transparent_32%),radial-gradient(circle_at_10%_76%,color-mix(in_srgb,var(--color-primary)_18%,transparent),transparent_18%)]" />

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] w-[min(92rem,calc(100%-2rem))] grid-cols-1 items-center gap-6 py-12 lg:grid-cols-[minmax(18rem,0.72fr)_minmax(28rem,36rem)_minmax(8rem,0.6fr)] lg:gap-16">
        <aside className="fixed left-[max(2rem,calc((100vw-92rem)/2+1.5rem))] top-1/2 hidden w-[min(21rem,28vw)] -translate-y-1/2 gap-16 pl-[clamp(0rem,2vw,1.5rem)] lg:grid">
          <div>
            <p className="m-0 text-[clamp(2.1rem,4vw,3.6rem)] font-black leading-none text-primary">
              Ecoutez.
            </p>
            <h1 className="my-2 mb-6 max-w-[19rem] text-[clamp(2rem,3.6vw,3.2rem)] font-extrabold leading-[1.08]">
              Vivez. Imaginez.
            </h1>
            <p className="m-0 max-w-[17rem] text-lg leading-7 text-white/70">
              Des milliers d&apos;histoires. Partout. A tout moment.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item) => (
              <article className="flex items-center gap-5" key={item.title}>
                <span className="grid size-16 shrink-0 place-items-center rounded-full border border-primary/15 bg-primary/10 text-2xl text-primary">
                  <item.icon />
                </span>
                <div>
                  <h2 className="mb-1 text-base font-bold">{item.title}</h2>
                  <p className="m-0 text-sm text-white/60">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </aside>

        <div className="w-full rounded-3xl border border-white/25 bg-[linear-gradient(145deg,rgba(255,255,255,0.13),rgba(255,255,255,0.035))] bg-background/60 p-[clamp(1.35rem,3vw,3rem)] shadow-[0_32px_110px_rgba(0,0,0,0.56),inset_0_1px_0_rgba(255,255,255,0.12),0_0_0_1px_color-mix(in_srgb,var(--color-primary)_8%,transparent)] backdrop-blur-2xl lg:col-start-2">
          <Link href="/" className="mb-6 flex justify-center" aria-label="Retour a la connexion PAPYRUS">
            <Image
              className="h-auto w-[min(16rem,72%)] object-contain mix-blend-screen drop-shadow-[0_16px_28px_rgba(0,0,0,0.42)]"
              src="/demos/papyrus/assets/logos/logo-white.png"
              alt="PAPYRUS Audio"
              width={260}
              height={120}
              priority
            />
          </Link>
          {children}
        </div>
      </section>

      <footer className="relative z-10 grid justify-items-center gap-3 px-4 pb-5 text-sm text-white/55 lg:inset-x-0 lg:bottom-5 lg:pb-0">
        <nav className="flex flex-wrap justify-center gap-4" aria-label="Liens secondaires">
          <Link className="text-white/60" href="/confidentialite">
            Confidentialite
          </Link>
          <span className="w-px bg-white/20" />
          <Link className="text-white/60" href="/conditions">
            Conditions d&apos;utilisation
          </Link>
          <span className="w-px bg-white/20" />
          <Link className="text-white/60" href="/aide">
            Aide
          </Link>
        </nav>
        <p className="m-0">© 2026 PAPYRUS Audio. Tous droits reserves.</p>
      </footer>
    </main>
  );
}
