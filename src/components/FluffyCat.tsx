'use client';

import { useEffect, useState } from 'react';

// Fluffy White Cat Component based on reference image
// Features: Bushy tail, confident walk, fluffy fur, elegant movement

export default function FluffyCat() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle glow line under the cat */}
      <div 
        className="absolute bottom-[20%] left-0 right-0 h-px"
        style={{ 
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent 100%)',
          boxShadow: '0 0 10px rgba(255,255,255,0.2)'
        }} 
      />

      {/* Cat Container */}
      <div className="absolute bottom-[20%] right-[15%]" style={{ transform: 'translateY(50%)' }}>
        <svg 
          width="140" 
          height="120" 
          viewBox="0 0 140 120" 
          className="overflow-visible"
          style={{ filter: 'drop-shadow(0 4px 15px rgba(0,0,0,0.4))' }}
        >
          <defs>
            {/* Fur gradient for fluffy look */}
            <radialGradient id="furGradient" cx="40%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F8F8F8" />
              <stop offset="100%" stopColor="#E8E8E8" />
            </radialGradient>
            
            {/* Tail gradient */}
            <linearGradient id="tailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F0F0F0" />
            </linearGradient>

            <style>{`
              .cat-group {
                animation: bodyBob 2s ease-in-out infinite;
              }
              .leg {
                transform-origin: top center;
              }
              .leg-fl { animation: walkFL 1.8s infinite ease-in-out; }
              .leg-fr { animation: walkFR 1.8s infinite ease-in-out; }
              .leg-bl { animation: walkBL 1.8s infinite ease-in-out; }
              .leg-br { animation: walkBR 1.8s infinite ease-in-out; }
              .tail { 
                transform-origin: 105px 35px; 
                animation: tailWag 3.5s infinite ease-in-out; 
              }
              .ear-l { transform-origin: 55px 20px; animation: earTwitchL 4s infinite ease-in-out; }
              .ear-r { transform-origin: 75px 20px; animation: earTwitchR 5s infinite ease-in-out; }
              
              @keyframes bodyBob {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-3px); }
              }
              @keyframes walkFL {
                0%, 100% { transform: rotate(20deg); }
                50% { transform: rotate(-15deg); }
              }
              @keyframes walkFR {
                0%, 100% { transform: rotate(-15deg); }
                50% { transform: rotate(20deg); }
              }
              @keyframes walkBL {
                0%, 100% { transform: rotate(-15deg); }
                50% { transform: rotate(20deg); }
              }
              @keyframes walkBR {
                0%, 100% { transform: rotate(20deg); }
                50% { transform: rotate(-15deg); }
              }
              @keyframes tailWag {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(12deg); }
                75% { transform: rotate(-8deg); }
              }
              @keyframes earTwitchL {
                0%, 90%, 100% { transform: rotate(0deg); }
                95% { transform: rotate(8deg); }
              }
              @keyframes earTwitchR {
                0%, 85%, 100% { transform: rotate(0deg); }
                90% { transform: rotate(-6deg); }
              }
            `}</style>
          </defs>

          <g className="cat-group">
            {/* Bushy Tail */}
            <path 
              d="M 105 35 Q 130 25 135 10 Q 140 -5 125 0 Q 110 5 105 15" 
              fill="url(#tailGradient)" 
              stroke="#D0D0D0" 
              strokeWidth="1"
              className="tail"
            />
            {/* Tail fluff extra */}
            <circle cx="132" cy="8" r="8" fill="url(#tailGradient)" opacity="0.9" />
            <circle cx="128" cy="18" r="6" fill="url(#tailGradient)" opacity="0.8" />

            {/* Body - Fluffy and rounded */}
            <path 
              d="M 25 70 Q 20 50 40 45 Q 55 40 70 45 Q 90 50 105 55 Q 115 60 110 75 Q 105 85 90 80 Q 70 85 50 80 Q 35 80 25 70 Z" 
              fill="url(#furGradient)" 
              stroke="#D8D8D8" 
              strokeWidth="1.5"
            />
            {/* Fur texture lines */}
            <path d="M 35 65 Q 50 60 65 65" fill="none" stroke="#E0E0E0" strokeWidth="1" opacity="0.6" />
            <path d="M 70 68 Q 85 63 100 68" fill="none" stroke="#E0E0E0" strokeWidth="1" opacity="0.6" />
            <path d="M 45 75 Q 60 70 75 75" fill="none" stroke="#E0E0E0" strokeWidth="1" opacity="0.5" />

            {/* Head - Round and fluffy */}
            <circle cx="45" cy="45" r="22" fill="url(#furGradient)" stroke="#D8D8D8" strokeWidth="1.5" />
            {/* Head fluff */}
            <path d="M 28 35 Q 35 25 45 30" fill="none" stroke="#E0E0E0" strokeWidth="1" opacity="0.5" />
            <path d="M 55 30 Q 65 25 62 38" fill="none" stroke="#E0E0E0" strokeWidth="1" opacity="0.5" />
            
            {/* Cheeks */}
            <circle cx="32" cy="52" r="8" fill="url(#furGradient)" opacity="0.7" />
            <circle cx="58" cy="52" r="8" fill="url(#furGradient)" opacity="0.7" />

            {/* Ears */}
            <g className="ear-l">
              <path d="M 32 30 L 38 15 L 44 28" fill="url(#furGradient)" stroke="#D8D8D8" strokeWidth="1" />
              <path d="M 35 28 L 38 18 L 41 27" fill="#FFE4E1" opacity="0.8" />
            </g>
            <g className="ear-r">
              <path d="M 46 28 L 52 15 L 58 30" fill="url(#furGradient)" stroke="#D8D8D8" strokeWidth="1" />
              <path d="M 49 27 L 52 18 L 55 28" fill="#FFE4E1" opacity="0.8" />
            </g>

            {/* Face Details */}
            {/* Eyes - Sleepy/Confident */}
            <ellipse cx="38" cy="42" rx="3" ry="2" fill="#333" />
            <ellipse cx="52" cy="42" rx="3" ry="2" fill="#333" />
            {/* Eye shine */}
            <circle cx="37" cy="41" r="1" fill="white" opacity="0.8" />
            <circle cx="51" cy="41" r="1" fill="white" opacity="0.8" />
            
            {/* Nose */}
            <path d="M 43 48 L 47 48 L 45 51 Z" fill="#FFB6C1" />
            
            {/* Mouth */}
            <path d="M 43 51 Q 45 53 47 51" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 45 51 L 45 49" fill="none" stroke="#333" strokeWidth="1" />

            {/* Whiskers */}
            <line x1="25" y1="48" x2="35" y2="50" stroke="#D0D0D0" strokeWidth="1" opacity="0.7" />
            <line x1="25" y1="52" x2="35" y2="52" stroke="#D0D0D0" strokeWidth="1" opacity="0.7" />
            <line x1="55" y1="50" x2="65" y2="48" stroke="#D0D0D0" strokeWidth="1" opacity="0.7" />
            <line x1="55" y1="52" x2="65" y2="52" stroke="#D0D0D0" strokeWidth="1" opacity="0.7" />

            {/* Legs - Fluffy paws */}
            {/* Front Left */}
            <g className="leg leg-fl">
              <path d="M 35 75 L 35 95" stroke="url(#furGradient)" strokeWidth="8" strokeLinecap="round" />
              <ellipse cx="35" cy="95" rx="6" ry="4" fill="#F0F0F0" stroke="#D8D8D8" strokeWidth="1" />
            </g>
            {/* Front Right */}
            <g className="leg leg-fr">
              <path d="M 45 75 L 45 95" stroke="url(#furGradient)" strokeWidth="8" strokeLinecap="round" />
              <ellipse cx="45" cy="95" rx="6" ry="4" fill="#F0F0F0" stroke="#D8D8D8" strokeWidth="1" />
            </g>
            {/* Back Left */}
            <g className="leg leg-bl">
              <path d="M 90 75 L 90 95" stroke="url(#furGradient)" strokeWidth="8" strokeLinecap="round" />
              <ellipse cx="90" cy="95" rx="6" ry="4" fill="#F0F0F0" stroke="#D8D8D8" strokeWidth="1" />
            </g>
            {/* Back Right */}
            <g className="leg leg-br">
              <path d="M 100 75 L 100 95" stroke="url(#furGradient)" strokeWidth="8" strokeLinecap="round" />
              <ellipse cx="100" cy="95" rx="6" ry="4" fill="#F0F0F0" stroke="#D8D8D8" strokeWidth="1" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
