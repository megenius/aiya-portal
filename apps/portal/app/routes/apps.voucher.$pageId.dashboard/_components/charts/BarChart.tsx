import React, { useState, useRef } from "react";

interface BarChartProps {
  series: { date: string; count: number }[];
  color?: string;
}

const BarChart: React.FC<BarChartProps> = ({ series, color = "#7c3aed" }) => {
  const [hoveredBar, setHoveredBar] = useState<{
    index: number;
    x: number;
    y: number;
    data: { date: string; count: number };
  } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  if (!series || series.length === 0) {
    return (
      <div className="flex items-center justify-center h-20 text-xs text-gray-400 bg-gray-50 rounded border border-dashed border-gray-300">
        No data available
      </div>
    );
  }

  const width = 320,
    height = 100,
    padding = 20;
  const barGap = 3;
  const maxY = Math.max(1, ...series.map((d) => d.count));
  const barWidth = Math.max(
    8,
    (width - padding * 2 - (series.length - 1) * barGap) / series.length
  );

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;

    const rect = svgRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    // Find which bar is being hovered
    let hoveredIndex = -1;

    series.forEach((_, i) => {
      const barX = padding + i * (barWidth + barGap);
      if (mouseX >= barX && mouseX <= barX + barWidth) {
        hoveredIndex = i;
      }
    });

    if (hoveredIndex >= 0) {
      const barX = padding + hoveredIndex * (barWidth + barGap);
      const barH = Math.max(2, (series[hoveredIndex].count / maxY) * (height - padding * 2));
      const barY = height - padding - barH;

      setHoveredBar({
        index: hoveredIndex,
        x: barX + barWidth / 2,
        y: barY,
        data: series[hoveredIndex]
      });
    } else {
      setHoveredBar(null);
    }
  };

  const handleMouseLeave = () => {
    setHoveredBar(null);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="relative">
      <svg
        ref={svgRef}
        width={width}
        height={height}
        className="w-full cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <defs>
          <linearGradient
            id={`barGradient-${color.replace("#", "")}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor={color} stopOpacity="0.9" />
            <stop offset="100%" stopColor={color} stopOpacity="0.6" />
          </linearGradient>
          <linearGradient
            id={`barGradientHover-${color.replace("#", "")}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, idx) => {
          const y = height - padding - ratio * (height - padding * 2);
          return (
            <line
              key={idx}
              x1={padding}
              y1={y}
              x2={width - padding}
              y2={y}
              stroke="#f3f4f6"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
          );
        })}

        {/* Bars */}
        {series.map((d, i) => {
          const x = padding + i * (barWidth + barGap);
          const h = Math.max(2, (d.count / maxY) * (height - padding * 2));
          const y = height - padding - h;
          const isHovered = hoveredBar?.index === i;

          return (
            <g key={i}>
              {/* Bar shadow */}
              <rect
                x={x + 1}
                y={y + 1}
                width={barWidth}
                height={h}
                fill="rgba(0,0,0,0.1)"
                rx={2}
              />

              {/* Main bar */}
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={h}
                fill={isHovered
                  ? `url(#barGradientHover-${color.replace("#", "")})`
                  : `url(#barGradient-${color.replace("#", "")})`
                }
                rx={2}
                stroke={color}
                strokeWidth={isHovered ? "2" : "1"}
                className="transition-all duration-150"
              />

              {/* Value label on top of bar if there's space */}
              {h > 15 && (
                <text
                  x={x + barWidth / 2}
                  y={y - 3}
                  textAnchor="middle"
                  className={`text-xs font-medium transition-all duration-150 ${
                    isHovered ? "fill-gray-800" : "fill-gray-600"
                  }`}
                >
                  {d.count}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Hover tooltip */}
      {hoveredBar && (
        <div
          className="absolute z-10 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-full"
          style={{
            left: hoveredBar.x,
            top: hoveredBar.y - 8
          }}
        >
          <div className="font-medium">{formatDate(hoveredBar.data.date)}</div>
          <div className="text-gray-300">{hoveredBar.data.count.toLocaleString()} collections</div>
          {/* Tooltip arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      )}

      {/* Max value label */}
      <div className="absolute top-1 right-2 text-xs text-gray-400">
        Peak: {maxY}
      </div>
    </div>
  );
};

export default BarChart;