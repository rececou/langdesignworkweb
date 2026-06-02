'use client';

import { useEffect, useState } from 'react';

// Cinematic Rolling White Ball Component
// A soft glowing white ball that rolls slowly across the hero section
// Higher z-index to stay above buttons, mobile-friendly

export default function FluffyCat() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 20 }}>
      {/* White line */}
      <div 
        className="absolute bottom-[18%] left-0 right-0 h-px"
        style={{ 
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 20%, rgba(255,255,255,0.3) 80%, transparent 100%)',
          boxShadow: '0 0 15px rgba(255,255,255,0.4)'
        }} 
      />

      {/* Rolling Ball */}
      <div className="absolute bottom-[18%] right-[15%]" style={{ transform: 'translateY(50%)' }}>
        <div
          style={{
            width: 45,
            height: 45,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #F0F0F0 50%, #D0D0D0 100%)',
            boxShadow: '0 0 25px rgba(255,255,255,0.7), 0 0 50px rgba(255,255,255,0.3), 0 4px 15px rgba(0,0,0,0.3), inset 0 -5px 10px rgba(0,0,0,0.1)',
            animation: 'rollMove 12s ease-in-out infinite, rollSpin 4s linear infinite, glowPulse 3s ease-in-out infinite',
            position: 'relative',
            zIndex: 30,
          }}
        />
      </div>

      {/* Sparkle trail */}
      <div className="absolute bottom-[18%] right-[15%]" style={{ transform: 'translateY(50%)' }}>
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#FFFFFF',
            boxShadow: '0 0 10px rgba(255,255,255,0.9)',
            animation: 'sparkleTrail 12s ease-in-out infinite',
            position: 'absolute',
            opacity: 0.6,
          }}
        />
        <div
          style={{
            width: 5,
            height: 5,
            borderRadius: '50%',
            background: '#C8A2FF',
            boxShadow: '0 0 8px rgba(200,162,255,0.8)',
            animation: 'sparkleTrail2 12s ease-in-out infinite',
            position: 'absolute',
            opacity: 0.5,
          }}
        />
      </div>

      <style jsx>{`
        @keyframes rollMove {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-25vw); }
        }
        @keyframes rollSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes glowPulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
        }
        @keyframes sparkleTrail {
          0%, 100% { opacity: 0; transform: translateX(45px); }
          50% { opacity: 0.8; transform: translateX(-10px); }
        }
        @keyframes sparkleTrail2 {
          0%, 100% { opacity: 0; transform: translateX(40px) translateY(-10px); }
          50% { opacity: 0.6; transform: translateX(-15px) translateY(5px); }
        }
      `}</style>
    </div>
  );
}
