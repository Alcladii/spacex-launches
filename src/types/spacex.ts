export type StatusFilter = "all" | "success" | "failure" | "upcoming";

export interface LaunchRocket {
  name: string;
  flickr_images: string[];
}

export interface LaunchLaunchpad {
  region: string;
}

export interface LaunchLinks {
  patch: {
    small?: string | null;
    large?: string | null;
  };
  article?: string | null;
  webcast?: string | null;
  wikipedia?: string | null;
}

export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  details?: string | null;
  success: boolean | null;
  upcoming: boolean;
   flight_number: number;
  rocket?: LaunchRocket | null;
  launchpad?: LaunchLaunchpad | null;
  links: LaunchLinks;
}

export interface SpaceXPaginated<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export type Theme = "light" | "dark";