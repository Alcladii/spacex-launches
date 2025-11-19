import { useInfiniteQuery } from "@tanstack/react-query";
import { queryLaunches } from "../services/spacex";
import { type SpaceXPaginated, type Launch, type StatusFilter } from "../types/spacex";

interface UseLaunchesArgs {
  name: string;
  status: StatusFilter;
  limit?: number;
}

export const useLaunches = ({ name, status, limit = 24 }: UseLaunchesArgs) => {
  return useInfiniteQuery<SpaceXPaginated<Launch>, Error>({
    queryKey: ["launches", { name, status, limit }],
    queryFn: ({ pageParam = 1 }) =>
      queryLaunches({
        name,
        status,
        page: pageParam as number,
        limit,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.hasNextPage ? lastPage.nextPage ?? undefined : undefined,
  });
};

