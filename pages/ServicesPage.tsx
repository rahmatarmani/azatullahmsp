
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { servicesData } from '../constants/data';
import { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const { language } = useTranslation();
    const Icon = service.icon;

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="mb-4 inline-block p-4 bg-amber-100 rounded-full">
                <Icon className="w-10 h-10 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title[language]}</h3>
            <p className="text-slate-600">{service.description[language]}</p>
        </div>
    );
};

const ServicesPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="py-12 sm:py-16 bg-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                        {t('servicesTitle')}
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
