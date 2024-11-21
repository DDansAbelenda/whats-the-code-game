export type Difficulty = 'easy' | 'medium' | 'hard';

export interface GameConfig {
  attempts: number;
  winPoints: number;
  losePoints: number;
}

export interface GameHistory {
  difficulty: Difficulty;
  attempts: number;
  won: boolean;
  points: number;
  date: string;
}

export interface GameStats {
  gamesPlayed: number;
  gamesWon: number;
  gamesLost: number;
  totalPoints: number;
  history: GameHistory[];
}