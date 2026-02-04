// ORI.CULT - Digital Odù Pattern Library
// Ifa-inspired patterns, NOT actual sacred Odù Ifa
// These are content state containers, not divinatory signs

import { DigitalOdu, ContentArchetype, OrishaName } from '@/types';

export const DIGITAL_ODU_LIBRARY: DigitalOdu[] = [
  {
    id: 'ODU_001',
    name: 'Conflict vs Harmony',
    binary: '00001111',
    theme: 'The tension between opposition and unity',
    description: 'Today\'s pattern reveals the dance between opposing forces. Content should explore friction, debate, or the resolution of differences.',
    teachings: [
      'Conflict is information',
      'Harmony requires acknowledging discord',
      'The middle path is not always the right path'
    ],
    contentArchetypes: ['conflict', 'harmony', 'revelation'],
    ritualAction: 'Identify one conflict in your work and name it out loud. Then, write one sentence of reconciliation.',
    orishaAffinity: ['SHANGO', 'ORUNMILA']
  },
  {
    id: 'ODU_011',
    name: 'Closed Source vs Liberation',
    binary: '00011110',
    theme: 'The battle for digital freedom',
    description: 'The pattern of walled gardens and open gates. Today speaks to proprietary systems, surveillance capitalism, and the liberatory potential of tech.',
    teachings: [
      'Knowledge wants to be shared',
      'Gates create dependencies',
      'True power is teachable power'
    ],
    contentArchetypes: ['tech_vs_tradition', 'shadow_work', 'sermon'],
    ritualAction: 'Share one piece of knowledge that was once gatekept from you.',
    orishaAffinity: ['OGUN', 'ESU', 'SHANGO']
  },
  {
    id: 'ODU_022',
    name: 'The Forge and the Flower',
    binary: '00101101',
    theme: 'Where hard tech meets soft aesthetics',
    description: 'Today bridges infrastructure and beauty. Content should explore the intersection of technical depth and sensory pleasure.',
    teachings: [
      'Tools can be beautiful',
      'Beauty requires structure',
      'The finest blade has an elegant curve'
    ],
    contentArchetypes: ['building', 'tutorial', 'meme'],
    ritualAction: 'Make one utilitarian thing in your workspace more beautiful today.',
    orishaAffinity: ['OGUN', 'OSHUN']
  },
  {
    id: 'ODU_033',
    name: 'Thunder in the Water',
    binary: '00111100',
    theme: 'When passion meets reflection',
    description: 'A volatile pattern. Righteous anger and emotional depth combine. Content may be intense, vulnerable, and transformative.',
    teachings: [
      'Anger is a teacher when witnessed',
      'Depth requires risk',
      'Storms purify the water'
    ],
    contentArchetypes: ['shadow_work', 'conflict', 'transformation'],
    ritualAction: 'Write something true that scares you. Do not post it yet—just witness it.',
    orishaAffinity: ['SHANGO', 'OSHUN']
  },
  {
    id: 'ODU_044',
    name: 'The Trickster\'s Mirror',
    binary: '01001011',
    theme: 'Reflections that reveal and deceive',
    description: 'Esu\'s pattern. Today is for questioning assumptions, testing boundaries, and finding the unexpected angle.',
    teachings: [
      'Every truth has a shadow',
      'Laughter dissolves rigidity',
      'The messenger reveals the message'
    ],
    contentArchetypes: ['meme', 'revelation', 'shadow_work'],
    ritualAction: 'Question one belief you hold strongly. Play devil\'s advocate with yourself.',
    orishaAffinity: ['ESU', 'ORUNMILA']
  },
  {
    id: 'ODU_055',
    name: 'The Crossroads of Self',
    binary: '01011110',
    theme: 'Personal identity in public spaces',
    description: 'A pattern of individuation. Content should explore the tension between authentic self and public persona.',
    teachings: [
      'You are multiple and singular',
      'The mask reveals the face',
      'Identity is a practice, not a possession'
    ],
    contentArchetypes: ['individual_vs_collective', 'revelation', 'sermon'],
    ritualAction: 'Do one small thing that is "off-brand" for you. Notice how it feels.',
    orishaAffinity: ['ESU', 'OSHUN']
  },
  {
    id: 'ODU_066',
    name: 'Wisdom of the Tool',
    binary: '01100110',
    theme: 'Knowledge embedded in practice',
    description: 'The pattern of embodied wisdom. Today\'s content should teach through demonstration, not just explanation.',
    teachings: [
      'The hand knows what the mind forgets',
      'Show, don\'t tell',
      'Mastery is in the doing'
    ],
    contentArchetypes: ['tutorial', 'building', 'tech_vs_tradition'],
    ritualAction: 'Teach someone one small skill without using words—only demonstration.',
    orishaAffinity: ['OGUN', 'ORUNMILA']
  },
  {
    id: 'ODU_077',
    name: 'The Gathering Storm',
    binary: '01111001',
    theme: 'Building intensity before transformation',
    description: 'A pattern of impending change. Content should acknowledge tensions that are building and prepare the audience for shift.',
    teachings: [
      'Pressure creates diamonds',
      'Warning is preparation',
      'Change is neither good nor bad—only inevitable'
    ],
    contentArchetypes: ['transformation', 'shadow_work', 'sermon'],
    ritualAction: 'Identify one change you\'ve been resisting. Write a single sentence accepting it.',
    orishaAffinity: ['SHANGO', 'ORUNMILA']
  },
  {
    id: 'ODU_088',
    name: 'Sweet Iron',
    binary: '10000111',
    theme: 'When strength serves beauty',
    description: 'A rare harmonious pattern. Hard work in service of creating something lovely. Content should celebrate the labor behind the art.',
    teachings: [
      'Effort is a form of love',
      'Discipline enables freedom',
      'The forge and the garden are one'
    ],
    contentArchetypes: ['building', 'beauty_polish', 'harmony'],
    ritualAction: 'Acknowledge one hard thing you do regularly. Thank yourself for doing it.',
    orishaAffinity: ['OGUN', 'OSHUN', 'ORUNMILA']
  },
  {
    id: 'ODU_099',
    name: 'The Divided House',
    binary: '10011010',
    theme: 'Internal conflict made visible',
    description: 'A pattern of contradiction. Today\'s content can explore hypocrisy, internal debate, or the honest admission of not knowing.',
    teachings: [
      'Contradiction is human',
      'The divided house can still stand',
      'Uncertainty is a valid position'
    ],
    contentArchetypes: ['conflict', 'shadow_work', 'individual_vs_collective'],
    ritualAction: 'Admit one contradiction in your beliefs or practices. Hold it without resolving it.',
    orishaAffinity: ['ESU', 'SHANGO']
  },
  {
    id: 'ODU_101',
    name: 'The Open Gate',
    binary: '10100101',
    theme: 'Accessibility and invitation',
    description: 'A welcoming pattern. Today\'s content should lower barriers, explain complex things simply, or invite new perspectives.',
    teachings: [
      'Knowledge unshared is potential unrealized',
      'The gate is also a threshold',
      'Invitation is an art'
    ],
    contentArchetypes: ['tutorial', 'harmony', 'tech_vs_tradition'],
    ritualAction: 'Translate one jargon-filled concept into language a child could understand.',
    orishaAffinity: ['ORUNMILA', 'OSHUN']
  },
  {
    id: 'ODU_111',
    name: 'The Silent Drum',
    binary: '10111101',
    theme: 'Power in restraint',
    description: 'A pattern of intentional silence. Today may call for less posting, more listening, or the strategic use of negative space.',
    teachings: [
      'Silence is also speech',
      'The unsaid creates meaning',
      'Rest is resistance in a noisy world'
    ],
    contentArchetypes: ['behind_scenes', 'rest_reflect', 'shadow_work'],
    ritualAction: 'Take a 4-hour break from all content creation. Observe what arises.',
    orishaAffinity: ['ORUNMILA', 'OSHUN']
  },
  {
    id: 'ODU_122',
    name: 'The Messenger\'s Burden',
    binary: '11000011',
    theme: 'Communication across boundaries',
    description: 'Esu\'s pattern of translation. Content should bridge worlds: tech and spirit, theory and practice, insider and outsider.',
    teachings: [
      'The messenger is responsible for the message',
      'Translation changes meaning',
      'Boundaries are places of meeting'
    ],
    contentArchetypes: ['tech_vs_tradition', 'meme', 'sermon'],
    ritualAction: 'Explain one concept from your field to someone in a completely different field.',
    orishaAffinity: ['ESU', 'ORUNMILA']
  },
  {
    id: 'ODU_133',
    name: 'The Burning Library',
    binary: '11010100',
    theme: 'Loss and preservation',
    description: 'A pattern of endangered knowledge. Content should address what is being lost, forgotten, or destroyed—and what we save.',
    teachings: [
      'Not everything should be saved',
      'Loss creates space',
      'What we remember shapes who we become'
    ],
    contentArchetypes: ['destruction', 'tech_vs_tradition', 'shadow_work'],
    ritualAction: 'Delete one digital file you no longer need. Archive one thing worth keeping.',
    orishaAffinity: ['OGUN', 'ESU']
  },
  {
    id: 'ODU_144',
    name: 'The Thunder\'s Echo',
    binary: '11101000',
    theme: 'Lasting impact of bold action',
    description: 'A pattern of resonance. Today\'s bold moves will have extended consequences. Choose your thunder wisely.',
    teachings: [
      'Echoes outlast the thunder',
      'Impact is not the same as intent',
      'Your voice carries further than you know'
    ],
    contentArchetypes: ['transformative', 'public_visible', 'sermon'],
    ritualAction: 'Revisit a bold post you made months ago. What echoes remain?',
    orishaAffinity: ['SHANGO', 'ORUNMILA']
  },
  {
    id: 'ODU_155',
    name: 'The Many Waters',
    binary: '11110001',
    theme: 'Emotional multiplicity',
    description: 'Oshun\'s deep pattern. Content can explore complex emotions, collective feeling, or the healing power of being witnessed.',
    teachings: [
      'No emotion is wrong',
      'Feeling is information',
      'The river carries many currents'
    ],
    contentArchetypes: ['deep_psychological', 'harmony', 'revelation'],
    ritualAction: 'Name three emotions you feel right now without judging them.',
    orishaAffinity: ['OSHUN', 'ORUNMILA']
  },
  {
    id: 'ODU_200',
    name: 'The Digital Oracle',
    binary: '11111111',
    theme: 'Full integration of all patterns',
    description: 'A rare complete pattern. All aspects are active. Today\'s content can be ambitious, multi-layered, and experimental.',
    teachings: [
      'Everything is connected',
      'The oracle speaks in many voices',
      'Integration is the highest art'
    ],
    contentArchetypes: ['transformative', 'revelation', 'building', 'meme', 'sermon'],
    ritualAction: 'Do something that combines all your skills in one project.',
    orishaAffinity: ['ORUNMILA', 'OGUN', 'OSHUN', 'SHANGO', 'ESU']
  }
];

// Helper function to get Odù by ID
export function getOduById(id: string): DigitalOdu | undefined {
  return DIGITAL_ODU_LIBRARY.find(odu => odu.id === id);
}

// Helper function to cast a Digital Odù based on date and context
export function castDigitalOdu(date: Date, contextHash?: string): DigitalOdu {
  // Use date + optional context to deterministically select an Odù
  const dateStr = date.toISOString().split('T')[0];
  const seed = dateStr + (contextHash || '');
  
  // Simple hash function
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  
  const index = Math.abs(hash) % DIGITAL_ODU_LIBRARY.length;
  return DIGITAL_ODU_LIBRARY[index];
}

// Get Odù by Orisha affinity
export function getOduByOrisha(orisha: OrishaName): DigitalOdu[] {
  return DIGITAL_ODU_LIBRARY.filter(odu => odu.orishaAffinity.includes(orisha));
}
