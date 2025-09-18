import {
  useOutletContext,
  useParams,
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { useState } from "react";
import { PageLiff } from "~/types/page";
import { useCampaign, useConsentPDPA } from "~/hooks/campaigns/useCampaigns";
import { useLineProfile } from "~/contexts/LineLiffContext";
import ErrorView from "~/components/ErrorView";
import { ArrowLeft, FileText, Shield } from "lucide-react";

const Route = () => {
  const { page, lang } = useOutletContext<{ page: PageLiff; lang: string }>();
  const { liffId, slug, campaignId } = useParams();
  const navigate = useNavigate();
  const [hasAgreed, setHasAgreed] = useState(false);

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

  const consentMutation = useConsentPDPA();

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
          <div className="space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
            <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
            <div className="h-4 w-4/6 animate-pulse rounded bg-gray-200"></div>
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

  // Redirect if already consented
  if (campaign.user_stats.has_agreed_pdpa) {
    if (campaign.user_stats.is_registered) {
      navigate(`/a/${liffId}/${slug}/campaign/${campaignId}/dashboard`, { replace: true });
    } else {
      navigate(`/a/${liffId}/${slug}/campaign/${campaignId}/register`, { replace: true });
    }
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasAgreed) {
      alert(lang === 'th' ? 'กรุณายอมรับเงื่อนไขการใช้งาน' : 'Please agree to the terms and conditions');
      return;
    }

    try {
      await consentMutation.mutateAsync({
        campaignId: campaignId!,
        data: {
          has_agreed_pdpa: true,
          pdpa_agreed_at: new Date().toISOString(),
        },
      });

      // Navigate to registration form
      navigate(`/a/${liffId}/${slug}/campaign/${campaignId}/register`);
    } catch (error) {
      console.error('Failed to consent PDPA:', error);
      alert(lang === 'th' ? 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง' : 'An error occurred. Please try again.');
    }
  };

  const pdpaContent = {
    th: {
      title: 'ข้อตกลงการใช้ข้อมูลส่วนบุคคล',
      subtitle: 'กรุณาอ่านและยอมรับเงื่อนไขก่อนเข้าร่วมแคมเปญ',
      content: `เพื่อให้การดำเนินการแคมเปญเป็นไปอย่างโปร่งใสและถูกต้องตามกฎหมาย เราขอเก็บรวบรวมข้อมูลส่วนบุคคลของท่านดังต่อไปนี้:

1. ข้อมูลส่วนบุคคล
   - ชื่อ นามสกุล
   - หมายเลขโทรศัพท์
   - ข้อมูลโปรไฟล์จาก LINE

2. วัตถุประสงค์ในการใช้ข้อมูล
   - เพื่อการลงทะเบียนเข้าร่วมแคมเปญ
   - เพื่อการติดตามความคืบหน้าของภารกิจ
   - เพื่อการติดต่อในกรณีได้รับรางวัล

3. การเก็บรักษาข้อมูล
   - ข้อมูลจะถูกเก็บรักษาไว้เป็นระยะเวลา 1 ปี หลังสิ้นสุดแคมเปญ
   - ข้อมูลจะถูกป้องกันด้วยมาตรการความปลอดภัยที่เหมาะสม

4. สิทธิของเจ้าของข้อมูล
   - ท่านมีสิทธิในการขอเข้าถึง แก้ไข หรือลบข้อมูลส่วนบุคคล
   - ท่านสามารถถอนความยินยอมได้ตลอดเวลา

หากท่านมีคำถามเกี่ยวกับการใช้ข้อมูลส่วนบุคคล กรุณาติดต่อเจ้าหน้าที่ของเรา`,
      agreeText: 'ข้าพเจ้ายอมรับเงื่อนไขการใช้ข้อมูลส่วนบุคคล',
      continueButton: 'ยอมรับและดำเนินการต่อ',
    },
    en: {
      title: 'Personal Data Protection Agreement',
      subtitle: 'Please read and accept the terms before joining the campaign',
      content: `To ensure transparent and legal campaign operations, we collect the following personal data:

1. Personal Information
   - First name, Last name
   - Phone number
   - LINE profile information

2. Purpose of Data Usage
   - Campaign registration
   - Mission progress tracking
   - Communication for prize awards

3. Data Storage
   - Data will be stored for 1 year after campaign ends
   - Data is protected with appropriate security measures

4. Data Subject Rights
   - You have the right to access, modify, or delete your personal data
   - You can withdraw consent at any time

If you have questions about personal data usage, please contact our staff.`,
      agreeText: 'I agree to the personal data protection terms',
      continueButton: 'Accept and Continue',
    },
  };

  const content = pdpaContent[lang as 'th' | 'en'] || pdpaContent.th;

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
            <Shield size={20} style={{ color: primaryColor }} />
            <h1 className="text-lg font-semibold text-gray-900">
              {content.title}
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
            <p className="text-sm text-blue-700">{content.subtitle}</p>
          </div>

          {/* PDPA Content */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <FileText size={20} />
              {content.title}
            </div>

            <div className="max-h-96 overflow-y-auto rounded-lg border border-gray-200 p-4">
              <div className="prose prose-sm max-w-none text-gray-700">
                <div className="whitespace-pre-line">{content.content}</div>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="pdpa-consent"
                checked={hasAgreed}
                onChange={(e) => setHasAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
              <label
                htmlFor="pdpa-consent"
                className="cursor-pointer text-sm text-gray-700"
              >
                {content.agreeText}
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!hasAgreed || consentMutation.isPending}
            className="w-full rounded-lg py-3 px-4 font-semibold text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: !hasAgreed || consentMutation.isPending ? '#9CA3AF' : primaryColor,
            }}
          >
            {consentMutation.isPending
              ? (lang === 'th' ? 'กำลังบันทึก...' : 'Saving...')
              : content.continueButton}
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