"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { isUserRole, roleProfiles, type UserRole } from "@/lib/user-roles";

type SessionUser = {
  name: string;
  email: string;
  role: UserRole;
};

type RoleContextValue = {
  user: SessionUser;
  profile: (typeof roleProfiles)[UserRole];
  setRole: (role: UserRole) => void;
  setUserIdentity: (identity: Pick<SessionUser, "name" | "email">) => void;
};

const defaultUser: SessionUser = {
  name: "John Doe",
  email: "john.doe@papyrus.audio",
  role: "premium_user",
};

const RoleContext = createContext<RoleContextValue | null>(null);

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(defaultUser);

  useEffect(() => {
    const savedRole = window.localStorage.getItem("papyrus-role");
    const savedName = window.localStorage.getItem("papyrus-name");
    const savedEmail = window.localStorage.getItem("papyrus-email");

    setUser((current) => ({
      name: savedName || current.name,
      email: savedEmail || current.email,
      role: isUserRole(savedRole) ? savedRole : current.role,
    }));
  }, []);

  const value = useMemo<RoleContextValue>(
    () => ({
      user,
      profile: roleProfiles[user.role],
      setRole: (role) => {
        window.localStorage.setItem("papyrus-role", role);
        setUser((current) => ({ ...current, role }));
      },
      setUserIdentity: ({ name, email }) => {
        window.localStorage.setItem("papyrus-name", name);
        window.localStorage.setItem("papyrus-email", email);
        setUser((current) => ({ ...current, name, email }));
      },
    }),
    [user],
  );

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
}

export function useRole() {
  const context = useContext(RoleContext);

  if (!context) {
    throw new Error("useRole doit être utilisé dans RoleProvider.");
  }

  return context;
}
