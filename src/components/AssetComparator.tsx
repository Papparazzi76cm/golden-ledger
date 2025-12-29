import { useState } from 'react';
import { BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

interface AssetData {
  nameKey: string;
  color: string;
  return1Y: number;
  return5Y: number;
  return10Y: number;
  volatilityKey: string;
}

const assets: AssetData[] = [
  { nameKey: 'gold', color: 'bg-gold', return1Y: 12.5, return5Y: 48.2, return10Y: 89.3, volatilityKey: 'medium' },
  { nameKey: 'sp500', color: 'bg-blue-500', return1Y: 24.2, return5Y: 82.1, return10Y: 188.4, volatilityKey: 'high' },
  { nameKey: 'realEstate', color: 'bg-emerald-500', return1Y: 3.8, return5Y: 28.5, return10Y: 62.1, volatilityKey: 'low' },
  { nameKey: 'bitcoin', color: 'bg-orange-500', return1Y: 142.8, return5Y: 892.3, return10Y: 4250.0, volatilityKey: 'veryHigh' },
  { nameKey: 'bonds', color: 'bg-purple-500', return1Y: 4.2, return5Y: 12.8, return10Y: 28.5, volatilityKey: 'veryLow' },
];

type TimeFrame = '1Y' | '5Y' | '10Y';

export const AssetComparator = () => {
  const { t, language } = useLanguage();
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('5Y');

  const assetNames: Record<string, Record<string, string>> = {
    es: { gold: 'Oro', sp500: 'S&P 500', realEstate: 'Inmuebles', bitcoin: 'Bitcoin', bonds: 'Bonos' },
    en: { gold: 'Gold', sp500: 'S&P 500', realEstate: 'Real Estate', bitcoin: 'Bitcoin', bonds: 'Bonds' },
    fr: { gold: 'Or', sp500: 'S&P 500', realEstate: 'Immobilier', bitcoin: 'Bitcoin', bonds: 'Obligations' },
    de: { gold: 'Gold', sp500: 'S&P 500', realEstate: 'Immobilien', bitcoin: 'Bitcoin', bonds: 'Anleihen' },
  };

  const volatilityLabels: Record<string, Record<string, string>> = {
    es: { veryLow: 'Muy Baja', low: 'Baja', medium: 'Media', high: 'Alta', veryHigh: 'Muy Alta' },
    en: { veryLow: 'Very Low', low: 'Low', medium: 'Medium', high: 'High', veryHigh: 'Very High' },
    fr: { veryLow: 'Très Faible', low: 'Faible', medium: 'Moyenne', high: 'Haute', veryHigh: 'Très Haute' },
    de: { veryLow: 'Sehr Niedrig', low: 'Niedrig', medium: 'Mittel', high: 'Hoch', veryHigh: 'Sehr Hoch' },
  };

  const timeLabels: Record<string, Record<TimeFrame, string>> = {
    es: { '1Y': '1 Año', '5Y': '5 Años', '10Y': '10 Años' },
    en: { '1Y': '1 Year', '5Y': '5 Years', '10Y': '10 Years' },
    fr: { '1Y': '1 An', '5Y': '5 Ans', '10Y': '10 Ans' },
    de: { '1Y': '1 Jahr', '5Y': '5 Jahre', '10Y': '10 Jahre' },
  };

  const volatilityWord: Record<string, string> = {
    es: 'Volatilidad',
    en: 'Volatility',
    fr: 'Volatilité',
    de: 'Volatilität',
  };

  const getReturn = (asset: AssetData) => {
    switch (timeFrame) {
      case '1Y': return asset.return1Y;
      case '5Y': return asset.return5Y;
      case '10Y': return asset.return10Y;
    }
  };

  const maxReturn = Math.max(...assets.map(getReturn));

  return (
    <Card variant="premium" className="w-full">
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
          <BarChart3 className="w-6 h-6 text-gold" />
        </div>
        <CardTitle className="text-xl">{t.assetComparator.title}</CardTitle>
        <p className="text-sm text-muted-foreground font-body">
          {t.assetComparator.subtitle}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Time Frame Selector */}
        <div className="flex justify-center gap-2">
          {(['1Y', '5Y', '10Y'] as TimeFrame[]).map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeFrame(tf)}
              className={`px-4 py-2 rounded-lg text-sm font-body transition-all duration-300 ${
                timeFrame === tf
                  ? 'bg-gold text-charcoal-dark'
                  : 'bg-charcoal-light text-muted-foreground hover:text-foreground hover:bg-gold/10'
              }`}
            >
              {timeLabels[language][tf]}
            </button>
          ))}
        </div>

        {/* Comparison Bars */}
        <div className="space-y-4">
          {assets.map((asset) => {
            const returnValue = getReturn(asset);
            const barWidth = (returnValue / maxReturn) * 100;
            
            return (
              <div key={asset.nameKey} className="space-y-2">
                <div className="flex justify-between items-center text-sm font-body">
                  <span className="text-foreground">{assetNames[language][asset.nameKey]}</span>
                  <span className={returnValue >= 0 ? 'text-green-500' : 'text-red-500'}>
                    {returnValue >= 0 ? '+' : ''}{returnValue.toFixed(1)}%
                  </span>
                </div>
                <div className="h-3 bg-charcoal rounded-full overflow-hidden">
                  <div
                    className={`h-full ${asset.color} rounded-full transition-all duration-700 ease-out`}
                    style={{ width: `${Math.max(barWidth, 2)}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground font-body">
                  <span>{volatilityWord[language]}: {volatilityLabels[language][asset.volatilityKey]}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="pt-4 border-t border-gold/10">
          <p className="text-xs text-muted-foreground text-center font-body">
            {t.assetComparator.disclaimer}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
