'use client';

import { useEffect, useState } from 'react';

// Walking Cat Silhouette Component
// Based on user reference: Black cat walking left on a white line, slow pace, "treadmill" effect.

export default function WalkingCatLine() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* White Line across the banner */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/40" 
           style={{ 
             boxShadow: '0 0 8px rgba(255,255,255,0.3)',
             bottom: '20%' // Position line slightly above bottom for visual balance
           }} 
      />
      {/* Fading gradient for line ends */}
      <div className="absolute bottom-[20%] left-0 right-0 h-8 bg-gradient-to-r from-transparent via-transparent to-transparent" 
           style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.05) 80%, transparent 100%)' }} 
      />

      {/* Cat Container - Positioned on the right side, facing left */}
      <div className="absolute bottom-[20%] right-[15%]" style={{ transform: 'translateY(50%)' }}>
        {/* Cat SVG with walking animation */}
        <svg 
          width="100" 
          height="80" 
          viewBox="0 0 100 80" 
          className="overflow-visible"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
        >
          <defs>
            <style>{`
              .leg {
                transform-origin: top center;
              }
              .leg-fl { animation: walkFL 1.6s infinite ease-in-out; }
              .leg-fr { animation: walkFR 1.6s infinite ease-in-out; }
              .leg-bl { animation: walkBL 1.6s infinite ease-in-out; }
              .leg-br { animation: walkBR 1.6s infinite ease-in-out; }
              .tail { transform-origin: 85px 25px; animation: tailWag 3s infinite ease-in-out; }
              
              @keyframes walkFL {
                0%, 100% { transform: rotate(15deg); }
                50% { transform: rotate(-15deg); }
              }
              @keyframes walkFR {
                0%, 100% { transform: rotate(-15deg); }
                50% { transform: rotate(15deg); }
              }
              @keyframes walkBL {
                0%, 100% { transform: rotate(-15deg); }
                50% { transform: rotate(15deg); }
              }
              @keyframes walkBR {
                0%, 100% { transform: rotate(15deg); }
                50% { transform: rotate(-15deg); }
              }
              @keyframes tailWag {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(10deg); }
              }
              @keyframes bodyBob {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-2px); }
              }
              .cat-body { animation: bodyBob 0.8s infinite ease-in-out; }
            `}</style>
          </defs>

          <g className="cat-body">
            {/* Tail */}
            <path 
              d="M 85 25 Q 95 10 90 5 Q 85 0 80 5" 
              fill="none" 
              stroke="black" 
              strokeWidth="4" 
              strokeLinecap="round"
              className="tail"
            />

            {/* Body */}
            <path 
              d="M 20 45 Q 20 25 40 25 Q 50 25 55 30 Q 65 30 70 25 Q 80 25 85 35 Q 90 45 85 55 Q 80 60 70 55 Q 60 55 50 50 Q 30 50 20 45 Z" 
              fill="black" 
            />

            {/* Head */}
            <path 
              d="M 20 40 Q 10 40 5 30 Q 0 20 10 15 Q 20 10 30 20 Q 35 25 30 35 Q 25 40 20 40 Z" 
              fill="black" 
            />
            {/* Ears */}
            <path d="M 10 15 L 15 5 L 20 15 Z" fill="black" />
            <path d="M 20 12 L 25 2 L 30 12 Z" fill="black" />

            {/* Legs (Animated) */}
            {/* Front Left */}
            <path 
              d="M 25 50 L 25 70" 
              stroke="black" 
              strokeWidth="4" 
              strokeLinecap="round"
              className="leg leg-fl"
            />
            {/* Front Right */}
            <path 
              d="M 35 50 L 35 70" 
              stroke="black" 
              strokeWidth="4" 
              strokeLinecap="round"
              className="leg leg-fr"
            />
            {/* Back Left */}
            <path 
              d="M 75 50 L 75 70" 
              stroke="black" 
              strokeWidth="4" 
              strokeLinecap="round"
              className="leg leg-bl"
            />
            {/* Back Right */}
            <path 
              d="M 85 50 L 85 70" 
              stroke="black" 
              strokeWidth="4" 
              strokeLinecap="round"
              className="leg leg-br"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
