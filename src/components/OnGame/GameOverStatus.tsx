import React from 'react';
import { Trophy, XCircle, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface GameOverStatusProps {
  won: boolean;
  targetNumber: string;
  onNewGame: () => void;
  onReturnHome: () => void;
}

const GameOverStatus: React.FC<GameOverStatusProps> = ({ won, targetNumber, onNewGame, onReturnHome }) => {
  const { t } = useTranslation();

  return (
    <div className="text-center space-y-4">
      {won ? (
        <div className="space-y-4">
          <Trophy className="w-20 h-20 text-yellow-400 mx-auto animate-bounce" />
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse">
              {t('congratulations')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">{t('foundNumber')}</p>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <XCircle className="w-16 h-16 text-red-500 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{t('gameOver')}</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('theNumberWas')}{' '}
            <span className="font-mono font-bold text-xl">{targetNumber}</span>
          </p>
        </div>
      )}
      
      <div className="flex justify-center space-x-4">
        <button
          onClick={onReturnHome}
          className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors flex items-center space-x-2"
        >
          <Home className="w-5 h-5" />
          <span>{t('returnHome')}</span>
        </button>
        <button
          onClick={onNewGame}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
        >
          {t('playAgain')}
        </button>
      </div>
    </div>
  );
};

export default GameOverStatus;