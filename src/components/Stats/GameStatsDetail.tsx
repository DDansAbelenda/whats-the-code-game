import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trophy, Target, XCircle, Coins, Clock } from 'lucide-react';
import { GameStats } from '../../types/game';

interface GameStatsDetailProps {
  stats: GameStats;
}

const GameStatsDetail: React.FC<GameStatsDetailProps> = ({ stats }) => {
  const { t } = useTranslation();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Target className="w-5 h-5" />
            <span>{t('gamesPlayed')}: {stats.gamesPlayed}</span>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
            <Trophy className="w-5 h-5" />
            <span>{t('gamesWon')}: {stats.gamesWon}</span>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-red-600 dark:text-red-400">
            <XCircle className="w-5 h-5" />
            <span>{t('gamesLost')}: {stats.gamesLost}</span>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-yellow-600 dark:text-yellow-400">
            <Coins className="w-5 h-5" />
            <span>{t('totalPoints')}: {stats.totalPoints}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {t('recentGames')}
        </h3>
        <div className="space-y-3">
          {stats.history.slice(-5).reverse().map((game, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg flex items-center justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  {game.won ? (
                    <Trophy className="w-4 h-4 text-green-500" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-500" />
                  )}
                  <span className="capitalize text-gray-700 dark:text-gray-300">
                    {t(game.difficulty)}
                  </span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{formatDate(game.date)}</span>
                </div>
              </div>
              <div className={`font-semibold ${
                game.points > 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {game.points > 0 ? '+' : ''}{game.points}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameStatsDetail;