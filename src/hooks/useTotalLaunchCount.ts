import { useQuery } from "@tanstack/react-query";
import { getTotalLaunchCount } from "@/services/spacex";

export const useTotalLaunchCount = () => {
  return useQuery({
    queryKey: ["total-launch-count"],
    queryFn: getTotalLaunchCount,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
