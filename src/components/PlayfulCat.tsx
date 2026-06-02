'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

// Fluffy white cat SVG
const CatSVG = ({ size = 80 }) => (
  <svg viewBox="0 0 120 100" width={size} height={size * 0.83} xmlns="http://www.w3.org/2000/svg">
    {/* Tail */}
    <path
      d="M85 75 C95 65, 105 55, 100 45 C95 35, 85 40, 90 50"
      fill="none"
      stroke="#F5F5F5"
      strokeWidth="8"
      strokeLinecap="round"
      className="cat-tail"
    />
    {/* Body */}
    <ellipse cx="60" cy="70" rx="30" ry="22" fill="#F8F8F8" stroke="#E0E0E0" strokeWidth="1.5" />
    {/* Fur texture */}
    <path d="M40 70 Q45 65, 50 70" fill="none" stroke="#E0E0E0" strokeWidth="0.5" />
    <path d="M55 75 Q60 70, 65 75" fill="none" stroke="#E0E0E0" strokeWidth="0.5" />
    <path d="M70 68 Q75 63, 80 68" fill="none" stroke="#E0E0E0" strokeWidth="0.5" />
    {/* Head */}
    <circle cx="45" cy="45" r="22" fill="#F8F8F8" stroke="#E0E0E0" strokeWidth="1.5" />
    {/* Ears */}
    <polygon points="28,30 35,12 42,28" fill="#F8F8F8" stroke="#E0E0E0" strokeWidth="1.5" />
    <polygon points="52,28 60,12 65,30" fill="#F8F8F8" stroke="#E0E0E0" strokeWidth="1.5" />
    {/* Inner ears */}
    <polygon points="30,28 35,16 40,27" fill="#FFE4E1" />
    <polygon points="54,27 60,16 63,28" fill="#FFE4E1" />
    {/* Eyes */}
    <ellipse cx="37" cy="43" rx="4" ry="5" fill="#FFB6C1" />
    <ellipse cx="53" cy="43" rx="4" ry="5" fill="#FFB6C1" />
    <ellipse cx="37" cy="43" rx="2" ry="3" fill="#333" />
    <ellipse cx="53" cy="43" rx="2" ry="3" fill="#333" />
    {/* Eye shine */}
    <circle cx="36" cy="42" r="1" fill="white" />
    <circle cx="52" cy="42" r="1" fill="white" />
    {/* Nose */}
    <polygon points="45,50 43,52 47,52" fill="#FFB6C1" />
    {/* Mouth */}
    <path d="M43,53 Q45,56 47,53" fill="none" stroke="#E0E0E0" strokeWidth="1" />
    <path d="M45,52 L45,53" fill="none" stroke="#E0E0E0" strokeWidth="1" />
    {/* Whiskers */}
    <line x1="25" y1="48" x2="35" y2="50" stroke="#E0E0E0" strokeWidth="0.8" />
    <line x1="25" y1="52" x2="35" y2="52" stroke="#E0E0E0" strokeWidth="0.8" />
    <line x1="55" y1="50" x2="65" y2="48" stroke="#E0E0E0" strokeWidth="0.8" />
    <line x1="55" y1="52" x2="65" y2="52" stroke="#E0E0E0" strokeWidth="0.8" />
    {/* Paws */}
    <ellipse cx="40" cy="90" rx="8" ry="5" fill="#F8F8F8" stroke="#E0E0E0" strokeWidth="1.5" />
    <ellipse cx="55" cy="90" rx="8" ry="5" fill="#F8F8F8" stroke="#E0E0E0" strokeWidth="1.5" />
    {/* Paw pads */}
    <circle cx="40" cy="90" r="2" fill="#FFE4E1" />
    <circle cx="55" cy="90" r="2" fill="#FFE4E1" />
  </svg>
);

export default function PlayfulCat() {
  const [pos, setPos] = useState({ x: 10, y: 50 });
  const [isPouncing, setIsPouncing] = useState(false);
  const [targetPos, setTargetPos] = useState<{ x: number; y: number } | null>(null);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [pawReaching, setPawReaching] = useState(false);
  const posRef = useRef({ x: 10, y: 50, vx: 0, vy: 0 });
  const animRef = useRef<number>(0);
  const stateRef = useRef<'idle' | 'walking' | 'pouncing' | 'playing'>('idle');
  const nextStateTime = useRef(Date.now() + 3000);
  const targetTextRef = useRef<{ x: number; y: number } | null>(null);

  // Find text elements to play with
  useEffect(() => {
    const findTextTargets = () => {
      const hero = document.querySelector('section.relative');
      if (!hero) return null;
      const texts = hero.querySelectorAll('h1, p, span');
      if (texts.length === 0) return null;
      const textEl = texts[Math.floor(Math.random() * texts.length)] as HTMLElement;
      const rect = textEl.getBoundingClientRect();
      const heroRect = hero.getBoundingClientRect();
      return {
        x: ((rect.left - heroRect.left) / heroRect.width) * 100,
        y: ((rect.top - heroRect.top) / heroRect.height) * 100,
      };
    };

    const interval = setInterval(() => {
      if (stateRef.current === 'idle' || stateRef.current === 'walking') {
        targetTextRef.current = findTextTargets();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const animate = useCallback(() => {
    const now = Date.now();
    const state = posRef.current;

    if (now > nextStateTime.current) {
      // Pick next action
      const rand = Math.random();
      if (rand < 0.3 && targetTextRef.current) {
        // Pounce at text!
        stateRef.current = 'pouncing';
        setIsPouncing(true);
        setPawReaching(true);
        setTargetPos({ x: targetTextRef.current.x, y: targetTextRef.current.y });
        nextStateTime.current = now + 2000;
      } else if (rand < 0.6) {
        // Walk around
        stateRef.current = 'walking';
        setIsPouncing(false);
        setPawReaching(false);
        setTargetPos({
          x: 10 + Math.random() * 80,
          y: 20 + Math.random() * 60,
        });
        nextStateTime.current = now + 3000 + Math.random() * 4000;
      } else {
        // Sit/Idle
        stateRef.current = 'idle';
        setIsPouncing(false);
        setPawReaching(false);
        setTargetPos(null);
        nextStateTime.current = now + 2000 + Math.random() * 3000;
      }
    }

    if (stateRef.current === 'pouncing' && targetPos) {
      // Fast movement towards target
      const dx = targetPos.x - state.x;
      const dy = targetPos.y - state.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 3) {
        // Reached target! Play with it
        stateRef.current = 'playing';
        setIsPouncing(false);
        setPawReaching(true);
        state.vx = (Math.random() - 0.5) * 0.5;
        state.vy = (Math.random() - 0.5) * 0.5;
        nextStateTime.current = now + 1500;
      } else {
        state.vx += (dx / dist) * 0.8;
        state.vy += (dy / dist) * 0.8;
      }
    } else if (targetPos && stateRef.current === 'walking') {
      // Walk towards target
      const dx = targetPos.x - state.x;
      const dy = targetPos.y - state.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 2) {
        state.vx *= 0.9;
        state.vy *= 0.9;
      } else {
        state.vx += (dx / dist) * 0.15;
        state.vy += (dy / dist) * 0.15;
      }
    } else if (stateRef.current === 'playing') {
      // Bounce around playfully
      state.vx += (Math.random() - 0.5) * 0.6;
      state.vy += (Math.random() - 0.5) * 0.6;
    } else {
      // Idle - gentle breathing
      state.vx *= 0.9;
      state.vy *= 0.9;
    }

    // Damping
    state.vx *= 0.94;
    state.vy *= 0.94;

    // Keep within bounds
    const margin = 5;
    if (state.x < margin) state.vx += 0.5;
    if (state.x > 95) state.vx -= 0.5;
    if (state.y < margin) state.vy += 0.5;
    if (state.y > 80) state.vy -= 0.5;

    // Update position
    state.x += state.vx;
    state.y += state.vy;

    // Direction (flip cat)
    if (Math.abs(state.vx) > 0.1) {
      setScale(state.vx > 0 ? -1 : 1);
    }

    // Rotation based on movement
    const angle = state.vx * 15;
    setRotation(angle);

    // Scale bounce when pouncing
    if (stateRef.current === 'pouncing') {
      setScale((scale > 0 ? 1 : -1) * (1 + Math.sin(now / 100) * 0.1));
    } else if (stateRef.current === 'idle') {
      // Gentle breathing
      setScale((scale > 0 ? 1 : -1) * (1 + Math.sin(now / 800) * 0.03));
    }

    setPos({ x: state.x, y: state.y });

    animRef.current = requestAnimationFrame(animate);
  }, [targetPos]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes catTailWag {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(10deg); }
          75% { transform: rotate(-10deg); }
        }
        @keyframes pawReach {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .cat-tail {
          transform-origin: 85px 75px;
          animation: catTailWag 2s ease-in-out infinite;
        }
        .cat-paw-reaching {
          animation: pawReach 0.5s ease-in-out infinite;
        }
      `}</style>

      {/* Cat */}
      <div
        className={pawReaching ? 'cat-paw-reaching' : ''}
        style={{
          position: 'absolute',
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: `translate(-50%, -50%) rotate(${rotation}deg) scaleX(${scale})`,
          transition: stateRef.current === 'idle' ? 'transform 0.3s ease' : 'none',
          filter: 'drop-shadow(0 2px 8px rgba(255,255,255,0.3))',
        }}
      >
        <CatSVG size={isPouncing ? 90 : 75} />
      </div>
    </div>
  );
}
