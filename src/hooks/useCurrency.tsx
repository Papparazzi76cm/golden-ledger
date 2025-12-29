import { createContext, useContext, useState, ReactNode } from 'react';

type Currency = 'USD' | 'EUR';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  symbol: string;
  convert: (usdAmount: number) => number;
  rate: number;
}

const EUR_RATE = 0.92; // 1 USD = 0.92 EUR (approximate)

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('USD');

  const symbol = currency === 'USD' ? '$' : '€';
  const rate = currency === 'USD' ? 1 : EUR_RATE;

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
