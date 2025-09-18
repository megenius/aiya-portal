import {
  useOutletContext,
  useParams,
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { useState } from "react";
import { PageLiff } from "~/types/page";
import { useMission, useSubmitMission } from "~/hooks/campaigns";
import { useLineProfile } from "~/contexts/LineLiffContext";
import ErrorView from "~/components/ErrorView";
import DynamicForm from "~/components/DynamicForm";
import { ArrowLeft, Target, Star, Clock, CheckCircle, AlertCircle, Trophy } from "lucide-react";

const Route = () => {
  const { page, lang } = useOutletContext<{ page: PageLiff; lang: string }>();
  const { liffId, slug, campaignId, missionId } = useParams();
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
    data: mission,
    isLoading: isMissionLoading,
    error: missionError,
  } = useMission({ missionId: missionId || "", enabled: !!missionId && !isProfileLoading && !!profile?.userId });

  const submitMutation = useSubmitMission();

  const primaryColor = page.bg_color || "#1DB446";

  // Handle loading states
  if (isProfileLoading || isMissionLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 animate-pulse rounded bg-gray-200"></div>
            <div className="h-6 w-40 animate-pulse rounded bg-gray-200"></div>
          </div>
        </div>
        <div className="space-y-6 p-4">
          <div className="h-32 w-full animate-pulse rounded-lg bg-gray-200"></div>
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
  if (!mission.user_progress.is_available && !mission.user_progress.has_started && !mission.user_progress.is_completed) {
    const language =
      typeof navigator !== "undefined" && navigator.language?.startsWith("en")
        ? ("en" as const)
        : ("th" as const);
    return (
      <ErrorView
        status={403}
        message={lang === 'th' ? 'ภารกิจนี้ยังไม่เปิดให้ทำ' : 'This mission is not available yet'}
        language={language}
      />
    );
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

    const field = mission.submission_form?.fields.find(f => f.name === fieldName);
    if (field) {
      const error = validateField(fieldName, formValues[fieldName] || '', field.required);
      setFormErrors(prev => ({ ...prev, [fieldName]: error }));
    }
  };

  const validateForm = (): boolean => {
    if (!mission.submission_form?.fields) return true;

    const errors: Record<string, string> = {};
    let isValid = true;

    mission.submission_form.fields.forEach(field => {
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

    if (!mission.submission_form?.fields) return;

    // Mark all fields as touched
    const allFields = mission.submission_form.fields.reduce(
      (acc, field) => ({ ...acc, [field.name]: true }),
      {}
    );
    setTouchedFields(allFields);

    if (!validateForm()) {
      return;
    }

    try {
      await submitMutation.mutateAsync({
        missionId: missionId!,
        data: {
          submission_data: formValues,
        },
      });

      // Navigate back to dashboard
      navigate(`/a/${liffId}/${slug}/campaign/${campaignId}/dashboard`);
    } catch (error) {
      console.error('Failed to submit mission:', error);
      alert(lang === 'th' ? 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง' : 'An error occurred. Please try again.');
    }
  };

  const pageTitle = lang === 'th' ? 'รายละเอียดภารกิจ' : 'Mission Details';

  // Mission status display
  const getMissionStatusDisplay = () => {
    if (mission.user_progress.is_completed) {
      return {
        icon: <CheckCircle size={24} className="text-green-500" />,
        text: lang === 'th' ? 'เสร็จสิ้นแล้ว' : 'Completed',
        bgColor: 'bg-green-50',
        textColor: 'text-green-700',
        borderColor: 'border-green-200',
      };
    }
    if (mission.user_progress.has_started) {
      return {
        icon: <Clock size={24} className="text-yellow-500" />,
        text: lang === 'th' ? 'กำลังดำเนินการ' : 'In Progress',
        bgColor: 'bg-yellow-50',
        textColor: 'text-yellow-700',
        borderColor: 'border-yellow-200',
      };
    }
    return {
      icon: <Target size={24} className="text-blue-500" />,
      text: lang === 'th' ? 'พร้อมเริ่ม' : 'Ready to Start',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-200',
    };
  };

  const statusDisplay = getMissionStatusDisplay();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(`/a/${liffId}/${slug}/campaign/${campaignId}/dashboard`)}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            <Target size={20} style={{ color: primaryColor }} />
            <h1 className="text-lg font-semibold text-gray-900">
              {pageTitle}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 p-4">
        {/* Mission Info Card */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: primaryColor }}
              >
                <Target size={24} />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900">{mission.title}</h2>
              <p className="mt-1 text-gray-600">{mission.description}</p>

              {/* Mission Metadata */}
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Star size={16} />
                  {mission.reward_credits} {lang === 'th' ? 'เครดิต' : 'credits'}
                </div>
                <div className="flex items-center gap-1">
                  <Trophy size={16} />
                  {mission.mission_type === 'task' ? (lang === 'th' ? 'ภารกิจ' : 'Task') :
                   mission.mission_type === 'survey' ? (lang === 'th' ? 'แบบสำรวจ' : 'Survey') :
                   mission.mission_type === 'quiz' ? (lang === 'th' ? 'แบบทดสอบ' : 'Quiz') : mission.mission_type}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Status */}
        <div className={`rounded-lg border p-4 ${statusDisplay.bgColor} ${statusDisplay.borderColor}`}>
          <div className="flex items-center gap-3">
            {statusDisplay.icon}
            <div>
              <div className={`font-semibold ${statusDisplay.textColor}`}>
                {statusDisplay.text}
              </div>
              {mission.user_progress.is_completed && mission.user_progress.submitted_at && (
                <div className="text-sm text-gray-600">
                  {lang === 'th' ? 'ส่งเมื่อ:' : 'Submitted on:'} {new Date(mission.user_progress.submitted_at).toLocaleDateString(
                    lang === 'th' ? 'th-TH' : 'en-US'
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mission Instructions */}
        {mission.instructions && (
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              {lang === 'th' ? 'คำแนะนำ' : 'Instructions'}
            </h3>
            <div className="mt-2 whitespace-pre-wrap text-gray-600">
              {mission.instructions}
            </div>
          </div>
        )}

        {/* Submission Form */}
        {!mission.user_progress.is_completed && mission.submission_form?.fields && (
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Target size={20} />
                {lang === 'th' ? 'ส่งผลงาน' : 'Submit Your Work'}
              </div>

              <DynamicForm
                fields={mission.submission_form.fields}
                values={formValues}
                errors={formErrors}
                language={lang}
                onChange={handleFieldChange}
                onBlur={handleFieldBlur}
              />

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
                        const field = mission.submission_form?.fields.find(f => f.name === fieldName);
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
                disabled={submitMutation.isPending}
                className="w-full rounded-lg py-3 px-4 font-semibold text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: submitMutation.isPending ? '#9CA3AF' : primaryColor,
                }}
              >
                {submitMutation.isPending
                  ? (lang === 'th' ? 'กำลังส่ง...' : 'Submitting...')
                  : (lang === 'th' ? 'ส่งผลงาน' : 'Submit Work')}
              </button>
            </form>
          </div>
        )}

        {/* Completed Mission Info */}
        {mission.user_progress.is_completed && (
          <div className="rounded-lg bg-green-50 border border-green-200 p-6">
            <div className="flex items-center gap-3">
              <CheckCircle size={24} className="text-green-500" />
              <div>
                <div className="font-semibold text-green-800">
                  {lang === 'th' ? 'ภารกิจเสร็จสิ้น!' : 'Mission Completed!'}
                </div>
                <div className="text-sm text-green-700">
                  {lang === 'th' ? `คุณได้รับ ${mission.reward_credits} เครดิต` : `You earned ${mission.reward_credits} credits`}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Back to Dashboard Button */}
        <button
          onClick={() => navigate(`/a/${liffId}/${slug}/campaign/${campaignId}/dashboard`)}
          className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
        >
          {lang === 'th' ? 'กลับสู่แดชบอร์ด' : 'Back to Dashboard'}
        </button>
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