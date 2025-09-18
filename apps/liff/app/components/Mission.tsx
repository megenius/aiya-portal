import { useNavigate } from "@remix-run/react";
import { MissionWithUserProgress } from "~/types/campaign";

interface MissionProps {
  mission: MissionWithUserProgress;
  liffId: string;
  slug: string;
  campaignId: string;
  lang: string;
}

export const Mission = ({
  mission,
  liffId,
  slug,
  campaignId,
  lang,
}: MissionProps) => {
  const navigate = useNavigate();
  const isAccessible =
    mission.user_progress.is_available ||
    mission.user_progress.has_started ||
    mission.user_progress.is_completed;

  // Resolve thumbnail image id and URL (supports string ID or object with id)
  const thumbId =
    typeof mission.thumbnail_image === "string"
      ? mission.thumbnail_image
      : (mission.thumbnail_image as { id?: string } | null | undefined)?.id;
  const thumbnailUrl = thumbId ? `/api/files/${thumbId}` : "";

  const CardInner = (
    <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-md">
      {/* Image header */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-100">
        {/* Keep aspect ratio similar to mock */}
        <div className="aspect-square w-full">
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt={mission.title?.[lang] || "mission"}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-gray-400">
              IMG
            </div>
          )}
        </div>
      </div>

      {/* Title and description area */}
      <div className="mt-3 text-start">
        <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-gray-900">
          {mission.title?.[lang]}
        </h3>
        <p className="mt-1 text-xs text-gray-600">
          {lang === "th"
            ? `ได้รับ ${mission.reward_credits} สิทธิ์`
            : `Earn ${mission.reward_credits} credits`}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-4">
        <button
          className={
            "w-full rounded-full border px-4 py-2 text-center text-sm font-semibold " +
            (isAccessible
              ? "border-blue-500 text-blue-600 hover:bg-blue-50"
              : "cursor-not-allowed border-gray-300 text-gray-400")
          }
          onClick={() => {
            navigate(
              `/a/${liffId}/${slug}/campaign/${campaignId}/mission/${mission.id}`,
            );
          }}
        >
          {lang === "th" ? "ทำภารกิจ" : "Start Mission"}
        </button>
      </div>
    </div>
  );

  return (
    <div>
      {isAccessible ? (
        <button
          onClick={() => {
            navigate(
              `/a/${liffId}/${slug}/campaign/${campaignId}/mission/${mission.id}`,
            );
          }}
          className="block"
        >
          {CardInner}
        </button>
      ) : (
        <div className="opacity-80">{CardInner}</div>
      )}
    </div>
  );
};
