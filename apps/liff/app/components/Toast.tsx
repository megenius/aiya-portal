import React, { useEffect } from "react";
import { Check } from "lucide-react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({
  message,
  isVisible,
  onClose,
  duration = 2000,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-20 z-50 flex justify-center pointer-events-none">
      <div className="animate-toast pointer-events-auto">
        <div className="flex items-center gap-2 rounded-full bg-gray-900 px-4 py-3 text-white shadow-lg">
          <Check className="h-5 w-5" />
          <span className="text-sm font-medium">{message}</span>
        </div>
      </div>

      <style>{`
        @keyframes toast-in {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-toast {
          animation: toast-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Toast;
