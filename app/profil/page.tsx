import {
  FaArrowRightFromBracket,
  FaBookOpen,
  FaCalendarDays,
  FaCamera,
  FaChevronRight,
  FaCreditCard,
  FaCrown,
  FaGear,
  FaHeadphones,
  FaPen,
  FaShieldHalved,
  FaStar,
  FaUser,
} from "react-icons/fa6";
import { PlayerBar } from "@/components/audio/player-bar";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const stats = [
  { icon: FaHeadphones, value: "1 245", label: "Heures d'écoute", trend: "+12% ce mois" },
  { icon: FaBookOpen, value: "87", label: "Livres écoutés", trend: "+8 ce mois" },
  { icon: FaCalendarDays, value: "23", label: "Jours consécutifs", trend: "Record personnel" },
  { icon: FaStar, value: "4,8", label: "Note moyenne", trend: "Sur 128 avis" },
];

const settings = [
  { icon: FaUser, title: "Informations personnelles", description: "Gérez vos informations de profil" },
  { icon: FaShieldHalved, title: "Sécurité", description: "Mot de passe, authentification à deux facteurs" },
  { icon: FaCreditCard, title: "Paiements", description: "Modes de paiement et historique" },
  { icon: FaGear, title: "Préférences", description: "Notifications, qualité audio, téléchargement" },
  { icon: FaArrowRightFromBracket, title: "Déconnexion", description: "Se déconnecter de votre compte", danger: true },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Sidebar />

      <div className="min-w-0 lg:pl-64">
        <TopNav />

        <main className="mx-auto w-full max-w-5xl px-4 py-6 pb-36 sm:px-6 sm:py-8 lg:px-8 lg:py-10 lg:pb-36">
          <header className="mb-7 sm:mb-10">
            <h1 className="text-2xl font-black tracking-tight sm:text-3xl">Mon Profil</h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/40">
              Gérez vos informations personnelles et vos préférences
            </p>
          </header>

          <div className="grid min-w-0 gap-5 sm:gap-6">
            <div className="relative flex min-w-0 flex-col items-stretch gap-6 rounded-2xl border border-white/5 bg-[#11100f] p-5 shadow-2xl sm:rounded-3xl sm:p-7 md:flex-row md:items-center md:justify-between md:gap-8 lg:p-8">
              <div className="flex min-w-0 flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left lg:gap-8">
                <div className="group relative shrink-0 cursor-pointer">
                  <Avatar className="size-24 border-4 border-white/5 shadow-2xl transition-transform group-hover:scale-[1.02] sm:size-28 lg:size-32">
                    <AvatarImage src="https://i.pravatar.cc/128?u=user123" />
                    <AvatarFallback className="text-2xl font-black sm:text-3xl">JD</AvatarFallback>
                  </Avatar>
                  <div className="absolute bottom-0 right-0 flex size-8 items-center justify-center rounded-full border-4 border-[#11100f] bg-primary text-black shadow-lg sm:size-9">
                    <FaCamera className="size-3.5 sm:size-4" />
                  </div>
                </div>

                <div className="min-w-0 space-y-2">
                  <h2 className="break-words text-xl font-black text-white sm:text-2xl">Jean-Marc Dubois</h2>
                  <p className="break-all text-sm font-medium text-white/40 sm:break-normal">jeanmarc.dubois@email.com</p>
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-[10px] font-bold uppercase tracking-wider text-white/20 sm:justify-start sm:pt-2 sm:text-[11px]">
                    <FaCalendarDays className="size-3 shrink-0" />
                    <span>Membre depuis mars 2024</span>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="h-11 w-full shrink-0 gap-3 rounded-xl border-white/10 bg-white/5 px-5 text-sm font-bold text-white transition-all hover:bg-white/10 md:w-auto md:px-6">
                <FaPen className="size-3.5" />
                Modifier le profil
              </Button>
            </div>

            <div className="relative flex min-w-0 flex-col items-stretch gap-6 overflow-hidden rounded-2xl border border-white/5 bg-[#11100f] p-5 shadow-2xl sm:rounded-3xl sm:p-7 md:flex-row md:items-center md:justify-between md:gap-8 lg:p-8">
              <div className="relative z-10 flex min-w-0 items-center gap-4 sm:gap-6 lg:gap-8">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-[inset_0_0_0_1px_rgba(255,138,42,0.15)] sm:size-20">
                  <FaCrown className="size-7 sm:size-8" />
                </div>
                <div className="min-w-0 space-y-1">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                    <span className="text-sm font-bold text-white/40">Abonnement</span>
                    <Badge className="h-6 border-0 bg-green-500/10 px-2 text-[10px] font-black text-green-500 hover:bg-green-500/20">Actif</Badge>
                  </div>
                  <h3 className="text-2xl font-black text-primary sm:text-3xl">Premium</h3>
                  <div className="flex items-start gap-2 pt-2 sm:items-center">
                    <div className="mt-1.5 size-1.5 shrink-0 animate-pulse rounded-full bg-green-500 sm:mt-0" />
                    <p className="text-sm font-bold leading-5 text-white/60">Votre abonnement est actif</p>
                  </div>
                  <p className="text-[11px] font-medium leading-5 text-white/30">Prochain renouvellement : 24 juin 2025</p>
                </div>
              </div>

              <Button className="relative z-10 h-12 w-full shrink-0 rounded-xl border-primary/20 bg-primary/10 px-5 text-sm font-black text-primary transition-all hover:bg-primary/20 md:w-auto lg:px-8">
                Gérer l&apos;abonnement
              </Button>

              <div className="absolute -right-20 -top-20 size-64 rounded-full bg-primary/5 blur-[100px]" />
            </div>

            <section className="mt-4 min-w-0 space-y-5 sm:mt-8 sm:space-y-6">
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-bold text-white">Mes statistiques d&apos;écoute</h2>
                <Button variant="link" className="h-auto p-0 text-left text-xs font-bold text-primary sm:text-right">
                  Voir toutes les statistiques
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 md:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="min-w-0 rounded-2xl border border-white/5 bg-[#11100f] p-5 shadow-xl transition-all hover:border-white/10 hover:bg-[#161514] sm:p-6">
                    <stat.icon className="mb-4 size-6 text-primary" />
                    <div className="space-y-1">
                      <strong className="block text-2xl font-black text-white">{stat.value}</strong>
                      <span className="block text-xs font-bold leading-5 text-white/40">{stat.label}</span>
                    </div>
                    <div className="mt-4 text-[10px] font-black leading-4 text-primary/60">{stat.trend}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-4 min-w-0 space-y-5 sm:mt-8 sm:space-y-6">
              <h2 className="text-lg font-bold text-white">Paramètres du compte</h2>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#11100f] shadow-2xl sm:rounded-3xl">
                {settings.map((item, index) => (
                  <button
                    key={item.title}
                    className={cn(
                      "group flex w-full min-w-0 items-center justify-between gap-3 p-4 text-left transition-all hover:bg-white/[0.02] sm:gap-5 sm:p-6",
                      index !== settings.length - 1 && "border-b border-white/5",
                    )}
                  >
                    <div className="flex min-w-0 items-center gap-3 sm:gap-6">
                      <div className={cn("flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors sm:size-12 sm:rounded-2xl", item.danger ? "bg-red-500/10 text-red-500" : "bg-white/[0.03] text-white/30 group-hover:bg-primary/5 group-hover:text-primary")}>
                        <item.icon className="size-4.5 sm:size-5" />
                      </div>
                      <div className="min-w-0 space-y-1">
                        <h4 className={cn("text-sm font-bold", item.danger ? "text-red-500" : "text-white transition-colors group-hover:text-primary")}>{item.title}</h4>
                        <p className="line-clamp-2 text-xs font-medium leading-5 text-white/30 sm:line-clamp-none">{item.description}</p>
                      </div>
                    </div>
                    <FaChevronRight className={cn("size-3.5 shrink-0 transition-transform group-hover:translate-x-1", item.danger ? "text-red-500" : "text-white/20")} />
                  </button>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      <PlayerBar />
    </div>
  );
}
