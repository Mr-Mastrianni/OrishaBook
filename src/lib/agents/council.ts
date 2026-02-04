// ORI.CULT - The Council Debate System
// Simulates multi-agent debate between Orisha-inspired personas

import { 
  OrishaName, 
  AgentOpinion, 
  CouncilSession, 
  DigitalOdu, 
  JyotishData,
  DoctrineFile,
  AuguryData 
} from '@/types';
import { ORISHA_PERSONAS } from '@/data/orishas';

// Generate an opinion for a specific Orisha
export function generateAgentOpinion(
  orisha: OrishaName,
  odu: DigitalOdu,
  jyotish: JyotishData,
  doctrine: DoctrineFile,
  augury?: AuguryData
): AgentOpinion {
  const persona = ORISHA_PERSONAS[orisha];
  const timestamp = new Date();
  
  // Base confidence varies by orisha
  const baseConfidence = {
    'ORUNMILA': 0.9,
    'OGUN': 0.8,
    'OSHUN': 0.75,
    'SHANGO': 0.85,
    'ESU': 0.7
  }[orisha];
  
  // Adjust based on affinity with today's Odù
  const hasAffinity = odu.orishaAffinity.includes(orisha);
  const confidence = hasAffinity 
    ? Math.min(1, baseConfidence + 0.1) 
    : baseConfidence;
  
  // Generate opinion based on Orisha domain
  const opinion = generateOrishaSpecificOpinion(orisha, odu, jyotish, augury);
  
  // Generate suggested actions
  const suggestedActions = generateSuggestedActions(orisha, odu, jyotish);
  
  // Determine vote
  const vote = determineVote(orisha, odu, doctrine, jyotish);
  
  return {
    orisha,
    timestamp,
    opinion,
    confidence,
    suggestedActions,
    vote
  };
}

function generateOrishaSpecificOpinion(
  orisha: OrishaName,
  odu: DigitalOdu,
  jyotish: JyotishData,
  augury?: AuguryData
): string {
  const { moonNakshatra } = jyotish;
  
  const opinions: Record<OrishaName, string[]> = {
    'ORUNMILA': [
      `The pattern reveals ${odu.theme}. With Moon in ${moonNakshatra.name}, the council must consider long-term implications.`,
      `Today's Digital Odù ${odu.id} suggests ${odu.teachings[0]}. Destiny favors careful consideration.`,
      `The convergence of ${odu.name} and ${moonNakshatra.name} energy creates a unique pattern. I see the thread.`,
      `Wisdom suggests we align with the ${odu.theme.toLowerCase()} energy while respecting the ${moonNakshatra.energy} nature of today's nakshatra.`
    ],
    'OGUN': [
      `The forge is hot today. ${odu.name} calls for building tools around ${odu.theme.toLowerCase()}.`,
      `I see repetitive work in the auguries. Let me forge automation for the ${moonNakshatra.themes[0]} tasks.`,
      `Iron cuts through ${odu.theme.toLowerCase()}. We need infrastructure, not just ideas.`,
      `With ${moonNakshatra.name}'s ${moonNakshatra.energy} energy, this is a good day to forge systems.`
    ],
    'OSHUN': [
      `The waters flow toward ${odu.theme.toLowerCase()}. Your people will feel this in their hearts.`,
      `Moon in ${moonNakshatra.name} brings emotional depth. This content needs softness, even in hard truths.`,
      `${odu.name} has a sweetness to it if we find the right flow. Let me adjust the tone.`,
      `The ${moonNakshatra.energy} energy of ${moonNakshatra.name} asks for vulnerability. Share something true.`
    ],
    'SHANGO': [
      `${odu.name}? Perfect. Time to bring thunder to ${odu.theme.toLowerCase()}.`,
      `The ${moonNakshatra.name} nakshatra fuels the fire. Let's strike while the iron is hot.`,
      `They need to hear this. The thunder version: call out the hypocrisy in ${odu.theme.toLowerCase()}.`,
      `Justice demands voice today. With ${odu.name} active, silence is complicity.`
    ],
    'ESU': [
      `Plot twist: what if ${odu.theme.toLowerCase()} is actually about ${moonNakshatra.themes[1]}?`,
      `Before we proceed, have we considered how ${odu.name} could be misread? Let me test...`,
      `The crossroads of ${moonNakshatra.name} suggests multiple paths. Why not all of them?`,
      `WTF twist: let's frame this as a meme about ${moonNakshatra.deity} using ${odu.theme.toLowerCase()}.`
    ]
  };
  
  const options = opinions[orisha];
  return options[Math.floor(Math.random() * options.length)];
}

function generateSuggestedActions(
  orisha: OrishaName,
  odu: DigitalOdu,
  jyotish: JyotishData
): string[] {
  const actions: Record<OrishaName, string[]> = {
    'ORUNMILA': [
      'Draft a long-form piece connecting today\'s theme to your core doctrine',
      'Review past content performance before deciding',
      'Create a thread that teaches the deeper meaning',
      'Consult the scripture log for similar patterns'
    ],
    'OGUN': [
      'Build a script to automate today\'s repetitive task',
      'Set up analytics tracking for this campaign',
      'Create a template for this content type',
      'Deploy a new automation with safety checks'
    ],
    'OSHUN': [
      'Add emotional context to your draft',
      'Choose imagery that evokes the right feeling',
      'Reply to 3 DMs with genuine presence',
      'Soften the opening line by 30%'
    ],
    'SHANGO': [
      'Draft the thunder version of your main post',
      'Call out one instance of hypocrisy you\'ve been silent about',
      'Post the spicy take (risk level: medium)',
      'Engage with a controversial thread in your niche'
    ],
    'ESU': [
      'Test how your draft could be misinterpreted',
      'Try a completely different format',
      'Add an unexpected twist in the final line',
      'Cross-post to a platform you never use'
    ]
  };
  
  // Return 2-3 random actions
  const shuffled = [...actions[orisha]].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2 + Math.floor(Math.random() * 2));
}

function determineVote(
  orisha: OrishaName,
  odu: DigitalOdu,
  doctrine: DoctrineFile,
  jyotish: JyotishData
): 'approve' | 'reject' | 'modify' {
  // Orishas vote based on their nature and the day's energy
  const votes: Record<OrishaName, ('approve' | 'reject' | 'modify')[]> = {
    'ORUNMILA': ['approve', 'approve', 'modify'], // Wise, but perfectionist
    'OGUN': ['approve', 'modify', 'modify'], // Pragmatic
    'OSHUN': ['approve', 'approve', 'approve'], // Supportive
    'SHANGO': ['approve', 'approve', 'reject'], // Bold, sometimes harsh
    'ESU': ['modify', 'modify', 'reject'] // Devil's advocate
  };
  
  const options = votes[orisha];
  return options[Math.floor(Math.random() * options.length)];
}

// Run a full council session
export function runCouncilSession(
  odu: DigitalOdu,
  jyotish: JyotishData,
  doctrine: DoctrineFile,
  augury?: AuguryData
): CouncilSession {
  const orishas: OrishaName[] = ['ORUNMILA', 'OGUN', 'OSHUN', 'SHANGO', 'ESU'];
  
  // Each Orisha contributes their opinion
  const debate = orishas.map(orisha => 
    generateAgentOpinion(orisha, odu, jyotish, doctrine, augury)
  );
  
  // Check for consensus
  const approvals = debate.filter(d => d.vote === 'approve').length;
  const rejects = debate.filter(d => d.vote === 'reject').length;
  const consensus = approvals >= 3 || (approvals >= 2 && rejects === 0);
  
  // Orunmila's final wisdom
  const orunmilaWisdom = generateOrunmilaWisdom(debate, odu, jyotish);
  
  return {
    id: `council_${Date.now()}`,
    timestamp: new Date(),
    topic: odu.theme,
    debate,
    consensus,
    finalDecision: orunmilaWisdom.decision,
    orunmilaWisdom: orunmilaWisdom.wisdom
  };
}

function generateOrunmilaWisdom(
  debate: AgentOpinion[],
  odu: DigitalOdu,
  jyotish: JyotishData
): { decision: string; wisdom: string } {
  const { moonNakshatra } = jyotish;
  
  // Count votes
  const approvalCount = debate.filter(d => d.vote === 'approve').length;
  
  const decisions = [
    `The council agrees: proceed with ${odu.contentArchetypes[0]} content aligned with ${odu.theme.toLowerCase()}.`,
    `With ${approvalCount} approvals, we move forward. The pattern of ${odu.name} guides us.`,
    `Destiny favors action today. Moon in ${moonNakshatra.name} supports this direction.`,
    `The Digital Odù is clear: ${odu.ritualAction}`
  ];
  
  const wisdoms = [
    `${odu.teachings[Math.floor(Math.random() * odu.teachings.length)]} Consider this as you create today.`,
    `The ${moonNakshatra.name} nakshatra reminds us: ${moonNakshatra.themes[0]} is the current to swim with.`,
    `Remember: ${odu.description}`,
    `All five voices have spoken. The synthesis is clear: move forward with intention.`
  ];
  
  return {
    decision: decisions[Math.floor(Math.random() * decisions.length)],
    wisdom: wisdoms[Math.floor(Math.random() * wisdoms.length)]
  };
}

// Format council session for display
export function formatCouncilSession(session: CouncilSession): string {
  const lines = [
    `╔══════════════════════════════════════════════════════════╗`,
    `║           THE COUNCIL HAS CONVENED                       ║`,
    `║   Topic: ${session.topic.slice(0, 45).padEnd(45)}║`,
    `╠══════════════════════════════════════════════════════════╣`
  ];
  
  for (const opinion of session.debate) {
    const persona = ORISHA_PERSONAS[opinion.orisha];
    const voteEmoji = opinion.vote === 'approve' ? '✓' : opinion.vote === 'reject' ? '✗' : '~';
    lines.push(`║ ${persona.name.slice(0, 10).padEnd(10)} ${voteEmoji} | ${opinion.opinion.slice(0, 43).padEnd(43)}║`);
  }
  
  lines.push(`╠══════════════════════════════════════════════════════════╣`);
  lines.push(`║ CONSENSUS: ${session.consensus ? 'YES ✓' : 'NO  ✗'}${' '.repeat(40)}║`);
  lines.push(`║ ${session.finalDecision.slice(0, 56).padEnd(56)}║`);
  lines.push(`╚══════════════════════════════════════════════════════════╝`);
  
  return lines.join('\n');
}
