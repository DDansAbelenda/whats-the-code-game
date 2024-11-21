import { GameStats, GameHistory, Difficulty } from '../types/game';

const STORAGE_KEY = 'whatsTheCode_gameStats';
const RESTART_PENALTY = -5;

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

export const applyRestartPenalty = () => {
  const stats = getGameStats();
  stats.totalPoints += RESTART_PENALTY;
  
  const gameResult: GameHistory = {
    difficulty: 'medium',
    attempts: 0,
    won: false,
    points: RESTART_PENALTY,
    date: new Date().toISOString()
  };
  
  stats.history.push(gameResult);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  return stats;
};