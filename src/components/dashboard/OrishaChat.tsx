'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  Send,
  Sparkles,
  TrendingUp,
  Scale,
  Globe,
  Stars,
  User,
  Bot,
  ChevronDown,
  RefreshCw,
  Info,
  Zap
} from 'lucide-react';
import { OrishaName, OrishaPersona } from '@/types';
import { EXPANDED_ORISHA_PERSONAS, ALL_ORISHA_NAMES, getOrishaExpertiseAreas } from '@/data/orishasExpanded';
import {
  generateOrishaResponse,
  generateConversationStarter,
  getCurrentWorldEvents,
  Message,
  ConversationContext
} from '@/lib/agents/orishaConversation';
import { getRealTimeTransits } from '@/lib/jyotish/ephemeris';
import { castOduIfa } from '@/data/oduIfa';

type ChatTopic = 'general' | 'financial' | 'political' | 'social' | 'technological' | 'astrological' | 'personal';

interface ChatSession {
  orisha: OrishaName;
  messages: Message[];
  topic: ChatTopic;
}

export function OrishaChat() {
  const [selectedOrisha, setSelectedOrisha] = useState<OrishaName | null>(null);
  const [chatSessions, setChatSessions] = useState<Record<OrishaName, ChatSession>>({} as Record<OrishaName, ChatSession>);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<ChatTopic>('general');
  const [isLoading, setIsLoading] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatSessions, selectedOrisha]);

  const startChat = (orisha: OrishaName) => {
    setSelectedOrisha(orisha);

    if (!chatSessions[orisha]) {
      // Generate opening message
      const starter = generateConversationStarter(orisha, selectedTopic);
      const newSession: ChatSession = {
        orisha,
        topic: selectedTopic,
        messages: [
          {
            sender: orisha,
            content: starter,
            timestamp: new Date()
          }
        ]
      };
      setChatSessions(prev => ({ ...prev, [orisha]: newSession }));
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || !selectedOrisha || isLoading) return;

    setIsLoading(true);
    const userMessage: Message = {
      sender: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    // Update chat with user message
    setChatSessions(prev => ({
      ...prev,
      [selectedOrisha]: {
        ...prev[selectedOrisha],
        messages: [...prev[selectedOrisha].messages, userMessage]
      }
    }));

    setInputMessage('');

    // Build conversation history for API
    const currentMessages = chatSessions[selectedOrisha]?.messages || [];
    const apiMessages = currentMessages.map(m => ({
      role: m.sender === 'user' ? 'user' as const : 'assistant' as const,
      content: m.content
    }));

    // Add the new user message
    apiMessages.push({ role: 'user' as const, content: inputMessage });

    try {
      const response = await fetch('/api/orisha-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orisha: selectedOrisha,
          messages: apiMessages,
          topic: selectedTopic
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const orishaMessage: Message = {
        sender: selectedOrisha,
        content: data.message,
        timestamp: new Date()
      };

      setChatSessions(prev => ({
        ...prev,
        [selectedOrisha]: {
          ...prev[selectedOrisha],
          messages: [...prev[selectedOrisha].messages, orishaMessage]
        }
      }));
    } catch (error) {
      console.error('Error getting Orisha response:', error);
      // Fallback to static response on error
      const orishaMessage: Message = {
        sender: selectedOrisha,
        content: 'I sense a disturbance in the connection between realms. Please try again.',
        timestamp: new Date()
      };
      setChatSessions(prev => ({
        ...prev,
        [selectedOrisha]: {
          ...prev[selectedOrisha],
          messages: [...prev[selectedOrisha].messages, orishaMessage]
        }
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const getTopicIcon = (topic: ChatTopic) => {
    switch (topic) {
      case 'financial': return TrendingUp;
      case 'political': return Scale;
      case 'astrological': return Stars;
      case 'social': return Globe;
      default: return Sparkles;
    }
  };

  const getOrishaIcon = (orisha: OrishaName) => {
    const icons: Record<string, any> = {
      'ORUNMILA': Scroll,
      'OGUN': Zap,
      'OSHUN': Sparkles,
      'SHANGO': Zap,
      'ESU': MessageCircle,
      'OBATALA': Sparkles,
      'YEMOJA': Globe,
      'OYA': Wind,
      'OLOKUN': Anchor,
      'OSANYIN': Leaf,
      'BABALUAYE': Heart,
      'OSHUMARE': Rainbow,
      'AGANJU': Mountain,
      'AJE': Coins,
      'OCHOSI': Target,
      'IBEJI': Users,
      'NANA_BURUKU': TreePine,
      'ODUA': Crown,
      'AJA': Trees
    };
    return icons[orisha] || Sparkles;
  };

  // Import additional icons
  const Scroll = MessageCircle;
  const Wind = MessageCircle;
  const Anchor = MessageCircle;
  const Leaf = MessageCircle;
  const Heart = MessageCircle;
  const Rainbow = MessageCircle;
  const Mountain = MessageCircle;
  const Coins = MessageCircle;
  const Target = MessageCircle;
  const Users = MessageCircle;
  const TreePine = MessageCircle;
  const Crown = MessageCircle;
  const Trees = MessageCircle;

  if (!selectedOrisha) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center py-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-4">
            <MessageCircle className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Orisha Council</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Converse with the Orishas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Speak with any Orisha about world events, financial markets, political developments,
            astrological transits, or any topic. Each Orisha responds with their distinct personality
            and domain expertise.
          </p>
        </div>

        {/* Topic Selector */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <p className="text-sm text-gray-500 mb-3">Select a conversation topic:</p>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'general', label: 'General', icon: Sparkles },
              { id: 'financial', label: 'Financial', icon: TrendingUp },
              { id: 'political', label: 'Political', icon: Scale },
              { id: 'astrological', label: 'Astrological', icon: Stars },
              { id: 'social', label: 'Social', icon: Globe },
              { id: 'technological', label: 'Technology', icon: Bot },
              { id: 'personal', label: 'Personal', icon: User },
            ].map(topic => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id as ChatTopic)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${selectedTopic === topic.id
                    ? 'bg-purple-500/30 text-purple-300 border border-purple-500/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-transparent'
                  }
                `}
              >
                <topic.icon className="w-4 h-4" />
                {topic.label}
              </button>
            ))}
          </div>
        </div>

        {/* Orisha Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {ALL_ORISHA_NAMES.map(orisha => {
            const persona = EXPANDED_ORISHA_PERSONAS[orisha];
            const Icon = getOrishaIcon(orisha);

            return (
              <motion.button
                key={orisha}
                onClick={() => startChat(orisha)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 
                         transition-all text-left group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${persona.color}30` }}
                >
                  <Icon className="w-6 h-6" style={{ color: persona.color }} />
                </div>
                <h3 className="font-bold text-white group-hover:text-purple-300 transition-colors">
                  {orisha}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {persona.title}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {persona.domain.slice(0, 2).map(d => (
                    <span key={d} className="text-xs text-gray-600 px-1.5 py-0.5 rounded bg-white/5">
                      {d}
                    </span>
                  ))}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Info Panel */}
        {showInfo && (
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-amber-300 mb-1">About Orisha Conversations</h4>
                <p className="text-sm text-amber-200/70">
                  Each Orisha has access to real-time astronomical data, world event patterns, and their
                  specific domain expertise. They respond according to their traditional characteristics
                  and mythological personalities. Select an Orisha to begin a conversation about your
                  chosen topic.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  const currentSession = chatSessions[selectedOrisha];
  const persona = EXPANDED_ORISHA_PERSONAS[selectedOrisha];

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] max-h-[800px]">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5 rounded-t-xl">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSelectedOrisha(null)}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400"
          >
            <ChevronDown className="w-5 h-5 rotate-90" />
          </button>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${persona.color}30` }}
          >
            {(() => {
              const Icon = getOrishaIcon(selectedOrisha);
              return <Icon className="w-5 h-5" style={{ color: persona.color }} />;
            })()}
          </div>
          <div>
            <h3 className="font-bold text-white">{selectedOrisha}</h3>
            <p className="text-xs text-gray-400">{persona.title}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Topic:</span>
          <span className="text-xs text-purple-400 capitalize">{selectedTopic}</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {currentSession?.messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start gap-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${message.sender === 'user'
                ? 'bg-purple-500/20'
                : ''
                }`}
                style={message.sender !== 'user' ? { backgroundColor: `${persona.color}30` } : {}}
              >
                {message.sender === 'user' ? (
                  <User className="w-4 h-4 text-purple-400" />
                ) : (
                  (() => {
                    const Icon = getOrishaIcon(message.sender as OrishaName);
                    return <Icon className="w-4 h-4" style={{ color: persona.color }} />;
                  })()
                )}
              </div>

              {/* Message Bubble */}
              <div className={`p-3 rounded-xl ${message.sender === 'user'
                ? 'bg-purple-500/20 text-purple-100'
                : 'bg-white/10 text-gray-200'
                }`}>
                <p className="text-sm leading-relaxed">{message.content}</p>
                {message.metadata && (
                  <div className="mt-2 pt-2 border-t border-white/10 flex items-center gap-2">
                    <span className="text-xs text-gray-500">
                      Confidence: {Math.round((message.metadata.confidence || 0) * 100)}%
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-gray-500"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${persona.color}30` }}
            >
              <RefreshCw className="w-4 h-4 animate-spin" style={{ color: persona.color }} />
            </div>
            <span className="text-sm">{selectedOrisha} is consulting...</span>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/10 bg-white/5 rounded-b-xl">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder={`Ask ${selectedOrisha} about ${selectedTopic}...`}
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                     placeholder-gray-500 focus:outline-none focus:border-purple-500"
          />
          <button
            onClick={sendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="p-3 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 
                     transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Ask about world events, markets, politics, or any topic. Each Orisha responds from their domain of expertise.
        </p>
      </div>
    </div>
  );
}
