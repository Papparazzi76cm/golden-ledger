import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GoldPriceDisplay } from './GoldPriceDisplay';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '@/hooks/useLanguage';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { 
      label: t.nav.learn, 
      href: '#aprender',
      submenu: [
        { label: t.nav.goldGuide, href: '#guia' },
        { label: t.nav.goldHistory, href: '#historia' },
        { label: t.nav.glossary, href: '#glosario' },
      ]
    },
    { 
      label: t.nav.tools, 
      href: '#herramientas',
      submenu: [
        { label: t.nav.calculator, href: '#calculadora' },
        { label: t.nav.converter, href: '#conversor' },
        { label: t.nav.comparator, href: '#comparador' },
      ]
    },
    { label: t.nav.markets, href: '#mercados' },
    { label: t.nav.blog, href: '#blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-charcoal-dark/95 backdrop-blur-md border-b border-gold/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:shadow-gold-lg transition-all duration-300">
              <span className="text-charcoal-dark font-heading font-bold text-xl">Au</span>
            </div>
            <span className="font-heading text-xl font-semibold text-foreground hidden sm:block">
              Oro<span className="text-gold">Inversión</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <a 
                  href={link.href}
                  className="flex items-center gap-1 text-cream-muted hover:text-gold transition-colors duration-300 font-body text-sm"
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {link.submenu && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-charcoal-light border border-gold/20 rounded-lg shadow-elegant py-2 min-w-[180px]">
                      {link.submenu.map((sublink) => (
                        <a
                          key={sublink.label}
                          href={sublink.href}
                          className="block px-4 py-2 text-sm text-cream-muted hover:text-gold hover:bg-gold/5 transition-colors duration-200 font-body"
                        >
                          {sublink.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSelector />
            <div className="hidden md:block">
              <GoldPriceDisplay size="sm" showChange={false} />
            </div>
            
            <Button variant="gold-outline" size="sm" className="hidden sm:flex">
              {t.nav.alerts}
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-gold transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-charcoal-dark/98 backdrop-blur-md border-t border-gold/10">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-lg text-cream-muted hover:text-gold transition-colors font-body"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gold/10">
              <GoldPriceDisplay size="sm" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
