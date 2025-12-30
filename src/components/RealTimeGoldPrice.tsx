import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, RefreshCw, Wifi, WifiOff } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useCurrency } from '@/hooks/useCurrency';
import { Button } from '@/components/ui/button';

interface GoldPriceData {
  price: number;
  change: number;
  changePercent: number;
  high24h: number;
  low24h: number;
  timestamp: Date;
  isLive: boolean;
}

// Simulated real-time price based on actual Dec 2025 prices
// When API is configured, this will use real data
const useRealTimeGoldPrice = () => {
  const [priceData, setPriceData] = useState<GoldPriceData>({
    price: 4375.00,
    change: 43.39,
    changePercent: 1.00,
    high24h: 4550.00,
    low24h: 4330.00,
    timestamp: new Date(),
    isLive: false, // Will be true when using real API
  });
  const [isLoading, setIsLoading] = useState(false);

  // Simulate price updates with realistic market behavior
  useEffect(() => {
    const basePrice = 4375;
    const volatility = 0.002; // 0.2% volatility per update
    
    const updatePrice = () => {
      setPriceData(prev => {
        // Random walk with mean reversion
        const randomChange = (Math.random() - 0.5) * 2 * basePrice * volatility;
        const meanReversion = (basePrice - prev.price) * 0.1;
        const newPrice = prev.price + randomChange + meanReversion;
        
        // Keep within realistic bounds
        const boundedPrice = Math.max(4200, Math.min(4600, newPrice));
        const change = boundedPrice - 4332.98; // Previous day close
        
        return {
          price: Math.round(boundedPrice * 100) / 100,
          change: Math.round(change * 100) / 100,
          changePercent: Math.round((change / 4332.98) * 10000) / 100,
          high24h: Math.max(prev.high24h, boundedPrice),
          low24h: Math.min(prev.low24h, boundedPrice),
          timestamp: new Date(),
          isLive: false,
        };
      });
    };

    // Update every 5 seconds
    const interval = setInterval(updatePrice, 5000);
    return () => clearInterval(interval);
  }, []);

  const refresh = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setPriceData(prev => ({
        ...prev,
        timestamp: new Date(),
      }));
      setIsLoading(false);
    }, 500);
  }, []);

  return { priceData, isLoading, refresh };
};

export const RealTimeGoldPrice = () => {
  const { language } = useLanguage();
  const { formatPrice, currency } = useCurrency();
  const { priceData, isLoading, refresh } = useRealTimeGoldPrice();
  
  const isPositive = priceData.change >= 0;

  const texts = {
    es: { 
      title: 'Precio del Oro en Tiempo Real',
      high: 'Máx 24h',
      low: 'Mín 24h',
      lastUpdate: 'Última actualización',
      perOunce: '/oz',
      live: 'EN VIVO',
      simulated: 'SIMULADO',
    },
    en: { 
      title: 'Real-Time Gold Price',
      high: '24h High',
      low: '24h Low',
      lastUpdate: 'Last update',
      perOunce: '/oz',
      live: 'LIVE',
      simulated: 'SIMULATED',
    },
    fr: { 
      title: 'Prix de l\'Or en Temps Réel',
      high: 'Max 24h',
      low: 'Min 24h',
      lastUpdate: 'Dernière mise à jour',
      perOunce: '/oz',
      live: 'EN DIRECT',
      simulated: 'SIMULÉ',
    },
    de: { 
      title: 'Goldpreis in Echtzeit',
      high: '24h Hoch',
      low: '24h Tief',
      lastUpdate: 'Letzte Aktualisierung',
      perOunce: '/oz',
      live: 'LIVE',
      simulated: 'SIMULIERT',
    },
  };

  const t = texts[language] || texts.en;

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(language === 'es' ? 'es-ES' : language === 'fr' ? 'fr-FR' : language === 'de' ? 'de-DE' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <Card className="glass-card border-gold/20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full animate-pulse ${priceData.isLive ? 'bg-green-500' : 'bg-yellow-500'}`} />
            <span className={`text-xs font-medium ${priceData.isLive ? 'text-green-500' : 'text-yellow-500'}`}>
              {priceData.isLive ? t.live : t.simulated}
            </span>
            {priceData.isLive ? (
              <Wifi className="w-3 h-3 text-green-500" />
            ) : (
              <WifiOff className="w-3 h-3 text-yellow-500" />
            )}
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={refresh}
            disabled={isLoading}
            className="h-8 w-8 p-0"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </Button>
        </div>

        {/* Main Price */}
        <div className="text-center mb-6">
          <div className="text-4xl md:text-5xl font-heading font-bold text-gradient-gold animate-shimmer mb-2">
            {formatPrice(priceData.price)}
          </div>
          <div className="text-sm text-muted-foreground">
            {currency} {t.perOunce}
          </div>
          
          {/* Change */}
          <div className={`flex items-center justify-center gap-2 mt-3 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? (
              <TrendingUp className="w-5 h-5" />
            ) : (
              <TrendingDown className="w-5 h-5" />
            )}
            <span className="text-lg font-semibold">
              {isPositive ? '+' : ''}{formatPrice(priceData.change)} ({priceData.changePercent.toFixed(2)}%)
            </span>
          </div>
        </div>

        {/* 24h Range */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/30">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">{t.low}</p>
            <p className="text-sm font-semibold text-red-400">{formatPrice(priceData.low24h)}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">{t.high}</p>
            <p className="text-sm font-semibold text-green-400">{formatPrice(priceData.high24h)}</p>
          </div>
        </div>

        {/* Price Range Bar */}
        <div className="mt-4 relative">
          <div className="h-2 bg-gradient-to-r from-red-500/30 via-yellow-500/30 to-green-500/30 rounded-full" />
          <div 
            className="absolute top-0 w-3 h-3 bg-gold rounded-full border-2 border-background transform -translate-x-1/2 -translate-y-0.5 shadow-lg"
            style={{ 
              left: `${((priceData.price - priceData.low24h) / (priceData.high24h - priceData.low24h)) * 100}%` 
            }}
          />
        </div>

        {/* Last Update */}
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">
            {t.lastUpdate}: {formatTime(priceData.timestamp)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
