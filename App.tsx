
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Language, Page } from './types';
import { LanguageContext } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BranchesPage from './pages/BranchesPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
    const [language, setLanguage] = useState<Language>('en');
    const [currentPage, setCurrentPage] = useState<Page>('home');

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ps' ? 'rtl' : 'ltr';
        document.body.className = language === 'ps' ? 'font-pashto' : 'font-sans';
    }, [language]);

    const handleSetLanguage = useCallback((lang: Language) => {
        setLanguage(lang);
    }, []);
    
    const contextValue = useMemo(() => ({
        language,
        setLanguage: handleSetLanguage,
    }), [language, handleSetLanguage]);

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'branches':
                return <BranchesPage />;
            case 'services':
                return <ServicesPage />;
            case 'about':
                return <AboutPage />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <LanguageContext.Provider value={contextValue}>
            <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-800 ${language === 'ps' ? 'font-pashto' : 'font-sans'}`}>
                <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <main className="flex-grow">
                    {renderPage()}
                </main>
                <Footer />
            </div>
        </LanguageContext.Provider>
    );
};

export default App;
