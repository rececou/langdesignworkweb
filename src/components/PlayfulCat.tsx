'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

// Lazy Cream Cat SVG based on reference image
const CatSVG = ({ size = 120, state }: { size: number; state: string }) => {
  // Colors
  const cream = '#F5F5DC';
  const creamDark = '#E8E8D0';
  const pink = '#FFB6C1';
  const outline = '#D3D3D3';

  const isLying = state === 'lying' || state === 'wagging';
  const isStanding = state === 'standing' || state === 'walking' || state === 'reaching';

  return (
    <svg
      viewBox="0 0 200 160"
      width={size}
      height={size * 0.8}
      style={{ overflow: 'visible' }}
    >
      <defs>
        <radialGradient id="furGrad" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={cream} />
          <stop offset="100%" stopColor={creamDark} />
        </radialGradient>
      </defs>

      {/* Tail */}
      <path
        d={
          isLying
            ? 'M160 100 Q 190 90, 185 60 Q 180 30, 150 40 Q 130 45, 140 70'
            : 'M150 110 Q 180 100, 185 70 Q 190 40, 160 30 Q 140 20, 130 50'
        }
        fill="none"
        stroke={cream}
        strokeWidth="18"
        strokeLinecap="round"
        className={isLying ? 'animate-tail-wag' : ''}
        style={{ filter: `drop-shadow(0 0 4px ${outline})` }}
      />

      {/* Body (Lying vs Standing) */}
      <g style={{ transition: 'all 1s ease' }}>
        {isLying ? (
          // Lying down body
          <>
            <ellipse
              cx="100"
              cy="100"
              rx="60"
              ry="35"
              fill="url(#furGrad)"
              stroke={outline}
              strokeWidth="2"
            />
            {/* Fluff details */}
            <path d="M60 90 Q 80 85, 100 90" fill="none" stroke={outline} strokeWidth="1" opacity="0.5" />
            <path d="M110 100 Q 130 95, 150 100" fill="none" stroke={outline} strokeWidth="1" opacity="0.5" />
          </>
        ) : (
          // Standing body
          <>
            <ellipse
              cx="100"
              cy="100"
              rx="50"
              ry="40"
              fill="url(#furGrad)"
              stroke={outline}
              strokeWidth="2"
            />
          </>
        )}
      </g>

      {/* Legs */}
      <g style={{ transition: 'all 0.5s ease' }}>
        {isLying ? (
          <>
            {/* Front paws (lying) */}
            <ellipse cx="70" cy="125" rx="12" ry="8" fill={cream} stroke={outline} strokeWidth="1.5" />
            <ellipse cx="90" cy="125" rx="12" ry="8" fill={cream} stroke={outline} strokeWidth="1.5" />
            {/* Back legs (tucked) */}
            <ellipse cx="140" cy="110" rx="15" ry="10" fill={cream} stroke={outline} strokeWidth="1.5" />
          </>
        ) : (
          <>
            {/* Standing legs */}
            <path d="M75 130 L 75 145" stroke={cream} strokeWidth="8" strokeLinecap="round" />
            <path d="M125 130 L 125 145" stroke={cream} strokeWidth="8" strokeLinecap="round" />
            <ellipse cx="75" cy="145" rx="8" ry="5" fill={cream} stroke={outline} strokeWidth="1" />
            <ellipse cx="125" cy="145" rx="8" ry="5" fill={cream} stroke={outline} strokeWidth="1" />
          </>
        )}
      </g>

      {/* Head Group */}
      <g style={{ transition: 'all 1s ease', transform: isLying ? 'translateY(0)' : 'translateY(-10px)' }}>
        {/* Ears */}
        <polygon points="70,50 80,25 90,50" fill={cream} stroke={outline} strokeWidth="1.5" />
        <polygon points="110,50 120,25 130,50" fill={cream} stroke={outline} strokeWidth="1.5" />
        <polygon points="73,48 80,30 87,48" fill={pink} />
        <polygon points="113,48 120,30 127,48" fill={pink} />

        {/* Head Shape */}
        <circle cx="100" cy="60" r="35" fill="url(#furGrad)" stroke={outline} strokeWidth="2" />

        {/* Face Details */}
        {/* Cheeks/Fluff */}
        <path d="M75 65 Q 85 75, 100 70" fill="none" stroke={outline} strokeWidth="1" opacity="0.4" />
        <path d="M100 70 Q 115 75, 125 65" fill="none" stroke={outline} strokeWidth="1" opacity="0.4" />

        {/* Eyes (Sleepy/Lazy) */}
        {state === 'lying' || state === 'wagging' ? (
          <>
            {/* Closed eyes (curved lines) */}
            <path d="M85 60 Q 90 63, 95 60" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
            <path d="M105 60 Q 110 63, 115 60" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
          </>
        ) : (
          <>
            {/* Open eyes (dots) */}
            <circle cx="90" cy="60" r="2.5" fill="#333" />
            <circle cx="110" cy="60" r="2.5" fill="#333" />
          </>
        )}

        {/* Nose */}
        <polygon points="98,68 102,68 100,72" fill={pink} />

        {/* Mouth */}
        <path d="M98 72 Q 100 75, 102 72" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M100 72 L 100 70" fill="none" stroke="#333" strokeWidth="1.5" />

        {/* Whiskers */}
        <line x1="70" y1="68" x2="85" y2="70" stroke={outline} strokeWidth="1" opacity="0.6" />
        <line x1="72" y1="74" x2="85" y2="74" stroke={outline} strokeWidth="1" opacity="0.6" />
        <line x1="115" y1="70" x2="130" y2="68" stroke={outline} strokeWidth="1" opacity="0.6" />
        <line x1="115" y1="74" x2="128" y2="74" stroke={outline} strokeWidth="1" opacity="0.6" />
      </g>

      {/* Reaching Paw (only when reaching) */}
      {state === 'reaching' && (
        <g className="animate-paw-reach">
          <ellipse cx="140" cy="80" rx="10" ry="15" fill={cream} stroke={outline} strokeWidth="1.5" />
          <ellipse cx="140" cy="70" rx="8" ry="10" fill={cream} stroke={outline} strokeWidth="1" />
        </g>
      )}
    </svg>
  );
};

export default function PlayfulCat() {
  const [state, setState] = useState<'lying' | 'wagging' | 'standing' | 'walking' | 'reaching'>('lying');
  const [pos, setPos] = useState({ x: 15, y: 50 });
  const [scale, setScale] = useState(1);
  const [targetPos, setTargetPos] = useState<{ x: number; y: number } | null>(null);

  const posRef = useRef({ x: 15, y: 50 });
  const animRef = useRef<number>(0);
  const stateRef = useRef(state);
  const nextStateTime = useRef(Date.now() + 5000);
  const reachTime = useRef(Date.now());

  // Sync ref
  useEffect(() => { stateRef.current = state; }, [state]);

  // Find text targets
  const findTextTarget = useCallback(() => {
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
  }, []);

  // Main animation loop
  const animate = useCallback(() => {
    const now = Date.now();
    const current = posRef.current;
    const currentState = stateRef.current;

    // State machine logic
    if (now > nextStateTime.current) {
      switch (currentState) {
        case 'lying':
          setState('wagging');
          nextStateTime.current = now + 3000; // Wag for 3s
          break;
        case 'wagging':
          setState('standing');
          nextStateTime.current = now + 1000; // Stand for 1s
          break;
        case 'standing':
          // Pick a target (text or random)
          if (Math.random() > 0.3) {
            const t = findTextTarget();
            if (t) {
              setTargetPos(t);
              setState('reaching');
              reachTime.current = now;
              nextStateTime.current = now + 2000; // Reach for 2s
            } else {
              setState('walking');
              setTargetPos({ x: 10 + Math.random() * 80, y: 30 + Math.random() * 40 });
              nextStateTime.current = now + 4000;
            }
          } else {
            setState('walking');
            setTargetPos({ x: 10 + Math.random() * 80, y: 30 + Math.random() * 40 });
            nextStateTime.current = now + 4000;
          }
          break;
        case 'reaching':
          if (now > reachTime.current + 2000) {
            setState('lying');
            nextStateTime.current = now + 6000 + Math.random() * 4000; // Lie down for 6-10s
          }
          break;
        case 'walking':
          if (targetPos) {
            const dx = targetPos.x - current.x;
            const dy = targetPos.y - current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 3) {
              setState('lying');
              nextStateTime.current = now + 5000 + Math.random() * 5000;
            }
          }
          break;
      }
    }

    // Movement logic (Walking/Reaching)
    if ((currentState === 'walking' || currentState === 'reaching') && targetPos) {
      const dx = targetPos.x - current.x;
      const dy = targetPos.y - current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 0.5) {
        // Slow, lazy walk speed
        const speed = 0.03;
        const vx = (dx / dist) * speed;
        const vy = (dy / dist) * speed;

        current.x += vx;
        current.y += vy;

        // Face direction
        setScale(vx > 0 ? 1 : -1);
      }
      setPos({ x: current.x, y: current.y });
    }

    animRef.current = requestAnimationFrame(animate);
  }, [targetPos, findTextTarget]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes tailWag {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          75% { transform: rotate(-15deg); }
        }
        @keyframes pawReach {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-20deg); }
        }
        .animate-tail-wag {
          transform-origin: 160px 100px;
          animation: tailWag 3s ease-in-out infinite;
        }
        .animate-paw-reach {
          transform-origin: 140px 95px;
          animation: pawReach 1.5s ease-in-out infinite;
        }
      `}</style>

      {/* Cat */}
      <div
        style={{
          position: 'absolute',
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: `translate(-50%, -50%) scaleX(${scale})`,
          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))',
          transition: 'transform 0.5s ease',
        }}
      >
        <CatSVG size={state === 'lying' ? 100 : 130} state={state} />
      </div>
    </div>
  );
}
