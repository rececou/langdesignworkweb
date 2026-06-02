'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

// Magical Glowing Butterfly Component
// Based on user reference: Translucent, neon pink/purple, glowing veins, ethereal sparkles

export default function SingleButterfly() {
  const [pos, setPos] = useState({ x: 30, y: 40 });
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; opacity: number; size: number; scale: number }>>([]);
  const posRef = useRef({ x: 30, y: 40, vx: 0.05, vy: 0.03 });
  const animRef = useRef<number>(0);
  const sparkleId = useRef(0);
  const timeRef = useRef(0);

  // Gentle wandering logic
  const wander = useCallback(() => {
    const state = posRef.current;

    // Random gentle nudges
    state.vx += (Math.random() - 0.5) * 0.015;
    state.vy += (Math.random() - 0.5) * 0.015;

    // Sine wave hover effect (cinematic float)
    timeRef.current += 0.015;
    state.vy += Math.sin(timeRef.current) * 0.008;

    // Keep within bounds with soft bounce
    const margin = 15;
    if (state.x < margin) state.vx += 0.02;
    if (state.x > 85) state.vx -= 0.02;
    if (state.y < margin) state.vy += 0.02;
    if (state.y > 75) state.vy -= 0.02;

    // Damping (high damping for slow, floaty feel)
    state.vx *= 0.97;
    state.vy *= 0.97;

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
        @keyframes wingsGlow {
          0%, 100% { opacity: 0.8; filter: drop-shadow(0 0 10px #FF69B4) drop-shadow(0 0 20px #DA70D6); }
          50% { opacity: 1; filter: drop-shadow(0 0 15px #FF69B4) drop-shadow(0 0 30px #DA70D6) drop-shadow(0 0 40px #FF1493); }
        }
        @keyframes wingFlapL {
          0%, 100% { transform: rotateY(0deg) scaleX(1); }
          50% { transform: rotateY(40deg) scaleX(0.6); }
        }
        @keyframes wingFlapR {
          0%, 100% { transform: rotateY(0deg) scaleX(1); }
          50% { transform: rotateY(-40deg) scaleX(0.6); }
        }
        @keyframes sparklePulse {
          0%, 100% { opacity: 0.2; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes coreGlow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
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

      {/* Magical Butterfly */}
      <div
        style={{
          position: 'absolute',
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: 'translate(-50%, -50%)',
          width: 80,
          height: 80,
        }}
      >
        <svg viewBox="0 0 100 100" className="overflow-visible" style={{ width: '100%', height: '100%' }}>
          {/* Wings Container */}
          <g style={{ animation: 'wingsGlow 3s ease-in-out infinite' }}>
            {/* Left Wing */}
            <g style={{ transformOrigin: '50px 50px', animation: 'wingFlapL 2.5s ease-in-out infinite' }}>
              <path
                d="M 50 50 Q 30 20, 10 30 Q 0 40, 20 55 Q 30 65, 50 50 Z"
                fill="url(#wingGradientL)"
                stroke="#FF69B4"
                strokeWidth="1.5"
                opacity="0.85"
              />
              {/* Veins */}
              <path d="M 50 50 Q 35 35, 20 40" fill="none" stroke="#FFF" strokeWidth="0.8" opacity="0.6" />
              <path d="M 50 50 Q 25 50, 15 55" fill="none" stroke="#FFF" strokeWidth="0.8" opacity="0.6" />
            </g>
            {/* Right Wing */}
            <g style={{ transformOrigin: '50px 50px', animation: 'wingFlapR 2.5s ease-in-out infinite' }}>
              <path
                d="M 50 50 Q 70 20, 90 30 Q 100 40, 80 55 Q 70 65, 50 50 Z"
                fill="url(#wingGradientR)"
                stroke="#FF69B4"
                strokeWidth="1.5"
                opacity="0.85"
              />
              {/* Veins */}
              <path d="M 50 50 Q 65 35, 80 40" fill="none" stroke="#FFF" strokeWidth="0.8" opacity="0.6" />
              <path d="M 50 50 Q 75 50, 85 55" fill="none" stroke="#FFF" strokeWidth="0.8" opacity="0.6" />
            </g>
          </g>

          {/* Lower Wings */}
          <g style={{ animation: 'wingsGlow 3s ease-in-out infinite' }}>
            {/* Left Lower Wing */}
            <g style={{ transformOrigin: '50px 50px', animation: 'wingFlapL 2.5s ease-in-out infinite 0.1s' }}>
              <path
                d="M 50 50 Q 30 60, 25 75 Q 30 85, 50 70 Z"
                fill="url(#wingGradientL)"
                stroke="#FF69B4"
                strokeWidth="1"
                opacity="0.75"
              />
            </g>
            {/* Right Lower Wing */}
            <g style={{ transformOrigin: '50px 50px', animation: 'wingFlapR 2.5s ease-in-out infinite 0.1s' }}>
              <path
                d="M 50 50 Q 70 60, 75 75 Q 70 85, 50 70 Z"
                fill="url(#wingGradientR)"
                stroke="#FF69B4"
                strokeWidth="1"
                opacity="0.75"
              />
            </g>
          </g>

          {/* Body */}
          <g style={{ animation: 'coreGlow 2s ease-in-out infinite' }}>
            <ellipse cx="50" cy="50" rx="3" ry="15" fill="#FFF" opacity="0.9" />
            <ellipse cx="50" cy="50" rx="5" ry="18" fill="url(#bodyGradient)" opacity="0.6" />
          </g>

          <defs>
            <radialGradient id="wingGradientL" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFF" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#FFB6C1" stopOpacity="0.7" />
              <stop offset="80%" stopColor="#FF69B4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#DA70D6" stopOpacity="0.3" />
            </radialGradient>
            <radialGradient id="wingGradientR" cx="70%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFF" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#FFB6C1" stopOpacity="0.7" />
              <stop offset="80%" stopColor="#FF69B4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#DA70D6" stopOpacity="0.3" />
            </radialGradient>
            <linearGradient id="bodyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF69B4" />
              <stop offset="100%" stopColor="#DA70D6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
