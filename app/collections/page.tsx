import {
  FaEllipsis,
  FaGrip,
  FaList,
  FaPlus
} from "react-icons/fa6";
import { PlayerBar } from "@/components/audio/player-bar";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { Button } from "@/components/ui/button";

const collections = [
  {
    title: "Developpement personnel",
    count: "18 livres",
    duration: "24h 15m",
    colors: ["#f0c28a", "#7a2d0d", "#d89b46"]
  },
  {
    title: "Histoires inspirantes",
    count: "12 livres",
    duration: "16h 42m",
    colors: ["#ff8a2a", "#8fa1a1", "#c69a60"]
  },
  {
    title: "Romans & Fiction",
    count: "24 livres",
    duration: "32h 10m",
    colors: ["#d7bd99", "#d13222", "#0d3557"]
  },
  {
    title: "Business & Leadership",
    count: "15 livres",
    duration: "20h 33m",
    colors: ["#c032b5", "#1f1b0d", "#e7e2d7"]
  },
  {
    title: "Philosophie & Sagesse",
    count: "10 livres",
    duration: "13h 55m",
    colors: ["#3d3c38", "#d7bd99", "#d89b46"]
  },
  {
    title: "A ecouter plus tard",
    count: "7 livres",
    duration: "9h 28m",
    colors: ["#ff8a2a", "#111111", "#d89b46"]
  },
  {
    title: "Pods & Conferences",
    count: "9 episodes",
    duration: "8h 15m",
    colors: ["#b91c1c", "#111111", "#61a635"]
  },
  {
    title: "Bien-etre & Equilibre",
    count: "11 livres",
    duration: "14h 48m",
    colors: ["#f5e9d0", "#145b4d", "#d1b65b"]
  },
  {
    title: "Entrepreneuriat",
    count: "14 livres",
    duration: "18h 20m",
    colors: ["#3b82f6", "#c18b61", "#27272a"]
  }
];

function MiniCover({ color, index }: { color: string; index: number }) {
  return (
    <div
      className="relative h-30 flex-1 overflow-hidden rounded-lg border border-white/10 shadow-xl"
      style={{
        background: `radial-gradient(circle at 50% 28%, ${color}, transparent 34%), linear-gradient(145deg, ${color}, #100806 76%)`
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0_32%,rgba(255,255,255,0.13)_33%,transparent_39%)]" />
      <div className="relative z-10 flex h-full flex-col justify-between p-3">
        <span className="text-[9px] font-black uppercase text-black/45">Papyrus</span>
        <strong className="font-display text-sm leading-tight text-white drop-shadow">
          {index === 0 ? "Atomic Habits" : index === 1 ? "Sapiens" : "L'art de la clarte"}
        </strong>
      </div>
    </div>
  );
}

function CollectionCard({
  title,
  count,
  duration,
  colors
}: {
  title: string;
  count: string;
  duration: string;
  colors: string[];
}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[#10100f]/80 p-5 shadow-2xl transition hover:border-primary/30 hover:bg-[#151413]">
      <div className="mb-5 flex gap-2">
        {colors.map((color, index) => (
          <MiniCover color={color} index={index} key={`${title}-${color}`} />
        ))}
      </div>

      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-black text-white">{title}</h2>
          <div className="mt-3 flex items-center gap-10 text-sm text-white/60">
            <span>{count}</span>
            <span>{duration}</span>
          </div>
        </div>
        <button className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.035] text-white/70 transition hover:border-primary/30 hover:text-primary">
          <FaEllipsis />
        </button>
      </div>
    </article>
  );
}

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />

      <div className="lg:pl-64">
        <TopNav />

        <main className="px-4 py-6 pb-36 sm:px-6 lg:px-8 lg:py-8">
          <header className="mb-9 flex flex-col gap-6 border-t border-white/5 pt-8 xl:flex-row xl:items-start xl:justify-between">
            <div>
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-black tracking-tight text-white">Mes collections</h1>
                <span className="rounded-lg bg-white/[0.04] px-3 py-1.5 text-sm text-white/60">
                  12 collections
                </span>
              </div>
              <p className="mt-3 text-white/60">
                Organisez vos livres audio par themes, projets ou envies.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button className="h-12 gap-3 rounded-lg bg-primary px-6 text-sm font-black text-white hover:bg-primary/90">
                <FaPlus className="size-4" />
                Creer une collection
              </Button>
              <div className="flex rounded-xl border border-white/10 bg-white/[0.03] p-1">
                <Button size="icon" className="size-9 rounded-lg bg-white/[0.04] text-primary">
                  <FaGrip className="size-4" />
                </Button>
                <Button size="icon" variant="ghost" className="size-9 text-white/45">
                  <FaList className="size-4" />
                </Button>
              </div>
            </div>
          </header>

          <section className="grid gap-6 md:grid-cols-2 2xl:grid-cols-4">
            {collections.map((collection) => (
              <CollectionCard {...collection} key={collection.title} />
            ))}

            <button className="grid min-h-60 place-items-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-center transition hover:border-primary/40 hover:bg-primary/[0.03]">
              <span>
                <span className="mx-auto mb-6 grid size-16 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-3xl text-white/80">
                  <FaPlus />
                </span>
                <span className="block text-lg font-black text-white">Nouvelle collection</span>
                <span className="mt-2 block text-sm text-white/55">
                  Creez une collection personnalisee
                </span>
              </span>
            </button>
          </section>
        </main>
      </div>

      <PlayerBar />
    </div>
  );
}
