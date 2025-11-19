// src/pages/LaunchesPage.tsx
import { useState } from "react";
import type { StatusFilter } from "@/types/spacex";
import { useDebounce } from "@/hooks/useDebounce";
import { SearchFilterWrapper } from "@/components/SearchFilterWrapper";
import { LaunchList } from "@/components/LaunchList";
import { LaunchHeader } from "./LaunchHeader";

export const LaunchesListControlWrapper: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");

  const debouncedName = useDebounce(searchText, 500);

  return (
    <>
      <div className="bg-app-bg">
        <LaunchHeader name={debouncedName} status={status} />
        <SearchFilterWrapper
          searchText={searchText}
          onSearchTextChange={setSearchText}
          status={status}
          onStatusChange={setStatus}
        />
        <LaunchList name={debouncedName} status={status} />
      </div>
    </>
  );
};
