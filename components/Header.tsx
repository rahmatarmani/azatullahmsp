import React, { useContext } from 'react';
import { Page, Language } from '../types';
import { useTranslation } from '../hooks/useTranslation';
import { LanguageContext } from '../contexts/LanguageContext';
import { CurrencyExchangeIcon } from '../constants/icons';

interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
    const { t, language } = useTranslation();
    const { setLanguage } = useContext(LanguageContext);

    const navLinks: { page: Page; labelKey: keyof typeof import('../constants/translations').translations }[] = [
        { page: 'home', labelKey: 'home' },
        { page: 'branches', labelKey: 'branches' },
        { page: 'services', labelKey: 'services' },
        { page: 'about', labelKey: 'about' },
        { page: 'contact', labelKey: 'contact' },
    ];

    const toggleLanguage = () => {
        const newLang: Language = language === 'en' ? 'ps' : 'en';
        setLanguage(newLang);
    };

    return (
        <header className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="flex items-center space-x-2 rtl:space-x-reverse">
                             {/* FIX: CurrencyExchangeIcon was used but not imported. */}
                             <CurrencyExchangeIcon className="h-8 w-8 text-amber-500"/>
                             <span className="text-xl font-extrabold text-slate-800 tracking-tight">{t('appName')}</span>
                        </a>
                    </div>
                    <nav className="hidden md:flex md:space-x-8 rtl:md:space-x-reverse">
                        {navLinks.map(({ page, labelKey }) => (
                            <a
                                key={page}
                                href="#"
                                onClick={(e) => { e.preventDefault(); setCurrentPage(page); }}
                                className={`text-base font-medium transition-colors duration-200 ${currentPage === page ? 'text-amber-500' : 'text-slate-600 hover:text-amber-500'}`}
                            >
                                {t(labelKey)}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center">
                        <button
                            onClick={toggleLanguage}
                            className="px-4 py-2 text-sm font-semibold border border-slate-300 rounded-md hover:bg-slate-100 transition-colors duration-200"
                        >
                            {language === 'en' ? 'پښتو' : 'English'}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;