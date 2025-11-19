import { type Launch, type SpaceXPaginated, type StatusFilter } from "../types/spacex";

const SPACEX_BASE_URL = "https://api.spacexdata.com";

export interface QueryLaunchesOptions {
  name?: string;
  status?: StatusFilter;
  page?: number;
  limit?: number;
}

function buildLaunchQuery(opts: { name?: string; status?: StatusFilter }) {
  const { name, status = "all" } = opts;
  const query: Record<string, any> = {};

  if (name && name.trim().length > 0) {
    query.name = {
      $regex: name.trim(),
      $options: "i",
    };
  }

  switch (status) {
    case "success":
      query.success = true;
      query.upcoming = false;
      break;
    case "failure":
      query.success = false;
      query.upcoming = false;
      break;
    case "upcoming":
      query.upcoming = true;
      break;
    case "all":
    default:
      break;
  }

  return query;
}

export async function queryLaunches(
  opts: QueryLaunchesOptions
): Promise<SpaceXPaginated<Launch>> {
  const {
    name,
    status = "all",
    page = 1,
    limit = 24,
  } = opts;

  const body = {
    query: buildLaunchQuery({ name, status }),
    options: {
      sort: { flight_number: "desc" },
      page,
      limit,
      populate: ["rocket", "launchpad"],
    },
  };

  const res = await fetch(`${SPACEX_BASE_URL}/v5/launches/query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch launches: ${res.statusText}`);
  }

  const data = (await res.json()) as SpaceXPaginated<Launch>;
  return data;
}

export async function queryLaunchesByIds(ids: string[]): Promise<Launch[]> {
  if (ids.length === 0) return [];

  const body = {
    query: {
      _id: { $in: ids },
    },
    options: {
      populate: ["rocket", "launchpad"],
      pagination: false,
    },
  };

  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch favorite launches: ${res.statusText}`);
  }

  const data = await res.json();
  return data.docs as Launch[];
}

export async function getTotalLaunchCount(): Promise<number> {
  const body = {
    query: {},
    options: {
      limit: 1, 
    },
  };

  const res = await fetch(`${SPACEX_BASE_URL}/v5/launches/query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch total launches: ${res.statusText}`);
  }

  const data = (await res.json()) as SpaceXPaginated<Launch>;
  return data.totalDocs;
}
