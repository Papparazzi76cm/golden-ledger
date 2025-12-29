import { Link } from 'react-router-dom';
import { Clock, ArrowRight, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getRecentArticles } from '@/data/articles';

export const BlogSection = () => {
  const recentArticles = getRecentArticles(4);
  const featuredArticle = recentArticles.find(a => a.featured);
  const otherArticles = recentArticles.filter(a => !a.featured).slice(0, 3);

  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-body mb-4">
              Blog & Educación
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Conocimiento que <span className="text-gradient-gold">Multiplica</span>
            </h2>
          </div>
          <Link to="/blog">
            <Button variant="gold-outline">
              Ver todos los artículos
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          {featuredArticle && (
            <Link to={`/blog/${featuredArticle.slug}`}>
              <Card 
                variant="premium"
                className="group cursor-pointer overflow-hidden lg:row-span-2 h-full"
              >
                <div className="h-full flex flex-col">
                  {/* Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="font-heading text-4xl text-gold">Au</span>
                    </div>
                  </div>
                  <CardContent className="flex-1 flex flex-col p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-body w-fit mb-4">
                      {featuredArticle.category}
                    </span>
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm flex-1 mb-4">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground font-body">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          )}

          {/* Other Articles */}
          <div className="space-y-4">
            {otherArticles.map((article) => (
              <Link key={article.slug} to={`/blog/${article.slug}`}>
                <Card 
                  variant="ghost"
                  className="group cursor-pointer p-4 hover:bg-gold/5 transition-all duration-300 border border-gold/10 hover:border-gold/30"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                      <span className="font-heading text-lg text-gold">Au</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-gold/10 text-gold text-xs font-body mb-2">
                        {article.category}
                      </span>
                      <h3 className="font-heading text-lg font-medium text-foreground group-hover:text-gold transition-colors line-clamp-2 mb-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground font-body">
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
