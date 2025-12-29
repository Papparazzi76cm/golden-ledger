import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeaturesSection } from '@/components/FeaturesSection';
import { GoldGallery } from '@/components/GoldGallery';
import { ToolsSection } from '@/components/ToolsSection';
import { BlogSection } from '@/components/BlogSection';
import { NewsletterSection } from '@/components/NewsletterSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
