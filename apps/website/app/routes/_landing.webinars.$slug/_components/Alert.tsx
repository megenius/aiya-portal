import React from 'react';
import { X, AlertCircle, Info, CheckCircle, AlertTriangle } from 'lucide-react';

type AlertVariant = 'success' | 'danger' | 'warning' | 'info' | 'neutral';

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  message: string;
  isDismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

const variantStyles = {
  success: {
    wrapper: 'bg-teal-50 border-teal-200',
    icon: 'text-teal-500',
    title: 'text-teal-800',
    text: 'text-teal-700'
  },
  danger: {
    wrapper: 'bg-red-50 border-red-200',
    icon: 'text-red-500',
    title: 'text-red-800',
    text: 'text-red-700'
  },
  warning: {
    wrapper: 'bg-yellow-50 border-yellow-200',
    icon: 'text-yellow-500',
    title: 'text-yellow-800',
    text: 'text-yellow-700'
  },
  info: {
    wrapper: 'bg-blue-50 border-blue-200',
    icon: 'text-blue-500',
    title: 'text-blue-800',
    text: 'text-blue-700'
  },
  neutral: {
    wrapper: 'bg-gray-50 border-gray-200',
    icon: 'text-gray-500',
    title: 'text-gray-800',
    text: 'text-gray-700'
  }
};

const variantIcons = {
  success: CheckCircle,
  danger: AlertCircle,
  warning: AlertTriangle,
  info: Info,
  neutral: Info
};

const Alert = ({ 
  variant = 'neutral',
  title,
  message,
  isDismissible = false,
  onDismiss,
  className = ''
}: AlertProps) => {
  const styles = variantStyles[variant];
  const Icon = variantIcons[variant];

  return (
    <div className={`relative flex gap-4 p-4 border rounded-lg ${styles.wrapper} ${className}`}>
      <div className="flex-shrink-0">
        <Icon className={`w-5 h-5 mt-1 ${styles.icon}`} />
      </div>

      <div className="flex-1">
        {title && (
          <h3 className={`font-semibold mb-1 ${styles.title}`}>
            {title}
          </h3>
        )}
        <div className={`text-sm ${styles.text}`}>
          {message}
        </div>
      </div>

      {isDismissible && (
        <button
          type="button"
          className={`absolute top-4 right-4 inline-flex flex-shrink-0 justify-center items-center h-5 w-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.text} hover:opacity-75 focus:ring-offset-white focus:ring-${variant}-500`}
          onClick={onDismiss}
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Alert;