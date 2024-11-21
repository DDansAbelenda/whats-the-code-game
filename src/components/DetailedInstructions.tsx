import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

const DetailedInstructions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium text-gray-700 dark:text-gray-300">
            {t('objective')}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {t('objectiveDescription')}
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium text-gray-700 dark:text-gray-300">
            {t('hints')}
          </h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
              <p className="text-gray-600 dark:text-gray-400">
                {t('correctPositionHint')}
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
              <p className="text-gray-600 dark:text-gray-400">
                {t('wrongPositionHint')}
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
              <p className="text-gray-600 dark:text-gray-400">
                {t('noMatchHint')}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium text-gray-700 dark:text-gray-300">
            {t('scoring')}
          </h3>
          <div className="space-y-2 text-gray-600 dark:text-gray-400">
            <p>{t('scoringEasy')}</p>
            <p>{t('scoringMedium')}</p>
            <p>{t('scoringHard')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedInstructions;