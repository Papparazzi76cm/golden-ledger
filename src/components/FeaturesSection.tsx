import { BookOpen, Shield, TrendingUp, Landmark, Globe, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: TrendingUp,
    title: 'Precio en Tiempo Real',
    description: 'Seguimiento del precio del oro actualizado constantemente desde fuentes oficiales.',
  },
  {
    icon: Shield,
    title: 'Protección Patrimonial',
    description: 'El oro ha demostrado ser un refugio seguro durante crisis económicas y geopolíticas.',
  },
  {
    icon: Landmark,
    title: 'Diversificación',
    description: 'Reduce el riesgo de tu cartera añadiendo un activo descorrelacionado con los mercados.',
  },
  {
    icon: BookOpen,
    title: 'Educación Financiera',
    description: 'Guías completas y artículos para convertirte en un inversor informado.',
  },
  {
    icon: Globe,
    title: 'Mercado Global',
    description: 'El oro se comercia 24/7 en mercados de todo el mundo con alta liquidez.',
  },
  {
    icon: Award,
    title: 'Valor Intrínseco',
    description: 'A diferencia del dinero fiat, el oro mantiene su valor a través de los siglos.',
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 relative bg-charcoal-light/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-body mb-4">
            ¿Por qué Oro?
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            El Metal <span className="text-gradient-gold">Eterno</span>
          </h2>
          <p className="text-muted-foreground font-body">
            Descubre por qué el oro ha sido la reserva de valor más confiable durante milenios
          </p>
        </div>

        {/* Features Grid */}
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
