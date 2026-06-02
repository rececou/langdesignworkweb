'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

// Soft Pink Bouncing Ball Component
// Based on user request: soft pink ball bouncing randomly right to left, with sparkling pink tail

export default function SingleButterfly() {
  const [pos, setPos] = useState({ x: 30, y: 40 });
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; opacity: number; size: number; scale: number }>>([]);
  const posRef = useRef({ x: 30, y: 40, vx: 0.05, vy: 0.03 });
  const animRef = useRef<number>(0);
  const sparkleId = useRef(0);
  const timeRef = useRef(0);

  // Gentle bouncing logic
  const wander = useCallback(() => {
    const state = posRef.current;

    // Random gentle nudges (prefer horizontal movement)
    state.vx += (Math.random() - 0.5) * 0.02;
    state.vy += (Math.random() - 0.5) * 0.01; // Less vertical movement

    // Sine wave bounce effect
    timeRef.current += 0.02;
    state.vy += Math.sin(timeRef.current) * 0.01;

    // Keep within bounds with soft bounce
    const margin = 15;
    if (state.x < margin) state.vx += 0.03;
    if (state.x > 85) state.vx -= 0.03;
    if (state.y < margin) state.vy += 0.03;
    if (state.y > 75) state.vy -= 0.03;

    // Damping for floaty feel
    state.vx *= 0.98;
    state.vy *= 0.98;

    // Max speed limit
    const maxSpeed = 0.12;
    const speed = Math.sqrt(state.vx * state.vx + state.vy * state.vy);
    if (speed > maxSpeed) {
      state.vx = (state.vx / speed) * maxSpeed;
      state.vy = (state.vy / speed) * maxSpeed;
    }

    state.x += state.vx;
    state.y += state.vy;

    setPos({ x: state.x, y: state.y });

    // Add magical sparkles occasionally
    if (Math.random() > 0.8) {
      const newSparkle = {
        id: sparkleId.current++,
        x: state.x + (Math.random() - 0.5) * 8,
        y: state.y + (Math.random() - 0.5) * 8,
        opacity: 1,
        size: 2 + Math.random() * 5,
        scale: 0.5 + Math.random() * 0.5,
      };
      setSparkles(prev => [...prev.slice(-10), newSparkle]);
    }

    animRef.current = requestAnimationFrame(wander);
  }, []);

  useEffect(() => {
    // Fade out sparkles
    const interval = setInterval(() => {
      setSparkles(prev =>
        prev
          .map(s => ({ ...s, opacity: s.opacity - 0.012, scale: s.scale * 0.98 }))
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
        @keyframes ballPulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 15px #FF69B4) drop-shadow(0 0 25px #DA70D6); }
          50% { transform: scale(1.05); filter: drop-shadow(0 0 20px #FF69B4) drop-shadow(0 0 35px #DA70D6) drop-shadow(0 0 45px #FF1493); }
        }
        @keyframes sparklePulse {
          0%, 100% { opacity: 0.2; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes ballBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5px) scale(1.02); }
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
            background: 'radial-gradient(circle, #FFF 0%, #FFB6C1 40%, #FF69B4 100%)',
            borderRadius: '50%',
            opacity: s.opacity,
            transform: `scale(${s.scale})`,
            filter: 'blur(2px)',
            boxShadow: '0 0 8px #FF69B4, 0 0 15px #DA70D6',
            animation: 'sparklePulse 2.5s ease-in-out infinite',
          }}
        />
      ))}

      {/* Soft Pink Ball */}
      <div
        style={{
          position: 'absolute',
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: 'translate(-50%, -50%)',
          animation: 'ballBounce 1.5s ease-in-out infinite',
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, #FFF 0%, #FFB6C1 40%, #FF69B4 80%, #DA70D6 100%)',
            boxShadow: '0 0 15px #FF69B4, 0 0 25px #DA70D6, inset 0 0 10px rgba(255,255,255,0.5)',
            animation: 'ballPulse 2s ease-in-out infinite',
          }}
        />
      </div>
    </div>
  );
}
