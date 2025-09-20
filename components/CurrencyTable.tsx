
import React from 'react';
import { CurrencyRate } from '../types';
import { useTranslation } from '../hooks/useTranslation';

interface CurrencyTableProps {
    rates: CurrencyRate[];
}

const CurrencyTable: React.FC<CurrencyTableProps> = ({ rates }) => {
    const { t } = useTranslation();

    return (
        <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 rounded-lg">
                    <table className="min-w-full divide-y divide-slate-200">
                        <thead className="bg-slate-700 text-white">
                            <tr>
                                <th scope="col" className="py-3.5 ps-4 pe-3 text-start text-sm font-semibold sm:ps-6">{t('currency')}</th>
                                <th scope="col" className="px-3 py-3.5 text-start text-sm font-semibold">{t('buy')}</th>
                                <th scope="col" className="px-3 py-3.5 text-start text-sm font-semibold">{t('sell')}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white">
                            {rates.map((rate) => (
                                <tr key={rate.currencyCode} className="hover:bg-amber-50/50 transition-colors duration-200">
                                    <td className="whitespace-nowrap py-4 ps-4 pe-3 text-sm sm:ps-6">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex-shrink-0 text-2xl">{rate.flag}</div>
                                            <div className="ms-4">
                                                <div className="font-medium text-slate-900">{rate.currencyCode}</div>
                                                <div className="text-slate-500">{rate.currencyName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 font-mono">{rate.buy.toFixed(2)}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 font-mono">{rate.sell.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CurrencyTable;
