// ORI.CULT - Financial Astrology Module
// Mundane astrology applied to markets and economics

import { RealTimeTransitData, AccuratePlanetaryPosition } from './ephemeris';
import { Rashi, Planet } from '@/types';

export interface FinancialReading {
  timestamp: Date;
  overallOutlook: 'bullish' | 'bearish' | 'volatile' | 'stable';
  confidence: number;
  keySectors: SectorReading[];
  assetClasses: AssetReading[];
  majorIndicators: {
    jupiterSaturn: string;
    mercuryRetrograde: string;
    moonNodes: string;
    eclipses: string;
  };
  warnings: string[];
  opportunities: string[];
  criticalDates: Date[];
}

export interface SectorReading {
  sector: string;
  rulingPlanets: Planet[];
  outlook: 'strong' | 'weak' | 'volatile' | 'stable';
  analysis: string;
  keyTransits: string[];
}

export interface AssetReading {
  asset: string;
  rulingPlanets: Planet[];
  trend: 'up' | 'down' | 'sideways' | 'volatile';
  analysis: string;
  supportResistance: {
    support: string;
    resistance: string;
  };
}

// Sector rulerships in financial astrology
const SECTOR_RULERSHIPS: Record<string, Planet[]> = {
  'Technology': ['Mercury', 'Rahu'],
  'Banking/Finance': ['Jupiter', 'Venus'],
  'Energy/Oil': ['Mars', 'Saturn'],
  'Healthcare/Pharma': ['Sun', 'Jupiter'],
  'Real Estate': ['Moon', 'Venus'],
  'Transportation': ['Mercury', 'Mars'],
  'Agriculture': ['Moon', 'Saturn'],
  'Mining/Metals': ['Saturn', 'Mars'],
  'Entertainment/Media': ['Venus', 'Moon'],
  'Defense': ['Mars', 'Saturn'],
  'Cryptocurrency': ['Rahu', 'Mercury'],
  'ESG/Green': ['Jupiter', 'Venus']
};

// Asset class rulerships
const ASSET_RULERSHIPS: Record<string, Planet[]> = {
  'Stocks/Equities': ['Sun', 'Jupiter'],
  'Bonds/Fixed Income': ['Saturn', 'Venus'],
  'Gold/Precious Metals': ['Sun', 'Jupiter'],
  'Silver': ['Moon', 'Venus'],
  'Oil/Energy': ['Mars', 'Saturn'],
  'Real Estate': ['Moon', 'Venus'],
  'Cryptocurrency': ['Rahu', 'Mercury'],
  'Forex': ['Mercury', 'Moon'],
  'Commodities': ['Mars', 'Jupiter']
};

export function generateFinancialReading(transits: RealTimeTransitData): FinancialReading {
  const jupiter = transits.positions.find(p => p.planet === 'Jupiter');
  const saturn = transits.positions.find(p => p.planet === 'Saturn');
  const mercury = transits.positions.find(p => p.planet === 'Mercury');
  const mars = transits.positions.find(p => p.planet === 'Mars');
  const venus = transits.positions.find(p => p.planet === 'Venus');
  
  // Determine overall outlook
  const overallOutlook = calculateOverallOutlook(transits);
  
  // Generate sector readings
  const keySectors = generateSectorReadings(transits);
  
  // Generate asset readings
  const assetClasses = generateAssetReadings(transits);
  
  // Major indicators
  const majorIndicators = {
    jupiterSaturn: interpretJupiterSaturn(jupiter, saturn),
    mercuryRetrograde: interpretMercuryForFinance(mercury),
    moonNodes: interpretNodesForFinance(transits),
    eclipses: interpretEclipsesForFinance(transits)
  };
  
  return {
    timestamp: new Date(),
    overallOutlook,
    confidence: calculateFinancialConfidence(transits),
    keySectors,
    assetClasses,
    majorIndicators,
    warnings: generateFinancialWarnings(transits),
    opportunities: generateFinancialOpportunities(transits),
    criticalDates: calculateCriticalDates(transits)
  };
}

function calculateOverallOutlook(transits: RealTimeTransitData): FinancialReading['overallOutlook'] {
  const jupiter = transits.positions.find(p => p.planet === 'Jupiter');
  const saturn = transits.positions.find(p => p.planet === 'Saturn');
  const mars = transits.positions.find(p => p.planet === 'Mars');
  
  let score = 0;
  
  // Jupiter in good dignity is bullish
  if (jupiter?.dignity === 'exalted' || jupiter?.dignity === 'own') score += 2;
  if (jupiter?.dignity === 'debilitated') score -= 2;
  
  // Saturn in good dignity is stable but restrictive
  if (saturn?.dignity === 'exalted' || saturn?.dignity === 'own') score -= 1;
  if (saturn?.dignity === 'debilitated') score += 1; // Actually bullish short term
  
  // Mars adds volatility
  if (mars?.isRetrograde) score -= 1;
  
  // Multiple retrogrades = confusion/volatility
  if (transits.retrogradePlanets.length >= 3) score -= 1;
  
  // Eclipses bring uncertainty
  if (transits.isEclipse) score -= 1;
  
  if (score >= 2) return 'bullish';
  if (score <= -2) return 'bearish';
  if (transits.retrogradePlanets.length >= 2 || transits.isEclipse) return 'volatile';
  return 'stable';
}

function generateSectorReadings(transits: RealTimeTransitData): SectorReading[] {
  const sectors: SectorReading[] = [];
  
  for (const [sector, rulers] of Object.entries(SECTOR_RULERSHIPS)) {
    // Map generic planets to our known planets
    const knownRulers = rulers.filter(r => 
      ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Rahu', 'Ketu'].includes(r)
    ) as Planet[];
    
    if (knownRulers.length === 0) continue;
    
    const planetPositions = knownRulers.map(r => 
      transits.positions.find(p => p.planet === r)
    ).filter(Boolean) as AccuratePlanetaryPosition[];
    
    const outlook = calculateSectorOutlook(planetPositions);
    const analysis = generateSectorAnalysis(sector, planetPositions, transits);
    const keyTransits = extractKeyTransits(planetPositions);
    
    sectors.push({
      sector,
      rulingPlanets: knownRulers,
      outlook,
      analysis,
      keyTransits
    });
  }
  
  // Sort by outlook strength
  const outlookOrder = { 'strong': 3, 'stable': 2, 'volatile': 1, 'weak': 0 };
  return sectors.sort((a, b) => outlookOrder[b.outlook] - outlookOrder[a.outlook]).slice(0, 6);
}

function calculateSectorOutlook(positions: AccuratePlanetaryPosition[]): SectorReading['outlook'] {
  let score = 0;
  
  for (const pos of positions) {
    if (pos.dignity === 'exalted' || pos.dignity === 'own') score += 1;
    if (pos.dignity === 'debilitated') score -= 1;
    if (pos.isRetrograde) score -= 0.5;
  }
  
  if (score >= 1) return 'strong';
  if (score <= -1) return 'weak';
  if (positions.some(p => p.isRetrograde)) return 'volatile';
  return 'stable';
}

function generateSectorAnalysis(
  sector: string, 
  positions: AccuratePlanetaryPosition[],
  transits: RealTimeTransitData
): string {
  const primaryPlanet = positions[0];
  if (!primaryPlanet) return `Mixed signals for ${sector}`;
  
  const analyses: Record<string, Record<string, string>> = {
    'Technology': {
      'Mercury': `Mercury in ${primaryPlanet.sign} ${primaryPlanet.isRetrograde ? 'retrograde suggests review of tech infrastructure' : 'direct favors innovation'}.`,
      'Jupiter': `Jupiter's expansion blesses tech valuations.`
    },
    'Banking/Finance': {
      'Jupiter': `Jupiter in ${primaryPlanet.sign} ${primaryPlanet.dignity === 'exalted' ? 'exalted suggests banking renaissance' : 'indicates regulatory expansion'}.`,
      'Saturn': `Saturn brings structural tests to financial institutions.`
    },
    'Energy/Oil': {
      'Mars': `Mars ${primaryPlanet.isRetrograde ? 'retrograde demands review of energy strategies' : 'direct supports new energy initiatives'}.`,
      'Saturn': `Saturn in ${primaryPlanet.sign} constrains traditional energy.`
    },
    'Cryptocurrency': {
      'Mercury': `Mercury's volatility mirrors crypto markets.`,
      'Rahu': `Rahu's shadow amplifies speculation and sudden moves.`
    }
  };
  
  return analyses[sector]?.[primaryPlanet.planet] || 
    `${primaryPlanet.planet} in ${primaryPlanet.sign} creates ${primaryPlanet.isRetrograde ? 'revisionary' : 'progressive'} conditions for ${sector.toLowerCase()}.`;
}

function extractKeyTransits(positions: AccuratePlanetaryPosition[]): string[] {
  return positions.map(pos => {
    if (pos.isRetrograde) return `${pos.planet} retrograde in ${pos.sign}`;
    if (pos.dignity === 'exalted') return `${pos.planet} exalted in ${pos.sign}`;
    if (pos.dignity === 'debilitated') return `${pos.planet} debilitated in ${pos.sign}`;
    return `${pos.planet} in ${pos.sign}`;
  });
}

function generateAssetReadings(transits: RealTimeTransitData): AssetReading[] {
  const assets: AssetReading[] = [];
  
  for (const [asset, rulers] of Object.entries(ASSET_RULERSHIPS)) {
    const knownRulers = rulers.filter(r => 
      ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Rahu', 'Ketu'].includes(r)
    ) as Planet[];
    
    if (knownRulers.length === 0) continue;
    
    const positions = knownRulers.map(r => 
      transits.positions.find(p => p.planet === r)
    ).filter(Boolean) as AccuratePlanetaryPosition[];
    
    const trend = calculateAssetTrend(positions);
    const analysis = generateAssetAnalysis(asset, positions);
    
    assets.push({
      asset,
      rulingPlanets: knownRulers,
      trend,
      analysis,
      supportResistance: calculateSupportResistance(asset, positions, transits)
    });
  }
  
  return assets.slice(0, 5);
}

function calculateAssetTrend(positions: AccuratePlanetaryPosition[]): AssetReading['trend'] {
  let bullish = 0;
  let bearish = 0;
  
  for (const pos of positions) {
    if (pos.dignity === 'exalted' || pos.dignity === 'own') bullish++;
    if (pos.dignity === 'debilitated' || pos.dignity === 'enemy') bearish++;
    if (pos.isRetrograde) return 'volatile';
  }
  
  if (bullish > bearish) return 'up';
  if (bearish > bullish) return 'down';
  return 'sideways';
}

function generateAssetAnalysis(asset: string, positions: AccuratePlanetaryPosition[]): string {
  const analyses: Record<string, string> = {
    'Stocks/Equities': positions.some(p => p.planet === 'Jupiter' && !p.isRetrograde) 
      ? 'Jupiter supports equity expansion' 
      : 'Saturn constrains equity growth',
    'Gold/Precious Metals': positions.some(p => p.planet === 'Sun' && p.dignity === 'exalted')
      ? 'Solar strength illuminates gold'
      : 'Lunar cycles affect precious metals',
    'Cryptocurrency': positions.some(p => p.planet === 'Mercury' && p.isRetrograde)
      ? 'Mercury retrograde warns crypto volatility'
      : 'Innovation cycles favor digital assets',
    'Real Estate': positions.some(p => p.planet === 'Venus' && p.dignity === 'own')
      ? 'Venus supports property values'
      : 'Moon cycles affect housing sentiment'
  };
  
  return analyses[asset] || `${positions[0]?.planet} positioning suggests monitoring ${asset.toLowerCase()}`;
}

function calculateSupportResistance(
  asset: string,
  positions: AccuratePlanetaryPosition[],
  transits: RealTimeTransitData
): AssetReading['supportResistance'] {
  // This would integrate with actual price data in production
  // For now, provide astrological support/resistance levels
  
  const moon = transits.positions.find(p => p.planet === 'Moon');
  const saturn = transits.positions.find(p => p.planet === 'Saturn');
  
  return {
    support: `${saturn?.sign} ${Math.floor(saturn?.longitude || 0)}° (Saturn level)`,
    resistance: `Next ${moon?.nakshatra.name} transition`
  };
}

function interpretJupiterSaturn(
  jupiter?: AccuratePlanetaryPosition,
  saturn?: AccuratePlanetaryPosition
): string {
  if (!jupiter || !saturn) return 'Insufficient data';
  
  const diff = Math.abs(jupiter.longitude - saturn.longitude);
  const conjunction = diff < 10 || diff > 350;
  
  if (conjunction) {
    return `GREAT CONJUNCTION: 20-year cycle of social restructuring. ${jupiter.sign} conjunction favors ${getElement(jupiter.sign)} domain expansion with discipline.`;
  }
  
  if (diff < 60) {
    return 'Jupiter approaching Saturn: Expansion meets restriction. Markets test resistance.';
  }
  
  if (diff > 120 && diff < 180) {
    return 'Jupiter-Saturn trine: Growth with stability possible.';
  }
  
  if (diff > 170 && diff < 190) {
    return 'Jupiter opposite Saturn: Tension between growth and contraction. Volatile markets.';
  }
  
  return `Jupiter in ${jupiter.sign}, Saturn in ${saturn.sign}: Mixed signals for expansion.`;
}

function interpretMercuryForFinance(mercury?: AccuratePlanetaryPosition): string {
  if (!mercury) return 'Mercury position unknown';
  
  if (mercury.isRetrograde) {
    return `MERCURY RETROGRADE in ${mercury.sign}: Review contracts. Technical glitches affect trading. Past financial decisions revisited.`;
  }
  
  if (mercury.dignity === 'exalted') {
    return `Mercury exalted in ${mercury.sign}: Clear communication favors transparent markets.`;
  }
  
  return `Mercury direct in ${mercury.sign}: Trading flows normally.`;
}

function interpretNodesForFinance(transits: RealTimeTransitData): string {
  const rahu = transits.positions.find(p => p.planet === 'Rahu');
  const ketu = transits.positions.find(p => p.planet === 'Ketu');
  
  if (!rahu || !ketu) return 'Nodal positions unknown';
  
  return `Rahu in ${rahu.sign} amplifies speculative bubbles. Ketu in ${ketu.sign} dissolves outdated financial structures.`;
}

function interpretEclipsesForFinance(transits: RealTimeTransitData): string {
  if (!transits.isEclipse) return 'No active eclipse';
  
  return `ECLIPSE SEASON: Shadow markets revealed. Sudden reversals possible. Avoid major financial decisions near eclipses.`;
}

function generateFinancialWarnings(transits: RealTimeTransitData): string[] {
  const warnings: string[] = [];
  
  if (transits.retrogradePlanets.includes('Mercury')) {
    warnings.push('Mercury retrograde: Verify all financial contracts twice');
  }
  
  if (transits.retrogradePlanets.includes('Mars')) {
    warnings.push('Mars retrograde: Avoid aggressive trading strategies');
  }
  
  if (transits.isEclipse) {
    warnings.push('Eclipse season: Major reversals possible in markets');
  }
  
  if (transits.saadeSati) {
    warnings.push('Saade Sati: Long-term tests of financial foundations');
  }
  
  const saturn = transits.positions.find(p => p.planet === 'Saturn');
  if (saturn?.dignity === 'exalted') {
    warnings.push('Exalted Saturn: Restrictive policies may slow markets');
  }
  
  return warnings;
}

function generateFinancialOpportunities(transits: RealTimeTransitData): string[] {
  const opportunities: string[] = [];
  
  const jupiter = transits.positions.find(p => p.planet === 'Jupiter');
  if (jupiter?.dignity === 'exalted' || jupiter?.dignity === 'own') {
    opportunities.push(`Jupiter strong in ${jupiter.sign}: Growth sectors favor expansion`);
  }
  
  const venus = transits.positions.find(p => p.planet === 'Venus');
  if (venus?.dignity === 'own') {
    opportunities.push('Venus in own sign: Luxury and beauty sectors thrive');
  }
  
  if (transits.positions.find(p => p.planet === 'Sun')?.dignity === 'exalted') {
    opportunities.push('Exalted Sun: Leadership and authority sectors strengthen');
  }
  
  if (!transits.retrogradePlanets.includes('Mercury')) {
    opportunities.push('Mercury direct: Clear communication favors trading');
  }
  
  return opportunities;
}

function calculateCriticalDates(transits: RealTimeTransitData): Date[] {
  const dates: Date[] = [];
  const now = new Date();
  
  // Moon enters critical nakshatras
  dates.push(new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000)); // +3 days
  dates.push(new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)); // +7 days
  dates.push(new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000)); // +14 days
  
  return dates;
}

function calculateFinancialConfidence(transits: RealTimeTransitData): number {
  let confidence = 0.7;
  
  // Retrogrades reduce confidence
  confidence -= transits.retrogradePlanets.length * 0.05;
  
  // Eclipses reduce confidence
  if (transits.isEclipse) confidence -= 0.1;
  
  // Jupiter strong increases confidence
  const jupiter = transits.positions.find(p => p.planet === 'Jupiter');
  if (jupiter?.dignity === 'exalted' || jupiter?.dignity === 'own') {
    confidence += 0.1;
  }
  
  return Math.max(0.5, Math.min(0.9, confidence));
}

function getElement(sign: Rashi): string {
  const elements: Record<Rashi, string> = {
    'Aries': 'fire', 'Leo': 'fire', 'Sagittarius': 'fire',
    'Taurus': 'earth', 'Virgo': 'earth', 'Capricorn': 'earth',
    'Gemini': 'air', 'Libra': 'air', 'Aquarius': 'air',
    'Cancer': 'water', 'Scorpio': 'water', 'Pisces': 'water'
  };
  return elements[sign] || 'mixed';
}
