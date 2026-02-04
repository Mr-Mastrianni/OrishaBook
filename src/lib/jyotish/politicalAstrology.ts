// ORI.CULT - Political/Mundane Astrology Module
// Astrological analysis of world politics and governance

import { RealTimeTransitData, AccuratePlanetaryPosition } from './ephemeris';
import { Rashi, Planet } from '@/types';
import { TraditionalOdu } from '@/data/oduIfa';

export interface PoliticalReading {
  timestamp: Date;
  overallStability: 'stable' | 'unstable' | 'volatile' | 'transformational';
  globalTrends: GlobalTrend[];
  regionalAnalysis: RegionalReading[];
  powerStructures: PowerStructureReading[];
  conflictZones: ConflictReading[];
  majorPowers: MajorPowerReading[];
  criticalPeriods: CriticalPeriod[];
  predictions: PoliticalPrediction[];
}

export interface GlobalTrend {
  theme: string;
  drivingPlanets: Planet[];
  description: string;
  intensity: 'low' | 'moderate' | 'high' | 'extreme';
  duration: string;
}

export interface RegionalReading {
  region: string;
  rashiAssociation: Rashi;
  planets: AccuratePlanetaryPosition[];
  outlook: string;
  stability: 'stable' | 'unstable' | 'critical';
}

export interface PowerStructureReading {
  institution: string;
  rulingPlanets: Planet[];
  condition: 'strong' | 'weakened' | 'challenged' | 'transforming';
  analysis: string;
}

export interface ConflictReading {
  type: string;
  location?: string;
  astrologicalSignatures: string[];
  risk: 'low' | 'moderate' | 'high' | 'critical';
  description: string;
}

export interface MajorPowerReading {
  nation: string;
  chartFactors: string[];
  currentTransits: string[];
  outlook: string;
  leadership: 'stable' | 'challenged' | 'changing' | 'crisis';
}

export interface CriticalPeriod {
  date: Date;
  description: string;
  planets: Planet[];
  severity: 'minor' | 'significant' | 'major' | 'critical';
}

export interface PoliticalPrediction {
  timeframe: 'immediate' | 'short' | 'medium' | 'long';
  prediction: string;
  astrologicalBasis: string;
  confidence: number;
}

// Regions and their astrological associations
const REGION_RULERSHIPS: Record<string, Rashi[]> = {
  'United States': ['Gemini', 'Cancer', 'Sagittarius'], // Historical charts
  'China': ['Libra', 'Aquarius'],
  'Russia': ['Aquarius', 'Leo'],
  'EU': ['Libra', 'Capricorn'],
  'India': ['Cancer', 'Capricorn'],
  'Middle East': ['Leo', 'Scorpio'],
  'Africa': ['Libra', 'Virgo'],
  'Latin America': ['Sagittarius', 'Pisces'],
  'Southeast Asia': ['Gemini', 'Virgo']
};

export function generatePoliticalReading(
  transits: RealTimeTransitData,
  odu: TraditionalOdu
): PoliticalReading {
  return {
    timestamp: new Date(),
    overallStability: calculateOverallStability(transits),
    globalTrends: identifyGlobalTrends(transits),
    regionalAnalysis: analyzeRegions(transits),
    powerStructures: analyzePowerStructures(transits),
    conflictZones: identifyConflictZones(transits),
    majorPowers: analyzeMajorPowers(transits),
    criticalPeriods: calculateCriticalPeriods(transits),
    predictions: generatePoliticalPredictions(transits, odu)
  };
}

function calculateOverallStability(transits: RealTimeTransitData): PoliticalReading['overallStability'] {
  const saturn = transits.positions.find(p => p.planet === 'Saturn');
  const mars = transits.positions.find(p => p.planet === 'Mars');
  const jupiter = transits.positions.find(p => p.planet === 'Jupiter');
  
  let stability = 0;
  
  // Saturn in Capricorn/Aquarius (its own) = structural stability but restriction
  if (saturn?.sign === 'Capricorn' || saturn?.sign === 'Aquarius') {
    stability -= 1; // Authoritarian trends
  }
  
  // Mars retrograde = conflicts stall but don't resolve
  if (mars?.isRetrograde) stability -= 1;
  
  // Jupiter strong = diplomatic solutions possible
  if (jupiter?.dignity === 'exalted' || jupiter?.dignity === 'own') {
    stability += 1;
  }
  
  // Multiple retrogrades = confusion
  if (transits.retrogradePlanets.length >= 3) stability -= 2;
  
  // Eclipses = sudden changes
  if (transits.isEclipse) stability -= 1;
  
  // Uranus transits (simulated through Saturn-Uranus squares if we had Uranus)
  
  if (stability <= -3) return 'volatile';
  if (stability <= -1) return 'unstable';
  if (stability >= 2) return 'stable';
  return 'transformational';
}

function identifyGlobalTrends(transits: RealTimeTransitData): GlobalTrend[] {
  const trends: GlobalTrend[] = [];
  
  const saturn = transits.positions.find(p => p.planet === 'Saturn');
  const jupiter = transits.positions.find(p => p.planet === 'Jupiter');
  const mars = transits.positions.find(p => p.planet === 'Mars');
  const mercury = transits.positions.find(p => p.planet === 'Mercury');
  
  // Jupiter-Saturn cycle (Great Conjunction aftermath)
  if (saturn && jupiter) {
    const diff = Math.abs(saturn.longitude - jupiter.longitude);
    if (diff < 30 || diff > 330) {
      trends.push({
        theme: 'Social Restructuring',
        drivingPlanets: ['Jupiter', 'Saturn'],
        description: '20-year cycle of institutional transformation. Old structures replaced by new paradigms.',
        intensity: 'high',
        duration: 'Through 2024-2025'
      });
    }
  }
  
  // Saturn in Aquarius = technological authoritarianism
  if (saturn?.sign === 'Aquarius') {
    trends.push({
      theme: 'Technocratic Governance',
      drivingPlanets: ['Saturn'],
      description: 'Technology used for social control. Surveillance states expand. Digital currencies advance.',
      intensity: 'high',
      duration: 'While Saturn in Aquarius'
    });
  }
  
  // Mars-Jupiter = expansion of conflict
  if (mars && jupiter) {
    const diff = Math.abs(mars.longitude - jupiter.longitude);
    if (diff < 15 || diff > 345) {
      trends.push({
        theme: 'Military Expansion',
        drivingPlanets: ['Mars', 'Jupiter'],
        description: 'Conflicts escalate rapidly. Military posturing increases. Arms races accelerate.',
        intensity: 'extreme',
        duration: 'Until Mars separates from Jupiter'
      });
    }
  }
  
  // Mercury retrograde = communication breakdowns
  if (mercury?.isRetrograde) {
    trends.push({
      theme: 'Information Warfare',
      drivingPlanets: ['Mercury'],
      description: 'Disinformation campaigns intensify. Communication breakdowns between nations.',
      intensity: 'moderate',
      duration: 'Mercury retrograde period'
    });
  }
  
  // Rahu-Ketu = karmic reckoning
  const rahu = transits.positions.find(p => p.planet === 'Rahu');
  if (rahu?.sign === 'Aries' || rahu?.sign === 'Taurus') {
    trends.push({
      theme: 'Karmic Reckoning',
      drivingPlanets: ['Rahu', 'Ketu'],
      description: 'Consequences of past actions manifest. Collective shadow emerges to be healed.',
      intensity: 'high',
      duration: '18-month nodal cycle'
    });
  }
  
  // Transformation themes (through Saturn-Ketu correlation)
  if (saturn?.sign === 'Capricorn') {
    trends.push({
      theme: 'Death and Rebirth of Authority',
      drivingPlanets: ['Saturn', 'Rahu'],
      description: 'Old power structures crumble. New authorities emerge from crisis.',
      intensity: 'extreme',
      duration: 'Saturn-Ketu transformation period'
    });
  }
  
  return trends;
}

function analyzeRegions(transits: RealTimeTransitData): RegionalReading[] {
  const regions: RegionalReading[] = [];
  
  for (const [region, rashis] of Object.entries(REGION_RULERSHIPS)) {
    // Find planets in these rashis
    const planetsInRegion = transits.positions.filter(p => rashis.includes(p.sign));
    
    if (planetsInRegion.length === 0) continue;
    
    const stability = calculateRegionalStability(planetsInRegion);
    const outlook = generateRegionalOutlook(region, planetsInRegion);
    
    regions.push({
      region,
      rashiAssociation: rashis[0],
      planets: planetsInRegion,
      outlook,
      stability
    });
  }
  
  return regions.sort((a, b) => {
    const stabilityOrder = { 'critical': 0, 'unstable': 1, 'stable': 2 };
    return stabilityOrder[a.stability] - stabilityOrder[b.stability];
  }).slice(0, 6);
}

function calculateRegionalStability(planets: AccuratePlanetaryPosition[]): RegionalReading['stability'] {
  let score = 0;
  
  for (const p of planets) {
    if (p.planet === 'Saturn' && (p.dignity === 'exalted' || p.dignity === 'own')) score -= 1;
    if (p.planet === 'Mars' && p.isRetrograde) score -= 1;
    if (p.planet === 'Jupiter' && !p.isRetrograde) score += 1;
    if (p.isRetrograde) score -= 0.5;
  }
  
  if (score <= -2) return 'critical';
  if (score <= -0.5) return 'unstable';
  return 'stable';
}

function generateRegionalOutlook(region: string, planets: AccuratePlanetaryPosition[]): string {
  const primaryPlanet = planets[0];
  if (!primaryPlanet) return `No major planetary activity in ${region}`;
  
  const outlooks: Record<string, Record<string, string>> = {
    'United States': {
      'Saturn': 'Structural tests to democratic institutions.',
      'Rahu': 'Shadow transformation of power structures.',
      'Jupiter': 'Expansionary policies favor growth.',
      'default': 'Mixed planetary influences suggest adaptability.'
    },
    'China': {
      'Saturn': 'Authority consolidates. Long-term planning emphasized.',
      'Jupiter': 'Economic expansion despite challenges.',
      'default': 'Strategic positioning in global power shifts.'
    },
    'Russia': {
      'Mars': 'Military posturing intensifies.',
      'Saturn': 'Isolationist tendencies strengthen.',
      'default': 'Defensive posture in geopolitical arena.'
    },
    'EU': {
      'Jupiter': 'Integration efforts expand despite friction.',
      'Saturn': 'Restrictive policies challenge unity.',
      'default': 'Balancing national vs collective interests.'
    },
    'Middle East': {
      'Mars': 'Regional conflicts escalate.',
      'Saturn': 'Old orders face structural challenges.',
      'default': 'Complex power dynamics persist.'
    }
  };
  
  return outlooks[region]?.[primaryPlanet.planet] || 
    outlooks[region]?.['default'] || 
    `${primaryPlanet.planet} in ${primaryPlanet.sign} brings ${primaryPlanet.isRetrograde ? 'revision' : 'new developments'} to ${region}.`;
}

function analyzePowerStructures(transits: RealTimeTransitData): PowerStructureReading[] {
  const structures: PowerStructureReading[] = [
    {
      institution: 'United Nations',
      rulingPlanets: ['Jupiter', 'Venus'],
      condition: transits.positions.find(p => p.planet === 'Jupiter')?.isRetrograde ? 'challenged' : 'strong',
      analysis: interpretUNCondition(transits)
    },
    {
      institution: 'Global Financial System',
      rulingPlanets: ['Jupiter', 'Saturn', 'Venus'],
      condition: transits.positions.find(p => p.planet === 'Saturn')?.sign === 'Aquarius' ? 'transforming' : 'strong',
      analysis: interpretFinancialSystem(transits)
    },
    {
      institution: 'Military Alliances',
      rulingPlanets: ['Mars', 'Saturn'],
      condition: transits.positions.find(p => p.planet === 'Mars')?.isRetrograde ? 'weakened' : 'strong',
      analysis: interpretMilitaryAlliances(transits)
    },
    {
      institution: 'Media/Information Systems',
      rulingPlanets: ['Mercury'],
      condition: transits.positions.find(p => p.planet === 'Mercury')?.isRetrograde ? 'challenged' : 'strong',
      analysis: interpretMediaSystems(transits)
    }
  ];
  
  return structures;
}

function interpretUNCondition(transits: RealTimeTransitData): string {
  const jupiter = transits.positions.find(p => p.planet === 'Jupiter');
  if (jupiter?.isRetrograde) {
    return 'Jupiter retrograde challenges diplomatic solutions. International cooperation faces obstacles.';
  }
  if (jupiter?.dignity === 'exalted') {
    return 'Exalted Jupiter supports expanded international cooperation.';
  }
  return 'Diplomatic efforts proceed with mixed results.';
}

function interpretFinancialSystem(transits: RealTimeTransitData): string {
  const saturn = transits.positions.find(p => p.planet === 'Saturn');
  if (saturn?.sign === 'Aquarius') {
    return 'Saturn in Aquarius transforms financial structures. Digital currencies gain legitimacy.';
  }
  return 'Traditional financial systems face gradual evolution.';
}

function interpretMilitaryAlliances(transits: RealTimeTransitData): string {
  const mars = transits.positions.find(p => p.planet === 'Mars');
  if (mars?.isRetrograde) {
    return 'Mars retrograde stalls military actions. Alliances reconsider commitments.';
  }
  if (mars?.dignity === 'exalted') {
    return 'Mars strong suggests military readiness and potential escalation.';
  }
  return 'Military alliances maintain status quo with underlying tensions.';
}

function interpretMediaSystems(transits: RealTimeTransitData): string {
  const mercury = transits.positions.find(p => p.planet === 'Mercury');
  if (mercury?.isRetrograde) {
    return 'Mercury retrograde disrupts information flow. Misinformation campaigns intensify.';
  }
  return 'Information systems function with normal levels of distortion.';
}

function identifyConflictZones(transits: RealTimeTransitData): ConflictReading[] {
  const conflicts: ConflictReading[] = [];
  
  const mars = transits.positions.find(p => p.planet === 'Mars');
  const saturn = transits.positions.find(p => p.planet === 'Saturn');
  
  // Mars-Saturn conjunction or opposition = major conflict
  if (mars && saturn) {
    const diff = Math.abs(mars.longitude - saturn.longitude);
    if (diff < 10 || diff > 350 || (diff > 170 && diff < 190)) {
      conflicts.push({
        type: 'Military Escalation',
        astrologicalSignatures: ['Mars-Saturn hard aspect'],
        risk: 'critical',
        description: 'Mars-Saturn alignment indicates major military actions. Old conflicts reignite.'
      });
    }
  }
  
  // Mars in specific signs
  if (mars?.sign === 'Aries' || mars?.sign === 'Scorpio') {
    conflicts.push({
      type: 'Regional Tensions',
      location: mars.sign === 'Aries' ? 'Middle East/North Africa' : 'Eastern Europe/Asia',
      astrologicalSignatures: [`Mars in ${mars.sign}`],
      risk: mars.isRetrograde ? 'high' : 'moderate',
      description: `Mars in ${mars.sign} ${mars.isRetrograde ? 'retrograde suggests simmering' : 'indicates active'} conflicts.`
    });
  }
  
  // Eclipse season = sudden developments
  if (transits.isEclipse) {
    conflicts.push({
      type: 'Unexpected Developments',
      astrologicalSignatures: ['Eclipse season'],
      risk: 'high',
      description: 'Eclipse shadows reveal hidden conflicts. Sudden escalations or resolutions possible.'
    });
  }
  
  return conflicts;
}

function analyzeMajorPowers(transits: RealTimeTransitData): MajorPowerReading[] {
  // Simplified analysis - would use actual national charts in production
  return [
    {
      nation: 'United States',
      chartFactors: ['Nodal return', 'Saturn opposition'],
      currentTransits: ['Testing of institutions', 'Generational transformation'],
      outlook: 'Deep structural transformation ongoing. Power struggles intensify.',
      leadership: 'challenged'
    },
    {
      nation: 'China',
      chartFactors: ['Saturn return cycles', 'Jupiter expansion'],
      currentTransits: ['Authority consolidation', 'Economic restructuring'],
      outlook: 'Long-term planning pays off despite global headwinds.',
      leadership: 'stable'
    },
    {
      nation: 'Russia',
      chartFactors: ['Saturn in Aquarius', 'Uranian disruption'],
      currentTransits: ['Isolationist phase', 'Military posturing'],
      outlook: 'Defensive stance hardens. Regional influence contested.',
      leadership: 'stable'
    },
    {
      nation: 'European Union',
      chartFactors: ['Jupiter-Saturn', 'Nodal shifts'],
      currentTransits: ['Integration tests', 'Economic coordination'],
      outlook: 'Unity challenged by centrifugal forces. Core holds.',
      leadership: 'challenged'
    }
  ];
}

function calculateCriticalPeriods(transits: RealTimeTransitData): CriticalPeriod[] {
  const periods: CriticalPeriod[] = [];
  const now = new Date();
  
  // Station points (when planets go retrograde or direct)
  transits.stationaryPlanets.forEach(planet => {
    periods.push({
      date: now,
      description: `${planet} stationary - direction change brings reversals`,
      planets: [planet],
      severity: 'significant'
    });
  });
  
  // Upcoming critical dates
  periods.push({
    date: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000),
    description: 'Moon enters critical nakshatra',
    planets: ['Moon'],
    severity: 'minor'
  });
  
  periods.push({
    date: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000),
    description: 'Major planetary alignment',
    planets: ['Jupiter', 'Saturn'],
    severity: 'major'
  });
  
  return periods.sort((a, b) => a.date.getTime() - b.date.getTime());
}

function generatePoliticalPredictions(
  transits: RealTimeTransitData,
  odu: TraditionalOdu
): PoliticalPrediction[] {
  const predictions: PoliticalPrediction[] = [];
  
  // Immediate (next 30 days)
  if (transits.isEclipse) {
    predictions.push({
      timeframe: 'immediate',
      prediction: 'Political surprises as eclipse shadows reveal hidden agendas.',
      astrologicalBasis: 'Eclipse season active',
      confidence: 0.8
    });
  }
  
  // Short term (3 months)
  if (transits.retrogradePlanets.includes('Mercury')) {
    predictions.push({
      timeframe: 'short',
      prediction: 'Revisions to major policy initiatives. Communication failures between leaders.',
      astrologicalBasis: 'Mercury retrograde cycle',
      confidence: 0.75
    });
  }
  
  // Medium term (1 year)
  const saturn = transits.positions.find(p => p.planet === 'Saturn');
  if (saturn?.sign === 'Aquarius') {
    predictions.push({
      timeframe: 'medium',
      prediction: 'Technological governance frameworks established. Digital rights central to political debates.',
      astrologicalBasis: 'Saturn in Aquarius through 2023',
      confidence: 0.7
    });
  }
  
  // Long term (3+ years)
  predictions.push({
    timeframe: 'long',
    prediction: `${odu.worldInterpretation.political.split('.')[0]}.`,
    astrologicalBasis: `${odu.name} pattern active`,
    confidence: 0.65
  });
  
  return predictions;
}

// Format political reading for display
export function formatPoliticalReading(reading: PoliticalReading): string {
  const lines = [
    `╔══════════════════════════════════════════════════════════╗`,
    `║           WORLD POLITICAL ORACLE                         ║`,
    `║   ${new Date().toLocaleDateString().padEnd(47)}║`,
    `╠══════════════════════════════════════════════════════════╣`,
    `║ Overall Stability: ${reading.overallStability.toUpperCase().padEnd(32)}║`,
    `╠══════════════════════════════════════════════════════════╣`,
    `║ GLOBAL TRENDS                                            ║`
  ];
  
  reading.globalTrends.slice(0, 3).forEach(trend => {
    lines.push(`║ • ${trend.theme.slice(0, 53).padEnd(53)}║`);
  });
  
  lines.push(`╠══════════════════════════════════════════════════════════╣`);
  lines.push(`║ CONFLICT ZONES                                           ║`);
  
  reading.conflictZones.slice(0, 2).forEach(conflict => {
    lines.push(`║ ! ${conflict.type.slice(0, 53).padEnd(53)}║`);
    lines.push(`║   Risk: ${conflict.risk.toUpperCase().padEnd(47)}║`);
  });
  
  lines.push(`╚══════════════════════════════════════════════════════════╝`);
  
  return lines.join('\n');
}
