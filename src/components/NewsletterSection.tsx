import { useState, useRef } from 'react';
import { Bell, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';
import { useParallax } from '@/hooks/useParallax';
import goldVault from '@/assets/gold-vault.jpg';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxOffset = useParallax(sectionRef, 0.25);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: t.newsletter.successTitle,
        description: t.newsletter.successDesc,
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <img 
          src={goldVault} 
          alt="Gold vault" 
          className="w-full h-full object-cover opacity-20 transition-transform duration-100"
          style={{ transform: `translateY(${parallaxOffset * 0.35}px) scale(1.15)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/80" />
      </div>
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_74%_49%_/_0.1)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-8 animate-gold-pulse">
            <Bell className="w-8 h-8 text-gold" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.newsletter.title1} <span className="text-gradient-gold">{t.newsletter.titleHighlight}</span>
          </h2>
          
          <p className="text-lg text-muted-foreground font-body mb-8 max-w-xl mx-auto">
            {t.newsletter.subtitle}
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 text-gold">
              <CheckCircle className="w-6 h-6" />
              <span className="font-body text-lg">{t.newsletter.thanks}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={t.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12"
              />
              <Button type="submit" variant="gold" size="lg">
                {t.newsletter.subscribe}
              </Button>
            </form>
          )}

          <p className="mt-4 text-xs text-muted-foreground font-body">
            {t.newsletter.privacy}
          </p>
        </div>
      </div>
    </section>
  );
};
