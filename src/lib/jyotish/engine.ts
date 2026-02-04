// ORI.CULT - Jyotish Timing Engine
// Calculates daily astrological context for content timing

import { 
  JyotishData, 
  Nakshatra, 
  Rashi, 
  Transit, 
  Planet, 
  AstroMood,
  ContentArchetype 
} from '@/types';
import { 
  calculateMoonNakshatra, 
  getAstroMoodFromNakshatra,
  NakshatraData 
} from '@/data/nakshatras';

// Rashis in order
const RASHIS: Rashi[] = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

// Planets
const PLANETS: Planet[] = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Rahu', 'Ketu'];

// Calculate which house Moon is in based on natal chart
// For demo purposes, we'll use a simplified calculation
export function calculateMoonHouse(date: Date, natalLagna?: Rashi): number {
  // Moon moves through a house roughly every 2.5 days
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  const moonPosition = dayOfYear % 12;
  
  if (!natalLagna) {
    // Without natal chart, just return calculated position + 1
    return moonPosition + 1;
  }
  
  // Calculate house based on lagna
  const lagnaIndex = RASHIS.indexOf(natalLagna);
  const house = ((moonPosition - lagnaIndex + 12) % 12) + 1;
  return house;
}

// Get Moon sign
export function calculateMoonSign(date: Date): Rashi {
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  const moonPosition = dayOfYear % 12;
  return RASHIS[moonPosition];
}

// Generate major transits for the day
// This is a simplified version - real implementation would use Swiss Ephemeris
export function calculateTransits(date: Date): Transit[] {
  const transits: Transit[] = [];
  
  // Sun transit (roughly monthly)
  const month = date.getMonth();
  const sunSign = RASHIS[month % 12];
  
  // Check for significant transits
  // Mercury retrograde periods (simplified)
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  
  // Add some "major" transits based on date hash
  if (dayOfYear % 88 === 0) {
    transits.push({
      planet: 'Mercury',
      fromSign: calculateMoonSign(new Date(date.getTime() - 86400000)),
      toSign: calculateMoonSign(date),
      exactDate: date,
      aspectingNatal: false
    });
  }
  
  // Saturn transits (slower, more significant)
  if (dayOfYear % 29 === 0) {
    transits.push({
      planet: 'Saturn',
      fromSign: 'Aquarius',
      toSign: 'Pisces',
      aspectingNatal: dayOfYear % 7 === 0
    });
  }
  
  // Jupiter transits (yearly-ish)
  if (dayOfYear % 365 === 0) {
    transits.push({
      planet: 'Jupiter',
      fromSign: 'Taurus',
      toSign: 'Gemini',
      aspectingNatal: true
    });
  }
  
  return transits;
}

// Get content recommendations based on Moon house
export function getHouseRecommendations(house: number): ContentArchetype[] {
  const houseThemes: Record<number, ContentArchetype[]> = {
    1: ['individual_vs_collective', 'bold_experiment'], // Self, identity
    2: ['building', 'harmony'], // Resources, values
    3: ['communicative', 'meme'], // Communication, siblings
    4: ['rest_reflect', 'behind_scenes'], // Home, roots
    5: ['creative', 'sermon'], // Creativity, children
    6: ['behind_scenes', 'building'], // Work, health, service
    7: ['individual_vs_collective', 'partnerships'], // Relationships
    8: ['shadow_work', 'deep_psychological', 'transformative'], // Transformation, secrets
    9: ['sermon', 'tech_vs_tradition'], // Higher learning, philosophy
    10: ['public_visible', 'building'], // Career, public image
    11: ['community', 'individual_vs_collective'], // Friends, gains
    12: ['rest_reflect', 'shadow_work', 'deep_psychological'] // Retreat, unconscious
  };
  
  return houseThemes[house] || ['communicative'];
}

// Main function to get daily Jyotish context
export function getDailyJyotishContext(date: Date = new Date(), natalChart?: any): JyotishData {
  const nakshatra = calculateMoonNakshatra(date);
  const moonSign = calculateMoonSign(date);
  const moonHouse = calculateMoonHouse(date, natalChart?.lagna);
  const transits = calculateTransits(date);
  const mood = getAstroMoodFromNakshatra(nakshatra);
  
  // Combine nakshatra and house recommendations
  const houseRecs = getHouseRecommendations(moonHouse);
  const nakshatraRecs = nakshatra.recommendedContent;
  
  // Merge and deduplicate
  const recommendations = Array.from(new Set([...nakshatraRecs, ...houseRecs]));
  
  return {
    date,
    moonNakshatra: nakshatra,
    moonSign,
    moonHouse,
    majorTransits: transits,
    mood,
    contentRecommendations: recommendations
  };
}

// Get a ritual suggestion based on astro context
export function getAstroRitual(jyotish: JyotishData): string {
  const { moonNakshatra, moonHouse, mood } = jyotish;
  
  const rituals: Record<AstroMood, string[]> = {
    'bold_experiment': [
      `With Moon in ${moonNakshatra.name}, try something you've never done before.`,
      `Today favors new starts. Begin that project you've been procrastinating on.`,
      `Experiment with a new format or platform.`
    ],
    'beauty_polish': [
      `Moon in ${moonNakshatra.name} asks you to refine something existing. Polish it.`,
      `Invest time in aesthetics today. Make the beautiful also functional.`,
      `Review your brand visuals. What needs refreshing?`
    ],
    'deep_psychological': [
      `With ${moonNakshatra.name} energy, explore the shadow. Write what you usually avoid.`,
      `Today favors depth over breadth. Go deep on one topic.`,
      `Write about your fears or failures. Witness them.`
    ],
    'communicative': [
      `Moon in the ${moonHouse}th house emphasizes dialogue. Engage with your community today.`,
      `Reply to DMs. Have conversations. Listen more than you speak.`,
      `Cross-pollinate ideas between different groups you're part of.`
    ],
    'behind_scenes': [
      `Moon in the ${moonHouse}th house suggests invisible work. Build systems, not content.`,
      `Organize your files. Update your templates. The world won't see this, but it matters.`,
      `Take a break from posting. Do maintenance work.`
    ],
    'public_visible': [
      `Moon in the ${moonHouse}th house calls for visibility. Post your boldest idea.`,
      `Today favors the spotlight. Share something significant.`,
      `Make a declaration. Claim your space.`
    ],
    'rest_reflect': [
      `With ${moonNakshatra.name} energy, rest is productive. Do less.`,
      `Reflect on the past month. What patterns do you see?`,
      `Journal privately. Not everything needs to be content.`
    ],
    'transformative': [
      `Moon in ${moonNakshatra.name} signals change. Let something die to make space.`,
      `Burn (delete) old content that no longer represents you.`,
      `Transform one habit today. Small shifts compound.`
    ],
    'building': [
      `Moon in ${moonNakshatra.name} supports construction. Build something that lasts.`,
      `Focus on infrastructure today. What systems need strengthening?`,
      `Invest in foundational work. The tower needs a deep base.`
    ]
  };
  
  const options = rituals[mood] || rituals['communicative'];
  return options[Math.floor(Math.random() * options.length)];
}

// Format Jyotish data for display
export function formatJyotishForDisplay(jyotish: JyotishData): string {
  const { moonNakshatra, moonSign, moonHouse, mood } = jyotish;
  
  return `🌙 Moon: ${moonSign} in ${moonNakshatra.name} (${moonHouse}th house)
⚡ Energy: ${moonNakshatra.energy} | Ruled by ${moonNakshatra.ruler}
🎭 Mood: ${mood.replace('_', ' ')}
🏛️ Deity: ${moonNakshatra.deity}`;
}
