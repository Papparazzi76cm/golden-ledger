import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

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
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get the base URL from the request or use default
    const url = new URL(req.url);
    const baseUrl = url.searchParams.get("baseUrl") || "https://oroinversion.lovable.app";
    
    const today = new Date().toISOString().split("T")[0];

    // Fetch articles from database
    const { data: articles, error } = await supabase
      .from("articles")
      .select("slug, date, priority")
      .order("date", { ascending: false });

    if (error) {
      console.error("Error fetching articles:", error);
      throw new Error("Failed to fetch articles from database");
    }

    console.log(`Generating sitemap with ${articles?.length || 0} articles`);

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

    // Add all articles dynamically from database
    if (articles) {
      for (const article of articles) {
        const articleDate = new Date(article.date).toISOString().split("T")[0];
        sitemap += `
  <url>
    <loc>${baseUrl}/blog/${article.slug}</loc>
    <lastmod>${articleDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${article.priority}</priority>
  </url>`;
      }
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
