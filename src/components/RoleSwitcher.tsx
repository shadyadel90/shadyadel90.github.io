import { roleOptions } from "../data/portfolio";
import { useRole } from "../context/RoleContext";

interface RoleSwitcherProps {
  /** Slightly denser control for the sticky nav. */
  compact?: boolean;
  className?: string;
}

export function RoleSwitcher({ compact = false, className = "" }: RoleSwitcherProps) {
  const { roleId, setRoleId } = useRole();

  return (
    <div
      role="tablist"
      aria-label="Professional profile"
      className={`inline-flex max-w-full rounded-md border border-line p-0.5 ${className}`}
    >
      {roleOptions.map((option) => {
        const isActive = option.id === roleId;
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => setRoleId(option.id)}
            className={`rounded-[5px] overflow-visible leading-normal font-medium transition-colors ${
              compact ? "px-2.5 py-1.5 text-xs" : "px-3.5 py-2 text-sm"
            } ${isActive ? "bg-text text-bg" : "text-muted hover:text-text"}`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
