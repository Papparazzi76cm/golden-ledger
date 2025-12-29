import { useState, useEffect } from 'react';
import { Bell, Plus, Trash2, TrendingUp, TrendingDown, Mail, CheckCircle, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useGoldPrice } from './GoldPriceDisplay';
import { supabase } from '@/integrations/supabase/client';

interface PriceAlert {
  id: string;
  email: string;
  target_price: number;
  direction: 'above' | 'below';
  is_triggered: boolean;
  created_at: string;
}

export const PriceAlertForm = () => {
  const { price: currentPrice } = useGoldPrice();
  const { toast } = useToast();
  
  const [email, setEmail] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const [direction, setDirection] = useState<'above' | 'below'>('above');
  const [alerts, setAlerts] = useState<PriceAlert[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load alerts on mount
  useEffect(() => {
    loadAlerts();
  }, []);

  const loadAlerts = async () => {
    try {
      const { data, error } = await supabase
        .from('price_alerts')
        .select('*')
        .eq('is_triggered', false)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      const typedData = (data || []).map(d => ({
        ...d,
        direction: d.direction as 'above' | 'below'
      }));
      setAlerts(typedData);
    } catch (error) {
      console.error('Error loading alerts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !targetPrice) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor introduce un email válido.",
        variant: "destructive",
      });
      return;
    }

    const priceValue = parseFloat(targetPrice);
    if (isNaN(priceValue) || priceValue <= 0) {
      toast({
        title: "Precio inválido",
        description: "Por favor introduce un precio válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('price_alerts')
        .insert({
          email: email.toLowerCase().trim(),
          target_price: priceValue,
          direction,
        })
        .select()
        .single();

      if (error) throw error;

      // Type cast the direction field
      const typedAlert: PriceAlert = {
        ...data,
        direction: data.direction as 'above' | 'below'
      };
      setAlerts(prev => [typedAlert, ...prev]);
      setEmail('');
      setTargetPrice('');
      setEmail('');
      setTargetPrice('');

      toast({
        title: "Alerta creada",
        description: `Te notificaremos cuando el oro ${direction === 'above' ? 'supere' : 'baje de'} $${priceValue.toLocaleString()}.`,
      });
    } catch (error) {
      console.error('Error creating alert:', error);
      toast({
        title: "Error",
        description: "No se pudo crear la alerta. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeAlert = async (id: string) => {
    try {
      const { error } = await supabase
        .from('price_alerts')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setAlerts(prev => prev.filter(a => a.id !== id));
      toast({
        title: "Alerta eliminada",
        description: "La alerta de precio ha sido eliminada.",
      });
    } catch (error) {
      console.error('Error deleting alert:', error);
      toast({
        title: "Error",
        description: "No se pudo eliminar la alerta.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card variant="premium" className="w-full">
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 animate-gold-pulse">
          <Bell className="w-6 h-6 text-gold" />
        </div>
        <CardTitle className="text-xl">Alertas de Precio</CardTitle>
        <p className="text-sm text-muted-foreground font-body">
          Recibe un email cuando el oro alcance tu precio objetivo
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Current Price Display */}
        <div className="text-center p-4 bg-charcoal/50 rounded-lg border border-gold/10">
          <p className="text-sm text-muted-foreground font-body mb-1">Precio actual</p>
          <p className="font-heading text-2xl text-gold">
            ${currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD/oz
          </p>
        </div>

        {/* Alert Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground font-body flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email para notificaciones
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              maxLength={255}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground font-body">
                Precio objetivo (USD)
              </label>
              <Input
                type="number"
                value={targetPrice}
                onChange={(e) => setTargetPrice(e.target.value)}
                placeholder="2700"
                min="0"
                max="100000"
                step="0.01"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground font-body">
                Condición
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setDirection('above')}
                  className={`flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-sm font-body transition-all ${
                    direction === 'above'
                      ? 'bg-green-500/20 text-green-400 border border-green-500'
                      : 'bg-charcoal-light text-muted-foreground border border-gold/10'
                  }`}
                >
                  <TrendingUp className="w-4 h-4" />
                  Sube
                </button>
                <button
                  type="button"
                  onClick={() => setDirection('below')}
                  className={`flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-sm font-body transition-all ${
                    direction === 'below'
                      ? 'bg-red-500/20 text-red-400 border border-red-500'
                      : 'bg-charcoal-light text-muted-foreground border border-gold/10'
                  }`}
                >
                  <TrendingDown className="w-4 h-4" />
                  Baja
                </button>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            variant="gold" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Creando alerta...
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                Crear Alerta
              </>
            )}
          </Button>
        </form>

        {/* Active Alerts */}
        {isLoading ? (
          <div className="flex items-center justify-center py-4">
            <Loader2 className="w-6 h-6 animate-spin text-gold" />
          </div>
        ) : alerts.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-gold/10">
            <h4 className="text-sm font-semibold text-foreground font-body flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-gold" />
              Alertas activas ({alerts.length})
            </h4>
            
            {alerts.slice(0, 5).map(alert => (
              <div 
                key={alert.id}
                className="flex items-center justify-between p-3 bg-charcoal/50 rounded-lg border border-gold/10"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    alert.direction === 'above' ? 'bg-green-500/20' : 'bg-red-500/20'
                  }`}>
                    {alert.direction === 'above' ? (
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-body text-foreground">
                      {alert.direction === 'above' ? 'Supera' : 'Baja de'} ${Number(alert.target_price).toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground font-body truncate max-w-[120px]">
                      {alert.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeAlert(alert.id)}
                  className="p-2 text-muted-foreground hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        <p className="text-xs text-muted-foreground text-center font-body">
          Las alertas se envían una vez cuando se alcanza el precio objetivo.
        </p>
      </CardContent>
    </Card>
  );
};
