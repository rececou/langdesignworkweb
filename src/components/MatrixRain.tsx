'use client';

import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  color?: string;
  density?: number;
  speed?: number;
  opacity?: string; // Tailwind opacity class, e.g. 'opacity-20'
}

export default function MatrixRain({ 
  color = '#FF6B6B', 
  density = 15, 
  speed = 30,
  opacity = 'opacity-20'
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };
    
    resize();
    window.addEventListener('resize', resize);

    const columns = Math.floor(canvas.width / density);
    const drops = Array(columns).fill(1);
    const chars = '01'.split('');

    const draw = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${density * 0.8}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * density;
        const y = drops[i] * density;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, speed);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, [color, density, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${opacity} pointer-events-none`}
    />
  );
}
