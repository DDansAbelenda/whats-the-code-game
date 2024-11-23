import { GameStats, GameHistory, Difficulty } from '../types/game';
import { v4 as uuidv4 } from 'uuid';

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
  points: number,
  targetNumber: string
) => {
  const stats = getGameStats();
  const gameResult: GameHistory = {
    id: uuidv4(),
    difficulty,
    attempts,
    won,
    points,
    targetNumber,
    date: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`
  };

  stats.gamesPlayed++;
  if (won) {
    stats.gamesWon++;
  } else {
    stats.gamesLost++;
  }
  stats.totalPoints += points;
  stats.history.unshift(gameResult);

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

export const deleteGameResult = (index: string) => {
  const stats = getGameStats();
  const newHistory = stats.history.filter(game => game.id !== index);
  const newStats: GameStats = {
    ...stats,
    history: newHistory
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newStats));
  return newStats
}


