
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../constants/translations';

export const useTranslation = () => {
    const { language } = useContext(LanguageContext);

    const t = (key: keyof typeof translations) => {
        return translations[key][language] || translations[key]['en'];
    };

    return { t, language };
};
