import React from 'react';
import { useTranslation } from 'react-i18next';
import { X, HelpCircle } from 'lucide-react';
import DetailedInstructions from './DetailedInstructions';

interface InstructionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstructionsDrawer: React.FC<InstructionsDrawerProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <HelpCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {t('howToPlay')}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <DetailedInstructions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionsDrawer;