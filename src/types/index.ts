// ORI.CULT - Core Type Definitions
// The Oracular Content Engine

// ============== ORISHA AGENTS ==============

export type OrishaName = 'ORUNMILA' | 'OGUN' | 'OSHUN' | 'SHANGO' | 'ESU';

export interface OrishaPersona {
  name: OrishaName;
  title: string;
  domain: string[];
  color: string;
  icon: string;
  systemPrompt: string;
  voice: 'wise' | 'forging' | 'flowing' | 'thunderous' | 'trickster';
  temperature: number; // 0-1, how creative/chaotic
}

export interface AgentOpinion {
  orisha: OrishaName;
  timestamp: Date;
  opinion: string;
  confidence: number; // 0-1
  suggestedActions: string[];
  vote: 'approve' | 'reject' | 'modify';
}

// ============== DIGITAL ODÙ ==============

export interface DigitalOdu {
  id: string;
  name: string;
  binary: string; // 8 binary digits representing the pattern
  theme: string;
  description: string;
  teachings: string[];
  contentArchetypes: ContentArchetype[];
  ritualAction: string;
  orishaAffinity: OrishaName[];
}

export type ContentArchetype = 
  | 'conflict' | 'harmony' | 'transformation' | 'revelation'
  | 'tech_vs_tradition' | 'individual_vs_collective' | 'shadow_work'
  | 'building' | 'destruction' | 'meme' | 'sermon' | 'tutorial'
  | 'bold_experiment' | 'beauty_polish' | 'deep_psychological'
  | 'communicative' | 'behind_scenes' | 'public_visible'
  | 'rest_reflect' | 'transformative' | 'creative' | 'partnerships'
  | 'community' | 'destruction';

// ============== JYOTISH ==============

export interface JyotishData {
  date: Date;
  moonNakshatra: Nakshatra;
  moonSign: Rashi;
  moonHouse: number; // 1-12
  majorTransits: Transit[];
  mood: AstroMood;
  contentRecommendations: ContentArchetype[];
}

export interface Nakshatra {
  name: string;
  deity: string;
  ruler: Planet;
  energy: 'sharp' | 'soft' | 'movable' | 'fixed' | 'mixed';
  themes: string[];
  contentMood?: string;
  recommendedContent?: ContentArchetype[];
  avoidTopics?: string[];
}

export interface Transit {
  planet: Planet;
  fromSign: Rashi;
  toSign: Rashi;
  exactDate?: Date;
  aspectingNatal: boolean;
}

export type Planet = 'Sun' | 'Moon' | 'Mars' | 'Mercury' | 'Jupiter' | 'Venus' | 'Saturn' | 'Rahu' | 'Ketu';

export type Rashi = 'Aries' | 'Taurus' | 'Gemini' | 'Cancer' | 'Leo' | 'Virgo' 
  | 'Libra' | 'Scorpio' | 'Sagittarius' | 'Capricorn' | 'Aquarius' | 'Pisces';

export type AstroMood = 
  | 'bold_experiment' | 'beauty_polish' | 'deep_psychological' 
  | 'communicative' | 'behind_scenes' | 'public_visible' 
  | 'rest_reflect' | 'transformative' | 'building';

// ============== CONTENT ==============

export interface ContentDraft {
  id: string;
  timestamp: Date;
  type: 'sermon' | 'shitpost' | 'thread' | 'meme' | 'ritual';
  content: string;
  author: OrishaName | 'COUNCIL';
  status: 'pending' | 'approved' | 'rejected' | 'modified';
  votes: AgentVote[];
  engagement?: {
    predicted: number;
    actual?: number;
  };
  tags: string[];
}

export interface AgentVote {
  orisha: OrishaName;
  vote: 'approve' | 'reject' | 'modify';
  comment?: string;
}

export interface DailyOracle {
  date: Date;
  odu: DigitalOdu;
  astro: JyotishData;
  council: CouncilSession;
  outputs: {
    sermon: ContentDraft;
    shitposts: ContentDraft[];
    ritual: string;
  };
  doctrineFeedback?: DoctrineFeedback;
}

// ============== COUNCIL ==============

export interface CouncilSession {
  id: string;
  timestamp: Date;
  topic: string;
  debate: AgentOpinion[];
  consensus: boolean;
  finalDecision: string;
  orunmilaWisdom: string;
}

// ============== DOCTRINE ==============

export interface DoctrineFile {
  version: string;
  lastUpdated: Date;
  coreValues: string[];
  tone: {
    minWoo: number; // 0-1
    maxWoo: number;
    minChaos: number;
    maxChaos: number;
  };
  tabooTopics: string[];
  sacredSymbols: string[];
  brandVoice: string[];
  neverDo: string[];
  alwaysDo: string[];
  feedbackHistory: DoctrineFeedback[];
}

export interface DoctrineFeedback {
  timestamp: Date;
  oracleId: string;
  contentId: string;
  feedback: 'on-brand' | 'off-brand' | 'too-woo' | 'not-woo-enough' | 'too-chaotic' | 'needs-chaos';
  notes?: string;
}

// ============== SCRIPTURE LOG ==============

export interface ScriptureEntry {
  id: string;
  date: Date;
  oduId: string;
  astroMood: AstroMood;
  councilNotes: string;
  contentIds: string[];
  performance: {
    engagement: number;
    sentiment: 'positive' | 'neutral' | 'controversial';
    reach: number;
  };
  patternNotes: string;
}

// ============== USER DATA ==============

export interface UserProfile {
  birthData?: {
    date: Date;
    time?: string;
    location?: string;
    chart?: NatalChart;
  };
  natalChart?: NatalChart;
  contentHistory: ContentDraft[];
  doctrine: DoctrineFile;
  scripture: ScriptureEntry[];
}

export interface NatalChart {
  lagna: Rashi;
  moonSign: Rashi;
  moonNakshatra: Nakshatra;
  planets: Record<Planet, Rashi>;
}

// ============== ANALYTICS ==============

export interface AuguryData {
  posts: SocialPost[];
  dms: Message[];
  mentions: Mention[];
  analytics: PlatformAnalytics;
}

export interface SocialPost {
  id: string;
  platform: string;
  content: string;
  timestamp: Date;
  engagement: {
    likes: number;
    shares: number;
    comments: number;
    saves?: number;
  };
  sentiment: 'positive' | 'neutral' | 'negative';
}

export interface Message {
  id: string;
  platform: string;
  sender: string;
  content: string;
  timestamp: Date;
  category: 'praise' | 'question' | 'collab' | 'troll' | 'other';
}

export interface Mention {
  id: string;
  platform: string;
  content: string;
  author: string;
  timestamp: Date;
  sentiment: 'positive' | 'neutral' | 'negative';
}

export interface PlatformAnalytics {
  followers: number;
  growth: number;
  topPerforming: string[];
  emergingThemes: string[];
}
