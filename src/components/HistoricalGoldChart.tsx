import { useState, useMemo } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { TrendingUp, TrendingDown, Calendar, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getYearlyData, calculateStats, GoldDataPoint } from '@/data/goldHistoricalData';
import { useLanguage } from '@/hooks/useLanguage';

type TimePeriod = 5 | 10 | 25 | 50;

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; payload: GoldDataPoint }>;
  label?: string;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-charcoal-dark border border-gold/30 rounded-lg p-4 shadow-gold">
        <p className="text-gold font-heading text-lg font-semibold mb-1">
          ${payload[0].value.toLocaleString()}
        </p>
        <p className="text-muted-foreground font-body text-sm">
          {data.month ? `${data.month}/${data.year}` : data.year}
        </p>
      </div>
    );
  }
  return null;
};

export const HistoricalGoldChart = () => {
  const { t } = useLanguage();
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>(10);
  
  const periodLabels: { [key in TimePeriod]: string } = {
    5: `5 ${t.historicalChart.years}`,
    10: `10 ${t.historicalChart.years}`,
    25: `25 ${t.historicalChart.years}`,
    50: `50 ${t.historicalChart.years}`
  };
  
  const chartData = useMemo(() => getYearlyData(selectedPeriod), [selectedPeriod]);
  const stats = useMemo(() => calculateStats(chartData), [chartData]);
  
  const isPositive = stats.change >= 0;
  
  // Calculate Y-axis domain with some padding
  const yMin = Math.floor(stats.min * 0.9 / 100) * 100;
  const yMax = Math.ceil(stats.max * 1.05 / 100) * 100;
  
  // Format tick values
  const formatYAxis = (value: number) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}k`;
    }
    return `$${value}`;
  };

  const formatXAxis = (value: string) => {
    // For yearly data, just show the year
    if (value.length === 4) return value;
    // For monthly data, show year
    const parts = value.split('-');
    return parts[0];
  };

  return (
    <Card variant="premium" className="w-full">
      <CardHeader>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-gold" />
              </div>
              {t.historicalChart.title}
            </CardTitle>
            <p className="text-muted-foreground font-body mt-2">
              {t.historicalChart.subtitle}
            </p>
          </div>
          
          {/* Period Selector */}
          <div className="flex gap-2 flex-wrap">
            {(Object.keys(periodLabels) as unknown as TimePeriod[]).map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(Number(period) as TimePeriod)}
                className={`px-4 py-2 rounded-lg text-sm font-body transition-all duration-300 ${
                  selectedPeriod === Number(period)
                    ? 'bg-gold text-charcoal-dark font-medium shadow-gold'
                    : 'bg-charcoal-light text-muted-foreground hover:text-foreground hover:bg-gold/10 border border-gold/10'
                }`}
              >
                {periodLabels[period]}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-charcoal/50 rounded-lg p-4 border border-gold/10">
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-body mb-1">
              <DollarSign className="w-4 h-4" />
              {t.historicalChart.initialPrice}
            </div>
            <p className="font-heading text-xl text-foreground">
              ${stats.first?.toLocaleString()}
            </p>
          </div>
          
          <div className="bg-charcoal/50 rounded-lg p-4 border border-gold/10">
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-body mb-1">
              <DollarSign className="w-4 h-4" />
              {t.historicalChart.currentPrice}
            </div>
            <p className="font-heading text-xl text-gold">
              ${stats.last?.toLocaleString()}
            </p>
          </div>
          
          <div className="bg-charcoal/50 rounded-lg p-4 border border-gold/10">
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-body mb-1">
              {isPositive ? (
                <ArrowUpRight className="w-4 h-4 text-green-500" />
              ) : (
                <ArrowDownRight className="w-4 h-4 text-red-500" />
              )}
              {t.historicalChart.change}
            </div>
            <p className={`font-heading text-xl ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? '+' : ''}{stats.changePercent.toFixed(1)}%
            </p>
          </div>
          
          <div className="bg-charcoal/50 rounded-lg p-4 border border-gold/10">
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-body mb-1">
              {isPositive ? (
                <TrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
              {t.historicalChart.maximum}
            </div>
            <p className="font-heading text-xl text-foreground">
              ${stats.max.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(43, 74%, 49%)" stopOpacity={0.4} />
                  <stop offset="50%" stopColor="hsl(43, 74%, 49%)" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="hsl(43, 74%, 49%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="hsl(43, 60%, 40%)" />
                  <stop offset="50%" stopColor="hsl(43, 74%, 49%)" />
                  <stop offset="100%" stopColor="hsl(43, 80%, 65%)" />
                </linearGradient>
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
                tick={{ fill: 'hsl(43, 15%, 55%)', fontSize: 12 }}
                axisLine={{ stroke: 'hsl(43, 20%, 18%)' }}
                tickLine={{ stroke: 'hsl(43, 20%, 18%)' }}
                interval={selectedPeriod <= 10 ? 'preserveStartEnd' : Math.floor(chartData.length / 8)}
              />
              
              <YAxis 
                tickFormatter={formatYAxis}
                stroke="hsl(43, 15%, 55%)"
                tick={{ fill: 'hsl(43, 15%, 55%)', fontSize: 12 }}
                axisLine={{ stroke: 'hsl(43, 20%, 18%)' }}
                tickLine={{ stroke: 'hsl(43, 20%, 18%)' }}
                domain={[yMin, yMax]}
                width={60}
              />
              
              <Tooltip content={<CustomTooltip />} />
              
              {/* Reference line for starting price */}
              <ReferenceLine 
                y={stats.first} 
                stroke="hsl(43, 40%, 35%)" 
                strokeDasharray="5 5"
                strokeWidth={1}
              />
              
              <Area
                type="monotone"
                dataKey="price"
                stroke="url(#goldLine)"
                strokeWidth={2.5}
                fill="url(#goldGradient)"
                dot={false}
                activeDot={{
                  r: 6,
                  fill: 'hsl(43, 74%, 49%)',
                  stroke: 'hsl(20, 14%, 4%)',
                  strokeWidth: 2
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-gold/10 text-sm font-body text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded" />
            <span>{t.historicalChart.legend1}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 border-t-2 border-dashed border-gold-muted" />
            <span>{t.historicalChart.legend2}</span>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center font-body pt-2">
          {t.historicalChart.disclaimer}
        </p>
      </CardContent>
    </Card>
  );
};
