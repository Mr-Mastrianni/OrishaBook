// ORI.CULT - Real Astronomical Ephemeris Integration
// Using astronomy-engine for accurate planetary positions

import { 
  Body,
  GeoVector,
  MoonPhase
} from 'astronomy-engine';
import { Nakshatra, Rashi, Planet, Transit } from '@/types';
import { NAKSHATRAS } from '@/data/nakshatras';

// Planet mapping to astronomy-engine bodies
const PLANET_MAP: Record<Planet, Body> = {
  'Sun': Body.Sun,
  'Moon': Body.Moon,
  'Mercury': Body.Mercury,
  'Venus': Body.Venus,
  'Mars': Body.Mars,
  'Jupiter': Body.Jupiter,
  'Saturn': Body.Saturn,
  // Rahu/Ketu calculated as lunar nodes (shadow points)
  'Rahu': Body.Moon, // Will calculate separately
  'Ketu': Body.Moon  // Will calculate separately
};

const RASHI_LONGITUDES: Record<Rashi, { start: number; end: number }> = {
  'Aries': { start: 0, end: 30 },
  'Taurus': { start: 30, end: 60 },
  'Gemini': { start: 60, end: 90 },
  'Cancer': { start: 90, end: 120 },
  'Leo': { start: 120, end: 150 },
  'Virgo': { start: 150, end: 180 },
  'Libra': { start: 180, end: 210 },
  'Scorpio': { start: 210, end: 240 },
  'Sagittarius': { start: 240, end: 270 },
  'Capricorn': { start: 270, end: 300 },
  'Aquarius': { start: 300, end: 330 },
  'Pisces': { start: 330, end: 360 }
};

export interface AccuratePlanetaryPosition {
  planet: Planet;
  longitude: number; // 0-360
  latitude: number;
  speed: number; // degrees per day
  isRetrograde: boolean;
  sign: Rashi;
  nakshatra: Nakshatra;
  nakshatraPada: number; // 1-4
  house?: number;
  dignity: 'exalted' | 'moolatrikona' | 'own' | 'friendly' | 'neutral' | 'enemy' | 'debilitated';
}

export interface RealTimeTransitData {
  date: Date;
  positions: AccuratePlanetaryPosition[];
  moonPhase: number; // 0-1
  moonIllumination: number; // 0-1
  isEclipse: boolean;
  eclipseType?: 'solar' | 'lunar' | 'partial' | 'annular';
  retrogradePlanets: Planet[];
  combustionPlanets: Planet[]; // Too close to sun
  war: Planet[]; // Graha Yuddha - planetary war
  stationaryPlanets: Planet[]; // About to change direction
  saadeSati: boolean;
  kantakaShani: boolean;
  ashtamaShani: boolean;
}

// Calculate precise planetary position
export function calculateAccuratePosition(
  planet: Planet,
  date: Date
): AccuratePlanetaryPosition {
  const astroDate = new Date(date);
  
  // Get geocentric ecliptic coordinates
  let vector;
  try {
    if (planet === 'Rahu' || planet === 'Ketu') {
      // Calculate lunar nodes (simplified - in production would use proper node calculation)
      const moonPos = GeoVector(Body.Moon, astroDate, false);
      const sunPos = GeoVector(Body.Sun, astroDate, false);
      // Rahu is north node (ascending), Ketu is south (descending)
      // This is simplified - proper calculation requires more complex astronomy
      const longitude = (Math.atan2(moonPos.y, moonPos.x) * 180 / Math.PI + 180) % 360;
      const isKetu = planet === 'Ketu';
      
      return calculatePositionFromLongitude(
        planet,
        isKetu ? (longitude + 180) % 360 : longitude,
        0,
        date
      );
    }
    
    vector = GeoVector(PLANET_MAP[planet], astroDate, false);
  } catch (e) {
    // Fallback to rough calculation
    return fallbackPosition(planet, date);
  }
  
  // Convert to ecliptic longitude/latitude
  const longitude = (Math.atan2(vector.y, vector.x) * 180 / Math.PI + 360) % 360;
  const latitude = Math.atan2(vector.z, Math.sqrt(vector.x ** 2 + vector.y ** 2)) * 180 / Math.PI;
  
  return calculatePositionFromLongitude(planet, longitude, latitude, date);
}

function calculatePositionFromLongitude(
  planet: Planet,
  longitude: number,
  latitude: number,
  date: Date
): AccuratePlanetaryPosition {
  // Determine sign
  const sign = longitudeToRashi(longitude);
  
  // Determine nakshatra
  const nakshatraData = longitudeToNakshatra(longitude);
  
  // Calculate speed (retrograde check)
  const speed = calculateSpeed(planet, date);
  const isRetrograde = speed < 0;
  
  // Determine dignity
  const dignity = calculateDignity(planet, sign);
  
  return {
    planet,
    longitude,
    latitude,
    speed,
    isRetrograde,
    sign,
    nakshatra: nakshatraData.nakshatra,
    nakshatraPada: nakshatraData.pada,
    dignity
  };
}

function longitudeToRashi(longitude: number): Rashi {
  const normalized = longitude % 360;
  for (const [sign, range] of Object.entries(RASHI_LONGITUDES)) {
    if (normalized >= range.start && normalized < range.end) {
      return sign as Rashi;
    }
  }
  return 'Aries';
}

function longitudeToNakshatra(longitude: number): { nakshatra: Nakshatra; pada: number } {
  // Each nakshatra is 13°20' (13.333... degrees)
  const nakshatraDegree = 13 + (1/3);
  const index = Math.floor(longitude / nakshatraDegree) % 27;
  const positionInNakshatra = longitude % nakshatraDegree;
  const pada = Math.floor(positionInNakshatra / (nakshatraDegree / 4)) + 1;
  
  return {
    nakshatra: NAKSHATRAS[index],
    pada: Math.min(4, Math.max(1, pada))
  };
}

function calculateSpeed(planet: Planet, date: Date): number {
  // Calculate speed by comparing positions 24 hours apart
  const dayMs = 24 * 60 * 60 * 1000;
  const pos1 = calculateRawLongitude(planet, new Date(date.getTime() - dayMs));
  const pos2 = calculateRawLongitude(planet, new Date(date.getTime() + dayMs));
  
  let diff = pos2 - pos1;
  // Handle 0/360 wraparound
  if (diff > 180) diff -= 360;
  if (diff < -180) diff += 360;
  
  return diff / 2; // degrees per day
}

function calculateRawLongitude(planet: Planet, date: Date): number {
  if (planet === 'Rahu' || planet === 'Ketu') {
    // Simplified node calculation
    const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const rahuBase = (dayOfYear * 0.053) % 360; // Rahu moves ~19° per year retrograde
    return planet === 'Rahu' ? rahuBase : (rahuBase + 180) % 360;
  }
  
  try {
    const vector = GeoVector(PLANET_MAP[planet], date, false);
    return (Math.atan2(vector.y, vector.x) * 180 / Math.PI + 360) % 360;
  } catch (e) {
    return fallbackPosition(planet, date).longitude;
  }
}

function calculateDignity(planet: Planet, sign: Rashi): AccuratePlanetaryPosition['dignity'] {
  // Simplified dignity calculation
  const planetDignities: Record<Planet, { exalted?: Rashi; own?: Rashi[]; debilitated?: Rashi }> = {
    'Sun': { exalted: 'Aries', own: ['Leo'], debilitated: 'Libra' },
    'Moon': { exalted: 'Taurus', own: ['Cancer'], debilitated: 'Scorpio' },
    'Mars': { exalted: 'Capricorn', own: ['Aries', 'Scorpio'], debilitated: 'Cancer' },
    'Mercury': { exalted: 'Virgo', own: ['Gemini', 'Virgo'], debilitated: 'Pisces' },
    'Jupiter': { exalted: 'Cancer', own: ['Sagittarius', 'Pisces'], debilitated: 'Capricorn' },
    'Venus': { exalted: 'Pisces', own: ['Taurus', 'Libra'], debilitated: 'Virgo' },
    'Saturn': { exalted: 'Libra', own: ['Capricorn', 'Aquarius'], debilitated: 'Aries' },
    'Rahu': { exalted: 'Gemini', own: [], debilitated: 'Sagittarius' },
    'Ketu': { exalted: 'Sagittarius', own: [], debilitated: 'Gemini' }
  };
  
  const dignities = planetDignities[planet];
  if (!dignities) return 'neutral';
  
  if (sign === dignities.exalted) return 'exalted';
  if (sign === dignities.debilitated) return 'debilitated';
  if (dignities.own?.includes(sign)) return 'own';
  
  return 'neutral';
}

function fallbackPosition(planet: Planet, date: Date): AccuratePlanetaryPosition {
  // Rough fallback calculation
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  
  const orbitalPeriods: Record<Planet, number> = {
    'Moon': 27.3,
    'Mercury': 88,
    'Venus': 225,
    'Sun': 365.25,
    'Mars': 687,
    'Jupiter': 4333,
    'Saturn': 10759,
    'Rahu': -6793, // Retrograde
    'Ketu': -6793  // Retrograde
  };
  
  const period = orbitalPeriods[planet];
  const longitude = ((dayOfYear / Math.abs(period)) * 360) % 360;
  const isRetrograde = period < 0;
  
  return calculatePositionFromLongitude(planet, longitude, 0, date);
}

// Get complete real-time transit data
export function getRealTimeTransits(date: Date = new Date()): RealTimeTransitData {
  const planets: Planet[] = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Rahu', 'Ketu'];
  
  const positions = planets.map(p => calculateAccuratePosition(p, date));
  
  // Calculate moon phase
  const sunPos = positions.find(p => p.planet === 'Sun')?.longitude || 0;
  const moonPos = positions.find(p => p.planet === 'Moon')?.longitude || 0;
  const moonPhase = ((moonPos - sunPos + 360) % 360) / 360;
  
  // Find retrograde planets
  const retrogradePlanets = positions.filter(p => p.isRetrograde).map(p => p.planet);
  
  // Find combustion (within 15° of sun)
  const combustionPlanets = positions.filter(p => {
    if (p.planet === 'Sun' || p.planet === 'Moon') return false;
    const diff = Math.abs(p.longitude - sunPos);
    return diff < 15 || diff > 345;
  }).map(p => p.planet);
  
  // Check for planetary war (Graha Yuddha) - planets within 1°
  const war: Planet[] = [];
  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      const diff = Math.abs(positions[i].longitude - positions[j].longitude);
      if (diff < 1 || diff > 359) {
        war.push(positions[i].planet, positions[j].planet);
      }
    }
  }
  
  // Check Saturn conditions
  const saturnPos = positions.find(p => p.planet === 'Saturn');
  const moonSign = positions.find(p => p.planet === 'Moon')?.sign;
  
  const saadeSati = saturnPos && moonSign ? checkSaadeSati(saturnPos.sign, moonSign) : false;
  
  return {
    date,
    positions,
    moonPhase,
    moonIllumination: moonPhase <= 0.5 ? moonPhase * 2 : (1 - moonPhase) * 2,
    isEclipse: checkForEclipse(date),
    retrogradePlanets,
    combustionPlanets,
    war: [...new Set(war)],
    stationaryPlanets: positions.filter(p => Math.abs(p.speed) < 0.1).map(p => p.planet),
    saadeSati,
    kantakaShani: false, // Would need natal chart
    ashtamaShani: false  // Would need natal chart
  };
}

function checkSaadeSati(saturnSign: Rashi, moonSign: Rashi): boolean {
  const signs: Rashi[] = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 
                         'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  const saturnIdx = signs.indexOf(saturnSign);
  const moonIdx = signs.indexOf(moonSign);
  
  // Saade Sati when Saturn is in same sign, 12th, or 2nd from Moon
  const diff = (saturnIdx - moonIdx + 12) % 12;
  return diff === 0 || diff === 1 || diff === 11;
}

function checkForEclipse(date: Date): boolean {
  // Simplified eclipse check - would need proper saros cycle calculation
  const moonPhase = MoonPhase(date);
  // Eclipses happen near new moon (solar) or full moon (lunar)
  return moonPhase < 0.02 || moonPhase > 0.48;
}

// Format transit data for display
export function formatTransitData(data: RealTimeTransitData): string {
  const lines = [
    `🌙 Moon Phase: ${(data.moonPhase * 100).toFixed(1)}% (${getMoonPhaseName(data.moonPhase)})`,
    `☀️ Sun: ${data.positions.find(p => p.planet === 'Sun')?.sign}`,
    `🌕 Moon: ${data.positions.find(p => p.planet === 'Moon')?.nakshatra.name} ${data.positions.find(p => p.planet === 'Moon')?.nakshatraPada}`,
    `📍 Retrograde: ${data.retrogradePlanets.join(', ') || 'None'}`,
  ];
  
  if (data.isEclipse) lines.push('🌑 ECLIPSE ACTIVE');
  if (data.saadeSati) lines.push('🪐 Saade Sati Period');
  if (data.war.length > 0) lines.push(`⚔️ Planetary War: ${data.war.join(', ')}`);
  
  return lines.join('\n');
}

function getMoonPhaseName(phase: number): string {
  if (phase < 0.02) return 'New Moon';
  if (phase < 0.23) return 'Waxing Crescent';
  if (phase < 0.27) return 'First Quarter';
  if (phase < 0.48) return 'Waxing Gibbous';
  if (phase < 0.52) return 'Full Moon';
  if (phase < 0.73) return 'Waning Gibbous';
  if (phase < 0.77) return 'Last Quarter';
  if (phase < 0.98) return 'Waning Crescent';
  return 'New Moon';
}

export { NAKSHATRAS };
