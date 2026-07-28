"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaBuildingColumns, FaCheck, FaHeadphones, FaPenNib } from "react-icons/fa6";
import { AuthFlowShell, authPrimaryButton, authSecondaryButton } from "@/components/auth/auth-flow-shell";
import { useRole } from "@/components/auth/role-provider";
import type { UserRole } from "@/lib/user-roles";

const profiles = [
  {
    role: "user" as UserRole,
    icon: FaHeadphones,
    title: "Auditeur",
    points: ["Accédez au catalogue audio", "Créez vos collections", "Suivez vos écoutes"],
  },
  {
    role: "author" as UserRole,
    icon: FaPenNib,
    title: "Auteur",
    points: ["Publiez vos livres audio", "Suivez vos soumissions", "Développez votre audience"],
  },
  {
    role: "publisher" as UserRole,
    icon: FaBuildingColumns,
    title: "Maison d’édition",
    points: ["Gérez votre catalogue", "Accompagnez vos auteurs", "Suivez vos performances"],
  },
];

export default function ChooseProfilePage() {
  const [selected, setSelected] = useState<UserRole>("user");
  const { setRole } = useRole();
  const router = useRouter();

  const continueToWorkspace = () => {
    setRole(selected);
    router.push("/verification-email");
  };

  return (
    <AuthFlowShell wide>
      <div className="text-center">
        <p className="text-sm font-bold text-primary">Étape 2 sur 3 · Création de votre compte</p>
        <h1 className="mt-4 text-3xl font-black sm:text-4xl">Choisir votre profil</h1>
        <p className="mt-3 text-white/55">Sélectionnez le profil qui correspond le mieux à vos besoins.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {profiles.map((profile) => {
          const active = profile.role === selected;
          return (
            <button
              key={profile.role}
              type="button"
              onClick={() => setSelected(profile.role)}
              className={`rounded-2xl border p-7 text-left transition ${active ? "border-primary bg-primary/8 shadow-[0_0_30px_rgba(255,122,0,.12)]" : "border-white/15 bg-white/[0.04] hover:border-white/30"}`}
            >
              <profile.icon className="mx-auto size-12 text-primary" />
              <h2 className="mt-5 text-center text-2xl font-black">{profile.title}</h2>
              <div className="my-5 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
              <ul className="space-y-3 text-sm text-white/70">
                {profile.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <FaCheck className="mt-1 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>
      <div className="mx-auto mt-10 grid max-w-xl gap-3">
        <button type="button" onClick={continueToWorkspace} className={authPrimaryButton}>Continuer</button>
        <button type="button" onClick={() => router.back()} className={authSecondaryButton}>Retour</button>
      </div>
    </AuthFlowShell>
  );
}
