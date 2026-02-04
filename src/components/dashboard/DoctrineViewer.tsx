'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DoctrineFile, DoctrineFeedback } from '@/types';
import { 
  Book, 
  Shield, 
  Heart, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Edit3,
  Save,
  RefreshCw,
  SlidersHorizontal,
  Plus,
  Trash2
} from 'lucide-react';

interface DoctrineViewerProps {
  doctrine?: DoctrineFile;
  onUpdate?: (doctrine: DoctrineFile) => void;
  editable?: boolean;
}

export function DoctrineViewer({ 
  doctrine = DEFAULT_DOCTRINE, 
  onUpdate,
  editable = true 
}: DoctrineViewerProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [localDoctrine, setLocalDoctrine] = useState<DoctrineFile>(doctrine);
  const [activeTab, setActiveTab] = useState<'values' | 'tone' | 'rules' | 'history'>('values');
  const [newValue, setNewValue] = useState('');
  const [newNeverDo, setNewNeverDo] = useState('');
  const [newAlwaysDo, setNewAlwaysDo] = useState('');

  const handleSave = () => {
    onUpdate?.(localDoctrine);
    setIsEditing(false);
  };

  const handleReset = () => {
    setLocalDoctrine(doctrine);
    setIsEditing(false);
  };

  const updateTone = (key: 'minWoo' | 'maxWoo' | 'minChaos' | 'maxChaos', value: number) => {
    setLocalDoctrine(prev => ({
      ...prev,
      tone: { ...prev.tone, [key]: value }
    }));
  };

  const addCoreValue = () => {
    if (newValue.trim()) {
      setLocalDoctrine(prev => ({
        ...prev,
        coreValues: [...prev.coreValues, newValue.trim()]
      }));
      setNewValue('');
    }
  };

  const removeCoreValue = (index: number) => {
    setLocalDoctrine(prev => ({
      ...prev,
      coreValues: prev.coreValues.filter((_, i) => i !== index)
    }));
  };

  const addNeverDo = () => {
    if (newNeverDo.trim()) {
      setLocalDoctrine(prev => ({
        ...prev,
        neverDo: [...prev.neverDo, newNeverDo.trim()]
      }));
      setNewNeverDo('');
    }
  };

  const removeNeverDo = (index: number) => {
    setLocalDoctrine(prev => ({
      ...prev,
      neverDo: prev.neverDo.filter((_, i) => i !== index)
    }));
  };

  const addAlwaysDo = () => {
    if (newAlwaysDo.trim()) {
      setLocalDoctrine(prev => ({
        ...prev,
        alwaysDo: [...prev.alwaysDo, newAlwaysDo.trim()]
      }));
      setNewAlwaysDo('');
    }
  };

  const removeAlwaysDo = (index: number) => {
    setLocalDoctrine(prev => ({
      ...prev,
      alwaysDo: prev.alwaysDo.filter((_, i) => i !== index)
    }));
  };

  const tabs = [
    { id: 'values', label: 'Core Values', icon: Heart },
    { id: 'tone', label: 'Tone Settings', icon: SlidersHorizontal },
    { id: 'rules', label: 'Do & Don\'t', icon: Shield },
    { id: 'history', label: 'History', icon: Book },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
            <Book className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">The Doctrine</h2>
            <p className="text-xs text-gray-400">
              Version {localDoctrine.version} • Last updated {new Date(localDoctrine.lastUpdated).toLocaleDateString()}
            </p>
          </div>
        </div>
        
        {editable && (
          <div className="flex items-center gap-2">
            {isEditing && (
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 transition-colors"
              >
                <RefreshCw className="w-4 h-4" /> Cancel
              </button>
            )}
            <button
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
                ${isEditing 
                  ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                  : 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30'
                }
              `}
            >
              {isEditing ? (
                <><Save className="w-4 h-4" /> Save Changes</>
              ) : (
                <><Edit3 className="w-4 h-4" /> Edit Doctrine</>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors
              ${activeTab === tab.id 
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }
            `}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Core Values Tab */}
        {activeTab === 'values' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20"
          >
            <h3 className="text-lg font-bold text-white mb-4">Core Values</h3>
            <div className="grid gap-3">
              {localDoctrine.coreValues.map((value, i) => (
                <div 
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5"
                >
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs text-indigo-400">{i + 1}</span>
                  </div>
                  {isEditing ? (
                    <div className="flex-1 flex items-center gap-2">
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => {
                          const newValues = [...localDoctrine.coreValues];
                          newValues[i] = e.target.value;
                          setLocalDoctrine({ ...localDoctrine, coreValues: newValues });
                        }}
                        className="flex-1 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-amber-500 py-1"
                      />
                      <button 
                        onClick={() => removeCoreValue(i)}
                        className="p-1 text-red-400 hover:bg-red-500/20 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <p className="text-gray-300">{value}</p>
                  )}
                </div>
              ))}
              
              {isEditing && (
                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="text"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    placeholder="Add new core value..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                    onKeyPress={(e) => e.key === 'Enter' && addCoreValue()}
                  />
                  <button
                    onClick={addCoreValue}
                    className="p-2 bg-amber-500/20 text-amber-400 rounded-lg hover:bg-amber-500/30"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Brand Voice */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-sm font-medium text-gray-400 mb-3">Brand Voice Characteristics</h4>
              <div className="flex flex-wrap gap-2">
                {localDoctrine.brandVoice.map((voice, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 rounded-full text-sm bg-purple-500/20 text-purple-300"
                  >
                    {voice}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Tone Settings Tab */}
        {activeTab === 'tone' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/30 to-rose-900/30 border border-pink-500/20"
          >
            <h3 className="text-lg font-bold text-white mb-6">Tone Parameters</h3>
            
            <div className="space-y-8">
              {/* Woo Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-gray-300">Spiritual / "Woo" Factor</label>
                  <span className="text-sm text-pink-400">
                    {Math.round(localDoctrine.tone.minWoo * 100)}% - {Math.round(localDoctrine.tone.maxWoo * 100)}%
                  </span>
                </div>
                
                {isEditing ? (
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-gray-500">Minimum</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={localDoctrine.tone.minWoo * 100}
                        onChange={(e) => updateTone('minWoo', parseInt(e.target.value) / 100)}
                        className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-pink-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500">Maximum</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={localDoctrine.tone.maxWoo * 100}
                        onChange={(e) => updateTone('maxWoo', parseInt(e.target.value) / 100)}
                        className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-pink-500"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 to-pink-400 rounded-full"
                      style={{ 
                        width: `${(localDoctrine.tone.maxWoo - localDoctrine.tone.minWoo) * 100}%`,
                        marginLeft: `${localDoctrine.tone.minWoo * 100}%`
                      }}
                    />
                  </div>
                )}
                
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Skeptical</span>
                  <span>Balanced</span>
                  <span>Mystical</span>
                </div>
              </div>

              {/* Chaos Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-gray-300">Chaos / Structure Balance</label>
                  <span className="text-sm text-rose-400">
                    {Math.round(localDoctrine.tone.minChaos * 100)}% - {Math.round(localDoctrine.tone.maxChaos * 100)}%
                  </span>
                </div>
                
                {isEditing ? (
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-gray-500">Minimum</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={localDoctrine.tone.minChaos * 100}
                        onChange={(e) => updateTone('minChaos', parseInt(e.target.value) / 100)}
                        className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-rose-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500">Maximum</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={localDoctrine.tone.maxChaos * 100}
                        onChange={(e) => updateTone('maxChaos', parseInt(e.target.value) / 100)}
                        className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-rose-500"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-400 to-rose-400 rounded-full"
                      style={{ 
                        width: `${(localDoctrine.tone.maxChaos - localDoctrine.tone.minChaos) * 100}%`,
                        marginLeft: `${localDoctrine.tone.minChaos * 100}%`
                      }}
                    />
                  </div>
                )}
                
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Structured</span>
                  <span>Balanced</span>
                  <span>Chaotic</span>
                </div>
              </div>
            </div>

            {/* Sacred Symbols */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-sm font-medium text-gray-400 mb-3">Sacred Symbols</h4>
              <div className="flex flex-wrap gap-2">
                {localDoctrine.sacredSymbols.map((symbol, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-sm bg-white/5 text-gray-300 border border-white/10"
                  >
                    {symbol}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Rules Tab */}
        {activeTab === 'rules' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Always Do */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/20">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-white">Always Do</h3>
              </div>
              <div className="space-y-2">
                {localDoctrine.alwaysDo.map((rule, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-green-500/10">
                    <span className="text-green-400 mt-0.5">✓</span>
                    {isEditing ? (
                      <div className="flex-1 flex items-center gap-2">
                        <input
                          type="text"
                          value={rule}
                          onChange={(e) => {
                            const newRules = [...localDoctrine.alwaysDo];
                            newRules[i] = e.target.value;
                            setLocalDoctrine({ ...localDoctrine, alwaysDo: newRules });
                          }}
                          className="flex-1 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-green-500 py-1"
                        />
                        <button 
                          onClick={() => removeAlwaysDo(i)}
                          className="p-1 text-red-400 hover:bg-red-500/20 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <p className="text-gray-300 text-sm">{rule}</p>
                    )}
                  </div>
                ))}
                
                {isEditing && (
                  <div className="flex items-center gap-2 mt-4">
                    <input
                      type="text"
                      value={newAlwaysDo}
                      onChange={(e) => setNewAlwaysDo(e.target.value)}
                      placeholder="Add new rule..."
                      className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
                      onKeyPress={(e) => e.key === 'Enter' && addAlwaysDo()}
                    />
                    <button
                      onClick={addAlwaysDo}
                      className="p-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Never Do */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/30 to-rose-900/30 border border-red-500/20">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 text-red-400" />
                <h3 className="text-lg font-bold text-white">Never Do</h3>
              </div>
              <div className="space-y-2">
                {localDoctrine.neverDo.map((rule, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-red-500/10">
                    <span className="text-red-400 mt-0.5">✗</span>
                    {isEditing ? (
                      <div className="flex-1 flex items-center gap-2">
                        <input
                          type="text"
                          value={rule}
                          onChange={(e) => {
                            const newRules = [...localDoctrine.neverDo];
                            newRules[i] = e.target.value;
                            setLocalDoctrine({ ...localDoctrine, neverDo: newRules });
                          }}
                          className="flex-1 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-red-500 py-1"
                        />
                        <button 
                          onClick={() => removeNeverDo(i)}
                          className="p-1 text-red-400 hover:bg-red-500/20 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <p className="text-gray-300 text-sm">{rule}</p>
                    )}
                  </div>
                ))}
                
                {isEditing && (
                  <div className="flex items-center gap-2 mt-4">
                    <input
                      type="text"
                      value={newNeverDo}
                      onChange={(e) => setNewNeverDo(e.target.value)}
                      placeholder="Add new prohibition..."
                      className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                      onKeyPress={(e) => e.key === 'Enter' && addNeverDo()}
                    />
                    <button
                      onClick={addNeverDo}
                      className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Taboo Topics */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/30 to-amber-900/30 border border-orange-500/20">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-orange-400" />
                <h3 className="text-lg font-bold text-white">Taboo Topics</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {localDoctrine.tabooTopics.map((topic, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 rounded-full text-sm bg-orange-500/20 text-orange-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <h3 className="text-lg font-bold text-white mb-4">Feedback History</h3>
            {localDoctrine.feedbackHistory.length === 0 ? (
              <div className="text-center py-8">
                <RefreshCw className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-500">No feedback recorded yet.</p>
                <p className="text-sm text-gray-600 mt-1">
                  As you approve/reject content, your doctrine will evolve.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {localDoctrine.feedbackHistory.slice().reverse().map((feedback, i) => (
                  <div 
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5"
                  >
                    <div className={`
                      w-2 h-2 rounded-full mt-2 shrink-0
                      ${feedback.feedback === 'on-brand' ? 'bg-green-400' : ''}
                      ${feedback.feedback === 'off-brand' ? 'bg-red-400' : ''}
                      ${feedback.feedback === 'too-woo' ? 'bg-purple-400' : ''}
                      ${feedback.feedback === 'not-woo-enough' ? 'bg-blue-400' : ''}
                      ${feedback.feedback === 'too-chaotic' ? 'bg-orange-400' : ''}
                      ${feedback.feedback === 'needs-chaos' ? 'bg-pink-400' : ''}
                    `} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white capitalize">
                          {feedback.feedback.replace('-', ' ')}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(feedback.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                      {feedback.notes && (
                        <p className="text-sm text-gray-400 mt-1">{feedback.notes}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

// Default doctrine for fallback
const DEFAULT_DOCTRINE: DoctrineFile = {
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
    minWoo: 0.3,
    maxWoo: 0.8,
    minChaos: 0.2,
    maxChaos: 0.9
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
