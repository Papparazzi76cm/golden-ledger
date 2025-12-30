import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Article data - mirroring the structure from src/data/articles.ts
const articles = [
  {
    slug: "como-comprar-oro-fisico-guia-completa",
    date: "2024-12-15",
    priority: 0.8,
  },
  {
    slug: "oro-vs-inflacion-analisis-historico",
    date: "2024-12-10",
    priority: 0.7,
  },
  {
    slug: "tipos-de-oro-inversion",
    date: "2024-12-05",
    priority: 0.7,
  },
  {
    slug: "almacenamiento-seguro-oro",
    date: "2024-11-28",
    priority: 0.7,
  },
  {
    slug: "factores-precio-oro",
    date: "2024-11-20",
    priority: 0.7,
  },
  {
    slug: "oro-en-portfolio-diversificado",
    date: "2024-11-15",
    priority: 0.7,
  },
];

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get the base URL from the request or use default
    const url = new URL(req.url);
    const baseUrl = url.searchParams.get("baseUrl") || "https://oroinversion.lovable.app";
    
    const today = new Date().toISOString().split("T")[0];

    // Generate XML
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;

    // Add all articles dynamically
    for (const article of articles) {
      sitemap += `
  <url>
    <loc>${baseUrl}/blog/${article.slug}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${article.priority}</priority>
  </url>`;
    }

    sitemap += `
</urlset>`;

    return new Response(sitemap, {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate sitemap" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
