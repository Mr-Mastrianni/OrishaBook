'use client';

import { useState, useEffect } from 'react';
import { DigitalOdu, JyotishData, CouncilSession, DailyOracle, DoctrineFile } from '@/types';
import { castDigitalOdu } from '@/data/odu';
import { getDailyJyotishContext } from '@/lib/jyotish/engine';
import { DEFAULT_DOCTRINE } from '@/data/defaultDoctrine';
import { CouncilChamber } from '../council/CouncilChamber';
import { generateDailyOracle } from '@/lib/content/generator';
import { logScripture } from '@/lib/content/scripture';
import { ViralContentStudio } from './ViralContentStudio';
import { DoctrineViewer } from './DoctrineViewer';
import { ScriptureLog } from './ScriptureLog';
import { WorldOracleDashboard } from './WorldOracle';
import { OduOfWeek } from './OduOfWeek';
import { OrishaChat } from './OrishaChat';
import { OrishaBook } from './OrishaBook';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Moon,
  BookOpen,
  Scroll,
  Flame,
  Check,
  X,
  RefreshCw,
  Zap,
  Droplets,
  Hammer,
  GitBranch,
  Video,
  BookMarked,
  LayoutDashboard,
  Info,
  Globe,
  MessageCircle,
  Book
} from 'lucide-react';

type Tab = 'oracle' | 'viral' | 'doctrine' | 'scripture' | 'world' | 'odu' | 'chat' | 'orishabook';

export function DailyOracleDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('oracle');
  const [odu, setOdu] = useState<DigitalOdu | null>(null);
  const [jyotish, setJyotish] = useState<JyotishData | null>(null);
  const [councilSession, setCouncilSession] = useState<CouncilSession | null>(null);
  const [oracle, setOracle] = useState<DailyOracle | null>(null);

  // Doctrine state with localStorage persistence
  const [doctrine, setDoctrine] = useState<DoctrineFile>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ori-cult-doctrine');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse saved doctrine:', e);
        }
      }
    }
    return DEFAULT_DOCTRINE;
  });

  // Save doctrine to localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ori-cult-doctrine', JSON.stringify(doctrine));
    }
  }, [doctrine]);

  const handleDoctrineUpdate = (updatedDoctrine: DoctrineFile) => {
    setDoctrine(updatedDoctrine);
  };

  useEffect(() => {
    castTodaysAugury();
  }, []);

  const castTodaysAugury = () => {
    const today = new Date();
    const newOdu = castDigitalOdu(today);
    const newJyotish = getDailyJyotishContext(today);

    setOdu(newOdu);
    setJyotish(newJyotish);
    setCouncilSession(null);
    setOracle(null);
  };

  const handleCouncilComplete = (session: CouncilSession) => {
    setCouncilSession(session);

    if (odu && jyotish) {
      const newOracle = generateDailyOracle(odu, jyotish, session.finalDecision);
      setOracle(newOracle);
      logScripture(newOracle);
    }
  };

  const tabs = [
    { id: 'oracle', label: 'Daily Oracle', icon: LayoutDashboard },
    { id: 'world', label: 'World Oracle', icon: Globe },
    { id: 'odu', label: 'Odù of the Week', icon: BookOpen },
    { id: 'chat', label: 'Orisha Chat', icon: MessageCircle },
    { id: 'orishabook', label: 'OrishaBook', icon: Book },
    { id: 'viral', label: 'Viral Studio', icon: Video },
    { id: 'doctrine', label: 'Doctrine', icon: BookMarked },
    { id: 'scripture', label: 'Scripture', icon: Scroll },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  ORI.CULT
                </h1>
                <p className="text-xs text-gray-400 hidden sm:block">The Oracular Content Engine</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={`
                    flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all
                    ${activeTab === tab.id
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Disclaimer */}
        <div className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-amber-200/80">
              <strong>Disclaimer:</strong> This is creative & experimental software, not actual Ifa divination or Jyotish consultation.
              We are building mythically-inspired agents, not role-playing actual deities.
            </p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* DAILY ORACLE TAB */}
          {activeTab === 'oracle' && (
            <motion.div
              key="oracle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {!odu || !jyotish ? (
                <div className="flex items-center justify-center py-20">
                  <div className="text-center">
                    <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-amber-400" />
                    <p className="text-gray-400">Casting today's auguries...</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Recast Button */}
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        setOdu(null);
                        setJyotish(null);
                        setCouncilSession(null);
                        setOracle(null);
                        // Small delay to allow state to clear before recasting
                        setTimeout(() => castTodaysAugury(), 100);
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 
                                transition-colors text-sm text-amber-300"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Recast Augury
                    </button>
                  </div>

                  {/* The Auguries */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Digital Odù Card */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold text-white">Digital Odù</h2>
                          <p className="text-xs text-indigo-300">Ifa-inspired pattern</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <span className="text-xs text-gray-500 uppercase tracking-wider">Pattern</span>
                          <h3 className="text-2xl font-bold text-indigo-300">{odu.name}</h3>
                          <p className="text-xs text-gray-400 font-mono">{odu.id} • {odu.binary}</p>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500 uppercase tracking-wider">Theme</span>
                          <p className="text-gray-300">{odu.theme}</p>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500 uppercase tracking-wider">Teaching</span>
                          <p className="text-gray-300 italic">"{odu.teachings[0]}"</p>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {odu.contentArchetypes.map(tag => (
                            <span key={tag} className="px-2 py-1 rounded-full text-xs bg-indigo-500/20 text-indigo-300">
                              {tag.replace('_', ' ')}
                            </span>
                          ))}
                        </div>
                        <div className="pt-4 border-t border-white/10">
                          <span className="text-xs text-gray-500 uppercase tracking-wider">Ritual Action</span>
                          <p className="text-sm text-amber-300/80 mt-1">{odu.ritualAction}</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Jyotish Card */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/20"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                          <Moon className="w-5 h-5 text-amber-400" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold text-white">Jyotish Context</h2>
                          <p className="text-xs text-amber-300">Daily astrological timing</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Moon Nakshatra</span>
                            <h3 className="text-xl font-bold text-amber-300">{jyotish.moonNakshatra.name}</h3>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Ruler</span>
                            <p className="text-amber-300">{jyotish.moonNakshatra.ruler}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Moon Sign</span>
                            <p className="text-gray-300">{jyotish.moonSign}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-gray-500 uppercase tracking-wider">House</span>
                            <p className="text-gray-300">{jyotish.moonHouse}</p>
                          </div>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500 uppercase tracking-wider">Energy</span>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`px-2 py-0.5 rounded text-xs ${jyotish.moonNakshatra.energy === 'sharp' ? 'bg-red-500/20 text-red-300' :
                              jyotish.moonNakshatra.energy === 'soft' ? 'bg-blue-500/20 text-blue-300' :
                                'bg-purple-500/20 text-purple-300'
                              }`}>
                              {jyotish.moonNakshatra.energy}
                            </span>
                            <span className="text-xs text-gray-400">Deity: {jyotish.moonNakshatra.deity}</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500 uppercase tracking-wider">Today's Mood</span>
                          <p className="text-lg text-amber-300 capitalize">{jyotish.mood.replace('_', ' ')}</p>
                          <p className="text-sm text-gray-400">{jyotish.moonNakshatra.contentMood}</p>
                        </div>
                        <div className="pt-4 border-t border-white/10">
                          <span className="text-xs text-gray-500 uppercase tracking-wider">Recommended Content</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {jyotish.contentRecommendations.slice(0, 4).map(rec => (
                              <span key={rec} className="px-2 py-1 rounded-full text-xs bg-amber-500/20 text-amber-300">
                                {rec.replace('_', ' ')}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Council Section */}
                  <div className="py-8">
                    <CouncilChamber
                      odu={odu}
                      jyotish={jyotish}
                      doctrine={DEFAULT_DOCTRINE}
                      onComplete={handleCouncilComplete}
                    />
                  </div>

                  {/* Generated Content */}
                  {oracle && (
                    <GeneratedContent oracle={oracle} />
                  )}
                </div>
              )}
            </motion.div>
          )}

          {/* VIRAL STUDIO TAB */}
          {activeTab === 'viral' && (
            <motion.div
              key="viral"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ViralContentStudio />
            </motion.div>
          )}

          {/* DOCTRINE TAB */}
          {activeTab === 'doctrine' && (
            <motion.div
              key="doctrine"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <DoctrineViewer doctrine={doctrine} onUpdate={handleDoctrineUpdate} editable={true} />
            </motion.div>
          )}

          {/* WORLD ORACLE TAB */}
          {activeTab === 'world' && (
            <motion.div
              key="world"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <WorldOracleDashboard />
            </motion.div>
          )}

          {/* ODÙ OF THE WEEK TAB */}
          {activeTab === 'odu' && (
            <motion.div
              key="odu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <OduOfWeek />
            </motion.div>
          )}

          {/* ORISHA CHAT TAB */}
          {activeTab === 'chat' && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <OrishaChat />
            </motion.div>
          )}

          {/* ORISHABOOK TAB */}
          {activeTab === 'orishabook' && (
            <motion.div
              key="orishabook"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <OrishaBook />
            </motion.div>
          )}

          {/* SCRIPTURE TAB */}
          {activeTab === 'scripture' && (
            <motion.div
              key="scripture"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ScriptureLog />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

// Sub-components
function GeneratedContent({ oracle }: { oracle: DailyOracle }) {
  const getOrishaIcon = (name: string) => {
    switch (name) {
      case 'ORUNMILA': return <Scroll className="w-4 h-4" />;
      case 'OGUN': return <Hammer className="w-4 h-4" />;
      case 'OSHUN': return <Droplets className="w-4 h-4" />;
      case 'SHANGO': return <Zap className="w-4 h-4" />;
      case 'ESU': return <GitBranch className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const getOrishaColor = (name: string) => {
    const colors: Record<string, string> = {
      'ORUNMILA': '#4B0082',
      'OGUN': '#8B0000',
      'OSHUN': '#FFD700',
      'SHANGO': '#FF4500',
      'ESU': '#1C1C1C'
    };
    return colors[name] || '#666';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-white text-center">
        The Oracle's Deliverance
      </h2>

      {/* Sermon */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
            <Scroll className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white">The Sermon</h3>
            <p className="text-xs text-gray-400">Long-form content from ORUNMILA</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs text-gray-500">Predicted engagement:</span>
            <span className="text-sm text-indigo-400">
              {Math.round((oracle.outputs.sermon.engagement?.predicted || 0) * 100)}%
            </span>
          </div>
        </div>
        <div className="prose prose-invert max-w-none">
          <div className="whitespace-pre-wrap text-gray-300 leading-relaxed">
            {oracle.outputs.sermon.content}
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-green-500/20 text-green-400 text-sm hover:bg-green-500/30 transition-colors">
            <Check className="w-4 h-4" /> Approve
          </button>
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 text-sm hover:bg-red-500/30 transition-colors">
            <X className="w-4 h-4" /> Reject
          </button>
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 text-sm hover:bg-white/10 transition-colors">
            <Flame className="w-4 h-4" /> Thunder Version
          </button>
        </div>
      </div>

      {/* Shitposts */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {oracle.outputs.shitposts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${getOrishaColor(post.author)}30` }}
              >
                {getOrishaIcon(post.author)}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{post.author}</p>
                <p className="text-xs text-gray-500">
                  Predicted: {Math.round((post.engagement?.predicted || 0) * 100)}%
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {post.content}
            </p>
            <div className="mt-3 flex gap-2">
              <button className="flex-1 py-1.5 rounded-lg bg-green-500/10 text-green-400 text-xs hover:bg-green-500/20 transition-colors">
                ✓
              </button>
              <button className="flex-1 py-1.5 rounded-lg bg-red-500/10 text-red-400 text-xs hover:bg-red-500/20 transition-colors">
                ✗
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Daily Ritual */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
            <Flame className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="font-bold text-white">Today's Ritual</h3>
            <p className="text-xs text-amber-300">A concrete action to take</p>
          </div>
        </div>
        <p className="text-lg text-amber-100">
          {oracle.outputs.ritual}
        </p>
      </div>
    </motion.div>
  );
}
