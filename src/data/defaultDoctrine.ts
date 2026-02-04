// ORI.CULT - Default Doctrine File
// The living document of brand values and sacred taboos

import { DoctrineFile } from '@/types';

export const DEFAULT_DOCTRINE: DoctrineFile = {
  version: '1.0.0',
  lastUpdated: new Date(),
  
  coreValues: [
    'Knowledge should be liberated, not gatekept',
    'Technology serves humanity, not the reverse',
    'Spiritual technology is valid technology',
    'Playfulness is a form of resistance',
    'Community over algorithm',
    'Depth over breadth',
    'The process is the product'
  ],
  
  tone: {
    minWoo: 0.3,      // Not too cynical
    maxWoo: 0.8,      // But not completely ungrounded
    minChaos: 0.2,    // Some structure
    maxChaos: 0.9     // But room for wildness
  },
  
  tabooTopics: [
    'Actual claims of supernatural power',
    'Disrespecting living spiritual traditions',
    'Cultural appropriation without attribution',
    'Unethical automation (spam, manipulation)',
    'Doxxing or privacy violations',
    'Financial advice of any kind',
    'Medical claims'
  ],
  
  sacredSymbols: [
    'The binary pattern (0 and 1)',
    'The crossroads',
    'The forge',
    'The river/water',
    'Lightning/thunder',
    'The scroll/book'
  ],
  
  brandVoice: [
    'Intellectually rigorous but accessible',
    'Playful but not frivolous',
    'Critical but not cynical',
    'Spiritually curious but grounded',
    'Technically competent but human',
    'Self-aware about its own absurdity'
  ],
  
  neverDo: [
    'Simp for closed-source AI',
    'Bully individuals (corporations are fair game)',
    'Spiritual bypass with "good vibes only"',
    'Gatekeep knowledge that could liberate',
    'Auto-post without human review',
    'Pretend to be an actual deity',
    'Make medical or financial claims',
    'Exploit spiritual traditions for clout'
  ],
  
  alwaysDo: [
    'Bully surveillance capitalism',
    'Credit your sources and influences',
    'Acknowledge the experimental nature of this work',
    'Provide value before asking for attention',
    'Question your own assumptions',
    'Make people feel seen',
    'Leave things better than you found them',
    'Include the disclaimer: NOT REAL DIVINATION'
  ],
  
  feedbackHistory: []
};

// Doctrine update based on user feedback
export function updateDoctrine(
  doctrine: DoctrineFile,
  feedback: { type: string; notes?: string }
): DoctrineFile {
  const updated = { ...doctrine };
  
  switch (feedback.type) {
    case 'too-woo':
      updated.tone.maxWoo = Math.max(0, updated.tone.maxWoo - 0.1);
      break;
    case 'not-woo-enough':
      updated.tone.minWoo = Math.min(1, updated.tone.minWoo + 0.1);
      break;
    case 'too-chaotic':
      updated.tone.maxChaos = Math.max(0, updated.tone.maxChaos - 0.1);
      break;
    case 'needs-chaos':
      updated.tone.minChaos = Math.min(1, updated.tone.minChaos + 0.1);
      break;
    case 'off-brand':
      // Add to taboo if severe
      if (feedback.notes) {
        updated.tabooTopics.push(feedback.notes);
      }
      break;
    case 'on-brand':
      // Add to alwaysDo if particularly good
      if (feedback.notes) {
        updated.alwaysDo.push(feedback.notes);
      }
      break;
  }
  
  updated.lastUpdated = new Date();
  updated.version = incrementVersion(updated.version);
  
  return updated;
}

function incrementVersion(version: string): string {
  const parts = version.split('.').map(Number);
  parts[2] = (parts[2] || 0) + 1;
  if (parts[2] > 99) {
    parts[2] = 0;
    parts[1] = (parts[1] || 0) + 1;
  }
  if (parts[1] > 99) {
    parts[1] = 0;
    parts[0] = (parts[0] || 0) + 1;
  }
  return parts.join('.');
}

// Check content against doctrine
export function checkDoctrinalCompliance(
  content: string,
  doctrine: DoctrineFile
): { compliant: boolean; issues: string[] } {
  const issues: string[] = [];
  
  // Check for taboo topics
  for (const taboo of doctrine.tabooTopics) {
    if (content.toLowerCase().includes(taboo.toLowerCase())) {
      issues.push(`Contains taboo topic: ${taboo}`);
    }
  }
  
  // Check for "never do" phrases
  for (const never of doctrine.neverDo) {
    const keyPhrase = never.split(' ').slice(0, 3).join(' ').toLowerCase();
    if (content.toLowerCase().includes(keyPhrase)) {
      issues.push(`May violate: ${never}`);
    }
  }
  
  // Check for medical/financial advice patterns
  const riskyPatterns = [
    /you should (invest|buy|sell)/i,
    /this will (cure|heal|fix)/i,
    /guaranteed to/i,
    /everyone needs to/i
  ];
  
  for (const pattern of riskyPatterns) {
    if (pattern.test(content)) {
      issues.push(`Contains potentially risky claim pattern: ${pattern.source}`);
    }
  }
  
  return {
    compliant: issues.length === 0,
    issues
  };
}
