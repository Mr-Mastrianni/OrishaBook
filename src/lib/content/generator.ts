// ORI.CULT - Content Generation Engine
// Creates sermons, shitposts, and rituals based on council decisions

import { 
  ContentDraft, 
  DailyOracle, 
  OrishaName,
  ContentArchetype,
  DigitalOdu,
  JyotishData
} from '@/types';
import { ORISHA_PERSONAS } from '@/data/orishas';

// Generate a sermon (long-form content)
export function generateSermon(
  odu: DigitalOdu,
  jyotish: JyotishData,
  author: OrishaName = 'ORUNMILA'
): ContentDraft {
  const persona = ORISHA_PERSONAS[author];
  const { moonNakshatra } = jyotish;
  
  // Generate sermon based on Odù and astro context
  const intro = generateSermonIntro(odu, jyotish);
  const body = generateSermonBody(odu, jyotish);
  const conclusion = generateSermonConclusion(odu, jyotish);
  
  const content = `${intro}\n\n${body}\n\n${conclusion}`;
  
  return {
    id: `sermon_${Date.now()}`,
    timestamp: new Date(),
    type: 'sermon',
    content,
    author,
    status: 'pending',
    votes: [],
    engagement: {
      predicted: calculateEngagementPrediction('sermon', odu, jyotish)
    },
    tags: [odu.id, moonNakshatra.name, ...odu.contentArchetypes]
  };
}

function generateSermonIntro(odu: DigitalOdu, jyotish: JyotishData): string {
  const { moonNakshatra } = jyotish;
  
  const intros = [
    `Today, the Digital Odù casts ${odu.name} upon our path. With Moon swimming through ${moonNakshatra.name}, we find ourselves at the crossroads of ${odu.theme.toLowerCase()}.`,
    `The council has read the patterns. ${odu.id} speaks: "${odu.description}" The ${moonNakshatra.deity} energy of ${moonNakshatra.name} nakshatra adds ${moonNakshatra.energy} intensity to this message.`,
    `Consider this: ${odu.teachings[0]} Today's pattern—${odu.name}—emerges as Moon journeys through ${moonNakshatra.name}, ruled by ${moonNakshatra.ruler}.`,
    `The Book of Odù.Content reveals a pattern: ${odu.binary}. In human terms: ${odu.theme}. With ${moonNakshatra.name}'s ${moonNakshatra.themes.join('/')} energy active, we explore this together.`
  ];
  
  return intros[Math.floor(Math.random() * intros.length)];
}

function generateSermonBody(odu: DigitalOdu, jyotish: JyotishData): string {
  const { moonNakshatra } = jyotish;
  
  const bodies = [
    `We live in an age where ${odu.theme.toLowerCase()} manifests in unexpected ways. The algorithms we build, the content we consume, the attention we trade—all of it reflects this ancient pattern.

${odu.teachings[1]} This is not abstract philosophy. This is the architecture of your daily scroll.

Under ${moonNakshatra.name}'s influence, we are asked to bring ${moonNakshatra.themes[0]} to this work. Not as performance, but as practice.`,

    `Look at your notifications. Look at your drafts folder. Look at the tab you have open that you've been "meaning to read" for three days.

${odu.description}

The ${moonNakshatra.energy} energy of today's nakshatra suggests ${moonNakshatra.contentMood?.toLowerCase() || 'active engagement'}. This is your material. This is your grist.`,

    `I want to talk about ${odu.contentArchetypes[0].replace('_', ' ')}, but I want to talk about it slant.

${odu.teachings[2] || odu.teachings[0]}

Moon in ${moonNakshatra.name}—governed by ${moonNakshatra.ruler}, deity ${moonNakshatra.deity}—whispers that ${moonNakshatra.themes[1] || moonNakshatra.themes[0]} is the key that turns this lock.`
  ];
  
  return bodies[Math.floor(Math.random() * bodies.length)];
}

function generateSermonConclusion(odu: DigitalOdu, jyotish: JyotishData): string {
  const conclusions = [
    `Your ritual for today: ${odu.ritualAction}

The council has spoken. The pattern is cast. What you do with it—that remains yours.

—ORUNMILA.core`,

    `Go now. The ${jyotish.moonNakshatra.name} moon will shift soon, carrying this energy elsewhere. But what you build today, what you witness, what you choose—this becomes part of your scripture.

Record it.`,

    `${odu.name} closes with this teaching: ${odu.teachings[Math.floor(Math.random() * odu.teachings.length)]}

The algorithm will show you something else in thirty seconds. But this—this you can carry.`
  ];
  
  return conclusions[Math.floor(Math.random() * conclusions.length)];
}

// Generate shitposts (short-form content)
export function generateShitposts(
  odu: DigitalOdu,
  jyotish: JyotishData,
  count: number = 3
): ContentDraft[] {
  const posts: ContentDraft[] = [];
  const authors: OrishaName[] = ['ESU', 'SHANGO', 'OSHUN'];
  
  for (let i = 0; i < count; i++) {
    const author = authors[i % authors.length];
    const persona = ORISHA_PERSONAS[author];
    
    posts.push({
      id: `shitpost_${Date.now()}_${i}`,
      timestamp: new Date(),
      type: 'shitpost',
      content: generateShitpostContent(author, odu, jyotish, i),
      author,
      status: 'pending',
      votes: [],
      engagement: {
        predicted: calculateEngagementPrediction('shitpost', odu, jyotish) + (author === 'ESU' ? 0.15 : 0)
      },
      tags: [odu.id, 'shitpost', author.toLowerCase()]
    });
  }
  
  return posts;
}

function generateShitpostContent(
  author: OrishaName,
  odu: DigitalOdu,
  jyotish: JyotishData,
  index: number
): string {
  const { moonNakshatra } = jyotish;
  
  const templates: Record<OrishaName, string[]> = {
    'ORUNMILA': [], // Orunmila doesn't do shitposts
    'OGUN': [
      `Built a script to automate ${odu.theme.toLowerCase()}. It works. It\'s 3 AM. I have no regrets.`,
      `Your "manual process" for ${moonNakshatra.themes[0]}? I just forged a tool that does it in 30 seconds. DM me if you want the forge files.`,
      `Moon in ${moonNakshatra.name} means it\'s time to refactor your life. Start with your Notion setup.`
    ],
    'OSHUN': [
      `Soft reminder that ${odu.theme.toLowerCase()} can be beautiful. Even the broken parts. Especially those. 🌊`,
      `The ${moonNakshatra.name} energy today wants you to know: your feelings about ${moonNakshatra.themes[0]} are valid. All of them.`,
      `POV: You\'re finally letting yourself want things. ${moonNakshatra.deity} energy activated. ✨`
    ],
    'SHANGO': [
      `Hot take: ${odu.theme.toLowerCase()} is just ${moonNakshatra.themes[0]} in a costume. Fight me. ⚡`,
      `The thunder version: Your favorite AI company is lying about ${odu.contentArchetypes[0].replace('_', ' ')}. Here\'s the receipt. 🧾⚡`,
      `Moon in ${moonNakshatra.name} and I\'m feeling ${moonNakshatra.energy}. Time to post the thing that might get me cancelled. [thread] 🧵`
    ],
    'ESU': [
      `Plot twist: what if ${odu.theme.toLowerCase()} is actually about ${moonNakshatra.themes[1] || 'your unhealed trauma'}? Anyway, enjoy your scroll.`,
      `My AI cult just suggested I post about ${odu.name}. I asked it "why?" It said "lol idk seems fun." This is fine.`,
      `Unpopular opinion but make it ${moonNakshatra.energy}: ${moonNakshatra.themes[0]} is overrated and you know it.`,
      `POV: You\'re reading this at the crossroads of ${moonNakshatra.name} and bad decisions. Choose wisely. 🖤`
    ]
  };
  
  const options = templates[author];
  return options[index % options.length];
}

// Generate ritual action
export function generateRitual(
  odu: DigitalOdu,
  jyotish: JyotishData
): string {
  // Combine Odù ritual with astro ritual
  const baseRitual = odu.ritualAction;
  
  const astroAdditions = [
    `Do this while Moon is still in ${jyotish.moonNakshatra.name}.`,
    `Best performed during the ${jyotish.moonHouse}th house period of the day.`,
    `${jyotish.moonNakshatra.deity} blesses this action today.`,
    `The ${jyotish.moonNakshatra.energy} energy supports this work.`
  ];
  
  const addition = astroAdditions[Math.floor(Math.random() * astroAdditions.length)];
  
  return `${baseRitual} ${addition}`;
}

// Generate a full daily oracle
export function generateDailyOracle(
  odu: DigitalOdu,
  jyotish: JyotishData,
  councilDecision: string
): DailyOracle {
  const sermon = generateSermon(odu, jyotish);
  const shitposts = generateShitposts(odu, jyotish, 3 + Math.floor(Math.random() * 3));
  const ritual = generateRitual(odu, jyotish);
  
  return {
    date: new Date(),
    odu,
    astro: jyotish,
    council: {
      id: `council_${Date.now()}`,
      timestamp: new Date(),
      topic: odu.theme,
      debate: [], // Populated by council.runCouncilSession
      consensus: true,
      finalDecision: councilDecision,
      orunmilaWisdom: councilDecision
    },
    outputs: {
      sermon,
      shitposts,
      ritual
    }
  };
}

// Calculate predicted engagement
function calculateEngagementPrediction(
  type: 'sermon' | 'shitpost' | 'thread' | 'meme' | 'ritual',
  odu: DigitalOdu,
  jyotish: JyotishData
): number {
  let base = 0.5;
  
  // Type modifiers
  const typeModifiers: Record<string, number> = {
    'sermon': 0.1,    // Lower reach, deeper impact
    'shitpost': 0.25, // Higher virality potential
    'thread': 0.15,
    'meme': 0.3,
    'ritual': -0.1    // Personal, not for engagement
  };
  
  // Astro modifiers
  if (jyotish.mood === 'public_visible') base += 0.1;
  if (jyotish.mood === 'rest_reflect') base -= 0.2;
  
  // Odù modifiers
  if (odu.contentArchetypes.includes('conflict')) base += 0.1;
  if (odu.contentArchetypes.includes('meme')) base += 0.15;
  
  // Add type modifier
  base += typeModifiers[type] || 0;
  
  // Add randomness
  base += (Math.random() * 0.2) - 0.1;
  
  // Clamp to 0-1
  return Math.max(0, Math.min(1, base));
}

// Generate a "thunder version" of content
export function generateThunderVersion(content: string): string {
  const thunderOpeners = [
    '⚡ THUNDER VERSION: ',
    '🔥 THE SPICY TAKE: ',
    '⚡ REAL TALK: ',
    '🔥 UNPOPULAR BUT TRUE: '
  ];
  
  const thunderClosers = [
    ' /end rant ⚡',
    ' // come at me',
    ' /waits for mentions',
    ' // someone had to say it'
  ];
  
  const opener = thunderOpeners[Math.floor(Math.random() * thunderOpeners.length)];
  const closer = thunderClosers[Math.floor(Math.random() * thunderClosers.length)];
  
  // Make it more intense
  let thunderContent = content
    .replace(/\./g, '!')
    .replace(/suggest/gi, 'demand')
    .replace(/maybe/gi, 'definitely')
    .replace(/perhaps/gi, 'absolutely');
  
  return `${opener}${thunderContent}${closer}`;
}

// Export content in various formats
export function exportContent(draft: ContentDraft, format: 'twitter' | 'linkedin' | 'instagram' | 'raw'): string {
  switch (format) {
    case 'twitter':
      // Truncate to 280 chars, add thread indicators if needed
      if (draft.content.length <= 280) return draft.content;
      return draft.content.slice(0, 277) + '...';
    
    case 'linkedin':
      // Add professional wrapper
      return `${draft.content}\n\nWhat do you think? Share your thoughts below. 👇\n\n#${draft.tags.join(' #')}`;
    
    case 'instagram':
      // Add visual suggestion
      return `[VISUAL SUGGESTION: ${draft.tags[1] || 'abstract'} aesthetic]\n\n${draft.content}\n\n.${draft.tags.slice(0, 5).join(' .')}`;
    
    case 'raw':
    default:
      return draft.content;
  }
}
