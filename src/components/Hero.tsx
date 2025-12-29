import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GoldPriceDisplay } from './GoldPriceDisplay';
import { useLanguage } from '@/hooks/useLanguage';
import heroImage from '@/assets/hero-gold-bars.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Gold bars investment" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>
      <div className="absolute inset-0 bg-gradient-radial-gold" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(20_14%_8%)_0%,_transparent_70%)]" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold animate-gold-pulse" />
            <span className="text-sm text-gold font-body">{t.hero.badge}</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {t.hero.title1}{' '}
            <span className="text-gradient-gold">{t.hero.titleHighlight}</span>
            <br />
            {t.hero.title2}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t.hero.subtitle}
          </p>

          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <GoldPriceDisplay size="lg" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="gold" size="xl">
              {t.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="gold-outline" size="xl">
              <Play className="w-5 h-5" />
              {t.hero.demo}
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-gold/10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-sm text-muted-foreground mb-6 font-body">{t.hero.trustTitle}</p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
              <span className="font-heading text-lg opacity-60 hover:opacity-100 hover:text-gold transition-all cursor-pointer">LBMA</span>
              <span className="font-heading text-lg opacity-60 hover:opacity-100 hover:text-gold transition-all cursor-pointer">World Gold Council</span>
              <span className="font-heading text-lg opacity-60 hover:opacity-100 hover:text-gold transition-all cursor-pointer">COMEX</span>
              <span className="font-heading text-lg opacity-60 hover:opacity-100 hover:text-gold transition-all cursor-pointer">Reuters</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-gold animate-pulse" />
        </div>
      </div>
    </section>
  );
};
