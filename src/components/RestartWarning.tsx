import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertTriangle } from 'lucide-react';

interface RestartWarningProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const RestartWarning: React.FC<RestartWarningProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onCancel} />
      <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl">
        <div className="flex items-center space-x-3 text-yellow-500 mb-4">
          <AlertTriangle className="w-6 h-6" />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {t('restartWarning')}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {t('restartPenaltyWarning')}
        </p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            {t('cancel')}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            {t('confirmRestart')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestartWarning;