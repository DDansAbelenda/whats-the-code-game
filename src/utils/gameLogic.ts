export const generateRandomNumber = (): string => {
  let number = '';
  while (number.length < 3) {
    const digit = Math.floor(Math.random() * 10).toString();
    if (!number.includes(digit)) {
      number += digit;
    }
  }
  return number;
};

export const checkGuess = (guess: string, target: string): { matches: number; positions: number } => {
  let matches = 0;
  let positions = 0;

  // Check for correct positions
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === target[i]) {
      positions++;
    }
  }

  // Check for matches (including correct positions)
  for (let i = 0; i < guess.length; i++) {
    if (target.includes(guess[i])) {
      matches++;
    }
  }

  // Adjust matches to exclude positions (to avoid double counting)
  matches -= positions;

  return { matches, positions };
};