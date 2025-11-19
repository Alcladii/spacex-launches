import { useState, useEffect } from "react";
import { LaunchesPage } from "./pages/LaunchesPage";
import { FavoritesPage } from "./pages/FavoritePages";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { MobileBottomNav } from "./components/MobileBottomNav";
import { FavoritesProvider } from "@/context/FavoriteContext";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="min-h-screen">
        <FavoritesProvider>
          <NavBar theme={theme} onToggleTheme={handleToggleTheme} />
          <MobileBottomNav />
          <main className="">
            <Routes>
              <Route path="/" element={<LaunchesPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </main>
        </FavoritesProvider>
      </div>
    </>
  );
}
