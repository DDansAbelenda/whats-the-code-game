import { GameStats, GameHistory, Difficulty } from '../types/game';

const STORAGE_KEY = 'whatsTheCode_gameStats';

export const getGameStats = (): GameStats => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return {
      gamesPlayed: 0,
      gamesWon: 0,
      gamesLost: 0,
      totalPoints: 0,
      history: []
    };
  }
  return JSON.parse(stored);
};

export const saveGameResult = (
  difficulty: Difficulty,
  attempts: number,
  won: boolean,
  points: number
) => {
  const stats = getGameStats();
  const gameResult: GameHistory = {
    difficulty,
    attempts,
    won,
    points,
    date: new Date().toISOString()
  };

  stats.gamesPlayed++;
  if (won) {
    stats.gamesWon++;
  } else {
    stats.gamesLost++;
  }
  stats.totalPoints += points;
  stats.history.push(gameResult);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  return stats;
};

export const resetGameStats = (): GameStats => {
  const initialStats: GameStats = {
    gamesPlayed: 0,
    gamesWon: 0,
    gamesLost: 0,
    totalPoints: 0,
    history: []
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialStats));
  return initialStats;
};

