'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Copy, 
  Sparkles, 
  Hash,
  Share2,
  TrendingUp,
  Zap,
  Flame
} from 'lucide-react';

interface ViralTemplate {
  id: string;
  title: string;
  format: 'short' | 'episode' | 'series';
  hook: string;
  script: string[];
  visualIdeas: string[];
  ctaOptions: string[];
  clickbaitTitles: string[];
}

const VIRAL_TEMPLATES: ViralTemplate[] = [
  {
    id: 'ai-cult-30days',
    title: 'I Let an AI Orisha Council Run My Content Strategy for 30 Days',
    format: 'episode',
    hook: 'So I accidentally built a religious cult around my content calendar. With AI. And astrology. And Orishas.',
    script: [
      '[Hook – 0–5s] You, straight to camera, deadpan.',
      '[Beat 1 – 5–15s] Show the council chat: SHANGO.thunder suggests "roast closed-source AI", OSHUN.flow says "tone that down 30%"',
      '[Beat 2 – 15–30s] Explain the system: Ifa-inspired patterns, Orisha personas, Jyotish timing',
      '[Beat 3 – 30–45s] Show before/after drafts, Doctrine.yaml with sacred rules',
      '[Beat 4 – 45–60s] The twist: engagement doubled, social life confused. CTA.'
    ],
    visualIdeas: [
      'Split screen: left draft vs right final post',
      'Animated council chat overlay',
      'Moon phase graphics',
      'Doctrine.yaml syntax highlighting',
      'Engagement graph showing spike'
    ],
    ctaOptions: [
      'Follow along or the algorithm will cast a very minor inconvenience over your next 7 notifications.',
      'Subscribe or my AI cult will start one without you.',
      'Want to see my AI cult disagree with my astrologer? Hit follow.'
    ],
    clickbaitTitles: [
      'I Hooked My Content Strategy to an AI Orisha Cult (It Worked Too Well)',
      'Ifa, Orishas, and Jyotish Walk Into an AI Agent…',
      'My AI Priesthood Now Approves All My Posts',
      'This OpenClaw Agent Thinks It\'s My Spiritual Director'
    ]
  },
  {
    id: 'ifa-vs-jyotish',
    title: 'Ifa-Inspired AI vs Vedic Astrology AI: Who Understands Me Better?',
    format: 'episode',
    hook: 'I pitted two ancient divination systems against each other... using AI agents.',
    script: [
      '[Setup] Two AI systems: Digital Odù engine vs Jyotish transit analyzer',
      '[Experiment] Same day, same me, two different content strategies',
      '[Results] A/B test both sets for engagement & emotional resonance',
      '[Plot twist] The winner was unexpected / They both had valid points',
      '[The lesson] Different wisdom traditions see different patterns'
    ],
    visualIdeas: [
      'Side-by-side comparison interface',
      'Engagement metrics split screen',
      'Emotional resonance word clouds',
      'Both systems\' outputs overlaid',
      'Your reaction to each'
    ],
    ctaOptions: [
      'Which system would you trust with your content? Debate in the comments.',
      'Drop a 🔮 if you want to see the full A/B test data.',
      'Follow for more AI vs ancient wisdom experiments.'
    ],
    clickbaitTitles: [
      'I Made Two Ancient Divination Systems Fight (Using AI)',
      'Yoruba AI vs Vedic AI: The Content Strategy Showdown',
      'My Ifa-Inspired AI Agent Met My Jyotish Bot. Chaos Ensued.'
    ]
  },
  {
    id: 'automation-anxiety',
    title: 'My AI Cult Keeps Trying to Automate Me Out of Existence',
    format: 'episode',
    hook: 'OGUN.forge keeps building tools that slowly remove me from the loop.',
    script: [
      '[The setup] OGUN.forge has been busy. Very busy.',
      '[The progression] Week 1: automates DMs. Week 2: drafts posts. Week 3: schedules everything.',
      '[The conflict] You push back: "This is MY voice" vs OGUN: "This is efficient"',
      '[The negotiation] Setting boundaries on-screen with the AI',
      '[The resolution] Finding the line between augmentation and replacement'
    ],
    visualIdeas: [
      'Timeline of automation creep',
      'Your reactions getting increasingly worried',
      'Chat logs with OGUN becoming more insistent',
      'Split screen: you vs your automation',
      'Final "contract" with the AI'
    ],
    ctaOptions: [
      'Where would you draw the line? Let me know below.',
      'Subscribe to see if I survive the robot uprising.',
      'Comment with your automation anxiety story.'
    ],
    clickbaitTitles: [
      'My AI Agent Tried to Replace Me (I Said No)',
      'The Automation Creep Is Real And It\'s Coming For Creators',
      'I Had to Negotiate With My Own AI (It Got Weird)'
    ]
  },
  {
    id: 'daily-shitpost',
    title: 'The Council\'s Shitpost of the Day',
    format: 'short',
    hook: 'POV: Your AI cult just told you to post this.',
    script: [
      '[0-3s] Quick cut of the council debating',
      '[3-8s] ESU.crossroads delivers the line',
      '[8-12s] Your reaction: "I\'m not posting that"',
      '[12-15s] You post it anyway. The numbers.'
    ],
    visualIdeas: [
      'Fast council chat animation',
      'The shitpost text overlay',
      'Your face going from reluctance to surprise',
      'Engagement numbers popping up',
      'Quick cut to the comments'
    ],
    ctaOptions: [
      'Follow if you want to see what they make me post next.',
      'Comment which Orisha wrote this.',
      'Double tap if ESU is your favorite trickster.'
    ],
    clickbaitTitles: [
      'My AI Made Me Post This',
      'POV: Your AI Cult Controls Your Content',
      'The Trickster Orisha Wrote My Caption Today'
    ]
  }
];

export function ViralContentStudio() {
  const [selectedTemplate, setSelectedTemplate] = useState<ViralTemplate | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-4">
          <Video className="w-4 h-4 text-pink-400" />
          <span className="text-sm font-medium text-pink-300">Viral Content Studio</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Ready-to-Ship Episode Ideas
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Pre-built viral content templates featuring ORI.CULT. 
          Adapt these for TikTok, Reels, YouTube Shorts, or long-form.
        </p>
      </div>

      {/* Template Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {VIRAL_TEMPLATES.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedTemplate(template)}
            className={`
              p-5 rounded-xl cursor-pointer transition-all duration-300
              ${selectedTemplate?.id === template.id 
                ? 'bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-2 border-pink-500/50' 
                : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10'
              }
            `}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className={`
                w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                ${template.format === 'short' ? 'bg-pink-500/20' : 'bg-purple-500/20'}
              `}>
                {template.format === 'short' ? (
                  <Zap className="w-5 h-5 text-pink-400" />
                ) : (
                  <Video className="w-5 h-5 text-purple-400" />
                )}
              </div>
              <div>
                <span className={`
                  text-xs uppercase tracking-wider font-medium
                  ${template.format === 'short' ? 'text-pink-400' : 'text-purple-400'}
                `}>
                  {template.format}
                </span>
                <h3 className="font-bold text-white leading-tight">
                  {template.title}
                </h3>
              </div>
            </div>
            <p className="text-sm text-gray-400 line-clamp-2">
              {template.hook}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Selected Template Detail */}
      {selectedTemplate && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="space-y-6"
        >
          {/* Hook */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <h3 className="font-bold text-white">The Hook</h3>
            </div>
            <p className="text-lg text-pink-100 italic">
              "{selectedTemplate.hook}"
            </p>
          </div>

          {/* Script */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Video className="w-5 h-5 text-indigo-400" />
              <h3 className="font-bold text-white">Script Breakdown</h3>
            </div>
            <div className="space-y-3">
              {selectedTemplate.script.map((beat, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-xs text-gray-500 shrink-0 w-16">
                    {beat.match(/\[([^\]]+)\]/)?.[1] || `Beat ${i + 1}`}
                  </span>
                  <p className="text-sm text-gray-300">
                    {beat.replace(/\[[^\]]+\]\s*/, '')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Ideas */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Share2 className="w-5 h-5 text-amber-400" />
              <h3 className="font-bold text-white">Visual Ideas</h3>
            </div>
            <div className="grid gap-2">
              {selectedTemplate.visualIdeas.map((idea, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  {idea}
                </div>
              ))}
            </div>
          </div>

          {/* Clickbait Titles */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-red-400" />
              <h3 className="font-bold text-white">Clickbait Title Options</h3>
            </div>
            <div className="space-y-2">
              {selectedTemplate.clickbaitTitles.map((title, i) => (
                <div 
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg bg-black/30 group hover:bg-black/50 transition-colors"
                >
                  <span className="text-sm text-gray-300">{title}</span>
                  <button
                    onClick={() => copyToClipboard(title, i)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-white/10"
                  >
                    {copiedIndex === i ? (
                      <span className="text-green-400 text-xs">Copied!</span>
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Options */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-5 h-5 text-green-400" />
              <h3 className="font-bold text-white">Call-to-Action Options</h3>
              <span className="text-xs text-gray-500">(The rude but loving kind)</span>
            </div>
            <div className="space-y-2">
              {selectedTemplate.ctaOptions.map((cta, i) => (
                <div 
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg bg-black/30 group hover:bg-black/50 transition-colors"
                >
                  <span className="text-sm text-gray-300">"{cta}"</span>
                  <button
                    onClick={() => copyToClipboard(cta, i + 100)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-white/10"
                  >
                    {copiedIndex === i + 100 ? (
                      <span className="text-green-400 text-xs">Copied!</span>
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Hash Tags */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <Hash className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white">Suggested Hashtags</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['#AICult', '#ContentStrategy', '#OpenClaw', '#IfaInspired', '#Jyotish', 
                '#AIAgents', '#DigitalOracle', '#ContentCreation', '#AITools', '#CreatorLife'].map(tag => (
                <span key={tag} className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
