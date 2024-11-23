import React from 'react';
import { useTranslation } from 'react-i18next';

interface ConfirmDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;
    const { t } = useTranslation();


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-4/5 lg:w-auto">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{t('confirmRestartStatsTitle')}</h2>
                <p className="text-gray-600 dark:text-gray-400">{t('confirmRestartStatsMessage')}</p>
                <div className="mt-4 flex justify-end space-x-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                    >
                        {t('cancelRestartStats')}
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                        {t('confirmRestartStats')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;