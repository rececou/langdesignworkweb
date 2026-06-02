'use client';

import { useEffect, useState } from 'react';

// Cinematic Rolling White Ball Component
// A soft glowing white ball that rolls slowly along the line from right to left

export default function FluffyCat() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* White line */}
      <div 
        className="absolute bottom-[20%] left-0 right-0 h-px"
        style={{ 
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 20%, rgba(255,255,255,0.3) 80%, transparent 100%)',
          boxShadow: '0 0 15px rgba(255,255,255,0.4)'
        }} 
      />

      {/* Rolling Ball Container */}
      <div className="absolute bottom-[20%] right-[15%]" style={{ transform: 'translateY(50%)' }}>
        <div
          style={{
            width: 45,
            height: 45,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #F0F0F0 50%, #D0D0D0 100%)',
            boxShadow: '0 0 20px rgba(255,255,255,0.6), 0 4px 15px rgba(0,0,0,0.3), inset 0 -5px 10px rgba(0,0,0,0.1)',
            animation: 'roll 3s linear infinite, pulse 2s ease-in-out infinite',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes roll {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.15); }
        }
      `}</style>
    </div>
  );
}
