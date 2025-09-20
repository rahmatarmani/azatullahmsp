
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const AboutPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                            {t('aboutTitle')}
                        </h1>
                    </div>
                    <div className="prose prose-lg max-w-none text-slate-600 leading-8 text-justify">
                        <p>{t('aboutParagraph1')}</p>
                        <p>{t('aboutParagraph2')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
