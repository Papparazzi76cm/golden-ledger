import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface GoldPriceData {
  price: number;
  change: number;
  changePercent: number;
  timestamp: Date;
}

export const useGoldPrice = () => {
  const [priceData, setPriceData] = useState<GoldPriceData>({
    price: 2634.50,
    change: 12.30,
    changePercent: 0.47,
    timestamp: new Date(),
  });

  useEffect(() => {
    // Simulate real-time price updates
    const interval = setInterval(() => {
      setPriceData(prev => {
        const fluctuation = (Math.random() - 0.5) * 5;
        const newPrice = prev.price + fluctuation;
        const newChange = newPrice - 2622.20; // Base price
        return {
          price: Math.round(newPrice * 100) / 100,
          change: Math.round(newChange * 100) / 100,
          changePercent: Math.round((newChange / 2622.20) * 10000) / 100,
          timestamp: new Date(),
        };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return priceData;
};

interface GoldPriceDisplayProps {
  size?: 'sm' | 'md' | 'lg';
  showChange?: boolean;
  className?: string;
}

export const GoldPriceDisplay = ({ 
  size = 'md', 
  showChange = true,
  className = '' 
}: GoldPriceDisplayProps) => {
  const { price, change, changePercent } = useGoldPrice();
  const isPositive = change >= 0;

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-3xl',
    lg: 'text-5xl md:text-6xl',
  };

  const changeSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg',
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-baseline gap-2">
        <span className={`${sizeClasses[size]} font-heading font-bold text-gradient-gold animate-shimmer`}>
          ${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </span>
        <span className={`${changeSizeClasses[size]} text-muted-foreground font-body`}>
          USD/oz
        </span>
      </div>
      
      {showChange && (
        <div className={`flex items-center gap-2 mt-2 ${changeSizeClasses[size]} font-body`}>
          {isPositive ? (
            <TrendingUp className="w-4 h-4 text-green-500" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500" />
          )}
          <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
            {isPositive ? '+' : ''}{change.toFixed(2)} ({changePercent.toFixed(2)}%)
          </span>
          <span className="text-muted-foreground">hoy</span>
        </div>
      )}
    </div>
  );
};
