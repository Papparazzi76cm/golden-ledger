// Article images mapping
import articleBuyingGold from '@/assets/article-buying-gold.jpg';
import articleInflation from '@/assets/article-inflation.jpg';
import articlePortfolio from '@/assets/article-portfolio.jpg';
import articlePriceFactors from '@/assets/article-price-factors.jpg';
import articleGoldTypes from '@/assets/article-gold-types.jpg';
import articleStorage from '@/assets/article-storage.jpg';
import goldCoins from '@/assets/gold-coins.jpg';

export const articleImageMap: Record<string, string> = {
  'como-comprar-oro-fisico-guia-completa': articleBuyingGold,
  'oro-vs-inflacion-proteccion-poder-adquisitivo': articleInflation,
  'cuanto-oro-deberia-tener-cartera': articlePortfolio,
  'factores-precio-oro-2024': articlePriceFactors,
  'tipos-oro-inversion-cual-elegir': articleGoldTypes,
  'almacenamiento-seguro-oro-fisico': articleStorage,
};

export const getArticleImage = (slug: string): string => {
  return articleImageMap[slug] || goldCoins;
};

export const defaultArticleImage = goldCoins;
