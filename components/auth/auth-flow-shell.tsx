import Image from "next/image";
import Link from "next/link";

export function AuthFlowShell({
  children,
  wide = false,
}: {
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#08090b] px-5 py-10 text-white">
      <div className="pointer-events-none absolute -bottom-52 -left-40 size-[32rem] rounded-full bg-[#ff6a00]/18 blur-[110px]" />
      <div className="pointer-events-none absolute -right-48 -top-48 size-[30rem] rounded-full bg-[#ff8a2a]/10 blur-[120px]" />
      <div className={`relative z-10 w-full ${wide ? "max-w-6xl" : "max-w-3xl"}`}>
        <Link href="/connexion" className="mx-auto mb-8 flex w-fit justify-center">
          <Image
            src="/demos/papyrus/assets/logos/logo-white.png"
            alt="PAPYRUS Audio"
            width={230}
            height={80}
            className="h-auto w-48 sm:w-56"
            priority
          />
        </Link>
        {children}
      </div>
    </main>
  );
}

export function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-white/12 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl sm:p-10">
      {children}
    </section>
  );
}

export const authInputClass =
  "h-14 w-full rounded-xl border border-white/18 bg-black/25 px-4 text-white outline-none placeholder:text-white/35 focus:border-primary";

export const authPrimaryButton =
  "inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#ff9a21] to-[#ff6a00] px-6 text-base font-black text-white shadow-[0_14px_32px_rgba(255,106,0,.2)] transition hover:brightness-110";

export const authSecondaryButton =
  "inline-flex min-h-14 w-full items-center justify-center rounded-xl border border-primary px-6 text-base font-bold text-white transition hover:bg-primary/10";
