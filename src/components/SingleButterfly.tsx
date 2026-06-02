'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

// Ethereal magical butterfly shape
const MagicalButterfly = ({ size = 50 }) => (
  <div
    style={{
      width: size,
      height: size,
      position: 'relative',
      filter: 'blur(2px) drop-shadow(0 0 10px #FFB6C1) drop-shadow(0 0 20px #FF69B4)',
    }}
  >
    {/* Wings container */}
    <div className="relative w-full h-full animate-wings">
      {/* Left Wing */}
      <div
        className="absolute top-1/4 left-1/4 w-3/5 h-3/5 origin-bottom-right"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #FFF, #FFB6C1, #FF69B4)',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          transform: 'rotate(-20deg)',
          opacity: 0.9,
          animation: 'flapLeft 3s ease-in-out infinite',
        }}
      />
      {/* Right Wing */}
      <div
        className="absolute top-1/4 right-1/4 w-3/5 h-3/5 origin-bottom-left"
        style={{
          background: 'radial-gradient(circle at 70% 30%, #FFF, #FFB6C1, #FF69B4)',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          transform: 'rotate(20deg)',
          opacity: 0.9,
          animation: 'flapRight 3s ease-in-out infinite',
        }}
      />
      {/* Body (faint glow) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1/3 bg-white rounded-full"
        style={{ filter: 'blur(2px)', opacity: 0.6 }}
      />
    </div>
  </div>
);

interface Sparkle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
  scale: number;
}

export default function SingleButterfly() {
  const [pos, setPos] = useState({ x: 30, y: 40 });
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const posRef = useRef({ x: 30, y: 40, vx: 0.05, vy: 0.03 }); // Very slow start
  const animRef = useRef<number>(0);
  const sparkleId = useRef(0);
  const timeRef = useRef(0);

  // Gentle wandering logic
  const wander = useCallback(() => {
    const state = posRef.current;

    // Random gentle nudges
    state.vx += (Math.random() - 0.5) * 0.02;
    state.vy += (Math.random() - 0.5) * 0.02;

    // Sine wave hover effect (cinematic float)
    timeRef.current += 0.02;
    state.vy += Math.sin(timeRef.current) * 0.01;

    // Keep within bounds with soft bounce
    const margin = 15;
    if (state.x < margin) state.vx += 0.03;
    if (state.x > 85) state.vx -= 0.03;
    if (state.y < margin) state.vy += 0.03;
    if (state.y > 75) state.vy -= 0.03;

    // Damping (high damping for slow, floaty feel)
    state.vx *= 0.98;
    state.vy *= 0.98;

    // Max speed limit
    const maxSpeed = 0.15;
    const speed = Math.sqrt(state.vx * state.vx + state.vy * state.vy);
    if (speed > maxSpeed) {
      state.vx = (state.vx / speed) * maxSpeed;
      state.vy = (state.vy / speed) * maxSpeed;
    }

    state.x += state.vx;
    state.y += state.vy;

    setPos({ x: state.x, y: state.y });

    // Add magical sparkles occasionally
    if (Math.random() > 0.85) {
      const newSparkle: Sparkle = {
        id: sparkleId.current++,
        x: state.x + (Math.random() - 0.5) * 5,
        y: state.y + (Math.random() - 0.5) * 5,
        opacity: 1,
        size: 2 + Math.random() * 4,
        scale: 0.5 + Math.random() * 0.5,
      };
      setSparkles(prev => [...prev.slice(-8), newSparkle]);
    }

    animRef.current = requestAnimationFrame(wander);
  }, []);

  useEffect(() => {
    // Fade out sparkles
    const interval = setInterval(() => {
      setSparkles(prev =>
        prev
          .map(s => ({ ...s, opacity: s.opacity - 0.015, scale: s.scale * 0.99 }))
          .filter(s => s.opacity > 0)
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    animRef.current = requestAnimationFrame(wander);
    return () => cancelAnimationFrame(animRef.current);
  }, [wander]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes flapLeft {
          0%, 100% { transform: rotate(-20deg) scaleX(1); }
          50% { transform: rotate(-10deg) scaleX(0.6); }
        }
        @keyframes flapRight {
          0%, 100% { transform: rotate(20deg) scaleX(1); }
          50% { transform: rotate(10deg) scaleX(0.6); }
        }
        @keyframes sparkleGlow {
          0%, 100% { opacity: 0.2; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Sparkle trail */}
      {sparkles.map(s => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background: 'radial-gradient(circle, #FFF 0%, #FFB6C1 100%)',
            borderRadius: '50%',
            opacity: s.opacity,
            transform: `scale(${s.scale})`,
            filter: 'blur(1px)',
            boxShadow: '0 0 6px #FFB6C1',
            animation: 'sparkleGlow 2s ease-in-out infinite',
          }}
        />
      ))}

      {/* Magical Butterfly */}
      <div
        style={{
          position: 'absolute',
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <MagicalButterfly size={60} />
      </div>
    </div>
  );
}
