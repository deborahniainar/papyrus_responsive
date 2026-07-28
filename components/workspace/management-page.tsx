import Link from "next/link";
import { FaArrowLeft, FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";

export function ManagementPage({
  title,
  description,
  columns,
  rows,
  action,
}: {
  title: string;
  description: string;
  columns: string[];
  rows: string[][];
  action?: { label: string; href: string };
}) {
  return <div className="min-h-screen bg-background text-foreground"><Sidebar /><div className="lg:pl-64"><TopNav /><main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"><Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white/45"><FaArrowLeft /> Retour</Link><header className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><h1 className="text-3xl font-black">{title}</h1><p className="mt-2 text-white/50">{description}</p></div>{action && <Link href={action.href} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-primary px-5 font-black text-black"><FaPlus />{action.label}</Link>}</header><div className="mt-7 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4"><FaMagnifyingGlass className="text-white/30" /><input className="h-13 w-full bg-transparent outline-none placeholder:text-white/30" placeholder="Rechercher..." /></div><div className="mt-5 overflow-x-auto rounded-2xl border border-white/8"><table className="w-full min-w-[720px] border-collapse text-left"><thead className="bg-white/[0.045] text-xs uppercase tracking-wider text-white/40"><tr>{columns.map((column) => <th key={column} className="px-5 py-4">{column}</th>)}</tr></thead><tbody className="divide-y divide-white/7">{rows.map((row,index) => <tr key={`${row[0]}-${index}`} className="transition hover:bg-white/[0.025]">{row.map((cell,cellIndex) => <td key={`${cell}-${cellIndex}`} className={`px-5 py-5 text-sm ${cellIndex === 0 ? "font-black text-white" : "text-white/55"}`}>{cell}</td>)}</tr>)}</tbody></table></div></main></div></div>;
}
