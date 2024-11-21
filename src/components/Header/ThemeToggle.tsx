import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label={isDark ? t('lightMode') : t('darkMode')}
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      ) : (
        <Moon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      )}
    </button>
  );
};

export default ThemeToggle;