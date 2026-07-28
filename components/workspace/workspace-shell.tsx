"use client";

import Link from "next/link";
import type { IconType } from "react-icons";
import { FaArrowRight, FaCircleCheck, FaClock, FaPlus } from "react-icons/fa6";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { Button } from "@/components/ui/button";
import { useRole } from "@/components/auth/role-provider";

export type WorkspaceMetric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

export type WorkspaceRow = {
  title: string;
  subtitle: string;
  status: string;
  meta: string;
};

export function WorkspaceShell({
  eyebrow,
  title,
  description,
  metrics,
  rows,
  actionLabel,
  actionHref,
}: {
  eyebrow: string;
  title: string;
  description: string;
  metrics: WorkspaceMetric[];
  rows: WorkspaceRow[];
  actionLabel?: string;
  actionHref?: string;
}) {
  const { profile } = useRole();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="lg:pl-64">
        <TopNav />
        <main className="mx-auto max-w-7xl px-4 py-8 pb-24 sm:px-6 lg:px-8">
          <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">{eyebrow} · {profile.label}</p>
              <h1 className="mt-3 text-3xl font-black sm:text-4xl">{title}</h1>
              <p className="mt-3 max-w-2xl leading-7 text-white/50">{description}</p>
            </div>
            {actionLabel && actionHref && <Button asChild className="h-12 gap-3 bg-primary px-6 font-black text-black hover:bg-primary/90"><Link href={actionHref}><FaPlus />{actionLabel}</Link></Button>}
          </header>
          <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => <article key={metric.label} className="rounded-2xl border border-white/8 bg-white/[0.035] p-5"><div className="flex items-start justify-between"><metric.icon className="size-6 text-primary" /><span className="text-xs font-bold text-emerald-400">Actif</span></div><strong className="mt-5 block text-3xl font-black">{metric.value}</strong><p className="mt-1 text-sm font-bold text-white/75">{metric.label}</p><p className="mt-2 text-xs text-white/35">{metric.detail}</p></article>)}
          </section>
          <section className="mt-7 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025]">
            <div className="flex items-center justify-between border-b border-white/8 px-5 py-4 sm:px-6"><h2 className="text-lg font-black">Activité récente</h2><button className="text-sm font-bold text-primary">Tout afficher</button></div>
            <div className="divide-y divide-white/7">
              {rows.map((row) => <article key={`${row.title}-${row.meta}`} className="grid gap-4 px-5 py-5 transition hover:bg-white/[0.025] sm:grid-cols-[1fr_auto_auto] sm:items-center sm:px-6"><div><h3 className="font-black">{row.title}</h3><p className="mt-1 text-sm text-white/40">{row.subtitle}</p></div><span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">{row.status === "Validé" ? <FaCircleCheck /> : <FaClock />}{row.status}</span><span className="flex items-center gap-3 text-sm text-white/45">{row.meta}<FaArrowRight className="text-primary" /></span></article>)}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
