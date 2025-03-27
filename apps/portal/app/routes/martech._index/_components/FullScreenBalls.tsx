import React, { useState, useEffect, useRef } from 'react';

// Add the users prop to the component
interface FullScreenBallsProps {
  users: any[];
}

interface FireworkProps {
  x: number;
  y: number;
  color: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
}

const Firework = ({ x, y, color }: FireworkProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    // Create particles
    const particleCount = 30;
    const angleStep = (2 * Math.PI) / particleCount;
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const angle = i * angleStep;
      const speed = 2 + Math.random() * 2;
      
      newParticles.push({
        id: i,
        x: 0,
        y: 0,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        size: 3 + Math.random() * 3
      });
    }
    
    setParticles(newParticles);
    
    // Disappear after animation
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    let animationId;
    
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          alpha: p.alpha - 0.02,
          size: Math.max(0, p.size - 0.05)
        }))
      );
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, []);
  
  if (!visible) return null;
  
  return (
    <div className="absolute z-30" style={{ left: x, top: y }}>
      {particles.map(p => (
        <div 
          key={p.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: color,
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: p.x,
            top: p.y,
            opacity: p.alpha,
            boxShadow: `0 0 6px ${color}`
          }}
        />
      ))}
    </div>
  );
};

const FullScreenBalls: React.FC<FullScreenBallsProps> = ({ users }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const ballRadius = 40; // Default ball radius: 40px (80px diameter)
  const winnerBallRadius = 200; // Winner ball radius: 100px (200px diameter)
  
  // Extended color palette for more variety with 30 balls
  const ballColorData = [
    { class: 'bg-red-500', color: '#100505' },
    { class: 'bg-blue-500', color: '#3b82f6' }, 
    { class: 'bg-green-500', color: '#22c55e' }, 
    { class: 'bg-yellow-500', color: '#eab308' }, 
    { class: 'bg-purple-500', color: '#a855f7' },
    { class: 'bg-pink-500', color: '#ec4899' },
    { class: 'bg-indigo-500', color: '#6366f1' },
    { class: 'bg-orange-500', color: '#f97316' },
    { class: 'bg-teal-500', color: '#14b8a6' },
    { class: 'bg-cyan-500', color: '#06b6d4' }
  ];
  
  const [winner, setWinner] = useState<number | null>(null);
  const [winnerBall, setWinnerBall] = useState<Ball | null>(null);
  const [isSelecting, setIsSelecting] = useState(false);
  interface Firework {
    id: number;
    x: number;
    y: number;
    color: string;
  }
  
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [showWinnerDisplay, setShowWinnerDisplay] = useState(false);
  const [hideButtons, setHideButtons] = useState(false);
  
  // Get container dimensions on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    
    // Initial dimensions
    updateDimensions();
    
    // Update dimensions when window resizes
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  
  // Initialize balls using the provided users data
  const generateInitialBalls = React.useCallback(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return [];
    
    return users.map((user, index) => ({
      id: user.id || index + 1,
      x: Math.random() * (dimensions.width - 2 * ballRadius) + ballRadius,
      y: Math.random() * (dimensions.height - 2 * ballRadius) + ballRadius,
      vx: (Math.random() * 1.5 + 0.5) * (Math.random() > 0.5 ? 1 : -1), // Slower speed
      vy: (Math.random() * 1.5 + 0.5) * (Math.random() > 0.5 ? 1 : -1), // Slower speed
      colorData: ballColorData[index % ballColorData.length], // Use modulo to cycle through colors
      isWinner: false,
      needsReset: false,  // Flag to track if ball needs to be reset
      scale: 1, // Normal scale
      opacity: 1, // Normal opacity
      user // Store the user data
    }));
  }, [dimensions, users]);
  
  interface Ball {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    colorData: { class: string; color: string };
    isWinner: boolean;
    needsReset: boolean;
    scale: number;
    opacity: number;
    user: any; // Add user data to the Ball interface
  }
  
  const [balls, setBalls] = useState<Ball[]>([]);
  
  // Update balls when dimensions or users change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      setBalls(generateInitialBalls());
    }
  }, [dimensions, users, generateInitialBalls]);
  
  // Animation loop
  useEffect(() => {
    if (balls.length === 0) return;
    
    const animationId = setInterval(() => {
      setBalls(prevBalls => 
        prevBalls.map(ball => {
          // If this ball needs to be reset to random position (after a reset)
          if (ball.needsReset) {
            return {
              ...ball,
              x: Math.random() * (dimensions.width - 2 * ballRadius) + ballRadius,
              y: Math.random() * (dimensions.height - 2 * ballRadius) + ballRadius,
              vx: (Math.random() * 1.5 + 0.5) * (Math.random() > 0.5 ? 1 : -1),
              vy: (Math.random() * 1.5 + 0.5) * (Math.random() > 0.5 ? 1 : -1),
              needsReset: false,
              scale: 1,
              opacity: 1
            };
          }
          
          // If we're showing the winner display, only animate the winning ball
          // and move it to the center if it's not already there
          if (showWinnerDisplay && ball.isWinner) {
            const centerX = dimensions.width / 2;
            const centerY = dimensions.height / 2; // Exactly at the center
            
            // Gradually move to center
            const dx = centerX - ball.x;
            const dy = centerY - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance > 5) {
              return {
                ...ball,
                x: ball.x + dx * 0.1,
                y: ball.y + dy * 0.1,
                vx: 0,
                vy: 0
              };
            }
            return ball;
          }
          
          // If showing winner display and this is not the winner, don't animate
          if (showWinnerDisplay && !ball.isWinner) {
            return ball;
          }
          
          let newX = ball.x + ball.vx;
          let newY = ball.y + ball.vy;
          let newVx = ball.vx;
          let newVy = ball.vy;
          
          // Bounce off walls
          if (newX <= ballRadius || newX >= dimensions.width - ballRadius) {
            newVx = -newVx;
          }
          
          if (newY <= ballRadius || newY >= dimensions.height - ballRadius) {
            newVy = -newVy;
          }
          
          // Keep ball within bounds
          newX = Math.max(ballRadius, Math.min(newX, dimensions.width - ballRadius));
          newY = Math.max(ballRadius, Math.min(newY, dimensions.height - ballRadius));
          
          return {
            ...ball,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          };
        })
      );
    }, 30);
    
    // Clean up
    return () => clearInterval(animationId);
  }, [balls, dimensions, showWinnerDisplay]);
  
  const createFirework = (x, y, color) => {
    const id = Date.now() + Math.random();
    setFireworks(prev => [...prev, { id, x, y, color }]);
    
    // Remove firework after animation
    setTimeout(() => {
      setFireworks(prev => prev.filter(fw => fw.id !== id));
    }, 1600);
  };

  // Function to create continuous fireworks
  const createContinuousFireworks = () => {
    // Create a firework at a random position
    const randomX = Math.random() * dimensions.width;
    const randomY = Math.random() * dimensions.height;
    const randomColorIndex = Math.floor(Math.random() * ballColorData.length);
    
    createFirework(
      randomX,
      randomY,
      ballColorData[randomColorIndex].color
    );
  };
  
  // Fireworks interval reference
  const fireworksIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Clean up fireworks interval on unmount
  useEffect(() => {
    return () => {
      if (fireworksIntervalRef.current) {
        clearInterval(fireworksIntervalRef.current);
      }
    };
  }, []);
  
  const selectWinner = () => {
    setIsSelecting(true);
    setShowWinnerDisplay(false);
    setFireworks([]); // Clear any existing fireworks
    setHideButtons(true); // Hide the buttons during selection
    
    // Random selection animation
    let counter = 0;
    const totalFlashes = 60; // One flash per ball for dramatic effect
    const flashInterval = setInterval(() => {
      counter++;
      
      // During animation
      if (counter < totalFlashes) {
        // As we get closer to the end, make the flashing more dramatic
        const flashIntensity = Math.min(1, counter / (totalFlashes * 0.7));
        
        // During the initial phase, flash random balls
        // Later in the selection, focus more on a smaller set of candidates
        let candidateIndices;
        if (counter < totalFlashes * 0.7) {
          // Random selection from all balls
          candidateIndices = [Math.floor(Math.random() * 30)];
        } else {
          // In the final phase, focus on just 5 random balls
          const finalCandidates = new Set();
          while (finalCandidates.size < 5) {
            finalCandidates.add(Math.floor(Math.random() * 30));
          }
          candidateIndices = Array.from(finalCandidates);
          
          // In the very last phase, pick just one of these candidates
          if (counter > totalFlashes * 0.9) {
            candidateIndices = [candidateIndices[Math.floor(Math.random() * candidateIndices.length)]];
          }
        }
        
        // Flash the chosen balls
        setBalls(prevBalls => 
          prevBalls.map((ball, idx) => {
            const isHighlighted = candidateIndices.includes(idx);
            
            // Gradually dim non-highlighted balls as we progress
            const dimming = isHighlighted ? 1 : Math.max(0.3, 1 - flashIntensity * 0.7);
            
            // Scale effect becomes more pronounced toward the end
            const scaleFactor = isHighlighted ? 1 + (flashIntensity * 0.5) : Math.max(0.8, 1 - flashIntensity * 0.2);
            
            return {
              ...ball,
              isWinner: isHighlighted,
              scale: scaleFactor,
              opacity: dimming
            };
          })
        );
        
        // Create mini fireworks around highlighted balls for added effect
        if (counter > totalFlashes * 0.8) {
          balls.forEach((ball, idx) => {
            if (candidateIndices.includes(idx)) {
              const angle = Math.random() * Math.PI * 2;
              const distance = ballRadius * 1.5;
              createFirework(
                ball.x + Math.cos(angle) * distance,
                ball.y + Math.sin(angle) * distance,
                ball.colorData.color
              );
            }
          });
        }
      } else {
        // End of animation, select the final winner
        clearInterval(flashInterval);
        
        // Make sure we pick a winner that exists within our array bounds
        const maxIndex = Math.min(balls.length - 1, 29);
        const finalWinnerIndex = Math.floor(Math.random() * (maxIndex + 1));
        const winnerId = balls[finalWinnerIndex]?.id || (finalWinnerIndex + 1);
        
        // Find the winning ball - important to preserve all user data!
        setBalls(prevBalls => {
          const updatedBalls = prevBalls.map((ball) => {
            const isWinner = ball.id === winnerId;
            
            // Winning ball remains highlighted, others fade significantly
            const opacity = isWinner ? 1 : 0.2;
            const scale = isWinner ? 1.5 : 0.8;
            
            if (isWinner) {
              // Store a complete copy of the winning ball with all data intact
              setWinnerBall({...ball, isWinner: true});
            }
            
            return {
              ...ball, // Preserve all existing ball properties
              isWinner,
              scale,
              opacity,
            };
          });
          return updatedBalls;
        });
        
        setWinner(winnerId);
        setIsSelecting(false);
        
        // Create a burst of fireworks around the winner
        const winningBall = balls[finalWinnerIndex];
        if (winningBall) {
          for (let i = 0; i < 10; i++) {
            const angle = (i / 10) * Math.PI * 2;
            const distance = ballRadius * 2;
            setTimeout(() => {
              createFirework(
                winningBall.x + Math.cos(angle) * distance,
                winningBall.y + Math.sin(angle) * distance,
                winningBall.colorData.color
              );
            }, i * 100);
          }
        }
        
        // Show big winner display after a short delay
        setTimeout(() => {
          setShowWinnerDisplay(true);
          
          // Initial burst of fireworks
          const centerX = dimensions.width / 2;
          const centerY = dimensions.height / 2;
          
          // Initial burst of 20 fireworks
          for (let i = 0; i < 20; i++) {
            setTimeout(() => {
              const offsetX = (Math.random() - 0.5) * dimensions.width * 0.8;
              const offsetY = (Math.random() - 0.5) * dimensions.height * 0.8;
              const colorIndex = Math.floor(Math.random() * ballColorData.length);
              createFirework(
                centerX + offsetX,
                centerY + offsetY,
                ballColorData[colorIndex].color
              );
            }, i * 150); // Stagger the fireworks
          }
          
          // Start continuous fireworks
          fireworksIntervalRef.current = setInterval(createContinuousFireworks, 300);
          
          // Show the reset button after a delay
          setTimeout(() => {
            setHideButtons(false);
          }, 5000); // Show reset button after 5 seconds
          
        }, 1000);
      }
    }, 100);
  };
  
  const resetWinner = () => {
    // Clear the fireworks interval
    if (fireworksIntervalRef.current) {
      clearInterval(fireworksIntervalRef.current);
      fireworksIntervalRef.current = null;
    }
    
    setWinner(null);
    setWinnerBall(null);
    setFireworks([]);
    setShowWinnerDisplay(false);
    setHideButtons(false);
    
    // Mark all balls for position reset
    setBalls(prevBalls => 
      prevBalls.map(ball => ({
        ...ball,
        isWinner: false,
        scale: 1,
        opacity: 1,
        needsReset: true // Flag for resetting position in the animation loop
      }))
    );
  };
  
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      {!hideButtons && !showWinnerDisplay && (
        <div className="absolute top-4 left-0 right-0 flex justify-center z-40 pointer-events-none">
          <div className="pointer-events-auto">
            <button
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 disabled:opacity-50"
              onClick={selectWinner}
              disabled={isSelecting}
            >
              {isSelecting ? "Selecting..." : "Choose Winner"}
            </button>
          </div>
        </div>
      )}
      
      <div 
        className="relative flex-grow bg-gray-100 w-full h-full"
        ref={containerRef}
      >
        {/* Render fireworks */}
        {fireworks.map(fw => (
          <Firework key={fw.id} x={fw.x} y={fw.y} color={fw.color} />
        ))}
        
        {/* Big Winner Text - ABOVE the ball */}
        {showWinnerDisplay && winnerBall && (
          <div className="absolute top-0 left-0 right-0 mt-16 flex flex-col items-center justify-center z-45">
            <div className="text-9xl font-bold animate-bounce text-center" 
                 style={{color: winnerBall.colorData.color}}>
              WINNER!
            </div>
            {/* Show winner user name and add avatar here too for redundancy */}
            <div className="flex flex-col items-center mt-4">
              {winnerBall.user.avatar && (
                <img 
                  src={winnerBall.user.avatar} 
                  alt={winnerBall.user.name}
                  className="w-20 h-20 rounded-full mb-2 object-cover border-4"
                  style={{borderColor: winnerBall.colorData.color}}
                />
              )}
              <div className="text-2xl font-bold text-center">
                {winnerBall.user.name}
              </div>
            </div>
          </div>
        )}
        
        {/* Reset button - Fixed at bottom */}
        {showWinnerDisplay && winnerBall && !hideButtons && (
          <div className="absolute bottom-16 left-0 right-0 flex justify-center z-50">
            <button
              className="px-8 py-4 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 shadow-lg text-xl"
              onClick={resetWinner}
            >
              Reset
            </button>
          </div>
        )}
        
        {/* Render balls with profile pictures only */}
        {balls.map(ball => (
          <div
            key={ball.id}
            className="absolute flex items-center justify-center transition-all duration-300 overflow-hidden"
            style={{
              width: `${ball.isWinner && showWinnerDisplay ? winnerBallRadius * 2 : ballRadius * 2 * ball.scale}px`,
              height: `${ball.isWinner && showWinnerDisplay ? winnerBallRadius * 2 : ballRadius * 2 * ball.scale}px`,
              left: `${ball.x - (ball.isWinner && showWinnerDisplay ? winnerBallRadius : ballRadius * ball.scale)}px`,
              top: `${ball.y - (ball.isWinner && showWinnerDisplay ? winnerBallRadius : ballRadius * ball.scale)}px`,
              zIndex: ball.isWinner ? 40 : 1,
              opacity: showWinnerDisplay ? (ball.isWinner ? 1 : 0) : ball.opacity,
              boxShadow: ball.isWinner ? `0 0 ${15 + (ball.scale - 1) * 30}px ${ball.colorData.color}` : 'none',
              transform: ball.isWinner && isSelecting ? `rotate(${(Math.random() * 10 - 5)}deg)` : 'rotate(0deg)',
              transition: showWinnerDisplay ? 'width 0.5s, height 0.5s, left 0.5s, top 0.5s, font-size 0.5s' : 
                         'all 0.2s ease-in-out',
              borderRadius: '50%'
            }}
          >
            {/* Profile picture as the ball */}
            <div className="w-full h-full relative">
              {/* Default background when no avatar is available */}
              <div 
                className={`absolute inset-0 ${ball.colorData.class} rounded-full`} 
                style={{ opacity: ball.user.avatar ? 0 : 1 }}
              />
              
              {/* User avatar as the ball background - add key to force re-render when needed */}
              {ball.user.avatar && (
                <img 
                  key={`avatar-${ball.id}-${ball.isWinner}-${showWinnerDisplay}`}
                  src={ball.user.avatar} 
                  alt={ball.user.name}
                  className="w-full h-full object-cover rounded-full"
                  style={{
                    border: ball.isWinner ? `4px solid ${ball.colorData.color}` : 'none'
                  }}
                  onError={(e) => {
                    // If image fails to load, show the colorful background instead
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    // Log error to help with debugging
                    console.error(`Failed to load avatar for user: ${ball.user.name}`, ball.user.avatar);
                  }}
                />
              )}
              
              {/* Name overlay on hover or when winner */}
              <div 
                className={`absolute inset-0 flex items-center justify-center rounded-full bg-opacity-50 transition-opacity duration-300 ${
                  ball.isWinner && showWinnerDisplay ? 'opacity-70' : 'opacity-0 hover:opacity-70'
                }`}
              >
                <span className="text-white text-center px-1 truncate" style={{
                  fontSize: ball.isWinner && showWinnerDisplay ? '1.5rem' : '0.75rem',
                }}>
                  {ball.user.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullScreenBalls;