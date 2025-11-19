import { useState } from "react";
import { type Launch } from "../types/spacex";
import { AccordionDown } from "./Icons/AccordionDown";
import { AccordionUp } from "./Icons/AccordionUp";
import { FavoriteButton } from "./Buttons/FavoriteButton";

interface LaunchCardProps {
  launch: Launch;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const LaunchCard: React.FC<LaunchCardProps> = ({
  launch,
  isFavorite,
  onToggleFavorite,
}) => {
  const [open, setOpen] = useState(false);

  const statusLabel = launch.upcoming
    ? "Upcoming"
    : launch.success === true
    ? "Success"
    : launch.success === false
    ? "Failure"
    : "—";

  const statusColor = launch.upcoming
    ? " text-yellow-500"
    : launch.success === true
    ? " text-green-500"
    : launch.success === false
    ? " text-red-500"
    : "bg-gray-100 text-gray-700";

  const rocketImage =
    launch.rocket?.flickr_images && launch.rocket.flickr_images.length > 0
      ? launch.rocket.flickr_images[0]
      : null;

  return (
    <div className="rounded-app bg-app-card p-4 shadow-sm flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <span
          className={`border inline-flex items-center mt-1 px-2 py-1 rounded text-xs font-medium ${statusColor}`}
        >
          {statusLabel}
        </span>
        <FavoriteButton isFavorite={isFavorite} onToggle={onToggleFavorite} />
      </div>
      <div className="flex items-center gap-3">
        <div>
          <div className="font-semibold text-lg">{launch.name}</div>
          <div className="text-xs text-gray-500">
            {new Date(launch.date_utc).toLocaleString()}
          </div>
        </div>
      </div>
      {open && (
        <div className="p-4 rounded-app bg-app-accordion mt-3 pt-3 space-y-4 text-app-text  flex flex-col">
          <div className="flex flex-col">
            <span className="font-semibold text-app-accordion-title">
              Flight Number
            </span>
            <span>{launch.flight_number}</span>
          </div>

          {launch.rocket?.name && (
            <div className="flex flex-col">
              <span className="font-semibold text-app-accordion-title">
                Rocket Name
              </span>
              <span>{launch.rocket.name}</span>
            </div>
          )}

          {launch.details && (
            <div className="flex flex-col">
              <span className="font-semibold text-app-accordion-title">
                Mission Details
              </span>
              <p className="leading-relaxed">{launch.details}</p>
            </div>
          )}

          {launch.launchpad?.region && (
            <div className="flex flex-col">
              <span className="font-semibold text-app-accordion-title">
                Region
              </span>
              <span>{launch.launchpad.region}</span>
            </div>
          )}

          {rocketImage && (
            <div className="flex flex-col">
              <span className="font-semibold mb-1 text-app-accordion-title">
                Rocket Image
              </span>
              <img
                src={rocketImage}
                alt={launch.rocket?.name ?? "Rocket image"}
                className="w-full max-h-48 object-cover rounded"
              />
            </div>
          )}

          <div className="flex flex-col">
            <span className="font-semibold text-app-accordion-title">
              Links
            </span>

            <ul className="list-disc list-inside space-y-1 mt-1">
              {launch.links.article && (
                <li>
                  <a
                    href={launch.links.article}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Article
                  </a>
                </li>
              )}

              {launch.links.webcast && (
                <li>
                  <a
                    href={launch.links.webcast}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    YouTube Webcast
                  </a>
                </li>
              )}

              {launch.links.wikipedia && (
                <li>
                  <a
                    href={launch.links.wikipedia}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Wikipedia
                  </a>
                </li>
              )}

              {!launch.links.article &&
                !launch.links.webcast &&
                !launch.links.wikipedia && (
                  <li className="text-gray-500">No media links available.</li>
                )}
            </ul>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-3 mt-2 text-sm font-medium text-app-text hover:underline self-start"
        >
          <span>{open ? "Hide details" : "Show details"}</span>
          {open ? (
            <AccordionUp className="w-3 h-3 text-accordion-icon" />
          ) : (
            <AccordionDown className="w-3 h-3 text-accordion-icon" />
          )}
        </button>
      </div>
    </div>
  );
};
