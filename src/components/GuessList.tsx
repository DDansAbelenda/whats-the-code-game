import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

interface GuessListProps {
  guesses: Array<{
    number: string;
    matches: number;
    positions: number;
  }>;
}

const GuessList: React.FC<GuessListProps> = ({ guesses }) => {
  const { t } = useTranslation();

  if (guesses.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
        {t('previousGuesses')}
      </h2>
      <div className="space-y-4">
        {guesses.map((guess, index) => (
          <div
            key={index}
            className="space-y-2 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md"
          >
            <div className="flex justify-center space-x-2">
              {guess.number.split('').map((digit, i) => (
                <div
                  key={i}
                  className="w-12 h-12 flex items-center justify-center text-xl font-mono font-bold bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 rounded-lg"
                >
                  {digit}
                </div>
              ))}
            </div>
            <div className=" text-xlg text-gray-600 dark:text-gray-400">
              {guess.matches === 0 && guess.positions === 0 ? (
                <div className='flex items-start space-x-3'>
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <p>{t('noDigitsCorrect')}</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {guess.matches === 1 && (
                    <div className='flex items-start space-x-3'>
                      <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                      <p>{t('digitsWrongPosition', { count: guess.matches })}</p>
                    </div>
                  )}
                  {guess.matches > 1 && (
                    <div className='flex items-start space-x-3'>
                      <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                      <p>{t('digitsWrongPosition_plural', { count: guess.matches })}</p>
                    </div>
                  )}
                  {guess.positions === 1 && (
                    <div className='flex items-start space-x-3'>
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                      <p>{t('digitsCorrectPosition', { count: guess.positions })}</p>
                    </div>
                  )}
                  {guess.positions > 1 && (
                    <div className='flex items-start space-x-3'>
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                      <p>{t('digitsCorrectPosition_plural', { count: guess.positions })}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuessList;