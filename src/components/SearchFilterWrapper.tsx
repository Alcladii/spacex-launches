import React from "react";
import { SearchBar } from "@/components/SearchBar";
import { StatusSelector } from "@/components/StatusSelector";
import type { StatusFilter } from "@/types/spacex";

interface LaunchFiltersProps {
  searchText: string;
  onSearchTextChange: (value: string) => void;
  status: StatusFilter;
  onStatusChange: (value: StatusFilter) => void;
}

export const SearchFilterWrapper: React.FC<LaunchFiltersProps> = ({
  searchText,
  onSearchTextChange,
  status,
  onStatusChange,
}) => {
  return (
    <div className="sticky top-[60px] z-20">
      <div className="border-b">
        <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row max-w-5xl mx-auto gap-3 p-4 bg-app-bg text-app-text font-sans">
          <h2
            className="
            font-sans font-bold
            text-lg leading-7
            tracking-[-0.5px]
            text-app-text
          "
          >
            Launches
          </h2>
          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <SearchBar value={searchText} onChange={onSearchTextChange} />
            <StatusSelector value={status} onChange={onStatusChange} />
          </div>
        </div>
      </div>
    </div>
  );
};
