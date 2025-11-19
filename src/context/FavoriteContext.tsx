import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

type FavoritesContextValue = {
  favoriteIds: string[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | undefined>(
  undefined
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteIds, setFavoriteIds] = useLocalStorage<string[]>(
    "favorite-launches",
    []
  );

  const value = useMemo(() => {
    const isFavorite = (id: string) => favoriteIds.includes(id);

    const toggleFavorite = (id: string) => {
      setFavoriteIds((prev) =>
        prev.includes(id)
          ? prev.filter((x) => x !== id) // remove
          : [...prev, id]                // add
      );
    };

    return { favoriteIds, isFavorite, toggleFavorite };
  }, [favoriteIds, setFavoriteIds]);

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return ctx;
};
