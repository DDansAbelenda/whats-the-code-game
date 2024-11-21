import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded-md whitespace-nowrap -bottom-8 left-1/2 transform -translate-x-1/2">
          {content}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-900" />
        </div>
      )}
    </div>
  );
};

export default Tooltip;