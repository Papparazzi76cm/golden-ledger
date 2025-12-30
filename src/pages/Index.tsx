import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeaturesSection } from '@/components/FeaturesSection';
import { GoldGallery } from '@/components/GoldGallery';
import { ToolsSection } from '@/components/ToolsSection';
import { BlogSection } from '@/components/BlogSection';
import { NewsletterSection } from '@/components/NewsletterSection';
import { Footer } from '@/components/Footer';
import { SEO, OrganizationSchema, WebSiteSchema, FinancialProductSchema } from '@/components/SEO';
import { useLanguage } from '@/hooks/useLanguage';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={t.seo?.homeTitle || "OroInversión - Tu Guía Definitiva para Invertir en Oro"}
        description={t.seo?.homeDescription || "Portal premium de inversión en oro. Precio en tiempo real, calculadoras, conversor, comparador de activos y guías educativas para inversores inteligentes."}
        type="website"
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <FinancialProductSchema 
        name="Precio del Oro en Tiempo Real"
        description="Cotización actualizada del oro en múltiples divisas con gráficos históricos y herramientas de análisis."
      />
      
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <GoldGallery />
        <ToolsSection />
        <BlogSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
