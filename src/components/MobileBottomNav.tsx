import { Link, useLocation } from "react-router-dom";

export const MobileBottomNav = () => {
  const location = useLocation();
  const current = location.pathname;

  const isLaunches = current === "/" || current.startsWith("/launches");
  const isFavorites = current.startsWith("/favorites");

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-14 flex sm:hidden z-50 border-t border-app-divider bg-app-card">
      <Link
        to="/"
        className={`
          flex-1 flex items-center justify-center
          font-sans text-sm font-semibold uppercase tracking-wide
          ${isLaunches ? "text-app-text" : "text-unselected-button-text-nav"}
          ${
            isLaunches
              ? "bg-selected-button-bg-bottom-nav"
              : "bg-unselected-button-bg-bottom-nav"
          }
        `}
      >
        Launches
      </Link>
      <Link
        to="/favorites"
        className={`
          flex-1 flex items-center justify-center
          font-sans text-sm font-semibold uppercase tracking-wide
          ${isFavorites ? "text-app-text" : "text-unselected-button-text-nav"}
          ${
            isFavorites
              ? "bg-selected-button-bg-bottom-nav"
              : "bg-unselected-button-bg-bottom-nav"
          }
        `}
      >
        Favorites
      </Link>
    </nav>
  );
};
