import { createContext, useContext, useState, ReactNode } from 'react';

type Currency = 'USD' | 'EUR' | 'GBP' | 'CHF' | 'JPY';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  symbol: string;
  convert: (usdAmount: number) => number;
  rate: number;
}

const RATES: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  CHF: 0.88,
  JPY: 157.5,
};

const SYMBOLS: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  CHF: 'Fr.',
  JPY: '¥',
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('USD');

  const symbol = SYMBOLS[currency];
  const rate = RATES[currency];

  const convert = (usdAmount: number) => {
    return usdAmount * rate;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, symbol, convert, rate }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
