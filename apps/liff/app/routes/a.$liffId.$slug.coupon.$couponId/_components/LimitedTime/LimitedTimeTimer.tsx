import React from "react";

interface LimitedTimeTimerProps {
  /**
   * Time string in format "MM:SS" or "HH:MM:SS"
   */
  time: string;
}

/**
 * Displays a digital timer in card style (red background, white cards, big numbers)
 */
const LimitedTimeTimer: React.FC<LimitedTimeTimerProps> = ({ time }) => {
  // Split time string into array, keep colon for rendering
  const chars = time.split("").map((c, i) => ({ key: i, char: c }));

  return (
    <div
      className="flex justify-center items-center w-full gap-[2vw] sm:gap-2"
    >
      {chars.map(({ char, key }) =>
        char === ":" ? (
          <span
            key={key}
            className="text-white font-bold text-4xl sm:text-5xl mx-1 leading-none select-none"
          >
            :
          </span>
        ) : (
          <span
            key={key}
            className="bg-white rounded-md flex justify-center items-center font-bold text-gray-900 shadow-md select-none mx-[0.5vw] text-[10vw] sm:text-6xl w-[18vw] h-[18vw] sm:w-16 sm:h-28 transition-all duration-200"
            style={{fontSize: 'clamp(32px,10vw,72px)', width: 'clamp(32px,18vw,68px)', height: 'clamp(56px,18vw,120px)'}}
          >
            {char}
          </span>
        )
      )}
    </div>
  );
};

export default LimitedTimeTimer;
