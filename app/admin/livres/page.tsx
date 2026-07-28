"use client";
import { useState } from "react";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";

const initialBooks = [{ title: "Les silences de l’aube", author: "Claire Veyrac", status: "En attente" },{ title: "Lumière noire", author: "Arthur Delaunay", status: "En attente" },{ title: "À fleur de peau", author: "Sophie Talbot", status: "En attente" }];
export default function AdminBooksPage() {
  const [books,setBooks] = useState(initialBooks);
  const decide = (title:string,status:string) => setBooks((current) => current.map((book) => book.title === title ? {...book,status} : book));
  return <div className="min-h-screen bg-background text-foreground"><Sidebar /><div className="lg:pl-64"><TopNav /><main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8"><h1 className="text-3xl font-black">Livres à valider</h1><p className="mt-2 text-white/50">Approuvez ou refusez les soumissions éditoriales.</p><div className="mt-7 space-y-4">{books.map((book) => <article key={book.title} className="flex flex-col gap-5 rounded-2xl border border-white/8 bg-white/[0.03] p-5 sm:flex-row sm:items-center"><div className="min-w-0 flex-1"><h2 className="text-lg font-black">{book.title}</h2><p className="mt-1 text-sm text-white/45">{book.author}</p></div><span className={`rounded-full px-3 py-1.5 text-xs font-black ${book.status === "Approuvé" ? "bg-emerald-400/10 text-emerald-300" : book.status === "Refusé" ? "bg-red-400/10 text-red-300" : "bg-primary/10 text-primary"}`}>{book.status}</span><div className="flex gap-2"><button onClick={() => decide(book.title,"Approuvé")} className="grid size-11 place-items-center rounded-xl bg-emerald-500/15 text-emerald-300" aria-label={`Approuver ${book.title}`}><FaCheck /></button><button onClick={() => decide(book.title,"Refusé")} className="grid size-11 place-items-center rounded-xl bg-red-500/15 text-red-300" aria-label={`Refuser ${book.title}`}><FaXmark /></button></div></article>)}</div></main></div></div>;
}
