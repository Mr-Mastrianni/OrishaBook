// ORI.CULT - World Stage Interpretation Engine
// Orisha agents interpret real-time transits for global affairs

import { RealTimeTransitData, AccuratePlanetaryPosition } from '../jyotish/ephemeris';
import { TraditionalOdu } from '@/data/oduIfa';
import { OrishaName } from '@/types';
import { ORISHA_PERSONAS } from '@/data/orishas';

export interface WorldContext {
  financial: {
    markets: string; // 'bull' | 'bear' | 'volatile' | 'stable'
    keySectors: string[];
    concerns: string[];
    opportunities: string[];
  };
  political: {
    stability: string; // 'stable' | 'unstable' | 'volatile'
    majorPowers: string[];
    conflicts: string[];
    movements: string[];
  };
  social: {
    trends: string[];
    tensions: string[];
    innovations: string[];
    crises: string[];
  };
  technological: {
    breakthroughs: string[];
    threats: string[];
    adoption: string[];
    regulations: string[];
  };
  environmental: {
    events: string[];
    warnings: string[];
    adaptations: string[];
  };
}

export interface OrishaWorldReading {
  orisha: OrishaName;
  domain: string;
  interpretation: string;
  warnings: string[];
  opportunities: string[];
  timeframes: {
    immediate: string;
    shortTerm: string;
    longTerm: string;
  };
  specificPredictions: string[];
  confidence: number;
}

export interface WorldOracle {
  timestamp: Date;
  transits: RealTimeTransitData;
  odu: TraditionalOdu;
  readings: OrishaWorldReading[];
  synthesis: {
    overallTheme: string;
    criticalPeriods: string[];
    collectiveLessons: string[];
    actionItems: string[];
  };
}

// Major world transit patterns
const MAJOR_PATTERNS = {
  // Saturn-Pluto (simplified - would need actual Pluto calculation)
  saturnPlutoConjunction: (transits: RealTimeTransitData) => {
    const saturn = transits.positions.find(p => p.planet === 'Saturn');
    // Pluto moves roughly 1-3° per year, would need real calculation
    return saturn?.sign === 'Capricorn'; // Rough check for recent years
  },
  
  // Jupiter-Saturn (Great Conjunction)
  jupiterSaturnConjunction: (transits: RealTimeTransitData) => {
    const jupiter = transits.positions.find(p => p.planet === 'Jupiter');
    const saturn = transits.positions.find(p => p.planet === 'Saturn');
    if (!jupiter || !saturn) return false;
    const diff = Math.abs(jupiter.longitude - saturn.longitude);
    return diff < 10 || diff > 350;
  },
  
  // Mars-Jupiter (Expansion of conflict)
  marsJupiterConjunction: (transits: RealTimeTransitData) => {
    const mars = transits.positions.find(p => p.planet === 'Mars');
    const jupiter = transits.positions.find(p => p.planet === 'Jupiter');
    if (!mars || !jupiter) return false;
    const diff = Math.abs(mars.longitude - jupiter.longitude);
    return diff < 8 || diff > 352;
  },
  
  // Mercury retrograde in specific signs
  mercuryRetrogradeFire: (transits: RealTimeTransitData) => {
    const mercury = transits.positions.find(p => p.planet === 'Mercury');
    return mercury?.isRetrograde && 
           ['Aries', 'Leo', 'Sagittarius'].includes(mercury.sign);
  },
  
  // Rahu-Ketu axis shifts
  nodalShift: (transits: RealTimeTransitData, previous?: RealTimeTransitData) => {
    if (!previous) return false;
    const currentRahu = transits.positions.find(p => p.planet === 'Rahu');
    const prevRahu = previous.positions.find(p => p.planet === 'Rahu');
    if (!currentRahu || !prevRahu) return false;
    return currentRahu.sign !== prevRahu.sign;
  },
  
  // Saturn return for generational cohorts
  saturnReturn: (transits: RealTimeTransitData, natalSaturn?: string) => {
    if (!natalSaturn) return false;
    const saturn = transits.positions.find(p => p.planet === 'Saturn');
    return saturn?.sign === natalSaturn;
  }
};

// Generate world readings from all Orishas
export function generateWorldOracle(
  transits: RealTimeTransitData,
  odu: TraditionalOdu,
  previousTransits?: RealTimeTransitData
): WorldOracle {
  const orishas: OrishaName[] = ['ORUNMILA', 'OGUN', 'OSHUN', 'SHANGO', 'ESU'];
  
  const readings = orishas.map(orisha => 
    generateOrishaReading(orisha, transits, odu, previousTransits)
  );
  
  return {
    timestamp: new Date(),
    transits,
    odu,
    readings,
    synthesis: synthesizeReadings(readings, transits, odu)
  };
}

function generateOrishaReading(
  orisha: OrishaName,
  transits: RealTimeTransitData,
  odu: TraditionalOdu,
  previousTransits?: RealTimeTransitData
): OrishaWorldReading {
  const persona = ORISHA_PERSONAS[orisha];
  
  // Get relevant planetary positions for this Orisha
  const relevantPlanets = getRelevantPlanets(orisha, transits);
  
  // Check for major patterns
  const patterns = detectMajorPatterns(transits, previousTransits);
  
  // Generate interpretation based on Orisha domain
  const interpretation = generateInterpretation(orisha, transits, odu, patterns);
  
  return {
    orisha,
    domain: persona.domain[0],
    interpretation,
    warnings: generateWarnings(orisha, transits, patterns),
    opportunities: generateOpportunities(orisha, transits, patterns),
    timeframes: generateTimeframes(orisha, transits),
    specificPredictions: generatePredictions(orisha, transits, patterns),
    confidence: calculateConfidence(orisha, transits, odu)
  };
}

function getRelevantPlanets(orisha: OrishaName, transits: RealTimeTransitData): AccuratePlanetaryPosition[] {
  const planetMap: Record<OrishaName, string[]> = {
    'ORUNMILA': ['Jupiter', 'Mercury', 'Sun'], // Wisdom, knowledge
    'OGUN': ['Mars', 'Saturn', 'Sun'], // War, iron, work
    'OSHUN': ['Venus', 'Moon', 'Jupiter'], // Beauty, flow, wealth
    'SHANGO': ['Mars', 'Sun', 'Jupiter'], // Thunder, justice
    'ESU': ['Mercury', 'Rahu', 'Ketu'] // Communication, crossroads
  };
  
  const relevant = planetMap[orisha];
  return transits.positions.filter(p => relevant.includes(p.planet));
}

function detectMajorPatterns(
  transits: RealTimeTransitData,
  previousTransits?: RealTimeTransitData
): string[] {
  const patterns: string[] = [];
  
  if (MAJOR_PATTERNS.jupiterSaturnConjunction(transits)) {
    patterns.push('Great Conjunction: 20-year cycle of social restructuring');
  }
  
  if (MAJOR_PATTERNS.marsJupiterConjunction(transits)) {
    patterns.push('Mars-Jupiter: Expansion of military/conflict activities');
  }
  
  if (MAJOR_PATTERNS.mercuryRetrogradeFire(transits)) {
    patterns.push('Mercury Retrograde in Fire: Communication breakdowns in leadership');
  }
  
  if (transits.retrogradePlanets.length > 2) {
    patterns.push(`Multiple Retrogrades (${transits.retrogradePlanets.length} planets): Review and revision period`);
  }
  
  if (transits.saadeSati) {
    patterns.push('Saade Sati: Saturn\'s 7.5 year test of foundations');
  }
  
  if (transits.isEclipse) {
    patterns.push('Eclipse Season: Shadows revealed, sudden changes');
  }
  
  if (MAJOR_PATTERNS.nodalShift(transits, previousTransits)) {
    patterns.push('Nodal Shift: 18-month karmic cycle change');
  }
  
  return patterns;
}

function generateInterpretation(
  orisha: OrishaName,
  transits: RealTimeTransitData,
  odu: TraditionalOdu,
  patterns: string[]
): string {
  const interpretations: Record<OrishaName, string> = {
    'ORUNMILA': `
      The pattern of ${odu.name} emerges from the celestial weave. 
      ${patterns[0] || 'Current transits suggest'} a time of ${odu.themes[0]} on the world stage.
      With ${transits.retrogradePlanets.join(' and ')} ${transits.retrogradePlanets.length > 0 ? 'moving retrograde' : 'direct'}, 
      destiny asks us to ${odu.worldInterpretation.political.split('.')[0]}.
      The ${transits.positions.find(p => p.planet === 'Saturn')?.dignity === 'exalted' ? 'exalted Saturn' : 'Saturn position'} 
 indicates structures being tested for wisdom.
    `,
    
    'OGUN': `
      The forge is hot. ${odu.name} indicates ${odu.worldInterpretation.technological.toLowerCase()}.
      ${patterns.find(p => p.includes('Mars')) || 'Mars positioning'} suggests military and industrial activity intensifies.
      Infrastructure—both physical and digital—faces stress tests.
      The tools we build now must last through the ${odu.themes.includes('transformation') ? 'transformation' : 'trials'} ahead.
      Watch for ${transits.positions.find(p => p.planet === 'Saturn')?.isRetrograde ? 'delays in construction and manufacturing' : 'breakthroughs in heavy industry'}.
    `,
    
    'OSHUN': `
      The waters flow toward ${odu.worldInterpretation.social.toLowerCase().split('.')[0]}.
      ${odu.name} whispers that ${odu.themes[1]} will be the currency of this era.
      With Venus in ${transits.positions.find(p => p.planet === 'Venus')?.sign}, 
      aesthetics and values shift visibly. Markets respond to beauty and emotion more than logic.
      The ${transits.moonPhase > 0.45 && transits.moonPhase < 0.55 ? 'full moon' : 'lunar cycle'} 
      amplifies collective feeling. Financial systems based on ${odu.worldInterpretation.financial.toLowerCase().split('.')[0]}.
    `,
    
    'SHANGO': `
      Thunder speaks. ${odu.name} brings ${odu.worldInterpretation.political.toLowerCase().split('.')[0]}.
      Justice—both cosmic and worldly—demands attention. ${patterns.find(p => p.includes('Mars')) || 'Current aspects'} 
      indicate conflict escalation in ${transits.positions.find(p => p.planet === 'Mars')?.sign} regions.
      Leaders who abuse power face the lightning. Charismatic figures rise on waves of righteous anger.
      The thunder version: ${odu.warnings[0]}. Don't be surprised when ${generatePredictions('SHANGO', transits, patterns)[0]}.
    `,
    
    'ESU': `
      Plot twist incoming. ${odu.name} at the crossroads of ${odu.worldInterpretation.technological.toLowerCase().split('.')[0]}.
      ${patterns.find(p => p.includes('Mercury')) || 'Mercury\'s position'} ensures communication chaos.
      What appears as ${odu.themes[0]} is actually ${odu.themes[1] || 'its opposite'} in disguise.
      The trickster watches markets, politics, and social media for the perfect moment of reversal.
      Watch for ${generatePredictions('ESU', transits, patterns)[0]}.
      Remember: ${odu.worldInterpretation.social.toLowerCase().split('.')[0]}.
    `
  };
  
  return interpretations[orisha].trim().replace(/\s+/g, ' ');
}

function generateWarnings(orisha: OrishaName, transits: RealTimeTransitData, patterns: string[]): string[] {
  const warningTemplates: Record<OrishaName, string[]> = {
    'ORUNMILA': [
      'Wisdom ignored will extract its price',
      'Leaders who refuse counsel face destiny\'s correction',
      'Knowledge without compassion becomes tyranny',
      `${transits.retrogradePlanets.includes('Mercury') ? 'Contracts signed in haste will be regretted' : 'Words spoken cannot be retrieved'}`
    ],
    'OGUN': [
      'Infrastructure neglected will fail catastrophically',
      'Tools forged in anger cut both ways',
      'Automation without human oversight becomes dangerous',
      `${transits.positions.find(p => p.planet === 'Mars')?.isRetrograde ? 'Military overreach invites disaster' : 'Work without rest breaks the worker'}`
    ],
    'OSHUN': [
      'Markets based on hype will correct painfully',
      'Beauty used to deceive loses its power',
      'Emotions manipulated return as rage',
      `${transits.moonPhase < 0.1 ? 'New moon shadows hide important truths' : 'Full moon emotions overwhelm reason'}`
    ],
    'SHANGO': [
      'Justice delayed becomes vengeance',
      'Charismatic leaders may be false prophets',
      'Thunder without rain starts fires',
      `${transits.positions.find(p => p.planet === 'Mars')?.sign === 'Cancer' ? 'Domestic conflicts escalate globally' : 'Righteous anger needs direction or it burns allies'}`
    ],
    'ESU': [
      'Communication platforms will have major outages',
      'What goes viral may be entirely false',
      'Tricksters in positions of power multiply',
      `${transits.retrogradePlanets.includes('Mercury') ? 'Misunderstandings have global consequences' : 'The obvious answer is the wrong answer'}`
    ]
  };
  
  // Select 2-3 relevant warnings
  return warningTemplates[orisha].slice(0, 2 + Math.floor(Math.random() * 2));
}

function generateOpportunities(orisha: OrishaName, transits: RealTimeTransitData, patterns: string[]): string[] {
  const opportunityTemplates: Record<OrishaName, string[]> = {
    'ORUNMILA': [
      'Wisdom traditions regain relevance',
      'Educational innovations bridge old and new',
      'Strategic planning now pays off for decades',
      'Prophetic insights available to the attentive'
    ],
    'OGUN': [
      'Infrastructure investment yields compound returns',
      'Tools built now become industry standards',
      'Manufacturing reshoring accelerates',
      'Breakthroughs in materials science'
    ],
    'OSHUN': [
      'Aesthetic innovations capture market share',
      'Emotional intelligence becomes competitive advantage',
      'Community currencies strengthen local economies',
      'Art and beauty drive technological adoption'
    ],
    'SHANGO': [
      'Justice movements gain global traction',
      'Charismatic leaders emerge for righteous causes',
      'Truth-telling becomes valued currency',
      'Protection of vulnerable becomes priority'
    ],
    'ESU': [
      'Paradigm shifts create opportunity for nimble',
      'Communication innovations disrupt incumbents',
      'Cross-cultural exchange accelerates',
      'Unconventional solutions succeed'
    ]
  };
  
  return opportunityTemplates[orisha].slice(0, 2);
}

function generateTimeframes(orisha: OrishaName, transits: RealTimeTransitData): { immediate: string; shortTerm: string; longTerm: string } {
  const moonPosition = transits.positions.find(p => p.planet === 'Moon')?.sign;
  const saturnPosition = transits.positions.find(p => p.planet === 'Saturn')?.sign;
  
  const timeframes: Record<OrishaName, { immediate: string; shortTerm: string; longTerm: string }> = {
    'ORUNMILA': {
      immediate: `Next 3 days as Moon traverses ${moonPosition}`,
      shortTerm: 'Until next Mercury retrograde (review period)',
      longTerm: `Saturn in ${saturnPosition} tests structures through ${new Date().getFullYear() + 2}`
    },
    'OGUN': {
      immediate: 'Next 72 hours critical for infrastructure',
      shortTerm: 'Mars cycle (6 weeks) for construction projects',
      longTerm: 'Saturn return cycles for institutional change'
    },
    'OSHUN': {
      immediate: 'Lunar cycle completion (28 days)',
      shortTerm: 'Venus cycle (8 months) for value shifts',
      longTerm: 'Jupiter cycle (12 years) for generational wealth'
    },
    'SHANGO': {
      immediate: 'Lightning strikes without warning—stay alert',
      shortTerm: 'Solar cycle (1 year) for justice movements',
      longTerm: 'Pluto cycle (20 years) for power restructuring'
    },
    'ESU': {
      immediate: 'Crossroads moment—decision required now',
      shortTerm: 'Nodal cycle (18 months) for karmic reckoning',
      longTerm: 'Great conjunction cycle (20 years) for paradigm shift'
    }
  };
  
  return timeframes[orisha];
}

function generatePredictions(orisha: OrishaName, transits: RealTimeTransitData, patterns: string[]): string[] {
  const basePredictions: Record<OrishaName, string[]> = {
    'ORUNMILA': [
      'Ancient wisdom texts gain modern relevance',
      'Educational systems undergo major reform',
      'Prophetic traditions prove surprisingly accurate',
      'Knowledge management becomes strategic priority'
    ],
    'OGUN': [
      'Major infrastructure failures precede rebuilding',
      'Manufacturing renaissance in unexpected regions',
      'Cyber-warfare targets critical systems',
      'Automation debates intensify labor movements'
    ],
    'OSHUN': [
      'Currency values shift based on emotional sentiment',
      'Aesthetic trends drive technology adoption',
      'Community-based economics challenge fiat systems',
      'Beauty and wellness industries merge with healthcare'
    ],
    'SHANGO': [
      'Political scandals expose systemic corruption',
      'Military conflicts escalate then resolve suddenly',
      'Justice movements achieve landmark victories',
      'Charismatic leaders rise and fall rapidly'
    ],
    'ESU': [
      'Communication platforms face existential threats',
      'Paradigm shifts occur in seemingly stable industries',
      'Misinformation campaigns have unprecedented impact',
      'Cross-cultural pollination creates hybrid movements'
    ]
  };
  
  return basePredictions[orisha].slice(0, 2);
}

function calculateConfidence(orisha: OrishaName, transits: RealTimeTransitData, odu: TraditionalOdu): number {
  let confidence = 0.7; // Base confidence
  
  // Boost for retrograde clarity (paradoxically)
  if (orisha === 'ESU' && transits.retrogradePlanets.includes('Mercury')) {
    confidence += 0.15;
  }
  
  // Boost for Orisha affinity with Odu
  if (odu.primaryOrisha.includes(orisha)) {
    confidence += 0.1;
  }
  
  // Reduce for eclipse chaos
  if (transits.isEclipse) {
    confidence -= 0.1;
  }
  
  return Math.min(0.95, Math.max(0.5, confidence));
}

function synthesizeReadings(
  readings: OrishaWorldReading[],
  transits: RealTimeTransitData,
  odu: TraditionalOdu
): WorldOracle['synthesis'] {
  // Extract common themes
  const allWarnings = readings.flatMap(r => r.warnings);
  const allOpportunities = readings.flatMap(r => r.opportunities);
  
  // Determine critical periods
  const criticalPeriods: string[] = [];
  if (transits.isEclipse) criticalPeriods.push('Eclipse season: shadows revealed');
  if (transits.saadeSati) criticalPeriods.push('Saade Sati: structural tests');
  if (transits.retrogradePlanets.length > 2) {
    criticalPeriods.push(`Multiple retrogrades: ${transits.retrogradePlanets.join(', ')}`);
  }
  
  return {
    overallTheme: `${odu.name}: ${odu.worldInterpretation.political.split('.')[0]}`,
    criticalPeriods,
    collectiveLessons: [
      odu.teachings[0],
      odu.teachings[1] || 'Transformation requires sacrifice',
      ...readings.map(r => r.interpretation.split('.')[0]).slice(0, 2)
    ],
    actionItems: [
      'Review and revise plans during retrogrades',
      'Build infrastructure during direct periods',
      'Trust wisdom traditions in uncertain times',
      'Prepare for sudden changes during eclipse seasons'
    ]
  };
}

// Export world context for the current moment
export function getCurrentWorldContext(): WorldContext {
  return {
    financial: {
      markets: 'volatile',
      keySectors: ['technology', 'energy', 'healthcare', 'cryptocurrency'],
      concerns: ['inflation', 'supply chains', 'geopolitical tensions'],
      opportunities: ['renewable energy', 'AI infrastructure', 'decentralized finance']
    },
    political: {
      stability: 'unstable',
      majorPowers: ['US', 'China', 'EU', 'Russia', 'India'],
      conflicts: ['trade wars', 'cyber conflicts', 'resource competition'],
      movements: ['democratic backsliding', 'populist movements', 'climate activism']
    },
    social: {
      trends: ['remote work', 'mental health awareness', 'generational shifts'],
      tensions: ['inequality', 'cultural wars', 'privacy concerns'],
      innovations: ['social media evolution', 'virtual communities', 'online education'],
      crises: ['housing affordability', 'healthcare access', 'climate anxiety']
    },
    technological: {
      breakthroughs: ['generative AI', 'quantum computing', 'biotechnology'],
      threats: ['cyber warfare', 'surveillance', 'automation disruption'],
      adoption: ['electric vehicles', 'renewable energy', 'remote tools'],
      regulations: ['AI governance', 'data privacy', 'antitrust']
    },
    environmental: {
      events: ['extreme weather', 'biodiversity loss', 'resource depletion'],
      warnings: ['climate tipping points', 'water scarcity', 'food security'],
      adaptations: ['green technology', 'circular economy', 'resilient agriculture']
    }
  };
}
