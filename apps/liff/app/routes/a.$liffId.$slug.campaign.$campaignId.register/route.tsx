import {
  useOutletContext,
  useParams,
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { useState } from "react";
import { PageLiff } from "~/types/page";
import { useCampaign, useRegisterCampaign } from "~/hooks/campaigns/useCampaigns";
import { useLineProfile } from "~/contexts/LineLiffContext";
import ErrorView from "~/components/ErrorView";
import DynamicForm from "~/components/DynamicForm";
import { ArrowLeft, UserPlus, AlertCircle } from "lucide-react";

const Route = () => {
  const { page, lang } = useOutletContext<{ page: PageLiff; lang: string }>();
  const { liffId, slug, campaignId } = useParams();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});

  const {
    profile,
    isLoading: isProfileLoading,
    error: profileError,
  } = useLineProfile();

  const {
    data: campaign,
    isLoading: isCampaignLoading,
    error: campaignError,
  } = useCampaign(campaignId || "", !!campaignId && !isProfileLoading && !!profile?.userId);

  const registerMutation = useRegisterCampaign();

  const primaryColor = page.bg_color || "#1DB446";

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

  // Redirect if not consented to PDPA
  if (!campaign.user_stats.has_agreed_pdpa) {
    navigate(`/a/${liffId}/${slug}/campaign/${campaignId}/consent`, { replace: true });
    return null;
  }

  // Redirect if already registered
  if (campaign.user_stats.is_registered) {
    navigate(`/a/${liffId}/${slug}/campaign/${campaignId}/dashboard`, { replace: true });
    return null;
  }

  const validateField = (fieldName: string, value: string, required: boolean): string => {
    if (required && !value.trim()) {
      return lang === 'th' ? 'กรุณากรอกข้อมูล' : 'This field is required';
    }

    // Additional validation rules
    if (fieldName === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return lang === 'th' ? 'รูปแบบอีเมลไม่ถูกต้อง' : 'Invalid email format';
      }
    }

    if (fieldName === 'phone' && value) {
      const phoneRegex = /^[0-9]{9,10}$/;
      if (!phoneRegex.test(value.replace(/-/g, ''))) {
        return lang === 'th' ? 'รูปแบบเบอร์โทรไม่ถูกต้อง' : 'Invalid phone number format';
      }
    }

    return '';
  };

  const handleFieldChange = (fieldName: string, value: string) => {
    setFormValues(prev => ({ ...prev, [fieldName]: value }));

    // Clear error when user starts typing
    if (formErrors[fieldName]) {
      setFormErrors(prev => ({ ...prev, [fieldName]: '' }));
    }
  };

  const handleFieldBlur = (fieldName: string) => {
    setTouchedFields(prev => ({ ...prev, [fieldName]: true }));

    const field = campaign.registration_form.fields.find(f => f.name === fieldName);
    if (field) {
      const error = validateField(fieldName, formValues[fieldName] || '', field.required);
      setFormErrors(prev => ({ ...prev, [fieldName]: error }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    let isValid = true;

    campaign.registration_form.fields.forEach(field => {
      const value = formValues[field.name] || '';
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

    // Mark all fields as touched
    const allFields = campaign.registration_form.fields.reduce(
      (acc, field) => ({ ...acc, [field.name]: true }),
      {}
    );
    setTouchedFields(allFields);

    if (!validateForm()) {
      return;
    }

    try {
      await registerMutation.mutateAsync({
        campaignId: campaignId!,
        data: {
          registration_data: formValues,
        },
      });

      // Navigate to campaign dashboard
      navigate(`/a/${liffId}/${slug}/campaign/${campaignId}/dashboard`);
    } catch (error) {
      console.error('Failed to register:', error);
      alert(lang === 'th' ? 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง' : 'An error occurred. Please try again.');
    }
  };

  const pageTitle = lang === 'th' ? 'ลงทะเบียนเข้าร่วมแคมเปญ' : 'Campaign Registration';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            <UserPlus size={20} style={{ color: primaryColor }} />
            <h1 className="text-lg font-semibold text-gray-900">
              {pageTitle}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campaign Info */}
          <div className="rounded-lg bg-blue-50 p-4">
            <h2 className="font-semibold text-blue-900">{campaign.title}</h2>
            <p className="text-sm text-blue-700">
              {lang === 'th'
                ? 'กรุณากรอกข้อมูลเพื่อลงทะเบียนเข้าร่วมแคมเปญ'
                : 'Please fill in the information to register for the campaign'}
            </p>
          </div>

          {/* Registration Form */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <UserPlus size={20} />
              {lang === 'th' ? 'ข้อมูลสำหรับลงทะเบียน' : 'Registration Information'}
            </div>

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
          {Object.keys(formErrors).some(key => formErrors[key]) && (
            <div className="rounded-lg bg-red-50 border border-red-200 p-4">
              <div className="flex items-center gap-2 text-red-800">
                <AlertCircle size={16} />
                <span className="text-sm font-medium">
                  {lang === 'th' ? 'กรุณาแก้ไขข้อผิดพลาดต่อไปนี้:' : 'Please fix the following errors:'}
                </span>
              </div>
              <ul className="mt-2 text-sm text-red-700">
                {Object.entries(formErrors)
                  .filter(([_, error]) => error)
                  .map(([fieldName, error]) => {
                    const field = campaign.registration_form.fields.find(f => f.name === fieldName);
                    const fieldLabel = field?.label[lang as 'th' | 'en'] || field?.label.th || fieldName;
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
            disabled={registerMutation.isPending}
            className="w-full rounded-lg py-3 px-4 font-semibold text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: registerMutation.isPending ? '#9CA3AF' : primaryColor,
            }}
          >
            {registerMutation.isPending
              ? (lang === 'th' ? 'กำลังลงทะเบียน...' : 'Registering...')
              : (lang === 'th' ? 'ลงทะเบียน' : 'Register')}
          </button>
        </form>
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