
import React, { useEffect, useState } from 'react';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (typeof window === 'undefined' || hidden) return null;

  return (
    <div 
      className="fixed pointer-events-none z-50 transition-opacity duration-300"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        opacity: hidden ? 0 : 1,
      }}
    >
      <div className="relative">
        {/* Main cursor */}
        <div 
          className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-cyberpunk-green/70 rounded-full"
          style={{
            boxShadow: '0 0 10px rgba(12, 255, 12, 0.7)',
            opacity: 0.7,
          }}
        />
        
        {/* Trailing effect */}
        <div 
          className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(12,255,12,0.2) 0%, rgba(12,255,12,0) 70%)',
          }}
        />
      </div>
    </div>
  );
};

export default CursorEffect;
