import { useState } from 'react';
import { BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AssetData {
  name: string;
  color: string;
  return1Y: number;
  return5Y: number;
  return10Y: number;
  volatility: string;
}

const assets: AssetData[] = [
  { name: 'Oro', color: 'bg-gold', return1Y: 12.5, return5Y: 48.2, return10Y: 89.3, volatility: 'Media' },
  { name: 'S&P 500', color: 'bg-blue-500', return1Y: 24.2, return5Y: 82.1, return10Y: 188.4, volatility: 'Alta' },
  { name: 'Inmuebles', color: 'bg-emerald-500', return1Y: 3.8, return5Y: 28.5, return10Y: 62.1, volatility: 'Baja' },
  { name: 'Bitcoin', color: 'bg-orange-500', return1Y: 142.8, return5Y: 892.3, return10Y: 4250.0, volatility: 'Muy Alta' },
  { name: 'Bonos', color: 'bg-purple-500', return1Y: 4.2, return5Y: 12.8, return10Y: 28.5, volatility: 'Muy Baja' },
];

type TimeFrame = '1Y' | '5Y' | '10Y';

export const AssetComparator = () => {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('5Y');

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
        <CardTitle className="text-xl">Comparador de Activos</CardTitle>
        <p className="text-sm text-muted-foreground font-body">
          Oro vs. otros instrumentos de inversión
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
              {tf === '1Y' ? '1 Año' : tf === '5Y' ? '5 Años' : '10 Años'}
            </button>
          ))}
        </div>

        {/* Comparison Bars */}
        <div className="space-y-4">
          {assets.map((asset) => {
            const returnValue = getReturn(asset);
            const barWidth = (returnValue / maxReturn) * 100;
            
            return (
              <div key={asset.name} className="space-y-2">
                <div className="flex justify-between items-center text-sm font-body">
                  <span className="text-foreground">{asset.name}</span>
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
                  <span>Volatilidad: {asset.volatility}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="pt-4 border-t border-gold/10">
          <p className="text-xs text-muted-foreground text-center font-body">
            Rendimientos históricos aproximados. No constituyen asesoramiento financiero.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
