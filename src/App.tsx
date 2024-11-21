import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useTranslation } from 'react-i18next';
import GuessForm from './components/OnGame/GuessForm';
import GuessList from './components/OnGame/GuessList';
import GameOverStatus from './components/OnGame/GameOverStatus';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import DifficultySelector from './components/DifficultySelector';
import GameStats from './components/Stats/GameStats';
import { generateRandomNumber, checkGuess } from './utils/gameLogic';
import { Difficulty } from './types/game';
import { DIFFICULTY_CONFIG } from './utils/gameConfig';
import { getGameStats, saveGameResult, resetGameStats } from './utils/storage';
import './i18n/config';
import { LockCodeIcon } from './components/icons/LockCodeIcon';

function App() {
  const [targetNumber, setTargetNumber] = useState('');
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState<Array<{ number: string; matches: number; positions: number }>>([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [error, setError] = useState('');
  const [isDark, setIsDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [stats, setStats] = useState(() => getGameStats());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.matchMedia('(max-width: 640px)').matches);
    handleResize(); // Verificar al cargar el componente
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const startNewGame = () => {
    setTargetNumber(generateRandomNumber());
    setCurrentGuess('');
    setGuesses([]);
    setGameOver(false);
    setWon(false);
    setError('');
    setGameStarted(true);
  };

  const returnToHome = () => {
    setGameStarted(false);
    setCurrentGuess('');
    setGuesses([]);
    setGameOver(false);
    setWon(false);
    setError('');
  };

  const handleGuess = () => {
    if (currentGuess.length !== 3) {
      setError(t('invalidNumber'));
      return;
    }

    const result = checkGuess(currentGuess, targetNumber);
    const newGuess = {
      number: currentGuess,
      matches: result.matches,
      positions: result.positions,
    };

    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    setCurrentGuess('');
    setError('');

    const config = DIFFICULTY_CONFIG[difficulty];

    if (currentGuess === targetNumber) {
      setWon(true);
      setGameOver(true);
      const newStats = saveGameResult(difficulty, newGuesses.length, true, config.winPoints);
      setStats(newStats);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else if (newGuesses.length >= config.attempts) {
      setGameOver(true);
      const newStats = saveGameResult(difficulty, newGuesses.length, false, config.losePoints);
      setStats(newStats);
    }
  };

  
  const handleRestart = () => {
    const newStats = resetGameStats();
    setStats(newStats);
  };

  return (
    <div className="min-h-screen bg-math-pattern bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        stats={stats}
        onHomeClick={returnToHome}
        onRestart={handleRestart}
      />

      <div className="pt-32 p-4 sm:p-8">
        <div className="max-w-md  mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-colors duration-200 md:my-16 sm:my-10">
          <div className="p-6 sm:p-8">
            {!gameStarted ? (
              <div className="space-y-8">
                <div className="flex justify-center items-center space-x-2 text-5xl">
                  <LockCodeIcon className={'size-40 '} />
                </div>
                {isMobile && (
                  <h1 className="text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap text-center">
                    {t('title')}
                  </h1>
                )}
                <GameStats stats={stats} />
                <DifficultySelector
                  selected={difficulty}
                  onSelect={setDifficulty}
                />
                <div className="text-center">
                  <button
                    onClick={startNewGame}
                    className="px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                  >
                    {t('startGame')}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {!gameOver && (
                  <div className="text-center mb-6">
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('attemptsRemaining')}: {DIFFICULTY_CONFIG[difficulty].attempts - guesses.length}
                    </p>
                  </div>
                )}

                {gameOver ? (
                  <GameOverStatus
                    won={won}
                    targetNumber={targetNumber}
                    onNewGame={startNewGame}
                    onReturnHome={returnToHome}
                  />
                ) : (
                  <GuessForm
                    value={currentGuess}
                    onChange={setCurrentGuess}
                    onSubmit={handleGuess}
                    error={error}
                  />
                )}

                <GuessList guesses={guesses} />
              </div>
            )}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;