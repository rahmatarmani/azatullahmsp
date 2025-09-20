
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { branchesData } from '../constants/data';
import { Branch } from '../types';
import { PhoneIcon, LocationMarkerIcon } from '../constants/icons';

const BranchCard: React.FC<{ branch: Branch }> = ({ branch }) => {
    const { t, language } = useTranslation();
    return (
        <div className={`p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${branch.isMain ? 'bg-slate-800 text-white' : 'bg-white'}`}>
            <h3 className={`text-xl font-bold mb-2 ${branch.isMain ? 'text-amber-400' : 'text-slate-800'}`}>{branch.name[language]}</h3>
            <div className={`flex items-start mt-4 ${branch.isMain ? 'text-slate-300' : 'text-slate-600'}`}>
                <LocationMarkerIcon className="w-5 h-5 me-3 mt-1 flex-shrink-0" />
                <p>{branch.address[language]}</p>
            </div>
            <div className={`flex items-center mt-3 ${branch.isMain ? 'text-slate-300' : 'text-slate-600'}`}>
                <PhoneIcon className="w-5 h-5 me-3 flex-shrink-0" />
                <p className="font-mono">{branch.phone}</p>
            </div>
        </div>
    );
};

const BranchesPage: React.FC = () => {
    const { t } = useTranslation();
    const mainBranch = branchesData.find(b => b.isMain);
    const otherBranches = branchesData.filter(b => !b.isMain);

    return (
        <div className="py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                        {t('branchesTitle')}
                    </h1>
                </div>

                {mainBranch && (
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-6 text-slate-800">{t('mainBranch')}</h2>
                        <div className="max-w-2xl mx-auto">
                           <BranchCard branch={mainBranch} />
                        </div>
                    </div>
                )}
                
                {otherBranches.length > 0 && (
                    <div>
                        <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">{t('otherBranches')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {otherBranches.map((branch, index) => (
                                <BranchCard key={index} branch={branch} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BranchesPage;
