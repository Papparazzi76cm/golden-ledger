import { BookOpen, Shield, TrendingUp, Landmark, Globe, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import goldAbstract from '@/assets/gold-abstract.jpg';

export const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: TrendingUp, ...t.features.items.realTimePrice },
    { icon: Shield, ...t.features.items.wealthProtection },
    { icon: Landmark, ...t.features.items.diversification },
    { icon: BookOpen, ...t.features.items.financialEducation },
    { icon: Globe, ...t.features.items.globalMarket },
    { icon: Award, ...t.features.items.intrinsicValue },
  ];

  return (
    <section className="py-24 relative bg-charcoal-light/50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={goldAbstract} 
          alt="Gold abstract background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-body mb-4">
            {t.features.badge}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.features.title1} <span className="text-gradient-gold">{t.features.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground font-body">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              variant="ghost"
              className="group p-6 hover:bg-gold/5 transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
