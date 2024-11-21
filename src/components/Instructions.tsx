import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Instructions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {t('instructions')}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300">
            {t('instructionsText')}
          </p>
        </div>
      )}
    </div>
  );
};

export default Instructions;