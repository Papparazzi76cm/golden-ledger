import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { NewsletterSection } from '@/components/NewsletterSection';
import { articles, getAllCategories, getFeaturedArticle, getTranslatedArticle } from '@/data/articles';
import { getArticleImage } from '@/data/articleImages';
import { useLanguage } from '@/hooks/useLanguage';

const Blog = () => {
  const { t, language } = useLanguage();
  const featuredArticle = getFeaturedArticle(language);
  const categories = getAllCategories(language);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-radial-gold opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-body mb-4">
                {t.blog.badge}
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t.blog.title1} <span className="text-gradient-gold">{t.blog.titleHighlight}</span>
              </h1>
              <p className="text-lg text-muted-foreground font-body">
                {t.blog.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-gold/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link 
                to="/blog"
                className="px-4 py-2 rounded-full bg-gold text-charcoal-dark text-sm font-body font-medium transition-all"
              >
                {t.common.all}
              </Link>
              {categories.map(category => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-charcoal-light text-muted-foreground hover:text-gold hover:bg-gold/10 text-sm font-body transition-all"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (() => {
          const translated = getTranslatedArticle(featuredArticle, language);
          return (
            <section className="py-16">
              <div className="container mx-auto px-4">
                <Link to={`/blog/${featuredArticle.slug}`}>
                  <Card variant="premium" className="group overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="h-64 lg:h-auto relative overflow-hidden">
                        <img 
                          src={getArticleImage(featuredArticle.slug)}
                          alt={translated.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-card/80 to-transparent lg:bg-none" />
                      </div>
                      
                      {/* Content */}
                      <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-body">
                            {translated.category}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-gold text-charcoal-dark text-xs font-body font-medium">
                            {t.blog.featured}
                          </span>
                        </div>
                        
                        <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-gold transition-colors">
                          {translated.title}
                        </h2>
                        
                        <p className="text-muted-foreground font-body mb-6">
                          {translated.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-6 text-sm text-muted-foreground font-body mb-6">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{featuredArticle.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{featuredArticle.readTime}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(featuredArticle.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                          </div>
                        </div>
                        
                        <Button variant="gold" className="w-fit">
                          {t.blog.readArticle}
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              </div>
            </section>
          );
        })()}

        {/* Articles Grid */}
        <section className="py-16 bg-charcoal-light/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              {t.blog.latestArticles}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => {
                const translated = getTranslatedArticle(article, language);
                return (
                  <Link 
                    key={article.slug} 
                    to={`/blog/${article.slug}`}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card variant="premium" className="group h-full flex flex-col overflow-hidden">
                      {/* Image */}
                      <div className="h-48 relative overflow-hidden">
                        <img 
                          src={getArticleImage(article.slug)}
                          alt={translated.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      </div>
                      
                      {/* Content */}
                      <CardContent className="flex-1 flex flex-col p-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-body w-fit mb-3">
                          {translated.category}
                        </span>
                        
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors line-clamp-2">
                          {translated.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground font-body mb-4 flex-1 line-clamp-3">
                          {translated.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-muted-foreground font-body pt-4 border-t border-gold/10">
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{article.readTime}</span>
                          </div>
                          <span>{new Date(article.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
