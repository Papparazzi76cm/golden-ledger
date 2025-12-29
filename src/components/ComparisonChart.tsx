import { useState, useMemo } from 'react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import { BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getMultiAssetDataForPeriod, normalizeData, AssetDataPoint } from '@/data/multiAssetData';
import { useLanguage } from '@/hooks/useLanguage';

type TimePeriod = 5 | 10 | 25 | 50;
type ViewMode = 'absolute' | 'comparison';

interface AssetConfig {
  key: string;
  nameKey: 'gold' | 'sp500' | 'bitcoin' | 'inflation';
  color: string;
  colorLight: string;
}

const assetConfigs: AssetConfig[] = [
  { key: 'gold', nameKey: 'gold', color: 'hsl(43, 74%, 49%)', colorLight: 'hsl(43, 80%, 65%)' },
  { key: 'sp500', nameKey: 'sp500', color: 'hsl(210, 100%, 50%)', colorLight: 'hsl(210, 100%, 70%)' },
  { key: 'bitcoin', nameKey: 'bitcoin', color: 'hsl(25, 100%, 50%)', colorLight: 'hsl(25, 100%, 70%)' },
  { key: 'inflation', nameKey: 'inflation', color: 'hsl(280, 70%, 50%)', colorLight: 'hsl(280, 70%, 70%)' },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string; dataKey: string }>;
  label?: string;
  viewMode: ViewMode;
}

const CustomTooltip = ({ active, payload, label, viewMode }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-charcoal-dark border border-gold/30 rounded-lg p-4 shadow-gold">
        <p className="text-muted-foreground font-body text-sm mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-muted-foreground">{entry.name}:</span>
            <span className="font-semibold" style={{ color: entry.color }}>
              {viewMode === 'comparison' 
                ? `${entry.value >= 0 ? '+' : ''}${entry.value.toFixed(1)}%`
                : entry.dataKey === 'bitcoin' && entry.value > 1000
                  ? `$${(entry.value / 1000).toFixed(1)}k`
                  : `$${entry.value.toLocaleString()}`
              }
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const ComparisonChart = () => {
  const { t } = useLanguage();
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>(10);
  const [viewMode, setViewMode] = useState<ViewMode>('comparison');
  const [activeAssets, setActiveAssets] = useState<Set<string>>(new Set(['gold', 'sp500']));
  
  const periodLabels: { [key in TimePeriod]: string } = {
    5: `5 ${t.historicalChart.years}`,
    10: `10 ${t.historicalChart.years}`,
    25: `25 ${t.historicalChart.years}`,
    50: `50 ${t.historicalChart.years}`
  };
  
  const rawData = useMemo(() => getMultiAssetDataForPeriod(selectedPeriod), [selectedPeriod]);
  
  const chartData = useMemo(() => {
    if (viewMode === 'comparison') {
      return normalizeData(rawData, Array.from(activeAssets));
    }
    return rawData;
  }, [rawData, viewMode, activeAssets]);

  const toggleAsset = (assetKey: string) => {
    setActiveAssets(prev => {
      const newSet = new Set(prev);
      if (newSet.has(assetKey)) {
        if (newSet.size > 1) {
          newSet.delete(assetKey);
        }
      } else {
        newSet.add(assetKey);
      }
      return newSet;
    });
  };

  const formatYAxis = (value: number) => {
    if (viewMode === 'comparison') {
      return `${value >= 0 ? '+' : ''}${value.toFixed(0)}%`;
    }
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}k`;
    }
    return `$${value}`;
  };

  const formatXAxis = (value: string) => {
    if (value.length === 4) return value;
    const parts = value.split('-');
    return parts[0];
  };

  // Filter out bitcoin for periods before it existed
  const availableAssets = assetConfigs.filter(asset => {
    if (asset.key === 'bitcoin' && selectedPeriod > 15) {
      return false;
    }
    return true;
  });

  return (
    <Card variant="premium" className="w-full">
      <CardHeader>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-gold" />
                </div>
                {t.comparisonChart.title}
              </CardTitle>
              <p className="text-muted-foreground font-body mt-2">
                {viewMode === 'comparison' 
                  ? t.comparisonChart.subtitle
                  : t.comparisonChart.viewMode.absolute
                }
              </p>
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('comparison')}
                className={`px-4 py-2 rounded-lg text-sm font-body transition-all duration-300 ${
                  viewMode === 'comparison'
                    ? 'bg-gold text-charcoal-dark font-medium'
                    : 'bg-charcoal-light text-muted-foreground hover:text-foreground border border-gold/10'
                }`}
              >
                % {t.comparisonChart.performance}
              </button>
              <button
                onClick={() => setViewMode('absolute')}
                className={`px-4 py-2 rounded-lg text-sm font-body transition-all duration-300 ${
                  viewMode === 'absolute'
                    ? 'bg-gold text-charcoal-dark font-medium'
                    : 'bg-charcoal-light text-muted-foreground hover:text-foreground border border-gold/10'
                }`}
              >
                {t.comparisonChart.viewMode.absolute}
              </button>
            </div>
          </div>

          {/* Period & Asset Selectors */}
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            {/* Period Selector */}
            <div className="flex gap-2 flex-wrap">
              {(Object.keys(periodLabels) as unknown as TimePeriod[]).map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(Number(period) as TimePeriod)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-body transition-all duration-300 ${
                    selectedPeriod === Number(period)
                      ? 'bg-gold/20 text-gold border border-gold'
                      : 'bg-charcoal-light text-muted-foreground hover:text-foreground border border-gold/10'
                  }`}
                >
                  {periodLabels[period]}
                </button>
              ))}
            </div>

            {/* Asset Toggles */}
            <div className="flex gap-2 flex-wrap">
              {availableAssets.map((asset) => (
                <button
                  key={asset.key}
                  onClick={() => toggleAsset(asset.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-body transition-all duration-300 flex items-center gap-2 ${
                    activeAssets.has(asset.key)
                      ? 'border-2'
                      : 'bg-charcoal-light text-muted-foreground border border-gold/10 opacity-60 hover:opacity-100'
                  }`}
                  style={{
                    borderColor: activeAssets.has(asset.key) ? asset.color : undefined,
                    color: activeAssets.has(asset.key) ? asset.color : undefined,
                  }}
                >
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: asset.color }}
                  />
                  {t.comparisonChart.assets[asset.nameKey]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Chart */}
        <div className="h-[450px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <defs>
                {assetConfigs.map(asset => (
                  <linearGradient key={asset.key} id={`gradient-${asset.key}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={asset.color} stopOpacity={0.3} />
                    <stop offset="100%" stopColor={asset.color} stopOpacity={0} />
                  </linearGradient>
                ))}
              </defs>
              
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="hsl(43, 20%, 18%)" 
                vertical={false}
              />
              
              <XAxis 
                dataKey="date" 
                tickFormatter={formatXAxis}
                stroke="hsl(43, 15%, 55%)"
                tick={{ fill: 'hsl(43, 15%, 55%)', fontSize: 11 }}
                axisLine={{ stroke: 'hsl(43, 20%, 18%)' }}
                tickLine={{ stroke: 'hsl(43, 20%, 18%)' }}
                interval={Math.floor(chartData.length / 8)}
              />
              
              <YAxis 
                tickFormatter={formatYAxis}
                stroke="hsl(43, 15%, 55%)"
                tick={{ fill: 'hsl(43, 15%, 55%)', fontSize: 11 }}
                axisLine={{ stroke: 'hsl(43, 20%, 18%)' }}
                tickLine={{ stroke: 'hsl(43, 20%, 18%)' }}
                width={70}
              />
              
              <Tooltip content={<CustomTooltip viewMode={viewMode} />} />
              
              {assetConfigs.map(asset => (
                activeAssets.has(asset.key) && (
                  <Line
                    key={asset.key}
                    type="monotone"
                    dataKey={asset.key}
                    name={t.comparisonChart.assets[asset.nameKey]}
                    stroke={asset.color}
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{
                      r: 5,
                      fill: asset.color,
                      stroke: 'hsl(20, 14%, 4%)',
                      strokeWidth: 2
                    }}
                    connectNulls={false}
                  />
                )
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Summary */}
        {viewMode === 'comparison' && chartData.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gold/10">
            {availableAssets.filter(a => activeAssets.has(a.key)).map(asset => {
              const lastPoint = chartData[chartData.length - 1];
              const value = lastPoint[asset.key as keyof AssetDataPoint] as number;
              
              if (value === null) return null;
              
              return (
                <div 
                  key={asset.key}
                  className="bg-charcoal/50 rounded-lg p-4 border border-gold/10"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: asset.color }}
                    />
                    <span className="text-sm text-muted-foreground font-body">{t.comparisonChart.assets[asset.nameKey]}</span>
                  </div>
                  <p 
                    className="font-heading text-2xl"
                    style={{ color: value >= 0 ? 'hsl(142, 70%, 45%)' : 'hsl(0, 70%, 50%)' }}
                  >
                    {value >= 0 ? '+' : ''}{value.toFixed(1)}%
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center font-body pt-2">
          {t.comparisonChart.disclaimer}
        </p>
      </CardContent>
    </Card>
  );
};
