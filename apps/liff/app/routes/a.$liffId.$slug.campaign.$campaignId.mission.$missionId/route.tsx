import {
  useOutletContext,
  useParams,
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import { PageLiff } from "~/types/page";
import { useMission, useSubmitMission } from "~/hooks/campaigns";
import { useFileUpload } from "~/hooks/file/useFileUpload";
import { useLineProfile } from "~/contexts/LineLiffContext";
import ErrorView from "~/components/ErrorView";
import DynamicForm from "~/components/DynamicForm";
import LazyImage from "~/components/LazyImage";
import { FormField } from "~/types/campaign";
import {
  ArrowLeft,
  Target,
  Star,
  CheckCircle,
  AlertCircle,
  Trophy,
} from "lucide-react";

const Route = () => {
  const { page, lang } = useOutletContext<{ page: PageLiff; lang: string }>();
  const { liffId, slug, campaignId, missionId } = useParams();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isUploading, setIsUploading] = useState(false);
  const [fileValues, setFileValues] = useState<Record<string, File | null>>({});

  const {
    profile,
    isLoading: isProfileLoading,
    error: profileError,
  } = useLineProfile();

  const {
    data: mission,
    isLoading: isMissionLoading,
    error: missionError,
  } = useMission({
    missionId: missionId || "",
    enabled: !!missionId && !isProfileLoading && !!profile?.userId,
  });

  const submitMutation = useSubmitMission();
  const fileUploadMutation = useFileUpload();

  const primaryColor = page?.bg_color || "#1DB446";

  // If mission is ONCE and already completed, redirect back to dashboard
  useEffect(() => {
    if (
      mission?.frequency === "ONCE" &&
      mission.user_progress?.is_completed &&
      liffId &&
      slug &&
      campaignId
    ) {
      navigate(`/a/${liffId}/${slug}/campaign/${campaignId}/dashboard`, {
        replace: true,
      });
    }
  }, [mission, liffId, slug, campaignId, navigate]);

  // Handle loading states
  if (isProfileLoading || isMissionLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200"></div>
            <div className="h-6 w-40 animate-pulse rounded-lg bg-gray-200"></div>
          </div>
        </div>
        <div className="px-4 pb-6">
          <div className="bg-white rounded-2xl p-6 mb-6 animate-pulse">
            <div className="flex items-start gap-4">
              <div className="h-20 w-20 rounded-2xl bg-gray-200"></div>
              <div className="flex-1 space-y-3">
                <div className="h-6 w-3/4 bg-gray-200 rounded-lg"></div>
                <div className="h-4 w-full bg-gray-200 rounded-lg"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 animate-pulse">
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 w-24 bg-gray-200 rounded-lg"></div>
                  <div className="h-12 w-full bg-gray-200 rounded-xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle errors
  if (profileError || missionError) {
    const language =
      typeof navigator !== "undefined" && navigator.language?.startsWith("en")
        ? ("en" as const)
        : ("th" as const);
    return (
      <ErrorView
        status={profileError ? 500 : 404}
        message={profileError?.message || "ไม่พบภารกิจที่ต้องการ"}
        language={language}
      />
    );
  }

  if (!mission) {
    return null;
  }

  // Check if mission is accessible
  if (
    !mission.user_progress.is_available &&
    !mission.user_progress.has_started &&
    !mission.user_progress.is_completed
  ) {
    const language =
      typeof navigator !== "undefined" && navigator.language?.startsWith("en")
        ? ("en" as const)
        : ("th" as const);
    return (
      <ErrorView
        status={403}
        message={
          lang === "th"
            ? "ภารกิจนี้ยังไม่เปิดให้ทำ"
            : "This mission is not available yet"
        }
        language={language}
      />
    );
  }

  // Normalize form fields: prefer submission_form, fallback to mission_data.form (backend legacy)
  type LegacyMissionData = {
    hashtags?: string[];
    form?: { fields?: FormField[] };
  };
  const missionData = (
    mission as unknown as { mission_data?: LegacyMissionData }
  ).mission_data;
  const submissionFields: FormField[] | undefined =
    mission.submission_form?.fields ?? missionData?.form?.fields;

  // Resolve mission thumbnail image (supports string ID or object with id)
  const thumbId =
    typeof mission.thumbnail_image === "string"
      ? mission.thumbnail_image
      : (mission.thumbnail_image as { id?: string } | null | undefined)?.id;
  const thumbnailUrl = thumbId ? `/api/files/${thumbId}` : "";

  // Disable submit if any required field is missing
  const isRequiredIncomplete = !!submissionFields?.some((field: FormField) => {
    const name = field.name;
    const raw = formValues[name];
    const textHas = typeof raw === "string" && raw.trim().length > 0;
    const fileHas = fileValues[name] instanceof File;
    const isFileField = field.type === "file" || field.type === "image_upload";
    const hasValue = isFileField ? fileHas || textHas : textHas;
    return field.required && !hasValue;
  });

  const validateField = (
    fieldName: string,
    value: string,
    required: boolean,
  ): string => {
    if (required && !value.trim()) {
      return lang === "th" ? "กรุณากรอกข้อมูล" : "This field is required";
    }

    // Additional validation rules
    if (fieldName === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return lang === "th" ? "รูปแบบอีเมลไม่ถูกต้อง" : "Invalid email format";
      }
    }

    if (fieldName === "phone" && value) {
      const phoneRegex = /^[0-9]{9,10}$/;
      if (!phoneRegex.test(value.replace(/-/g, ""))) {
        return lang === "th"
          ? "รูปแบบเบอร์โทรไม่ถูกต้อง"
          : "Invalid phone number format";
      }
    }

    return "";
  };

  const handleFieldChange = (fieldName: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [fieldName]: value }));

    // Clear error when user starts typing
    if (formErrors[fieldName]) {
      setFormErrors((prev) => ({ ...prev, [fieldName]: "" }));
    }
  };

  const handleFileChange = (fieldName: string, file: File | null) => {
    setFileValues((prev) => ({ ...prev, [fieldName]: file }));
    if (formErrors[fieldName]) {
      setFormErrors((prev) => ({ ...prev, [fieldName]: "" }));
    }
  };

  const handleFieldBlur = (fieldName: string) => {
    const field = submissionFields?.find(
      (f: FormField) => f.name === fieldName,
    );
    if (field) {
      let val = formValues[fieldName] || "";
      if (
        (field.type === "file" || field.type === "image_upload") &&
        fileValues[fieldName]
      ) {
        val = "file_present";
      }
      const error = validateField(fieldName, val || "", field.required);
      setFormErrors((prev) => ({ ...prev, [fieldName]: error }));
    }
  };

  const validateForm = (): boolean => {
    if (!submissionFields) return true;

    const errors: Record<string, string> = {};
    let isValid = true;

    submissionFields.forEach((field: FormField) => {
      let value = formValues[field.name] || "";
      if (
        (field.type === "file" || field.type === "image_upload") &&
        fileValues[field.name]
      ) {
        value = "file_present";
      }
      const error = validateField(field.name, value, field.required);

      if (error) {
        errors[field.name] = error;
        isValid = false;
      }
    });

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!submissionFields) return;

    if (!validateForm()) {
      return;
    }

    try {
      setIsUploading(true);
      const submissionData: Record<string, unknown> = { ...formValues };
      for (const field of submissionFields) {
        if (field.type === "file" || field.type === "image_upload") {
          const f = fileValues[field.name];
          if (f instanceof File) {
            const res = await fileUploadMutation.mutateAsync({
              folder: "user_uploads",
              file: f,
            });
            if (!res?.id) {
              throw new Error("Invalid upload response: missing id");
            }
            submissionData[field.name] = res.id;
          }
        }
      }
      setIsUploading(false);

      await submitMutation.mutateAsync({
        missionId: missionId!,
        data: {
          submission_data: submissionData,
        },
      });

      // Navigate back to dashboard
      navigate(`/a/${liffId}/${slug}/campaign/${campaignId}/dashboard`);
    } catch (error) {
      console.error("Failed to submit mission:", error);
      alert(
        lang === "th"
          ? "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง"
          : "An error occurred. Please try again.",
      );
      setIsUploading(false);
    }
  };

  const pageTitle = lang === "th" ? "รายละเอียดภารกิจ" : "Mission Details";


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              navigate(`/a/${liffId}/${slug}/campaign/${campaignId}/dashboard`)
            }
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-gray-900">{pageTitle}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-6">
        {/* Mission Info Card */}
        <div className="bg-white rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              {thumbnailUrl ? (
                <LazyImage
                  src={thumbnailUrl}
                  alt={mission.title?.[lang] || "mission"}
                  wrapperClassName="h-20 w-20 rounded-2xl overflow-hidden bg-gray-100"
                  className="h-full w-full object-cover"
                  placeholder="shimmer"
                  priority
                />
              ) : (
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-2xl text-white"
                  style={{ backgroundColor: primaryColor }}
                >
                  <Target size={28} />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                {mission.title[lang]}
              </h2>
              {mission.description?.[lang] && (
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {mission.description[lang]}
                </p>
              )}

              {missionData?.hashtags && missionData.hashtags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {missionData.hashtags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Mission Metadata */}
              <div className="mt-4 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div
                    className="p-2 rounded-full"
                    style={{ backgroundColor: `${primaryColor}20` }}
                  >
                    <Star size={16} style={{ color: primaryColor }} />
                  </div>
                  <span className="font-semibold text-gray-900">
                    {mission.reward_credits}{" "}
                    {lang === "th" ? "สิทธิ์" : "Credits"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Status */}
        {/* <div
          className={`rounded-lg border p-4 ${statusDisplay.bgColor} ${statusDisplay.borderColor}`}
        >
          <div className="flex items-center gap-3">
            {statusDisplay.icon}
            <div>
              <div className={`font-semibold ${statusDisplay.textColor}`}>
                {statusDisplay.text}
              </div>
              {mission.user_progress.is_completed &&
                mission.user_progress.submitted_at && (
                  <div className="text-sm text-gray-600">
                    {lang === "th" ? "ส่งเมื่อ:" : "Submitted on:"}{" "}
                    {new Date(
                      mission.user_progress.submitted_at,
                    ).toLocaleDateString(lang === "th" ? "th-TH" : "en-US")}
                  </div>
                )}
            </div>
          </div>
        </div> */}

        {/* Mission Instructions */}
        {mission.instructions && (
          <div className="bg-white rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {lang === "th" ? "คำแนะนำ" : "Instructions"}
            </h3>
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {mission.instructions[lang]}
            </div>
          </div>
        )}

        {/* Submission Form */}
        {!mission.user_progress.is_completed && submissionFields && (
          <div className="bg-white rounded-2xl p-6 mb-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-2 rounded-full"
                  style={{ backgroundColor: `${primaryColor}20` }}
                >
                  <Target size={20} style={{ color: primaryColor }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {lang === "th" ? "ส่งผลงาน" : "Submit Your Work"}
                </h3>
              </div>

              <DynamicForm
                fields={submissionFields}
                values={formValues}
                errors={formErrors}
                language={lang}
                onChange={handleFieldChange}
                onFileChange={handleFileChange}
                onBlur={handleFieldBlur}
              />

              {/* Error Summary */}
              {Object.keys(formErrors).some((key) => formErrors[key]) && (
                <div className="rounded-2xl bg-red-50 p-4">
                  <div className="flex items-center gap-3 text-red-800">
                    <AlertCircle size={20} />
                    <span className="font-medium">
                      {lang === "th"
                        ? "กรุณาแก้ไขข้อผิดพลาดต่อไปนี้:"
                        : "Please fix the following errors:"}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm text-red-700">
                    {Object.entries(formErrors)
                      .filter(([, error]) => error)
                      .map(([fieldName, error]) => {
                        const field = submissionFields?.find(
                          (f) => f.name === fieldName,
                        );
                        const fieldLabel =
                          field?.label[lang as "th" | "en"] ||
                          field?.label.th ||
                          fieldName;
                        return (
                          <li key={fieldName}>
                            {fieldLabel}: {error}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={
                  submitMutation.isPending ||
                  isUploading ||
                  isRequiredIncomplete
                }
                className="w-full rounded-2xl py-4 px-6 font-bold text-white transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 hover:shadow-lg"
                style={{
                  backgroundColor:
                    submitMutation.isPending ||
                    isUploading ||
                    isRequiredIncomplete
                      ? "#9CA3AF"
                      : primaryColor,
                }}
              >
                {submitMutation.isPending || isUploading
                  ? lang === "th"
                    ? "กำลังส่ง..."
                    : "Submitting..."
                  : lang === "th"
                    ? "ส่งผลงาน"
                    : "Submit Work"}
              </button>
            </form>
          </div>
        )}

        {/* Completed Mission Info */}
        {mission.user_progress.is_completed && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-full">
                <CheckCircle size={28} className="text-green-600" />
              </div>
              <div>
                <div className="text-xl font-bold text-green-800">
                  {lang === "th" ? "ภารกิจเสร็จสิ้น!" : "Mission Completed!"}
                </div>
                <div className="text-green-700 mt-1">
                  {lang === "th"
                    ? `คุณได้รับ ${mission.reward_credits} เครดิต`
                    : `You earned ${mission.reward_credits} credits`}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Back to Dashboard Button */}
        {/* <button
          onClick={() => navigate(`/a/${liffId}/${slug}/campaign/${campaignId}/dashboard`)}
          className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
        >
          {lang === 'th' ? 'กลับสู่แดชบอร์ด' : 'Back to Dashboard'}
        </button> */}
      </div>
    </div>
  );
};

export default Route;

export function ErrorBoundary() {
  const error = useRouteError();
  const language =
    typeof navigator !== "undefined" && navigator.language?.startsWith("en")
      ? ("en" as const)
      : ("th" as const);

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorView
        status={error.status}
        message={error.data?.message || "เกิดข้อผิดพลาด"}
        language={language}
      />
    );
  }

  return (
    <ErrorView
      status={500}
      message="เกิดข้อผิดพลาดที่ไม่คาดคิด"
      language={language}
    />
  );
}
