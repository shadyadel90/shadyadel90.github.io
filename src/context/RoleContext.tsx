import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  defaultRole,
  profiles,
  type Profile,
  type RoleId,
} from "../data/portfolio";

interface RoleContextValue {
  roleId: RoleId;
  setRoleId: (role: RoleId) => void;
  profile: Profile;
}

const RoleContext = createContext<RoleContextValue | null>(null);

function readRoleFromUrl(): RoleId {
  if (typeof window === "undefined") return defaultRole;
  const param = new URLSearchParams(window.location.search).get("role");
  return param === "ai" || param === "ios" ? param : defaultRole;
}

function writeRoleToUrl(role: RoleId) {
  const url = new URL(window.location.href);
  if (role === defaultRole) {
    url.searchParams.delete("role");
  } else {
    url.searchParams.set("role", role);
  }
  window.history.replaceState({}, "", url.toString());
}

export function RoleProvider({ children }: { children: ReactNode }) {
  const [roleId, setRoleIdState] = useState<RoleId>(readRoleFromUrl);

  const setRoleId = (role: RoleId) => {
    setRoleIdState(role);
    writeRoleToUrl(role);
  };

  const profile = profiles[roleId];

  useEffect(() => {
    document.title = profile.documentTitle;
  }, [profile.documentTitle]);

  return (
    <RoleContext.Provider value={{ roleId, setRoleId, profile }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const ctx = useContext(RoleContext);
  if (!ctx) {
    throw new Error("useRole must be used within RoleProvider");
  }
  return ctx;
}
