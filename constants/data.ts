
import { CurrencyRate, Branch, Service } from '../types';
import { CurrencyExchangeIcon, GlobeAltIcon, ScaleIcon, ShieldCheckIcon } from './icons';

export const currencyRatesData: CurrencyRate[] = [
  { currencyCode: 'USD', currencyName: 'US Dollar', flag: '🇺🇸', buy: 99.50, sell: 100.20 },
  { currencyCode: 'EUR', currencyName: 'Euro', flag: '🇪🇺', buy: 110.20, sell: 111.00 },
  { currencyCode: 'GBP', currencyName: 'British Pound', flag: '🇬🇧', buy: 125.80, sell: 126.70 },
  { currencyCode: 'PKR', currencyName: 'Pakistani Rupee', flag: '🇵🇰', buy: 0.35, sell: 0.36 },
  { currencyCode: 'IRR', currencyName: 'Iranian Rial', flag: '🇮🇷', buy: 0.0023, sell: 0.0024 },
  { currencyCode: 'INR', currencyName: 'Indian Rupee', flag: '🇮🇳', buy: 1.20, sell: 1.22 },
  { currencyCode: 'AED', currencyName: 'UAE Dirham', flag: '🇦🇪', buy: 27.10, sell: 27.30 },
  { currencyCode: 'SAR', currencyName: 'Saudi Riyal', flag: '🇸🇦', buy: 26.50, sell: 26.70 },
];

export const branchesData: Branch[] = [
  {
    name: { en: 'Sarai Shazada HQ', ps: 'سرای شهزاده مرکزی دفتر' },
    address: { en: 'Sarai Shazada, District 1, Kabul, Afghanistan', ps: 'سرای شهزاده، لومړۍ ناحیه، کابل، افغانستان' },
    phone: '+93 20 210 1234',
    isMain: true,
  },
  {
    name: { en: 'Herat Branch', ps: 'هرات څانګه' },
    address: { en: 'Chowk-e-Gulha, Herat, Afghanistan', ps: 'چوک ګلها، هرات، افغانستان' },
    phone: '+93 40 222 5678',
    isMain: false,
  },
  {
    name: { en: 'Mazar-i-Sharif Branch', ps: 'مزار شریف څانګه' },
    address: { en: 'Rawza-e-Sharif, Mazar-i-Sharif, Afghanistan', ps: 'روضه شریف، مزار شریف، افغانستان' },
    phone: '+93 50 200 9012',
    isMain: false,
  },
  {
    name: { en: 'Kandahar Branch', ps: 'کندهار څانګه' },
    address: { en: 'Shaheedano Chowk, Kandahar, Afghanistan', ps: 'شهیدانو چوک، کندهار، افغانستان' },
    phone: '+93 30 200 3456',
    isMain: false,
  },
];

export const servicesData: Service[] = [
    {
        title: { en: 'Currency Exchange', ps: 'د اسعارو تبادله' },
        description: { en: 'Best rates for all major international currencies.', ps: 'د ټولو لویو نړیوالو اسعارو لپاره غوره نرخونه.' },
        icon: CurrencyExchangeIcon,
    },
    {
        title: { en: 'International Money Transfer', ps: 'نړیوالې پولي لیږدونې' },
        description: { en: 'Fast and secure money transfers across the globe.', ps: 'په ټوله نړۍ کې ګړندي او خوندي پولي لیږدونه.' },
        icon: GlobeAltIcon,
    },
    {
        title: { en: 'Financial Consulting', ps: 'مالي مشورې' },
        description: { en: 'Expert advice for your financial and investment needs.', ps: 'ستاسو د مالي او پانګونې اړتیاو لپاره د متخصص مشوره.' },
        icon: ScaleIcon,
    },
    {
        title: { en: 'Secure Transactions', ps: 'خوندي معاملې' },
        description: { en: 'Your security is our priority. All transactions are fully protected.', ps: 'ستاسو امنیت زموږ لومړیتوب دی. ټولې معاملې په بشپړ ډول خوندي دي.' },
        icon: ShieldCheckIcon,
    }
]
