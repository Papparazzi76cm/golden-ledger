import { GoldConverter } from './GoldConverter';
import { InvestmentCalculator } from './InvestmentCalculator';
import { AssetComparator } from './AssetComparator';
import { HistoricalGoldChart } from './HistoricalGoldChart';
import { ComparisonChart } from './ComparisonChart';
import { PriceAlertForm } from './PriceAlertForm';
import { CurrencySelector } from './CurrencySelector';
import { useLanguage } from '@/hooks/useLanguage';

export const ToolsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="herramientas" className="py-24 relative">
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

        {/* Historical Chart - Full Width */}
        <div className="mb-12 animate-fade-in">
          <HistoricalGoldChart />
        </div>

        {/* Comparison Chart - Full Width */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <ComparisonChart />
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <GoldConverter />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <InvestmentCalculator />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <AssetComparator />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <PriceAlertForm />
          </div>
        </div>
      </div>
    </section>
  );
};
