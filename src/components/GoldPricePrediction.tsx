import { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Target, Calendar, BarChart3, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useCurrency } from '@/hooks/useCurrency';
import { historicalGoldData, getDataForPeriod, calculateStats } from '@/data/goldHistoricalData';

interface PredictionData {
  period: string;
  prediction: number;
  confidence: number;
  trend: 'up' | 'down' | 'neutral';
  change: number;
}

export const GoldPricePrediction = () => {
  const { t, language } = useLanguage();
  const { formatPrice } = useCurrency();

  // Calculate predictions based on historical trends
  const predictions = useMemo(() => {
    const currentPrice = 4375; // Current gold price Dec 2025
    
    // Calculate historical growth rates
    const data5Y = getDataForPeriod(5);
    const data10Y = getDataForPeriod(10);
    const data20Y = getDataForPeriod(20);
    
    const stats5Y = calculateStats(data5Y);
    const stats10Y = calculateStats(data10Y);
    const stats20Y = calculateStats(data20Y);
    
    // Calculate compound annual growth rates
    const cagr5Y = Math.pow(stats5Y.last / stats5Y.first, 1/5) - 1;
    const cagr10Y = Math.pow(stats10Y.last / stats10Y.first, 1/10) - 1;
    const cagr20Y = Math.pow(stats20Y.last / stats20Y.first, 1/20) - 1;
    
    // Weighted average CAGR for predictions
    const weightedCagr = (cagr5Y * 0.5 + cagr10Y * 0.3 + cagr20Y * 0.2);
    
    // Recent momentum factor (last 2 years growth)
    const data2Y = getDataForPeriod(2);
    const stats2Y = calculateStats(data2Y);
    const recentMomentum = Math.pow(stats2Y.last / stats2Y.first, 1/2) - 1;
    
    // Adjust predictions with momentum
    const momentumFactor = recentMomentum > weightedCagr ? 1.1 : 0.95;
    
    const predictionsData: PredictionData[] = [
      {
        period: language === 'es' ? '1 Mes' : language === 'fr' ? '1 Mois' : language === 'de' ? '1 Monat' : '1 Month',
        prediction: Math.round(currentPrice * (1 + weightedCagr / 12 * momentumFactor)),
        confidence: 75,
        trend: 'up',
        change: (weightedCagr / 12 * momentumFactor) * 100,
      },
      {
        period: language === 'es' ? '3 Meses' : language === 'fr' ? '3 Mois' : language === 'de' ? '3 Monate' : '3 Months',
        prediction: Math.round(currentPrice * (1 + weightedCagr / 4 * momentumFactor)),
        confidence: 68,
        trend: 'up',
        change: (weightedCagr / 4 * momentumFactor) * 100,
      },
      {
        period: language === 'es' ? '6 Meses' : language === 'fr' ? '6 Mois' : language === 'de' ? '6 Monate' : '6 Months',
        prediction: Math.round(currentPrice * (1 + weightedCagr / 2 * momentumFactor)),
        confidence: 60,
        trend: 'up',
        change: (weightedCagr / 2 * momentumFactor) * 100,
      },
      {
        period: language === 'es' ? '1 Año' : language === 'fr' ? '1 An' : language === 'de' ? '1 Jahr' : '1 Year',
        prediction: Math.round(currentPrice * (1 + weightedCagr * momentumFactor)),
        confidence: 52,
        trend: weightedCagr > 0 ? 'up' : 'down',
        change: (weightedCagr * momentumFactor) * 100,
      },
    ];
    
    return predictionsData;
  }, [language]);

  // Key factors affecting gold price
  const factors = useMemo(() => {
    const factorsList = {
      es: [
        { name: 'Inflación', impact: 'positive', description: 'CPI ~2.7% anual' },
        { name: 'Tipos de interés', impact: 'positive', description: 'Fed bajando tipos' },
        { name: 'Geopolítica', impact: 'positive', description: 'Tensiones globales' },
        { name: 'Dólar USD', impact: 'neutral', description: 'Relativamente estable' },
      ],
      en: [
        { name: 'Inflation', impact: 'positive', description: 'CPI ~2.7% annually' },
        { name: 'Interest Rates', impact: 'positive', description: 'Fed cutting rates' },
        { name: 'Geopolitics', impact: 'positive', description: 'Global tensions' },
        { name: 'USD Dollar', impact: 'neutral', description: 'Relatively stable' },
      ],
      fr: [
        { name: 'Inflation', impact: 'positive', description: 'IPC ~2.7% annuel' },
        { name: 'Taux d\'intérêt', impact: 'positive', description: 'Fed baisse les taux' },
        { name: 'Géopolitique', impact: 'positive', description: 'Tensions mondiales' },
        { name: 'Dollar USD', impact: 'neutral', description: 'Relativement stable' },
      ],
      de: [
        { name: 'Inflation', impact: 'positive', description: 'VPI ~2.7% jährlich' },
        { name: 'Zinssätze', impact: 'positive', description: 'Fed senkt Zinsen' },
        { name: 'Geopolitik', impact: 'positive', description: 'Globale Spannungen' },
        { name: 'USD Dollar', impact: 'neutral', description: 'Relativ stabil' },
      ],
    };
    return factorsList[language] || factorsList.en;
  }, [language]);

  const titles = {
    es: { title: 'Predicción de Precios', subtitle: 'Basado en análisis de tendencias históricas', factors: 'Factores Clave', disclaimer: 'Estas predicciones son solo orientativas y no constituyen asesoramiento financiero.' },
    en: { title: 'Price Prediction', subtitle: 'Based on historical trend analysis', factors: 'Key Factors', disclaimer: 'These predictions are for guidance only and do not constitute financial advice.' },
    fr: { title: 'Prédiction des Prix', subtitle: 'Basé sur l\'analyse des tendances historiques', factors: 'Facteurs Clés', disclaimer: 'Ces prédictions sont à titre indicatif uniquement et ne constituent pas un conseil financier.' },
    de: { title: 'Preisprognose', subtitle: 'Basierend auf historischer Trendanalyse', factors: 'Schlüsselfaktoren', disclaimer: 'Diese Prognosen dienen nur zur Orientierung und stellen keine Finanzberatung dar.' },
  };

  const text = titles[language] || titles.en;

  return (
    <Card className="glass-card border-gold/10 h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-heading">
          <Target className="w-5 h-5 text-gold" />
          {text.title}
        </CardTitle>
        <p className="text-xs text-muted-foreground">{text.subtitle}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Predictions Grid */}
        <div className="grid grid-cols-2 gap-3">
          {predictions.map((pred, index) => (
            <div 
              key={pred.period}
              className="p-3 rounded-lg bg-background/50 border border-border/50 hover:border-gold/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {pred.period}
                </span>
                {pred.trend === 'up' ? (
                  <TrendingUp className="w-3 h-3 text-green-500" />
                ) : pred.trend === 'down' ? (
                  <TrendingDown className="w-3 h-3 text-red-500" />
                ) : null}
              </div>
              <div className="text-sm font-bold text-foreground">
                {formatPrice(pred.prediction)}
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className={`text-xs ${pred.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {pred.change > 0 ? '+' : ''}{pred.change.toFixed(1)}%
                </span>
                <span className="text-xs text-muted-foreground">
                  {pred.confidence}% conf.
                </span>
              </div>
              {/* Confidence bar */}
              <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-gold to-gold-light transition-all duration-500"
                  style={{ width: `${pred.confidence}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Key Factors */}
        <div className="pt-3 border-t border-border/30">
          <h4 className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1">
            <BarChart3 className="w-3 h-3 text-gold" />
            {text.factors}
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {factors.map((factor, i) => (
              <div 
                key={i}
                className="flex items-center gap-2 p-2 rounded bg-background/30"
              >
                <div className={`w-2 h-2 rounded-full ${
                  factor.impact === 'positive' ? 'bg-green-500' : 
                  factor.impact === 'negative' ? 'bg-red-500' : 'bg-yellow-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground truncate">{factor.name}</p>
                  <p className="text-[10px] text-muted-foreground truncate">{factor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-2 p-2 rounded bg-gold/5 border border-gold/10">
          <AlertTriangle className="w-3 h-3 text-gold mt-0.5 flex-shrink-0" />
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            {text.disclaimer}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
