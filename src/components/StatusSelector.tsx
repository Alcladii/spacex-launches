import React from "react";
import type { StatusFilter } from "../types/spacex";

interface StatusFilterProps {
  value: StatusFilter;
  onChange: (value: StatusFilter) => void;
}

const OPTIONS: StatusFilter[] = ["all", "success", "upcoming", "failure"];

export const StatusSelector: React.FC<StatusFilterProps> = ({
  value,
  onChange,
}) => {
  return (
    <>
      <div className="flex sm:hidden flex-row justify-between gap-3 mt-3 mb-3">
        <span className="text-xs font-medium uppercase tracking-[0.08em]
                transition-colors text-status-selected">STATUS</span>
        {OPTIONS.map((opt) => {
          const isActive = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={`
                text-xs font-medium uppercase tracking-[0.08em]
                transition-colors
                ${isActive ? "text-status-selected" : "text-status-unselected"}
              `}
            >
              {opt}
            </button>
          );
        })}
      </div>
      <div className="hidden sm:block min-w-[150px]">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as StatusFilter)}
          className="w-full h-10 rounded-app border border-app-divider bg-app-card px-3 py-2 text-sm text-app-text focus:outline-none"
        >
          <option value="all">All</option>
          <option value="upcoming">Upcoming</option>
          <option value="success">Success</option>
          <option value="failure">Failure</option>
        </select>
      </div>
    </>
  );
};
