import React from "react";
import { NavLink } from "react-router-dom";
import type { Theme } from "@/types/spacex";
import { ThemeToggleButton } from "@/components/Buttons/ThemeToggleButton";

interface NavBarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({ theme, onToggleTheme }) => {
  return (
    <nav className="sticky top-0 z-20 bg-app-header-nav">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-logo-bg flex items-center justify-center text-sm text-logo-text font-bold tracking-widest">
            SX
          </div>
          <span className="text-sm sm:text-base text-spacex-text font-semibold tracking-[0.15em] uppercase">
            SpaceX
          </span>
        </div>
        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) => {
              const base =
                "text-xs sm:text-sm font-medium px-1 sm:px-2 py-1 transition-colors hidden sm:block";
              if (theme === "dark") {
                return isActive
                  ? `${base} text-white`
                  : `${base} text-[#7F7F7F] hover:text-white`;
              } else {
                return isActive
                  ? `${base} text-[#121212]`
                  : `${base} text-[#7F7F7F] hover:text-[#121212]`;
              }
            }}
          >
            Launches
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) => {
              const base =
                "text-xs sm:text-sm font-medium px-1 sm:px-2 py-1 transition-colors hidden sm:block";
              if (theme === "dark") {
                return isActive
                  ? `${base} text-white`
                  : `${base} text-[#7F7F7F] hover:text-white`;
              } else {
                return isActive
                  ? `${base} text-[#121212]`
                  : `${base} text-[#7F7F7F] hover:text-[#121212]`;
              }
            }}
          >
            Favorites
          </NavLink>
          <ThemeToggleButton theme={theme} onToggleTheme={onToggleTheme} />
        </div>
      </div>
    </nav>
  );
};
