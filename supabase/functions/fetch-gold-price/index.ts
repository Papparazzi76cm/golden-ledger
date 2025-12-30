import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const GOLDAPI_KEY = Deno.env.get('GOLDAPI_KEY');
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!GOLDAPI_KEY) {
      console.error('GOLDAPI_KEY is not configured');
      throw new Error('GOLDAPI_KEY is not configured');
    }

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      console.error('Supabase credentials not configured');
      throw new Error('Supabase credentials not configured');
    }

    console.log('Fetching gold price from GoldAPI.io...');

    // Fetch gold price in USD
    const response = await fetch('https://www.goldapi.io/api/XAU/USD', {
      method: 'GET',
      headers: {
        'x-access-token': GOLDAPI_KEY,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GoldAPI error:', response.status, errorText);
      throw new Error(`GoldAPI error: ${response.status}`);
    }

    const goldData = await response.json();
    console.log('Gold price fetched:', goldData);

    // Extract price data
    const priceUsd = goldData.price;
    const change24h = goldData.ch || 0;
    const changePercent24h = goldData.chp || 0;
    const high24h = goldData.high_price || priceUsd * 1.02;
    const low24h = goldData.low_price || priceUsd * 0.98;

    // Convert to other currencies using approximate rates
    // In production, you might want to fetch these from a currency API
    const rates = {
      EUR: 0.92,
      GBP: 0.79,
      CHF: 0.88,
      JPY: 157.5,
    };

    // Create Supabase client with service role key to insert data
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Insert the price into the database
    const { data: insertedData, error: insertError } = await supabase
      .from('gold_prices')
      .insert({
        price_usd: priceUsd,
        price_eur: priceUsd * rates.EUR,
        price_gbp: priceUsd * rates.GBP,
        price_chf: priceUsd * rates.CHF,
        price_jpy: priceUsd * rates.JPY,
        change_24h: change24h,
        change_percent_24h: changePercent24h,
        high_24h: high24h,
        low_24h: low24h,
      })
      .select()
      .single();

    if (insertError) {
      console.error('Error inserting gold price:', insertError);
      throw insertError;
    }

    console.log('Gold price saved to database:', insertedData);

    // Return the fetched price
    return new Response(
      JSON.stringify({
        success: true,
        price: {
          usd: priceUsd,
          eur: priceUsd * rates.EUR,
          gbp: priceUsd * rates.GBP,
          chf: priceUsd * rates.CHF,
          jpy: priceUsd * rates.JPY,
          change_24h: change24h,
          change_percent_24h: changePercent24h,
          high_24h: high24h,
          low_24h: low24h,
          fetched_at: insertedData.fetched_at,
        },
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in fetch-gold-price function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
