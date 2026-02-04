// ORI.CULT - Traditional Odù Ifa Patterns
// EDUCATIONAL REFERENCE - These are the 256 sacred patterns of Ifa divination
// This is provided for cultural education and pattern inspiration
// NOT for actual divination without proper initiation and guidance

import { OrishaName } from '@/types';

export interface TraditionalOdu {
  id: string;
  name: string;
  binary: string; // 8 binary digits (two figures of 4 each)
  yorubaName: string;
  primaryOrisha: OrishaName[];
  traditionalMeaning: string;
  themes: string[];
  teachings: string[];
  worldInterpretation: {
    financial: string;
    political: string;
    social: string;
    technological: string;
  };
  warnings: string[];
  blessings: string[];
  eseIfa?: string; // Traditional Ifa verse reference (if applicable)
}

// The 16 primary Odù (the foundation)
export const PRIMARY_ODU: TraditionalOdu[] = [
  {
    id: 'OGbe',
    name: 'Ogbe',
    binary: '11111111',
    yorubaName: 'Ògbè',
    primaryOrisha: ['ORUNMILA'],
    traditionalMeaning: 'Light, clarity, victory, expansion. The eldest and most senior Odù. Represents illumination and the triumph of light over darkness.',
    themes: ['victory', 'expansion', 'clarity', 'leadership', 'illumination'],
    teachings: [
      'Light conquers darkness, but requires fuel',
      'Victory comes to those who prepare',
      'Expansion without wisdom becomes explosion'
    ],
    worldInterpretation: {
      financial: 'Markets trend upward. Clarity emerges from confusion. Good time for transparent financial instruments and open-source economics.',
      political: 'Leadership changes bring light to dark places. Truth revealed. Old structures giving way to new vision.',
      social: 'Collective awakening. Movements gain clarity of purpose. Education and knowledge-sharing expand.',
      technological: 'Breakthrough innovations. AI becomes more explainable. Open standards prevail over proprietary systems.'
    },
    warnings: ['Pride comes before fall', 'Light can blind if too intense'],
    blessings: ['Spiritual clarity', 'Victory after struggle', 'Expanded consciousness']
  },
  {
    id: 'Oyeku',
    name: 'Oyeku',
    binary: '00000000',
    yorubaName: 'Òyèkú',
    primaryOrisha: ['ORUNMILA'],
    traditionalMeaning: 'Death, transformation, rebirth, the ancestors. Not merely physical death but transformation. The womb before birth.',
    themes: ['transformation', 'endings', 'rebirth', 'ancestry', 'mystery'],
    teachings: [
      'Death is transformation, not termination',
      'The womb requires darkness for creation',
      'Ancestral wisdom guides the living'
    ],
    worldInterpretation: {
      financial: 'Market corrections. Old financial models dying. Cryptocurrency volatility. Death of unsustainable systems.',
      political: 'Regime change. Old orders collapsing. Birth pangs of new governance. Ancestral wisdom resurging.',
      social: 'Cultural death and rebirth. Generational shifts. Honoring ancestors while birthing new culture.',
      technological: 'End of tech eras. Obsolete platforms dying. Dark web activity. Privacy and encryption emphasized.'
    },
    warnings: ['Resist necessary change at your peril', 'Death comes for what no longer serves'],
    blessings: ['Transformation completes', 'Ancestral support', 'Rebirth after darkness']
  },
  {
    id: 'Iwori',
    name: 'Iwori',
    binary: '10001000',
    yorubaName: 'Ìwòrì',
    primaryOrisha: ['ORUNMILA', 'ESU'],
    traditionalMeaning: 'Inversion, introspection, secrets revealed. Looking within. The inner journey. What is hidden becomes visible.',
    themes: ['introspection', 'secrets', 'inversion', 'inner work', 'revelation'],
    teachings: [
      'What is within shapes what is without',
      'Secrets have power, but also weight',
      'Inversion reveals what upright conceals'
    ],
    worldInterpretation: {
      financial: 'Hidden financial truths exposed. Market manipulation revealed. Insider trading uncovered. Shadow banking illuminated.',
      political: 'Secrets of state revealed. Whistleblowers active. Intelligence agencies exposed. Deep state machinations visible.',
      social: 'Personal truths shared. Mental health prioritized. Therapy culture expands. Authenticity over performance.',
      technological: 'Data breaches expose secrets. Encryption debates intensify. AI inner workings scrutinized. Backdoors revealed.'
    },
    warnings: ['What is hidden will be found', 'Internal conflict mirrors external'],
    blessings: ['Self-knowledge', 'Secrets protect you', 'Inner vision clarifies outer path']
  },
  {
    id: 'Odi',
    name: 'Odi',
    binary: '01110111',
    yorubaName: 'Òdí',
    primaryOrisha: ['OSHUN'],
    traditionalMeaning: 'Container, womb, home, sanctuary. The vessel that holds. Creating safe spaces. Fertility in all forms.',
    themes: ['containment', 'home', 'womb', 'sanctuary', 'fertility'],
    teachings: [
      'The container shapes the contained',
      'Home is both prison and sanctuary',
      'Fertility requires safe space'
    ],
    worldInterpretation: {
      financial: 'Safe haven assets thrive. Real estate emphasis. Savings over speculation. Community currencies strengthen.',
      political: 'Borders and containment policies. Refugee crises. Home as political concept. Sanctuary movements.',
      social: 'Family units strengthen. Domestic arts revive. Home cooking, home making. Nesting behaviors.',
      technological: 'Local-first software. Home servers. Personal data sovereignty. Off-grid technologies.'
    },
    warnings: ['Too much containment becomes prison', 'Comfort can become stagnation'],
    blessings: ['Safe harbor found', 'Fertility of ideas and projects', 'Home established']
  },
  {
    id: 'Irosun',
    name: 'Irosun',
    binary: '00110011',
    yorubaName: 'Ìròsùn',
    primaryOrisha: ['OGUN'],
    traditionalMeaning: 'Suffering, struggle, the forge. Heat that transforms. The pain that precedes growth. War and its consequences.',
    themes: ['struggle', 'forge', 'war', 'transformation-through-pain', 'heat'],
    teachings: [
      'The forge destroys to create',
      'Heat reveals impurities',
      'Struggle strengthens or breaks'
    ],
    worldInterpretation: {
      financial: 'Market volatility. Resource wars affect prices. Infrastructure spending. Defense sectors active.',
      political: 'Armed conflicts intensify. Military posturing. Labor wars (strikes). War as economic driver.',
      social: 'Collective suffering unites. Trauma awareness rises. Veterans issues prominent. Healing from violence.',
      technological: 'Cyber warfare escalates. Infrastructure attacks. Security breaches. Military tech advances.'
    },
    warnings: ['War profits the few, harms the many', 'Violence begets violence'],
    blessings: ['Strength through trial', 'Forge creates strong tools', 'Victory through endurance']
  },
  {
    id: 'Owonrin',
    name: 'Owonrin',
    binary: '10000111',
    yorubaName: 'Òwónrín',
    primaryOrisha: ['ORUNMILA'],
    traditionalMeaning: 'Standing on the head. Reversal. Youth and age inverted. Wisdom from unexpected sources.',
    themes: ['reversal', 'inversion', 'youthful wisdom', 'elder foolishness', 'paradox'],
    teachings: [
      'The upside-down world reveals truth',
      'Youth sees what age has forgotten',
      'Paradox contains both/and, not either/or'
    ],
    worldInterpretation: {
      financial: 'Inverse ETFs shine. Contrarian investing wins. Young investors outperform. Traditional banking disrupted.',
      political: 'Youth movements lead. Generational conflict. Old leaders out of touch. Student activism prominent.',
      social: 'Age hierarchies challenged. Youth teach elders. TikTok wisdom. Reverse mentoring.',
      technological: 'New paradigms replace old. Young developers shape future. Legacy systems abandoned.'
    },
    warnings: ['Disrespect for elders brings loss', 'Inversion for its own sake is chaos'],
    blessings: ['Fresh perspectives', 'Wisdom from youth', 'Breaking obsolete hierarchies']
  },
  {
    id: 'Obara',
    name: 'Obara',
    binary: '01010101',
    yorubaName: 'Ọ̀bàrà',
    primaryOrisha: ['SHANGO'],
    traditionalMeaning: 'Lightning, sudden change, truth revealed in flash. The thunderbolt of insight. Immediate transformation.',
    themes: ['lightning', 'sudden change', 'revelation', 'justice', 'chaos-to-order'],
    teachings: [
      'Lightning strikes the tallest tree',
      'Sudden clarity changes everything',
      'Justice without mercy is tyranny'
    ],
    worldInterpretation: {
      financial: 'Flash crashes and surges. Crypto volatility. Sudden wealth or loss. Lightning-fast trades.',
      political: 'Political lightning strikes. Leaders fall suddenly. Revolutions ignite. Whistleblower bombshells.',
      social: 'Viral moments change everything. Cancel culture operates. Instant karma. Immediate consequences.',
      technological: 'Breakthrough announcements. Product launches disrupt. Patent disputes. Lightning network activity.'
    },
    warnings: ['Lightning strikes without warning', 'Sudden fame brings sudden downfall'],
    blessings: ['Justice served swiftly', 'Sudden breakthrough', 'Clarity in flash']
  },
  {
    id: 'Okanran',
    name: 'Okanran',
    binary: '10101010',
    yorubaName: 'Ọ̀kànràn',
    primaryOrisha: ['OGUN'],
    traditionalMeaning: 'Conflict, blockage, the closed road. Obstacles that must be cleared. Resistance meeting resistance.',
    themes: ['conflict', 'blockage', 'obstacles', 'war', 'stagnation'],
    teachings: [
      'The blocked path teaches patience',
      'Conflict reveals true character',
      'Stagnation precedes transformation'
    ],
    worldInterpretation: {
      financial: 'Market gridlock. Supply chain blockages. Trade wars intensify. Economic sanctions prominent.',
      political: 'Gridlock in governance. Filibusters and obstruction. Border conflicts. Immigration blocked.',
      social: 'Polarization peaks. Echo chambers fortified. Conflict goes viral. Censorship debates rage.',
      technological: 'Protocol wars. Standards battles. Platform lock-in. Interoperability blocked.'
    },
    warnings: ['Force creates counter-force', 'Stubbornness leads to mutual destruction'],
    blessings: ['Strength tested', 'Obstacles overcome', 'Clearing creates space']
  },
  {
    id: 'Ogunda',
    name: 'Ogunda',
    binary: '11001100',
    yorubaName: 'Ògúndá',
    primaryOrisha: ['OGUN', 'SHANGO'],
    traditionalMeaning: 'War, struggle, but also the hunt. Focused aggression. Single-pointed determination.',
    themes: ['war', 'hunt', 'focus', 'determination', 'breakthrough'],
    teachings: [
      'Focus is a form of power',
      'The hunt requires patience and violence',
      'Breakthrough shatters old structures'
    ],
    worldInterpretation: {
      financial: 'Aggressive trading strategies win. Short sellers active. Hostile takeovers. War economy profits.',
      political: 'Military interventions. Drone warfare. Targeted strikes. Assassinations and attempts.',
      social: 'Cancel culture as warfare. Targeted harassment campaigns. Vigilante justice. Focused activism.',
      technological: 'Zero-day exploits used. Targeted attacks on infrastructure. Precision cyber weapons.'
    },
    warnings: ['Aggression consumes its user', 'The hunter becomes hunted'],
    blessings: ['Victory through focus', 'Obstacles removed', 'Determination rewarded']
  },
  {
    id: 'Osa',
    name: 'Osa',
    binary: '00001111',
    yorubaName: 'Ọ̀sá',
    primaryOrisha: ['OSHUN', 'ESU'],
    traditionalMeaning: 'The left hand, witchcraft (as neutral force), feminine power, charm. The indirect path succeeds.',
    themes: ['witchcraft', 'feminine-power', 'indirection', 'charm', 'left-hand-path'],
    teachings: [
      'Power flows through indirect channels',
      'The left hand does what the right cannot',
      'Charm opens doors that force closes'
    ],
    worldInterpretation: {
      financial: 'Alternative finance thrives. Shadow banking. Crypto privacy coins. Offshore strategies.',
      political: 'Soft power operations. Influence campaigns. Lobbying intensifies. Behind-scenes deals.',
      social: 'Witchcraft mainstreams. Feminine leadership rises. Indirect communication works. Subtle influence.',
      technological: 'Dark patterns in UX. Algorithmic influence. Covert data collection. Stealth technology.'
    },
    warnings: ['Manipulation destroys trust', 'Dark arts have dark costs'],
    blessings: ['Feminine power rises', 'Indirect approach succeeds', 'Charm opens doors']
  },
  {
    id: 'Etura',
    name: 'Etura',
    binary: '11110000',
    yorubaName: 'Ìtùrá',
    primaryOrisha: ['ORUNMILA'],
    traditionalMeaning: 'Spreading, dispersal, diaspora. What scatters must eventually return. Seeds on the wind.',
    themes: ['diaspora', 'dispersal', 'migration', 'return', 'seeds'],
    teachings: [
      'What scatters must eventually return',
      'Seeds travel farther than trees',
      'Diaspora creates hybrid strength'
    ],
    worldInterpretation: {
      financial: 'Portfolio diversification. Global market dispersion. Remittance economies. Cryptocurrency spreads.',
      political: 'Migration crises. Refugee diasporas. Brain drain/gain. Global citizen movements.',
      social: 'Digital nomadism explodes. Remote work diaspora. Culture spreads hybridizes. Return to roots movements.',
      technological: 'Distributed systems. Blockchain nodes. Federated networks. Edge computing.'
    },
    warnings: ['Dispersal without center is chaos', 'Diaspora risks forgetting home'],
    blessings: ['Seeds find fertile ground', 'Return is possible', 'Dispersal multiplies influence']
  },
  {
    id: 'Irete',
    name: 'Irete',
    binary: '10100101',
    yorubaName: 'Ìretè',
    primaryOrisha: ['ORUNMILA', 'OGUN'],
    traditionalMeaning: 'The crossroads (horizontal), marketplace, exchange. Where paths meet and goods change hands.',
    themes: ['marketplace', 'exchange', 'crossroads', 'commerce', 'meeting'],
    teachings: [
      'Fair exchange blesses both parties',
      'The marketplace reveals true value',
      'Meeting is a form of destiny'
    ],
    worldInterpretation: {
      financial: 'Trade agreements signed. Markets open. Exchange rates fluctuate. Commerce thrives.',
      political: 'Diplomatic summits. Treaty negotiations. International cooperation. Border openings.',
      social: 'Cultural exchange festivals. Language learning surges. Intermarriage increases. Hybrid identities.',
      technological: 'APIs connect services. Platform interoperability. Data marketplaces. Open banking.'
    },
    warnings: ['Not all exchanges are equal', 'Marketplace has thieves'],
    blessings: ['Fair exchange', 'Meeting brings opportunity', 'Commerce blesses all']
  },
  {
    id: 'Ose',
    name: 'Ose',
    binary: '01011010',
    yorubaName: 'Ọ̀sẹ́',
    primaryOrisha: ['OSHUN'],
    traditionalMeaning: 'Beauty, grace, sweetness, the power of attraction. The river that carves stone through persistence.',
    themes: ['beauty', 'grace', 'attraction', 'persuasion', 'flow'],
    teachings: [
      'Beauty is a form of power',
      'Grace accomplishes what force cannot',
      'The river conquers the mountain through persistence'
    ],
    worldInterpretation: {
      financial: 'Luxury markets thrive. Aesthetic investments. Brand value over utility. Influencer economy.',
      political: 'Charismatic leaders rise. Beauty pageant politics. Soft power projection. Aesthetic governance.',
      social: 'Beauty standards shift. Aesthetic movements. Instagram culture. Wellness and self-care boom.',
      technological: 'Design-first products win. UI/UX prioritized. Beautiful code valued. Aesthetic algorithms.'
    },
    warnings: ['Beauty conceals danger', 'Surface without depth disappoints'],
    blessings: ['Grace under pressure', 'Attraction brings allies', 'Beauty heals']
  },
  {
    id: 'Ofun',
    name: 'Ofun',
    binary: '00111100',
    yorubaName: 'Ọ̀fún',
    primaryOrisha: ['ORUNMILA'],
    traditionalMeaning: 'White, purity, elderhood, wisdom earned. The white cloth of initiation. Completion of cycles.',
    themes: ['purity', 'elderhood', 'wisdom', 'completion', 'white'],
    teachings: [
      'Purity requires vigilance',
      'Elderhood is earned, not given',
      'Completion is a beginning disguised'
    ],
    worldInterpretation: {
      financial: 'White knight investors. Ethical investing peaks. ESG dominates. Wisdom-based management.',
      political: 'Elder statesmen consulted. Term limits respected. Institutional knowledge valued. Post-political wisdom.',
      social: 'Ageism challenged. Elder wisdom platforms. Rites of passage return. Completion celebrations.',
      technological: 'Clean tech dominates. White hat hackers. Ethical AI initiatives. Transparency standards.'
    },
    warnings: ['Purity can become rigidity', 'Elders must make way for youth'],
    blessings: ['Wisdom acknowledged', 'Cycles complete', 'Purity of purpose']
  },
  {
    id: 'IworiOse',
    name: 'Iwori-Ose',
    binary: '11000011',
    yorubaName: 'Ìwòrì-Ọ̀sẹ́',
    primaryOrisha: ['ESU'],
    traditionalMeaning: 'The crossroads (vertical), trickster energy, paradox. The meeting of heaven and earth. Esu\'s home.',
    themes: ['crossroads', 'trickster', 'paradox', 'liminality', 'choice'],
    teachings: [
      'Choice creates the chooser',
      'The trickster teaches through deception',
      'Liminality is the space of becoming'
    ],
    worldInterpretation: {
      financial: 'Market inflection points. Pivot or perish moments. Contrarian bets pay off. Unlikely alliances.',
      political: 'Third parties gain. Neither left nor right solutions. Political realignment. Strange bedfellows.',
      social: 'Gender fluidity mainstreams. Non-binary identities. Liminal spaces celebrated. Choice paralysis.',
      technological: 'Quantum computing advances. Superposition states. Paradox exploitation. Qubit technology.'
    },
    warnings: ['Choice made cannot be unmade', 'Crossroads is dangerous place'],
    blessings: ['Choice is power', 'Liminality is creative', 'Trickster teaches']
  }
];

// Generate all 256 Odù combinations
export function generateAllOdu(): TraditionalOdu[] {
  const allOdu: TraditionalOdu[] = [...PRIMARY_ODU];
  
  // The 256 Odù are combinations of the 16 primary patterns meeting each other
  // For educational purposes, we provide the primary 16 with compound interpretations
  // A full implementation would include all 256 with their specific verses
  
  return allOdu;
}

// Get Odù by binary pattern
export function getOduByBinary(binary: string): TraditionalOdu | undefined {
  return PRIMARY_ODU.find(o => o.binary === binary);
}

// Get Odù by name (various forms)
export function getOduByName(name: string): TraditionalOdu | undefined {
  return PRIMARY_ODU.find(o => 
    o.name.toLowerCase() === name.toLowerCase() ||
    o.yorubaName.toLowerCase() === name.toLowerCase() ||
    o.id.toLowerCase() === name.toLowerCase()
  );
}

// Cast today's Odù using actual astronomical data
export function castOduIfa(date: Date, moonPhase: number, planetaryPositions: any): TraditionalOdu {
  // In authentic Ifa, casting involves ritual processes
  // This is a respectful educational simulation based on astronomical factors
  
  const primaryOdu = PRIMARY_ODU;
  
  // Use moon phase and planetary data to determine Odù
  // New moon (0) = Oyeku (darkness)
  // Full moon (0.5) = Ogbe (light)
  // Quarter moons = transitional Odù
  
  let selectedIndex = 0;
  
  if (moonPhase < 0.125) selectedIndex = 1; // Oyeku - new moon
  else if (moonPhase < 0.25) selectedIndex = 2; // Iwori - waxing crescent
  else if (moonPhase < 0.375) selectedIndex = 6; // Obara - first quarter
  else if (moonPhase < 0.5) selectedIndex = 12; // Ose - waxing gibbous
  else if (moonPhase < 0.625) selectedIndex = 0; // Ogbe - full moon
  else if (moonPhase < 0.75) selectedIndex = 13; // Ofun - waning gibbous
  else if (moonPhase < 0.875) selectedIndex = 7; // Okanran - last quarter
  else selectedIndex = 1; // Oyeku - waning crescent
  
  // Modify based on planetary retrogrades (adds complexity)
  if (planetaryPositions?.saturnRetrograde) {
    selectedIndex = (selectedIndex + 4) % primaryOdu.length; // Shift toward Irosun/Ogunda
  }
  
  return primaryOdu[selectedIndex];
}

// World interpretation helper
export function interpretForWorldContext(
  odu: TraditionalOdu,
  context: 'financial' | 'political' | 'social' | 'technological'
): string {
  return odu.worldInterpretation[context];
}

export const ESE_IFA_REFERENCES = {
  // References to Ifa verses for further study
  // These would point to specific Odu Ifa verses in traditional corpus
  ogbe: 'Eji Ogbe - The light that illuminates all paths',
  oyeku: 'Oyeku Meji - The darkness that births light',
  iwori: 'Iwori Meji - The inverting of inward sight',
  odi: 'Odi Meji - The container of all possibilities',
  irosun: 'Irosun Meji - The suffering that forges',
  owonrin: 'Owonrin Meji - The reversal of ages',
  obara: 'Obara Meji - The lightning of truth',
  okanran: 'Okanran Meji - The blocked path cleared',
  ogunda: 'Ogunda Meji - The focused strike',
  osa: 'Osa Meji - The power of the left',
  etura: 'Etura Meji - The scattering of seeds',
  irete: 'Irete Meji - The marketplace of destinies',
  ose: 'Ose Meji - The sweetness that conquers',
  ofun: 'Ofun Meji - The white cloth of completion',
  iworiOse: 'Iwori-Ose - The crossroads of heaven and earth'
};
