-- Create table to store gold prices from API
CREATE TABLE public.gold_prices (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  price_usd NUMERIC NOT NULL,
  price_eur NUMERIC,
  price_gbp NUMERIC,
  price_chf NUMERIC,
  price_jpy NUMERIC,
  change_24h NUMERIC,
  change_percent_24h NUMERIC,
  high_24h NUMERIC,
  low_24h NUMERIC,
  fetched_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.gold_prices ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read prices (public data)
CREATE POLICY "Anyone can read gold prices" 
ON public.gold_prices 
FOR SELECT 
USING (true);

-- Create index for fast queries on latest price
CREATE INDEX idx_gold_prices_fetched_at ON public.gold_prices(fetched_at DESC);

-- Enable pg_cron and pg_net extensions for scheduled API calls
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Grant usage to postgres role for cron
GRANT USAGE ON SCHEMA cron TO postgres;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA cron TO postgres;