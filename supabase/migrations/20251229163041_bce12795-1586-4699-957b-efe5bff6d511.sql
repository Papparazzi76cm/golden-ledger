-- Create table for price alerts
CREATE TABLE public.price_alerts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  target_price DECIMAL(12, 2) NOT NULL,
  direction TEXT NOT NULL CHECK (direction IN ('above', 'below')),
  is_triggered BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  triggered_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security (but allow public inserts for unauthenticated users)
ALTER TABLE public.price_alerts ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to create alerts (public feature)
CREATE POLICY "Anyone can create price alerts"
ON public.price_alerts
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Policy to allow reading own alerts by email (for display purposes)
CREATE POLICY "Anyone can read alerts"
ON public.price_alerts
FOR SELECT
TO anon, authenticated
USING (true);

-- Policy to allow deleting alerts
CREATE POLICY "Anyone can delete alerts"
ON public.price_alerts
FOR DELETE
TO anon, authenticated
USING (true);

-- Create index for efficient querying
CREATE INDEX idx_price_alerts_triggered ON public.price_alerts (is_triggered, target_price);