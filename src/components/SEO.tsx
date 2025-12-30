import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  article?: {
    author?: string;
    publishedTime?: string;
    tags?: string[];
  };
  noindex?: boolean;
}

export const SEO = ({ 
  title, 
  description, 
  canonical, 
  image, 
  type = 'website',
  article,
  noindex = false
}: SEOProps) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const siteName = 'OroInversión';
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');
  const imageUrl = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : undefined;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta property="og:locale" content="es_ES" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:locale:alternate" content="de_DE" />

      {/* Twitter */}
      <meta name="twitter:card" content={imageUrl ? "summary_large_image" : "summary"} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {/* Article specific meta tags */}
      {type === 'article' && article && (
        <>
          {article.author && <meta property="article:author" content={article.author} />}
          {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
    </Helmet>
  );
};

// Schema.org JSON-LD components
interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}

export const ArticleSchema = ({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url
}: ArticleSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "image": [image],
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": [{
      "@type": "Person",
      "name": author
    }],
    "description": description,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "publisher": {
      "@type": "Organization",
      "name": "OroInversión",
      "logo": {
        "@type": "ImageObject",
        "url": `${typeof window !== 'undefined' ? window.location.origin : ''}/favicon.ico`
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface OrganizationSchemaProps {
  name?: string;
  description?: string;
}

export const OrganizationSchema = ({ 
  name = "OroInversión",
  description = "Portal premium de inversión en oro. Precio en tiempo real, calculadoras, conversor, comparador de activos y guías educativas."
}: OrganizationSchemaProps) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "description": description,
    "url": siteUrl,
    "logo": `${siteUrl}/favicon.ico`,
    "sameAs": []
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface WebSiteSchemaProps {
  name?: string;
  description?: string;
}

export const WebSiteSchema = ({
  name = "OroInversión",
  description = "Portal premium de inversión en oro. Precio en tiempo real, calculadoras, conversor, comparador de activos y guías educativas."
}: WebSiteSchemaProps) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "description": description,
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/blog?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface FinancialProductSchemaProps {
  name: string;
  description: string;
  priceUSD?: number;
}

export const FinancialProductSchema = ({
  name,
  description,
  priceUSD
}: FinancialProductSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": name,
    "description": description,
    ...(priceUSD && {
      "offers": {
        "@type": "Offer",
        "price": priceUSD,
        "priceCurrency": "USD"
      }
    })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
