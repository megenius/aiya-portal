type Lang = "th" | "en";

interface ErrorViewProps {
  status?: number;
  title?: string;
  message?: string;
  language?: Lang; // default: th
  homeHref?: string; // if not provided, will use history.back()
  onRetry?: () => void;
}

const messages = {
  th: {
    backHome: "กลับหน้าแรก",
    retry: "ลองใหม่",
    defaultTitle: "เกิดข้อผิดพลาด",
    defaultMessage: "ขออภัย ระบบเกิดข้อผิดพลาดที่ไม่คาดคิด",
    notFoundTitle: "ไม่พบหน้าที่ต้องการ",
    notFoundMessage:
      "ไม่พบหน้าที่คุณกำลังค้นหา หรืออาจถูกย้ายไปแล้ว",
  },
  en: {
    backHome: "Back to Home",
    retry: "Try again",
    defaultTitle: "Something went wrong",
    defaultMessage: "Sorry, an unexpected error occurred.",
    notFoundTitle: "Page not found",
    notFoundMessage:
      "The page you’re looking for doesn’t exist or has been moved.",
  },
} as const;

export default function ErrorView({
  status = 500,
  title,
  message,
  language = "th",
  homeHref,
  onRetry,
}: ErrorViewProps) {
  const dict = messages[language] ?? messages.th;

  const is404 = status === 404;
  const resolvedTitle =
    title ?? (is404 ? dict.notFoundTitle : dict.defaultTitle);
  const resolvedMessage =
    message ?? (is404 ? dict.notFoundMessage : dict.defaultMessage);

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto flex max-w-md flex-col items-center justify-center px-6 py-16 text-center">
        <div className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
          {status}
        </div>
        <h1 className="mt-4 text-2xl font-semibold text-gray-900">
          {resolvedTitle}
        </h1>
        <p className="mt-2 text-gray-600">{resolvedMessage}</p>
        <div className="mt-6 flex items-center gap-3">
          {homeHref ? (
            <a
              href={homeHref}
              className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              {dict.backHome}
            </a>
          ) : (
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  if (window.history.length > 1) {
                    window.history.back();
                  } else {
                    window.location.assign("/");
                  }
                }
              }}
              className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              {dict.backHome}
            </button>
          )}
          <button
            onClick={() =>
              onRetry
                ? onRetry()
                : typeof window !== "undefined"
                  ? window.location.reload()
                  : null
            }
            className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            {dict.retry}
          </button>
        </div>
      </div>
    </div>
  );
}
