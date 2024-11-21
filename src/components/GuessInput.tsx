import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface GuessInputProps {
  onSubmit: (guess: string) => void;
}

const GuessInput: React.FC<GuessInputProps> = ({ onSubmit }) => {
  const [guess, setGuess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!/^\d{3}$/.test(guess)) {
      setError('Please enter a valid 3-digit number');
      return;
    }

    onSubmit(guess);
    setGuess('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex gap-2">
        <input
          type="text"
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value);
            setError('');
          }}
          maxLength={3}
          placeholder="Enter 3 digits"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
};

export default GuessInput;