import { useRef } from 'react';
import { GoldConverter } from './GoldConverter';
import { InvestmentCalculator } from './InvestmentCalculator';
import { AssetComparator } from './AssetComparator';
import { HistoricalGoldChart } from './HistoricalGoldChart';
import { ComparisonChart } from './ComparisonChart';
import { PriceAlertForm } from './PriceAlertForm';
import { CurrencySelector } from './CurrencySelector';
import { RealTimeGoldPrice } from './RealTimeGoldPrice';
import { GoldPricePrediction } from './GoldPricePrediction';
import { useLanguage } from '@/hooks/useLanguage';
import { useParallax } from '@/hooks/useParallax';
import goldTrading from '@/assets/gold-trading.jpg';

export const ToolsSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxOffset = useParallax(sectionRef, 0.15);
  
  return (
    <section ref={sectionRef} id="herramientas" className="py-24 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <img 
          src={goldTrading} 
          alt="Gold trading" 
          className="w-full h-full object-cover opacity-[0.1] transition-transform duration-100"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px) scale(1.2)` }}
        />
      </div>
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_74%_49%_/_0.03)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-body mb-4">
            {t.tools.badge}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.tools.title1} <span className="text-gradient-gold">{t.tools.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground font-body mb-6">
            {t.tools.subtitle}
          </p>
          
          {/* Currency Selector */}
          <div className="flex justify-center">
            <CurrencySelector />
          </div>
        </div>

        {/* Real-Time Price and Prediction Widgets */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="animate-fade-in">
            <RealTimeGoldPrice />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <GoldPricePrediction />
          </div>
        </div>

        {/* Historical Chart - Full Width */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <HistoricalGoldChart />
        </div>

        {/* Comparison Chart - Full Width */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <ComparisonChart />
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <GoldConverter />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <InvestmentCalculator />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <AssetComparator />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <PriceAlertForm />
          </div>
        </div>
      </div>
    </section>
  );
};
