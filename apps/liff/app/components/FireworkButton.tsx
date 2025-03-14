// FireworkButton.jsx
import React, { useState, useEffect } from 'react';

const FireworkButton = () => {
  const [particles, setParticles] = useState([]);
  
  // ใช้ useEffect เพื่อจัดการวงจรชีวิตของอนุภาคพลุ
  useEffect(() => {
    // ไม่ทำอะไรถ้าไม่มีอนุภาคพลุ
    if (particles.length === 0) return;
    
    // สร้าง timers สำหรับแต่ละอนุภาค
    const fadeTimers = [];
    const removeTimers = [];
    
    particles.forEach(particle => {
      // ตั้งเวลาให้อนุภาคเริ่มจางหาย
      const fadeTimer = setTimeout(() => {
        // อัพเดตสถานะเพื่อลดความโปร่งใส
        setParticles(prevParticles => 
          prevParticles.map(p => 
            p.id === particle.id ? { ...p, opacity: 0 } : p
          )
        );
      }, particle.duration / 2);
      
      // ตั้งเวลาให้ลบอนุภาคออกจากสถานะ
      const removeTimer = setTimeout(() => {
        setParticles(prevParticles => 
          prevParticles.filter(p => p.id !== particle.id)
        );
      }, particle.duration);
      
      fadeTimers.push(fadeTimer);
      removeTimers.push(removeTimer);
    });
    
    // ทำความสะอาด timers เมื่อ component unmount หรือเมื่อ particles เปลี่ยน
    return () => {
      fadeTimers.forEach(timer => clearTimeout(timer));
      removeTimers.forEach(timer => clearTimeout(timer));
    };
  }, [particles]);
  
  // สร้างเอฟเฟคพลุเมื่อกดปุ่ม
  const createFireworks = () => {
    // ล้างอนุภาคพลุเก่าออกก่อน
    setParticles([]);
    
    const colors = ['#f87171', '#fbbf24', '#34d399', '#60a5fa', '#a78bfa', '#f472b6'];
    const newParticles = [];
    
    // สร้างอนุภาคพลุ 30 ชิ้น
    for (let i = 0; i < 30; i++) {
      // สุ่มค่าต่างๆ
      const angle = Math.random() * Math.PI * 2;
      const velocity = 0.5 + Math.random() * 2;
      const distance = 30 + Math.random() * 70;
      const duration = 400 + Math.random() * 600;
      const size = Math.random() * 6 + 3;
      
      // สร้างข้อมูลอนุภาคพลุ
      newParticles.push({
        id: `particle-${Date.now()}-${i}`,
        angle,
        velocity,
        distance,
        duration,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 1 // เริ่มต้นด้วยความโปร่งใส 100%
      });
    }
    
    // อัพเดตสถานะด้วยอนุภาคพลุใหม่
    setParticles(newParticles);
  };
  
  return (
    <div className="relative inline-block">
      {/* แสดงอนุภาคพลุทั้งหมด */}
      {particles.map(particle => {
        const translateX = Math.cos(particle.angle) * particle.distance * particle.velocity;
        const translateY = Math.sin(particle.angle) * particle.distance * particle.velocity;
        
        return (
          <div
            key={particle.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: '50%',
              top: '50%',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              opacity: particle.opacity, // ใช้ค่าความโปร่งใสจากสถานะ
              transform: `translate(${translateX}px, ${translateY}px)`,
              transition: `transform ${particle.duration / 1000}s ease-out, opacity ${particle.duration / 1000}s ease-out`
            }}
          />
        );
      })}
      
      {/* ปุ่ม */}
      <button
        className="px-6 py-3 text-lg font-bold text-white rounded-full shadow-lg z-10 relative bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
        onClick={createFireworks}
      >
        กดปุ่ม
      </button>
    </div>
  );
};

export default FireworkButton;