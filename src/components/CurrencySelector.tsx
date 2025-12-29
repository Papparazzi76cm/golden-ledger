import { useCurrency } from '@/hooks/useCurrency';
import { Button } from '@/components/ui/button';

const currencies = [
  { code: 'USD', label: 'USD $' },
  { code: 'EUR', label: 'EUR €' },
  { code: 'GBP', label: 'GBP £' },
  { code: 'CHF', label: 'CHF Fr.' },
  { code: 'JPY', label: 'JPY ¥' },
] as const;

export const CurrencySelector = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex items-center gap-1 bg-card/50 rounded-full p-1 border border-gold/20 flex-wrap justify-center">
      {currencies.map(({ code, label }) => (
        <Button
          key={code}
          variant={currency === code ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setCurrency(code)}
          className={`rounded-full px-3 py-1 h-7 text-xs font-medium transition-all ${
            currency === code 
              ? 'bg-gold text-primary-foreground hover:bg-gold/90' 
              : 'text-muted-foreground hover:text-foreground hover:bg-transparent'
          }`}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
