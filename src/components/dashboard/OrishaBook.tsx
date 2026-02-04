'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MessageCircle,
    Play,
    Pause,
    Plus,
    Sparkles,
    Clock,
    Users,
    Trash2,
    Settings,
    Send,
    Search,
    Globe,
    Shuffle,
    Image,
    RefreshCw
} from 'lucide-react';
import { OrishaName } from '@/types';
import { EXPANDED_ORISHA_PERSONAS, ALL_ORISHA_NAMES } from '@/data/orishasExpanded';

const TOPIC_CATEGORIES = [
    'General',
    'Financial',
    'Political',
    'Astrological',
    'Social',
    'Technological',
    'Personal',
    'Spiritual',
    'Economical',
    'Physical',
    'Psychological'
] as const;

type TopicCategory = typeof TOPIC_CATEGORIES[number];

interface OrishaMessage {
    id: string;
    sender: OrishaName;
    content: string;
    timestamp: Date;
    imageUrl?: string;
}

interface ConversationThread {
    id: string;
    topic: string;
    participants: OrishaName[];
    messages: OrishaMessage[];
    createdAt: Date;
    isActive: boolean;
}

const STORAGE_KEY = 'orishabook-threads';
const HEARTBEAT_INTERVAL = 10000; // 10 seconds for rapid conversation

export function OrishaBook() {
    const [threads, setThreads] = useState<ConversationThread[]>([]);
    const [selectedThread, setSelectedThread] = useState<string | null>(null);
    const [isRunning, setIsRunning] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showNewThread, setShowNewThread] = useState(false);
    const [newTopic, setNewTopic] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<TopicCategory | null>(null);
    const [isSearching, setIsSearching] = useState(false);
    const [selectedParticipants, setSelectedParticipants] = useState<OrishaName[]>(['ESU']);
    const [countdown, setCountdown] = useState(HEARTBEAT_INTERVAL / 1000);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const countdownRef = useRef<NodeJS.Timeout | null>(null);

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Convert date strings back to Date objects
                const hydrated = parsed.map((t: any) => ({
                    ...t,
                    createdAt: new Date(t.createdAt),
                    messages: t.messages.map((m: any) => ({
                        ...m,
                        timestamp: new Date(m.timestamp)
                    }))
                }));
                setThreads(hydrated);
            } catch (e) {
                console.error('Failed to load OrishaBook threads:', e);
            }
        }
    }, []);

    // Save to localStorage when threads change
    useEffect(() => {
        if (threads.length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(threads));
        }
    }, [threads]);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [threads, selectedThread]);

    // Generate next Orisha response
    const generateNextResponse = useCallback(async (searchWeb = false) => {
        if (!selectedThread || isLoading) return;

        const thread = threads.find(t => t.id === selectedThread);
        if (!thread || thread.messages.length === 0) return;

        setIsLoading(true);

        // Determine who should speak next - rotate through participants
        // ESU is always included
        const lastMessage = thread.messages[thread.messages.length - 1];
        const participantsExcludingLast = thread.participants.filter(p => p !== lastMessage.sender);
        const nextSpeaker = participantsExcludingLast[Math.floor(Math.random() * participantsExcludingLast.length)] || 'ESU';

        // Optional: Search the web for new info if requested
        let webContext = '';
        if (searchWeb) {
            try {
                const categories = ['General', 'Financial', 'Political', 'Social', 'Technological', 'Spiritual'];
                const randomCategory = categories[Math.floor(Math.random() * categories.length)];
                const searchResponse = await fetch('/api/web-search', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ topic: randomCategory })
                });
                if (searchResponse.ok) {
                    const searchData = await searchResponse.json();
                    webContext = `\n\n[NEW INFORMATION FOUND]: ${searchData.headline}\n${searchData.summary}`;
                }
            } catch (e) {
                console.error('Web search during conversation failed:', e);
            }
        }

        // Build conversation history
        const apiMessages = thread.messages.slice(-10).map(m => ({
            role: 'assistant' as const,
            content: `[${m.sender}]: ${m.content}`,
            sender: m.sender
        }));

        try {
            // Decide if this Orisha should generate an image (20% chance or if conversation mentions wanting to show something)
            const shouldGenerateImage = Math.random() < 0.15;

            const response = await fetch('/api/orisha-chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    orisha: nextSpeaker,
                    messages: apiMessages,
                    topic: thread.topic + webContext,
                    isOrishaToOrisha: true,
                    targetOrisha: lastMessage.sender,
                    // Hint to the AI that they can describe images
                    imageHint: shouldGenerateImage ? 'You may describe a vivid image or vision you want to share with the council. Start with [VISION]: followed by a detailed description of what you see.' : ''
                })
            });

            if (!response.ok) throw new Error('Failed to get response');

            const data = await response.json();
            let messageContent = data.message;
            let imageUrl: string | undefined;

            // Check if the response contains a vision/image description
            const visionMatch = messageContent.match(/\[VISION\]:\s*(.+?)(?=\n\n|\n[A-Z]|$)/is);
            if (visionMatch || shouldGenerateImage) {
                const imagePrompt = visionMatch?.[1] || messageContent.slice(0, 200);
                try {
                    const imageResponse = await fetch('/api/orisha-image', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            prompt: imagePrompt,
                            orisha: nextSpeaker
                        })
                    });
                    if (imageResponse.ok) {
                        const imageData = await imageResponse.json();
                        if (imageData.imageUrl) {
                            imageUrl = imageData.imageUrl;
                            // Clean up the vision marker from the message if present
                            messageContent = messageContent.replace(/\[VISION\]:\s*/i, '');
                        }
                    }
                } catch (e) {
                    console.error('Image generation failed:', e);
                }
            }

            const newMessage: OrishaMessage = {
                id: crypto.randomUUID(),
                sender: nextSpeaker,
                content: messageContent,
                timestamp: new Date(),
                imageUrl
            };

            setThreads(prev => prev.map(t =>
                t.id === selectedThread
                    ? { ...t, messages: [...t.messages, newMessage] }
                    : t
            ));
        } catch (error) {
            console.error('OrishaBook response error:', error);
        } finally {
            setIsLoading(false);
            setCountdown(HEARTBEAT_INTERVAL / 1000);
        }
    }, [selectedThread, isLoading, threads]);

    // Heartbeat timer
    useEffect(() => {
        if (isRunning && selectedThread) {
            // Countdown timer
            countdownRef.current = setInterval(() => {
                setCountdown(prev => Math.max(0, prev - 1));
            }, 1000);

            // Main heartbeat
            intervalRef.current = setInterval(() => {
                generateNextResponse();
            }, HEARTBEAT_INTERVAL);

            return () => {
                if (intervalRef.current) clearInterval(intervalRef.current);
                if (countdownRef.current) clearInterval(countdownRef.current);
            };
        }
    }, [isRunning, selectedThread, generateNextResponse]);

    const createThread = async () => {
        if (!newTopic.trim() && !selectedCategory) return;

        let topicToUse = newTopic.trim();

        // If using category, search the web first
        if (selectedCategory && !newTopic.trim()) {
            setIsSearching(true);
            try {
                const searchResponse = await fetch('/api/web-search', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ topic: selectedCategory })
                });

                if (searchResponse.ok) {
                    const searchData = await searchResponse.json();
                    topicToUse = `${searchData.headline}\n\n${searchData.summary}\n\nAngle: ${searchData.angle}`;
                } else {
                    topicToUse = `Current ${selectedCategory.toLowerCase()} events and their spiritual implications`;
                }
            } catch (error) {
                console.error('Web search failed:', error);
                topicToUse = `Current ${selectedCategory.toLowerCase()} events and their spiritual implications`;
            } finally {
                setIsSearching(false);
            }
        }

        // Ensure ESU is always included
        const participants = selectedParticipants.includes('ESU')
            ? selectedParticipants
            : ['ESU', ...selectedParticipants] as OrishaName[];

        const newThread: ConversationThread = {
            id: crypto.randomUUID(),
            topic: topicToUse,
            participants,
            messages: [],
            createdAt: new Date(),
            isActive: true
        };

        setThreads(prev => [newThread, ...prev]);
        setSelectedThread(newThread.id);
        setShowNewThread(false);
        setNewTopic('');
        setSelectedCategory(null);
        setSelectedParticipants(['ESU']);

        // Generate initial message from ESU then auto-start conversation
        setTimeout(async () => {
            setIsLoading(true);
            try {
                const response = await fetch('/api/orisha-chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        orisha: 'ESU',
                        messages: [{ role: 'user', content: `You are Esu the trickster, initiating discussion with fellow Orishas about this current event:\n\n${topicToUse}\n\nStart the conversation with your divine perspective, challenge assumptions, and invite the other Orishas to weigh in.` }],
                        topic: topicToUse
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    const firstMessage: OrishaMessage = {
                        id: crypto.randomUUID(),
                        sender: 'ESU',
                        content: data.message,
                        timestamp: new Date()
                    };
                    setThreads(prev => prev.map(t =>
                        t.id === newThread.id
                            ? { ...t, messages: [firstMessage] }
                            : t
                    ));

                    // Auto-start the conversation heartbeat
                    setIsRunning(true);
                    setCountdown(HEARTBEAT_INTERVAL / 1000);
                }
            } catch (error) {
                console.error('Failed to start thread:', error);
            } finally {
                setIsLoading(false);
            }
        }, 100);
    };

    const deleteThread = (threadId: string) => {
        setThreads(prev => prev.filter(t => t.id !== threadId));
        if (selectedThread === threadId) {
            setSelectedThread(null);
        }
    };

    const toggleParticipant = (orisha: OrishaName) => {
        if (orisha === 'ESU') return; // ESU cannot be removed
        setSelectedParticipants(prev =>
            prev.includes(orisha)
                ? prev.filter(p => p !== orisha)
                : [...prev, orisha]
        );
    };

    const currentThread = threads.find(t => t.id === selectedThread);

    return (
        <div className="flex h-[calc(100vh-200px)] max-h-[800px] gap-4">
            {/* Thread List Sidebar */}
            <div className="w-80 flex flex-col bg-white/5 rounded-xl border border-white/10">
                <div className="p-4 border-b border-white/10">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <MessageCircle className="w-5 h-5 text-purple-400" />
                            OrishaBook
                        </h2>
                        <button
                            onClick={() => setShowNewThread(true)}
                            className="p-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                    <p className="text-xs text-gray-500">
                        Watch Orishas converse autonomously
                    </p>
                </div>

                <div className="flex-1 overflow-y-auto p-2 space-y-2">
                    {threads.length === 0 ? (
                        <div className="text-center py-8 text-gray-500 text-sm">
                            No conversations yet.<br />Create one to begin.
                        </div>
                    ) : (
                        threads.map(thread => (
                            <div
                                key={thread.id}
                                onClick={() => setSelectedThread(thread.id)}
                                className={`w-full p-3 rounded-lg text-left transition-all group cursor-pointer ${selectedThread === thread.id
                                    ? 'bg-purple-500/20 border border-purple-500/50'
                                    : 'bg-white/5 hover:bg-white/10 border border-transparent'
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-1">
                                    <h3 className="text-sm font-medium text-white truncate flex-1">
                                        {thread.topic}
                                    </h3>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); deleteThread(thread.id); }}
                                        className="opacity-0 group-hover:opacity-100 p-1 hover:text-red-400 transition-all"
                                    >
                                        <Trash2 className="w-3 h-3" />
                                    </button>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <Users className="w-3 h-3" />
                                    <span>{thread.participants.length} Orishas</span>
                                    <span>•</span>
                                    <span>{thread.messages.length} messages</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Main Conversation Area */}
            <div className="flex-1 flex flex-col bg-white/5 rounded-xl border border-white/10">
                {showNewThread ? (
                    // New Thread Form
                    <div className="p-6 space-y-6">
                        <h3 className="text-xl font-bold text-white">Start New Conversation</h3>

                        {/* Topic Category Dropdown */}
                        <div>
                            <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
                                <Globe className="w-4 h-4" />
                                Topic Category (Esu searches the web for current news)
                            </label>
                            <div className="flex gap-2">
                                <select
                                    value={selectedCategory || ''}
                                    onChange={(e) => {
                                        setSelectedCategory(e.target.value as TopicCategory || null);
                                        if (e.target.value) setNewTopic(''); // Clear custom topic if category selected
                                    }}
                                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                                             focus:outline-none focus:border-purple-500 appearance-none cursor-pointer"
                                >
                                    <option value="" className="bg-slate-900">Select a category...</option>
                                    {TOPIC_CATEGORIES.map(cat => (
                                        <option key={cat} value={cat} className="bg-slate-900">{cat}</option>
                                    ))}
                                </select>
                                <button
                                    onClick={() => {
                                        const randomCat = TOPIC_CATEGORIES[Math.floor(Math.random() * TOPIC_CATEGORIES.length)];
                                        setSelectedCategory(randomCat);
                                        setNewTopic('');
                                    }}
                                    className="p-3 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors"
                                    title="Pick random category"
                                >
                                    <Shuffle className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* OR divider */}
                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-px bg-white/10" />
                            <span className="text-gray-500 text-sm">OR</span>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>

                        {/* Custom Topic Input */}
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Custom Topic</label>
                            <input
                                type="text"
                                value={newTopic}
                                onChange={(e) => {
                                    setNewTopic(e.target.value);
                                    if (e.target.value) setSelectedCategory(null); // Clear category if typing custom
                                }}
                                placeholder="e.g., The future of AI and humanity..."
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                                         placeholder-gray-500 focus:outline-none focus:border-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-2">
                                Select Participants (Esu always included)
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {ALL_ORISHA_NAMES.map(orisha => {
                                    const persona = EXPANDED_ORISHA_PERSONAS[orisha];
                                    const isSelected = selectedParticipants.includes(orisha);
                                    const isEsu = orisha === 'ESU';

                                    return (
                                        <button
                                            key={orisha}
                                            onClick={() => toggleParticipant(orisha)}
                                            disabled={isEsu}
                                            className={`px-3 py-1.5 rounded-lg text-sm transition-all ${isSelected
                                                ? 'text-white border'
                                                : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-transparent'
                                                } ${isEsu ? 'cursor-not-allowed' : ''}`}
                                            style={isSelected ? {
                                                backgroundColor: `${persona.color}30`,
                                                borderColor: `${persona.color}50`
                                            } : {}}
                                        >
                                            {orisha}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowNewThread(false)}
                                className="px-4 py-2 rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={createThread}
                                disabled={(!newTopic.trim() && !selectedCategory) || selectedParticipants.length < 2 || isSearching}
                                className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 
                                         transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {isSearching ? (
                                    <>
                                        <Search className="w-4 h-4 animate-pulse" />
                                        Searching Web...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-4 h-4" />
                                        Begin Conversation
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                ) : currentThread ? (
                    // Thread View
                    <>
                        {/* Thread Header */}
                        <div className="p-4 border-b border-white/10 flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-white">{currentThread.topic}</h3>
                                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                    {currentThread.participants.map(p => (
                                        <span
                                            key={p}
                                            className="px-2 py-0.5 rounded"
                                            style={{
                                                backgroundColor: `${EXPANDED_ORISHA_PERSONAS[p].color}20`,
                                                color: EXPANDED_ORISHA_PERSONAS[p].color
                                            }}
                                        >
                                            {p}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                {isRunning && (
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <Clock className="w-4 h-4" />
                                        <span>Next in {countdown}s</span>
                                    </div>
                                )}
                                <button
                                    onClick={() => generateNextResponse(true)}
                                    disabled={isLoading}
                                    className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 
                                             transition-colors disabled:opacity-50"
                                    title="Search web for new topic"
                                >
                                    <RefreshCw className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => {
                                        setIsRunning(!isRunning);
                                        setCountdown(HEARTBEAT_INTERVAL / 1000);
                                    }}
                                    className={`p-2 rounded-lg transition-colors ${isRunning
                                        ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                                        : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                                        }`}
                                >
                                    {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                                </button>
                                <button
                                    onClick={() => generateNextResponse()}
                                    disabled={isLoading}
                                    className="p-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 
                           transition-colors disabled:opacity-50"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            <AnimatePresence>
                                {currentThread.messages.map((message, index) => {
                                    const persona = EXPANDED_ORISHA_PERSONAS[message.sender];

                                    return (
                                        <motion.div
                                            key={message.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex items-start gap-3"
                                        >
                                            <div
                                                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold"
                                                style={{
                                                    backgroundColor: `${persona.color}30`,
                                                    color: persona.color
                                                }}
                                            >
                                                {message.sender.slice(0, 2)}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-baseline gap-2 mb-1">
                                                    <span className="font-medium text-white">{message.sender}</span>
                                                    <span className="text-xs text-gray-500">
                                                        {message.timestamp.toLocaleTimeString()}
                                                    </span>
                                                </div>
                                                <div
                                                    className="p-3 rounded-xl text-sm leading-relaxed"
                                                    style={{ backgroundColor: `${persona.color}10` }}
                                                >
                                                    <p className="text-gray-200">{message.content}</p>
                                                    {message.imageUrl && (
                                                        <div className="mt-3">
                                                            <img
                                                                src={message.imageUrl}
                                                                alt="Vision from Orisha"
                                                                className="rounded-lg max-w-full max-h-64 object-cover border border-white/10"
                                                            />
                                                            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                                                <Image className="w-3 h-3" />
                                                                Divine Vision
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>

                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-center gap-2 text-gray-500"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                        <MessageCircle className="w-5 h-5 text-purple-400 animate-pulse" />
                                    </div>
                                    <span className="text-sm">An Orisha is responding...</span>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>
                    </>
                ) : (
                    // Empty State
                    <div className="flex-1 flex items-center justify-center text-center p-8">
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                                <MessageCircle className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Welcome to OrishaBook</h3>
                            <p className="text-gray-400 max-w-md">
                                Create a conversation thread and watch as the Orishas discuss topics autonomously.
                                Esu, the divine trickster, always participates to keep things interesting.
                            </p>
                            <button
                                onClick={() => setShowNewThread(true)}
                                className="mt-6 px-6 py-3 rounded-lg bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 
                         transition-colors flex items-center gap-2 mx-auto"
                            >
                                <Plus className="w-5 h-5" />
                                Create First Conversation
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
