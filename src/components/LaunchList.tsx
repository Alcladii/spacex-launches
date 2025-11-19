import { useLaunches } from "@/hooks/useLaunches";
import type { Launch, StatusFilter } from "@/types/spacex";
import InfiniteScroll from "react-infinite-scroll-component";
import { LaunchCard } from "@/components/LaunchCard";
import { LoadingSpinner } from "./Icons/LoadingSpinner";
import { useFavorites } from "../context/FavoriteContext";

interface LaunchListProps {
  name: string;
  status: StatusFilter;
}

export const LaunchList: React.FC<LaunchListProps> = ({ name, status }) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    isFetchingNextPage,
    isFetching,
  } = useLaunches({ name, status });

  const allLaunches: Launch[] = data?.pages.flatMap((page) => page.docs) ?? [];

  const isInitialLoading = isLoading && !data;
  const isRefetching = isFetching && !isLoading && !isFetchingNextPage;

  const noResults =
    !isInitialLoading && !isRefetching && data && allLaunches.length === 0;

  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <>
      {isLoading && !data && (
        <div className="text-center text-sm text-app-accordion-title">
          <LoadingSpinner /> Loading launches…
        </div>
      )}

      {isError && (
        <div className="text-center text-sm text-red-500">
          Something went wrong while fetching launches.
        </div>
      )}

      {noResults && (
        <div className="flex flex-col items-center justify-center py-16 min-h-[50vh]">
          <p className="text-center text-sm text-app-accordion-title">
            Lost in space?
          </p>
          <p className="text-center text-sm text-app-accordion-title">
            Try searching with different terms.
          </p>
        </div>
      )}

      {data && (
        <div className="max-w-5xl mx-auto p-4 min-h-screen bg-app-bg text-app-text font-sans">
          <InfiniteScroll
            dataLength={allLaunches.length}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={
              <p className="py-4 text-center text-xs text-app-accordion-title">
                <LoadingSpinner /> Loading more launches…
              </p>
            }
            endMessage={
              allLaunches.length > 0 && (
                <p className="py-4 text-center text-xs text-app-accordion-title">
                  You've reached the end of the list.
                </p>
              )
            }
            scrollThreshold={0.8}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
              {allLaunches.map((launch) => (
                <LaunchCard
                  key={launch.id}
                  launch={launch}
                  isFavorite={isFavorite(launch.id)}
                  onToggleFavorite={() => toggleFavorite(launch.id)}
                />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      )}

      {isFetchingNextPage && (
        <p className="py-2 text-center text-xs text-app-accordion-title">
          <LoadingSpinner /> Fetching next page…
        </p>
      )}
    </>
  );
};
