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
    <div className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 transform animate-toast">
      <div className="flex items-center gap-2 rounded-full bg-gray-900 px-4 py-3 text-white shadow-lg">
        <Check className="h-5 w-5" />
        <span className="text-sm font-medium">{message}</span>
      </div>

      <style>{`
        @keyframes toast-in {
          from {
            transform: translateY(100%);
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
