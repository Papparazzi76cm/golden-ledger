import { GoldConverter } from './GoldConverter';
import { InvestmentCalculator } from './InvestmentCalculator';
import { AssetComparator } from './AssetComparator';
import { HistoricalGoldChart } from './HistoricalGoldChart';

export const ToolsSection = () => {
  return (
    <section id="herramientas" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_74%_49%_/_0.03)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-body mb-4">
            Herramientas Profesionales
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Toma Decisiones <span className="text-gradient-gold">Informadas</span>
          </h2>
          <p className="text-muted-foreground font-body">
            Calculadoras y herramientas interactivas para analizar tus inversiones en oro
          </p>
        </div>

        {/* Historical Chart - Full Width */}
        <div className="mb-12 animate-fade-in">
          <HistoricalGoldChart />
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <GoldConverter />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <InvestmentCalculator />
          </div>
          <div className="animate-fade-in md:col-span-2 lg:col-span-1" style={{ animationDelay: '0.3s' }}>
            <AssetComparator />
          </div>
        </div>
      </div>
    </section>
  );
};
