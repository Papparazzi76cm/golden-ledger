// Historical data for multiple assets (USD values, normalized for comparison)
export interface AssetDataPoint {
  year: number;
  month: number;
  date: string;
  gold: number;
  sp500: number;
  bitcoin: number | null;
  inflation: number; // CPI index (base 100 = 1974)
}

// Generate comprehensive historical data for all assets
const generateMultiAssetData = (): AssetDataPoint[] => {
  const data: AssetDataPoint[] = [];
  
  // Historical prices/values by year
  const historicalData: { [year: number]: { gold: number; sp500: number; bitcoin: number | null; cpi: number } } = {
    1974: { gold: 154, sp500: 68, bitcoin: null, cpi: 100 },
    1975: { gold: 161, sp500: 90, bitcoin: null, cpi: 109 },
    1976: { gold: 125, sp500: 107, bitcoin: null, cpi: 115 },
    1977: { gold: 148, sp500: 95, bitcoin: null, cpi: 123 },
    1978: { gold: 193, sp500: 96, bitcoin: null, cpi: 132 },
    1979: { gold: 306, sp500: 107, bitcoin: null, cpi: 147 },
    1980: { gold: 615, sp500: 135, bitcoin: null, cpi: 167 },
    1981: { gold: 460, sp500: 122, bitcoin: null, cpi: 184 },
    1982: { gold: 376, sp500: 140, bitcoin: null, cpi: 195 },
    1983: { gold: 424, sp500: 164, bitcoin: null, cpi: 202 },
    1984: { gold: 361, sp500: 166, bitcoin: null, cpi: 211 },
    1985: { gold: 317, sp500: 211, bitcoin: null, cpi: 218 },
    1986: { gold: 368, sp500: 242, bitcoin: null, cpi: 222 },
    1987: { gold: 447, sp500: 247, bitcoin: null, cpi: 231 },
    1988: { gold: 437, sp500: 277, bitcoin: null, cpi: 240 },
    1989: { gold: 381, sp500: 353, bitcoin: null, cpi: 252 },
    1990: { gold: 383, sp500: 330, bitcoin: null, cpi: 265 },
    1991: { gold: 362, sp500: 417, bitcoin: null, cpi: 277 },
    1992: { gold: 344, sp500: 435, bitcoin: null, cpi: 285 },
    1993: { gold: 360, sp500: 466, bitcoin: null, cpi: 293 },
    1994: { gold: 384, sp500: 459, bitcoin: null, cpi: 301 },
    1995: { gold: 384, sp500: 615, bitcoin: null, cpi: 309 },
    1996: { gold: 388, sp500: 740, bitcoin: null, cpi: 318 },
    1997: { gold: 331, sp500: 970, bitcoin: null, cpi: 326 },
    1998: { gold: 294, sp500: 1229, bitcoin: null, cpi: 331 },
    1999: { gold: 279, sp500: 1469, bitcoin: null, cpi: 339 },
    2000: { gold: 279, sp500: 1320, bitcoin: null, cpi: 351 },
    2001: { gold: 271, sp500: 1148, bitcoin: null, cpi: 361 },
    2002: { gold: 310, sp500: 879, bitcoin: null, cpi: 367 },
    2003: { gold: 363, sp500: 1111, bitcoin: null, cpi: 375 },
    2004: { gold: 409, sp500: 1212, bitcoin: null, cpi: 385 },
    2005: { gold: 445, sp500: 1248, bitcoin: null, cpi: 398 },
    2006: { gold: 603, sp500: 1418, bitcoin: null, cpi: 411 },
    2007: { gold: 695, sp500: 1468, bitcoin: null, cpi: 423 },
    2008: { gold: 872, sp500: 903, bitcoin: null, cpi: 439 },
    2009: { gold: 972, sp500: 1115, bitcoin: 0.1, cpi: 437 },
    2010: { gold: 1225, sp500: 1258, bitcoin: 0.3, cpi: 444 },
    2011: { gold: 1571, sp500: 1258, bitcoin: 5, cpi: 458 },
    2012: { gold: 1669, sp500: 1426, bitcoin: 13, cpi: 468 },
    2013: { gold: 1411, sp500: 1848, bitcoin: 750, cpi: 474 },
    2014: { gold: 1266, sp500: 2059, bitcoin: 320, cpi: 480 },
    2015: { gold: 1160, sp500: 2044, bitcoin: 430, cpi: 481 },
    2016: { gold: 1251, sp500: 2239, bitcoin: 960, cpi: 488 },
    2017: { gold: 1257, sp500: 2674, bitcoin: 14000, cpi: 498 },
    2018: { gold: 1268, sp500: 2507, bitcoin: 3700, cpi: 510 },
    2019: { gold: 1393, sp500: 3231, bitcoin: 7200, cpi: 519 },
    2020: { gold: 1770, sp500: 3756, bitcoin: 29000, cpi: 526 },
    2021: { gold: 1799, sp500: 4766, bitcoin: 47000, cpi: 551 },
    2022: { gold: 1800, sp500: 3840, bitcoin: 16500, cpi: 595 },
    2023: { gold: 1940, sp500: 4770, bitcoin: 42000, cpi: 614 },
    2024: { gold: 2500, sp500: 5880, bitcoin: 95000, cpi: 632 },
    2025: { gold: 3500, sp500: 6500, bitcoin: 100000, cpi: 649 },
  };

  // Precise monthly data for 2024
  const monthlyData2024: { [month: number]: { gold: number; sp500: number; bitcoin: number; cpi: number } } = {
    1: { gold: 2034, sp500: 4804, bitcoin: 42500, cpi: 618 },
    2: { gold: 2023, sp500: 5012, bitcoin: 51500, cpi: 620 },
    3: { gold: 2158, sp500: 5171, bitcoin: 69500, cpi: 622 },
    4: { gold: 2336, sp500: 5095, bitcoin: 63000, cpi: 624 },
    5: { gold: 2352, sp500: 5235, bitcoin: 67500, cpi: 626 },
    6: { gold: 2326, sp500: 5415, bitcoin: 61000, cpi: 628 },
    7: { gold: 2395, sp500: 5543, bitcoin: 66000, cpi: 630 },
    8: { gold: 2468, sp500: 5502, bitcoin: 59000, cpi: 632 },
    9: { gold: 2567, sp500: 5626, bitcoin: 63500, cpi: 634 },
    10: { gold: 2690, sp500: 5792, bitcoin: 68000, cpi: 636 },
    11: { gold: 2651, sp500: 5930, bitcoin: 96500, cpi: 638 },
    12: { gold: 2644, sp500: 6011, bitcoin: 93500, cpi: 640 },
  };

  // Precise monthly data for 2025
  const monthlyData2025: { [month: number]: { gold: number; sp500: number; bitcoin: number; cpi: number } } = {
    1: { gold: 2710, sp500: 5980, bitcoin: 102400, cpi: 318 },
    2: { gold: 2895, sp500: 6039, bitcoin: 84400, cpi: 319 },
    3: { gold: 2983, sp500: 5684, bitcoin: 82500, cpi: 320 },
    4: { gold: 3207, sp500: 5370, bitcoin: 94200, cpi: 321 },
    5: { gold: 3278, sp500: 5811, bitcoin: 104600, cpi: 321 },
    6: { gold: 3352, sp500: 6030, bitcoin: 107100, cpi: 323 },
    7: { gold: 3338, sp500: 6297, bitcoin: 115800, cpi: 323 },
    8: { gold: 3363, sp500: 6409, bitcoin: 108200, cpi: 324 },
    9: { gold: 3665, sp500: 6584, bitcoin: 114000, cpi: 325 },
    10: { gold: 4053, sp500: 6736, bitcoin: 109600, cpi: 326 },
    11: { gold: 4230, sp500: 6741, bitcoin: 90400, cpi: 324 },
    12: { gold: 4375, sp500: 6935, bitcoin: 87500, cpi: 326 },
  };

  // Generate monthly data with variation
  Object.entries(historicalData).forEach(([yearStr, values]) => {
    const year = parseInt(yearStr);
    for (let month = 1; month <= 12; month++) {
      let gold: number, sp500: number, bitcoin: number | null, inflation: number;
      
      // Use precise monthly data for 2024 and 2025
      if (year === 2024 && monthlyData2024[month]) {
        const d = monthlyData2024[month];
        gold = d.gold;
        sp500 = d.sp500;
        bitcoin = d.bitcoin;
        inflation = d.cpi;
      } else if (year === 2025 && monthlyData2025[month]) {
        const d = monthlyData2025[month];
        gold = d.gold;
        sp500 = d.sp500;
        bitcoin = d.bitcoin;
        inflation = d.cpi;
      } else {
        const variation = (Math.sin(month * 0.5 + year * 0.1) * 0.05 + (Math.random() - 0.5) * 0.03);
        gold = Math.round(values.gold * (1 + variation));
        sp500 = Math.round(values.sp500 * (1 + variation * 0.8));
        bitcoin = values.bitcoin ? Math.round(values.bitcoin * (1 + variation * 2)) : null;
        inflation = Math.round(values.cpi * (1 + variation * 0.02));
      }
      
      data.push({
        year,
        month,
        date: `${year}-${month.toString().padStart(2, '0')}`,
        gold,
        sp500,
        bitcoin,
        inflation,
      });
    }
  });

  return data.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return a.month - b.month;
  });
};

export const multiAssetData = generateMultiAssetData();

export const getMultiAssetDataForPeriod = (years: number): AssetDataPoint[] => {
  const currentYear = 2025;
  const startYear = currentYear - years;
  
  const data = multiAssetData.filter(d => d.year >= startYear);
  
  // Aggregate for longer periods
  if (years > 10) {
    const yearlyData: { [year: number]: AssetDataPoint[] } = {};
    data.forEach(d => {
      if (!yearlyData[d.year]) yearlyData[d.year] = [];
      yearlyData[d.year].push(d);
    });
    
    return Object.entries(yearlyData).map(([year, points]) => ({
      year: parseInt(year),
      month: 6,
      date: year,
      gold: Math.round(points.reduce((a, b) => a + b.gold, 0) / points.length),
      sp500: Math.round(points.reduce((a, b) => a + b.sp500, 0) / points.length),
      bitcoin: points[0].bitcoin !== null 
        ? Math.round(points.reduce((a, b) => a + (b.bitcoin || 0), 0) / points.length)
        : null,
      inflation: Math.round(points.reduce((a, b) => a + b.inflation, 0) / points.length),
    }));
  }
  
  if (years <= 5) {
    return data;
  }
  
  return data.filter((_, i) => i % 3 === 0);
};

// Normalize data to percentage change from start
export const normalizeData = (data: AssetDataPoint[], assets: string[]): AssetDataPoint[] => {
  if (data.length === 0) return [];
  
  const firstPoint = data[0];
  
  return data.map(point => ({
    ...point,
    gold: ((point.gold - firstPoint.gold) / firstPoint.gold) * 100,
    sp500: ((point.sp500 - firstPoint.sp500) / firstPoint.sp500) * 100,
    bitcoin: point.bitcoin !== null && firstPoint.bitcoin !== null && firstPoint.bitcoin > 0
      ? ((point.bitcoin - firstPoint.bitcoin) / firstPoint.bitcoin) * 100
      : null,
    inflation: ((point.inflation - firstPoint.inflation) / firstPoint.inflation) * 100,
  }));
};
