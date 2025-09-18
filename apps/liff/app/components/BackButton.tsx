import React from "react";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  onClick: () => void;
  variant?: 'header' | 'overlay' | 'inline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
  text?: string;
  disabled?: boolean;
}

const BackButton: React.FC<BackButtonProps> = ({
  onClick,
  variant = 'header',
  size = 'md',
  className = '',
  showText = false,
  text,
  disabled = false,
}) => {
  // Size configurations
  const sizeConfig = {
    sm: { icon: 16, button: 'h-8 w-8' },
    md: { icon: 20, button: 'h-10 w-10' },
    lg: { icon: 24, button: 'h-12 w-12' },
  };

  // Variant configurations
  const variantConfig = {
    header: {
      base: 'mr-4',
      button: '',
      icon: 'h-6 w-6',
      text: 'text-gray-900',
    },
    overlay: {
      base: 'absolute left-4 top-4 z-50',
      button: 'bg-transparent text-white focus:outline-none',
      icon: 'h-6 w-6',
      text: 'text-white',
    },
    inline: {
      base: 'mr-2',
      button: '',
      icon: 'h-6 w-6',
      text: 'text-gray-700',
    },
  };

  const config = variantConfig[variant];
  const iconSize = variant === 'header' ? undefined : sizeConfig[size].icon;

  if (showText && text) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`flex items-center gap-2 ${config.base} ${config.button} ${config.text} ${className} ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {variant === 'header' ? (
          <ArrowLeft className={config.icon} />
        ) : (
          <ArrowLeft size={iconSize} />
        )}
        {text && <span className="text-lg font-medium">{text}</span>}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${config.base} ${config.button} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {variant === 'header' ? (
        <ArrowLeft className={config.icon} />
      ) : (
        <ArrowLeft size={iconSize} />
      )}
    </button>
  );
};

export default BackButton;