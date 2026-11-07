import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animId;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    // Interactive elements hover detection
    const handleElementHover = () => {
      const interactives = document.querySelectorAll('a, button, input, textarea, [data-interactive]');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    const animateTrail = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      setTrailingPos({ x: currentX, y: currentY });
      animId = requestAnimationFrame(animateTrail);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    animId = requestAnimationFrame(animateTrail);

    handleElementHover();
    const observer = new MutationObserver(handleElementHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Trailing Gold Aura Ring */}
      <div
        className="fixed top-0 left-0 rounded-full border transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${trailingPos.x - (isHovered ? 28 : 18)}px, ${
            trailingPos.y - (isHovered ? 28 : 18)
          }px, 0) scale(${isClicked ? 0.8 : 1})`,
          width: isHovered ? '56px' : '36px',
          height: isHovered ? '56px' : '36px',
          borderColor: isHovered ? 'rgba(198, 161, 91, 0.9)' : 'rgba(198, 161, 91, 0.45)',
          backgroundColor: isHovered ? 'rgba(164, 22, 42, 0.12)' : 'transparent',
          boxShadow: isHovered
            ? '0 0 25px rgba(164, 22, 42, 0.4), 0 0 10px rgba(198, 161, 91, 0.3)'
            : '0 0 12px rgba(198, 161, 91, 0.2)',
          transition: 'width 0.25s, height 0.25s, border-color 0.25s, background-color 0.25s',
        }}
      />

      {/* Sharp Blood Red Core Dot */}
      <div
        className="fixed top-0 left-0 rounded-full bg-[#A4162A]"
        style={{
          transform: `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0)`,
          width: '6px',
          height: '6px',
          boxShadow: '0 0 10px 2px #A4162A, 0 0 4px #FFF',
        }}
      />
    </div>
  );
}
