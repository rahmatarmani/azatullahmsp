
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import CurrencyTable from '../components/CurrencyTable';
import { currencyRatesData } from '../constants/data';

const HomePage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                        {t('exchangeRatesTitle')}
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        {t('saraiShazadaSource')}
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <CurrencyTable rates={currencyRatesData} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
