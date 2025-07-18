import React from 'react';

interface PointButtonProps {
  points: number | string;
  primaryColor: string;
  onClick: () => void;
  showPoint?: boolean;
}

const PointButton: React.FC<PointButtonProps> = ({ points, primaryColor, onClick, showPoint = true }) => {
  return (
    showPoint && <button
      onClick={onClick}
      className="flex items-center justify-center rounded-full bg-blue-50 border-2 text-sm gap-1"
      style={{ borderColor: primaryColor }}
    >
      <div 
        className="px-2 py-1 flex items-center gap-1 rounded-full border text-white" 
        style={{ backgroundColor: primaryColor }}
      >
        <h4>Point</h4>
      </div>
      <div className="flex items-center gap-1 pe-2" style={{ color: primaryColor }}>
        <h4 className="font-medium">{points}</h4>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
        </span>
      </div>
    </button>
  );
};

export default PointButton;
