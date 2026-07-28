"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBook,
  FaBookOpen,
  FaBookmark,
  FaBrain,
  FaBriefcase,
  FaChartSimple,
  FaChevronDown,
  FaChild,
  FaCircleQuestion,
  FaClockRotateLeft,
  FaCrown,
  FaFire,
  FaGear,
  FaHeadphones,
  FaHeart,
  FaHeartPulse,
  FaHouse,
  FaLayerGroup,
  FaMicroscope,
  FaStar,
  FaTableCellsLarge,
  FaTag,
  FaUser,
  FaUsers,
  FaPenNib,
  FaBuilding,
  FaShieldHalved,
  FaMoneyBillTrendUp,
  FaHeadset,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRole } from "@/components/auth/role-provider";

type SidebarItem = {
  icon: IconType;
  label: string;
  href: string;
};

type SidebarSection = {
  id: "workspace" | "navigation" | "categories" | "collections" | "profile";
  title: string;
  items: SidebarItem[];
};

const sections: SidebarSection[] = [
  {
    id: "navigation",
    title: "Navigation",
    items: [
      { icon: FaHouse, label: "Accueil", href: "/accueil" },
      { icon: FaBook, label: "Bibliothèque", href: "/bibliotheque" },
      { icon: FaBookmark, label: "Marque-pages", href: "/marque-pages" },
      { icon: FaLayerGroup, label: "Collections", href: "/collections" },
      { icon: FaHeart, label: "Favoris", href: "/favoris" },
      { icon: FaHeadphones, label: "Lecteur", href: "/lecteur" },
    ],
  },
  {
    id: "categories",
    title: "Catégories",
    items: [
      { icon: FaTableCellsLarge, label: "Tout le catalogue", href: "/catalogue" },
      {
        icon: FaLayerGroup,
        label: "Développement personnel",
        href: "/categorie/developpement-personnel",
      },
      { icon: FaBookOpen, label: "Romans & Fiction", href: "/categorie/romans-fiction" },
      {
        icon: FaBriefcase,
        label: "Business & Marketing",
        href: "/categorie/business-marketing",
      },
      { icon: FaClockRotateLeft, label: "Histoire", href: "/categorie/histoire" },
      { icon: FaBrain, label: "Philosophie", href: "/categorie/philosophie" },
      {
        icon: FaMicroscope,
        label: "Science & Technologie",
        href: "/categorie/science-technologie",
      },
      {
        icon: FaHeartPulse,
        label: "Santé & Bien-être",
        href: "/categorie/sante-bien-etre",
      },
      { icon: FaChild, label: "Enfants & Famille", href: "/categorie/enfants-famille" },
    ],
  },
  {
    id: "collections",
    title: "Collections",
    items: [
      { icon: FaStar, label: "Meilleures ventes", href: "/collection/meilleures-ventes" },
      { icon: FaFire, label: "Nouveautés", href: "/collection/nouveautes" },
      { icon: FaCrown, label: "Livres Premium", href: "/collection/livres-premium" },
      { icon: FaTag, label: "Livres gratuits", href: "/collection/livres-gratuits" },
      {
        icon: FaHeadphones,
        label: "Écoutes recommandées",
        href: "/collection/ecoutes-recommandees",
      },
    ],
  },
  {
    id: "profile",
    title: "Compte",
    items: [
      { icon: FaChartSimple, label: "Tableau de bord", href: "/tableau-de-bord" },
      { icon: FaUser, label: "Mon profil", href: "/profil" },
      { icon: FaGear, label: "Paramètres", href: "/parametres" },
      { icon: FaCircleQuestion, label: "Aide & support", href: "/aide" },
    ],
  },
];

function SidebarLink({ item, active }: { item: SidebarItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold transition-colors",
        active ? "text-primary" : "text-white/58 hover:bg-white/[0.045] hover:text-white"
      )}
    >
      {active && (
        <motion.span
          layoutId="sidebar-active-item"
          className="absolute inset-0 rounded-lg bg-white/[0.055] shadow-[inset_3px_0_0_var(--primary)]"
          transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
        />
      )}
      <item.icon
        className={cn(
          "relative z-10 size-4.5 shrink-0 transition-colors",
          active ? "text-primary" : "text-white/38 group-hover:text-white/80"
        )}
      />
      <span className="relative z-10 truncate">{item.label}</span>
    </Link>
  );
}

function SidebarSectionBlock({
  section,
  open,
  onToggle,
  isLinkActive,
}: {
  section: SidebarSection;
  open: boolean;
  onToggle: () => void;
  isLinkActive: (href: string) => boolean;
}) {
  return (
    <section>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="mb-2 flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-white/36 transition-colors hover:bg-white/[0.035] hover:text-white/62"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.18em]">
          {section.title}
        </span>
        <FaChevronDown
          className={cn("size-3 transition-transform", open ? "rotate-180" : "")}
        />
      </button>

      {open && (
        <nav aria-label={section.title} className="space-y-1">
          {section.items.map((item) => (
            <SidebarLink active={isLinkActive(item.href)} item={item} key={item.href} />
          ))}
        </nav>
      )}
    </section>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useRole();
  const workspaceItems: Partial<Record<typeof user.role, SidebarItem[]>> = {
    author: [
      { icon: FaChartSimple, label: "Espace auteur", href: "/auteur" },
      { icon: FaBook, label: "Mes livres", href: "/auteur/livres" },
      { icon: FaPenNib, label: "Nouveau livre", href: "/auteur/livres/nouveau" },
      { icon: FaUser, label: "Profil auteur", href: "/auteur/profil" },
    ],
    publisher: [
      { icon: FaChartSimple, label: "Espace éditeur", href: "/editeur" },
      { icon: FaBook, label: "Catalogue éditorial", href: "/editeur/livres" },
      { icon: FaUsers, label: "Nos auteurs", href: "/editeur/auteurs" },
      { icon: FaBuilding, label: "Maison d’édition", href: "/editeur/profil" },
    ],
    admin: [
      { icon: FaShieldHalved, label: "Administration", href: "/admin" },
      { icon: FaUsers, label: "Utilisateurs", href: "/admin/utilisateurs" },
      { icon: FaPenNib, label: "Auteurs", href: "/admin/auteurs" },
      { icon: FaBook, label: "Livres à valider", href: "/admin/livres" },
    ],
    super_admin: [
      { icon: FaShieldHalved, label: "Administration", href: "/admin" },
      { icon: FaUsers, label: "Utilisateurs", href: "/admin/utilisateurs" },
      { icon: FaPenNib, label: "Auteurs", href: "/admin/auteurs" },
      { icon: FaBook, label: "Livres à valider", href: "/admin/livres" },
      { icon: FaGear, label: "Rôles et accès", href: "/admin/roles" },
    ],
    moderator: [
      { icon: FaShieldHalved, label: "Modération", href: "/moderation" },
      { icon: FaBook, label: "Contenus signalés", href: "/moderation/contenus" },
    ],
    support: [
      { icon: FaHeadset, label: "Centre support", href: "/support" },
      { icon: FaUsers, label: "Dossiers clients", href: "/support/dossiers" },
    ],
    accounting: [
      { icon: FaMoneyBillTrendUp, label: "Comptabilité", href: "/comptabilite" },
      { icon: FaBookOpen, label: "Transactions", href: "/comptabilite/transactions" },
    ],
  };
  const visibleSections: SidebarSection[] = workspaceItems[user.role]?.length
    ? [{ id: "workspace", title: "Espace professionnel", items: workspaceItems[user.role] ?? [] }, ...sections]
    : sections;
  const [openSections, setOpenSections] = useState<Record<SidebarSection["id"], boolean>>({
    workspace: true,
    navigation: true,
    categories: true,
    collections: true,
    profile: true,
  });

  const isLinkActive = (href: string) => {
    if (href === "/accueil") return pathname === href || pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const toggleSection = (section: SidebarSection["id"]) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col overflow-hidden border-r border-white/8 bg-[#080706] lg:flex">
      <div className="shrink-0 border-b border-white/6 px-6 py-7">
        <Link href="/accueil" className="flex items-center gap-3" aria-label="Accueil PAPYRUS">
          <Image
            src="/demos/papyrus/assets/logos/logo-white.png"
            alt="PAPYRUS Audio"
            width={160}
            height={48}
            className="h-auto w-38"
            priority
          />
        </Link>
      </div>

      <ScrollArea className="min-h-0 w-full flex-1">
        <div className="space-y-8 px-4 py-6 pb-32">
          {visibleSections.map((section) => (
            <SidebarSectionBlock
              isLinkActive={isLinkActive}
              key={section.id}
              onToggle={() => toggleSection(section.id)}
              open={openSections[section.id]}
              section={section}
            />
          ))}

          {(user.role === "user" || user.role === "premium_user") && <div className="rounded-lg border border-white/8 bg-white/[0.035] p-4">
            <div className="mb-4 flex items-center gap-3">
              <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
                <FaCrown className="size-5" />
              </div>
              <div className="min-w-0">
                <h4 className="truncate text-sm font-black text-white">Passez Premium</h4>
                <p className="mt-0.5 text-xs leading-relaxed text-white/50">
                  Écoutez sans limites.
                </p>
              </div>
            </div>
            <Button className="h-10 w-full rounded-lg bg-primary text-sm font-black text-black hover:bg-primary/90">
              Découvrir
            </Button>
          </div>}
        </div>
      </ScrollArea>
    </aside>
  );
}
