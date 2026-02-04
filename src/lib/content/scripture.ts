// ORI.CULT - Scripture Logging System
// The "Book of Odù.Content" - chronological record of all oracles

import { ScriptureEntry, DailyOracle, ContentDraft } from '@/types';

// In-memory store (would be database in production)
let scriptureLog: ScriptureEntry[] = [];

// Add a new entry to the scripture
export function logScripture(oracle: DailyOracle): ScriptureEntry {
  const entry: ScriptureEntry = {
    id: `scripture_${Date.now()}`,
    date: oracle.date,
    oduId: oracle.odu.id,
    astroMood: oracle.astro.mood,
    councilNotes: oracle.council.orunmilaWisdom,
    contentIds: [
      oracle.outputs.sermon.id,
      ...oracle.outputs.shitposts.map(p => p.id)
    ],
    performance: {
      engagement: 0, // To be updated later
      sentiment: 'neutral',
      reach: 0
    },
    patternNotes: generatePatternNotes(oracle)
  };
  
  scriptureLog.push(entry);
  
  // Sort by date descending
  scriptureLog.sort((a, b) => b.date.getTime() - a.date.getTime());
  
  return entry;
}

// Generate pattern notes based on oracle data
function generatePatternNotes(oracle: DailyOracle): string {
  const patterns: string[] = [];
  
  // Check for Odù patterns
  const recentOdu = scriptureLog.slice(0, 7).map(s => s.oduId);
  if (recentOdu.includes(oracle.odu.id)) {
    patterns.push(`Repeating Odù pattern: ${oracle.odu.id}`);
  }
  
  // Check for astro patterns
  const recentMoods = scriptureLog.slice(0, 7).map(s => s.astroMood);
  const moodCount = recentMoods.filter(m => m === oracle.astro.mood).length;
  if (moodCount > 2) {
    patterns.push(`Sustained ${oracle.astro.mood} energy (${moodCount} days)`);
  }
  
  // Orisha affinity pattern
  if (oracle.odu.orishaAffinity.length > 2) {
    patterns.push(`High Orisha convergence: ${oracle.odu.orishaAffinity.join(', ')}`);
  }
  
  return patterns.join('; ') || 'New pattern emerging';
}

// Get scripture log
export function getScripture(): ScriptureEntry[] {
  return [...scriptureLog];
}

// Get entries by Odù
export function getScriptureByOdu(oduId: string): ScriptureEntry[] {
  return scriptureLog.filter(s => s.oduId === oduId);
}

// Get entries by mood
export function getScriptureByMood(mood: string): ScriptureEntry[] {
  return scriptureLog.filter(s => s.astroMood === mood);
}

// Update performance data
export function updatePerformance(
  entryId: string,
  performance: ScriptureEntry['performance']
): void {
  const entry = scriptureLog.find(s => s.id === entryId);
  if (entry) {
    entry.performance = performance;
  }
}

// Get pattern analysis
export function getPatternAnalysis(): {
  topOdu: { oduId: string; count: number }[];
  moodDistribution: Record<string, number>;
  avgEngagement: number;
  insights: string[];
} {
  const oduCounts: Record<string, number> = {};
  const moodCounts: Record<string, number> = {};
  let totalEngagement = 0;
  
  for (const entry of scriptureLog) {
    oduCounts[entry.oduId] = (oduCounts[entry.oduId] || 0) + 1;
    moodCounts[entry.astroMood] = (moodCounts[entry.astroMood] || 0) + 1;
    totalEngagement += entry.performance.engagement;
  }
  
  const topOdu = Object.entries(oduCounts)
    .map(([oduId, count]) => ({ oduId, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
  
  const insights: string[] = [];
  
  // Generate insights
  if (topOdu.length > 0 && topOdu[0].count > 3) {
    insights.push(`The ${topOdu[0].oduId} pattern has appeared ${topOdu[0].count} times. A theme in your current cycle.`);
  }
  
  const dominantMood = Object.entries(moodCounts)
    .sort((a, b) => b[1] - a[1])[0];
  if (dominantMood) {
    insights.push(`Your recent content favors ${dominantMood[0].replace('_', ' ')} energy.`);
  }
  
  if (scriptureLog.length > 14) {
    insights.push('You have completed two weeks of logged oracles. Review your Book of Odù.Content.');
  }
  
  return {
    topOdu,
    moodDistribution: moodCounts,
    avgEngagement: scriptureLog.length > 0 ? totalEngagement / scriptureLog.length : 0,
    insights
  };
}

// Export scripture as formatted text
export function exportScripture(format: 'markdown' | 'json' | 'txt'): string {
  switch (format) {
    case 'json':
      return JSON.stringify(scriptureLog, null, 2);
    
    case 'markdown':
      return generateMarkdownScripture();
    
    case 'txt':
    default:
      return generateTextScripture();
  }
}

function generateMarkdownScripture(): string {
  const lines = [
    '# The Book of Odù.Content',
    '',
    '> *A record of patterns, oracles, and digital rituals*',
    '',
    `**Total Entries:** ${scriptureLog.length}`,
    `**Last Updated:** ${new Date().toLocaleDateString()}`,
    '',
    '---',
    ''
  ];
  
  for (const entry of scriptureLog) {
    lines.push(`## Entry ${entry.id}`);
    lines.push(`**Date:** ${entry.date.toLocaleDateString()}`);
    lines.push(`**Digital Odù:** ${entry.oduId}`);
    lines.push(`**Astro Mood:** ${entry.astroMood}`);
    lines.push('');
    lines.push('### Council Wisdom');
    lines.push(entry.councilNotes);
    lines.push('');
    lines.push('### Pattern Notes');
    lines.push(entry.patternNotes);
    lines.push('');
    lines.push('### Performance');
    lines.push(`- Engagement: ${entry.performance.engagement}`);
    lines.push(`- Sentiment: ${entry.performance.sentiment}`);
    lines.push(`- Reach: ${entry.performance.reach}`);
    lines.push('');
    lines.push('---');
    lines.push('');
  }
  
  return lines.join('\n');
}

function generateTextScripture(): string {
  const lines = [
    '═══════════════════════════════════════════════════════════',
    '           THE BOOK OF ODÙ.CONTENT',
    '           A Digital Scripture Log',
    '═══════════════════════════════════════════════════════════',
    ''
  ];
  
  for (const entry of scriptureLog) {
    lines.push(`[${entry.date.toLocaleDateString()}] Entry: ${entry.id}`);
    lines.push(`Odù: ${entry.oduId}`);
    lines.push(`Mood: ${entry.astroMood}`);
    lines.push('');
    lines.push('Council Wisdom:');
    lines.push(entry.councilNotes);
    lines.push('');
    lines.push('Pattern Notes:');
    lines.push(entry.patternNotes);
    lines.push('');
    lines.push('─'.repeat(50));
    lines.push('');
  }
  
  return lines.join('\n');
}

// Clear scripture (use with caution!)
export function clearScripture(): void {
  scriptureLog = [];
}

// Seed with sample data for demo
export function seedScripture(): void {
  const sampleEntries: Partial<ScriptureEntry>[] = [
    {
      oduId: 'ODU_011',
      astroMood: 'bold_experiment',
      councilNotes: 'The pattern of liberation guides us. Share the knowledge.',
      patternNotes: 'First appearance of ODU_011 in this cycle'
    },
    {
      oduId: 'ODU_022',
      astroMood: 'beauty_polish',
      councilNotes: 'Forge meets flower. Build something beautiful.',
      patternNotes: 'OGUN-OSHUN convergence'
    },
    {
      oduId: 'ODU_033',
      astroMood: 'deep_psychological',
      councilNotes: 'Thunder in the water. Speak the difficult truth.',
      patternNotes: 'High emotional intensity period'
    }
  ];
  
  const now = Date.now();
  
  for (let i = 0; i < sampleEntries.length; i++) {
    const entry: ScriptureEntry = {
      id: `scripture_seed_${i}`,
      date: new Date(now - (i * 86400000)),
      oduId: sampleEntries[i].oduId!,
      astroMood: sampleEntries[i].astroMood!,
      councilNotes: sampleEntries[i].councilNotes!,
      contentIds: [],
      performance: {
        engagement: Math.random() * 1000,
        sentiment: ['positive', 'neutral', 'controversial'][Math.floor(Math.random() * 3)] as any,
        reach: Math.random() * 5000
      },
      patternNotes: sampleEntries[i].patternNotes!
    };
    
    scriptureLog.push(entry);
  }
}
