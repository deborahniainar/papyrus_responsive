import {
  FaBookOpen,
  FaCalendarDays,
  FaChartSimple,
  FaCompass,
  FaFire,
  FaHeadphones,
  FaPersonRunning,
  FaStar,
  FaWaveSquare
} from "react-icons/fa6";
import { PlayerBar } from "@/components/audio/player-bar";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const kpis = [
  {
    icon: FaHeadphones,
    label: "Temps total d'ecoute",
    value: "128 h 45 min",
    detail: "+12% par rapport a la semaine derniere"
  },
  {
    icon: FaBookOpen,
    label: "Livres termines",
    value: "14",
    detail: "+3 par rapport a la semaine derniere"
  },
  {
    icon: FaWaveSquare,
    label: "Heures d'ecoute cette semaine",
    value: "12 h 45 min",
    detail: "Objectif : 15 h",
    progress: 85
  },
  {
    icon: FaFire,
    label: "Serie d'ecoute",
    value: "23 jours",
    detail: "Meilleure serie : 45 jours"
  }
];

const weekBars = [
  ["Lun", 7.5],
  ["Mar", 11.2],
  ["Mer", 14.3],
  ["Jeu", 18.5],
  ["Ven", 14.1],
  ["Sam", 9.8],
  ["Dim", 6.4]
] as const;

const categories = [
  ["Developpement personnel", "38%", "#f59e0b"],
  ["Romans & Fiction", "24%", "#6aa062"],
  ["Histoires inspirantes", "16%", "#9b9584"],
  ["Business & Leadership", "12%", "#4d7fb5"],
  ["Philosophie & Sagesse", "6%", "#b66d3a"],
  ["Autres", "4%", "#f97316"]
] as const;

const authors = [
  ["Paulo Coelho", "24 h 30 min", 100],
  ["Yuval Noah Harari", "18 h 20 min", 78],
  ["James Clear", "15 h 10 min", 66],
  ["Michelle Obama", "12 h 45 min", 55],
  ["Stephen R. Covey", "10 h 15 min", 42]
] as const;

const habits = [
  [FaHeadphones, "Temps d'ecoute", "+12%", "+13 h 45 min"],
  [FaBookOpen, "Livres termines", "+25%", "+3 livres"],
  [FaFire, "Serie d'ecoute", "+15%", "+3 jours"],
  [FaChartSimple, "Nouvelles categories", "+33%", "+2 categories"]
] as const;

const badges = [
  [FaHeadphones, "Premier pas", "Premiere ecoute", "border-yellow-500/50 bg-yellow-500/10 text-yellow-300"],
  [FaCalendarDays, "Devoue", "10 jours d'affilee", "border-purple-500/50 bg-purple-500/10 text-purple-300"],
  [FaCompass, "Explorateur", "5 categories explorees", "border-orange-500/50 bg-orange-500/10 text-orange-300"],
  [FaPersonRunning, "Marathonien", "50 heures d'ecoute", "border-pink-500/50 bg-pink-500/10 text-pink-300"],
  [FaBookOpen, "Finisseur", "10 livres termines", "border-amber-500/50 bg-amber-500/10 text-amber-300"],
  [FaStar, "Inspiration", "20 livres inspirants", "border-yellow-500/50 bg-yellow-500/10 text-yellow-300"]
] as const;

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`rounded-2xl border border-white/10 bg-[#10100f]/75 p-6 shadow-2xl ${className}`}>
      {children}
    </section>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />

      <div className="lg:pl-64">
        <TopNav />

        <main className="grid gap-5 px-4 py-6 pb-36 sm:px-6 lg:px-8 lg:py-8 xl:grid-cols-[1fr_20rem]">
          <section>
            <header className="mb-7 flex flex-col gap-5 border-t border-white/5 pt-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h1 className="text-3xl font-black tracking-tight text-white">Mes statistiques</h1>
                <p className="mt-2 text-white/60">
                  Decouvrez vos habitudes d&apos;ecoute et vos progres.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button variant="outline" className="h-11 gap-8 rounded-xl border-white/10 bg-white/[0.035] px-5 text-white/65">
                  26 mai - 1 juin 2025
                  <FaCalendarDays className="size-4" />
                </Button>
                <div className="flex rounded-xl border border-white/10 bg-white/[0.035] p-1">
                  {["7 jours", "30 jours", "12 mois", "Tout le temps"].map((item, index) => (
                    <Button
                      className={`h-9 rounded-lg px-4 text-xs font-bold ${
                        index === 0 ? "bg-primary/15 text-primary" : "text-white/55 hover:bg-white/[0.04]"
                      }`}
                      key={item}
                      variant="ghost"
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </div>
            </header>

            <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
              {kpis.map((kpi) => (
                <Panel key={kpi.label}>
                  <div className="flex items-center gap-5">
                    <div className="grid size-16 place-items-center rounded-full bg-primary/10 text-primary">
                      <kpi.icon className="size-7" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white/70">{kpi.label}</p>
                      <strong className="mt-2 block text-2xl font-black text-white">{kpi.value}</strong>
                      <p className="mt-3 text-sm leading-6 text-white/50">{kpi.detail}</p>
                    </div>
                  </div>
                  {kpi.progress && (
                    <div className="mt-4">
                      <div className="flex justify-end text-sm text-white/60">{kpi.progress}%</div>
                      <div className="mt-2 h-1.5 rounded-full bg-white/15">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${kpi.progress}%` }} />
                      </div>
                    </div>
                  )}
                </Panel>
              ))}
            </div>

            <div className="mt-5 grid gap-5 2xl:grid-cols-[1.3fr_1fr]">
              <Panel>
                <h2 className="mb-8 text-lg font-black text-white">Heures d&apos;ecoute par semaine</h2>
                <div className="flex h-48 items-end justify-between gap-2 overflow-x-auto sm:h-56 sm:gap-4 border-b border-white/10 px-3">
                  {weekBars.map(([day, value]) => (
                    <div className="flex h-full flex-1 flex-col justify-end gap-3" key={day}>
                      <div
                        className="mx-auto w-full max-w-9 rounded-t-md bg-gradient-to-t from-primary/45 to-primary shadow-[0_0_22px_rgba(255,138,42,0.25)]"
                        style={{ height: `${(value / 20) * 100}%` }}
                      />
                      <span className="text-center text-xs text-white/55">{day}</span>
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel>
                <h2 className="mb-8 text-lg font-black text-white">Repartition par categories</h2>
                <div className="grid gap-8 md:grid-cols-[14rem_1fr] md:items-center">
                  <div className="grid aspect-square place-items-center rounded-full bg-[conic-gradient(#6aa062_0_38%,#f97316_38%_62%,#ef4444_62%_78%,#a855f7_78%_90%,#3b82f6_90%_100%)] p-8">
                    <div className="grid size-24 sm:size-32 place-items-center rounded-full bg-[#10100f] text-center">
                      <strong className="text-2xl text-white">128 h</strong>
                      <span className="-mt-8 text-lg text-white">45 min</span>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    {categories.map(([label, percent, color]) => (
                      <div className="flex items-center gap-3 text-sm" key={label}>
                        <span className="size-3 rounded-full" style={{ background: color }} />
                        <span className="flex-1 text-white/70">{label}</span>
                        <span className="text-white/65">{percent}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Panel>
            </div>

            <div className="mt-5 grid gap-5 2xl:grid-cols-2">
              <Panel>
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-black text-white">Auteurs favoris</h2>
                    <p className="mt-2 text-sm text-white/50">Base sur votre temps d&apos;ecoute</p>
                  </div>
                  <Button variant="link" className="h-auto p-0 text-sm font-bold text-primary">
                    Voir tous
                  </Button>
                </div>
                <div className="grid gap-4">
                  {authors.map(([name, time, progress], index) => (
                    <div className="grid grid-cols-[2rem_1fr] items-center gap-3 sm:grid-cols-[2rem_1fr_7rem] sm:gap-4" key={name}>
                      <Avatar className="size-8">
                        <AvatarImage src={`https://i.pravatar.cc/64?u=author-${index}`} />
                        <AvatarFallback>{name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="font-medium text-white">{name}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/10">
                          <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
                        </div>
                      </div>
                      <span className="text-right text-sm text-white/55">{time}</span>
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel>
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-black text-white">Evolution de vos habitudes</h2>
                    <p className="mt-2 text-sm text-white/50">Comparaison avec la periode precedente</p>
                  </div>
                  <Button variant="link" className="h-auto p-0 text-sm font-bold text-primary">
                    Voir tous
                  </Button>
                </div>
                <div className="divide-y divide-white/10">
                  {habits.map(([Icon, label, growth, value]) => (
                    <div className="grid grid-cols-[2.5rem_1fr] items-center gap-3 py-4 sm:grid-cols-[2.5rem_1fr_5rem_6rem]" key={label}>
                      <span className="grid size-9 place-items-center rounded-full bg-primary/10 text-primary">
                        <Icon />
                      </span>
                      <span className="text-sm text-white/75">{label}</span>
                      <span className="text-green-500">{growth}</span>
                      <span className="text-right text-sm text-white/55">{value}</span>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>
          </section>

          <aside className="grid gap-5">
            <Panel className="text-center">
              <div className="mx-auto grid size-24 sm:size-32 place-items-center rounded-full border-8 border-primary bg-primary/10 p-2">
                <Avatar className="size-24">
                  <AvatarImage src="https://i.pravatar.cc/128?u=user-dashboard" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-white">Niveau Ecouteur</p>
                <h2 className="mt-1 text-xl font-black text-primary">Passionne</h2>
                <p className="mt-5 text-white">
                  <span className="text-primary">2450</span> / 3000 XP
                </p>
                <div className="mx-auto mt-3 h-1.5 max-w-52 rounded-full bg-white/15">
                  <div className="h-full w-[82%] rounded-full bg-primary" />
                </div>
                <p className="mx-auto mt-4 max-w-52 text-sm leading-6 text-white/55">
                  Plus que 550 XP pour atteindre le niveau Expert
                </p>
              </div>
            </Panel>

            <Panel>
              <div className="mb-7 flex items-center justify-between">
                <h2 className="text-lg font-black text-white">Badges obtenus</h2>
                <Button variant="link" className="h-auto p-0 text-sm font-bold text-primary">
                  Voir tous
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-x-4 gap-y-8">
                {badges.map(([Icon, title, text, style]) => (
                  <div className="text-center" key={title}>
                    <div className={`mx-auto grid size-16 place-items-center rounded-2xl border text-2xl ${style}`}>
                      <Icon />
                    </div>
                    <h3 className="mt-3 text-sm font-bold text-white">{title}</h3>
                    <p className="mt-1 text-xs leading-5 text-white/50">{text}</p>
                  </div>
                ))}
              </div>
            </Panel>
          </aside>
        </main>
      </div>

      <PlayerBar />
    </div>
  );
}
