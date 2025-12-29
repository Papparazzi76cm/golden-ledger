import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { NewsletterSection } from '@/components/NewsletterSection';
import { getArticleBySlug, getRecentArticles, getTranslatedArticle } from '@/data/articles';
import { getArticleImage } from '@/data/articleImages';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';

// Simple markdown renderer component
const MarkdownContent = ({ content }: { content: string }) => {
  const renderContent = () => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let listType: 'ul' | 'ol' | null = null;
    let inTable = false;
    let tableRows: string[][] = [];
    let tableHeaders: string[] = [];

    const flushList = () => {
      if (currentList.length > 0 && listType) {
        const ListTag = listType === 'ul' ? 'ul' : 'ol';
        elements.push(
          <ListTag key={elements.length} className={`my-4 space-y-2 ${listType === 'ul' ? 'list-disc' : 'list-decimal'} list-inside text-cream-muted`}>
            {currentList.map((item, i) => (
              <li key={i} className="font-body">{item}</li>
            ))}
          </ListTag>
        );
        currentList = [];
        listType = null;
      }
    };

    const flushTable = () => {
      if (tableHeaders.length > 0 || tableRows.length > 0) {
        elements.push(
          <div key={elements.length} className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gold/20">
                  {tableHeaders.map((header, i) => (
                    <th key={i} className="py-3 px-4 text-left font-heading text-foreground font-semibold">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} className="border-b border-gold/10">
                    {row.map((cell, j) => (
                      <td key={j} className="py-3 px-4 font-body text-muted-foreground">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableHeaders = [];
        tableRows = [];
        inTable = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Handle tables
      if (trimmedLine.startsWith('|') && trimmedLine.endsWith('|')) {
        if (!inTable) {
          flushList();
          inTable = true;
        }
        const cells = trimmedLine.slice(1, -1).split('|').map(c => c.trim());
        
        // Check if it is a separator row
        if (cells.every(c => c.match(/^[-:]+$/))) {
          return;
        }
        
        if (tableHeaders.length === 0) {
          tableHeaders = cells;
        } else {
          tableRows.push(cells);
        }
        return;
      } else if (inTable) {
        flushTable();
      }

      // Headers
      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
            {trimmedLine.slice(3)}
          </h2>
        );
        return;
      }

      if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="font-heading text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">
            {trimmedLine.slice(4)}
          </h3>
        );
        return;
      }

      if (trimmedLine.startsWith('#### ')) {
        flushList();
        elements.push(
          <h4 key={index} className="font-heading text-lg font-semibold text-gold mt-6 mb-3">
            {trimmedLine.slice(5)}
          </h4>
        );
        return;
      }

      // Bold text handling
      const formatText = (text: string) => {
        const parts = text.split(/(\*\*[^*]+\*\*)/g);
        return parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
          }
          return part;
        });
      };

      // Lists
      if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        if (listType !== 'ul') {
          flushList();
          listType = 'ul';
        }
        currentList.push(trimmedLine.slice(2));
        return;
      }

      if (/^\d+\.\s/.test(trimmedLine)) {
        if (listType !== 'ol') {
          flushList();
          listType = 'ol';
        }
        currentList.push(trimmedLine.replace(/^\d+\.\s/, ''));
        return;
      }

      // Paragraph
      if (trimmedLine.length > 0) {
        flushList();
        elements.push(
          <p key={index} className="font-body text-cream-muted leading-relaxed my-4">
            {formatText(trimmedLine)}
          </p>
        );
      }
    });

    flushList();
    flushTable();

    return elements;
  };

  return <div className="prose-custom">{renderContent()}</div>;
};

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t, language } = useLanguage();
  
  const article = slug ? getArticleBySlug(slug) : undefined;
  const translated = article ? getTranslatedArticle(article, language) : undefined;
  const recentArticles = getRecentArticles(3, language).filter(a => a.slug !== slug);

  // Smooth scroll to top when article loads or slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
              {t.blog.articleNotFound}
            </h1>
            <p className="text-muted-foreground font-body mb-8">
              {t.blog.articleNotFoundDesc}
            </p>
            <Button variant="gold" onClick={() => navigate('/blog')}>
              {t.blog.backToBlog}
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: t.blog.linkCopied,
      description: t.blog.linkCopiedDesc,
    });
  };

  const handleBookmark = () => {
    toast({
      title: t.blog.articleSaved,
      description: t.blog.articleSavedDesc,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Image */}
        <div className="w-full h-64 md:h-96 relative overflow-hidden">
          <img 
            src={getArticleImage(article.slug)}
            alt={translated!.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Breadcrumb */}
        <div className="border-b border-gold/10">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center gap-2 text-sm font-body">
              <Link to="/" className="text-muted-foreground hover:text-gold transition-colors">
                {t.common.home}
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <Link to="/blog" className="text-muted-foreground hover:text-gold transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground">{translated!.category}</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <section className="py-12 relative">
          <div className="absolute inset-0 bg-gradient-radial-gold opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/blog')}
                className="mb-6 text-muted-foreground hover:text-gold"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t.blog.backToBlog}
              </Button>

              <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-body mb-6">
                {translated!.category}
              </span>

              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {translated!.title}
              </h1>

              <p className="text-lg text-muted-foreground font-body mb-8">
                {translated!.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-gold/10">
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} {t.blog.readTime}</span>
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  <Button variant="ghost" size="icon" onClick={handleShare}>
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={handleBookmark}>
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <MarkdownContent content={translated!.content} />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gold/10">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-4">{t.blog.tags}</h4>
                <div className="flex flex-wrap gap-2">
                  {translated!.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full bg-charcoal-light text-muted-foreground text-sm font-body hover:bg-gold/10 hover:text-gold transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 p-6 rounded-xl bg-charcoal-light/50 border border-gold/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-1">{t.blog.wasUseful}</h4>
                    <p className="text-sm text-muted-foreground font-body">{t.blog.shareWithOthers}</p>
                  </div>
                  <Button variant="gold-outline" onClick={handleShare}>
                    <Share2 className="w-4 h-4 mr-2" />
                    {t.blog.share}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-charcoal-light/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              {t.blog.relatedArticles}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map(relatedArticle => {
                const relatedTranslated = getTranslatedArticle(relatedArticle, language);
                return (
                  <Link key={relatedArticle.slug} to={`/blog/${relatedArticle.slug}`}>
                    <Card variant="premium" className="group h-full overflow-hidden">
                      <div className="h-40 relative overflow-hidden">
                        <img 
                          src={getArticleImage(relatedArticle.slug)}
                          alt={relatedTranslated.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      </div>
                      <CardContent className="p-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-body mb-3">
                          {relatedTranslated.category}
                        </span>
                        
                        <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-gold transition-colors line-clamp-2">
                          {relatedTranslated.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground font-body line-clamp-2 mb-4">
                          {relatedTranslated.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-2 text-xs text-muted-foreground font-body">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{relatedArticle.readTime}</span>
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

export default ArticlePage;
