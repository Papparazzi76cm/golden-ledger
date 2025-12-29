import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import goldBars from '@/assets/gallery-gold-bars.jpg';
import goldCoins from '@/assets/gallery-gold-coins.jpg';
import goldJewelry from '@/assets/gallery-gold-jewelry.jpg';
import goldNuggets from '@/assets/gallery-gold-nuggets.jpg';
import goldWatches from '@/assets/gallery-gold-watches.jpg';
import goldBullion from '@/assets/gallery-gold-bullion.jpg';

const galleryItems = [
  { id: 1, image: goldBars, labelEs: 'Lingotes de Oro', labelEn: 'Gold Bars', labelFr: "Lingots d'Or", labelDe: 'Goldbarren' },
  { id: 2, image: goldCoins, labelEs: 'Monedas de Inversión', labelEn: 'Investment Coins', labelFr: "Pièces d'Investissement", labelDe: 'Anlagemünzen' },
  { id: 3, image: goldJewelry, labelEs: 'Joyería Fina', labelEn: 'Fine Jewelry', labelFr: 'Bijoux Fins', labelDe: 'Feiner Schmuck' },
  { id: 4, image: goldNuggets, labelEs: 'Oro Natural', labelEn: 'Natural Gold', labelFr: 'Or Naturel', labelDe: 'Natürliches Gold' },
  { id: 5, image: goldWatches, labelEs: 'Relojes de Lujo', labelEn: 'Luxury Watches', labelFr: 'Montres de Luxe', labelDe: 'Luxusuhren' },
  { id: 6, image: goldBullion, labelEs: 'Bullion Variado', labelEn: 'Assorted Bullion', labelFr: 'Lingots Assortis', labelDe: 'Verschiedene Barren' },
];

export const GoldGallery = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const offset = window.scrollY - sectionTop;
        setScrollY(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLabel = (item: typeof galleryItems[0]) => {
    switch (language) {
      case 'en': return item.labelEn;
      case 'fr': return item.labelFr;
      case 'de': return item.labelDe;
      default: return item.labelEs;
    }
  };

  const titles = {
    es: { badge: 'Galería del Oro', title: 'Formas de', highlight: 'Inversión' },
    en: { badge: 'Gold Gallery', title: 'Forms of', highlight: 'Investment' },
    fr: { badge: "Galerie de l'Or", title: "Formes d'", highlight: 'Investissement' },
    de: { badge: 'Gold-Galerie', title: 'Formen der', highlight: 'Investition' },
  };

  const t = titles[language] || titles.es;

  return (
    <section ref={sectionRef} className="py-24 relative bg-charcoal-light/30 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(43_74%_49%_/_0.05)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-body mb-4">
            {t.badge}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.title} <span className="text-gradient-gold">{t.highlight}</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: `translateY(${scrollY * 0.02 * (index % 3 === 1 ? -1 : 1)}px)`
              }}
              onClick={() => setSelectedImage(item.id)}
            >
              <img
                src={item.image}
                alt={getLabel(item)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-heading text-lg md:text-xl font-semibold text-white drop-shadow-lg">
                  {getLabel(item)}
                </h3>
              </div>
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/40 rounded-xl transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <img
              src={galleryItems.find(i => i.id === selectedImage)?.image}
              alt="Gold"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-charcoal/80 text-white flex items-center justify-center hover:bg-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-heading text-xl bg-charcoal/80 px-4 py-2 rounded-lg">
              {getLabel(galleryItems.find(i => i.id === selectedImage)!)}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
