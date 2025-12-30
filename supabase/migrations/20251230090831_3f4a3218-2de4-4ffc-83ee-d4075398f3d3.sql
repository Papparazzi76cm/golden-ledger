-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create articles metadata table
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  date DATE NOT NULL,
  priority DECIMAL(2,1) NOT NULL DEFAULT 0.7,
  featured BOOLEAN NOT NULL DEFAULT false,
  author TEXT NOT NULL DEFAULT 'Equipo Editorial',
  read_time TEXT NOT NULL DEFAULT '5 min',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Public read access (articles are public content)
CREATE POLICY "Articles are publicly readable" 
ON public.articles 
FOR SELECT 
USING (true);

-- Insert existing articles
INSERT INTO public.articles (slug, date, priority, featured, author, read_time) VALUES
  ('como-comprar-oro-fisico-guia-completa', '2024-12-15', 0.8, true, 'Equipo Editorial', '12 min'),
  ('oro-vs-inflacion-analisis-historico', '2024-12-10', 0.7, false, 'Equipo Editorial', '10 min'),
  ('tipos-de-oro-inversion', '2024-12-05', 0.7, false, 'Equipo Editorial', '8 min'),
  ('almacenamiento-seguro-oro', '2024-11-28', 0.7, false, 'Equipo Editorial', '9 min'),
  ('factores-precio-oro', '2024-11-20', 0.7, false, 'Equipo Editorial', '11 min'),
  ('oro-en-portfolio-diversificado', '2024-11-15', 0.7, false, 'Equipo Editorial', '10 min');

-- Trigger for updated_at
CREATE TRIGGER update_articles_updated_at
BEFORE UPDATE ON public.articles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();