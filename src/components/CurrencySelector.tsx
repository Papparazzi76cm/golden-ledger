import { useCurrency } from '@/hooks/useCurrency';
import { Button } from '@/components/ui/button';

export const CurrencySelector = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex items-center gap-1 bg-card/50 rounded-full p-1 border border-gold/20">
      <Button
        variant={currency === 'USD' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setCurrency('USD')}
        className={`rounded-full px-3 py-1 h-7 text-xs font-medium transition-all ${
          currency === 'USD' 
            ? 'bg-gold text-primary-foreground hover:bg-gold/90' 
            : 'text-muted-foreground hover:text-foreground hover:bg-transparent'
        }`}
      >
        USD $
      </Button>
      <Button
        variant={currency === 'EUR' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setCurrency('EUR')}
        className={`rounded-full px-3 py-1 h-7 text-xs font-medium transition-all ${
          currency === 'EUR' 
            ? 'bg-gold text-primary-foreground hover:bg-gold/90' 
            : 'text-muted-foreground hover:text-foreground hover:bg-transparent'
        }`}
      >
        EUR €
      </Button>
    </div>
  );
};
