import { useFavorites } from "@/context/FavoriteContext";
import { queryLaunchesByIds } from "@/services/spacex";
import { useQuery } from "@tanstack/react-query";
import { LaunchCard } from "@/components/LaunchCard";
import type { Launch } from "@/types/spacex";

export const FavoritePanel = () => {
  const { favoriteIds, isFavorite, toggleFavorite } = useFavorites();

  const {
    data: favorites,
    isLoading,
    isError,
  } = useQuery<Launch[], Error>({
    queryKey: ["favorite-launches", favoriteIds],
    queryFn: () => queryLaunchesByIds(favoriteIds),
    enabled: favoriteIds.length > 0,
  });

  if (favoriteIds.length === 0) {
    return (
      <div className="flex flex-col p-6 text-center text-gray-600">
        <p className="text-lg">This space looks empty.</p>
        <p className="text-sm mt-1">Time to explore some launches.</p>
      </div>
    );
  }

  if (isLoading) {
    return <div className="p-6 text-center">Loading favorites…</div>;
  }

  if (isError || !favorites) {
    return (
      <div className="p-6 text-center text-red-500">
        Failed to load favorites.
      </div>
    );
  }

  return (
    <div className="bg-app-bg">
      <div className="max-w-5xl mx-auto p-4 space-y-4 min-h-screen bg-app-bg text-app-text font-sans">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {favorites.map((launch) => (
            <LaunchCard
              key={launch.id}
              launch={launch}
              isFavorite={isFavorite(launch.id)}
              onToggleFavorite={() => toggleFavorite(launch.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
