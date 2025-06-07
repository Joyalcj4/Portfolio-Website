import { useState, useRef } from 'react';

const RadialMenu = ({ onSelect }) => {
  const [activeSegment, setActiveSegment] = useState(null);
  const [showTooltip, setShowTooltip] = useState(true);
  const timerRef = useRef(null);

  const handleHoldStart = (position) => {
    setActiveSegment(position);
    timerRef.current = setTimeout(() => {
      if (onSelect) onSelect(position);
      setShowTooltip(false);
      setActiveSegment(null);
    }, 1000);
  };

  const handleHoldEnd = () => {
    clearTimeout(timerRef.current);
    setActiveSegment(null);
    setTimeout(() => {
      if (!showTooltip) {
        setShowTooltip(true)
      }
    }, 300);
  };

  const renderSegment = (position, label, segmentStyle, quote) => (
    <div
      onMouseDown={() => handleHoldStart(position)}
      onMouseUp={handleHoldEnd}
      onMouseLeave={handleHoldEnd}
      onTouchStart={() => handleHoldStart(position)}
      onTouchEnd={handleHoldEnd}
      className={`radial-segment wheel-gradient group absolute ${segmentStyle}`}
    >
      <div className="flex flex-col items-center">
        <span className="radial-label sm:text-lg md:text-xl sm:group-hover:text-2xl sm:group-hover:text-white">
          {label}
        </span>
        <span className="opacity-0 text-[10px] sm:text-base text-white group-hover:opacity-100">
          {quote}
        </span>

        <div className="radial-tooltip">
          <p className="text-[10px] sm:text-sm font-light text-center">PRESS AND HOLD</p>
          <div className="radial-progress-bar">
            <div
              className={`radial-progress-fill ${showTooltip && activeSegment === position ? 'w-full' : 'w-0'}`}
            ></div>
          </div>
        </div>
      </div>

    </div>
  );

  return (
    <div className="relative w-60 h-60 sm:w-102 sm:h-102 md:w-156 md:h-156 border rounded-full shadow-2xl flex items-center justify-center">
      {renderSegment('projects', 'Projects', 'top-0 left-0 rounded-tl-full origin-bottom-right', 'See my works')}
      {renderSegment('skills', 'Skills', 'top-0 right-0 rounded-tr-full origin-bottom-left', 'Always learning')}
      {renderSegment('about', 'About', 'bottom-0 left-0 rounded-bl-full origin-top-right', 'The story')}
      {renderSegment('contact', 'Contact', 'bottom-0 right-0 rounded-br-full origin-top-left', 'Keep in touch')}
    </div>
  );
};

export default RadialMenu;
