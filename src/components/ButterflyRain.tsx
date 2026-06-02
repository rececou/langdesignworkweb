'use client';

import { useEffect, useState } from 'react';

interface Butterfly {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  color: string;
  trail: boolean;
}

const BUTTERFLY_COLORS = ['#FF6B6B', '#FF9A9E', '#FAD0C4', '#FECFEF', '#A18CD1'];
const SPARK_COLORS = ['#FFD700', '#FFF', '#FFA500'];

const ButterflyRain = ({ count = 6 }: { count?: number }) => {
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);

  useEffect(() => {
    const items: Butterfly[] = [];
    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        size: 12 + Math.random() * 16, // 12px to 28px
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 20 + Math.random() * 30, // 20s to 50s
        delay: -Math.random() * 20,
        color: BUTTERFLY_COLORS[Math.floor(Math.random() * BUTTERFLY_COLORS.length)],
        trail: i % 2 === 0,
      });
    }
    setButterflies(items);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -30px) rotate(10deg); }
          50% { transform: translate(-10px, -50px) rotate(-5deg); }
          75% { transform: translate(30px, -20px) rotate(15deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes float-slow {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, -40px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>
      {butterflies.map((b) => (
        <div
          key={b.id}
          className="absolute"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: b.size,
            height: b.size,
            animation: `${b.trail ? 'float' : 'float-slow'} ${b.duration}s ease-in-out infinite`,
            animationDelay: `${b.delay}s`,
            opacity: 0.4,
          }}
        >
          {/* Butterfly SVG */}
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 12C12 12 8 4 4 6C0 8 2 14 12 12C22 14 24 8 20 6C16 4 12 12 12 12Z"
              fill={b.color}
              opacity="0.8"
            />
            <path
              d="M12 12C12 12 8 20 4 18C0 16 2 10 12 12C22 10 24 16 20 18C16 20 12 12 12 12Z"
              fill={b.color}
              opacity="0.8"
            />
          </svg>

          {/* Sparks following butterfly */}
          {b.trail && (
            <>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: SPARK_COLORS[i],
                    left: `${-i * 8}px`,
                    top: `${i * 4}px`,
                    opacity: 0.6 - i * 0.2,
                    animation: `float-slow ${b.duration * 0.8}s ease-in-out infinite`,
                    animationDelay: `${b.delay + i * 0.5}s`,
                  }}
                />
              ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ButterflyRain;
