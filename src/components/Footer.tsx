import { Link } from 'react-router-dom';
import { Mail, Twitter, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  recursos: [
    { label: 'Guía del Oro', href: '#guia' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'Conversor', href: '#conversor' },
    { label: 'Comparador', href: '#comparador' },
    { label: 'Glosario', href: '#glosario' },
  ],
  aprende: [
    { label: 'Cómo Comprar Oro', href: '#comprar' },
    { label: 'Tipos de Oro', href: '#tipos' },
    { label: 'Almacenamiento', href: '#almacenamiento' },
    { label: 'Fiscalidad', href: '#fiscalidad' },
    { label: 'Blog', href: '#blog' },
  ],
  legal: [
    { label: 'Aviso Legal', href: '#aviso' },
    { label: 'Privacidad', href: '#privacidad' },
    { label: 'Cookies', href: '#cookies' },
    { label: 'Disclaimer', href: '#disclaimer' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-charcoal-dark border-t border-gold/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                <span className="text-charcoal-dark font-heading font-bold text-xl">Au</span>
              </div>
              <span className="font-heading text-xl font-semibold text-foreground">
                Oro<span className="text-gold">Inversión</span>
              </span>
            </Link>
            <p className="text-muted-foreground font-body text-sm mb-6 max-w-sm">
              Tu portal de referencia para inversiones en metales preciosos. 
              Información, herramientas y educación financiera de calidad.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-gold/20 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-gold/20 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-gold/20 transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-gold/20 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-gold transition-colors font-body text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Aprende</h4>
            <ul className="space-y-3">
              {footerLinks.aprende.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-gold transition-colors font-body text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-gold transition-colors font-body text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-body">
              © {new Date().getFullYear()} OroInversión. Todos los derechos reservados.
            </p>
            <p className="text-xs text-muted-foreground font-body text-center max-w-xl">
              <strong>Disclaimer:</strong> Este sitio es únicamente informativo y educativo. 
              No constituye asesoramiento financiero, de inversión o legal. 
              Consulta a un profesional antes de tomar decisiones de inversión.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
