import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n} = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label={i18n.language.startsWith('es') ? 'Switch to English' : 'Cambiar a Español'}
      title={i18n.language.startsWith('es') ? 'Switch to English' : 'Cambiar a Español'}
    >
      <Languages className="w-6 h-6 text-gray-600 dark:text-gray-300" />
    </button>
  );
};

export default LanguageSelector;