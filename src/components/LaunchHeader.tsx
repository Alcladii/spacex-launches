import React from "react";
import type { StatusFilter } from "@/types/spacex";
import { useTotalLaunchCount } from "@/hooks/useTotalLaunchCount";

interface LaunchHeaderProps {
  name: string;
  status: StatusFilter;
}

export const LaunchHeader: React.FC<LaunchHeaderProps> = () => {
  const { data: totalLaunches } = useTotalLaunchCount();

  return (
    <header className="h-[348px] w-full bg-app-header-nav flex justify-center items-center">
      <div className="max-w-6xl bg-app-header-nav px-4 sm:h-[50%] h-full flex flex-col sm:flex-row items-end justify-center gap-4 sm:gap-64">
        <div className="max-w-xl flex flex-col justify-end">
          <h1 className="text-app-text font-sans font-bold text-4xl sm:text-6xl tracking-[-1.5px]">
            Making life Multiplanetary
          </h1>
          <p className="text-app-text mt-4 font-sans font-normal text-lg ">
            To revolutionize space technology, with the ultimate goal of
            enabling people to live on other planets.
          </p>
        </div>
        <div className="flex items-center">
          <div className="mr-3 font-sans font-medium text-6xl leading-[84px] tracking-[-1.5px] text-[#007FFF] text-right">
            {totalLaunches ?? 205}
          </div>
          <div className="mt-2 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-app-accordion-title text-right">
            Total Launches
          </div>
        </div>
      </div>
    </header>
  );
};
