export type Difficulty = 'easy' | 'medium' | 'hard';

export interface GameConfig {
  attempts: number;
  winPoints: number;
  losePoints: number;
}

export interface GameHistory {
  id: string,
  difficulty: Difficulty;
  attempts: number;
  won: boolean;
  points: number;
  targetNumber: string;
  date: string;
}

export interface GameStats {
  gamesPlayed: number;
  gamesWon: number;
  gamesLost: number;
  totalPoints: number;
  history: GameHistory[];
}