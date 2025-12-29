// Historical gold price data (USD per ounce) - realistic approximations
export interface GoldDataPoint {
  year: number;
  month: number;
  price: number;
  date: string;
}

// Generate realistic historical gold price data
const generateHistoricalData = (): GoldDataPoint[] => {
  const data: GoldDataPoint[] = [];
  
  // Historical gold prices by year (approximate annual averages)
  const historicalPrices: { [year: number]: number } = {
    1974: 154, 1975: 161, 1976: 125, 1977: 148, 1978: 193,
    1979: 306, 1980: 615, 1981: 460, 1982: 376, 1983: 424,
    1984: 361, 1985: 317, 1986: 368, 1987: 447, 1988: 437,
    1989: 381, 1990: 383, 1991: 362, 1992: 344, 1993: 360,
    1994: 384, 1995: 384, 1996: 388, 1997: 331, 1998: 294,
    1999: 279, 2000: 279, 2001: 271, 2002: 310, 2003: 363,
    2004: 409, 2005: 445, 2006: 603, 2007: 695, 2008: 872,
    2009: 972, 2010: 1225, 2011: 1571, 2012: 1669, 2013: 1411,
    2014: 1266, 2015: 1160, 2016: 1251, 2017: 1257, 2018: 1268,
    2019: 1393, 2020: 1770, 2021: 1799, 2022: 1800, 2023: 1940,
    2024: 2350
  };

  // Generate monthly data points with some variation
  Object.entries(historicalPrices).forEach(([yearStr, avgPrice]) => {
    const year = parseInt(yearStr);
    for (let month = 1; month <= 12; month++) {
      // Skip future months in 2024
      if (year === 2024 && month > 12) continue;
      
      // Add realistic monthly variation (±8%)
      const variation = (Math.sin(month * 0.5 + year * 0.1) * 0.08 + (Math.random() - 0.5) * 0.04);
      const price = Math.round(avgPrice * (1 + variation));
      
      const date = `${year}-${month.toString().padStart(2, '0')}`;
      data.push({ year, month, price, date });
    }
  });

  return data.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return a.month - b.month;
  });
};

export const historicalGoldData = generateHistoricalData();

export const getDataForPeriod = (years: number): GoldDataPoint[] => {
  const currentYear = 2024;
  const startYear = currentYear - years;
  
  return historicalGoldData.filter(d => d.year >= startYear);
};

export const getYearlyData = (years: number): GoldDataPoint[] => {
  const data = getDataForPeriod(years);
  
  // For longer periods, aggregate to yearly data
  if (years > 10) {
    const yearlyData: { [year: number]: number[] } = {};
    data.forEach(d => {
      if (!yearlyData[d.year]) yearlyData[d.year] = [];
      yearlyData[d.year].push(d.price);
    });
    
    return Object.entries(yearlyData).map(([year, prices]) => ({
      year: parseInt(year),
      month: 6,
      price: Math.round(prices.reduce((a, b) => a + b, 0) / prices.length),
      date: year
    }));
  }
  
  // For shorter periods, use monthly data but sample if too many points
  if (years <= 5) {
    return data;
  }
  
  // For 10 years, use quarterly data
  return data.filter((_, i) => i % 3 === 0);
};

export const calculateStats = (data: GoldDataPoint[]) => {
  if (data.length === 0) return { min: 0, max: 0, change: 0, changePercent: 0 };
  
  const prices = data.map(d => d.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const first = data[0].price;
  const last = data[data.length - 1].price;
  const change = last - first;
  const changePercent = ((last - first) / first) * 100;
  
  return { min, max, change, changePercent, first, last };
};
