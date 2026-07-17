import Image from "next/image";
import Link from "next/link";
import { FaApple, FaArrowLeft, FaMobileScreenButton } from "react-icons/fa6";
import { assetPath } from "@/lib/public-demo-data";

export default function VisitorApplicationPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#16120f]">
      <section className="mx-auto grid min-h-screen max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-black text-black/55 hover:text-[#e86f00]">
            <FaArrowLeft className="size-3" />
            Accueil visiteur
          </Link>
          <p className="mb-4 w-fit rounded-full bg-[#fff1e3] px-4 py-2 text-sm font-black text-[#e86f00]">
            Application mobile
          </p>
          <h1 className="text-5xl font-black tracking-[-0.03em] sm:text-6xl">
            Ecoutez PAPYRUS sur web, Android et iOS.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-black/58">
            Cette page simule l&apos;acces public aux applications. La synchronisation, le telechargement hors connexion et les statistiques sont actives apres connexion.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/inscription" className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-black px-5 text-sm font-black text-white">
              <FaApple className="size-5" />
              App Store
            </Link>
            <Link href="/inscription" className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-black px-5 text-sm font-black text-white">
              <FaMobileScreenButton className="size-5" />
              Google Play
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#0b0908] shadow-2xl">
          <Image
            src={assetPath("/assets/images/accueil.png")}
            alt="Application PAPYRUS"
            width={1536}
            height={1024}
            priority
            className="w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
