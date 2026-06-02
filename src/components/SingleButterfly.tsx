'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

// Beautiful butterfly SVG component
const ButterflySVG = ({ size = 60, color = '#FFB6C1' }) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    style={{ filter: `drop-shadow(0 0 8px ${color}80)` }}
  >
    <defs>
      <radialGradient id={`wingGrad-${color.replace('#', '')}`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={color} stopOpacity="0.9" />
        <stop offset="100%" stopColor="#FFF0F5" stopOpacity="0.4" />
      </radialGradient>
    </defs>
    {/* Upper wings */}
    <path
      d="M50 45 C35 20, 5 10, 15 40 C20 55, 45 50, 50 45Z"
      fill={`url(#wingGrad-${color.replace('#', '')})`}
      stroke={color}
      strokeWidth="1.5"
      className="butterfly-wing-l"
    />
    <path
      d="M50 45 C65 20, 95 10, 85 40 C80 55, 55 50, 50 45Z"
      fill={`url(#wingGrad-${color.replace('#', '')})`}
      stroke={color}
      strokeWidth="1.5"
      className="butterfly-wing-r"
    />
    {/* Lower wings */}
    <path
      d="M50 50 C40 60, 20 80, 30 75 C40 70, 48 60, 50 50Z"
      fill={`url(#wingGrad-${color.replace('#', '')})`}
      stroke={color}
      strokeWidth="1.5"
      className="butterfly-wing-l"
    />
    <path
      d="M50 50 C60 60, 80 80, 70 75 C60 70, 52 60, 50 50Z"
      fill={`url(#wingGrad-${color.replace('#', '')})`}
      stroke={color}
      strokeWidth="1.5"
      className="butterfly-wing-r"
    />
    {/* Body */}
    <ellipse cx="50" cy="50" rx="2.5" ry="15" fill="#FFB6C1" />
    {/* Antennae */}
    <path d="M48 35 C45 25, 40 20, 35 25" fill="none" stroke="#FFB6C1" strokeWidth="1" />
    <path d="M52 35 C55 25, 60 20, 65 25" fill="none" stroke="#FFB6C1" strokeWidth="1" />
    <circle cx="35" cy="25" r="1.5" fill="#FFB6C1" />
    <circle cx="65" cy="25" r="1.5" fill="#FFB6C1" />
  </svg>
);

interface Sparkle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
  color: string;
}

export default function SingleButterfly() {
  const [pos, setPos] = useState({ x: 20, y: 30 });
  const [isLanded, setIsLanded] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const posRef = useRef({ x: 20, y: 30, vx: 0, vy: 0 });
  const landTargetRef = useRef<{ x: number; y: number } | null>(null);
  const animRef = useRef<number>(0);
  const nextLandTime = useRef(Date.now() + 5000 + Math.random() * 8000);
  const isLanding = useRef(false);
  const sparkleId = useRef(0);

  const addSparkle = useCallback(() => {
    const newSparkle: Sparkle = {
      id: sparkleId.current++,
      x: posRef.current.x + (Math.random() - 0.5) * 20,
      y: posRef.current.y + (Math.random() - 0.5) * 20,
      opacity: 0.8 + Math.random() * 0.2,
      size: 2 + Math.random() * 4,
      color: Math.random() > 0.5 ? '#FFD700' : '#FFF',
    };
    setSparkles(prev => [...prev.slice(-15), newSparkle]);
  }, []);

  useEffect(() => {
    // Fade out sparkles
    const interval = setInterval(() => {
      setSparkles(prev =>
        prev
          .map(s => ({ ...s, opacity: s.opacity - 0.03 }))
          .filter(s => s.opacity > 0)
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      const state = posRef.current;

      if (!isLanding.current && now > nextLandTime.current) {
        // Start landing sequence
        isLanding.current = true;
        landTargetRef.current = {
          x: 15 + Math.random() * 70,
          y: 20 + Math.random() * 60,
        };
        nextLandTime.current = now + 12000 + Math.random() * 10000;
      }

      if (isLanding.current && landTargetRef.current) {
        const dx = landTargetRef.current.x - state.x;
        const dy = landTargetRef.current.y - state.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 2) {
          // Landed!
          setIsLanded(true);
          state.vx = 0;
          state.vy = 0;

          // Wait, then take off
          setTimeout(() => {
            setIsLanded(false);
            isLanding.current = false;
            landTargetRef.current = null;
          }, 1500 + Math.random() * 2000);
        } else {
          state.vx += (dx / dist) * 0.3;
          state.vy += (dy / dist) * 0.3;
        }
      } else {
        // Random wandering
        state.vx += (Math.random() - 0.5) * 0.4;
        state.vy += (Math.random() - 0.5) * 0.4;

        // Keep within bounds
        const margin = 10;
        if (state.x < margin) state.vx += 0.3;
        if (state.x > 90) state.vx -= 0.3;
        if (state.y < margin) state.vy += 0.3;
        if (state.y > 80) state.vy -= 0.3;
      }

      // Damping
      state.vx *= 0.96;
      state.vy *= 0.96;

      // Update position
      state.x += state.vx;
      state.y += state.vy;

      // Calculate rotation based on velocity
      const angle = Math.atan2(state.vy, state.vx) * (180 / Math.PI);
      setRotation(angle + 90); // Adjust for SVG orientation

      setPos({ x: state.x, y: state.y });

      // Add sparkles when moving
      if (!isLanded && (Math.abs(state.vx) > 0.1 || Math.abs(state.vy) > 0.1)) {
        if (Math.random() > 0.6) addSparkle();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [addSparkle, isLanded]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes wingFlapLeft {
          0%, 100% { transform: scaleX(1) rotateY(0deg); }
          50% { transform: scaleX(0.4) rotateY(-30deg); }
        }
        @keyframes wingFlapRight {
          0%, 100% { transform: scaleX(1) rotateY(0deg); }
          50% { transform: scaleX(0.4) rotateY(30deg); }
        }
        .butterfly-wing-l {
          transform-origin: 50px 50px;
          animation: wingFlapLeft 0.4s ease-in-out infinite;
        }
        .butterfly-wing-r {
          transform-origin: 50px 50px;
          animation: wingFlapRight 0.4s ease-in-out infinite;
        }
        .sparkle {
          position: absolute;
          border-radius: 50%;
          box-shadow: 0 0 4px currentColor;
          animation: sparklePulse 1s ease-in-out infinite;
        }
        @keyframes sparklePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.5); }
        }
      `}</style>

      {/* Sparkle trail */}
      {sparkles.map(s => (
        <div
          key={s.id}
          className="sparkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            background: s.color,
            color: s.color,
          }}
        />
      ))}

      {/* Butterfly */}
      <div
        style={{
          position: 'absolute',
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          transition: isLanded ? 'transform 0.3s ease' : 'none',
          opacity: isLanded ? 0.9 : 1,
        }}
      >
        <ButterflySVG size={isLanded ? 65 : 55} color="#FFB6C1" />
      </div>
    </div>
  );
}
