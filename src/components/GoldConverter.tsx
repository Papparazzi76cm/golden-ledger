import { useState } from 'react';
import { ArrowRightLeft, Calculator, Scale } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useGoldPrice } from './GoldPriceDisplay';

// Conversion constants
const GRAMS_PER_OUNCE = 31.1035;

export const GoldConverter = () => {
  const { price } = useGoldPrice();
  const [grams, setGrams] = useState<string>('100');
  const [ounces, setOunces] = useState<string>((100 / GRAMS_PER_OUNCE).toFixed(4));
  const [value, setValue] = useState<string>((100 / GRAMS_PER_OUNCE * price).toFixed(2));
  const [activeField, setActiveField] = useState<'grams' | 'ounces' | 'value'>('grams');

  const updateFromGrams = (g: string) => {
    setGrams(g);
    const numG = parseFloat(g) || 0;
    const oz = numG / GRAMS_PER_OUNCE;
    setOunces(oz.toFixed(4));
    setValue((oz * price).toFixed(2));
  };

  const updateFromOunces = (oz: string) => {
    setOunces(oz);
    const numOz = parseFloat(oz) || 0;
    setGrams((numOz * GRAMS_PER_OUNCE).toFixed(2));
    setValue((numOz * price).toFixed(2));
  };

  const updateFromValue = (v: string) => {
    setValue(v);
    const numV = parseFloat(v) || 0;
    const oz = numV / price;
    setOunces(oz.toFixed(4));
    setGrams((oz * GRAMS_PER_OUNCE).toFixed(2));
  };

  return (
    <Card variant="premium" className="w-full">
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
          <ArrowRightLeft className="w-6 h-6 text-gold" />
        </div>
        <CardTitle className="text-xl">Conversor de Oro</CardTitle>
        <p className="text-sm text-muted-foreground font-body">
          Convierte entre gramos, onzas y valor monetario
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground font-body">Gramos</label>
          <Input
            type="number"
            value={grams}
            onChange={(e) => updateFromGrams(e.target.value)}
            onFocus={() => setActiveField('grams')}
            className={activeField === 'grams' ? 'border-gold' : ''}
          />
        </div>
        
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
            <Scale className="w-4 h-4 text-gold" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-muted-foreground font-body">Onzas Troy</label>
          <Input
            type="number"
            value={ounces}
            onChange={(e) => updateFromOunces(e.target.value)}
            onFocus={() => setActiveField('ounces')}
            className={activeField === 'ounces' ? 'border-gold' : ''}
          />
        </div>

        <div className="flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
            <Calculator className="w-4 h-4 text-gold" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-muted-foreground font-body">Valor en USD</label>
          <Input
            type="number"
            value={value}
            onChange={(e) => updateFromValue(e.target.value)}
            onFocus={() => setActiveField('value')}
            className={activeField === 'value' ? 'border-gold' : ''}
          />
        </div>

        <div className="pt-4 text-center text-xs text-muted-foreground font-body">
          Precio actual: ${price.toLocaleString()} USD/oz
        </div>
      </CardContent>
    </Card>
  );
};
