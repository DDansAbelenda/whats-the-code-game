import React from 'react';
import { useTranslation } from 'react-i18next';
import { GameStats as GameStatsType } from '../types/game';
import { Trophy, Target, XCircle, Coins } from 'lucide-react';

interface GameStatsProps {
  stats: GameStatsType;
}

const GameStats: React.FC<GameStatsProps> = ({ stats }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 space-y-4">
      <h2 className="text-lg font-semibold text-center text-gray-800 dark:text-white">
        {t('gameStats')}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
          <Target className="w-5 h-5" />
          <span>{t('gamesPlayed')}: {stats.gamesPlayed}</span>
        </div>
        <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
          <Trophy className="w-5 h-5" />
          <span>{t('gamesWon')}: {stats.gamesWon}</span>
        </div>
        <div className="flex items-center space-x-2 text-red-600 dark:text-red-400">
          <XCircle className="w-5 h-5" />
          <span>{t('gamesLost')}: {stats.gamesLost}</span>
        </div>
        <div className="flex items-center space-x-2 text-yellow-600 dark:text-yellow-400">
          <Coins className="w-5 h-5" />
          <span>{t('totalPoints')}: {stats.totalPoints}</span>
        </div>
      </div>
    </div>
  );
};

export default GameStats;