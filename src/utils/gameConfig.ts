import { Difficulty, GameConfig } from '../types/game';

export const DIFFICULTY_CONFIG: Record<Difficulty, GameConfig> = {
  easy: {
    attempts: 10,
    winPoints: 10,
    losePoints: -5
  },
  medium: {
    attempts: 7,
    winPoints: 15,
    losePoints: -10
  },
  hard: {
    attempts: 5,
    winPoints: 20,
    losePoints: -15
  }
};