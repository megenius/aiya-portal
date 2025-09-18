import {
  useOutletContext,
  useParams,
  useNavigate,
  useSearchParams,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { useState, useEffect, useMemo } from "react";
import { PageLiff } from "~/types/page";
import { useCampaign, useRegisterCampaign } from "~/hooks/campaigns";
import { useLineProfile } from "~/contexts/LineLiffContext";
import ErrorView from "~/components/ErrorView";
import DynamicForm from "~/components/DynamicForm";
import { ArrowLeft, UserPlus, AlertCircle } from "lucide-react";
import { getDirectusFileUrl } from "~/utils/files";

const Route = () => {
  const { page, lang } = useOutletContext<{ page: PageLiff; lang: string }>();
  const { liffId, slug, campaignId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>(
    {},
  );

  const {
    profile,
    isLoading: isProfileLoading,
    error: profileError,
  } = useLineProfile();

  const {
    data: campaign,
    isLoading: isCampaignLoading,
    error: campaignError,
  } = useCampaign({
    campaignId: campaignId || "",
    enabled: !!campaignId && !isProfileLoading && !!profile?.userId,
  });

  const registerMutation = useRegisterCampaign();

  const primaryColor = page.bg_color || "#1DB446";

  // i18n messages
  const messages = useMemo(() => {
    return lang === "th"
      ? {
          pageTitle: "ลงทะเบียนเข้าร่วมแคมเปญ",
          introDesc: "กรุณากรอกข้อมูลเพื่อลงทะเบียนเข้าร่วมแคมเปญ",
          formTitle: "ข้อมูลสำหรับลงทะเบียน",
          errorsSummary: "กรุณาแก้ไขข้อผิดพลาดต่อไปนี้:",
          errors: {
            required: "กรุณากรอกข้อมูล",
            emailInvalid: "รูปแบบอีเมลไม่ถูกต้อง",
            phoneInvalid: "รูปแบบเบอร์โทรไม่ถูกต้อง",
            checkboxRequired: "กรุณาติ๊กยอมรับ",
            selectRequired: "กรุณาเลือกข้อมูล",
          },
          submitting: "กำลังลงทะเบียน...",
          submit: "ลงทะเบียน",
        }
      : {
          pageTitle: "Campaign Registration",
          introDesc:
            "Please fill in the information to register for the campaign",
          formTitle: "Registration Information",
          errorsSummary: "Please fix the following errors:",
          errors: {
            required: "This field is required",
            emailInvalid: "Invalid email format",
            phoneInvalid: "Invalid phone number format",
            checkboxRequired: "Please accept",
            selectRequired: "Please select an option",
          },
          submitting: "Registering...",
          submit: "Register",
        };
  }, [lang]);

  // Disable submit until required fields are provided and no errors exist
  const isSubmitDisabled = useMemo(() => {
    if (!campaign) return true;
    const hasErrors = Object.values(formErrors).some(Boolean);

    const missingRequired = campaign.registration_form.fields.some((field) => {
      if (!field.required) return false;
      const raw = (formValues[field.name] ?? "").toString();
      const value = raw.trim();
      if (field.type === "checkbox") {
        const truthy = ["true", "1", "on", "yes"].includes(value.toLowerCase());
        return !truthy;
      }
      if (field.type === "select") {
        return !value;
      }
      if (field.type === "tel" || field.name === "phone") {
        const digits = value.replace(/[^0-9]/g, "");
        return digits.length !== 10;
      }
      return !value;
    });

    return registerMutation.isPending || hasErrors || missingRequired;
  }, [campaign, formErrors, formValues, registerMutation.isPending]);

  // Handle redirects in useEffect to avoid render-time navigation
  useEffect(() => {
    if (!campaign || isProfileLoading || isCampaignLoading) return;

    // If already registered, go to dashboard
    if (campaign.user_stats.is_registered) {
      navigate(`/a/${liffId}/${slug}/campaign/${campaignId}/dashboard`, {
        replace: true,
      });
      return;
    }
  }, [
    campaign,
    isProfileLoading,
    isCampaignLoading,
    navigate,
    liffId,
    slug,
    campaignId,
  ]);

  // Handle loading states
  if (isProfileLoading || isCampaignLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 animate-pulse rounded bg-gray-200"></div>
            <div className="h-6 w-40 animate-pulse rounded bg-gray-200"></div>
          </div>
        </div>
        <div className="space-y-6 p-4">
          <div className="h-8 w-3/4 animate-pulse rounded bg-gray-200"></div>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
                <div className="h-10 w-full animate-pulse rounded bg-gray-200"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Handle errors
  if (profileError || campaignError) {
    const language =
      typeof navigator !== "undefined" && navigator.language?.startsWith("en")
        ? ("en" as const)
        : ("th" as const);
    return (
      <ErrorView
        status={profileError ? 500 : 404}
        message={profileError?.message || "ไม่พบแคมเปญที่ต้องการ"}
        language={language}
      />
    );
  }

  if (!campaign) {
    return null;
  }

  // Don't render content if we need to redirect (handled by useEffect)
  if (campaign.user_stats.is_registered) {
    return null;
  }

  const validateField = (
    field: { name: string; required: boolean; type?: string },
    valueRaw: string,
  ): string => {
    const value = (valueRaw ?? "").toString().trim();

    // Required validation by type
    if (field.required) {
      if (field.type === "checkbox") {
        const truthy = ["true", "1", "on", "yes"].includes(value.toLowerCase());
        if (!truthy) return messages.errors.checkboxRequired;
      } else if (field.type === "select") {
        if (!value) return messages.errors.selectRequired;
      } else {
        if (!value) return messages.errors.required;
      }
    }

    // Type-specific validation
    const isEmailField = field.type === "email" || field.name === "email";
    if (isEmailField && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return messages.errors.emailInvalid;
      }
    }

    const isPhoneField = field.type === "tel" || field.name === "phone";
    if (isPhoneField && value) {
      const digits = value.replace(/[^0-9]/g, "");
      const phoneRegex = /^[0-9]{10}$/; // enforce 10 digits
      if (!phoneRegex.test(digits)) {
        return messages.errors.phoneInvalid;
      }
    }

    return "";
  };

  // Format Thai phone number as 0xx-xxx-xxxx while typing
  const formatThaiPhone = (digits: string) => {
    const d = digits.slice(0, 10);
    if (d.length <= 3) return d;
    if (d.length <= 6) return `${d.slice(0, 3)}-${d.slice(3)}`;
    return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
  };

  const handleFieldChange = (fieldName: string, value: string) => {
    const field = campaign.registration_form.fields.find(
      (f) => f.name === fieldName,
    );

    // Sanitize and format phone input
    if (field && (field.type === "tel" || field.name === "phone")) {
      const digitsOnly = (value || "").replace(/\D/g, "").slice(0, 10);
      const formatted = formatThaiPhone(digitsOnly);
      setFormValues((prev) => ({ ...prev, [fieldName]: formatted }));
    } else {
      setFormValues((prev) => ({ ...prev, [fieldName]: value }));
    }

    // Clear error when user starts typing
    if (formErrors[fieldName]) {
      setFormErrors((prev) => ({ ...prev, [fieldName]: "" }));
    }
  };

  const handleFieldBlur = (fieldName: string) => {
    setTouchedFields((prev) => ({ ...prev, [fieldName]: true }));

    const field = campaign.registration_form.fields.find(
      (f) => f.name === fieldName,
    );
    if (field) {
      const error = validateField(field, formValues[fieldName] || "");
      setFormErrors((prev) => ({ ...prev, [fieldName]: error }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    let isValid = true;

    campaign.registration_form.fields.forEach((field) => {
      const value = formValues[field.name] || "";
      const error = validateField(field, value);

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

    // Mark all fields as touched
    const allFields = campaign.registration_form.fields.reduce(
      (acc, field) => ({ ...acc, [field.name]: true }),
      {},
    );
    setTouchedFields(allFields);

    if (!validateForm()) {
      return;
    }

    try {
      const cameWithPdpa = searchParams.get("pdpa") === "1";
      const pdpaAt = searchParams.get("pdpaAt") || new Date().toISOString();

      // Sanitize phone fields (strip non-digits) before submit
      const sanitizedValues = campaign.registration_form.fields.reduce(
        (acc, field) => {
          const v = (formValues[field.name] ?? "").toString();
          if (field.type === "tel" || field.name === "phone") {
            acc[field.name] = v.replace(/[^0-9]/g, "");
          } else {
            acc[field.name] = v;
          }
          return acc;
        },
        {} as Record<string, string>,
      );

      await registerMutation.mutateAsync({
        campaignId: campaignId!,
        data: {
          registration_data: sanitizedValues,
          ...(cameWithPdpa
            ? { has_agreed_pdpa: true, pdpa_agreed_at: pdpaAt }
            : {}),
        },
      });

      // Navigate to campaign dashboard
      navigate(`/a/${liffId}/${slug}/campaign/${campaignId}/dashboard`);
    } catch (error) {
      console.error("Failed to register:", error);
      alert(
        lang === "th"
          ? "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง"
          : "An error occurred. Please try again.",
      );
    }
  };

  const pageTitle = messages.pageTitle;

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{
        backgroundImage: `url(${getDirectusFileUrl(campaign.poster_image as string)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <header className="flex items-center px-4 py-4 text-white">
        <button className="flex gap-2" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-6 w-6" />
          <span className="text-lg font-medium">
            {lang === "th" ? "ย้อนกลับ" : "Back"}
          </span>
        </button>
      </header>

      {/* Content */}
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
          <form noValidate onSubmit={handleSubmit} className="space-y-6">
            {/* Campaign Info */}
            <div className="rounded-lg bg-blue-50 p-4">
              <h2 className="font-semibold text-blue-900">
                {campaign.title[lang]}
              </h2>
              <p className="text-sm text-blue-700">{messages.introDesc}</p>
            </div>

            {/* Registration Form */}
            <div className="space-y-4">
              {/* <div className="flex items-center gap-2 text-lg font-semibold">
              <UserPlus size={20} />
              {messages.formTitle}
            </div> */}

              <DynamicForm
                fields={campaign.registration_form.fields}
                values={formValues}
                errors={formErrors}
                language={lang}
                onChange={handleFieldChange}
                onBlur={handleFieldBlur}
              />
            </div>

            {/* Error Summary */}
            {Object.keys(formErrors).some((key) => formErrors[key]) && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <div className="flex items-center gap-2 text-red-800">
                  <AlertCircle size={16} />
                  <span className="text-sm font-medium">
                    {messages.errorsSummary}
                  </span>
                </div>
                <ul className="mt-2 text-sm text-red-700">
                  {Object.entries(formErrors)
                    .filter(([, error]) => error)
                    .map(([fieldName, error]) => {
                      const field = campaign.registration_form.fields.find(
                        (f) => f.name === fieldName,
                      );
                      const fieldLabel =
                        field?.label[lang as "th" | "en"] ||
                        field?.label.th ||
                        fieldName;
                      return (
                        <li key={fieldName} className="mt-1">
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
              disabled={isSubmitDisabled}
              className="w-full rounded-lg px-4 py-3 font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              style={{
                backgroundColor: isSubmitDisabled ? "#9CA3AF" : primaryColor,
              }}
            >
              {registerMutation.isPending
                ? messages.submitting
                : messages.submit}
            </button>
          </form>
        </div>
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
