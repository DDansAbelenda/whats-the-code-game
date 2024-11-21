import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

interface GuessFormProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  error?: string;
}

const GuessForm: React.FC<GuessFormProps> = ({ value, onChange, onSubmit, error }) => {
  const { t } = useTranslation();
  const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const handleDigitChange = (index: number, digit: string) => {
    if (!/^\d*$/.test(digit)) return;

    const newValue = value.split('');
    newValue[index] = digit;
    onChange(newValue.join(''));

    if (digit && index < 2) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
    if (e.key === 'Enter' && value.length === 3) {
      onSubmit();
    }
  };

  useEffect(() => {
    if (value.length === 0) {
      inputRefs[0].current?.focus();
    }
  }, [value]);

  return (
    <div className="space-y-4">
      <div className="flex justify-center space-x-4">
        {[0, 1, 2].map((index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            maxLength={1}
            value={value[index] || ''}
            onChange={(e) => handleDigitChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-16 h-16 text-center text-2xl font-mono border-2 rounded-lg
                     border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-800
                     text-gray-900 dark:text-gray-100
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                     focus:border-transparent"
            aria-label={`Digit ${index + 1}`}
          />
        ))}
      </div>
      {error && (
        <p className="text-red-500 dark:text-red-400 text-sm text-center">{error}</p>
      )}
      {value.length === 3 && (
        <div className="flex justify-center">
          <button
            onClick={onSubmit}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                     transition-colors flex items-center space-x-2"
          >
            <span>{t('submitGuess')}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default GuessForm;