import React from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { GameStats } from '../../types/game';
import GameStatsDetail from './GameStatsDetail';
import Drawer from '../Drawer';

interface StatsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  stats: GameStats;
  setStats: (stats: GameStats) => void;
}

const StatsDrawer: React.FC<StatsDrawerProps> = ({ isOpen, onClose, stats, setStats }) => {
  const { t } = useTranslation();

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {t('gameStats')}
        </h2>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <GameStatsDetail stats={stats} setStats={setStats} />
      </div>
    </Drawer>

  );
};

export default StatsDrawer;