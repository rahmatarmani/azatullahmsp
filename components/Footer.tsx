
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-slate-800 text-slate-300">
            <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-start">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} {t('appName')}. {t('footerRights')}
                    </p>
                    {/* Add social media icons here if needed */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
