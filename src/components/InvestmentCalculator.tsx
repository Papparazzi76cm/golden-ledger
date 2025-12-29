import { useState } from 'react';
import { TrendingUp, Calendar, Percent } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useGoldPrice } from './GoldPriceDisplay';
import { useCurrency } from '@/hooks/useCurrency';

export const InvestmentCalculator = () => {
  const { price } = useGoldPrice();
  const { symbol, convert } = useCurrency();
  const [investment, setInvestment] = useState<string>('10000');
  const [years, setYears] = useState<string>('5');
  const [annualReturn, setAnnualReturn] = useState<string>('8');

  const calculateReturns = () => {
    const principal = parseFloat(investment) || 0;
    const numYears = parseFloat(years) || 0;
    const rate = (parseFloat(annualReturn) || 0) / 100;
    
    const finalValue = principal * Math.pow(1 + rate, numYears);
    const totalReturn = finalValue - principal;
    const convertedPrice = convert(price);
    const goldOunces = principal / convertedPrice;
    const futureGoldValue = goldOunces * convertedPrice * Math.pow(1 + rate, numYears);
    
    return {
      finalValue: finalValue.toFixed(2),
      totalReturn: totalReturn.toFixed(2),
      percentageGain: ((totalReturn / principal) * 100).toFixed(1),
      goldOunces: goldOunces.toFixed(4),
      futureGoldValue: futureGoldValue.toFixed(2),
    };
  };

  const results = calculateReturns();

  return (
    <Card variant="premium" className="w-full">
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
          <TrendingUp className="w-6 h-6 text-gold" />
        </div>
        <CardTitle className="text-xl">Calculadora de Rentabilidad</CardTitle>
        <p className="text-sm text-muted-foreground font-body">
          Simula el crecimiento de tu inversión en oro
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground font-body flex items-center gap-2">
              <span>Inversión Inicial ({symbol})</span>
            </label>
            <Input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              placeholder="10000"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground font-body flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Años</span>
              </label>
              <Input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                placeholder="5"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground font-body flex items-center gap-2">
                <Percent className="w-4 h-4" />
                <span>Retorno anual</span>
              </label>
              <Input
                type="number"
                value={annualReturn}
                onChange={(e) => setAnnualReturn(e.target.value)}
                placeholder="8"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="pt-6 border-t border-gold/10 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground font-body">Onzas de oro:</span>
            <span className="font-heading text-lg text-foreground">{results.goldOunces} oz</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground font-body">Valor proyectado:</span>
            <span className="font-heading text-2xl text-gradient-gold">{symbol}{parseFloat(results.futureGoldValue).toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground font-body">Ganancia total:</span>
            <span className="font-body text-green-500">
              +{symbol}{parseFloat(results.totalReturn).toLocaleString()} ({results.percentageGain}%)
            </span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center font-body pt-4">
          * Simulación basada en rendimiento histórico. Resultados pasados no garantizan rendimientos futuros.
        </p>
      </CardContent>
    </Card>
  );
};
