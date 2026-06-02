'use client';

import { useEffect, useState } from 'react';

// Elegant Fluffy White Cat Component
// Based on reference image: Fluffy white Persian-style cat, bushy tail, confident walk

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
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.2) 80%, transparent 100%)',
          boxShadow: '0 0 15px rgba(255,255,255,0.3)'
        }} 
      />

      {/* Cat Container - Positioned on the right side */}
      <div className="absolute bottom-[20%] right-[15%]" style={{ transform: 'translateY(50%)' }}>
        <svg 
          width="160" 
          height="130" 
          viewBox="0 0 160 130" 
          className="overflow-visible"
          style={{ filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.4))' }}
        >
          <defs>
            {/* Fluffy fur gradient */}
            <radialGradient id="fluffyFur" cx="40%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#F8F8F8" />
              <stop offset="100%" stopColor="#E8E8E8" />
            </radialGradient>
            
            {/* Tail gradient */}
            <linearGradient id="fluffyTail" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F0F0F0" />
            </linearGradient>

            <style>{`
              .cat-body {
                animation: bodyBob 2.5s ease-in-out infinite;
              }
              .leg {
                transform-origin: top center;
              }
              .leg-fl { animation: walkFL 2s infinite ease-in-out; }
              .leg-fr { animation: walkFR 2s infinite ease-in-out; }
              .leg-bl { animation: walkBL 2s infinite ease-in-out; }
              .leg-br { animation: walkBR 2s infinite ease-in-out; }
              .tail { 
                transform-origin: 120px 40px; 
                animation: tailWag 4s infinite ease-in-out; 
              }
              .ear-l { transform-origin: 50px 25px; animation: earTwitchL 5s infinite ease-in-out; }
              .ear-r { transform-origin: 70px 25px; animation: earTwitchR 6s infinite ease-in-out; }
              .fur-puff { animation: furBreathe 3s ease-in-out infinite; }
              
              @keyframes bodyBob {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-4px); }
              }
              @keyframes walkFL {
                0%, 100% { transform: rotate(18deg); }
                50% { transform: rotate(-12deg); }
              }
              @keyframes walkFR {
                0%, 100% { transform: rotate(-12deg); }
                50% { transform: rotate(18deg); }
              }
              @keyframes walkBL {
                0%, 100% { transform: rotate(-12deg); }
                50% { transform: rotate(18deg); }
              }
              @keyframes walkBR {
                0%, 100% { transform: rotate(18deg); }
                50% { transform: rotate(-12deg); }
              }
              @keyframes tailWag {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(8deg); }
                75% { transform: rotate(-5deg); }
              }
              @keyframes earTwitchL {
                0%, 90%, 100% { transform: rotate(0deg); }
                95% { transform: rotate(6deg); }
              }
              @keyframes earTwitchR {
                0%, 85%, 100% { transform: rotate(0deg); }
                90% { transform: rotate(-5deg); }
              }
              @keyframes furBreathe {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.02); }
              }
            `}</style>
          </defs>

          <g className="cat-body">
            {/* Bushy Tail - High and curved */}
            <g className="tail">
              <path 
                d="M 120 40 Q 145 30 150 15 Q 155 0 140 5 Q 125 10 115 25" 
                fill="url(#fluffyTail)" 
                stroke="#D8D8D8" 
                strokeWidth="1"
              />
              {/* Extra tail fluff */}
              <circle cx="148" cy="10" r="10" fill="url(#fluffyTail)" opacity="0.9" />
              <circle cx="142" cy="20" r="8" fill="url(#fluffyTail)" opacity="0.8" />
            </g>

            {/* Main Body - Fluffy and elongated */}
            <g className="fur-puff">
              <path 
                d="M 30 75 Q 25 50 45 45 Q 60 40 80 45 Q 105 50 125 55 Q 135 60 130 75 Q 125 85 110 80 Q 80 85 50 80 Q 35 80 30 75 Z" 
                fill="url(#fluffyFur)" 
                stroke="#D0D0D0" 
                strokeWidth="1.5"
              />
              {/* Fur texture details */}
              <path d="M 40 70 Q 60 65 80 70" fill="none" stroke="#E0E0E0" strokeWidth="1" opacity="0.6" />
              <path d="M 90 72 Q 110 67 125 72" fill="none" stroke="#E0E0E0" strokeWidth="1" opacity="0.6" />
              <path d="M 50 60 Q 65 55 80 60" fill="none" stroke="#E0E0E0" strokeWidth="1" opacity="0.5" />
            </g>

            {/* Head - Round and fluffy */}
            <g className="fur-puff">
              <circle cx="50" cy="45" r="24" fill="url(#fluffyFur)" stroke="#D0D0D0" strokeWidth="1.5" />
              {/* Head fluff */}
              <path d="M 30 35 Q 40 25 50 30" fill="none" stroke="#E0E0E0" strokeWidth="1" opacity="0.5" />
              <path d="M 60 30 Q 70 25 68 40" fill="none" stroke="#E0E0E0" strokeWidth="1" opacity="0.5" />
              
              {/* Cheeks */}
              <circle cx="35" cy="52" r="10" fill="url(#fluffyFur)" opacity="0.7" />
              <circle cx="65" cy="52" r="10" fill="url(#fluffyFur)" opacity="0.7" />

              {/* Ears */}
              <g className="ear-l">
                <path d="M 35 30 L 42 15 L 48 28" fill="url(#fluffyFur)" stroke="#D0D0D0" strokeWidth="1" />
                <path d="M 38 28 L 42 18 L 45 27" fill="#FFE4E1" opacity="0.8" />
              </g>
              <g className="ear-r">
                <path d="M 52 28 L 58 15 L 65 30" fill="url(#fluffyFur)" stroke="#D0D0D0" strokeWidth="1" />
                <path d="M 55 27 L 58 18 L 62 28" fill="#FFE4E1" opacity="0.8" />
              </g>

              {/* Face Details */}
              {/* Eyes - Sleepy/Confident */}
              <ellipse cx="42" cy="42" rx="3.5" ry="2.5" fill="#333" />
              <ellipse cx="58" cy="42" rx="3.5" ry="2.5" fill="#333" />
              {/* Eye shine */}
              <circle cx="41" cy="41" r="1.2" fill="white" opacity="0.9" />
              <circle cx="57" cy="41" r="1.2" fill="white" opacity="0.9" />
              
              {/* Nose */}
              <path d="M 47 48 L 53 48 L 50 52 Z" fill="#FFB6C1" />
              
              {/* Mouth */}
              <path d="M 47 52 Q 50 55 53 52" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 50 52 L 50 50" fill="none" stroke="#333" strokeWidth="1" />

              {/* Whiskers */}
              <line x1="25" y1="48" x2="35" y2="50" stroke="#D0D0D0" strokeWidth="1" opacity="0.7" />
              <line x1="25" y1="52" x2="35" y2="52" stroke="#D0D0D0" strokeWidth="1" opacity="0.7" />
              <line x1="65" y1="50" x2="75" y2="48" stroke="#D0D0D0" strokeWidth="1" opacity="0.7" />
              <line x1="65" y1="52" x2="75" y2="52" stroke="#D0D0D0" strokeWidth="1" opacity="0.7" />
            </g>

            {/* Legs - Fluffy paws */}
            {/* Front Left */}
            <g className="leg leg-fl">
              <path d="M 40 80 L 40 105" stroke="url(#fluffyFur)" strokeWidth="10" strokeLinecap="round" />
              <ellipse cx="40" cy="105" rx="8" ry="5" fill="#F0F0F0" stroke="#D0D0D0" strokeWidth="1" />
            </g>
            {/* Front Right */}
            <g className="leg leg-fr">
              <path d="M 52 80 L 52 105" stroke="url(#fluffyFur)" strokeWidth="10" strokeLinecap="round" />
              <ellipse cx="52" cy="105" rx="8" ry="5" fill="#F0F0F0" stroke="#D0D0D0" strokeWidth="1" />
            </g>
            {/* Back Left */}
            <g className="leg leg-bl">
              <path d="M 105 80 L 105 105" stroke="url(#fluffyFur)" strokeWidth="10" strokeLinecap="round" />
              <ellipse cx="105" cy="105" rx="8" ry="5" fill="#F0F0F0" stroke="#D0D0D0" strokeWidth="1" />
            </g>
            {/* Back Right */}
            <g className="leg leg-br">
              <path d="M 118 80 L 118 105" stroke="url(#fluffyFur)" strokeWidth="10" strokeLinecap="round" />
              <ellipse cx="118" cy="105" rx="8" ry="5" fill="#F0F0F0" stroke="#D0D0D0" strokeWidth="1" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
