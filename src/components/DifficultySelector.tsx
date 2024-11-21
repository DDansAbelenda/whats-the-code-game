import React from 'react';
import { useTranslation } from 'react-i18next';
import { Difficulty } from '../types/game';
import { DIFFICULTY_CONFIG } from '../utils/gameConfig';

interface DifficultySelectorProps {
  selected: Difficulty;
  onSelect: (difficulty: Difficulty) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  selected,
  onSelect
}) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-center text-gray-800 dark:text-white">
        {t('selectDifficulty')}
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {(Object.keys(DIFFICULTY_CONFIG) as Difficulty[]).map((difficulty) => (
          <button
            key={difficulty}
            onClick={() => onSelect(difficulty)}
            className={`
              px-4 py-3 rounded-lg font-medium transition-all
              ${
                selected === difficulty
                  ? 'bg-indigo-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }
            `}
          >
            <div className="text-sm capitalize">{t(difficulty)}</div>
            <div className="text-xs mt-1">
              {t('maxAttempts', { count: DIFFICULTY_CONFIG[difficulty].attempts })}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DifficultySelector;