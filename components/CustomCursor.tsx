
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
      );
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: position.x - 8,
      y: position.y - 8,
      height: 16,
      width: 16,
      backgroundColor: 'rgba(30, 64, 175, 0.5)',
      mixBlendMode: 'difference' as const,
    },
    pointer: {
      x: position.x - 16,
      y: position.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      mixBlendMode: 'difference' as const,
      border: '2px solid #1e40af',
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full z-[9999] pointer-events-none hidden md:block"
      variants={cursorVariants}
      animate={isPointer ? 'pointer' : 'default'}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
};

export default CustomCursor;
