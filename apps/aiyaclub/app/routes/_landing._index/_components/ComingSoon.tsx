
interface ComingSoonProps {
  message?: string;
}

export default function ComingSoon({ message = "Coming Soon" }: ComingSoonProps) {
  return (
    <div className="py-12 flex flex-col items-center justify-center">
      <div className="rounded-full bg-gray-100 p-6 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <h3 className="text-xl font-medium text-gray-700 mb-2">{message}</h3>
      <p className="text-gray-500 text-center max-w-md">
        We're working on adding new vouchers to this category. Please check back later!
      </p>
    </div>
  );
}
