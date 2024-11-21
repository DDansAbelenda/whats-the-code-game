import React from 'react';
import { Github, Linkedin, MailPlus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 py-4 border-t border-gray-200 dark:border-gray-700">
      <div className="text-center space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {t('developedBy')} Daniel Dans Abelenda
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} {t('allRightsReserved')}
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/DDansAbelenda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-dans-abelenda-aa0a1627b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:ddansabelenda@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          >
            <MailPlus className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;