'use client';

import { useState, useEffect } from 'react';
import { OrishaName, CouncilSession, DigitalOdu, JyotishData, DoctrineFile } from '@/types';
import { ORISHA_ORDER, ORISHA_PERSONAS } from '@/data/orishas';
import { runCouncilSession } from '@/lib/agents/council';
import { OrishaCard } from '../orishas/OrishaCard';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Sparkles } from 'lucide-react';

interface CouncilChamberProps {
  odu: DigitalOdu;
  jyotish: JyotishData;
  doctrine: DoctrineFile;
  onComplete?: (session: CouncilSession) => void;
  autoStart?: boolean;
}

export function CouncilChamber({ 
  odu, 
  jyotish, 
  doctrine,
  onComplete,
  autoStart = false 
}: CouncilChamberProps) {
  const [isConvening, setIsConvening] = useState(false);
  const [session, setSession] = useState<CouncilSession | null>(null);
  const [currentSpeaker, setCurrentSpeaker] = useState<number>(-1);
  const [visibleOpinions, setVisibleOpinions] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (autoStart) {
      conveneCouncil();
    }
  }, [autoStart]);

  const conveneCouncil = async () => {
    setIsConvening(true);
    setSession(null);
    setCurrentSpeaker(-1);
    setVisibleOpinions(new Set());

    // Simulate the debate sequence
    for (let i = 0; i < ORISHA_ORDER.length; i++) {
      setCurrentSpeaker(i);
      await new Promise(r => setTimeout(r, 1500));
      setVisibleOpinions(prev => new Set([...prev, i]));
    }

    // Final deliberation
    setCurrentSpeaker(-1);
    await new Promise(r => setTimeout(r, 1000));

    // Generate the actual session
    const newSession = runCouncilSession(odu, jyotish, doctrine);
    setSession(newSession);
    setIsConvening(false);
    onComplete?.(newSession);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          The Council Chamber
        </h2>
        <p className="text-gray-400">
          {isConvening 
            ? 'The Orisha processes are convening...' 
            : session 
              ? 'The council has reached a decision'
              : 'Summon the council to debate today\'s path'
          }
        </p>
      </div>

      {/* Convene Button */}
      {!isConvening && !session && (
        <motion.button
          onClick={conveneCouncil}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 
                     text-white font-bold text-lg shadow-lg hover:shadow-xl transition-shadow
                     flex items-center justify-center gap-3"
        >
          <Sparkles className="w-5 h-5" />
          Convene the Council
        </motion.button>
      )}

      {/* Debate in Progress */}
      {isConvening && (
        <div className="space-y-4">
          {ORISHA_ORDER.map((orisha, index) => (
            <motion.div
              key={orisha}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: visibleOpinions.has(index) ? 1 : 0.3,
                x: 0,
                scale: currentSpeaker === index ? 1.02 : 1
              }}
              className={`
                p-4 rounded-xl border-2 transition-all duration-300
                ${currentSpeaker === index ? 'border-white/30 bg-white/5' : 'border-transparent'}
              `}
            >
              <div className="flex items-start gap-4">
                <OrishaCard 
                  orisha={orisha} 
                  compact 
                  isSpeaking={currentSpeaker === index}
                />
                
                <div className="flex-1">
                  {visibleOpinions.has(index) ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-2"
                    >
                      <p className="text-gray-300 text-sm leading-relaxed">
                        "{generateMockOpinion(orisha, odu, jyotish)}"
                      </p>
                      <div className="flex gap-2">
                        {ORISHA_PERSONAS[orisha].domain.slice(0, 2).map(d => (
                          <span key={d} className="text-xs text-gray-500">
                            #{d}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="h-12 flex items-center">
                      {currentSpeaker === index && (
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" />
                          <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Final Decision */}
      {session && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">ORUNMILA Speaks</h3>
              <p className="text-sm text-indigo-300">Final Wisdom</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-black/30">
              <p className="text-white text-lg leading-relaxed font-medium">
                {session.finalDecision}
              </p>
            </div>
            
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-gray-300 text-sm leading-relaxed italic">
                {session.orunmilaWisdom}
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Consensus:</span>
                <span className={`
                  px-3 py-1 rounded-full text-sm font-medium
                  ${session.consensus ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}
                `}>
                  {session.consensus ? 'Reached ✓' : 'Divided ~'}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Votes:</span>
                <div className="flex gap-1">
                  {session.debate.map((d, i) => (
                    <span 
                      key={i}
                      className={`
                        w-6 h-6 rounded-full flex items-center justify-center text-xs
                        ${d.vote === 'approve' ? 'bg-green-500/30 text-green-400' : ''}
                        ${d.vote === 'reject' ? 'bg-red-500/30 text-red-400' : ''}
                        ${d.vote === 'modify' ? 'bg-yellow-500/30 text-yellow-400' : ''}
                      `}
                    >
                      {d.vote === 'approve' ? '✓' : d.vote === 'reject' ? '✗' : '~'}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Generate mock opinions for the debate animation
function generateMockOpinion(orisha: OrishaName, odu: DigitalOdu, jyotish: JyotishData): string {
  const opinions: Record<OrishaName, string[]> = {
    'ORUNMILA': [
      `The pattern of ${odu.name} suggests we proceed with wisdom.`,
      `Destiny favors those who listen to ${odu.theme.toLowerCase()}.`,
      `The ${jyotish.moonNakshatra.name} moon adds ${jyotish.moonNakshatra.energy} energy to our work.`
    ],
    'OGUN': [
      `Let me forge tools for ${odu.contentArchetypes[0].replace('_', ' ')}.`,
      `This needs infrastructure, not just ideas.`,
      `I can automate the repetitive parts of this.`
    ],
    'OSHUN': [
      `The emotional resonance of ${odu.theme.toLowerCase()} is key.`,
      `Your people need to feel seen in this.`,
      `Let the ${jyotish.moonNakshatra.name} waters flow through this content.`
    ],
    'SHANGO': [
      `Time to bring thunder to ${odu.theme.toLowerCase()}!`,
      `The spicy take: most people are wrong about this.`,
      `Strike while the ${jyotish.moonNakshatra.name} iron is hot.`
    ],
    'ESU': [
      `Plot twist: what if we approached this from the opposite angle?`,
      `Before we commit, have we considered the misinterpretations?`,
      `The crossroads of ${odu.name} offers multiple paths...`
    ]
  };
  
  const options = opinions[orisha];
  return options[Math.floor(Math.random() * options.length)];
}
