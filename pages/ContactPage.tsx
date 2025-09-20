
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { PhoneIcon, MailIcon, LocationMarkerIcon } from '../constants/icons';

const ContactPage: React.FC = () => {
    const { t } = useTranslation();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Message sent!');
    };

    return (
        <div className="py-12 sm:py-16 bg-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                        {t('contactTitle')}
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        {t('contactDescription')}
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700">{t('fullName')}</label>
                                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">{t('email')}</label>
                                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700">{t('message')}</label>
                                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors">
                                    {t('sendMessage')}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
                            <LocationMarkerIcon className="w-8 h-8 text-amber-500 me-4 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-slate-800">Address</h3>
                                <p className="text-slate-600">Sarai Shazada, District 1, Kabul, Afghanistan</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
                            <PhoneIcon className="w-8 h-8 text-amber-500 me-4 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-slate-800">Phone</h3>
                                <p className="text-slate-600 font-mono">+93 20 210 1234</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
                            <MailIcon className="w-8 h-8 text-amber-500 me-4 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-slate-800">Email</h3>
                                <p className="text-slate-600">contact@shazada-exchange.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
