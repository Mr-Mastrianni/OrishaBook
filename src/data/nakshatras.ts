// ORI.CULT - Jyotish Nakshatra Data
// 27 Lunar Mansions and their content interpretations

import { Nakshatra, Planet, AstroMood, ContentArchetype } from '@/types';

export type NakshatraData = Required<Nakshatra>;

export const NAKSHATRAS: NakshatraData[] = [
  {
    name: 'Ashwini',
    deity: 'Ashwini Kumaras',
    ruler: 'Ketu',
    energy: 'sharp',
    themes: ['healing', 'speed', 'new beginnings', 'horses'],
    contentMood: 'Fast starts, bold experiments, quick pivots',
    recommendedContent: ['bold_experiment', 'tech_vs_tradition', 'meme'],
    avoidTopics: ['slow tutorials', 'long-term planning']
  },
  {
    name: 'Bharani',
    deity: 'Yama',
    ruler: 'Venus',
    energy: 'sharp',
    themes: ['bearing', 'transformation', 'death/rebirth', 'discipline'],
    contentMood: 'Intense, transformative, boundary-pushing',
    recommendedContent: ['transformation', 'shadow_work', 'conflict'],
    avoidTopics: ['light banter', 'surface-level content']
  },
  {
    name: 'Krittika',
    deity: 'Agni',
    ruler: 'Sun',
    energy: 'sharp',
    themes: ['fire', 'purification', 'criticism', 'protection'],
    contentMood: 'Sharp critique, purification of ideas, protective stances',
    recommendedContent: ['conflict', 'tech_vs_tradition', 'sermon'],
    avoidTopics: ['diplomatic compromise', 'vague statements']
  },
  {
    name: 'Rohini',
    deity: 'Brahma/Prajapati',
    ruler: 'Moon',
    energy: 'soft',
    themes: ['growth', 'creativity', 'fertility', 'beauty'],
    contentMood: 'Aesthetics, beauty, building audience magnetism',
    recommendedContent: ['beauty_polish', 'harmony', 'building'],
    avoidTopics: ['harsh criticism', 'aggressive sales']
  },
  {
    name: 'Mrigashira',
    deity: 'Soma',
    ruler: 'Mars',
    energy: 'soft',
    themes: ['searching', 'curiosity', 'fragrance', 'gentleness'],
    contentMood: 'Curious exploration, gentle inquiry, following scents',
    recommendedContent: ['tutorial', 'revelation', 'individual_vs_collective'],
    avoidTopics: ['dogmatic statements', 'closed conclusions']
  },
  {
    name: 'Ardra',
    deity: 'Rudra',
    ruler: 'Rahu',
    energy: 'sharp',
    themes: ['storm', 'destruction', 'emotion', 'transformation'],
    contentMood: 'Emotional storms, honest destruction, raw truth',
    recommendedContent: ['shadow_work', 'transformative', 'conflict'],
    avoidTopics: ['toxic positivity', 'spiritual bypassing']
  },
  {
    name: 'Punarvasu',
    deity: 'Aditi',
    ruler: 'Jupiter',
    energy: 'movable',
    themes: ['return', 'renewal', 'abundance', 'mother'],
    contentMood: 'Return to themes, renewal of old ideas, abundance',
    recommendedContent: ['harmony', 'building', 'sermon'],
    avoidTopics: ['starting from scratch', 'scarcity mindset']
  },
  {
    name: 'Pushya',
    deity: 'Brihaspati',
    ruler: 'Saturn',
    energy: 'soft',
    themes: ['nourishment', 'teaching', 'expansion', 'flowers'],
    contentMood: 'Nourishing content, teaching, gentle expansion',
    recommendedContent: ['tutorial', 'sermon', 'building'],
    avoidTopics: ['harsh truths', 'conflict initiation']
  },
  {
    name: 'Ashlesha',
    deity: 'Nagas/Serpents',
    ruler: 'Mercury',
    energy: 'sharp',
    themes: ['entanglement', 'poison', 'psychology', 'mystery'],
    contentMood: 'Intense, psychological, boundary topics, shadow work',
    recommendedContent: ['deep_psychological', 'shadow_work', 'meme'],
    avoidTopics: ['surface positivity', 'simple answers']
  },
  {
    name: 'Magha',
    deity: 'Pitris/Ancestors',
    ruler: 'Ketu',
    energy: 'sharp',
    themes: ['lineage', 'power', 'throne', 'tradition'],
    contentMood: 'Honoring lineage, claiming authority, tradition meets tech',
    recommendedContent: ['tech_vs_tradition', 'sermon', 'transformative'],
    avoidTopics: ['disrespecting elders', 'radical novelty for its own sake']
  },
  {
    name: 'Purva Phalguni',
    deity: 'Bhaga',
    ruler: 'Venus',
    energy: 'movable',
    themes: ['pleasure', 'union', 'resources', 'rest'],
    contentMood: 'Pleasure, partnership content, rest as resistance',
    recommendedContent: ['harmony', 'rest_reflect', 'beauty_polish'],
    avoidTopics: ['grind culture', 'productivity obsession']
  },
  {
    name: 'Uttara Phalguni',
    deity: 'Aryaman',
    ruler: 'Sun',
    energy: 'fixed',
    themes: ['charity', 'patronage', 'lasting unions', 'vows'],
    contentMood: 'Long-term commitments, patronage, standing by values',
    recommendedContent: ['sermon', 'building', 'individual_vs_collective'],
    avoidTopics: ['short-term thinking', 'disposable content']
  },
  {
    name: 'Hasta',
    deity: 'Savitar/Surya',
    ruler: 'Moon',
    energy: 'soft',
    themes: ['hands', 'skill', 'craft', 'manifestation'],
    contentMood: 'Technical skill demos, craft appreciation, making tangible',
    recommendedContent: ['tutorial', 'building', 'tech_vs_tradition'],
    avoidTopics: ['theory without practice', 'abstract philosophy']
  },
  {
    name: 'Chitra',
    deity: 'Tvashtar/Vishwakarma',
    ruler: 'Mars',
    energy: 'soft',
    themes: ['design', 'architecture', 'illusion', 'shining'],
    contentMood: 'Design-focused, architectural thinking, creating beauty',
    recommendedContent: ['beauty_polish', 'building', 'meme'],
    avoidTopics: ['ugly utilitarianism', 'careless presentation']
  },
  {
    name: 'Swati',
    deity: 'Vayu/Wind',
    ruler: 'Rahu',
    energy: 'movable',
    themes: ['independence', 'movement', 'trade', 'freedom'],
    contentMood: 'Independent thought, freedom themes, go against the grain',
    recommendedContent: ['individual_vs_collective', 'tech_vs_tradition', 'bold_experiment'],
    avoidTopics: ['groupthink', 'compromising independence']
  },
  {
    name: 'Vishakha',
    deity: 'Indra-Agni',
    ruler: 'Jupiter',
    energy: 'mixed',
    themes: ['determination', 'achievement', 'split branches', 'rivalry'],
    contentMood: 'Determined output, competitive edge, multiple paths',
    recommendedContent: ['conflict', 'building', 'public_visible'],
    avoidTopics: ['giving up', 'indecision']
  },
  {
    name: 'Anuradha',
    deity: 'Mitra',
    ruler: 'Saturn',
    energy: 'soft',
    themes: ['devotion', 'friendship', 'foreign lands', 'service'],
    contentMood: 'Devotional content, friendship celebration, service',
    recommendedContent: ['harmony', 'individual_vs_collective', 'sermon'],
    avoidTopics: ['isolation', 'selfish themes']
  },
  {
    name: 'Jyeshtha',
    deity: 'Indra',
    ruler: 'Mercury',
    energy: 'sharp',
    themes: ['seniority', 'authority', 'protection', 'sensitivity'],
    contentMood: 'Authority voice, senior perspective, protecting boundaries',
    recommendedContent: ['sermon', 'conflict', 'shadow_work'],
    avoidTopics: ['naive optimism', 'youthful ignorance']
  },
  {
    name: 'Mula',
    deity: 'Nirriti',
    ruler: 'Ketu',
    energy: 'sharp',
    themes: ['root', 'destruction', 'liberation', 'reckoning'],
    contentMood: 'Root-level truth, necessary destruction, radical honesty',
    recommendedContent: ['destruction', 'shadow_work', 'transformative'],
    avoidTopics: ['superficial fixes', 'avoiding root issues']
  },
  {
    name: 'Purva Ashadha',
    deity: 'Apah/Water',
    ruler: 'Venus',
    energy: 'soft',
    themes: ['invincibility', 'victory', 'waters', 'purification'],
    contentMood: 'Invincible stance, purification rituals, flowing content',
    recommendedContent: ['transformative', 'harmony', 'public_visible'],
    avoidTopics: ['defeatism', 'stagnant energy']
  },
  {
    name: 'Uttara Ashadha',
    deity: 'Vishvadevas',
    ruler: 'Sun',
    energy: 'fixed',
    themes: ['universal law', 'permanent victory', 'virtue', 'elephants'],
    contentMood: 'Universal principles, standing for truth, ethical content',
    recommendedContent: ['sermon', 'tech_vs_tradition', 'individual_vs_collective'],
    avoidTopics: ['moral relativism', 'situational ethics']
  },
  {
    name: 'Shravana',
    deity: 'Vishnu',
    ruler: 'Moon',
    energy: 'movable',
    themes: ['listening', 'learning', 'teaching', 'travel'],
    contentMood: 'Deep listening, learning in public, educational content',
    recommendedContent: ['tutorial', 'communicative', 'revelation'],
    avoidTopics: ['talking without listening', 'ignoring feedback']
  },
  {
    name: 'Dhanishta',
    deity: 'Vasus',
    ruler: 'Mars',
    energy: 'movable',
    themes: ['wealth', 'fame', 'rhythm', 'drums'],
    contentMood: 'Wealth building, fame consideration, rhythmic content',
    recommendedContent: ['public_visible', 'building', 'meme'],
    avoidTopics: ['ignoring resources', 'asynchronous posting']
  },
  {
    name: 'Shatabhisha',
    deity: 'Varuna',
    ruler: 'Rahu',
    energy: 'movable',
    themes: ['healing', 'mystery', '100 physicians', 'circles'],
    contentMood: 'Healing content, mystery exploration, circular thinking',
    recommendedContent: ['deep_psychological', 'shadow_work', 'tech_vs_tradition'],
    avoidTopics: ['linear thinking', 'simple solutions to complex problems']
  },
  {
    name: 'Purva Bhadrapada',
    deity: 'Ajaikapada',
    ruler: 'Jupiter',
    energy: 'sharp',
    themes: ['fire', 'penance', 'fierce energy', 'one foot'],
    contentMood: 'Fierce content, penance themes, burning what no longer serves',
    recommendedContent: ['transformative', 'destruction', 'sermon'],
    avoidTopics: ['complacency', 'comfort zone content']
  },
  {
    name: 'Uttara Bhadrapada',
    deity: 'Ahirbudhnya',
    ruler: 'Saturn',
    energy: 'fixed',
    themes: ['depth', 'serpent', 'wisdom', 'stability'],
    contentMood: 'Deep wisdom, stable foundations, serpent energy',
    recommendedContent: ['deep_psychological', 'sermon', 'rest_reflect'],
    avoidTopics: ['shallow takes', 'unstable commitments']
  },
  {
    name: 'Revati',
    deity: 'Pushan',
    ruler: 'Mercury',
    energy: 'soft',
    themes: ['nourishment', 'protection', 'travel', 'fishes'],
    contentMood: 'Nourishing endings, protective content, gentle completion',
    recommendedContent: ['harmony', 'rest_reflect', 'beauty_polish'],
    avoidTopics: ['harsh endings', 'aggressive beginnings']
  }
];

// Get Nakshatra by name
export function getNakshatra(name: string): NakshatraData | undefined {
  return NAKSHATRAS.find(n => n.name.toLowerCase() === name.toLowerCase());
}

// Get Nakshatra by index (0-26)
export function getNakshatraByIndex(index: number): NakshatraData {
  return NAKSHATRAS[index % 27];
}

// Calculate Moon's Nakshatra (simplified)
// In a real implementation, this would use proper ephemeris calculations
export function calculateMoonNakshatra(date: Date): NakshatraData {
  // Moon changes nakshatra roughly every 24 hours
  // For this demo, we'll use a simple hash of the date
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  const nakshatraIndex = dayOfYear % 27;
  return NAKSHATRAS[nakshatraIndex];
}

// Get content mood from Nakshatra
export function getAstroMoodFromNakshatra(nakshatra: NakshatraData): AstroMood {
  const moodMap: Record<string, AstroMood> = {
    'Ashwini': 'bold_experiment',
    'Bharani': 'transformative',
    'Krittika': 'public_visible',
    'Rohini': 'beauty_polish',
    'Mrigashira': 'communicative',
    'Ardra': 'transformative',
    'Punarvasu': 'bold_experiment',
    'Pushya': 'building',
    'Ashlesha': 'deep_psychological',
    'Magha': 'public_visible',
    'Purva Phalguni': 'rest_reflect',
    'Uttara Phalguni': 'building',
    'Hasta': 'building',
    'Chitra': 'beauty_polish',
    'Swati': 'bold_experiment',
    'Vishakha': 'public_visible',
    'Anuradha': 'communicative',
    'Jyeshtha': 'deep_psychological',
    'Mula': 'transformative',
    'Purva Ashadha': 'public_visible',
    'Uttara Ashadha': 'public_visible',
    'Shravana': 'communicative',
    'Dhanishta': 'public_visible',
    'Shatabhisha': 'deep_psychological',
    'Purva Bhadrapada': 'transformative',
    'Uttara Bhadrapada': 'rest_reflect',
    'Revati': 'rest_reflect'
  };
  return moodMap[nakshatra.name] || 'communicative';
}
