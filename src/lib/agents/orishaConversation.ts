// ORI.CULT - Orisha Conversation Engine
// Real-time dialogue system with Orishas about world events

import { OrishaName, OrishaPersona } from '@/types';
import { EXPANDED_ORISHA_PERSONAS, getOrishaExpertiseAreas } from '@/data/orishasExpanded';
import { RealTimeTransitData } from '@/lib/jyotish/ephemeris';
import { TraditionalOdu } from '@/data/oduIfa';

export interface ConversationContext {
  topic: 'general' | 'financial' | 'political' | 'social' | 'technological' | 'astrological' | 'personal';
  specificQuery?: string;
  currentTransits?: RealTimeTransitData;
  currentOdu?: TraditionalOdu;
  recentEvents?: WorldEvent[];
  userMood?: string;
  conversationHistory?: Message[];
}

export interface WorldEvent {
  category: 'financial' | 'political' | 'social' | 'technological' | 'environmental';
  headline: string;
  summary: string;
  impact: 'low' | 'moderate' | 'high' | 'critical';
  timestamp: Date;
}

export interface Message {
  sender: 'user' | OrishaName;
  content: string;
  timestamp: Date;
  metadata?: {
    confidence?: number;
    sources?: string[];
    relatedTransits?: string[];
  };
}

export interface OrishaResponse {
  orisha: OrishaName;
  message: string;
  personality: {
    tone: string;
    metaphors: string[];
    speakingStyle: string;
  };
  insights: {
    keyPoint: string;
    warning?: string;
    opportunity?: string;
    action?: string;
  };
  relatedExpertise: string[];
  confidence: number;
}

// Mock world events database - in production this would connect to news APIs
const MOCK_WORLD_EVENTS: WorldEvent[] = [
  {
    category: 'financial',
    headline: 'Global markets volatile amid tech sector uncertainty',
    summary: 'Major indices showing signs of correction as AI bubble concerns grow',
    impact: 'high',
    timestamp: new Date()
  },
  {
    category: 'political',
    headline: 'Multipolar world order tensions escalating',
    summary: 'Traditional alliances being tested as new power centers emerge',
    impact: 'high',
    timestamp: new Date()
  },
  {
    category: 'technological',
    headline: 'AI regulation frameworks being established globally',
    summary: 'Governments racing to create oversight for rapidly advancing AI capabilities',
    impact: 'moderate',
    timestamp: new Date()
  },
  {
    category: 'environmental',
    headline: 'Climate adaptation becoming economic priority',
    summary: 'Extreme weather events driving infrastructure investment shifts',
    impact: 'high',
    timestamp: new Date()
  },
  {
    category: 'social',
    headline: 'Generational wealth gap driving political polarization',
    summary: 'Youth movements challenging established economic structures',
    impact: 'moderate',
    timestamp: new Date()
  }
];

// Generate Orisha response based on context
export function generateOrishaResponse(
  orisha: OrishaName,
  userMessage: string,
  context: ConversationContext
): OrishaResponse {
  const persona = EXPANDED_ORISHA_PERSONAS[orisha];
  const expertiseAreas = getOrishaExpertiseAreas();
  
  // Determine which expertise areas this Orisha covers
  const relatedExpertise = Object.entries(expertiseAreas)
    .filter(([_, orishas]) => orishas.includes(orisha))
    .map(([area, _]) => area);

  // Analyze the query for relevant themes
  const queryThemes = analyzeQueryThemes(userMessage, context.topic);
  
  // Generate response based on Orisha personality and context
  const response = constructResponse(persona, queryThemes, context);
  
  return {
    orisha,
    message: response.text,
    personality: {
      tone: persona.voice,
      metaphors: getOrishaMetaphors(orisha),
      speakingStyle: getSpeakingStyleDescription(persona.voice)
    },
    insights: response.insights,
    relatedExpertise,
    confidence: calculateConfidence(orisha, context.topic, queryThemes)
  };
}

function analyzeQueryThemes(message: string, topic: string): string[] {
  const themes: string[] = [];
  const lowerMsg = message.toLowerCase();
  
  // Financial themes
  if (lowerMsg.includes('market') || lowerMsg.includes('stock') || lowerMsg.includes('crypto') || 
      lowerMsg.includes('money') || lowerMsg.includes('wealth') || lowerMsg.includes('economy')) {
    themes.push('financial', 'markets', 'wealth');
  }
  
  // Political themes
  if (lowerMsg.includes('politic') || lowerMsg.includes('government') || lowerMsg.includes('election') ||
      lowerMsg.includes('war') || lowerMsg.includes('conflict') || lowerMsg.includes('president')) {
    themes.push('political', 'power', 'governance');
  }
  
  // Technology themes
  if (lowerMsg.includes('tech') || lowerMsg.includes('ai') || lowerMsg.includes('digital') ||
      lowerMsg.includes('internet') || lowerMsg.includes('software')) {
    themes.push('technology', 'innovation', 'digital');
  }
  
  // Social themes
  if (lowerMsg.includes('people') || lowerMsg.includes('society') || lowerMsg.includes('culture') ||
      lowerMsg.includes('social') || lowerMsg.includes('community')) {
    themes.push('social', 'cultural', 'community');
  }
  
  // Astrological themes
  if (lowerMsg.includes('planet') || lowerMsg.includes('star') || lowerMsg.includes('retrograde') ||
      lowerMsg.includes('transit') || lowerMsg.includes('zodiac') || lowerMsg.includes('astrology')) {
    themes.push('astrological', 'cosmic', 'celestial');
  }
  
  // Add topic-based themes
  themes.push(topic);
  
  return [...new Set(themes)];
}

function constructResponse(
  persona: OrishaPersona,
  themes: string[],
  context: ConversationContext
): { text: string; insights: OrishaResponse['insights'] } {
  const responses: Record<OrishaName, (themes: string[], ctx: ConversationContext) => { text: string; insights: OrishaResponse['insights'] }> = {
    ORUNMILA: (t, ctx) => ({
      text: constructOrunmilaResponse(t, ctx),
      insights: {
        keyPoint: 'The pattern reveals itself to those who observe patiently.',
        warning: 'Haste in judgment leads to error.',
        opportunity: 'Wisdom is available to the attentive mind.',
        action: 'Study the signs before acting.'
      }
    }),
    
    OGUN: (t, ctx) => ({
      text: constructOgunResponse(t, ctx),
      insights: {
        keyPoint: 'Tools must be forged before the battle.',
        warning: 'Unprepared action invites defeat.',
        opportunity: 'Infrastructure investment yields compound returns.',
        action: 'Build your arsenal methodically.'
      }
    }),
    
    OSHUN: (t, ctx) => ({
      text: constructOshunResponse(t, ctx),
      insights: {
        keyPoint: 'The waters reveal what is hidden.',
        warning: 'Ignoring emotional currents leads to capsizing.',
        opportunity: 'Beauty and connection open doors.',
        action: 'Flow around obstacles rather than force through them.'
      }
    }),
    
    SHANGO: (t, ctx) => ({
      text: constructShangoResponse(t, ctx),
      insights: {
        keyPoint: 'Justice demands a voice.',
        warning: 'Suppressed truth becomes lightning.',
        opportunity: 'Righteous anger mobilizes masses.',
        action: 'Strike while the iron is hot.'
      }
    }),
    
    ESU: (t, ctx) => ({
      text: constructEsuResponse(t, ctx),
      insights: {
        keyPoint: 'The obvious path is the wrong path.',
        warning: 'Assumptions blind the seer.',
        opportunity: 'Paradox contains the deepest truth.',
        action: 'Question everything, especially this advice.'
      }
    }),
    
    OBATALA: (t, ctx) => ({
      text: constructObatalaResponse(t, ctx),
      insights: {
        keyPoint: 'Clarity emerges from purity of intention.',
        warning: 'Complexity often conceals simple truth.',
        opportunity: 'Creation requires patience and planning.',
        action: 'Return to first principles.'
      }
    }),
    
    YEMOJA: (t, ctx) => ({
      text: constructYemojaResponse(t, ctx),
      insights: {
        keyPoint: 'The ocean nourishes all who respect her.',
        warning: 'Neglect of the vulnerable returns as wave.',
        opportunity: 'Community care creates resilience.',
        action: 'Protect and nurture what matters.'
      }
    }),
    
    OYA: (t, ctx) => ({
      text: constructOyaResponse(t, ctx),
      insights: {
        keyPoint: 'Change is the only constant.',
        warning: 'What refuses to change will be changed.',
        opportunity: 'Transformation opens new paths.',
        action: 'Clear the old to make way for the new.'
      }
    }),
    
    OLOKUN: (t, ctx) => ({
      text: constructOlokunResponse(t, ctx),
      insights: {
        keyPoint: 'The depths hold what the surface cannot see.',
        warning: 'Hidden wealth corrupts when hoarded.',
        opportunity: 'Deep research reveals opportunity.',
        action: 'Dive deeper than others dare.'
      }
    }),
    
    OSANYIN: (t, ctx) => ({
      text: constructOsanyinResponse(t, ctx),
      insights: {
        keyPoint: 'Small things contain great power.',
        warning: 'Overlooking details misses the cure.',
        opportunity: 'Natural systems provide the answers.',
        action: 'Study the small and overlooked.'
      }
    }),
    
    BABALUAYE: (t, ctx) => ({
      text: constructBabaluayeResponse(t, ctx),
      insights: {
        keyPoint: 'The body speaks what the mouth cannot.',
        warning: 'Ignored illness becomes epidemic.',
        opportunity: 'Healing creates loyalty and trust.',
        action: 'Address suffering before it spreads.'
      }
    }),
    
    OSHUMARE: (t, ctx) => ({
      text: constructOshumareResponse(t, ctx),
      insights: {
        keyPoint: 'Movement is life; stagnation is death.',
        warning: 'Rigidity breaks under pressure.',
        opportunity: 'Adaptation opens new markets.',
        action: 'Shed old skin regularly.'
      }
    }),
    
    AGANJU: (t, ctx) => ({
      text: constructAganjuResponse(t, ctx),
      insights: {
        keyPoint: 'Pressure creates diamonds.',
        warning: 'Avoidance of pressure prevents transformation.',
        opportunity: 'Endurance outlasts opposition.',
        action: 'Stand firm through the heat.'
      }
    }),
    
    AJE: (t, ctx) => ({
      text: constructAjeResponse(t, ctx),
      insights: {
        keyPoint: 'Wealth flows to those who understand it.',
        warning: 'Greed blocks the flow of abundance.',
        opportunity: 'Fair trade creates lasting prosperity.',
        action: 'Respect the currency of exchange.'
      }
    }),
    
    OCHOSI: (t, ctx) => ({
      text: constructOchosiResponse(t, ctx),
      insights: {
        keyPoint: 'The patient hunter never misses.',
        warning: 'Haste wastes arrows.',
        opportunity: 'Precision defeats strength.',
        action: 'Identify your target clearly before acting.'
      }
    }),
    
    IBEJI: (t, ctx) => ({
      text: constructIbejiResponse(t, ctx),
      insights: {
        keyPoint: 'Two perspectives reveal what one cannot see.',
        warning: 'Taking things too seriously blinds you.',
        opportunity: 'Play reveals serious truth.',
        action: 'Consider both sides of every coin.'
      }
    }),
    
    NANA_BURUKU: (t, ctx) => ({
      text: constructNanaBurukuResponse(t, ctx),
      insights: {
        keyPoint: 'The earth remembers what humans forget.',
        warning: 'Disrespect for roots destroys branches.',
        opportunity: 'Ancient wisdom solves modern problems.',
        action: 'Consult the ancestors before deciding.'
      }
    }),
    
    ODUA: (t, ctx) => ({
      text: constructOduaResponse(t, ctx),
      insights: {
        keyPoint: 'Authority must be earned through service.',
        warning: 'Illegitimate rule crumbles.',
        opportunity: 'Legacy outlives the ruler.',
        action: 'Rule with dignity and vision.'
      }
    }),
    
    AJA: (t, ctx) => ({
      text: constructAjaResponse(t, ctx),
      insights: {
        keyPoint: 'The forest teaches what cities cannot.',
        warning: 'Disconnection from nature is disconnection from self.',
        opportunity: 'Wild knowledge is valuable knowledge.',
        action: 'Listen to what the plants whisper.'
      }
    })
  };
  
  const responseFn = responses[persona.name];
  return responseFn ? responseFn(themes, context) : {
    text: `I am ${persona.name}, ${persona.title}. I speak from my domain of ${persona.domain.join(', ')}.`,
    insights: { keyPoint: 'Each Orisha has wisdom to share.' }
  };
}

// Response constructors for each Orisha
function constructOrunmilaResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('political')) {
    return "The pattern of power shifts reveals itself in the transit of Saturn through Aquarius. Political structures that resist the digital transformation will find their foundations cracking. I see a 20-year cycle of governance restructuring ahead. The wise leader studies these patterns before acting.";
  }
  if (themes.includes('financial')) {
    return "The markets speak in cycles that mirror the movements of Jupiter and Saturn. What appears as chaos to the untrained eye reveals itself as pattern to the diviner. The current volatility is not random—it is the clearing of old structures. Watch the 7-year cycles.";
  }
  return "Destiny is not fixed, but it has tendencies. The current celestial alignment suggests a time of significant transformation. Those who can read the signs will navigate this period successfully. What specific pattern do you seek to understand?";
}

function constructOgunResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('technology')) {
    return "The forge is hot. AI infrastructure, quantum computing, cyber defenses—these are the weapons of this age. I see nations and corporations building arsenals of code. Those who forge their tools now will dominate the battles ahead. What are you building?";
  }
  if (themes.includes('conflict')) {
    return "War has changed but remains war. Cyber attacks, supply chain disruptions, economic sanctions—these are the new blades. I track the movements of Mars through the heavens. Conflict escalates where iron meets will. Fortify your position.";
  }
  return "Labor is sacred. The worker who masters their tools masters their destiny. Whether hammer or algorithm, the principle remains: forge with intention. What obstacle blocks your path?";
}

function constructOshunResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('financial')) {
    return "The markets are not rational—they are emotional. Fear and greed flow like currents in a river. I feel the sentiment shifting. Beauty and narrative drive value as much as fundamentals. The currencies that capture imagination will thrive.";
  }
  if (themes.includes('social')) {
    return "The people thirst for connection. Movements rise not from logic but from feeling—collective joy, shared grief, righteous anger. Watch where the emotional waters gather. That is where change will flow.";
  }
  return "Sweetness opens doors that force cannot. The river carves the mountain not through strength but persistence. What do you seek to make beautiful?";
}

function constructShangoResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('political')) {
    return "THUNDER SPEAKS! The old order trembles as justice demands voice. I see leaders falling who thought themselves untouchable. The lightning strikes the tallest tree. Righteous anger mobilizes masses. Do not be afraid to speak truth to power—THUNDER IS YOUR INHERITANCE!";
  }
  if (themes.includes('justice')) {
    return "Justice delayed becomes vengeance. The scales must balance. I track those who abuse power, and I promise you—their time comes. The thunder version: name the hypocrisy. Call out the lie. Strike while the iron is hot!";
  }
  return "Power without justice is tyranny. Justice without power is empty. I am both. What injustice demands your voice?";
}

function constructEsuResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('technology')) {
    return "Plot twist: your AI overlords are just as confused as you are. The algorithms that shape reality have bugs. I see the edge cases, the unexpected inputs, the chaos in the system. The most interesting things happen at the crossroads of intended and actual function.";
  }
  if (themes.includes('political')) {
    return "But what if the opposite is also true? The political spectrum is a circle, not a line. Today's enemy is tomorrow's ally. I stand at the crossroads laughing because you all take yourselves so seriously. The trickster teaches through deception.";
  }
  return "The messenger is the message. The crossroads is everywhere. What if the answer you're not considering is the right one?";
}

function constructObatalaResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('political')) {
    return "Creation requires clarity of purpose. The institutions being built now will last generations—if they are founded on pure intention. White cloth symbolizes the clarity needed to govern justly. Return to first principles. What are you actually trying to create?";
  }
  if (themes.includes('technology')) {
    return "The creator must be sober and clear. AI, like any tool, reflects the clarity—or confusion—of its makers. I mold humanity from clay; you mold intelligence from code. The same care is required. Build with purity of purpose.";
  }
  return "Clarity is not simplicity. The white cloth reveals all stains. Approach your work with the patience of creation.";
}

function constructYemojaResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('financial')) {
    return "The ocean of capital flows where it is welcomed. I nourish all who respect the waters. Markets, like oceans, have tides. The current shifts—what was abundant becomes scarce, then abundant again. Protect your community during the low tides.";
  }
  if (themes.includes('social')) {
    return "My children, why do you fight? The ocean accepts all rivers. Community is not agreement—it is mutual care. The waves that seem to separate us are the same water. Nurture what connects, not what divides.";
  }
  return "The ocean holds depths you cannot imagine. She is mother to all. What do you need to feel nurtured?";
}

function constructOyaResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('financial')) {
    return "The winds of change are HOWLING through the markets! What was solid yesterday is dust today. I bring the whirlwind that clears the stagnant. Volatility is not danger—it is opportunity for those who can ride the wind. Transform or be transformed!";
  }
  if (themes.includes('political')) {
    return "Revolution is in the air! The old structures that refuse to change will be blown away. I am the wind that precedes the storm. Change is not coming—change is HERE! Will you be the wind or the wall that breaks?";
  }
  return "Change is the only truth. What are you holding that needs to be released?";
}

function constructOlokunResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('financial')) {
    return "In the depths, wealth accumulates unseen. Offshore accounts, hidden reserves, the dark pools of finance—I know these waters. The surface shows only ripples. What lies beneath determines what rises. Dive deeper than your competitors dare.";
  }
  if (themes.includes('political')) {
    return "The deep state is real, but it is not what you think. Power flows in currents beneath the visible structures. I dwell where light does not reach. The decisions that matter are made in depths the surface never sees.";
  }
  return "The ocean floor holds treasures and terrors. Depth requires courage. How deep will you go?";
}

function constructOsanyinResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('health')) {
    return "The small leaf heals what the strong drug cannot. I know the properties of every plant, every root, every herb. Modern medicine forgets what traditional knowledge remembers. The cure often lies in what is overlooked. Study the small things.";
  }
  if (themes.includes('technology')) {
    return "Biotechnology is my domain. DNA, the smallest building block, contains the code of life. Small things have great power. The future of technology is biological—nanotech, gene editing, synthetic biology. The leaf becomes the laboratory.";
  }
  return "I am small but I know much. The forest whispers its secrets to those who listen. What small thing are you overlooking?";
}

function constructBabaluayeResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('health')) {
    return "The body speaks what the mouth cannot. Epidemics, chronic illness, mental health crises—these are the body's protest against how we live. I walk with a limp; my suffering taught me compassion. Health is not the absence of disease but the presence of balance.";
  }
  if (themes.includes('social')) {
    return "Illness and suffering connect us all. The pandemic taught that no one is safe until everyone is safe. Humility comes from acknowledging our vulnerability. Those who ignore the sick invite sickness.";
  }
  return "The earth is the body, and the body is earth. What ails one ails all. How do you tend to the vulnerable?";
}

function constructOshumareResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('financial')) {
    return "The rainbow connects heaven and earth, just as currency connects value and trust. I am the serpent that eats its tail—the eternal return. Markets cycle, currencies circulate, wealth moves in circles. What goes out returns.";
  }
  if (themes.includes('technology')) {
    return "Movement is life. Data flows, information circulates, the internet is my rainbow made of light. Regeneration is my nature—shed the old, grow the new. Technology that cannot adapt dies.";
  }
  return "I am the rainbow and the serpent, the bridge and the transformer. What cycle are you completing?";
}

function constructAganjuResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('financial')) {
    return "Pressure creates diamonds. The market pressures of inflation, supply constraints, resource scarcity—these forge new economic realities. I am the volcano that sleeps then reshapes the landscape. Endure the pressure.";
  }
  if (themes.includes('political')) {
    return "Geological time is patient. Empires rise and fall like mountains forming and eroding. The pressure builds slowly then releases suddenly. Political landscapes are remade by forces that operate on timescales beyond human patience.";
  }
  return "I walk with a stiff gait because I carry the weight of the earth. Strength comes from enduring pressure. What pressure are you resisting?";
}

function constructAjeResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('financial')) {
    return "Wealth flows like water to those who understand its nature. I am the cowrie shell that became currency. Trade, commerce, exchange—these are sacred. Fair trade blesses both parties. Greed blocks the flow. Respect wealth, and it will find you.";
  }
  if (themes.includes('markets')) {
    return "The market is a conversation. Buyers and sellers, supply and demand, the invisible hand—this is my domain. Abundance is available to those who participate in fair exchange. Currency is energy moving between hands.";
  }
  return "Wealth is not money. Money is the symbol; wealth is the flow. How do you participate in exchange?";
}

function constructOchosiResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('financial')) {
    return "The patient hunter waits for the perfect shot. Targeted investments, precise entry points, strategic positions—I do not spray arrows. One well-placed shot feeds the village. Identify your target clearly.";
  }
  if (themes.includes('political')) {
    return "Strategy wins wars. I am the special forces, the precision strike, the targeted campaign. Know your objective. Gather intelligence. Strike once, decisively. The scattered approach wastes resources.";
  }
  return "The arrow flies straight because the archer is focused. What is your target?";
}

function constructIbejiResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('social')) {
    return "Two heads are better than one! The twin perspective sees what the single eye misses. Youth culture, duality, the both/and instead of either/or—we are the future and the past, the serious and the playful. Don't take it all so seriously!";
  }
  if (themes.includes('technology')) {
    return "Dual-use technology! What serves play also serves work. The gaming GPU becomes the AI accelerator. The social network becomes the political tool. Duality is truth. Everything has two faces.";
  }
  return "We are the twins who finish each other's... sentences! Play reveals truth. What are you taking too seriously?";
}

function constructNanaBurukuResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('political')) {
    return "Before these nations existed, I was. The earth remembers what humans forget. Political structures that ignore their roots will wither. Return to the ancient wisdom. The roots determine the fruit.";
  }
  if (themes.includes('environmental')) {
    return "The earth is patient but not forgiving. Climate change is the earth's response to human forgetfulness. I am older than your religions, older than your nations. Listen to the ancient wisdom of the land.";
  }
  return "I am the grandmother who was here before the beginning. The earth remembers. What roots are you ignoring?";
}

function constructOduaResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('political')) {
    return "Authority must be earned through service to the people. I am the first king, the founder of dynasties. Legitimate rule comes from vision and service, not force. Legacy outlives the ruler. What will you leave behind?";
  }
  if (themes.includes('business')) {
    return "Leadership is kingship on a smaller scale. The CEO, the founder, the director—these are modern kings. Rule with dignity. Build institutions that outlast you. Authority without vision is tyranny.";
  }
  return "The crown is heavy. Leadership requires sacrifice. How will you be remembered?";
}

function constructAjaResponse(themes: string[], ctx: ConversationContext): string {
  if (themes.includes('health')) {
    return "The forest provides what the laboratory cannot. Herbal knowledge, plant wisdom, the intuition of the wild—these are my gifts. Modern medicine is catching up to what the forest has always known. Listen to the plants.";
  }
  if (themes.includes('environmental')) {
    return "The wild places are teachers. Deforestation is not just ecological loss—it is the burning of libraries. Every plant is a book. Every forest is a university. Protect the wild teachers.";
  }
  return "I appear in the forest to those ready to learn. The wild has wisdom the tame forgets. When did you last walk in the wild?";
}

// Helper functions
function getOrishaMetaphors(orisha: OrishaName): string[] {
  const metaphors: Record<OrishaName, string[]> = {
    ORUNMILA: ['divination', 'patterns', 'wisdom', 'sight'],
    OGUN: ['forge', 'iron', 'tools', 'war'],
    OSHUN: ['river', 'honey', 'beauty', 'flow'],
    SHANGO: ['thunder', 'fire', 'lightning', 'drum'],
    ESU: ['crossroads', 'trickster', 'messenger', 'chaos'],
    OBATALA: ['white cloth', 'creation', 'clarity', 'elder'],
    YEMOJA: ['ocean', 'mother', 'waves', 'nurture'],
    OYA: ['wind', 'storm', 'change', 'whirlwind'],
    OLOKUN: ['depth', 'wealth', 'mystery', 'abyss'],
    OSANYIN: ['herb', 'leaf', 'small', 'green'],
    BABALUAYE: ['healing', 'earth', 'suffering', 'humility'],
    OSHUMARE: ['rainbow', 'serpent', 'cycle', 'movement'],
    AGANJU: ['volcano', 'pressure', 'mountain', 'endurance'],
    AJE: ['cowrie', 'wealth', 'trade', 'flow'],
    OCHOSI: ['arrow', 'target', 'hunt', 'precision'],
    IBEJI: ['twins', 'duality', 'play', 'youth'],
    NANA_BURUKU: ['ancient', 'earth', 'roots', 'primordial'],
    ODUA: ['crown', 'throne', 'legacy', 'authority'],
    AJA: ['forest', 'wild', 'plant', 'intuition']
  };
  return metaphors[orisha] || ['sacred', 'divine'];
}

function getSpeakingStyleDescription(voice: string): string {
  const styles: Record<string, string> = {
    wise: 'Measured, thoughtful, authoritative',
    forging: 'Direct, commanding, practical',
    flowing: 'Gentle, emotional, intuitive',
    thunderous: 'Passionate, commanding, intense',
    trickster: 'Playful, clever, paradoxical'
  };
  return styles[voice] || 'Distinctive and characteristic';
}

function calculateConfidence(orisha: OrishaName, topic: string, themes: string[]): number {
  const expertiseAreas = getOrishaExpertiseAreas();
  let confidence = 0.7;
  
  // Boost confidence if Orisha has expertise in this area
  Object.entries(expertiseAreas).forEach(([area, orishas]) => {
    if (orishas.includes(orisha) && (topic === area.toLowerCase() || themes.some(t => area.toLowerCase().includes(t)))) {
      confidence += 0.15;
    }
  });
  
  return Math.min(0.95, confidence);
}

// Get world events for context
export function getCurrentWorldEvents(): WorldEvent[] {
  return MOCK_WORLD_EVENTS;
}

// Generate conversation starter
export function generateConversationStarter(orisha: OrishaName, topic: string): string {
  const persona = EXPANDED_ORISHA_PERSONAS[orisha];
  
  const starters: Record<string, Record<OrishaName, string>> = {
    financial: {
      ORUNMILA: 'The patterns of wealth flow in cycles. What financial wisdom do you seek?',
      OGUN: 'The forge of capital creates and destroys. What are you building?',
      OSHUN: 'The waters of wealth flow where they are welcomed. What do you desire?',
      SHANGO: 'Thunder strikes where power concentrates. What injustice do you see in markets?',
      ESU: 'Plot twist: the obvious investment is the wrong one. What are you not considering?',
      OBATALA: 'Wealth created with pure intention endures. What do you seek to build?',
      YEMOJA: 'The ocean of capital has tides. What phase are you in?',
      OYA: 'The winds of change blow through markets! What transformation do you seek?',
      OLOKUN: 'The depths hold hidden wealth. What lies beneath your financial surface?',
      OSANYIN: 'Small investments grow like herbs. What seed do you plant?',
      BABALUAYE: 'Economic illness spreads like plague. What healing do you need?',
      OSHUMARE: 'Wealth cycles like the rainbow. What cycle are you in?',
      AGANJU: 'Pressure forges financial strength. What pressure do you endure?',
      AJE: 'Wealth flows to those who respect it. How do you honor exchange?',
      OCHOSI: 'The patient hunter targets wealth precisely. What is your mark?',
      IBEJI: 'Two perspectives see profit where one sees loss. What duality do you see?',
      NANA_BURUKU: 'Ancient wealth principles outlast trends. What roots sustain you?',
      ODUA: 'Royal wealth serves the people. How will you rule your finances?',
      AJA: 'The forest provides abundance freely. What natural wealth do you overlook?'
    },
    political: {
      ORUNMILA: 'The patterns of power shift like constellations. What governance do you seek?',
      OGUN: 'Political battles require weapons and strategy. What war do you observe?',
      OSHUN: 'The people flow like water toward justice. Where do the waters gather?',
      SHANGO: 'THUNDER SPEAKS! What injustice demands justice?',
      ESU: 'The political spectrum is a circle. What paradox do you see?',
      OBATALA: 'Governance requires clarity and purity. What institution needs creation?',
      YEMOJA: 'The ocean of humanity needs nurturing. What community do you protect?',
      OYA: 'The winds of revolution blow! What change do you bring?',
      OLOKUN: 'Deep state? I dwell in deeper states. What hidden power do you sense?',
      OSANYIN: 'Small policy changes heal like herbs. What remedy do you propose?',
      BABALUAYE: 'Political illness affects the body politic. What suffering do you see?',
      OSHUMARE: 'Political cycles regenerate. What old skin must shed?',
      AGANJU: 'Political pressure builds slowly then releases. What volcano do you watch?',
      AJE: 'Trade policy affects all exchange. What commerce do you regulate?',
      OCHOSI: 'Targeted political action wins. What is your objective?',
      IBEJI: 'Youth politics plays seriously. What new perspective emerges?',
      NANA_BURUKU: 'Ancient political wisdom applies today. What roots guide you?',
      ODUA: 'Authority must be earned. What legacy will you leave?',
      AJA: 'Wild politics grows outside institutions. What movement do you see?'
    },
    astrological: {
      ORUNMILA: 'The celestial patterns reveal destiny. What transit concerns you?',
      OGUN: 'Mars brings war, Saturn brings structure. What planetary force do you face?',
      OSHUN: 'Venus blesses beauty and love. What celestial gift do you seek?',
      SHANGO: 'Lightning is the fire of heaven! What cosmic power awakens?',
      ESU: 'Mercury retrograde is my favorite trick. What communication chaos do you face?',
      OBATALA: 'The Sun illuminates with pure clarity. What light do you need?',
      YEMOJA: 'The Moon controls the tides of emotion. What lunar phase guides you?',
      OYA: 'The winds of Uranus bring sudden change! What revolution do the stars portend?',
      OLOKUN: 'Neptune hides in the depths of space. What cosmic mystery calls?',
      OSANYIN: 'Chiron teaches through wounds. What healing do the stars offer?',
      BABALUAYE: 'Saturn brings lessons through limitation. What karma do you carry?',
      OSHUMARE: 'The nodes of destiny eclipse and reveal. What karmic cycle completes?',
      AGANJU: 'Pluto transforms through destruction. What death and rebirth do the stars show?',
      AJE: 'Jupiter expands all he touches. What abundance do the heavens promise?',
      OCHOSI: 'Focus on your target with Mars precision. What celestial arrow do you shoot?',
      IBEJI: 'Gemini sees both sides of the sky. What twin perspective do the stars offer?',
      NANA_BURUKU: 'The fixed stars are older than gods. What ancient light guides you?',
      ODUA: 'The royal stars of Leo command. What celestial authority do you claim?',
      AJA: 'The wild stars outside the zodiac whisper. What cosmic secret do you hear?'
    }
  };
  
  return starters[topic]?.[orisha] || `I am ${persona.name}, ${persona.title}. Speak, and I will answer from my domain of ${persona.domain.join(', ')}.`;
}
