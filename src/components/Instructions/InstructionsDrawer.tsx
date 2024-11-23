import React from 'react';
import { useTranslation } from 'react-i18next';
import { X, HelpCircle } from 'lucide-react';
import DetailedInstructions from './DetailedInstructions';
import Drawer from '../Drawer';

interface InstructionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstructionsDrawer: React.FC<InstructionsDrawerProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
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
    </Drawer>

  );
};

export default InstructionsDrawer;