import { useState } from 'react';
import { Bell, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "¡Suscripción exitosa!",
        description: "Recibirás nuestras alertas y análisis en tu correo.",
      });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_74%_49%_/_0.1)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-8 animate-gold-pulse">
            <Bell className="w-8 h-8 text-gold" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            No te Pierdas <span className="text-gradient-gold">Ninguna Oportunidad</span>
          </h2>
          
          <p className="text-lg text-muted-foreground font-body mb-8 max-w-xl mx-auto">
            Recibe alertas de precio, análisis de mercado y guías exclusivas directamente en tu email.
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 text-gold">
              <CheckCircle className="w-6 h-6" />
              <span className="font-body text-lg">¡Gracias por suscribirte!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12"
              />
              <Button type="submit" variant="gold" size="lg">
                Suscribirme
              </Button>
            </form>
          )}

          <p className="mt-4 text-xs text-muted-foreground font-body">
            Sin spam. Cancela cuando quieras. Tu privacidad es nuestra prioridad.
          </p>
        </div>
      </div>
    </section>
  );
};
