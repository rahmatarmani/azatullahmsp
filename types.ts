import type { ComponentType } from 'react';

export type Language = 'en' | 'ps';
export type Page = 'home' | 'branches' | 'services' | 'about' | 'contact';

export interface CurrencyRate {
  currencyCode: string;
  currencyName: string;
  flag: string;
  buy: number;
  sell: number;
}

export interface Branch {
  name: { [key in Language]: string };
  address: { [key in Language]: string };
  phone: string;
  isMain: boolean;
}

export interface Service {
    title: { [key in Language]: string };
    description: { [key in Language]: string };
    // FIX: Changed React.ComponentType to ComponentType after type-only import.
    icon: ComponentType<{ className?: string }>;
}