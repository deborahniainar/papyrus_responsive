export const userRoles = [
  "user",
  "premium_user",
  "author",
  "publisher",
  "admin",
  "super_admin",
  "moderator",
  "support",
  "accounting",
] as const;

export type UserRole = (typeof userRoles)[number];

export type RoleProfile = {
  role: UserRole;
  label: string;
  shortLabel: string;
  home: string;
};

export const roleProfiles: Record<UserRole, RoleProfile> = {
  user: { role: "user", label: "Auditeur", shortLabel: "Auditeur", home: "/accueil" },
  premium_user: { role: "premium_user", label: "Auditeur Premium", shortLabel: "Premium", home: "/accueil" },
  author: { role: "author", label: "Auteur", shortLabel: "Auteur", home: "/auteur" },
  publisher: { role: "publisher", label: "Maison d’édition", shortLabel: "Éditeur", home: "/editeur" },
  admin: { role: "admin", label: "Administrateur", shortLabel: "Admin", home: "/admin" },
  super_admin: { role: "super_admin", label: "Super administrateur", shortLabel: "Super admin", home: "/admin" },
  moderator: { role: "moderator", label: "Modérateur", shortLabel: "Modération", home: "/moderation" },
  support: { role: "support", label: "Équipe support", shortLabel: "Support", home: "/support" },
  accounting: { role: "accounting", label: "Comptabilité", shortLabel: "Comptabilité", home: "/comptabilite" },
};

export function isUserRole(value: string | null): value is UserRole {
  return userRoles.includes(value as UserRole);
}
