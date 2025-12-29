import type { Language } from '@/i18n/translations';

interface ArticleTranslation {
  title: string;
  excerpt: string;
  category: string;
  content: string;
  tags: string[];
}

export interface Article {
  slug: string;
  readTime: string;
  author: string;
  date: string;
  featured?: boolean;
  image?: string;
  translations: Record<Language, ArticleTranslation>;
}

export const articles: Article[] = [
  {
    slug: "como-comprar-oro-fisico-guia-completa",
    readTime: "12 min",
    author: "Equipo Editorial",
    date: "2024-12-15",
    featured: true,
    image: "/src/assets/article-buying-gold.jpg",
    translations: {
      es: {
        title: "Cómo Comprar Oro Físico: Guía Completa para Principiantes",
        excerpt: "Todo lo que necesitas saber antes de realizar tu primera compra de oro: tipos, dónde comprar, verificación y almacenamiento.",
        category: "Guía",
        tags: ["comprar oro", "oro físico", "principiantes", "guía"],
        content: `## Introducción al Oro Físico

El oro físico ha sido durante milenios la forma más tangible y segura de preservar la riqueza. A diferencia de los instrumentos financieros modernos, puedes tocarlo, almacenarlo y transferirlo sin intermediarios. Esta guía te ayudará a entender todos los aspectos esenciales antes de realizar tu primera compra.

## Tipos de Oro Físico

### Lingotes de Oro

Los lingotes son la forma más pura de inversión en oro físico. Se fabrican con una pureza mínima del 99.5% (995 milésimas) y están disponibles en diversos tamaños:

- **Lingotes pequeños (1g - 50g):** Ideales para principiantes. Mayor liquidez y accesibilidad.
- **Lingotes medianos (100g - 250g):** Equilibrio entre prima sobre spot y practicidad.
- **Lingotes grandes (500g - 1kg):** Menor prima por gramo, pero requieren mayor inversión inicial.

### Monedas de Inversión

Las monedas bullion combinan valor intrínseco con coleccionabilidad. Las más populares incluyen:

- **Krugerrand (Sudáfrica):** La moneda de oro más comercializada del mundo.
- **American Eagle (EE.UU.):** Respaldada por el gobierno estadounidense.
- **Maple Leaf (Canadá):** Una de las más puras (99.99%).
- **Filarmónica de Viena (Austria):** Popular en Europa.

## Dónde Comprar Oro con Seguridad

### Distribuidores Autorizados

Busca distribuidores certificados por la LBMA (London Bullion Market Association). Estos comerciantes cumplen estrictos estándares de calidad y cadena de custodia.

**Características de un distribuidor confiable:**
- Certificación LBMA o equivalente
- Precios transparentes basados en el spot
- Política clara de devoluciones
- Facturación detallada
- Años de experiencia en el mercado

### Bancos y Entidades Financieras

Algunos bancos ofrecen oro físico, aunque generalmente con primas más altas. La ventaja es la seguridad institucional.

### Plataformas Online

El comercio electrónico de metales preciosos ha crecido exponencialmente. Plataformas como BullionVault o GoldMoney permiten comprar oro almacenado en bóvedas profesionales.

## Verificación de Autenticidad

### Pruebas Básicas

1. **Peso y dimensiones:** El oro tiene una densidad específica de 19.32 g/cm³.
2. **Magnetismo:** El oro puro no es magnético.
3. **Marcas de pureza:** Busca el sello de pureza (999, 995, etc.).

### Verificación Profesional

Para compras significativas, considera:
- Ensayo por fluorescencia de rayos X
- Verificación ultrasónica
- Certificados de refinerías reconocidas

## Almacenamiento Seguro

### En Casa

Si decides almacenar en casa:
- Invierte en una caja fuerte de calidad (mínimo UL TL-15)
- Considera su instalación empotrada
- No comentes sobre tu inversión públicamente
- Documenta tu inventario con fotografías

### Bóvedas Profesionales

Las bóvedas bancarias o privadas ofrecen:
- Seguridad máxima 24/7
- Seguro incluido
- Auditorías regulares
- Acceso verificado

## Fiscalidad del Oro

### En España

- El oro de inversión (monedas y lingotes que cumplan requisitos) está **exento de IVA**.
- Las ganancias patrimoniales tributan en el IRPF.
- Los lingotes deben tener pureza mínima del 99.5%.
- Las monedas deben haber sido acuñadas después de 1800 y tener curso legal.

### Documentación

Conserva siempre:
- Facturas de compra
- Certificados de autenticidad
- Documentación de procedencia

## Errores Comunes a Evitar

1. **Comprar sin investigar:** Conoce el precio spot antes de negociar.
2. **Ignorar las primas:** Compara primas entre distribuidores.
3. **Almacenamiento inadecuado:** La seguridad no es opcional.
4. **Falta de diversificación:** No pongas todo en un solo tipo de producto.
5. **Venta precipitada:** El oro es inversión a largo plazo.

## Conclusión

Comprar oro físico es una decisión financiera significativa que requiere educación y planificación. Tómate tu tiempo para entender el mercado, compara proveedores y prioriza la seguridad. El oro ha preservado la riqueza durante miles de años; con el conocimiento adecuado, puede hacer lo mismo por ti.`
      },
      en: {
        title: "How to Buy Physical Gold: Complete Guide for Beginners",
        excerpt: "Everything you need to know before making your first gold purchase: types, where to buy, verification and storage.",
        category: "Guide",
        tags: ["buy gold", "physical gold", "beginners", "guide"],
        content: `## Introduction to Physical Gold

Physical gold has been the most tangible and secure way to preserve wealth for millennia. Unlike modern financial instruments, you can touch it, store it, and transfer it without intermediaries. This guide will help you understand all the essential aspects before making your first purchase.

## Types of Physical Gold

### Gold Bars

Bars are the purest form of physical gold investment. They are manufactured with a minimum purity of 99.5% (995 parts per thousand) and are available in various sizes:

- **Small bars (1g - 50g):** Ideal for beginners. Greater liquidity and accessibility.
- **Medium bars (100g - 250g):** Balance between premium over spot and practicality.
- **Large bars (500g - 1kg):** Lower premium per gram, but require higher initial investment.

### Investment Coins

Bullion coins combine intrinsic value with collectability. The most popular include:

- **Krugerrand (South Africa):** The most traded gold coin in the world.
- **American Eagle (USA):** Backed by the US government.
- **Maple Leaf (Canada):** One of the purest (99.99%).
- **Vienna Philharmonic (Austria):** Popular in Europe.

## Where to Buy Gold Safely

### Authorized Dealers

Look for dealers certified by the LBMA (London Bullion Market Association). These merchants meet strict quality and chain of custody standards.

**Characteristics of a reliable dealer:**
- LBMA certification or equivalent
- Transparent prices based on spot
- Clear return policy
- Detailed invoicing
- Years of market experience

### Banks and Financial Institutions

Some banks offer physical gold, although generally with higher premiums. The advantage is institutional security.

### Online Platforms

E-commerce in precious metals has grown exponentially. Platforms like BullionVault or GoldMoney allow buying gold stored in professional vaults.

## Authenticity Verification

### Basic Tests

1. **Weight and dimensions:** Gold has a specific density of 19.32 g/cm³.
2. **Magnetism:** Pure gold is not magnetic.
3. **Purity marks:** Look for the purity seal (999, 995, etc.).

### Professional Verification

For significant purchases, consider:
- X-ray fluorescence assay
- Ultrasonic verification
- Certificates from recognized refineries

## Secure Storage

### At Home

If you decide to store at home:
- Invest in a quality safe (minimum UL TL-15)
- Consider embedded installation
- Do not discuss your investment publicly
- Document your inventory with photographs

### Professional Vaults

Bank or private vaults offer:
- Maximum 24/7 security
- Insurance included
- Regular audits
- Verified access

## Gold Taxation

### Tax Considerations

- Investment gold (coins and bars meeting requirements) is often **VAT exempt**.
- Capital gains are taxed according to local regulations.
- Bars must have minimum purity of 99.5%.
- Coins must have been minted after 1800 and be legal tender.

### Documentation

Always keep:
- Purchase invoices
- Authenticity certificates
- Provenance documentation

## Common Mistakes to Avoid

1. **Buying without research:** Know the spot price before negotiating.
2. **Ignoring premiums:** Compare premiums between dealers.
3. **Inadequate storage:** Security is not optional.
4. **Lack of diversification:** Do not put everything in one type of product.
5. **Hasty selling:** Gold is a long-term investment.

## Conclusion

Buying physical gold is a significant financial decision that requires education and planning. Take your time to understand the market, compare suppliers and prioritize security. Gold has preserved wealth for thousands of years; with the right knowledge, it can do the same for you.`
      },
      fr: {
        title: "Comment Acheter de l'Or Physique : Guide Complet pour Débutants",
        excerpt: "Tout ce que vous devez savoir avant de faire votre premier achat d'or : types, où acheter, vérification et stockage.",
        category: "Guide",
        tags: ["acheter or", "or physique", "débutants", "guide"],
        content: `## Introduction à l'Or Physique

L'or physique a été pendant des millénaires la manière la plus tangible et sûre de préserver la richesse. Contrairement aux instruments financiers modernes, vous pouvez le toucher, le stocker et le transférer sans intermédiaires. Ce guide vous aidera à comprendre tous les aspects essentiels avant de faire votre premier achat.

## Types d'Or Physique

### Lingots d'Or

Les lingots sont la forme la plus pure d'investissement en or physique. Ils sont fabriqués avec une pureté minimale de 99,5% (995 millièmes) et sont disponibles en différentes tailles :

- **Petits lingots (1g - 50g) :** Idéaux pour les débutants. Plus grande liquidité et accessibilité.
- **Lingots moyens (100g - 250g) :** Équilibre entre prime sur le spot et praticité.
- **Grands lingots (500g - 1kg) :** Prime plus faible par gramme, mais investissement initial plus élevé.

### Pièces d'Investissement

Les pièces bullion combinent valeur intrinsèque et collectionnabilité. Les plus populaires incluent :

- **Krugerrand (Afrique du Sud) :** La pièce d'or la plus échangée au monde.
- **American Eagle (États-Unis) :** Soutenue par le gouvernement américain.
- **Maple Leaf (Canada) :** L'une des plus pures (99,99%).
- **Philharmonique de Vienne (Autriche) :** Populaire en Europe.

## Où Acheter de l'Or en Toute Sécurité

### Distributeurs Agréés

Recherchez des distributeurs certifiés par la LBMA (London Bullion Market Association). Ces commerçants respectent des normes strictes de qualité et de chaîne de garde.

**Caractéristiques d'un distributeur fiable :**
- Certification LBMA ou équivalente
- Prix transparents basés sur le spot
- Politique de retour claire
- Facturation détaillée
- Années d'expérience sur le marché

### Banques et Institutions Financières

Certaines banques proposent de l'or physique, généralement avec des primes plus élevées. L'avantage est la sécurité institutionnelle.

### Plateformes en Ligne

Le commerce électronique de métaux précieux a connu une croissance exponentielle. Des plateformes comme BullionVault ou GoldMoney permettent d'acheter de l'or stocké dans des coffres professionnels.

## Vérification de l'Authenticité

### Tests de Base

1. **Poids et dimensions :** L'or a une densité spécifique de 19,32 g/cm³.
2. **Magnétisme :** L'or pur n'est pas magnétique.
3. **Marques de pureté :** Recherchez le sceau de pureté (999, 995, etc.).

### Vérification Professionnelle

Pour des achats importants, envisagez :
- Analyse par fluorescence X
- Vérification ultrasonique
- Certificats de raffineries reconnues

## Stockage Sécurisé

### À Domicile

Si vous décidez de stocker chez vous :
- Investissez dans un coffre-fort de qualité (minimum UL TL-15)
- Envisagez une installation encastrée
- Ne parlez pas de votre investissement publiquement
- Documentez votre inventaire avec des photographies

### Coffres Professionnels

Les coffres bancaires ou privés offrent :
- Sécurité maximale 24h/24, 7j/7
- Assurance incluse
- Audits réguliers
- Accès vérifié

## Fiscalité de l'Or

### Considérations Fiscales

- L'or d'investissement (pièces et lingots répondant aux exigences) est souvent **exonéré de TVA**.
- Les plus-values sont imposées selon la réglementation locale.
- Les lingots doivent avoir une pureté minimale de 99,5%.
- Les pièces doivent avoir été frappées après 1800 et avoir cours légal.

### Documentation

Conservez toujours :
- Factures d'achat
- Certificats d'authenticité
- Documentation de provenance

## Erreurs Courantes à Éviter

1. **Acheter sans recherche :** Connaissez le prix spot avant de négocier.
2. **Ignorer les primes :** Comparez les primes entre distributeurs.
3. **Stockage inadéquat :** La sécurité n'est pas optionnelle.
4. **Manque de diversification :** Ne mettez pas tout dans un seul type de produit.
5. **Vente précipitée :** L'or est un investissement à long terme.

## Conclusion

Acheter de l'or physique est une décision financière importante qui nécessite éducation et planification. Prenez votre temps pour comprendre le marché, comparez les fournisseurs et donnez la priorité à la sécurité. L'or a préservé la richesse pendant des milliers d'années ; avec les bonnes connaissances, il peut faire de même pour vous.`
      },
      de: {
        title: "Wie man physisches Gold kauft: Vollständiger Leitfaden für Anfänger",
        excerpt: "Alles, was Sie vor Ihrem ersten Goldkauf wissen müssen: Arten, wo kaufen, Verifizierung und Lagerung.",
        category: "Leitfaden",
        tags: ["Gold kaufen", "physisches Gold", "Anfänger", "Leitfaden"],
        content: `## Einführung in Physisches Gold

Physisches Gold war jahrtausendelang die greifbarste und sicherste Art, Reichtum zu bewahren. Im Gegensatz zu modernen Finanzinstrumenten können Sie es anfassen, lagern und ohne Vermittler übertragen. Dieser Leitfaden hilft Ihnen, alle wesentlichen Aspekte zu verstehen, bevor Sie Ihren ersten Kauf tätigen.

## Arten von Physischem Gold

### Goldbarren

Barren sind die reinste Form der physischen Goldanlage. Sie werden mit einer Mindestfeinheit von 99,5% (995 Tausendstel) hergestellt und sind in verschiedenen Größen erhältlich:

- **Kleine Barren (1g - 50g):** Ideal für Anfänger. Höhere Liquidität und Zugänglichkeit.
- **Mittlere Barren (100g - 250g):** Balance zwischen Aufschlag über Spot und Praktikabilität.
- **Große Barren (500g - 1kg):** Geringerer Aufschlag pro Gramm, aber höhere Anfangsinvestition erforderlich.

### Anlagemünzen

Bullion-Münzen kombinieren inneren Wert mit Sammelwert. Die beliebtesten sind:

- **Krugerrand (Südafrika):** Die meistgehandelte Goldmünze der Welt.
- **American Eagle (USA):** Vom US-Regierung unterstützt.
- **Maple Leaf (Kanada):** Eine der reinsten (99,99%).
- **Wiener Philharmoniker (Österreich):** Beliebt in Europa.

## Wo man Gold sicher kauft

### Autorisierte Händler

Suchen Sie nach Händlern, die von der LBMA (London Bullion Market Association) zertifiziert sind. Diese Händler erfüllen strenge Qualitäts- und Überwachungsstandards.

**Merkmale eines zuverlässigen Händlers:**
- LBMA-Zertifizierung oder gleichwertig
- Transparente Preise basierend auf dem Spotpreis
- Klare Rückgabepolitik
- Detaillierte Rechnungsstellung
- Jahre an Markterfahrung

### Banken und Finanzinstitute

Einige Banken bieten physisches Gold an, allerdings in der Regel mit höheren Aufschlägen. Der Vorteil ist die institutionelle Sicherheit.

### Online-Plattformen

Der E-Commerce mit Edelmetallen ist exponentiell gewachsen. Plattformen wie BullionVault oder GoldMoney ermöglichen den Kauf von Gold, das in professionellen Tresoren gelagert wird.

## Authentizitätsprüfung

### Grundlegende Tests

1. **Gewicht und Abmessungen:** Gold hat eine spezifische Dichte von 19,32 g/cm³.
2. **Magnetismus:** Reines Gold ist nicht magnetisch.
3. **Reinheitszeichen:** Achten Sie auf das Reinheitssiegel (999, 995, etc.).

### Professionelle Verifizierung

Bei größeren Käufen sollten Sie in Betracht ziehen:
- Röntgenfluoreszenzanalyse
- Ultraschallprüfung
- Zertifikate von anerkannten Raffinerien

## Sichere Lagerung

### Zu Hause

Wenn Sie sich für die Lagerung zu Hause entscheiden:
- Investieren Sie in einen hochwertigen Tresor (mindestens UL TL-15)
- Erwägen Sie eine eingebaute Installation
- Sprechen Sie nicht öffentlich über Ihre Investition
- Dokumentieren Sie Ihren Bestand mit Fotografien

### Professionelle Tresore

Bank- oder private Tresore bieten:
- Maximale Sicherheit rund um die Uhr
- Versicherung inklusive
- Regelmäßige Audits
- Verifizierter Zugang

## Goldbesteuerung

### Steuerliche Überlegungen

- Anlagegold (Münzen und Barren, die die Anforderungen erfüllen) ist oft **von der Mehrwertsteuer befreit**.
- Kapitalgewinne werden nach lokalen Vorschriften besteuert.
- Barren müssen eine Mindestfeinheit von 99,5% haben.
- Münzen müssen nach 1800 geprägt worden sein und gesetzliches Zahlungsmittel sein.

### Dokumentation

Bewahren Sie immer auf:
- Kaufrechnungen
- Echtheitszertifikate
- Herkunftsdokumentation

## Häufige Fehler, die es zu vermeiden gilt

1. **Kaufen ohne Recherche:** Kennen Sie den Spotpreis, bevor Sie verhandeln.
2. **Aufschläge ignorieren:** Vergleichen Sie Aufschläge zwischen Händlern.
3. **Unzureichende Lagerung:** Sicherheit ist keine Option.
4. **Mangelnde Diversifikation:** Setzen Sie nicht alles auf eine Produktart.
5. **Überstürzter Verkauf:** Gold ist eine langfristige Investition.

## Fazit

Der Kauf von physischem Gold ist eine bedeutende finanzielle Entscheidung, die Bildung und Planung erfordert. Nehmen Sie sich Zeit, um den Markt zu verstehen, vergleichen Sie Anbieter und priorisieren Sie die Sicherheit. Gold hat den Reichtum seit Tausenden von Jahren bewahrt; mit dem richtigen Wissen kann es dasselbe für Sie tun.`
      }
    }
  },
  {
    slug: "oro-vs-inflacion-proteccion-poder-adquisitivo",
    readTime: "8 min",
    author: "Equipo Editorial",
    date: "2024-12-10",
    featured: false,
    image: "/src/assets/article-inflation.jpg",
    translations: {
      es: {
        title: "Oro vs. Inflación: Por Qué el Metal Amarillo Protege tu Poder Adquisitivo",
        excerpt: "Análisis histórico de cómo el oro ha mantenido su valor frente a la devaluación de las monedas fiat.",
        category: "Análisis",
        tags: ["inflación", "poder adquisitivo", "análisis", "historia"],
        content: `## La Naturaleza de la Inflación

La inflación es el aumento sostenido del nivel general de precios, que erosiona el poder adquisitivo del dinero. Cuando los bancos centrales expanden la oferta monetaria más rápido que el crecimiento económico real, cada unidad de moneda vale menos.

## El Oro: Un Activo de Oferta Limitada

A diferencia de las monedas fiat, que pueden imprimirse sin límite, la oferta de oro está naturalmente restringida:

- **Producción anual:** Aproximadamente 3,000 toneladas
- **Stock total extraído:** Cerca de 200,000 toneladas
- **Tasa de crecimiento:** ~1.5% anual

Esta escasez inherente convierte al oro en un depósito de valor resistente a la devaluación monetaria.

## Evidencia Histórica

### El Siglo XX

En 1900, una onza de oro costaba aproximadamente $20 USD. Hoy supera los $2,000. Mientras tanto, el dólar ha perdido más del 96% de su poder adquisitivo.

**Comparativa práctica:**
- En 1920, una onza de oro compraba un traje de calidad.
- En 2024, una onza de oro sigue comprando un traje de calidad.
- En 1920, $20 compraban un traje de calidad.
- En 2024, $20 apenas compran una corbata.

### Crisis Inflacionarias

Durante períodos de alta inflación, el oro consistentemente ha superado a las monedas fiat:

| Período | Inflación Acumulada | Rendimiento del Oro |
|---------|---------------------|---------------------|
| 1970-1980 | 103% | 1,832% |
| 2000-2011 | 28% | 441% |
| 2020-2024 | 21% | 45% |

## Mecanismos de Protección

### Correlación Inversa con el Dólar

Históricamente, cuando el dólar se debilita, el oro tiende a fortalecerse. Esta relación inversa proporciona cobertura natural contra la devaluación monetaria.

### Demanda en Tiempos de Incertidumbre

Durante crisis económicas, la demanda de oro aumenta como refugio seguro, impulsando su precio precisamente cuando más se necesita protección.

## Conclusión

El oro ha demostrado durante siglos su capacidad para preservar el poder adquisitivo. En un mundo de expansión monetaria sin precedentes, su rol como seguro contra la inflación sigue siendo tan relevante como siempre.`
      },
      en: {
        title: "Gold vs. Inflation: Why the Yellow Metal Protects Your Purchasing Power",
        excerpt: "Historical analysis of how gold has maintained its value against fiat currency devaluation.",
        category: "Analysis",
        tags: ["inflation", "purchasing power", "analysis", "history"],
        content: `## The Nature of Inflation

Inflation is the sustained increase in the general price level, which erodes the purchasing power of money. When central banks expand the money supply faster than real economic growth, each unit of currency is worth less.

## Gold: A Limited Supply Asset

Unlike fiat currencies, which can be printed without limit, the supply of gold is naturally restricted:

- **Annual production:** Approximately 3,000 tonnes
- **Total extracted stock:** About 200,000 tonnes
- **Growth rate:** ~1.5% annually

This inherent scarcity makes gold a store of value resistant to monetary devaluation.

## Historical Evidence

### The 20th Century

In 1900, an ounce of gold cost approximately $20 USD. Today it exceeds $2,000. Meanwhile, the dollar has lost more than 96% of its purchasing power.

**Practical comparison:**
- In 1920, an ounce of gold bought a quality suit.
- In 2024, an ounce of gold still buys a quality suit.
- In 1920, $20 bought a quality suit.
- In 2024, $20 barely buys a tie.

### Inflationary Crises

During periods of high inflation, gold has consistently outperformed fiat currencies:

| Period | Cumulative Inflation | Gold Return |
|--------|---------------------|-------------|
| 1970-1980 | 103% | 1,832% |
| 2000-2011 | 28% | 441% |
| 2020-2024 | 21% | 45% |

## Protection Mechanisms

### Inverse Correlation with the Dollar

Historically, when the dollar weakens, gold tends to strengthen. This inverse relationship provides natural hedging against monetary devaluation.

### Demand in Times of Uncertainty

During economic crises, demand for gold increases as a safe haven, driving its price precisely when protection is most needed.

## Conclusion

Gold has demonstrated for centuries its ability to preserve purchasing power. In a world of unprecedented monetary expansion, its role as an inflation hedge remains as relevant as ever.`
      },
      fr: {
        title: "Or vs. Inflation : Pourquoi le Métal Jaune Protège Votre Pouvoir d'Achat",
        excerpt: "Analyse historique de la façon dont l'or a maintenu sa valeur face à la dévaluation des monnaies fiduciaires.",
        category: "Analyse",
        tags: ["inflation", "pouvoir d'achat", "analyse", "histoire"],
        content: `## La Nature de l'Inflation

L'inflation est l'augmentation soutenue du niveau général des prix, qui érode le pouvoir d'achat de la monnaie. Lorsque les banques centrales augmentent la masse monétaire plus rapidement que la croissance économique réelle, chaque unité monétaire vaut moins.

## L'Or : Un Actif à Offre Limitée

Contrairement aux monnaies fiduciaires, qui peuvent être imprimées sans limite, l'offre d'or est naturellement restreinte :

- **Production annuelle :** Environ 3 000 tonnes
- **Stock total extrait :** Environ 200 000 tonnes
- **Taux de croissance :** ~1,5% par an

Cette rareté inhérente fait de l'or une réserve de valeur résistante à la dévaluation monétaire.

## Preuves Historiques

### Le XXe Siècle

En 1900, une once d'or coûtait environ 20 USD. Aujourd'hui, elle dépasse 2 000 $. Pendant ce temps, le dollar a perdu plus de 96% de son pouvoir d'achat.

**Comparaison pratique :**
- En 1920, une once d'or achetait un costume de qualité.
- En 2024, une once d'or achète toujours un costume de qualité.
- En 1920, 20 $ achetaient un costume de qualité.
- En 2024, 20 $ achètent à peine une cravate.

### Crises Inflationnistes

Pendant les périodes de forte inflation, l'or a constamment surperformé les monnaies fiduciaires :

| Période | Inflation Cumulée | Rendement de l'Or |
|---------|-------------------|-------------------|
| 1970-1980 | 103% | 1 832% |
| 2000-2011 | 28% | 441% |
| 2020-2024 | 21% | 45% |

## Mécanismes de Protection

### Corrélation Inverse avec le Dollar

Historiquement, lorsque le dollar s'affaiblit, l'or a tendance à se renforcer. Cette relation inverse offre une couverture naturelle contre la dévaluation monétaire.

### Demande en Période d'Incertitude

Pendant les crises économiques, la demande d'or augmente en tant que valeur refuge, faisant monter son prix précisément lorsque la protection est la plus nécessaire.

## Conclusion

L'or a démontré pendant des siècles sa capacité à préserver le pouvoir d'achat. Dans un monde d'expansion monétaire sans précédent, son rôle de couverture contre l'inflation reste aussi pertinent que jamais.`
      },
      de: {
        title: "Gold vs. Inflation: Warum das gelbe Metall Ihre Kaufkraft schützt",
        excerpt: "Historische Analyse, wie Gold seinen Wert gegenüber der Abwertung von Fiat-Währungen bewahrt hat.",
        category: "Analyse",
        tags: ["Inflation", "Kaufkraft", "Analyse", "Geschichte"],
        content: `## Die Natur der Inflation

Inflation ist der anhaltende Anstieg des allgemeinen Preisniveaus, der die Kaufkraft des Geldes untergräbt. Wenn Zentralbanken die Geldmenge schneller ausweiten als das reale Wirtschaftswachstum, ist jede Währungseinheit weniger wert.

## Gold: Ein Vermögenswert mit begrenztem Angebot

Im Gegensatz zu Fiat-Währungen, die unbegrenzt gedruckt werden können, ist das Angebot an Gold natürlich begrenzt:

- **Jährliche Produktion:** Etwa 3.000 Tonnen
- **Gesamter extrahierter Bestand:** Etwa 200.000 Tonnen
- **Wachstumsrate:** ~1,5% jährlich

Diese inhärente Knappheit macht Gold zu einem Wertaufbewahrungsmittel, das gegen monetäre Abwertung resistent ist.

## Historische Beweise

### Das 20. Jahrhundert

Im Jahr 1900 kostete eine Unze Gold etwa 20 USD. Heute übersteigt sie 2.000 $. Inzwischen hat der Dollar mehr als 96% seiner Kaufkraft verloren.

**Praktischer Vergleich:**
- 1920 kaufte eine Unze Gold einen hochwertigen Anzug.
- 2024 kauft eine Unze Gold immer noch einen hochwertigen Anzug.
- 1920 kauften 20 $ einen hochwertigen Anzug.
- 2024 kaufen 20 $ kaum eine Krawatte.

### Inflationskrisen

In Zeiten hoher Inflation hat Gold die Fiat-Währungen konstant übertroffen:

| Zeitraum | Kumulative Inflation | Goldrendite |
|----------|---------------------|-------------|
| 1970-1980 | 103% | 1.832% |
| 2000-2011 | 28% | 441% |
| 2020-2024 | 21% | 45% |

## Schutzmechanismen

### Inverse Korrelation mit dem Dollar

Historisch gesehen tendiert Gold dazu, sich zu stärken, wenn der Dollar schwächer wird. Diese inverse Beziehung bietet natürliche Absicherung gegen monetäre Abwertung.

### Nachfrage in Zeiten der Unsicherheit

Während Wirtschaftskrisen steigt die Nachfrage nach Gold als sicherer Hafen und treibt seinen Preis genau dann an, wenn Schutz am meisten benötigt wird.

## Fazit

Gold hat über Jahrhunderte seine Fähigkeit bewiesen, die Kaufkraft zu erhalten. In einer Welt beispielloser monetärer Expansion bleibt seine Rolle als Inflationsschutz so relevant wie eh und je.`
      }
    }
  },
  {
    slug: "cuanto-oro-deberia-tener-cartera",
    readTime: "6 min",
    author: "Equipo Editorial",
    date: "2024-12-05",
    featured: false,
    image: "/src/assets/article-portfolio.jpg",
    translations: {
      es: {
        title: "¿Cuánto Oro Debería Tener en Mi Cartera?",
        excerpt: "Recomendaciones de expertos sobre el porcentaje óptimo de metales preciosos según tu perfil de inversor.",
        category: "Estrategia",
        tags: ["cartera", "diversificación", "estrategia", "asignación"],
        content: `## El Rol del Oro en una Cartera Diversificada

El oro cumple funciones específicas dentro de un portafolio de inversión que ningún otro activo puede replicar exactamente. Entender estas funciones es clave para determinar la asignación óptima.

## Funciones del Oro en el Portafolio

### 1. Diversificación

El oro tiene baja correlación con acciones y bonos. Cuando los mercados tradicionales caen, el oro frecuentemente se mueve en dirección opuesta o se mantiene estable.

### 2. Cobertura contra Riesgos de Cola

Los "tail risks" son eventos extremos de baja probabilidad pero alto impacto. El oro tiende a brillar precisamente durante estas crisis.

### 3. Preservación del Capital

En entornos de alta inflación o inestabilidad geopolítica, el oro protege el poder adquisitivo.

## Recomendaciones por Perfil de Inversor

### Conservador (Bajo Riesgo)

**Asignación sugerida: 10-15%**

- Prioridad en preservación del capital
- Horizonte temporal largo
- Menor tolerancia a la volatilidad

### Moderado (Riesgo Medio)

**Asignación sugerida: 5-10%**

- Equilibrio entre crecimiento y seguridad
- Diversificación tradicional
- Horizonte de 5-15 años

### Agresivo (Alto Riesgo)

**Asignación sugerida: 3-7%**

- Foco en crecimiento
- Mayor tolerancia a la volatilidad
- Oro como seguro, no como motor de rendimiento

## Conclusión

No existe una respuesta única. La asignación óptima depende de tu perfil de riesgo, horizonte temporal y visión del entorno económico. Un rango del 5-10% es un punto de partida razonable para la mayoría de inversores.`
      },
      en: {
        title: "How Much Gold Should I Have in My Portfolio?",
        excerpt: "Expert recommendations on the optimal percentage of precious metals according to your investor profile.",
        category: "Strategy",
        tags: ["portfolio", "diversification", "strategy", "allocation"],
        content: `## The Role of Gold in a Diversified Portfolio

Gold fulfills specific functions within an investment portfolio that no other asset can exactly replicate. Understanding these functions is key to determining optimal allocation.

## Functions of Gold in the Portfolio

### 1. Diversification

Gold has low correlation with stocks and bonds. When traditional markets fall, gold frequently moves in the opposite direction or remains stable.

### 2. Tail Risk Hedging

"Tail risks" are extreme low-probability but high-impact events. Gold tends to shine precisely during these crises.

### 3. Capital Preservation

In environments of high inflation or geopolitical instability, gold protects purchasing power.

## Recommendations by Investor Profile

### Conservative (Low Risk)

**Suggested allocation: 10-15%**

- Priority on capital preservation
- Long time horizon
- Lower tolerance for volatility

### Moderate (Medium Risk)

**Suggested allocation: 5-10%**

- Balance between growth and security
- Traditional diversification
- 5-15 year horizon

### Aggressive (High Risk)

**Suggested allocation: 3-7%**

- Focus on growth
- Higher tolerance for volatility
- Gold as insurance, not as return driver

## Conclusion

There is no single answer. The optimal allocation depends on your risk profile, time horizon, and view of the economic environment. A range of 5-10% is a reasonable starting point for most investors.`
      },
      fr: {
        title: "Combien d'Or Devrais-je Avoir dans Mon Portefeuille ?",
        excerpt: "Recommandations d'experts sur le pourcentage optimal de métaux précieux selon votre profil d'investisseur.",
        category: "Stratégie",
        tags: ["portefeuille", "diversification", "stratégie", "allocation"],
        content: `## Le Rôle de l'Or dans un Portefeuille Diversifié

L'or remplit des fonctions spécifiques au sein d'un portefeuille d'investissement qu'aucun autre actif ne peut reproduire exactement. Comprendre ces fonctions est essentiel pour déterminer l'allocation optimale.

## Fonctions de l'Or dans le Portefeuille

### 1. Diversification

L'or a une faible corrélation avec les actions et les obligations. Lorsque les marchés traditionnels chutent, l'or se déplace fréquemment dans la direction opposée ou reste stable.

### 2. Couverture des Risques de Queue

Les "tail risks" sont des événements extrêmes à faible probabilité mais à fort impact. L'or a tendance à briller précisément pendant ces crises.

### 3. Préservation du Capital

Dans des environnements de forte inflation ou d'instabilité géopolitique, l'or protège le pouvoir d'achat.

## Recommandations par Profil d'Investisseur

### Conservateur (Faible Risque)

**Allocation suggérée : 10-15%**

- Priorité à la préservation du capital
- Horizon temporel long
- Faible tolérance à la volatilité

### Modéré (Risque Moyen)

**Allocation suggérée : 5-10%**

- Équilibre entre croissance et sécurité
- Diversification traditionnelle
- Horizon de 5-15 ans

### Agressif (Risque Élevé)

**Allocation suggérée : 3-7%**

- Focus sur la croissance
- Plus grande tolérance à la volatilité
- L'or comme assurance, pas comme moteur de rendement

## Conclusion

Il n'y a pas de réponse unique. L'allocation optimale dépend de votre profil de risque, de votre horizon temporel et de votre vision de l'environnement économique. Une fourchette de 5-10% est un point de départ raisonnable pour la plupart des investisseurs.`
      },
      de: {
        title: "Wie viel Gold sollte ich in meinem Portfolio haben?",
        excerpt: "Expertenempfehlungen zum optimalen Prozentsatz an Edelmetallen je nach Anlegerprofil.",
        category: "Strategie",
        tags: ["Portfolio", "Diversifikation", "Strategie", "Allokation"],
        content: `## Die Rolle von Gold in einem Diversifizierten Portfolio

Gold erfüllt spezifische Funktionen innerhalb eines Anlageportfolios, die kein anderer Vermögenswert genau replizieren kann. Das Verständnis dieser Funktionen ist der Schlüssel zur Bestimmung der optimalen Allokation.

## Funktionen von Gold im Portfolio

### 1. Diversifikation

Gold hat eine geringe Korrelation mit Aktien und Anleihen. Wenn traditionelle Märkte fallen, bewegt sich Gold häufig in die entgegengesetzte Richtung oder bleibt stabil.

### 2. Absicherung gegen Tail-Risiken

"Tail-Risiken" sind extreme Ereignisse mit geringer Wahrscheinlichkeit, aber hoher Auswirkung. Gold neigt dazu, genau während dieser Krisen zu glänzen.

### 3. Kapitalerhalt

In Umgebungen hoher Inflation oder geopolitischer Instabilität schützt Gold die Kaufkraft.

## Empfehlungen nach Anlegerprofil

### Konservativ (Geringes Risiko)

**Vorgeschlagene Allokation: 10-15%**

- Priorität auf Kapitalerhalt
- Langer Zeithorizont
- Geringere Toleranz für Volatilität

### Moderat (Mittleres Risiko)

**Vorgeschlagene Allokation: 5-10%**

- Balance zwischen Wachstum und Sicherheit
- Traditionelle Diversifikation
- 5-15 Jahre Horizont

### Aggressiv (Hohes Risiko)

**Vorgeschlagene Allokation: 3-7%**

- Fokus auf Wachstum
- Höhere Toleranz für Volatilität
- Gold als Versicherung, nicht als Renditetreiber

## Fazit

Es gibt keine einheitliche Antwort. Die optimale Allokation hängt von Ihrem Risikoprofil, Zeithorizont und Ihrer Einschätzung des wirtschaftlichen Umfelds ab. Eine Spanne von 5-10% ist ein vernünftiger Ausgangspunkt für die meisten Anleger.`
      }
    }
  },
  {
    slug: "factores-precio-oro-2024",
    readTime: "10 min",
    author: "Equipo Editorial",
    date: "2024-12-01",
    featured: false,
    image: "/src/assets/article-price-factors.jpg",
    translations: {
      es: {
        title: "Factores que Mueven el Precio del Oro en 2024",
        excerpt: "Tensiones geopolíticas, políticas monetarias y demanda de bancos centrales: los drivers clave del mercado.",
        category: "Mercados",
        tags: ["mercados", "precio", "análisis", "2024"],
        content: `## Panorama del Mercado del Oro en 2024

El oro ha alcanzado máximos históricos en 2024, superando los $2,700 por onza. Múltiples factores convergen para crear un entorno excepcionalmente favorable para el metal precioso.

## Principales Drivers del Precio

### 1. Políticas de Bancos Centrales

Los bancos centrales, especialmente de países emergentes, han acumulado oro a un ritmo récord:

- **China:** Incrementando reservas mensualmente desde 2022.
- **India:** Uno de los mayores compradores del mundo.
- **Turquía, Polonia, Kazajistán:** Diversificando reservas fuera del dólar.

### 2. Tensiones Geopolíticas

- Guerra en Ucrania
- Tensiones en Oriente Medio
- Rivalidad EE.UU.-China

Cada escalada impulsa la demanda de refugio seguro.

### 3. Inflación y Política Fiscal

Los niveles de deuda gubernamental en economías desarrolladas alcanzan máximos históricos, generando preocupación sobre la sostenibilidad fiscal.

## Perspectivas 2025

### Escenario Alcista

Si la Fed recorta tipos agresivamente y las tensiones geopolíticas persisten, el oro podría alcanzar $3,000+.

### Escenario Base

Consolidación en el rango $2,400-$2,800 con sesgo alcista moderado.

## Conclusión

El oro en 2024 se beneficia de una confluencia de factores: geopolítica incierta, políticas monetarias en transición, demanda de bancos centrales y preocupaciones sobre deuda soberana.`
      },
      en: {
        title: "Factors Moving the Gold Price in 2024",
        excerpt: "Geopolitical tensions, monetary policies and central bank demand: the key market drivers.",
        category: "Markets",
        tags: ["markets", "price", "analysis", "2024"],
        content: `## Gold Market Overview in 2024

Gold has reached all-time highs in 2024, surpassing $2,700 per ounce. Multiple factors converge to create an exceptionally favorable environment for the precious metal.

## Main Price Drivers

### 1. Central Bank Policies

Central banks, especially from emerging countries, have accumulated gold at a record pace:

- **China:** Increasing reserves monthly since 2022.
- **India:** One of the largest buyers in the world.
- **Turkey, Poland, Kazakhstan:** Diversifying reserves away from the dollar.

### 2. Geopolitical Tensions

- War in Ukraine
- Tensions in the Middle East
- US-China rivalry

Each escalation drives safe-haven demand.

### 3. Inflation and Fiscal Policy

Government debt levels in developed economies are reaching all-time highs, raising concerns about fiscal sustainability.

## 2025 Outlook

### Bullish Scenario

If the Fed cuts rates aggressively and geopolitical tensions persist, gold could reach $3,000+.

### Base Scenario

Consolidation in the $2,400-$2,800 range with moderate bullish bias.

## Conclusion

Gold in 2024 benefits from a confluence of factors: uncertain geopolitics, transitioning monetary policies, central bank demand and sovereign debt concerns.`
      },
      fr: {
        title: "Facteurs qui Influencent le Prix de l'Or en 2024",
        excerpt: "Tensions géopolitiques, politiques monétaires et demande des banques centrales : les principaux moteurs du marché.",
        category: "Marchés",
        tags: ["marchés", "prix", "analyse", "2024"],
        content: `## Panorama du Marché de l'Or en 2024

L'or a atteint des sommets historiques en 2024, dépassant les 2 700 $ l'once. Plusieurs facteurs convergent pour créer un environnement exceptionnellement favorable au métal précieux.

## Principaux Moteurs du Prix

### 1. Politiques des Banques Centrales

Les banques centrales, notamment des pays émergents, ont accumulé de l'or à un rythme record :

- **Chine :** Augmentation mensuelle des réserves depuis 2022.
- **Inde :** L'un des plus grands acheteurs au monde.
- **Turquie, Pologne, Kazakhstan :** Diversification des réserves hors du dollar.

### 2. Tensions Géopolitiques

- Guerre en Ukraine
- Tensions au Moyen-Orient
- Rivalité États-Unis-Chine

Chaque escalade stimule la demande de valeur refuge.

### 3. Inflation et Politique Fiscale

Les niveaux de dette publique dans les économies développées atteignent des sommets historiques, suscitant des inquiétudes quant à la viabilité budgétaire.

## Perspectives 2025

### Scénario Haussier

Si la Fed réduit les taux de manière agressive et que les tensions géopolitiques persistent, l'or pourrait atteindre 3 000 $+.

### Scénario de Base

Consolidation dans la fourchette 2 400-2 800 $ avec un biais haussier modéré.

## Conclusion

L'or en 2024 bénéficie d'une confluence de facteurs : géopolitique incertaine, politiques monétaires en transition, demande des banques centrales et préoccupations concernant la dette souveraine.`
      },
      de: {
        title: "Faktoren, die den Goldpreis 2024 bewegen",
        excerpt: "Geopolitische Spannungen, Geldpolitik und Nachfrage der Zentralbanken: die wichtigsten Markttreiber.",
        category: "Märkte",
        tags: ["Märkte", "Preis", "Analyse", "2024"],
        content: `## Überblick über den Goldmarkt 2024

Gold hat 2024 Allzeithochs erreicht und die Marke von 2.700 $ pro Unze überschritten. Mehrere Faktoren konvergieren, um ein außergewöhnlich günstiges Umfeld für das Edelmetall zu schaffen.

## Haupttreiber des Preises

### 1. Zentralbankpolitik

Zentralbanken, insbesondere aus Schwellenländern, haben Gold in Rekordtempo angesammelt:

- **China:** Monatliche Erhöhung der Reserven seit 2022.
- **Indien:** Einer der größten Käufer der Welt.
- **Türkei, Polen, Kasachstan:** Diversifizierung der Reserven weg vom Dollar.

### 2. Geopolitische Spannungen

- Krieg in der Ukraine
- Spannungen im Nahen Osten
- USA-China-Rivalität

Jede Eskalation treibt die Nachfrage nach sicheren Häfen an.

### 3. Inflation und Fiskalpolitik

Die Staatsverschuldung in entwickelten Volkswirtschaften erreicht Allzeithochs und weckt Bedenken hinsichtlich der fiskalischen Nachhaltigkeit.

## Ausblick 2025

### Bullisches Szenario

Wenn die Fed die Zinsen aggressiv senkt und die geopolitischen Spannungen anhalten, könnte Gold 3.000 $+ erreichen.

### Basisszenario

Konsolidierung im Bereich von 2.400-2.800 $ mit moderatem bullischen Bias.

## Fazit

Gold profitiert 2024 von einer Konvergenz von Faktoren: unsichere Geopolitik, sich wandelnde Geldpolitik, Nachfrage der Zentralbanken und Bedenken hinsichtlich der Staatsverschuldung.`
      }
    }
  },
  {
    slug: "tipos-oro-inversion-cual-elegir",
    readTime: "9 min",
    author: "Equipo Editorial",
    date: "2024-11-25",
    featured: false,
    image: "/src/assets/article-gold-types.jpg",
    translations: {
      es: {
        title: "Tipos de Oro para Inversión: ¿Cuál Elegir?",
        excerpt: "Lingotes, monedas, ETFs, mineras... Analizamos las ventajas y desventajas de cada forma de invertir en oro.",
        category: "Guía",
        tags: ["tipos de oro", "ETFs", "mineras", "lingotes", "monedas"],
        content: `## Introducción

Invertir en oro puede hacerse de múltiples formas, cada una con características, ventajas y riesgos distintos. Esta guía te ayudará a elegir la opción más adecuada para tus objetivos.

## Oro Físico

### Lingotes

**Ventajas:**
- Propiedad directa sin intermediarios
- Sin riesgo de contraparte
- Activo tangible

**Desventajas:**
- Requiere almacenamiento seguro
- Menor liquidez que productos financieros
- Primas sobre el precio spot

### Monedas Bullion

**Ventajas:**
- Mayor liquidez que lingotes pequeños
- Reconocimiento universal
- Algunas tienen valor numismático adicional

**Desventajas:**
- Primas generalmente más altas que lingotes
- Riesgo de falsificaciones

## Oro Financiero

### ETFs de Oro

**Ventajas:**
- Alta liquidez
- Bajos costes de gestión
- Fácil compraventa

**Desventajas:**
- No hay propiedad directa del oro
- Riesgo de contraparte
- Costes de gestión anuales

### Acciones de Mineras

**Ventajas:**
- Apalancamiento al precio del oro
- Pueden pagar dividendos
- Potencial de crecimiento empresarial

**Desventajas:**
- Riesgo operativo y de gestión
- Mayor volatilidad

## Comparativa Resumida

| Tipo | Liquidez | Costes | Riesgo Contraparte |
|------|----------|--------|---------------------|
| Lingotes | Media | Bajos | Ninguno |
| Monedas | Alta | Medios | Ninguno |
| ETFs | Muy alta | Bajos | Bajo |
| Mineras | Alta | Variables | Medio |

## Conclusión

No hay una opción universalmente mejor. La elección depende de tus objetivos, horizonte temporal y preferencias personales. Muchos inversores combinan varias formas de exposición al oro.`
      },
      en: {
        title: "Types of Gold for Investment: Which to Choose?",
        excerpt: "Bars, coins, ETFs, miners... We analyze the advantages and disadvantages of each way to invest in gold.",
        category: "Guide",
        tags: ["gold types", "ETFs", "miners", "bars", "coins"],
        content: `## Introduction

Investing in gold can be done in multiple ways, each with distinct characteristics, advantages, and risks. This guide will help you choose the most suitable option for your objectives.

## Physical Gold

### Bars

**Advantages:**
- Direct ownership without intermediaries
- No counterparty risk
- Tangible asset

**Disadvantages:**
- Requires secure storage
- Lower liquidity than financial products
- Premiums over spot price

### Bullion Coins

**Advantages:**
- Higher liquidity than small bars
- Universal recognition
- Some have additional numismatic value

**Disadvantages:**
- Premiums generally higher than bars
- Risk of counterfeits

## Financial Gold

### Gold ETFs

**Advantages:**
- High liquidity
- Low management costs
- Easy to buy and sell

**Disadvantages:**
- No direct ownership of gold
- Counterparty risk
- Annual management costs

### Mining Stocks

**Advantages:**
- Leverage to gold price
- Can pay dividends
- Business growth potential

**Disadvantages:**
- Operational and management risk
- Higher volatility

## Summary Comparison

| Type | Liquidity | Costs | Counterparty Risk |
|------|-----------|-------|-------------------|
| Bars | Medium | Low | None |
| Coins | High | Medium | None |
| ETFs | Very high | Low | Low |
| Miners | High | Variable | Medium |

## Conclusion

There is no universally better option. The choice depends on your objectives, time horizon, and personal preferences. Many investors combine various forms of gold exposure.`
      },
      fr: {
        title: "Types d'Or pour l'Investissement : Lequel Choisir ?",
        excerpt: "Lingots, pièces, ETFs, sociétés minières... Nous analysons les avantages et inconvénients de chaque façon d'investir dans l'or.",
        category: "Guide",
        tags: ["types d'or", "ETFs", "minières", "lingots", "pièces"],
        content: `## Introduction

Investir dans l'or peut se faire de multiples façons, chacune avec des caractéristiques, avantages et risques distincts. Ce guide vous aidera à choisir l'option la plus adaptée à vos objectifs.

## Or Physique

### Lingots

**Avantages :**
- Propriété directe sans intermédiaires
- Pas de risque de contrepartie
- Actif tangible

**Inconvénients :**
- Nécessite un stockage sécurisé
- Liquidité inférieure aux produits financiers
- Primes sur le prix spot

### Pièces Bullion

**Avantages :**
- Liquidité supérieure aux petits lingots
- Reconnaissance universelle
- Certaines ont une valeur numismatique supplémentaire

**Inconvénients :**
- Primes généralement plus élevées que les lingots
- Risque de contrefaçons

## Or Financier

### ETFs Or

**Avantages :**
- Haute liquidité
- Faibles coûts de gestion
- Achat-vente facile

**Inconvénients :**
- Pas de propriété directe de l'or
- Risque de contrepartie
- Frais de gestion annuels

### Actions Minières

**Avantages :**
- Effet de levier sur le prix de l'or
- Peuvent verser des dividendes
- Potentiel de croissance de l'entreprise

**Inconvénients :**
- Risque opérationnel et de gestion
- Volatilité plus élevée

## Comparaison Résumée

| Type | Liquidité | Coûts | Risque de Contrepartie |
|------|-----------|-------|------------------------|
| Lingots | Moyenne | Faibles | Aucun |
| Pièces | Élevée | Moyens | Aucun |
| ETFs | Très élevée | Faibles | Faible |
| Minières | Élevée | Variables | Moyen |

## Conclusion

Il n'y a pas d'option universellement meilleure. Le choix dépend de vos objectifs, horizon temporel et préférences personnelles. De nombreux investisseurs combinent plusieurs formes d'exposition à l'or.`
      },
      de: {
        title: "Arten von Gold für die Investition: Welches wählen?",
        excerpt: "Barren, Münzen, ETFs, Bergbauunternehmen... Wir analysieren die Vor- und Nachteile jeder Art, in Gold zu investieren.",
        category: "Leitfaden",
        tags: ["Goldarten", "ETFs", "Bergbau", "Barren", "Münzen"],
        content: `## Einführung

In Gold zu investieren kann auf verschiedene Arten erfolgen, jede mit unterschiedlichen Eigenschaften, Vorteilen und Risiken. Dieser Leitfaden hilft Ihnen, die am besten geeignete Option für Ihre Ziele zu wählen.

## Physisches Gold

### Barren

**Vorteile:**
- Direktes Eigentum ohne Vermittler
- Kein Kontrahentenrisiko
- Greifbarer Vermögenswert

**Nachteile:**
- Erfordert sichere Lagerung
- Geringere Liquidität als Finanzprodukte
- Aufschläge über Spotpreis

### Bullion-Münzen

**Vorteile:**
- Höhere Liquidität als kleine Barren
- Universelle Anerkennung
- Einige haben zusätzlichen numismatischen Wert

**Nachteile:**
- Aufschläge im Allgemeinen höher als bei Barren
- Risiko von Fälschungen

## Finanzielles Gold

### Gold-ETFs

**Vorteile:**
- Hohe Liquidität
- Niedrige Verwaltungskosten
- Einfacher Kauf und Verkauf

**Nachteile:**
- Kein direktes Eigentum am Gold
- Kontrahentenrisiko
- Jährliche Verwaltungskosten

### Bergbauaktien

**Vorteile:**
- Hebelwirkung auf den Goldpreis
- Können Dividenden zahlen
- Geschäftswachstumspotenzial

**Nachteile:**
- Betriebs- und Managementrisiko
- Höhere Volatilität

## Zusammenfassender Vergleich

| Typ | Liquidität | Kosten | Kontrahentenrisiko |
|-----|------------|--------|-------------------|
| Barren | Mittel | Niedrig | Keines |
| Münzen | Hoch | Mittel | Keines |
| ETFs | Sehr hoch | Niedrig | Niedrig |
| Bergbau | Hoch | Variabel | Mittel |

## Fazit

Es gibt keine universell bessere Option. Die Wahl hängt von Ihren Zielen, Zeithorizont und persönlichen Vorlieben ab. Viele Anleger kombinieren verschiedene Formen der Goldexposition.`
      }
    }
  },
  {
    slug: "almacenamiento-seguro-oro-fisico",
    readTime: "7 min",
    author: "Equipo Editorial",
    date: "2024-11-20",
    featured: false,
    image: "/src/assets/article-storage.jpg",
    translations: {
      es: {
        title: "Almacenamiento Seguro de Oro Físico: Opciones y Mejores Prácticas",
        excerpt: "Desde cajas fuertes domésticas hasta bóvedas bancarias: cómo proteger tu inversión en metales preciosos.",
        category: "Guía",
        tags: ["almacenamiento", "seguridad", "bóvedas", "cajas fuertes"],
        content: `## La Importancia del Almacenamiento

El oro físico requiere protección adecuada. A diferencia de activos financieros, puede ser robado o dañado. Una estrategia de almacenamiento sólida es parte integral de tu inversión.

## Opciones de Almacenamiento

### 1. En Casa

#### Cajas Fuertes Domésticas

**Características recomendadas:**
- Clasificación mínima UL TL-15
- Peso mínimo 100 kg o instalación empotrada
- Resistencia al fuego (mínimo 1 hora)
- Cerradura de combinación o biométrica

**Ventajas:**
- Acceso inmediato 24/7
- Sin costes recurrentes
- Control total

**Desventajas:**
- Inversión inicial significativa
- Riesgo de robo
- Límites del seguro de hogar

### 2. Cajas de Seguridad Bancarias

**Ventajas:**
- Alta seguridad
- Bajo coste relativo
- Separación del hogar

**Desventajas:**
- Acceso limitado a horarios bancarios
- Generalmente no asegurado por el banco

### 3. Bóvedas Privadas

**Ventajas:**
- Máxima seguridad
- Seguro incluido habitualmente
- Auditorías regulares
- Acceso extendido

**Desventajas:**
- Coste más elevado
- Dependencia de terceros

## Documentación y Registro

### Qué conservar:

- Facturas de compra originales
- Certificados de autenticidad
- Fotografías detalladas
- Inventario actualizado

## Conclusión

El almacenamiento es un componente crítico de la inversión en oro físico. El método óptimo depende de la cantidad, tu situación personal y tu tolerancia al riesgo.`
      },
      en: {
        title: "Secure Storage of Physical Gold: Options and Best Practices",
        excerpt: "From home safes to bank vaults: how to protect your precious metals investment.",
        category: "Guide",
        tags: ["storage", "security", "vaults", "safes"],
        content: `## The Importance of Storage

Physical gold requires adequate protection. Unlike financial assets, it can be stolen or damaged. A solid storage strategy is an integral part of your investment.

## Storage Options

### 1. At Home

#### Home Safes

**Recommended features:**
- Minimum UL TL-15 rating
- Minimum weight 100 kg or embedded installation
- Fire resistance (minimum 1 hour)
- Combination or biometric lock

**Advantages:**
- Immediate 24/7 access
- No recurring costs
- Full control

**Disadvantages:**
- Significant initial investment
- Risk of theft
- Home insurance limits

### 2. Bank Safety Deposit Boxes

**Advantages:**
- High security
- Relatively low cost
- Separation from home

**Disadvantages:**
- Access limited to banking hours
- Generally not insured by the bank

### 3. Private Vaults

**Advantages:**
- Maximum security
- Insurance usually included
- Regular audits
- Extended access

**Disadvantages:**
- Higher cost
- Dependence on third parties

## Documentation and Record Keeping

### What to keep:

- Original purchase invoices
- Authenticity certificates
- Detailed photographs
- Updated inventory

## Conclusion

Storage is a critical component of physical gold investment. The optimal method depends on the quantity, your personal situation, and your risk tolerance.`
      },
      fr: {
        title: "Stockage Sécurisé de l'Or Physique : Options et Meilleures Pratiques",
        excerpt: "Des coffres-forts domestiques aux coffres bancaires : comment protéger votre investissement en métaux précieux.",
        category: "Guide",
        tags: ["stockage", "sécurité", "coffres", "coffres-forts"],
        content: `## L'Importance du Stockage

L'or physique nécessite une protection adéquate. Contrairement aux actifs financiers, il peut être volé ou endommagé. Une stratégie de stockage solide fait partie intégrante de votre investissement.

## Options de Stockage

### 1. À Domicile

#### Coffres-forts Domestiques

**Caractéristiques recommandées :**
- Classification minimale UL TL-15
- Poids minimum 100 kg ou installation encastrée
- Résistance au feu (minimum 1 heure)
- Serrure à combinaison ou biométrique

**Avantages :**
- Accès immédiat 24h/24, 7j/7
- Pas de coûts récurrents
- Contrôle total

**Inconvénients :**
- Investissement initial significatif
- Risque de vol
- Limites de l'assurance habitation

### 2. Coffres de Sécurité Bancaires

**Avantages :**
- Haute sécurité
- Coût relativement faible
- Séparation du domicile

**Inconvénients :**
- Accès limité aux heures bancaires
- Généralement non assuré par la banque

### 3. Coffres Privés

**Avantages :**
- Sécurité maximale
- Assurance généralement incluse
- Audits réguliers
- Accès étendu

**Inconvénients :**
- Coût plus élevé
- Dépendance vis-à-vis de tiers

## Documentation et Enregistrement

### Ce qu'il faut conserver :

- Factures d'achat originales
- Certificats d'authenticité
- Photographies détaillées
- Inventaire à jour

## Conclusion

Le stockage est un élément critique de l'investissement en or physique. La méthode optimale dépend de la quantité, de votre situation personnelle et de votre tolérance au risque.`
      },
      de: {
        title: "Sichere Lagerung von physischem Gold: Optionen und Best Practices",
        excerpt: "Von Heimtresoren bis zu Banktresoren: So schützen Sie Ihre Edelmetallinvestition.",
        category: "Leitfaden",
        tags: ["Lagerung", "Sicherheit", "Tresore", "Safes"],
        content: `## Die Bedeutung der Lagerung

Physisches Gold erfordert angemessenen Schutz. Im Gegensatz zu Finanzanlagen kann es gestohlen oder beschädigt werden. Eine solide Lagerungsstrategie ist ein integraler Bestandteil Ihrer Investition.

## Lagerungsoptionen

### 1. Zu Hause

#### Heimtresore

**Empfohlene Eigenschaften:**
- Mindestklassifizierung UL TL-15
- Mindestgewicht 100 kg oder eingebaute Installation
- Feuerbeständigkeit (mindestens 1 Stunde)
- Kombinationsschloss oder biometrisch

**Vorteile:**
- Sofortiger 24/7-Zugang
- Keine laufenden Kosten
- Volle Kontrolle

**Nachteile:**
- Erhebliche Anfangsinvestition
- Diebstahlrisiko
- Grenzen der Hausratversicherung

### 2. Bankschließfächer

**Vorteile:**
- Hohe Sicherheit
- Relativ geringe Kosten
- Trennung vom Zuhause

**Nachteile:**
- Zugang auf Bankzeiten beschränkt
- Im Allgemeinen nicht von der Bank versichert

### 3. Private Tresore

**Vorteile:**
- Maximale Sicherheit
- Versicherung üblicherweise inklusive
- Regelmäßige Audits
- Erweiterter Zugang

**Nachteile:**
- Höhere Kosten
- Abhängigkeit von Dritten

## Dokumentation und Aufzeichnung

### Was aufzubewahren ist:

- Original-Kaufrechnungen
- Echtheitszertifikate
- Detaillierte Fotografien
- Aktualisiertes Inventar

## Fazit

Die Lagerung ist ein kritischer Bestandteil der physischen Goldinvestition. Die optimale Methode hängt von der Menge, Ihrer persönlichen Situation und Ihrer Risikotoleranz ab.`
      }
    }
  }
];

// Helper function to get translated article
export const getTranslatedArticle = (article: Article, language: Language) => {
  const translation = article.translations[language] || article.translations.es;
  return {
    slug: article.slug,
    title: translation.title,
    excerpt: translation.excerpt,
    category: translation.category,
    readTime: article.readTime,
    author: article.author,
    date: article.date,
    featured: article.featured,
    content: translation.content,
    tags: translation.tags,
    image: article.image
  };
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getFeaturedArticle = (): Article | undefined => {
  return articles.find(article => article.featured);
};

export const getRecentArticles = (count: number = 6): Article[] => {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getArticlesByCategory = (category: string, language: Language): Article[] => {
  return articles.filter(article => article.translations[language]?.category === category);
};

export const getAllCategories = (language: Language): string[] => {
  return [...new Set(articles.map(article => article.translations[language]?.category || article.translations.es.category))];
};
