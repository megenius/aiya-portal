import React, { useState, useRef } from "react";

interface LineChartProps {
  series: { date: string; count: number }[];
  color?: string;
}

const LineChart: React.FC<LineChartProps> = ({ series, color = "#2563eb" }) => {
  const [hoveredPoint, setHoveredPoint] = useState<{
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
  const xs = series.map((_, i) => i);
  const ys = series.map((d) => d.count);
  const maxY = Math.max(1, ...ys);
  const minY = Math.min(0, ...ys);

  // Determine if all points are within the same calendar day
  const firstDate = new Date(series[0]?.date || Date.now());
  const lastDate = new Date(series[series.length - 1]?.date || Date.now());
  const isSingleDay =
    firstDate.getFullYear() === lastDate.getFullYear() &&
    firstDate.getMonth() === lastDate.getMonth() &&
    firstDate.getDate() === lastDate.getDate();

  const scaleX = (i: number) =>
    padding + (i / Math.max(1, xs.length - 1)) * (width - padding * 2);
  const scaleY = (v: number) =>
    height - padding - ((v - minY) / (maxY - minY)) * (height - padding * 2);

  // Create path for line
  const d = series
    .map((p, i) => `${i === 0 ? "M" : "L"} ${scaleX(i)} ${scaleY(p.count)}`)
    .join(" ");

  // Create gradient area fill
  const areaPath = `${d} L ${scaleX(series.length - 1)} ${height - padding} L ${padding} ${height - padding} Z`;

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;

    const rect = svgRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Find closest data point
    let closestIndex = 0;
    let closestDistance = Infinity;

    series.forEach((point, i) => {
      const pointX = scaleX(i);
      const pointY = scaleY(point.count);
      const distance = Math.sqrt(Math.pow(mouseX - pointX, 2) + Math.pow(mouseY - pointY, 2));

      if (distance < closestDistance && distance < 20) { // 20px hover radius
        closestDistance = distance;
        closestIndex = i;
      }
    });

    if (closestDistance < 20) {
      setHoveredPoint({
        index: closestIndex,
        x: scaleX(closestIndex),
        y: scaleY(series[closestIndex].count),
        data: series[closestIndex]
      });
    } else {
      setHoveredPoint(null);
    }
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    if (isSingleDay) {
      return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="relative">
      <svg
        ref={svgRef}
        width={width}
        height={height}
        className="w-full cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background grid */}
        <defs>
          <linearGradient
            id={`gradient-${color.replace("#", "")}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.05" />
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

        {/* Area fill */}
        <path d={areaPath} fill={`url(#gradient-${color.replace("#", "")})`} />

        {/* Line */}
        <path
          d={d}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {series.map((p, i) => (
          <circle
            key={i}
            cx={scaleX(i)}
            cy={scaleY(p.count)}
            r={hoveredPoint?.index === i ? "5" : "3"}
            fill={color}
            stroke="white"
            strokeWidth="2"
            className="transition-all duration-150"
          />
        ))}

        {/* Hover line */}
        {hoveredPoint && (
          <line
            x1={hoveredPoint.x}
            y1={padding}
            x2={hoveredPoint.x}
            y2={height - padding}
            stroke={color}
            strokeWidth="1"
            strokeDasharray="4,4"
            opacity="0.6"
          />
        )}
      </svg>

      {/* Hover tooltip */}
      {hoveredPoint && (
        <div
          className="absolute z-10 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-full"
          style={{
            left: hoveredPoint.x,
            top: hoveredPoint.y - 8
          }}
        >
          <div className="font-medium">{formatDate(hoveredPoint.data.date)}</div>
          <div className="text-gray-300">{hoveredPoint.data.count.toLocaleString()} items</div>
          {/* Tooltip arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      )}

      {/* Min/Max labels */}
      <div className="absolute top-1 right-2 text-xs text-gray-400">
        Max: {maxY}
      </div>
      <div className="absolute bottom-1 right-2 text-xs text-gray-400">
        Min: {minY}
      </div>
    </div>
  );
};

export default LineChart;