import React from "react";

interface DonutChartProps {
  value: number;
  color?: string;
  bg?: string;
}

const DonutChart: React.FC<DonutChartProps> = ({
  value,
  color = "#f59e0b",
  bg = "#ffedd5"
}) => {
  const v = Math.min(100, Math.max(0, Math.round(value || 0)));
  const radius = 26, stroke = 5, cx = 36, cy = 36, circ = 2 * Math.PI * radius;

  return (
    <div className="relative">
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        className="flex-shrink-0 transform -rotate-90"
      >
        <defs>
          <linearGradient
            id={`donutGradient-${color.replace("#", "")}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.7" />
          </linearGradient>
          <filter
            id={`shadow-${color.replace("#", "")}`}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="2"
              floodColor={color}
              floodOpacity="0.3"
            />
          </filter>
        </defs>

        {/* Background circle */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke={bg}
          strokeWidth={stroke}
          fill="none"
          opacity="0.3"
        />

        {/* Progress circle with animation */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke={`url(#donutGradient-${color.replace("#", "")})`}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={`${(v / 100) * circ} ${circ}`}
          strokeLinecap="round"
          filter={`url(#shadow-${color.replace("#", "")})`}
          className="transition-all duration-1000 ease-out"
        />

        {/* End dot for visual appeal */}
        {v > 0 && (
          <circle
            cx={cx + radius * Math.cos((v / 100) * 2 * Math.PI)}
            cy={cy + radius * Math.sin((v / 100) * 2 * Math.PI)}
            r="3"
            fill={color}
            className="drop-shadow-sm"
          />
        )}
      </svg>

      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-gray-900">{v}%</span>
      </div>
    </div>
  );
};

export default DonutChart;